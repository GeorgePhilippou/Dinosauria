import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const PORT = Number(process.env.PORT || 8766);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const FALLBACK_NODE_MODULES = process.env.PLAYWRIGHT_NODE_MODULES || process.env.NODE_PATH || '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function loadPlaywright() {
  try {
    return await import('playwright');
  } catch (error) {
    if (!FALLBACK_NODE_MODULES) throw error;
    return await import(`${FALLBACK_NODE_MODULES.replace(/\/$/, '')}/playwright/index.mjs`);
  }
}

function staticServer() {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', BASE_URL);
      const pathname = decodeURIComponent(url.pathname);
      const target = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
      const filePath = resolve(join(ROOT, target));
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      const body = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
}

async function listen(server) {
  await new Promise((resolveListen, rejectListen) => {
    server.once('error', rejectListen);
    server.listen(PORT, '127.0.0.1', resolveListen);
  });
}

async function close(server) {
  await new Promise(resolveClose => server.close(resolveClose));
}

async function pageState(page) {
  return await page.evaluate(() => ({
    activeView: document.querySelector('.view.active')?.id,
    cardCount: document.querySelectorAll('.dino-card').length,
    imageCount: document.querySelectorAll('img').length,
    resultCount: document.querySelector('#result-count')?.textContent || '',
    loadMeta: document.querySelector('#catalog-load-meta')?.textContent || '',
    loadButtonHidden: document.querySelector('#catalog-load-btn')?.hidden ?? true,
    panelOpen: document.querySelector('#side-panel')?.classList.contains('open') || false,
    panelName: document.querySelector('#p-name')?.textContent || '',
    selectedCards: document.querySelectorAll('.dino-card.selected').length,
    linksWithoutNoreferrer: [...document.querySelectorAll('a[target="_blank"]')]
      .filter(a => !String(a.rel).includes('noreferrer')).length
  }));
}

async function main() {
  const { chromium } = await loadPlaywright();
  const server = staticServer();
  await listen(server);

  let browser;

  try {
    browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const consoleProblems = [];
    page.on('console', msg => {
      if (['error', 'warning'].includes(msg.type())) consoleProblems.push(`${msg.type()}: ${msg.text()}`);
    });
    page.on('pageerror', err => consoleProblems.push(`pageerror: ${err.message}`));

    await page.goto(`${BASE_URL}/index.html?smoke=home`, { waitUntil: 'load' });
    const home = await pageState(page);
    assert(home.activeView === 'home-view', 'Home view should be active by default.');
    assert(home.cardCount === 0, `Home should not mount catalogue cards, saw ${home.cardCount}.`);
    assert(home.linksWithoutNoreferrer === 0, 'External target=_blank links should include rel="noreferrer".');

    await page.goto(`${BASE_URL}/index.html?smoke=catalog#catalog`, { waitUntil: 'load' });
    const catalog = await pageState(page);
    assert(catalog.activeView === 'catalog-view', 'Catalogue hash should open catalogue view.');
    assert(catalog.cardCount === 60, `Catalogue should initially render 60 cards, saw ${catalog.cardCount}.`);
    assert(catalog.resultCount === '328 of 328 dinosaurs', `Unexpected catalogue count: ${catalog.resultCount}`);
    assert(catalog.loadMeta === 'Showing 60 of 328', `Unexpected load meta: ${catalog.loadMeta}`);
    assert(!catalog.loadButtonHidden, 'Load more button should be visible for the full catalogue.');

    await page.locator('#catalog-load-btn').click();
    const loaded = await pageState(page);
    assert(loaded.cardCount === 120, `Load more should render 120 cards, saw ${loaded.cardCount}.`);
    assert(loaded.loadMeta === 'Showing 120 of 328', `Unexpected post-load meta: ${loaded.loadMeta}`);

    await page.locator('#search').fill('tyrannosaurus');
    const searched = await pageState(page);
    const searchTotal = Number(searched.resultCount.match(/^(\d+)/)?.[1] || 0);
    assert(searchTotal > 0 && searchTotal <= 60, `Unexpected search count: ${searched.resultCount}`);
    assert(searched.cardCount === searchTotal, `Search should render all ${searchTotal} matches, saw ${searched.cardCount}.`);
    assert(searched.loadButtonHidden, 'Load more button should hide when all matches are visible.');

    await page.goto(`${BASE_URL}/index.html?smoke=profile#dino/triceratops`, { waitUntil: 'load' });
    const profile = await pageState(page);
    assert(profile.activeView === 'catalog-view', 'Dinosaur hash should open catalogue view.');
    assert(profile.panelOpen, 'Dinosaur hash should open the species profile panel.');
    assert(profile.panelName === 'Triceratops', `Expected Triceratops profile, saw ${profile.panelName}.`);
    assert(profile.cardCount === 60, `Dinosaur hash should keep the catalogue batch at 60 cards, saw ${profile.cardCount}.`);

    await page.goto(`${BASE_URL}/index.html?smoke=gaps#dino/albertaceratops`, { waitUntil: 'load' });
    const gapLabels = await page.locator('.data-gap-label').allTextContents();
    assert(gapLabels.length > 0, 'Profiles with incomplete data should show explicit data-gap labels.');
    assert(gapLabels.includes('Mass unknown'), `Expected Mass unknown gap, saw: ${gapLabels.join(', ')}`);

    await page.goto(`${BASE_URL}/index.html?smoke=field-guide#glossary`, { waitUntil: 'load' });
    const fieldGuide = await pageState(page);
    assert(fieldGuide.activeView === 'glossary-view', 'Field Guide hash should open the guide view.');
    await page.locator('text=Field Guide to Dinosaur Palaeontology').waitFor();
    assert(await page.locator('#profile-guide').count() === 1, 'Field Guide should include the profile-reading section.');

    await page.goto(`${BASE_URL}/index.html?smoke=timeline#timeline`, { waitUntil: 'load' });
    const timeline = await pageState(page);
    assert(timeline.activeView === 'timeline-view', 'Timeline hash should open timeline view.');
    assert(timeline.cardCount === 0, 'Timeline route should not mount catalogue cards.');

    assert(consoleProblems.length === 0, `Console problems:\n${consoleProblems.join('\n')}`);
    console.log('Smoke tests passed');
  } finally {
    if (browser) await browser.close();
    await close(server);
  }
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
