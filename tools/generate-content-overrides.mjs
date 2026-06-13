import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import vm from 'node:vm';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const OUT = 'data/content-overrides.js';
const SOURCE_BASE = 'https://www.nhm.ac.uk/discover/dino-directory/';

const DATA_FILES = [
  'data/existing-dinosaurs.js',
  'data/nhm-imported-dinosaurs.js',
  'data/pbdb-enrichment.js',
  'data/wiki-enrichment.js'
];

const COUNTRY_NAMES = {
  AR: 'Argentina',
  AQ: 'Antarctica',
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  CN: 'China',
  DE: 'Germany',
  EG: 'Egypt',
  ES: 'Spain',
  FR: 'France',
  IN: 'India',
  JP: 'Japan',
  KZ: 'Kazakhstan',
  MA: 'Morocco',
  MG: 'Madagascar',
  MW: 'Malawi',
  MN: 'Mongolia',
  NE: 'Niger',
  PT: 'Portugal',
  RO: 'Romania',
  RU: 'Russia',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  UK: 'United Kingdom',
  US: 'United States',
  UZ: 'Uzbekistan',
  ZA: 'South Africa',
  ZW: 'Zimbabwe'
};

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

async function loadRichContentIds() {
  const source = await readFile(resolve(ROOT, 'index.html'), 'utf8');
  const ids = new Set();
  const pattern = /^\s{2}([a-z0-9_]+):\s*\{\s*$/gm;
  let match;
  while ((match = pattern.exec(source))) ids.add(match[1]);
  return ids;
}

function cleanText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/\s+\./g, '.')
    .trim();
}

function firstSentences(text, maxSentences = 2) {
  const sentences = cleanText(text).match(/[^.!?]+[.!?]+/g) || [];
  return sentences.slice(0, maxSentences).join(' ').trim() || cleanText(text);
}

function listText(values, fallback = 'currently unresolved localities') {
  const list = [...new Set((values || []).filter(Boolean))];
  if (!list.length) return fallback;
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
}

function countryText(pbdb, d) {
  const pbdbCountries = (pbdb?.countries || []).map(code => COUNTRY_NAMES[code] || code);
  return listText(pbdbCountries.length ? pbdbCountries : d.found, 'an unresolved region');
}

function formationText(pbdb) {
  return listText((pbdb?.formations || []).slice(0, 4), '');
}

function intervalText(pbdb, d) {
  if (pbdb?.earlyInterval && pbdb?.lateInterval && pbdb.earlyInterval !== pbdb.lateInterval) {
    return `${pbdb.earlyInterval} to ${pbdb.lateInterval}`;
  }
  if (pbdb?.earlyInterval) return pbdb.earlyInterval;
  return d.period;
}

function sizeText(d) {
  const length = d.length ? `${d.length} m long` : 'of uncertain length';
  const mass = d.massKg ? ` and about ${d.massKg.toLocaleString('en-US')} kg` : '';
  return `${length}${mass}`;
}

function buildOverview(d, pbdb, wiki) {
  const wikiLead = wiki?.extract ? firstSentences(wiki.extract, 2) : '';
  const formation = formationText(pbdb);
  const place = countryText(pbdb, d);
  const sourceUnit = formation
    ? ` PBDB records it from ${formation} in ${place}.`
    : ` The current enrichment records it from ${place}, but formation-level context still needs manual review.`;
  const summary = wikiLead || `${d.name} was a ${d.diet.toLowerCase()} ${d.type} from the ${d.period}, recorded from ${listText(d.found)}.`;
  const bioFacts = [
    `${d.name} is listed here as ${sizeText(d)}.`,
    d.food && !/^not listed by nhm$/i.test(d.food) ? `Its inferred food is ${d.food}.` : '',
    d.teeth && !/^not listed by nhm$/i.test(d.teeth) ? `The feeding note records ${d.teeth}.` : '',
    d.locomotion && !/^not listed by nhm$/i.test(d.locomotion) ? `Movement is recorded as ${d.locomotion}.` : ''
  ].filter(Boolean).join(' ');
  return [
    summary,
    `${sourceUnit} ${bioFacts}`.trim()
  ];
}

function buildFossilSites(pbdb, d) {
  if (pbdb?.formations?.length) {
    const region = countryText(pbdb, d);
    return pbdb.formations.slice(0, 4).map(name => ({
      name: `${name} Formation`,
      region,
      note: `PBDB-listed unit for ${d.name}; local age signal: ${intervalText(pbdb, d)}.`
    }));
  }
  return [{
    name: `${d.name} fossil record`,
    region: listText(d.found),
    note: 'Country-level NHM record; formation-level context remains a priority for future curation.'
  }];
}

function buildCitations(d, pbdb, wiki) {
  const citations = [];
  if (d.sourceUrl || d.dataOrigin === 'NHM Dino Directory') {
    citations.push({ label: `NHM: ${d.name} profile`, url: d.sourceUrl || `${SOURCE_BASE}${d.id}.html` });
  }
  if (wiki?.url) citations.push({ label: `Wikipedia: ${d.name}`, url: wiki.url });
  if (pbdb?.taxonId) citations.push({ label: `PBDB: ${d.name}`, url: `https://paleobiodb.org/navigator/?taxon_id=${pbdb.taxonId.replace(/^txn:/, '')}` });
  return citations;
}

function buildOverride(d, pbdb, wiki) {
  return {
    generated: true,
    overview: buildOverview(d, pbdb, wiki),
    fossilSites: buildFossilSites(pbdb, d),
    citations: buildCitations(d, pbdb, wiki)
  };
}

function asciiJson(value) {
  return JSON.stringify(value, null, 2).replace(/[^\x00-\x7F]/g, char =>
    `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`);
}

async function main() {
  const data = await loadData();
  const richIds = await loadRichContentIds();
  const imported = (data.NHM_IMPORTED_DINOSAUR_RECORDS || []).map(recordFromArray);
  const pbdb = data.PBDB_DINOSAUR_ENRICHMENT || {};
  const wiki = data.WIKI_ENRICHMENT || {};
  const overrides = {};

  for (const d of imported) {
    if (richIds.has(d.id)) continue;
    overrides[d.id] = buildOverride(d, pbdb[d.id], wiki[d.id]);
  }

  const output = [
    '// Generated by tools/generate-content-overrides.mjs. Do not edit manually.',
    '// Provides profile copy for imported entries that do not yet have hand-written RICH_CONTENT.',
    `window.CONTENT_OVERRIDES = ${asciiJson(overrides)};`,
    ''
  ].join('\n');
  await writeFile(resolve(ROOT, OUT), output);
  console.log(`Wrote ${OUT} with ${Object.keys(overrides).length} generated overrides`);
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
