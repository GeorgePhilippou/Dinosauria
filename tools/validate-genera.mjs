// Validate data/genera/*.json — the per-genus content files that index.html
// fetches at runtime. Run before committing a hand edit, or let the
// genera-index GitHub Action run it on push.
//
//   node tools/validate-genera.mjs
//
// Checks: every file parses; "id" matches the filename; each genus exists in
// the catalogue records; the review block, when present, has the fields the
// catalogue and profile code expect; presentation/panel blocks (the polished
// tier) carry the keys the renderer reads; image files are Commons filenames
// (no path, no URL) and every URL is http(s).
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';

const DIR = 'data/genera';
const problems = [];
const warn = (file, msg) => problems.push(`${file}: ${msg}`);

// Catalogue ids come from the two record bundles; evaluate them in a sandbox.
const sandbox = { window: {} };
for (const f of ['data/existing-dinosaurs.js', 'data/nhm-imported-dinosaurs.js']) {
  vm.runInNewContext(readFileSync(f, 'utf8'), sandbox);
}
const catalogueIds = new Set([
  ...(sandbox.window.EXISTING_DINOSAUR_RECORDS || []),
  ...(sandbox.window.NHM_IMPORTED_DINOSAUR_RECORDS || [])
].map(r => r[0]));

// ResearchGate ids cannot be verified and were found pointing at unrelated
// papers; academia.edu is the same. Cite the DOI or the publisher instead.
const BANNED_HOSTS = /^(https?:\/\/)?(www\.)?(researchgate\.net|academia\.edu)\//i;
const isUrl = v => typeof v === 'string' && /^https?:\/\//.test(v) && !BANNED_HOSTS.test(v);
const isCommonsFile = v => typeof v === 'string' && v.length > 0 && !/[\/\\]/.test(v) && !/^https?:/.test(v);
const need = (file, obj, path, keys) => {
  for (const k of keys) if (obj?.[k] === undefined) warn(file, `${path}.${k} is missing`);
};

const files = readdirSync(DIR).filter(f => f.endsWith('.json')).sort();
const seen = new Set();
for (const file of files) {
  let genus;
  try { genus = JSON.parse(readFileSync(join(DIR, file), 'utf8')); }
  catch (e) { warn(file, `invalid JSON — ${e.message}`); continue; }
  const id = file.replace(/\.json$/, '');
  seen.add(id);
  if (genus.id !== id) warn(file, `"id" is "${genus.id}" but filename says "${id}"`);
  if (!catalogueIds.has(id)) warn(file, 'no matching catalogue record in data/existing-dinosaurs.js or data/nhm-imported-dinosaurs.js');
  if (typeof genus.name !== 'string') warn(file, '"name" must be a string');

  const review = genus.review;
  if (review) {
    need(file, review, 'review', ['status', 'reviewedOn', 'record']);
    if (!['reviewed', 'audited', 'needs-specialist-review'].includes(review.status)) warn(file, `review.status "${review.status}" is not recognised`);
    if (review.reviewedOn && !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedOn)) warn(file, 'review.reviewedOn must be YYYY-MM-DD');
    need(file, review.record, 'review.record', ['period', 'mya', 'description']);
    (review.sources || []).forEach((s, i) => { if (!isUrl(s.url)) warn(file, `review.sources[${i}].url is not an http(s) URL`); });
    if (review.evidence) {
      const ev = review.evidence;
      if (typeof ev.score !== 'number' || ev.score < 0 || ev.score > 100) warn(file, 'review.evidence.score must be 0–100');
      if (ev.panel) {
        need(file, ev.panel, 'review.evidence.panel', ['headline', 'standfirst', 'coverage', 'metrics', 'knownRemains', 'materialGroups', 'specimenCards', 'interpretation', 'resources']);
        const cov = ev.panel.coverage || {};
        if (!(cov.level >= 0 && cov.level <= cov.maximum)) warn(file, 'review.evidence.panel.coverage.level must be between 0 and coverage.maximum');
        (ev.panel.media || []).forEach((m, i) => { if (!isCommonsFile(m.file)) warn(file, `panel.media[${i}].file must be a bare Wikimedia Commons filename`); if (!m.credit) warn(file, `panel.media[${i}].credit is missing`); });
        (ev.panel.resources || []).forEach((r, i) => { if (!isUrl(r.url)) warn(file, `panel.resources[${i}].url is not an http(s) URL`); });
      }
    }
    if (review.presentation) {
      const p = review.presentation;
      need(file, p, 'review.presentation', ['heroLead', 'quickFacts', 'animalParagraphs', 'animalHighlights', 'lifeCards', 'whereFacts', 'classificationSummary', 'questions']);
      if (p.heroMedia) {
        if (!isCommonsFile(p.heroMedia.file)) warn(file, 'presentation.heroMedia.file must be a bare Wikimedia Commons filename');
        if (!p.heroMedia.credit) warn(file, 'presentation.heroMedia.credit is missing');
      }
      (p.related || []).forEach((r, i) => { if (!catalogueIds.has(r.id)) warn(file, `presentation.related[${i}].id "${r.id}" is not a catalogue genus`); });
    }
  }
  if (genus.remainsImage && !isCommonsFile(genus.remainsImage.file)) warn(file, 'remainsImage.file must be a bare Wikimedia Commons filename');
}
for (const id of catalogueIds) if (!seen.has(id)) warn(`${id}.json`, 'catalogue genus has no file in data/genera/');

if (problems.length) {
  console.error(`${problems.length} problem(s):\n` + problems.map(p => '  ' + p).join('\n'));
  process.exit(1);
}
console.log(`data/genera: ${files.length} files OK`);
