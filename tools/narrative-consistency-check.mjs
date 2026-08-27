// Checks every profile's long-form narrative text (curated or AI-drafted
// overview paragraphs and field-note articles) against that genus's current
// reviewed structured record — age, mass, diet, taxonomic validity — and
// flags contradictions. This is an internal-consistency check, not a
// primary-literature review: it catches text that disagrees with data
// already in this repository, not text that is wrong in ways the record
// itself doesn't capture.
//
// Usage: node tools/narrative-consistency-check.mjs [--out=path.md]
// Requires a local static server (npm run audit spins one up for the smoke
// test; for a standalone run, `python3 -m http.server 8080` from the repo
// root first, then set BASE_URL).

import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const OUT = process.argv.find(arg => arg.startsWith('--out='))?.slice(6) || '';
const BASE_URL = process.env.BASE_URL || '';

function cachedChromiumExecutable() {
  if (process.env.PLAYWRIGHT_EXECUTABLE_PATH) return process.env.PLAYWRIGHT_EXECUTABLE_PATH;
  return undefined;
}

async function withServer(run) {
  if (BASE_URL) return run(BASE_URL);
  const port = 34567 + Math.floor(Math.random() * 1000);
  const server = spawn('python3', ['-m', 'http.server', String(port), '--directory', ROOT], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 700));
  try {
    return await run(`http://localhost:${port}`);
  } finally {
    server.kill();
  }
}

function fullText(d) {
  return [...d.overview, ...d.articles.map(a => `${a.title}. ${a.body}`)].join(' ');
}

function extractMaRanges(text) {
  const ranges = [];
  const rangeRe = /(\d{1,3}(?:\.\d+)?)\s*[-–—to]{1,3}\s*(\d{1,3}(?:\.\d+)?)\s*(?:million years|Ma\b)/gi;
  let m;
  while ((m = rangeRe.exec(text))) ranges.push([parseFloat(m[1]), parseFloat(m[2])]);
  return ranges;
}

function parseRecordRange(mya) {
  const nums = String(mya || '').match(/\d+(?:\.\d+)?/g)?.map(Number);
  if (!nums || !nums.length) return null;
  return [Math.max(...nums), Math.min(...nums)];
}

function extractMassKg(text) {
  const out = [];
  let m;
  const kgRe = /(\d[\d,]*(?:\.\d+)?)\s*kg\b/gi;
  while ((m = kgRe.exec(text))) out.push(parseFloat(m[1].replace(/,/g, '')));
  const tRe = /(\d[\d,]*(?:\.\d+)?)\s*(?:tonnes|tons)\b/gi;
  while ((m = tRe.exec(text))) out.push(parseFloat(m[1].replace(/,/g, '')) * 1000);
  return out;
}

function dietWord(text) {
  const t = text.toLowerCase();
  if (/\bherbivor/.test(t)) return 'Herbivore';
  if (/\bcarnivor/.test(t)) return 'Carnivore';
  if (/\bomnivor/.test(t)) return 'Omnivore';
  return null;
}

function checkProfile(d) {
  const text = fullText(d);
  if (!text.trim()) return { blocking: [], info: [] };
  const blocking = [];
  const info = [];

  const recordRange = parseRecordRange(d.reviewRecord?.age || d.record.mya);
  const textRanges = extractMaRanges(text);
  if (recordRange && textRanges.length) {
    const [rHi, rLo] = recordRange;
    const allBad = textRanges.every(([a, b]) => {
      const hi = Math.max(a, b), lo = Math.min(a, b);
      return hi < rLo - 5 || lo > rHi + 5;
    });
    if (allBad) blocking.push(`age: text mentions ${textRanges.map(r => r.join('-')).join(', ')} Ma vs record ${rLo}-${rHi} Ma`);
  }

  const recordMass = d.reviewRecord?.massKg ?? d.record.massKg;
  const textMasses = extractMassKg(text);
  if (recordMass && textMasses.length) {
    const allBad = textMasses.every(v => Math.abs(v - recordMass) / recordMass > 0.4);
    if (allBad) blocking.push(`mass: text mentions ${textMasses.join(', ')} kg vs record ${recordMass} kg`);
  }

  const recordLength = d.reviewRecord?.length ?? d.record.length;
  const textLengths = [];
  {
    const mRe = /(\d[\d,]*(?:\.\d+)?)\s*(?:metres|meters|m\b)(?!\w)/gi;
    let m;
    while ((m = mRe.exec(text))) {
      const v = parseFloat(m[1].replace(/,/g, ''));
      if (v > 0 && v < 60) textLengths.push(v);
    }
  }
  if (recordLength && textLengths.length >= 2) {
    const allBad = textLengths.every(v => Math.abs(v - recordLength) / recordLength > 0.5);
    // Informational only: often a skull/limb length mentioned alongside body
    // length, not a real disagreement, so this never blocks restoration.
    if (allBad) info.push(`length: text mentions ${textLengths.join(', ')} m vs record ${recordLength} m — check whether this is a body-length claim`);
  }

  const recordDiet = d.reviewRecord?.diet || d.record.diet;
  const textDiet = dietWord(text);
  if (recordDiet && textDiet && recordDiet !== 'Not listed by NHM' && textDiet.toLowerCase() !== recordDiet.toLowerCase()) {
    blocking.push(`diet: text says ${textDiet}, record says ${recordDiet}`);
  }

  // A hedge word appearing somewhere in the text isn't good enough here: text
  // can mention "debated" in one sentence and then confidently assert the
  // genus is a valid, distinct taxon in the next (this happened in practice —
  // Saurophaganax's AI-drafted overview called the classification "debated"
  // but then stated "current consensus... treats it as a separate genus",
  // directly contradicting its actual 2024 nomen dubium reassessment). Getting
  // this right requires reading the claim, not pattern-matching for caution
  // words, so every taxonomically disputed genus is blocked unconditionally
  // pending a real read-through rather than trusting a keyword heuristic.
  if (['nomen_dubium', 'synonymised', 'contested'].includes(d.record.validity)) {
    blocking.push(`validity: genus is marked ${d.record.validity} — disputed taxonomy needs a manual read, not a keyword check`);
  }

  return { blocking, info };
}

async function main() {
  await withServer(async (baseUrl) => {
    const browser = await chromium.launch({ executablePath: cachedChromiumExecutable() });
    try {
      const page = await browser.newPage();
      await page.goto(`${baseUrl}/index.html`, { waitUntil: 'load' });

      const data = await page.evaluate(() => DINOS.map(d => {
        const manual = RICH_CONTENT[d.id] || null;
        const rp = RICH_PROFILES[d.id] || null;
        const review = window.SCIENTIFIC_REVIEWS?.[d.id];
        return {
          id: d.id,
          name: d.name,
          provenance: manual?.provenance || '(none)',
          overview: manual?.overview || rp?.overview || [],
          articles: (manual?.articles || []).map(a => ({ title: a.title, body: a.body })),
          record: { mya: d.mya, massKg: d.massKg, length: d.length, diet: d.diet, validity: d.validity || 'valid' },
          reviewRecord: review?.record || {}
        };
      }).filter(d => d.overview.length || d.articles.length));

      const restore = [];
      const blocked = [];
      for (const d of data) {
        const { blocking, info } = checkProfile(d);
        if (blocking.length) blocked.push({ id: d.id, name: d.name, provenance: d.provenance, issues: blocking, info });
        else restore.push(d.id);
      }

      console.log(`Checked ${data.length} profiles with narrative content.`);
      console.log(`Clean: ${restore.length}  Flagged: ${blocked.length}`);
      blocked.forEach(b => {
        console.log(`\n${b.name} (${b.id}) [${b.provenance}]`);
        b.issues.forEach(i => console.log('  -', i));
      });

      if (OUT) {
        const lines = [
          '# Narrative Consistency Check',
          '',
          `Checked ${data.length} profiles with curated or AI-drafted narrative text against their current reviewed record.`,
          `${restore.length} clean, ${blocked.length} flagged for a contradiction.`,
          '',
          'This is an internal-consistency check against data already in this repository (age, mass, diet, validity), not a substitute for primary-literature review.',
          '',
          '## Flagged profiles',
          '',
          '| Genus | Provenance | Issue |',
          '|---|---|---|',
          ...blocked.flatMap(b => b.issues.map(i => `| ${b.name} | ${b.provenance} | ${i} |`))
        ];
        await writeFile(resolve(ROOT, OUT), lines.join('\n') + '\n');
        console.log(`\nWrote ${OUT}`);
      }

      // Emit the restore-list as a JS module the app can consume directly.
      const restoreSrc = `// Generated by tools/narrative-consistency-check.mjs. Do not edit manually.\n`
        + `// Genus ids whose curated/AI-drafted narrative text has been checked for\n`
        + `// internal consistency against the reviewed record (age, mass, diet,\n`
        + `// taxonomic validity) and found to raise no contradiction. This does NOT\n`
        + `// mean the prose has been checked against primary literature — an\n`
        + `// AI-drafted entry keeps its "AI-drafted text" pill regardless.\n`
        + `window.NARRATIVE_CONSISTENT_IDS = new Set(${JSON.stringify(restore.sort())});\n`;
      await writeFile(resolve(ROOT, 'data/narrative-consistent-ids.js'), restoreSrc);
      console.log('Wrote data/narrative-consistent-ids.js');
    } finally {
      await browser.close();
    }
  });
}

main().catch(err => { console.error(err); process.exit(1); });
