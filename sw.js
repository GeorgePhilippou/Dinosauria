// Service worker for offline use. Strategy: precache the app shell, then
// cache-as-you-browse everything else same-origin (stale-while-revalidate)
// so the whole site becomes available offline simply by having visited it,
// without hand-maintaining a file list that content updates would outdate.

const CACHE_VERSION = 'dinosauria-v1';
const SHELL_URLS = [
  './',
  './index.html',
  './manifest.json',
  './Dinosaur_Wiki_Logo.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './data/existing-dinosaurs.js',
  './data/nhm-imported-dinosaurs.js',
  './data/pbdb-enrichment.js',
  './data/wiki-enrichment.js',
  './data/ai-enriched-profiles.js',
  './data/ai-fossil-records.js',
  './data/ai-curated-evidence.js',
  './data/scientific-reviews.js',
  './data/scientific-baseline-audit.js',
  './data/review-batches/reviews-a-c.js',
  './data/review-batches/reviews-d-l.js',
  './data/review-batches/reviews-m-r.js',
  './data/review-batches/reviews-s-z.js',
  './data/review-batches/reviews-s-z-remainder.js',
  './data/review-batches/merge-reviews.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request));
  } else if (request.destination === 'image') {
    // Species and figure photos are hotlinked from Wikimedia Commons rather
    // than bundled. They're immutable once published, so once a photo has
    // been viewed it's kept for good -- cache-first, no revalidation.
    event.respondWith(cacheFirstCrossOrigin(request));
  }
});

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);

  const networkFetch = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  if (cached) {
    // Serve the cached copy immediately; refresh the cache in the background
    // so the next load reflects whatever changed once we're back online.
    networkFetch.catch(() => {});
    return cached;
  }

  const fresh = await networkFetch;
  if (fresh) return fresh;

  if (request.mode === 'navigate') {
    const shell = await cache.match('./index.html');
    if (shell) return shell;
  }

  return new Response('Offline and not yet cached.', {
    status: 503,
    statusText: 'Offline',
    headers: { 'Content-Type': 'text/plain' },
  });
}

async function cacheFirstCrossOrigin(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    // <img> requests are same-origin-restricted to 'no-cors', so the response
    // is opaque (status 0, unreadable) -- still perfectly cacheable and replayable.
    const response = await fetch(request);
    if (response && (response.ok || response.type === 'opaque')) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return Response.error();
  }
}
