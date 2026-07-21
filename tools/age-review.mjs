import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const context = vm.createContext({ window: {}, console });
for (const file of [
  'data/existing-dinosaurs.js',
  'data/nhm-imported-dinosaurs.js',
  'data/pbdb-enrichment.js',
  'data/scientific-reviews.js',
  'data/scientific-baseline-audit.js',
  'data/review-batches/reviews-a-c.js',
  'data/review-batches/reviews-d-l.js',
  'data/review-batches/reviews-m-r.js',
  'data/review-batches/reviews-s-z.js',
  'data/review-batches/reviews-s-z-remainder.js',
  'data/review-batches/merge-reviews.js'
]) {
  vm.runInContext(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'), context, { filename: file });
}

const fields = ['id', 'name', 'latin', 'meaning', 'type', 'period', 'mya'];
const records = [
  ...(context.window.EXISTING_DINOSAUR_RECORDS || []),
  ...(context.window.NHM_IMPORTED_DINOSAUR_RECORDS || [])
];
const pbdb = context.window.PBDB_DINOSAUR_ENRICHMENT || {};
const reviews = context.window.SCIENTIFIC_REVIEWS || {};
const threshold = 8;

function parseAge(value) {
  const values = String(value || '').match(/\d+(?:\.\d+)?/g)?.map(Number);
  return values?.length ? [Math.max(...values), Math.min(...values)] : null;
}

const queue = records.flatMap(record => {
  const d = Object.fromEntries(fields.map((field, index) => [field, record[index]]));
  const review = reviews[d.id] || null;
  if (review?.record?.period) d.period = review.record.period;
  if (review?.record?.mya) d.mya = review.record.mya;
  const occurrence = pbdb[d.id];
  const profile = parseAge(d.mya);
  if (!profile || !occurrence?.firstAppearanceMa || !occurrence?.lastAppearanceMa) return [];
  const olderDifference = Math.abs(profile[0] - occurrence.firstAppearanceMa);
  const youngerDifference = Math.abs(profile[1] - occurrence.lastAppearanceMa);
  if (olderDifference <= threshold && youngerDifference <= threshold) return [];
  return [{
    id: d.id,
    name: d.name,
    profileRange: d.mya,
    pbdbRange: `${occurrence.firstAppearanceMa}–${occurrence.lastAppearanceMa} Ma`,
    maximumDifferenceMa: Math.max(olderDifference, youngerDifference),
    nhmSource: record[20] || `https://www.nhm.ac.uk/discover/dino-directory/${d.id}.html`,
    pbdbSource: occurrence.source,
    status: review?.status || 'unreviewed',
    reviewedRange: review?.record?.mya || null,
    reviewedSource: review?.sources?.map(source => source.url) || [],
    reviewNote: review?.ageReviewNote || null
  }];
}).sort((a, b) => b.maximumDifferenceMa - a.maximumDifferenceMa);

const lines = [
  '# Dinosaur age-range review queue',
  '',
  `Generated from the current profile and PBDB enrichment data. ${queue.length} genera exceed the ${threshold} Ma boundary-difference threshold.`,
  '',
  'This report identifies records for manual review. It does not establish that either source is wrong and must not be used for automatic replacement.',
  '',
  '| Priority | Genus | Profile range | PBDB occurrence range | Maximum difference | Status |',
  '|---:|---|---|---|---:|---|',
  ...queue.map((item, index) =>
    `| ${index + 1} | [${item.name}](${item.nhmSource}) | ${item.profileRange} | [${item.pbdbRange}](${item.pbdbSource}) | ${item.maximumDifferenceMa.toFixed(1)} Ma | ${item.status} |`
  ),
  '',
  '## Review procedure',
  '',
  '1. Check the taxon identity and accepted name in both records.',
  '2. Inspect the oldest and youngest PBDB occurrences for uncertain or outdated assignments.',
  '3. Verify the species/genus range against recent authoritative literature.',
  '4. Record the chosen range, citation, confidence and review date before changing the profile.',
  ''
];

writeFileSync(new URL('../age-review.md', import.meta.url), lines.join('\n'));
writeFileSync(new URL('../data/age-review.json', import.meta.url), `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  thresholdMa: threshold,
  count: queue.length,
  queue
}, null, 2)}\n`);
console.log(`Wrote age-review.md and data/age-review.json (${queue.length} records).`);
