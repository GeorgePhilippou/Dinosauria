import { existsSync, readFileSync } from 'node:fs';
import vm from 'node:vm';

const context = vm.createContext({ window: {}, console });
const files = [
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
];

for (const file of files) {
  const url = new URL(`../${file}`, import.meta.url);
  if (!existsSync(url)) continue;
  vm.runInContext(readFileSync(url, 'utf8'), context, { filename: file });
}

const records = [
  ...(context.window.EXISTING_DINOSAUR_RECORDS || []),
  ...(context.window.NHM_IMPORTED_DINOSAUR_RECORDS || [])
];
const ids = new Set(records.map(row => row[0]));
const originalById = new Map(records.map(row => [row[0], {
  diet: row[9],
  locomotion: row[10],
  length: row[11],
  massKg: row[12]
}]));
const reviews = context.window.SCIENTIFIC_REVIEWS || {};
const errors = [];
const warnings = [];
const fail = (id, message) => errors.push(`${id}: ${message}`);
const supportedPeriods = new Set(['Late Triassic', 'Early Jurassic', 'Mid Jurassic', 'Late Jurassic', 'Early Cretaceous', 'Late Cretaceous']);

for (const id of Object.keys(reviews)) {
  if (!ids.has(id)) fail(id, 'review exists for an unknown catalogue id');
}

for (const id of ids) {
  const review = reviews[id];
  if (!review) {
    fail(id, 'has no scientific review or conservative baseline audit');
    continue;
  }
  if (!['reviewed', 'audited'].includes(review.status)) fail(id, `unsupported public status ${review.status}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedOn || '')) fail(id, 'missing ISO review date');
  if (!review.reviewer) fail(id, 'missing reviewer label');
  if (!review.record?.description) fail(id, 'missing reviewed description');
  if (!review.record?.period || !review.record?.mya) fail(id, 'missing reviewed period or age');
  if (review.record?.period && !supportedPeriods.has(review.record.period)) fail(id, `unsupported period key ${review.record.period}`);
  if (!Array.isArray(review.record?.taxonomy) || !review.record.taxonomy.length) fail(id, 'missing reviewed taxonomy');
  if (!Array.isArray(review.record?.facts) || !review.record.facts.length) fail(id, 'missing reviewed facts');
  if (!Array.isArray(review.sources) || !review.sources.length) fail(id, 'missing review sources');
  if (!Array.isArray(review.residualUncertainty) || !review.residualUncertainty.length) fail(id, 'missing residual uncertainty');
  if (!review.ageReviewNote) fail(id, 'missing age-review note');
  if (!review.evidence?.summary || !review.evidence?.material || !review.evidence?.confidenceLimit) {
    fail(id, 'incomplete public fossil-evidence summary');
  }

  // A reviewed narrative cannot declare an inherited catalogue quick fact
  // unsupported while silently leaving that old value active in the UI.
  const reviewText = [
    review.record?.description,
    ...(review.record?.facts || []),
    review.evidence?.confidenceLimit,
    ...(review.residualUncertainty || [])
  ].filter(Boolean).join(' ').toLowerCase();
  const owns = field => Object.prototype.hasOwnProperty.call(review.record || {}, field);
  const original = originalById.get(id) || {};
  const explicitlyRejects = (term, value) => value != null && new RegExp(
    `(?:${term}).{0,90}(?:is cleared|are cleared|should be cleared|not retained|should not be retained|cannot be estimated|cannot be constrained|does not support|do not support|too speculative|unreliable)`
  ).test(reviewText);
  const rejectsPointEstimate = (term, value) => value != null && new RegExp(
    `(?:no (?:precise|defensible|reliable) (?:whole[- ]body )?(?:${term})|(?:${term}).{0,90}(?:cannot be established|cannot be verified|is unknown|remains unknown))`
  ).test(reviewText);
  if (!owns('length') && (
    explicitlyRejects('length|body[- ]size|dimensions?', original.length)
    || rejectsPointEstimate('length|body[- ]size|dimensions?', original.length)
  )) {
    fail(id, 'review rejects the inherited length but does not override or clear it');
  }
  if (!owns('massKg') && (
    explicitlyRejects('mass|weight', original.massKg)
    || rejectsPointEstimate('mass|weight', original.massKg)
  )) {
    fail(id, 'review rejects the inherited mass but does not override or clear it');
  }
  if (!owns('diet') && original.diet && /(?:diet|feeding).{0,60}(?:is|remains) (?:unknown|uncertain|unresolved)|no direct (?:diet|feeding) evidence/.test(reviewText)) {
    fail(id, 'review says diet is unresolved but leaves a categorical inherited diet active');
  }

  (review.sources || []).forEach((source, index) => {
    if (!source.citation) fail(id, `source ${index + 1} has no citation`);
    if (!/^https?:\/\//.test(source.url || '')) fail(id, `source ${index + 1} has no web URL`);
  });

  if (review.status === 'reviewed') {
    const primaryLike = (review.sources || []).some(source =>
      !/^(authoritative-museum|authoritative-occurrence-context|catalogue-source|occurrence-database)$/.test(source.type || '')
    );
    if (!primaryLike) fail(id, 'marked reviewed without a primary or systematic literature source');
    if ((review.consensusScope || []).length < 4) fail(id, 'review scope is too narrow');
  }

  if (review.status === 'audited' && review.scientificDisposition === 'needs-specialist-review') {
    warnings.push(`${id}: specialist confirmation pending`);
  }
}

if (errors.length) {
  console.error(`Scientific review validation failed (${errors.length} issues):\n${errors.map(item => `- ${item}`).join('\n')}`);
  process.exitCode = 1;
} else {
  const reviewed = Object.values(reviews).filter(review => review.status === 'reviewed').length;
  const audited = Object.values(reviews).filter(review => review.status === 'audited').length;
  console.log(`Scientific review validation passed: ${reviewed} reviewed, ${audited} baseline audited, ${records.length} total.`);
  if (warnings.length) console.log(`${warnings.length} profiles remain explicitly queued for specialist confirmation.`);
}
