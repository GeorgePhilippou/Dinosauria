import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import vm from 'node:vm';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const OUT = process.argv.find(arg => arg.startsWith('--out='))?.slice(6) || '';
const TOP = Number(process.argv.find(arg => arg.startsWith('--top='))?.slice(6) || 40);

const DATA_FILES = [
  'data/existing-dinosaurs.js',
  'data/nhm-imported-dinosaurs.js',
  'data/pbdb-enrichment.js',
  'data/wiki-enrichment.js',
  'data/content-overrides.js',
  'data/scientific-reviews.js',
  'data/scientific-baseline-audit.js',
  'data/review-batches/reviews-a-c.js',
  'data/review-batches/reviews-d-l.js',
  'data/review-batches/reviews-m-r.js',
  'data/review-batches/reviews-s-z.js',
  'data/review-batches/reviews-s-z-remainder.js',
  'data/review-batches/merge-reviews.js'
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function loadData() {
  const context = { window: {} };
  context.globalThis = context.window;
  vm.createContext(context);
  for (const file of DATA_FILES) {
    const source = await readFile(resolve(ROOT, file), 'utf8');
    vm.runInContext(source, context, { filename: file });
  }
  return context.window;
}

async function loadCuratedOverrideIds() {
  const source = await readFile(resolve(ROOT, 'index.html'), 'utf8');
  const ids = new Set();
  const pattern = /^\s{2}([a-z0-9_]+):\s*\{\s*$/gm;
  let match;
  while ((match = pattern.exec(source))) {
    ids.add(match[1]);
  }
  return ids;
}

function generatedOverrideIds(data) {
  return new Set(Object.keys(data.CONTENT_OVERRIDES || {}));
}

function recordFromArray(row) {
  const [
    id, name, latin, meaning, type, period, mya, clade, subclade, diet, locomotion,
    length, massKg, found, food, teeth, silhouette, description, facts, pronunciation,
    sourceUrl, dataOrigin, sourceMeta
  ] = row;
  return {
    id, name, latin, meaning, type, period, mya, clade, subclade, diet, locomotion,
    length, massKg, found, food, teeth, silhouette, description, facts, pronunciation,
    sourceUrl, dataOrigin: dataOrigin || 'Curated wiki record', sourceMeta: sourceMeta || {}
  };
}

function isGenericDescription(d) {
  return /NHM records fossils from/i.test(d.description || '')
    || /\bwas a (carnivore|herbivore|omnivore) .+ from the .+\. NHM records fossils from/i.test(d.description || '');
}

function hasTruncatedFact(d) {
  return (d.facts || []).some(fact => /\.\.\.$/.test(fact.trim()) || fact.includes('....'));
}

function hasPlaceholder(value) {
  return !value || /^not listed by nhm$/i.test(String(value));
}

function sourceMetaText(d) {
  const named = [d.sourceMeta?.namedBy, d.sourceMeta?.namedYear].filter(Boolean).join(', ');
  const taxonomy = (d.sourceMeta?.taxonomy || []).join(' > ');
  return [named, taxonomy].filter(Boolean).join(' · ');
}

function scoreRecord(d, pbdb, wiki, hasCuratedOverride, hasGeneratedOverride, scientificReview) {
  const flags = [];
  let score = 100;
  const hasOverride = hasCuratedOverride || hasGeneratedOverride;
  const isScientificallyReviewed = scientificReview?.status === 'reviewed';

  const generic = isGenericDescription(d);
  if (generic && !hasOverride) { score -= 24; flags.push('generic imported description'); }
  if ((d.description || '').length < 180 && !hasOverride) { score -= 10; flags.push('short description'); }
  if (hasTruncatedFact(d) && !hasOverride) { score -= 16; flags.push('truncated NHM facts'); }
  if (hasCuratedOverride) { score += 12; flags.push('curated profile override'); }
  if (hasGeneratedOverride) { score += 6; flags.push('generated profile override'); }
  if (isScientificallyReviewed) { score += 20; flags.push('scientifically reviewed'); }
  if ((d.facts || []).length < 3) { score -= 8; flags.push('few notable facts'); }
  if (!d.massKg) { score -= 8; flags.push('missing mass estimate'); }
  if (hasPlaceholder(d.food)) { score -= 7; flags.push('missing diet detail'); }
  if (hasPlaceholder(d.teeth)) { score -= 7; flags.push('missing teeth/feeding detail'); }
  if (hasPlaceholder(d.locomotion)) { score -= 6; flags.push('missing locomotion'); }
  if (!pbdb) { score -= 12; flags.push('no PBDB enrichment'); }
  if (pbdb && !(pbdb.formations || []).length) { score -= 8; flags.push('no formation data'); }
  if (pbdb && !pbdb.occurrenceCount) { score -= 5; flags.push('no PBDB occurrences'); }
  if (!wiki) { score -= 8; flags.push('no Wikipedia summary'); }
  if (!d.sourceMeta?.namedYear) { score -= 5; flags.push('missing named year'); }
  if (!d.sourceMeta?.namedBy) { score -= 5; flags.push('missing naming authority'); }
  if (!d.meaning || /^unknown$/i.test(d.meaning)) { score -= 4; flags.push('weak name meaning'); }

  const priorities = [];
  if ((generic || hasTruncatedFact(d)) && !hasOverride && !isScientificallyReviewed) priorities.push('Rewrite profile copy');
  if (hasGeneratedOverride && !isScientificallyReviewed) priorities.push('Review generated copy manually');
  if (!pbdb || !(pbdb.formations || []).length) priorities.push('Add fossil formation/locality context');
  if (!d.massKg || hasPlaceholder(d.food) || hasPlaceholder(d.teeth) || hasPlaceholder(d.locomotion)) priorities.push('Complete biological quick facts');
  if (!d.sourceMeta?.namedYear || !d.sourceMeta?.namedBy) priorities.push('Add discovery/naming metadata');
  if (!wiki) priorities.push('Find independent summary/source');

  return {
    ...d,
    score: Math.max(0, score),
    flags,
    priorities: [...new Set(priorities)],
    pbdb,
    wiki,
    sourceMetaText: sourceMetaText(d),
    scientificReview
  };
}

function summarize(records) {
  const total = records.length;
  const counts = {
    genericDescriptions: records.filter(d => d.flags.includes('generic imported description')).length,
    truncatedFacts: records.filter(d => d.flags.includes('truncated NHM facts')).length,
    missingMass: records.filter(d => d.flags.includes('missing mass estimate')).length,
    noFormationData: records.filter(d => d.flags.includes('no formation data') || d.flags.includes('no PBDB enrichment')).length,
    missingNaming: records.filter(d => d.flags.includes('missing named year') || d.flags.includes('missing naming authority')).length,
    noWiki: records.filter(d => d.flags.includes('no Wikipedia summary')).length,
    scientificallyReviewed: records.filter(d => d.flags.includes('scientifically reviewed')).length
  };
  const average = records.reduce((sum, d) => sum + d.score, 0) / total;
  return { total, average: average.toFixed(1), counts };
}

function markdownReport(records) {
  const summary = summarize(records);
  const weakest = [...records].sort((a, b) => a.score - b.score || a.name.localeCompare(b.name)).slice(0, TOP);
  const lines = [];
  lines.push('# Dinosauria Content Audit');
  lines.push('');
  lines.push(`Total profiles: ${summary.total}`);
  lines.push(`Average content score: ${summary.average}/100`);
  lines.push('');
  lines.push('## Main Gaps');
  lines.push('');
  lines.push(`- Generic imported descriptions: ${summary.counts.genericDescriptions}`);
  lines.push(`- Truncated NHM facts: ${summary.counts.truncatedFacts}`);
  lines.push(`- Missing mass estimates: ${summary.counts.missingMass}`);
  lines.push(`- Missing formation/PBDB context: ${summary.counts.noFormationData}`);
  lines.push(`- Missing naming metadata: ${summary.counts.missingNaming}`);
  lines.push(`- Missing Wikipedia summaries: ${summary.counts.noWiki}`);
  lines.push(`- Fully scientifically reviewed: ${summary.counts.scientificallyReviewed}`);
  lines.push('');
  lines.push(`## Weakest ${weakest.length} Profiles`);
  lines.push('');
  lines.push('| Rank | Score | Genus | Period | Origin | Main flags | Recommended work |');
  lines.push('|---:|---:|---|---|---|---|---|');
  weakest.forEach((d, index) => {
    lines.push(`| ${index + 1} | ${d.score} | ${d.name} | ${d.period} | ${d.dataOrigin} | ${d.flags.slice(0, 5).join('; ')} | ${d.priorities.join('; ')} |`);
  });
  lines.push('');
  lines.push('## Suggested Content Workflow');
  lines.push('');
  lines.push('1. Rewrite the weakest imported summaries into two concise wiki-native paragraphs.');
  lines.push('2. Add a “Why it matters” note for each rewritten genus.');
  lines.push('3. Surface formation/locality context from PBDB where available.');
  lines.push('4. Add explicit uncertainty notes for fragmentary or taxonomically unstable genera.');
  lines.push('5. Re-run this audit and work down the ranked queue.');
  lines.push('');
  return lines.join('\n');
}

async function main() {
  const data = await loadData();
  const curatedOverrideIds = await loadCuratedOverrideIds();
  const generatedIds = generatedOverrideIds(data);
  const curated = data.EXISTING_DINOSAUR_RECORDS || [];
  const imported = data.NHM_IMPORTED_DINOSAUR_RECORDS || [];
  const pbdb = data.PBDB_DINOSAUR_ENRICHMENT || {};
  const wiki = data.WIKI_ENRICHMENT || {};
  const reviews = data.SCIENTIFIC_REVIEWS || {};
  assert(curated.length && imported.length, 'Could not load dinosaur data.');

  const records = [...curated, ...imported]
    .map(recordFromArray)
    .map(d => {
      const review = reviews[d.id];
      if (review?.record?.period) d.period = review.record.period;
      if (review?.record?.mya) d.mya = review.record.mya;
      return scoreRecord(d, pbdb[d.id], wiki[d.id], curatedOverrideIds.has(d.id), generatedIds.has(d.id), review);
    });

  const report = markdownReport(records);
  if (OUT) {
    await writeFile(resolve(ROOT, OUT), report + '\n');
    console.log(`Wrote ${OUT}`);
  } else {
    console.log(report);
  }
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
