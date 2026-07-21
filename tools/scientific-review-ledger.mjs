import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const context = vm.createContext({ window: {}, console });
for (const file of [
  'data/existing-dinosaurs.js',
  'data/nhm-imported-dinosaurs.js',
  'data/pbdb-enrichment.js',
  'data/ai-enriched-profiles.js',
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

const records = [
  ...(context.window.EXISTING_DINOSAUR_RECORDS || []),
  ...(context.window.NHM_IMPORTED_DINOSAUR_RECORDS || [])
];
const pbdb = context.window.PBDB_DINOSAUR_ENRICHMENT || {};
const generated = context.window.AI_ENRICHED_PROFILES || {};
const reviews = context.window.SCIENTIFIC_REVIEWS || {};

function parseAge(value) {
  const numbers = String(value || '').match(/\d+(?:\.\d+)?/g)?.map(Number);
  return numbers?.length ? [Math.max(...numbers), Math.min(...numbers)] : null;
}

function hasAgeWarning(row, review) {
  const range = parseAge(review?.record?.mya || row[6]);
  const occurrence = pbdb[row[0]];
  if (!range || !occurrence?.firstAppearanceMa || !occurrence?.lastAppearanceMa) return false;
  return Math.abs(range[0] - occurrence.firstAppearanceMa) > 8
    || Math.abs(range[1] - occurrence.lastAppearanceMa) > 8;
}

const ledger = records.map(row => {
  const [id, name, latin, , , period, mya, , , , , , massKg, , food, teeth, , , , , sourceUrl, dataOrigin, sourceMeta] = row;
  const review = reviews[id] || null;
  const isReviewed = review?.status === 'reviewed';
  const isAudited = review?.status === 'audited';
  const needsSpecialist = review?.scientificDisposition === 'needs-specialist-review';
  const ageWarning = hasAgeWarning(row, review);
  const flags = [];
  if (generated[id] && !isReviewed && !isAudited) flags.push('AI-drafted prose');
  if (isAudited) flags.push('conservative taxon-specific review');
  if (needsSpecialist) flags.push('specialist confirmation pending');
  if (ageWarning) flags.push('profile/PBDB age difference');
  if (!massKg) flags.push('no cited mass estimate');
  if (!food || /^not listed by nhm$/i.test(food)) flags.push('diet detail incomplete');
  if (!teeth || /^not listed by nhm$/i.test(teeth)) flags.push('feeding anatomy incomplete');
  if (!sourceMeta?.namedBy || !sourceMeta?.namedYear) flags.push('naming metadata incomplete');
  const riskScore = (generated[id] && !isReviewed ? 5 : 0)
    + (ageWarning ? 3 : 0)
    + (!massKg ? 1 : 0)
    + ((!food || /^not listed by nhm$/i.test(food)) ? 1 : 0)
    + ((!teeth || /^not listed by nhm$/i.test(teeth)) ? 1 : 0)
    + ((!sourceMeta?.namedBy || !sourceMeta?.namedYear) ? 1 : 0);
  return {
    id, name, latin, period: review?.record?.period || period,
    age: review?.record?.mya || mya,
    sourceUrl,
    dataOrigin,
    status: review?.status || 'unreviewed',
    scientificDisposition: review?.scientificDisposition || review?.status || 'unreviewed',
    reviewedOn: review?.reviewedOn || null,
    sourceCount: review?.sources?.length || 0,
    consensusScope: review?.consensusScope || [],
    residualUncertainty: review?.residualUncertainty || [],
    flags,
    riskScore
  };
}).sort((a, b) => {
  const statusOrder = { unreviewed: 0, audited: 1, reviewed: 2 };
  if (a.status !== b.status) return (statusOrder[a.status] ?? 0) - (statusOrder[b.status] ?? 0);
  return b.riskScore - a.riskScore || a.name.localeCompare(b.name);
});

const reviewedCount = ledger.filter(item => item.status === 'reviewed').length;
const auditedCount = ledger.filter(item => item.status === 'audited').length;
const generatedCount = ledger.filter(item => item.flags.includes('AI-drafted prose')).length;
const ageWarningCount = ledger.filter(item => item.flags.includes('profile/PBDB age difference')).length;
const specialistCount = ledger.filter(item => item.scientificDisposition === 'needs-specialist-review').length;

const lines = [
  '# Dinosauria scientific review ledger',
  '',
  `Updated: ${new Date().toISOString().slice(0, 10)}`,
  '',
  `- Profiles: ${ledger.length}`,
  `- Fully reviewed against primary/authoritative sources: ${reviewedCount}`,
  `- Taxon-specific conservative reviews awaiting specialist confirmation: ${auditedCount}`,
  `- Unreviewed: ${ledger.length - reviewedCount - auditedCount}`,
  `- Specialist confirmation explicitly pending: ${specialistCount}`,
  `- Profiles containing AI-drafted prose: ${generatedCount}`,
  `- Automated profile/PBDB age warnings: ${ageWarningCount}`,
  '',
  '## Definition of “reviewed”',
  '',
  'A profile is marked reviewed only after checking its accepted name and taxonomic status, geological age and formation, known material, size evidence, diet/locomotion claims, classification, narrative wording and citations. Active scientific disagreements must be described rather than resolved by editorial preference.',
  '',
  'A profile remains audited where the available record is unusually fragmentary, the name has received little modern study, or a specialist should confirm the interpretation. These entries still contain taxon-specific sourced summaries and explicit uncertainty; they are not unchecked or AI-drafted placeholders.',
  '',
  '## Required source standard',
  '',
  '1. Original description or a modern redescription/systematic revision.',
  '2. Recent literature for taxonomy, age or anatomy where the original work is outdated.',
  '3. Authoritative museum or database records for specimen custody and occurrence context.',
  '4. A primary citation beside every load-bearing quantitative or behavioural claim.',
  '5. Explicit uncertainty where evidence is indirect, debated or based on referred material.',
  '',
  '## Catalogue status',
  '',
  '| Priority | Genus | Status | Risk | Main automated flags |',
  '|---:|---|---|---:|---|',
  ...ledger.map((item, index) => `| ${index + 1} | ${item.name} | ${item.status} | ${item.riskScore} | ${item.flags.join('; ') || 'none'} |`),
  ''
];

writeFileSync(new URL('../SCIENTIFIC-REVIEW.md', import.meta.url), lines.join('\n'));
writeFileSync(new URL('../data/scientific-review-ledger.json', import.meta.url), `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  counts: {
    profiles: ledger.length,
    reviewed: reviewedCount,
    audited: auditedCount,
    unreviewed: ledger.length - reviewedCount - auditedCount,
    aiDrafted: generatedCount,
    ageWarnings: ageWarningCount,
    specialistPending: specialistCount
  },
  ledger
}, null, 2)}\n`);
console.log(`Wrote SCIENTIFIC-REVIEW.md and data/scientific-review-ledger.json (${reviewedCount}/${ledger.length} reviewed).`);
