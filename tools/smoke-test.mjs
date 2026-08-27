import { createServer } from 'node:http';
import { existsSync, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { extname, join, resolve } from 'node:path';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const PORT = Number(process.env.PORT || 8766);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const CODEX_NODE_MODULES = `${homedir()}/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules`;
const FALLBACK_NODE_MODULES = [
  process.env.PLAYWRIGHT_NODE_MODULES,
  process.env.NODE_PATH,
  existsSync(CODEX_NODE_MODULES) ? CODEX_NODE_MODULES : ''
].filter(Boolean);

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
    for (const moduleDir of FALLBACK_NODE_MODULES) {
      try {
        return await import(`${moduleDir.replace(/\/$/, '')}/playwright/index.mjs`);
      } catch {
        // Try the next configured module path.
      }
    }
    throw error;
  }
}

function cachedChromiumExecutable() {
  if (process.env.PLAYWRIGHT_EXECUTABLE_PATH) return process.env.PLAYWRIGHT_EXECUTABLE_PATH;

  const cacheRoot = `${homedir()}/Library/Caches/ms-playwright`;
  if (!existsSync(cacheRoot)) return '';

  const candidates = readdirSync(cacheRoot)
    .filter(name => name.startsWith('chromium_headless_shell-'))
    .sort()
    .reverse()
    .map(name => join(cacheRoot, name, 'chrome-headless-shell-mac-arm64', 'chrome-headless-shell'));

  return candidates.find(executable => existsSync(executable)) || '';
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

async function visible(page, selector) {
  return await page.locator(selector).evaluate(element => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none'
      && style.visibility !== 'hidden'
      && Number(style.opacity) !== 0
      && rect.width > 0
      && rect.height > 0;
  });
}

async function profileLayoutState(page) {
  return await page.evaluate(() => {
    const panel = document.querySelector('#side-panel');
    const root = document.documentElement;
    const body = document.body;
    const rect = panel?.getBoundingClientRect();
    return {
      viewportWidth: root.clientWidth,
      documentScrollWidth: Math.max(root.scrollWidth, body?.scrollWidth || 0),
      panelClientWidth: panel?.clientWidth || 0,
      panelScrollWidth: panel?.scrollWidth || 0,
      panelLeft: rect?.left || 0,
      panelRight: rect?.right || 0,
      panelWidth: rect?.width || 0
    };
  });
}

function assertNoHorizontalOverflow(layout, label) {
  const tolerance = 1;
  assert(
    layout.documentScrollWidth <= layout.viewportWidth + tolerance,
    `${label} should not overflow the viewport horizontally (${layout.documentScrollWidth}px document in ${layout.viewportWidth}px viewport).`
  );
  assert(
    layout.panelScrollWidth <= layout.panelClientWidth + tolerance,
    `${label} profile should not overflow horizontally (${layout.panelScrollWidth}px content in ${layout.panelClientWidth}px panel).`
  );
}

async function assertProfileRenders(page, { id, name, context, expectedText }) {
  await page.goto(`${BASE_URL}/index.html?smoke=${context}#dino/${id}`, { waitUntil: 'load' });
  const state = await pageState(page);
  assert(state.panelOpen, `${name} should open its profile.`);
  assert(state.panelName === name, `Expected ${name} profile, saw ${state.panelName}.`);
  const bodyText = (await page.locator('#p-body').textContent()) || '';
  assert(bodyText.length > 250, `${name} should render a substantive profile body.`);
  assert(bodyText.includes(expectedText), `${name} should preserve its evidence-aware profile copy.`);
  for (const sectionId of ['profile-overview', 'profile-evidence', 'profile-locality', 'profile-sources']) {
    assert(await page.locator(`#${sectionId}`).count() === 1, `${name} should render ${sectionId}.`);
  }
}

async function main() {
  const { chromium } = await loadPlaywright();
  const server = staticServer();
  await listen(server);

  let browser;

  try {
    const executablePath = cachedChromiumExecutable();
    browser = await chromium.launch(executablePath ? { executablePath } : {});
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
    assert((await page.locator('#home-logo-btn').textContent()).includes('Dinosauria'), 'The centred home control should retain an accessible Dinosauria label.');
    assert(await page.locator('#home-logo-btn > .top-bar-brand-logo').count() === 1, 'The masthead should retain the dinosaur logo.');
    assert(await page.locator('#home-logo-btn > .top-bar-wordmark').count() === 1, 'The masthead should retain the Dinosauria wordmark.');
    const mastheadBrand = await page.locator('#home-logo-btn').evaluate(button => {
      const logoRect = button.querySelector('.top-bar-brand-logo')?.getBoundingClientRect();
      const wordmarkRect = button.querySelector('.top-bar-wordmark')?.getBoundingClientRect();
      return {
        wordmarkCentreOffset: Math.abs(wordmarkRect.left + wordmarkRect.width / 2 - window.innerWidth / 2),
        logoHeight: logoRect?.height || 0,
        logoIsLeftOfWordmark: logoRect.right < wordmarkRect.left
      };
    });
    assert(mastheadBrand.wordmarkCentreOffset <= 1, 'The Dinosauria wordmark itself should be centred in the viewport.');
    assert(mastheadBrand.logoHeight <= 42 && mastheadBrand.logoIsLeftOfWordmark, 'The compact dinosaur logo should sit to the left without shifting the wordmark off centre.');
    assert(await page.locator('#nav-toggle .nav-toggle-copy').count() === 0, 'The menu control should rely on its familiar three-line icon without a redundant text label.');
    const menuControlStyle = await page.locator('#nav-toggle').evaluate(button => {
      const style = getComputedStyle(button);
      const rect = button.getBoundingClientRect();
      return { width: rect.width, height: rect.height, borderWidth: style.borderTopWidth };
    });
    assert(menuControlStyle.width <= 42 && menuControlStyle.height <= 38 && menuControlStyle.borderWidth === '0px', 'The menu icon should remain compact without an enclosing pill.');
    await page.locator('#nav-toggle').click();
    await page.waitForFunction(() => Number(getComputedStyle(document.querySelector('#nav-dropdown')).opacity) > .9);
    const navigationPopover = await page.locator('#nav-dropdown').evaluate(menu => {
      const style = getComputedStyle(menu);
      const firstItem = menu.querySelector('.rail-btn');
      const firstItemStyle = getComputedStyle(firstItem);
      const menuRect = menu.getBoundingClientRect();
      const firstItemRect = firstItem.getBoundingClientRect();
      return {
        visible: style.visibility === 'visible' && Number(style.opacity) > .9,
        radius: Number.parseFloat(style.borderTopLeftRadius),
        width: menu.getBoundingClientRect().width,
        itemRadius: Number.parseFloat(firstItemStyle.borderTopLeftRadius),
        leftInset: firstItemRect.left - menuRect.left,
        rightInset: menuRect.right - firstItemRect.right
      };
    });
    assert(navigationPopover.visible && navigationPopover.radius >= 20 && navigationPopover.itemRadius >= 10, 'The navigation menu should open as a rounded floating popover with softly rounded rows.');
    assert(navigationPopover.width <= 286, 'The navigation popover should remain compact rather than becoming a rigid side panel.');
    assert(Math.abs(navigationPopover.leftInset - navigationPopover.rightInset) <= 1, 'Navigation rows should be centred with equal left and right insets.');
    await page.locator('#nav-toggle').click();
    assert(await page.locator('#nav-toggle > .nav-logo-img').count() === 0, 'The skull logo should no longer be part of the menu control.');
    assert(await page.locator('.top-bar .top-bar-meta').count() === 0, 'Source attribution should no longer occupy the masthead.');
    assert((await page.locator('#home-view .home-editorial-title').textContent()).includes('Dinosaurs, evidence, and deep time'), 'The homepage should open with a dinosaur-specific editorial statement.');
    const homepageMission = (await page.locator('#home-view .home-editorial-copy').textContent()) || '';
    assert(homepageMission.includes('independent, open-access educational project'), 'The homepage should explain its open-access educational mission.');
    assert(homepageMission.includes('not an official museum publication or a substitute for peer-reviewed scholarship'), 'The homepage should state the project’s institutional and scholarly limits honestly.');
    assert(await page.locator('#home-view .home-hero-action').count() === 0, 'The hero should not duplicate the Explore the collection navigation.');
    assert(await page.locator('#home-quick-grid .home-quick-card').count() === 4, 'The homepage should show four live collection facts.');
    assert(await page.locator('#home-period-snapshot .home-period-segment').count() === 6, `The homepage should show the six-interval period distribution. ${consoleProblems.join(' | ')}`);
    assert(await page.locator('#home-view .home-foundations-section .wiki-info-panel-summary').count() === 4, 'Scientific foundations should present four visible summary cards.');
    const foundationCardHeights = await page.locator('#home-view .home-foundations-section .wiki-info-panels').evaluate(grid =>
      [...grid.querySelectorAll(':scope > .wiki-info-panel')].map(card => Math.round(card.getBoundingClientRect().height))
    );
    assert(Math.abs(foundationCardHeights[0] - foundationCardHeights[1]) <= 1 && Math.abs(foundationCardHeights[2] - foundationCardHeights[3]) <= 1, 'Foundation cards in each row should have matching heights.');
    assert(await page.locator('#home-view .home-collection-section > .wiki-section-header').count() === 0, 'Collection at a glance should not repeat an outer separator heading.');
    const collectionOverviewFrame = await page.locator('#collection-overview').evaluate(element => {
      const style = getComputedStyle(element);
      return { borderWidth: style.borderTopWidth, marginLeft: style.marginLeft, background: style.backgroundColor };
    });
    assert(collectionOverviewFrame.borderWidth === '0px' && collectionOverviewFrame.marginLeft === '0px', 'The collection overview should sit naturally in the homepage flow rather than inside a second framed panel.');
    assert(await page.locator('#dashboard > .view-footer .view-footer-scene').count() === 1, 'The homepage should carry the scene at the end of its page content.');
    assert(await page.locator('#dashboard > .view-footer .view-footer-source').count() === 1, 'The homepage footer should carry the NHM source attribution.');
    assert((await page.locator('#dashboard > .view-footer .view-footer-credit').textContent()).includes('Designed by George Philippou'), 'The homepage footer should include the design credit.');
    const footerBottomSpace = await page.locator('#dashboard > .view-footer').evaluate(footer => Number.parseFloat(getComputedStyle(footer).marginBottom));
    assert(footerBottomSpace >= 32, 'The footer should retain breathing room below its contents.');

    await page.setViewportSize({ width: 1920, height: 1080 });
    const wideHomepageAlignment = await page.locator('#collection-overview').evaluate(overview => {
      const rect = overview.getBoundingClientRect();
      return {
        centreOffset: Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2),
        leftSpace: rect.left,
        rightSpace: window.innerWidth - rect.right
      };
    });
    assert(wideHomepageAlignment.centreOffset <= 1 && Math.abs(wideHomepageAlignment.leftSpace - wideHomepageAlignment.rightSpace) <= 1, 'Constrained homepage content should remain centred on wide screens.');
    await page.setViewportSize({ width: 1280, height: 720 });

    await page.locator('#global-search').fill('afrovenator');
    assert(await page.locator('#global-search-suggest .search-suggest-item').count() > 0, 'The masthead search should suggest matching dinosaur profiles.');
    await page.locator('#global-search-suggest .search-suggest-item').first().click();
    await page.waitForFunction(() => document.querySelector('#p-name')?.textContent === 'Afrovenator');
    const globalSearchProfile = await pageState(page);
    assert(globalSearchProfile.panelOpen && globalSearchProfile.panelName === 'Afrovenator', 'Selecting a masthead search result should open that profile directly.');

    await page.goto(`${BASE_URL}/index.html?smoke=ancient-earth-map#period`, { waitUntil: 'load' });
    assert(await page.locator('.period-map-zoom').count() === 1, 'Ancient Earth should expose its palaeogeographic map as an enlargement control.');
    const ancientEarthMapStyle = await page.locator('.period-map-image').evaluate(image => {
      const style = getComputedStyle(image);
      return { objectFit: style.objectFit, aspectRatio: style.aspectRatio };
    });
    assert(ancientEarthMapStyle.objectFit === 'contain', 'Ancient Earth maps should preserve the full projection instead of cropping it.');
    await page.locator('.period-map-zoom').click();
    assert(await page.locator('.lightbox.open').count() === 1, 'Clicking an Ancient Earth map should open it in the figure lightbox.');
    assert(((await page.locator('.lightbox-title').textContent()) || '').includes('Paleogeographic map'), 'The enlarged map should retain a descriptive title.');
    await page.locator('.lightbox-close').click();

    await page.goto(`${BASE_URL}/index.html?smoke=catalog#catalog`, { waitUntil: 'load' });
    const catalog = await pageState(page);
    assert(catalog.activeView === 'catalog-view', 'Catalogue hash should open catalogue view.');
    assert(catalog.cardCount === 60, `Catalogue should initially render 60 cards, saw ${catalog.cardCount}.`);
    assert(catalog.resultCount === '328 of 328 profiles', `Unexpected catalogue count: ${catalog.resultCount}`);
    assert(catalog.loadMeta === 'Showing 60 of 328', `Unexpected load meta: ${catalog.loadMeta}`);
    assert(!catalog.loadButtonHidden, 'Load more button should be visible for the full catalogue.');
    assert(await page.locator('#catalog-view .results > .view-footer .view-footer-scene').count() === 1, 'The catalogue should carry the scene at the end of its results.');
    const catalogueFooterPlacement = await page.locator('#catalog-view .results').evaluate(results => {
      const footer = results.querySelector(':scope > .view-footer');
      return footer ? footer.offsetTop > results.clientHeight : false;
    });
    assert(catalogueFooterPlacement, 'The catalogue footer must sit below the page content, not at the bottom of the screen.');
    assert(await visible(page, '#catalog-filter-body'), 'Catalogue filters should start open on desktop.');

    await page.locator('#catalog-filter-toggle').click();
    assert(!await visible(page, '#catalog-filter-body'), 'Catalogue filter button should collapse the controls.');
    await page.locator('#catalog-filter-toggle').click();
    assert(await visible(page, '#catalog-filter-body'), 'Catalogue filter button should restore the controls.');

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
    assert(await page.locator('.profile-dossier > .view-footer .view-footer-scene').count() === 1, 'Full dinosaur profiles should carry the scene as a footer mark.');
    const triceratopsText = (await page.locator('#p-body').textContent()) || '';
    assert(!triceratopsText.includes('Authoritative-source baseline only'), 'Completed batch reviews must not inherit the pre-review baseline summary.');
    assert(triceratopsText.includes('Scannella et al. (2014)'), 'Completed batch reviews should identify their own cited literature as the evidence source basis.');

    await page.goto(`${BASE_URL}/index.html?smoke=reviewed-synonym#dino/ammosaurus`, { waitUntil: 'load' });
    const ammosaurusText = await page.locator('#p-body').textContent();
    assert(ammosaurusText.includes('junior synonym of Anchisaurus polyzelus'), 'Ammosaurus should be identified as a historical junior synonym.');
    assert(ammosaurusText.includes('Primary-literature reviewed'), 'Reviewed profiles should show their scientific-review status.');
    assert(!ammosaurusText.includes('AI-drafted text'), 'Reviewed profiles must not present superseded AI prose as active content.');

    await page.goto(`${BASE_URL}/index.html?smoke=reviewed-material#dino/amygdalodon`, { waitUntil: 'load' });
    const amygdalodonText = await page.locator('#p-body').textContent();
    assert(amygdalodonText.includes('at least two individuals'), 'Amygdalodon should describe the mixed multi-individual type assemblage.');
    assert(amygdalodonText.includes('MLP 46-VIII-21-1/2'), 'Amygdalodon should identify the correct lectotype.');

    await page.goto(`${BASE_URL}/index.html?smoke=afrovenator-evidence#dino/afrovenator`, { waitUntil: 'load' });
    const afrovenatorText = await page.locator('#p-body').textContent();
    assert(afrovenatorText.includes('relatively complete partial skeleton'), 'Afrovenator should not be described as known only from limited fossil remains.');
    assert(afrovenatorText.includes('late Middle Jurassic'), 'Afrovenator should include the revised Tiourarén Formation age.');
    assert(!afrovenatorText.includes('Known from 3 occurrence records in the Paleobiology Database'), 'PBDB occurrence count must not replace Afrovenator skeletal-completeness evidence.');
    assert(afrovenatorText.includes('PBDB sampled age differs from reviewed profile range'), 'Afrovenator age uncertainty should identify the reviewed range rather than misattribute it to NHM.');
    assert(!afrovenatorText.includes('PBDB age differs from NHM label'), 'A literature-reviewed age must not be labelled as the NHM range.');

    const compactPanel = await profileLayoutState(page);
    assert(!await page.locator('#side-panel').evaluate(panel => panel.classList.contains('expanded')), 'Afrovenator should open as a compact side panel on desktop.');
    assert(await page.locator('.profile-dossier').count() === 1, 'The research dossier should be mounted.');
    assert(await visible(page, '.profile-dossier-hero'), 'The digest hero should be visible when the panel first opens.');
    assert(await page.locator('.profile-accordion-item').count() === 7, 'The dossier should expose all seven chapters as accordion items.');
    assert(
      await page.locator('.profile-accordion-item.open').count() === 1,
      'Only the first chapter should start expanded.'
    );
    assert(
      compactPanel.panelWidth < compactPanel.viewportWidth - 80,
      `Desktop side panel should remain compact (${compactPanel.panelWidth}px in ${compactPanel.viewportWidth}px viewport).`
    );

    // Chapters not open by default should be reachable without expanding to full screen.
    const evidenceHead = page.locator('#profile-evidence .profile-accordion-head');
    const localityHead = page.locator('#profile-locality .profile-accordion-head');
    await evidenceHead.click();
    await localityHead.click();
    assert(await visible(page, '#profile-evidence .profile-accordion-body'), 'Opening the Fossil evidence chapter should reveal its body.');
    assert(await visible(page, '#profile-locality .profile-accordion-body'), 'Opening the Where & when chapter should reveal its body.');

    const headerFullProfileControl = page.locator('#panel-expand');
    assert(await headerFullProfileControl.count() === 1, 'The side panel should offer a persistent full-profile control.');
    assert(await visible(page, '#panel-expand'), 'The persistent full-profile control should be visible.');
    await headerFullProfileControl.click();
    await page.locator('#side-panel.expanded').waitFor();
    assert(await visible(page, '.profile-dossier-hero'), 'Expanding should keep the digest hero visible.');
    assert(await visible(page, '#profile-locality .profile-accordion-body'), 'Expanding should not collapse chapters the reader already opened.');

    const desktopDossier = await profileLayoutState(page);
    assert(
      desktopDossier.panelWidth >= desktopDossier.viewportWidth - 1,
      `Expanded dossier should fill the desktop viewport (${desktopDossier.panelWidth}px in ${desktopDossier.viewportWidth}px viewport).`
    );
    assertNoHorizontalOverflow(desktopDossier, 'Desktop full-screen');

    const localityMap = page.locator('.profile-dossier .map-card');
    assert(await localityMap.count() === 1, 'Afrovenator dossier should restore the fossil-locality world map.');
    assert(await visible(page, '.profile-dossier .map-card'), 'Afrovenator fossil-locality map should be visible.');
    assert(await localityMap.locator('.map-point').count() > 0, 'Afrovenator fossil-locality map should include at least one plotted marker.');
    const mapPrecision = localityMap.locator('.map-precision[data-map-precision]');
    assert(await mapPrecision.count() === 1, 'The fossil map should carry a visible coordinate-precision label.');
    assert(await visible(page, '.profile-dossier .map-card .map-precision'), 'The fossil-map precision label should be visible.');
    const precision = await mapPrecision.getAttribute('data-map-precision');
    assert(
      ['exact', 'formation-level', 'country-level'].includes(precision),
      `Unexpected fossil-map precision label: ${precision || 'missing'}.`
    );
    const precisionText = (await mapPrecision.textContent()) || '';
    const precisionTextMatchers = {
      exact: /exact|site[- ]level|precise|verified/i,
      'formation-level': /formation|regional/i,
      'country-level': /country[- ]level/i
    };
    assert(
      precisionTextMatchers[precision].test(precisionText),
      `Fossil-map fallback precision should be explained in visible text, saw: ${precisionText}`
    );

    assert(await page.locator('.profile-dossier .known-remains-card').count() === 0, 'Profiles should not infer a body-part fossil map from uneven material descriptions.');
    assert(await visible(page, '.profile-dossier .evidence-bar'), 'The reviewed fossil-evidence band should remain visible.');

    await page.goto(`${BASE_URL}/index.html?smoke=recent-taxonomy#dino/saurophaganax`, { waitUntil: 'load' });
    const saurophaganaxText = await page.locator('#p-body').textContent();
    assert(saurophaganaxText.includes('historical name'), 'Saurophaganax should no longer be presented as an uncomplicated giant allosaurid.');
    assert(saurophaganaxText.includes('Allosaurus anax'), 'Saurophaganax should include the 2024 reassignment of theropod material.');

    await page.goto(`${BASE_URL}/index.html?smoke=diet-correction#dino/segnosaurus`, { waitUntil: 'load' });
    const segnosaurusText = await page.locator('#p-body').textContent();
    assert(segnosaurusText.includes('plant-dominated omnivory'), 'Segnosaurus should describe the herbivory evidence rather than label it simply carnivorous.');

    await page.goto(`${BASE_URL}/index.html?smoke=nomenclature#dino/yingshanosaurus`, { waitUntil: 'load' });
    const yingshanosaurusText = await page.locator('#p-body').textContent();
    assert(yingshanosaurusText.includes('not a nomen nudum'), 'Yingshanosaurus should reflect the formal 1994 description.');

    await page.goto(`${BASE_URL}/index.html?smoke=active-debate#dino/troodon`, { waitUntil: 'load' });
    const troodonText = await page.locator('#p-body').textContent();
    assert(troodonText.includes('2025 study'), 'Troodon should include the renewed 2025 validity proposal.');
    assert(troodonText.includes('only the ICZN can replace'), 'Troodon should explain why the proposed neotype is not yet settled.');

    await page.goto(`${BASE_URL}/index.html?smoke=nanotyrannus-debate#dino/tyrannosaurus`, { waitUntil: 'load' });
    const tyrannosaurusText = await page.locator('#p-body').textContent();
    assert(tyrannosaurusText.includes('Nanotyrannus'), 'Tyrannosaurus should include the current Nanotyrannus dispute.');
    assert(tyrannosaurusText.includes('late-2025 studies'), 'Tyrannosaurus should include the latest maturity and taxonomic evidence.');

    await page.goto(`${BASE_URL}/index.html?smoke=gaps#dino/albertaceratops`, { waitUntil: 'load' });
    const gapLabels = await page.locator('.data-gap-label').allTextContents();
    assert(gapLabels.length > 0, 'Profiles with incomplete data should show explicit data-gap labels.');
    assert(gapLabels.includes('No reviewed mass estimate'), `Expected No reviewed mass estimate gap, saw: ${gapLabels.join(', ')}`);

    await page.goto(`${BASE_URL}/index.html?smoke=reviewed-formation-gap#dino/goyocephale`, { waitUntil: 'load' });
    const goyocephaleGapLabels = await page.locator('.data-gap-label').allTextContents();
    assert(!goyocephaleGapLabels.includes('Formation unresolved'), 'A reviewed Baruungoyot Formation must suppress the contradictory unresolved-formation gap.');

    await page.goto(`${BASE_URL}/index.html?smoke=diet-uncertainty#dino/eoraptor`, { waitUntil: 'load' });
    const eoraptorText = (await page.locator('#p-body').textContent()) || '';
    assert(!eoraptorText.includes('source lists Omnivore'), 'Eoraptor must not turn a cleared legacy omnivore label into a reviewed dietary conclusion.');
    assert(eoraptorText.includes('No taxon-specific dietary interpretation is retained'), 'Eoraptor should present its diet as not established.');
    assert(eoraptorText.includes('exact diet remain uncertain'), 'Eoraptor should retain the review\'s explicit dietary uncertainty.');

    await assertProfileRenders(page, {
      id: 'micropachycephalosaurus',
      name: 'Micropachycephalosaurus',
      context: 'fragmentary-profile',
      expectedText: 'very fragmentary small ornithischian'
    });
    const micropachycephalosaurusProfileText = (await page.locator('#p-body').textContent()) || '';
    assert(!micropachycephalosaurusProfileText.includes('Pachycephalosauria'), 'Micropachycephalosaurus profile must not retain the superseded pachycephalosaur classification.');
    assert(micropachycephalosaurusProfileText.includes('Cerapoda incertae sedis'), 'Micropachycephalosaurus profile should use its reviewed uncertain placement.');

    await assertProfileRenders(page, {
      id: 'polacanthus',
      name: 'Polacanthus',
      context: 'negative-remains-evidence',
      expectedText: 'incomplete, disarticulated postcranial skeleton'
    });

    const rejectedRegionCases = [
      { id: 'leaellynasaura', name: 'Leaellynasaura', expectedText: 'long-tailed postcranial skeletons', region: 'tail' },
      { id: 'lophostropheus', name: 'Lophostropheus', expectedText: 'fragmentary vertebral, pelvic', region: 'teeth' },
      { id: 'deltadromeus', name: 'Deltadromeus', expectedText: 'partial skeleton without a skull', region: 'teeth' },
      { id: 'hagryphus', name: 'Hagryphus', expectedText: 'partial hand and associated foot fragments', region: 'skull' },
      { id: 'nodosaurus', name: 'Nodosaurus', expectedText: 'partial postcranial skeleton with armour but no skull', region: 'tail' }
    ];
    for (const testCase of rejectedRegionCases) {
      await assertProfileRenders(page, {
        id: testCase.id,
        name: testCase.name,
        context: `rejected-region-${testCase.id}`,
        expectedText: testCase.expectedText
      });
    }

    const indirectSoftTissueCases = [
      { id: 'chinshakiangosaurus', name: 'Chinshakiangosaurus', expectedText: 'fleshy cheek' },
      { id: 'nothronychus', name: 'Nothronychus', expectedText: 'phylogenetic bracketing' },
      { id: 'sinovenator', name: 'Sinovenator', expectedText: 'No direct diet or feather impressions' }
    ];
    for (const testCase of indirectSoftTissueCases) {
      await assertProfileRenders(page, {
        id: testCase.id,
        name: testCase.name,
        context: `indirect-soft-tissue-${testCase.id}`,
        expectedText: testCase.expectedText
      });
    }

    await assertProfileRenders(page, {
      id: 'mononykus',
      name: 'Mononykus',
      context: 'ecological-nest-reference',
      expectedText: 'incomplete postcranial skeleton'
    });
    await assertProfileRenders(page, {
      id: 'ammosaurus',
      name: 'Ammosaurus',
      context: 'historical-profile',
      expectedText: 'junior synonym of Anchisaurus polyzelus'
    });

    const reviewedTypeCases = [
      { id: 'heterodontosaurus', expected: 'heterodontosaurid', rejected: 'small ornithopod' },
      { id: 'stenopelix', expected: 'possible marginocephalian', rejected: 'ceratopsian' },
      { id: 'guaibasaurus', expected: 'saurischian', rejected: 'prosauropod' },
      { id: 'herrerasaurus', expected: 'herrerasaurid', rejected: 'large theropod' }
    ];
    for (const testCase of reviewedTypeCases) {
      await page.goto(`${BASE_URL}/index.html?smoke=reviewed-type-${testCase.id}#catalog`, { waitUntil: 'load' });
      await page.locator('#search').fill(testCase.id);
      await page.locator(`#card-${testCase.id}`).waitFor();
      const displayedType = ((await page.locator(`#card-${testCase.id} .pills .pill`).nth(1).textContent()) || '').toLowerCase();
      assert(displayedType.includes(testCase.expected), `${testCase.id} should use reviewed type “${testCase.expected}”, saw: ${displayedType}`);
      assert(!displayedType.includes(testCase.rejected), `${testCase.id} must not retain legacy type “${testCase.rejected}”.`);
    }

    await page.goto(`${BASE_URL}/index.html?smoke=contested-not-historical#dino/troodon`, { waitUntil: 'load' });
    const troodonEcologyText = (await page.locator('#profile-ecology').textContent()) || '';
    assert(!troodonEcologyText.includes('historical or synonymised name'), 'Contested Troodon must not be presented as a settled historical synonym.');

    await page.goto(`${BASE_URL}/index.html?smoke=explicit-historical#dino/saurophaganax`, { waitUntil: 'load' });
    const saurophaganaxEcologyText = (await page.locator('#profile-ecology').textContent()) || '';
    assert(saurophaganaxEcologyText.includes('historical or synonymised name'), 'Saurophaganax should retain its explicit historical-profile treatment.');

    await page.goto(`${BASE_URL}/index.html?smoke=dubious-historical#dino/othnielia`, { waitUntil: 'load' });
    const othnieliaEcologyText = (await page.locator('#profile-ecology').textContent()) || '';
    assert(othnieliaEcologyText.includes('historical or synonymised name'), 'A rejected nomen dubium such as Othnielia should retain its historical-material warning.');

    await page.goto(`${BASE_URL}/index.html?smoke=mixed-size-provenance#dino/camarasaurus`, { waitUntil: 'load' });
    const camarasaurusSizeText = (await page.locator('.interpretation-item').filter({ hasText: 'Body size' }).textContent()) || '';
    assert(camarasaurusSizeText.includes('Source-reported estimate'), 'An inherited Camarasaurus length must remain source-reported when the review only clears mass.');
    assert(!camarasaurusSizeText.includes('Reviewed approximate estimate'), 'A cleared reviewed mass field must not make an inherited length look reviewed.');

    for (const id of ['muttaburrasaurus', 'ouranosaurus', 'velociraptor', 'noasaurus', 'patagosaurus']) {
      await page.goto(`${BASE_URL}/index.html?smoke=broad-diet-${id}#dino/${id}`, { waitUntil: 'load' });
      const ecologyText = (await page.locator('#profile-ecology').textContent()) || '';
      assert(!/Uncertain · source lists Herbivore/.test(ecologyText), `${id} exact-diet uncertainty must not erase a supported broad herbivore category.`);
      if (['velociraptor', 'noasaurus'].includes(id)) {
        assert(!/Uncertain · source lists Carnivore/.test(ecologyText), `${id} narrow feeding uncertainty must not erase its broad carnivore category.`);
      }
    }

    for (const id of ['heyuannia', 'diplodocus', 'giraffatitan', 'nigersaurus', 'opisthocoelicaudia', 'protarchaeopteryx', 'suchomimus']) {
      await page.goto(`${BASE_URL}/index.html?smoke=locomotion-scope-${id}#dino/${id}`, { waitUntil: 'load' });
      const movementText = (await page.locator('.interpretation-item').filter({ hasText: 'Movement' }).textContent()) || '';
      assert(!movementText.includes('Uncertain · source lists'), `${id} narrow posture or cross-topic uncertainty must not erase its broad locomotion category.`);
    }

    await page.goto(`${BASE_URL}/index.html?smoke=specialist-pending#dino/silvisaurus`, { waitUntil: 'load' });
    const silvisaurusEvidence = (await page.locator('.evidence-summary-score').textContent()) || '';
    assert(silvisaurusEvidence.includes('Review pending'), 'Specialist-pending profiles must not display a curated skeletal-completeness band.');
    assert(!((await page.locator('#p-body').textContent()) || '').includes('Literature reviewed'), 'Specialist-pending profiles must not carry the literature-reviewed evidence badge.');

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/index.html?smoke=mobile-catalog-filters#catalog`, { waitUntil: 'load' });
    assert(!await visible(page, '#catalog-filter-body'), 'Catalogue filters should start collapsed at 390px.');
    assert(await page.locator('#catalog-filter-toggle').getAttribute('aria-expanded') === 'false', 'Collapsed mobile filters should expose their state to assistive technology.');
    await page.locator('#catalog-filter-toggle').click();
    assert(await visible(page, '#catalog-filter-body'), 'Mobile users should be able to expand the catalogue filters.');

    await page.goto(`${BASE_URL}/index.html?smoke=mobile-dossier#dino/afrovenator`, { waitUntil: 'load' });
    const mobileProfile = await pageState(page);
    assert(mobileProfile.panelOpen, 'Afrovenator profile should open at 390px.');
    assert(mobileProfile.panelName === 'Afrovenator', `Expected mobile Afrovenator profile, saw ${mobileProfile.panelName}.`);
    assert(await visible(page, '.profile-dossier'), 'The full Afrovenator dossier should be visible at 390px.');
    await page.locator('#profile-evidence .profile-accordion-head').click();
    await page.locator('#profile-locality .profile-accordion-head').click();
    assert(await visible(page, '.profile-dossier .map-card'), 'The fossil-locality map should be reachable at 390px.');
    assert(await visible(page, '.profile-dossier .evidence-bar'), 'The fossil-evidence band should be reachable at 390px.');
    const mobileDossier = await profileLayoutState(page);
    assert(
      mobileDossier.panelWidth <= mobileDossier.viewportWidth + 1,
      `Mobile dossier should fit the viewport (${mobileDossier.panelWidth}px in ${mobileDossier.viewportWidth}px viewport).`
    );
    assertNoHorizontalOverflow(mobileDossier, '390px mobile');
    await page.setViewportSize({ width: 1280, height: 720 });

    await page.goto(`${BASE_URL}/index.html?smoke=field-guide#glossary`, { waitUntil: 'load' });
    const fieldGuide = await pageState(page);
    assert(fieldGuide.activeView === 'glossary-view', 'Field Guide hash should open the guide view.');
    await page.locator('text=Field Guide to Dinosaur Palaeontology').waitFor();
    assert(await page.locator('#profile-guide').count() === 1, 'Field Guide should include the profile-reading section.');

    await page.goto(`${BASE_URL}/index.html?smoke=timeline#timeline`, { waitUntil: 'load' });
    const timeline = await pageState(page);
    assert(timeline.activeView === 'timeline-view', 'Timeline hash should open timeline view.');
    assert(timeline.cardCount === 0, 'Timeline route should not mount catalogue cards.');

    await page.goto(`${BASE_URL}/index.html?smoke=clado-zoom#clado`, { waitUntil: 'load' });
    assert(await page.locator('.ft-tree-tools .ft-zoom-btn').count() === 5, 'Phylogenetic tree should expose zoom, fit, reset and full-screen controls.');
    assert(await page.locator('#ft-fullscreen-toggle').getAttribute('aria-pressed') === 'false', 'Full-screen tree control should expose its initial state.');
    assert(await page.locator('.ft-layout > .ft-tree-stage').count() === 1, 'Full-screen tree workspace should contain the tree stage.');
    assert(await page.locator('.ft-layout > .ft-side').count() === 1, 'Full-screen tree workspace should contain the selected-dinosaur profile panel.');
    await page.locator('.ft-layout').evaluate(layout => {
      Object.defineProperty(layout, 'requestFullscreen', { value: undefined, configurable: true });
    });
    await page.locator('#ft-fullscreen-toggle').click();
    assert(await page.locator('.ft-layout.is-fullscreen-fallback').count() === 1, 'Full-screen fallback should expand the whole tree workspace.');
    await page.locator('.ft-leaf[data-id="triceratops"]').click();
    assert(await page.locator('.ft-layout.has-selection .ft-side.has-selection').isVisible(), 'Selecting a dinosaur should reveal its profile within the full-screen workspace.');
    assert(((await page.locator('.ft-side .ft-card-name').textContent()) || '').includes('Triceratops'), 'The selected dinosaur profile should match the clicked tree leaf.');
    await page.locator('#ft-fullscreen-toggle').click();
    assert(await page.locator('.ft-layout.is-fullscreen-fallback').count() === 0, 'Full-screen fallback should exit cleanly.');
    const treeWidthBeforeZoom = await page.locator('.ft-svg').getAttribute('width');
    await page.locator('#ft-zoom-out').click();
    const treeWidthAfterZoom = await page.locator('.ft-svg').getAttribute('width');
    assert(Number(treeWidthAfterZoom) < Number(treeWidthBeforeZoom), 'Zoom out should reduce the rendered tree dimensions.');
    assert((await page.locator('#ft-zoom-level').textContent()) === '95%', 'Zoom level should be reported after zooming out.');
    const panSpace = await page.locator('.ft-tree-panel').evaluate(panel => ({
      clientWidth: panel.clientWidth,
      scrollWidth: panel.scrollWidth,
      clientHeight: panel.clientHeight,
      scrollHeight: panel.scrollHeight
    }));
    assert(panSpace.scrollWidth > panSpace.clientWidth * 2, 'Tree viewport should provide horizontal virtual canvas space for free panning.');
    assert(panSpace.scrollHeight > panSpace.clientHeight * 2, 'Tree viewport should provide vertical virtual canvas space for free panning.');

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
