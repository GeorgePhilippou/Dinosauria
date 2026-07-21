import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const context = vm.createContext({ window: {}, console });
const files = [
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
  vm.runInContext(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'), context, { filename: file });
}

const reviews = context.window.SCIENTIFIC_REVIEWS || {};
const references = [];
for (const [id, review] of Object.entries(reviews)) {
  for (const source of review.sources || []) {
    const match = String(source.url || '').match(/^https?:\/\/(?:dx\.)?doi\.org\/(.+)$/i);
    if (!match) continue;
    references.push({ id, citation: source.citation, url: source.url, doi: decodeURIComponent(match[1]).toLowerCase() });
  }
}

const byDoi = new Map();
for (const reference of references) {
  if (!byDoi.has(reference.doi)) byDoi.set(reference.doi, []);
  byDoi.get(reference.doi).push(reference);
}

const stopWords = new Set([
  'a', 'an', 'and', 'as', 'at', 'by', 'dinosaur', 'dinosaurs', 'et', 'for', 'from', 'in', 'new',
  'of', 'on', 'original', 'paper', 'redescription', 'review', 'revision', 'study', 'systematic',
  'systematics', 'the', 'to', 'with'
]);
const normalise = value => String(value || '')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;/gi, ' ')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();
const tokens = value => new Set(normalise(value).split(/\s+/).filter(word => word.length > 3 && !stopWords.has(word)));
const metadata = new Map();
const lookupErrors = [];
const uniqueDois = [...byDoi.keys()];

// OpenAlex accepts OR-ed DOI batches, avoiding hundreds of rapid individual
// Crossref requests (and the resulting rate limiting). Only DOI, title, year
// and authorship metadata is requested.
for (let index = 0; index < uniqueDois.length; index += 25) {
  const batch = uniqueDois.slice(index, index + 25);
  const params = new URLSearchParams({
    filter: `doi:${batch.join('|')}`,
    'per-page': '25',
    select: 'doi,title,publication_year,authorships'
  });
  try {
    const response = await fetch(`https://api.openalex.org/works?${params}`, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`OpenAlex HTTP ${response.status}`);
    const payload = await response.json();
    for (const work of payload.results || []) {
      const doi = String(work.doi || '').replace(/^https?:\/\/doi\.org\//i, '').toLowerCase();
      if (!doi) continue;
      const authorName = work.authorships?.[0]?.author?.display_name || '';
      metadata.set(doi, {
        title: work.title || '',
        year: work.publication_year || null,
        firstAuthor: authorName.split(/\s+/).at(-1) || ''
      });
    }
  } catch (error) {
    batch.forEach(doi => lookupErrors.push({ doi, error: error.message }));
  }
}

const notIndexed = uniqueDois.filter(doi => !metadata.has(doi));
const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
for (const doi of notIndexed) {
  let checked = false;
  let lastError = 'not indexed by OpenAlex';
  for (let attempt = 0; attempt < 3 && !checked; attempt += 1) {
    try {
      const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
        headers: { 'User-Agent': 'Dinosauria-scientific-audit/1.0 (source-link validation)' },
        signal: AbortSignal.timeout(20000)
      });
      if (response.status === 429) {
        await pause(1000 * (attempt + 1));
        continue;
      }
      if (!response.ok) throw new Error(`Crossref HTTP ${response.status}`);
      const work = (await response.json()).message;
      metadata.set(doi, {
        title: work.title?.[0] || '',
        year: work.published?.['date-parts']?.[0]?.[0] || work.issued?.['date-parts']?.[0]?.[0] || null,
        firstAuthor: work.author?.[0]?.family || ''
      });
      checked = true;
    } catch (error) {
      lastError = error.message;
    }
  }
  // Some legacy publishers register resolvable DOIs outside Crossref. DOI
  // content negotiation can still return standard CSL metadata for them.
  if (!checked) {
    try {
      const response = await fetch(`https://doi.org/${doi}`, {
        headers: {
          Accept: 'application/vnd.citationstyles.csl+json',
          'User-Agent': 'Dinosauria-scientific-audit/1.0 (source-link validation)'
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) throw new Error(`DOI resolver HTTP ${response.status}`);
      const contentType = response.headers.get('content-type') || '';
      if (!/json/i.test(contentType)) throw new Error('DOI resolver returned no citation metadata');
      const work = await response.json();
      metadata.set(doi, {
        title: Array.isArray(work.title) ? work.title[0] : work.title || '',
        year: work.issued?.['date-parts']?.[0]?.[0] || work.published?.['date-parts']?.[0]?.[0] || null,
        firstAuthor: work.author?.[0]?.family || work.author?.[0]?.literal || ''
      });
      checked = true;
    } catch (error) {
      lastError = `${lastError}; ${error.message}`;
    }
  }
  if (!checked) {
    lookupErrors.push({ doi, error: lastError });
  }
  await pause(175);
}

const mismatches = [];
for (const [doi, refs] of byDoi) {
  const item = metadata.get(doi);
  if (!item) continue;
  const title = item.title || '';
  const titleTokens = tokens(title);
  const firstAuthor = normalise(item.firstAuthor || '');
  const year = item.year;
  for (const reference of refs) {
    const citationTokens = tokens(reference.citation);
    const sharedTitleWords = [...titleTokens].filter(word => citationTokens.has(word));
    const citationNormal = normalise(reference.citation);
    const authorMatches = firstAuthor && citationNormal.includes(firstAuthor);
    const citedYear = Number(reference.citation?.match(/\((\d{4})\)/)?.[1]) || null;
    const yearMatches = !citedYear || !year || Math.abs(citedYear - year) <= 1;
    // Older monographs and papers are sometimes indexed under a later online or
    // digitisation year. Treat an author + title match as the same work, while
    // still failing unrelated links and year-only matches.
    const strongIdentityMatch = authorMatches && sharedTitleWords.length >= 2;
    if ((!authorMatches && sharedTitleWords.length < 2) || (!yearMatches && !strongIdentityMatch)) {
      mismatches.push({
        id: reference.id,
        doi,
        citation: reference.citation,
        metadata: `${item.firstAuthor || 'Unknown'} (${year || '?'}) — ${title}`,
        reason: !yearMatches ? 'publication year differs' : 'author and title do not appear to match'
      });
    }
  }
}

console.log(`Checked ${references.length} DOI citations (${byDoi.size} unique) against registry metadata.`);
if (lookupErrors.length) {
  console.log(`${lookupErrors.length} DOI records could not be checked automatically:`);
  lookupErrors.forEach(item => console.log(`- ${item.doi}: ${item.error}`));
}
if (mismatches.length) {
  console.error(`${mismatches.length} possible citation/DOI mismatches require review:`);
  mismatches.forEach(item => console.error(`- ${item.id}: ${item.citation}\n  ${item.doi} → ${item.metadata}\n  ${item.reason}`));
  process.exitCode = 1;
} else {
  console.log('No citation/DOI metadata mismatches detected.');
}
if (lookupErrors.length) process.exitCode = 1;
