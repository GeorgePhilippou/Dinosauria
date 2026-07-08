/* ═══════════════════════════════════════════════════════════════════════════
   DINOSAURIA v2 — application logic
   Self-contained, dependency-free. Reuses the original data layers and merges
   them into a single model, applies v2 fact-check corrections, and renders all
   views with hash routing (#home #catalog #timeline #map #clado #glossary
   #dino/<slug>).
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
'use strict';

// ── constants ──────────────────────────────────────────────────────────────
const SOURCE_BASE = 'https://www.nhm.ac.uk/discover/dino-directory/';
const PERIOD_ORDER = ['Late Triassic','Early Jurassic','Mid Jurassic','Late Jurassic','Early Cretaceous','Late Cretaceous'];
const PERIOD_META = {
  'Late Triassic':    { ma:[237,201], mid:219, col:'var(--triassic)',        raw:'#2f9e78', short:'L. Triassic' },
  'Early Jurassic':   { ma:[201,174], mid:187, col:'var(--early-jurassic)',  raw:'#4aa3c9', short:'E. Jurassic' },
  'Mid Jurassic':     { ma:[174,163], mid:168, col:'var(--mid-jurassic)',    raw:'#3a8fc4', short:'M. Jurassic' },
  'Late Jurassic':    { ma:[163,145], mid:154, col:'var(--late-jurassic)',   raw:'#2f74b0', short:'L. Jurassic' },
  'Early Cretaceous': { ma:[145,101], mid:123, col:'var(--early-cretaceous)',raw:'#d0703f', short:'E. Cretaceous' },
  'Late Cretaceous':  { ma:[101,66],  mid:83,  col:'var(--late-cretaceous)', raw:'#b0432a', short:'L. Cretaceous' },
};
const DIET_COL = { Carnivore:'var(--carnivore)', Herbivore:'var(--herbivore)', Omnivore:'var(--omnivore)' };
const DIET_RAW = { Carnivore:'#c0503a', Herbivore:'#4f9d63', Omnivore:'#9a63c0' };
const CLADE_RAW = { Saurischia:'#6b62c4', Ornithischia:'#c08a2a' };
const VALIDITY_LABELS = { valid:'Valid', nomen_dubium:'Nomen dubium', contested:'Contested', synonymised:'Synonymised' };

const W = window;
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp = (n,a,b) => Math.max(a, Math.min(b, n));

// ── merge enrichment layers into unified stores ─────────────────────────────
const PBDB = W.PBDB_DINOSAUR_ENRICHMENT || {};
const WIKI = W.WIKI_ENRICHMENT || {};
const IMAGE_FILES = W.IMAGE_FILES || {};
const CLASS_PATHS = W.CLASSIFICATION_PATHS || {};
const VALIDITY = W.VALIDITY_STATUS || {};
const COUNTRY_POINTS = W.COUNTRY_POINTS || {};
const CLADO_TREE = W.CLADOGRAM_TREE || { name:'Dinosauria', children:[] };
const CORRECTIONS = W.V2_CORRECTIONS || {};

// rich content: inline RICH_CONTENT + RICH_PROFILES, then AI, then overrides
const RICH_PROFILES = W.RICH_PROFILES || {};
const RICH_CONTENT = Object.assign({}, W.RICH_CONTENT || {});
Object.entries(W.AI_ENRICHED_PROFILES || {}).forEach(([id,p]) => { if (!RICH_CONTENT[id]) RICH_CONTENT[id] = p; });
Object.entries(W.CONTENT_OVERRIDES || {}).forEach(([id,p]) => { if (!RICH_CONTENT[id]) RICH_CONTENT[id] = p; });

const FOSSIL = Object.assign({}, W.FOSSIL_RECORDS || {});
Object.entries(W.AI_FOSSIL_RECORDS || {}).forEach(([id,r]) => { if (!FOSSIL[id]) FOSSIL[id] = r; });

const EVIDENCE = Object.assign({}, W.CURATED_EVIDENCE || {});
Object.entries(W.AI_CURATED_EVIDENCE || {}).forEach(([id,e]) => { if (!EVIDENCE[id]) EVIDENCE[id] = e; });

// ── image helpers ───────────────────────────────────────────────────────────
function commonsUrl(file, width) { return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(String(file).replaceAll(' ','_')) + '?width=' + width; }
function commonsPage(file) { return 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(String(file).replaceAll(' ','_')); }
function fmtMass(kg) {
  if (kg == null) return null;
  if (kg >= 1000) return (kg/1000).toLocaleString(undefined,{maximumFractionDigits:1}) + ' t';
  if (kg < 1) return Math.round(kg*1000) + ' g';
  return kg.toLocaleString() + ' kg';
}
function periodKey(p) { return /Triassic/.test(p) ? 'triassic' : /Jurassic/.test(p) ? 'jurassic' : 'cretaceous'; }

// ── build the model ─────────────────────────────────────────────────────────
const FIELDS = ['id','name','latin','meaning','type','period','mya','clade','subclade','diet','locomotion','length','massKg','found','food','teeth','silhouette','description','facts','pronunciation'];

function decode(record) {
  const d = {};
  FIELDS.forEach((k,i) => d[k] = record[i]);
  return d;
}

function build(record) {
  const d = decode(record);
  // apply corrections
  const corr = CORRECTIONS[d.id];
  if (corr && corr.set) { d._corr = corr; Object.assign(d, corr.set); }

  const pbdb = PBDB[d.id] || null;
  const wiki = WIKI[d.id] || null;
  // clean locomotion / description via enrichment (mirrors original behaviour)
  if (/NHM records fossils from/i.test(d.description) && wiki?.extract) d.description = wiki.extract;
  if (/^not listed by nhm$/i.test(d.locomotion) && pbdb?.ecospace?.locomotion) d.locomotion = pbdb.ecospace.locomotion;

  const val = VALIDITY[d.id];
  const imageFile = IMAGE_FILES[d.id] || null;
  d.pKey = periodKey(d.period);
  d.periodMeta = PERIOD_META[d.period] || null;
  d.massText = fmtMass(d.massKg);
  d.pbdb = pbdb;
  d.wiki = wiki;
  d.imageFile = imageFile;
  d.imageUrl = imageFile ? commonsUrl(imageFile, 640) : '';
  d.imageUrlLarge = imageFile ? commonsUrl(imageFile, 1000) : '';
  d.imageSource = imageFile ? commonsPage(imageFile) : '';
  d.validity = val?.status || 'valid';
  d.validityNote = val?.note || null;
  d.classPath = CLASS_PATHS[d.id] || derivePath(d);
  d.source = SOURCE_BASE + d.id + '.html';
  d.dietCol = DIET_RAW[d.diet] || '#888';
  d.evidence = EVIDENCE[d.id] || null;
  return d;
}

function derivePath(d) {
  // fall back to a coarse path from clade/subclade/pbdb
  const path = ['Dinosauria', d.clade].filter(Boolean);
  if (d.subclade && d.subclade !== d.clade) path.push(d.subclade);
  const fam = d.pbdb?.family;
  if (fam && fam !== 'NO_FAMILY_SPECIFIED' && !path.includes(fam)) path.push(fam);
  path.push(d.name);
  return path;
}

const DINOS = [
  ...(W.EXISTING_DINOSAUR_RECORDS || []),
  ...(W.NHM_IMPORTED_DINOSAUR_RECORDS || [])
].map(build).sort((a,b) => a.name.localeCompare(b.name));

const BY_ID = Object.fromEntries(DINOS.map(d => [d.id, d]));

function profileFor(id) {
  return Object.assign({}, RICH_PROFILES[id] || {}, RICH_CONTENT[id] || {});
}
function searchText(d) {
  if (d._st) return d._st;
  const p = profileFor(d.id);
  const parts = [d.name, d.latin, d.meaning, d.type, d.period, d.subclade, d.diet, (d.found||[]).join(' '),
    (d.facts||[]).join(' '), d.description, (p.overview||[]).join(' '), (d.classPath||[]).join(' ')];
  d._st = parts.join(' ').toLowerCase();
  return d._st;
}

// ── state / routing ─────────────────────────────────────────────────────────
const state = {
  q:'', period:'all', diet:'all', clade:'all', place:'all', validity:'all', sort:'name-asc',
  compare: [], tlPeriod: null,
};
let currentView = 'home';

function go(hash) { W.location.hash = hash; }

function router() {
  const raw = W.location.hash.replace(/^#/, '') || 'home';
  if (raw.startsWith('dino/')) {
    const id = raw.slice(5);
    if (BY_ID[id]) { showView('dino'); renderProfile(id); window.scrollTo(0,0); return; }
  }
  const view = ['home','catalog','timeline','map','clado','glossary'].includes(raw) ? raw : 'home';
  showView(view);
  if (view === 'home') renderHome();
  if (view === 'catalog') renderCatalog();
  if (view === 'timeline') renderTimeline();
  if (view === 'map') renderMap();
  if (view === 'clado') renderClado();
  if (view === 'glossary') renderGlossary();
  if (['home','catalog','timeline','map','clado','glossary'].includes(raw)) window.scrollTo(0,0);
}

function showView(v) {
  currentView = v;
  $$('.view').forEach(el => el.classList.remove('active'));
  $('#view-' + v).classList.add('active');
  $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.route === v));
}

// ── HOME ────────────────────────────────────────────────────────────────────
function stats() {
  const total = DINOS.length;
  const byPeriod = {}, byDiet = {}, byClade = {}, byCountry = {};
  DINOS.forEach(d => {
    byPeriod[d.period] = (byPeriod[d.period]||0)+1;
    byDiet[d.diet] = (byDiet[d.diet]||0)+1;
    byClade[d.clade] = (byClade[d.clade]||0)+1;
    (d.found||[]).forEach(c => byCountry[c] = (byCountry[c]||0)+1);
  });
  const withLen = DINOS.filter(d => d.length);
  const longest = withLen.reduce((a,b) => b.length>a.length?b:a, withLen[0]);
  const heaviest = DINOS.filter(d=>d.massKg).reduce((a,b) => b.massKg>a.massKg?b:a);
  const smallest = withLen.reduce((a,b) => b.length<a.length?b:a, withLen[0]);
  const widest = DINOS.reduce((a,b) => (b.found?.length||0)>(a.found?.length||0)?b:a);
  return { total, byPeriod, byDiet, byClade, byCountry, longest, heaviest, smallest, widest,
    countries: Object.keys(byCountry).length };
}

function renderHome() {
  const s = stats();
  const rail = PERIOD_ORDER.map(p => {
    const meta = PERIOD_META[p]; const n = s.byPeriod[p]||0;
    const w = (n / s.total * 100).toFixed(1);
    return `<span style="width:${w}%;background:${meta.col}" title="${p}: ${n} genera"></span>`;
  }).join('');
  const featured = ['tyrannosaurus','triceratops','spinosaurus','stegosaurus','velociraptor','brachiosaurus','deinocheirus','therizinosaurus']
    .map(id => BY_ID[id]).filter(Boolean);

  $('#view-home').innerHTML = `
    <div class="hero">
      <div class="hero-grid">
        <div>
          <div class="eyebrow">252 – 66 million years ago</div>
          <h1>The <span class="accent">Mesozoic</span>, one genus at a time.</h1>
          <p class="hero-lead">A scientific field guide to <b>${s.total}</b> non-avian dinosaur genera — every profile cross-checked against the NHM Dinosaur Directory, the Paleobiology Database and the primary literature, with editorial corrections logged in the open.</p>
          <div class="hero-cta">
            <a class="btn primary" href="#catalog">Browse the catalogue →</a>
            <a class="btn" href="#timeline">Explore the timeline</a>
          </div>
          <div class="strata-rail">${rail}</div>
          <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:10px;font-size:11.5px;color:var(--text-3)">
            ${PERIOD_ORDER.map(p => `<span style="display:inline-flex;align-items:center;gap:5px"><i style="width:9px;height:9px;border-radius:2px;background:${PERIOD_META[p].col};display:inline-block"></i>${PERIOD_META[p].short} · ${s.byPeriod[p]||0}</span>`).join('')}
          </div>
        </div>
        <div class="hero-stats">
          ${statCard(s.total, 'genera catalogued', 'var(--accent)')}
          ${statCard(s.countries, 'countries with fossils', 'var(--late-jurassic)')}
          ${statCard('186M', 'years of dinosaur history', 'var(--triassic)')}
          ${statCard(Object.keys(CORRECTIONS).length, 'v2 fact-check edits', 'var(--early-cretaceous)')}
        </div>
      </div>
    </div>

    <div class="section-head"><div><div class="eyebrow">Collection records</div><h2>Superlatives of the dataset</h2></div></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
      ${recordCard('Longest', s.longest, s.longest.length+' m')}
      ${recordCard('Heaviest', s.heaviest, fmtMass(s.heaviest.massKg))}
      ${recordCard('Smallest', s.smallest, s.smallest.length+' m')}
      ${recordCard('Most widespread', s.widest, (s.widest.found?.length||0)+' countries')}
    </div>

    <div class="section-head"><div><div class="eyebrow">Start here</div><h2>Featured genera</h2></div><a class="btn" href="#catalog">See all ${s.total} →</a></div>
    <div class="grid">${featured.map(cardHTML).join('')}</div>
  `;
  wireCards($('#view-home'));
}
function statCard(k,l,col) {
  return `<div class="stat-card"><span class="strata" style="background:${col}"></span><div class="k">${k}</div><div class="l">${l}</div></div>`;
}
function recordCard(label, d, val) {
  return `<div class="card" data-id="${d.id}" style="cursor:pointer">
    <div class="card-img">${imgTag(d)}<div class="card-period-tab" style="color:${d.periodMeta?.raw||'#999'}">${label}</div></div>
    <div class="card-body"><div class="card-name">${esc(d.name)}</div><div class="card-latin">${esc(d.latin)}</div>
    <div class="card-foot"><span class="card-len">${val}</span><span class="card-edit">View →</span></div></div>
  </div>`;
}

// ── CATALOG ─────────────────────────────────────────────────────────────────
function imgTag(d) {
  if (!d.imageUrl) return `<div class="fallback">${esc(d.name[0])}</div>`;
  return `<img loading="lazy" src="${d.imageUrl}" alt="${esc(d.name)}" onerror="this.parentNode.innerHTML='<div class=\\'fallback\\'>${esc(d.name[0])}</div>'">`;
}
function cardHTML(d) {
  const val = d.validity !== 'valid' ? `<div class="card-validity">${VALIDITY_LABELS[d.validity]}</div>` : '';
  return `<div class="card" data-id="${d.id}">
    <div class="card-img">${imgTag(d)}
      <div class="card-period-tab" style="color:${d.periodMeta?.raw||'#999'}">${d.periodMeta?d.periodMeta.short:esc(d.period)}</div>
      ${val}
    </div>
    <div class="card-body">
      <div class="card-name">${esc(d.name)}</div>
      <div class="card-latin">${esc(d.latin)}</div>
      <div class="card-meta">
        <span class="mini" style="border-color:${d.dietCol}55">${esc(d.diet)}</span>
        <span class="mini">${esc(d.type)}</span>
      </div>
      <div class="card-foot">
        <span class="card-len">${d.length? d.length+' m' : '—'}${d.massText? ' · '+d.massText : ''}</span>
        <span class="card-edit">Profile →</span>
      </div>
    </div>
  </div>`;
}

function uniqueSorted(getter) {
  return [...new Set(DINOS.flatMap(getter).filter(Boolean))].sort();
}
let catalogBuilt = false;
function renderCatalog() {
  if (!catalogBuilt) {
    const places = uniqueSorted(d => d.found || []);
    const types = uniqueSorted(d => [d.type]);
    $('#view-catalog').innerHTML = `
      <div class="section-head"><div><div class="eyebrow">All ${DINOS.length} genera</div><h2>Catalogue</h2><p>Filter by geological period, diet, lineage, fossil locality and taxonomic status. Click any genus for its full profile.</p></div></div>
      <div class="controls">
        <div class="controls-row">
          <div class="field">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            <input id="cat-q" type="text" placeholder="Search name, trait, formation…" autocomplete="off">
          </div>
          <select id="f-period"><option value="all">All periods</option>${PERIOD_ORDER.map(p=>`<option>${p}</option>`).join('')}</select>
          <select id="f-diet"><option value="all">Any diet</option>${['Carnivore','Herbivore','Omnivore'].map(x=>`<option>${x}</option>`).join('')}</select>
          <select id="f-clade"><option value="all">Both orders</option><option>Saurischia</option><option>Ornithischia</option></select>
          <select id="f-place"><option value="all">Any locality</option>${places.map(p=>`<option>${esc(p)}</option>`).join('')}</select>
          <select id="f-validity"><option value="all">Any status</option><option value="valid">Valid</option><option value="contested">Contested</option><option value="nomen_dubium">Nomen dubium</option></select>
          <select id="f-sort">
            <option value="name-asc">A → Z</option>
            <option value="name-desc">Z → A</option>
            <option value="len-desc">Longest first</option>
            <option value="len-asc">Shortest first</option>
            <option value="mass-desc">Heaviest first</option>
            <option value="age-desc">Oldest first</option>
            <option value="age-asc">Youngest first</option>
          </select>
        </div>
        <div class="chip-row" id="cat-chips"></div>
      </div>
      <div class="grid" id="cat-grid"></div>
    `;
    // wire
    const sync = () => {
      state.q = $('#cat-q').value.trim();
      state.period = $('#f-period').value;
      state.diet = $('#f-diet').value;
      state.clade = $('#f-clade').value;
      state.place = $('#f-place').value;
      state.validity = $('#f-validity').value;
      state.sort = $('#f-sort').value;
      applyCatalog();
    };
    ['f-period','f-diet','f-clade','f-place','f-validity','f-sort'].forEach(id => $('#'+id).addEventListener('change', sync));
    $('#cat-q').addEventListener('input', sync);
    catalogBuilt = true;
  }
  // reflect state into controls
  $('#cat-q').value = state.q; $('#f-period').value = state.period; $('#f-diet').value = state.diet;
  $('#f-clade').value = state.clade; $('#f-place').value = state.place; $('#f-validity').value = state.validity; $('#f-sort').value = state.sort;
  applyCatalog();
}

function ageOf(d) { return d.periodMeta ? d.periodMeta.mid : 0; }
function applyCatalog() {
  let list = DINOS.filter(d => {
    if (state.period !== 'all' && d.period !== state.period) return false;
    if (state.diet !== 'all' && d.diet !== state.diet) return false;
    if (state.clade !== 'all' && d.clade !== state.clade) return false;
    if (state.place !== 'all' && !(d.found||[]).includes(state.place)) return false;
    if (state.validity !== 'all' && d.validity !== state.validity) return false;
    if (state.q && !searchText(d).includes(state.q.toLowerCase())) return false;
    return true;
  });
  const s = state.sort;
  list.sort((a,b) => {
    if (s==='name-asc') return a.name.localeCompare(b.name);
    if (s==='name-desc') return b.name.localeCompare(a.name);
    if (s==='len-desc') return (b.length||0)-(a.length||0);
    if (s==='len-asc') return (a.length||1e9)-(b.length||1e9);
    if (s==='mass-desc') return (b.massKg||0)-(a.massKg||0);
    if (s==='age-desc') return ageOf(b)-ageOf(a);
    if (s==='age-asc') return ageOf(a)-ageOf(b);
    return 0;
  });
  const grid = $('#cat-grid');
  grid.innerHTML = list.length ? list.map(cardHTML).join('')
    : `<div class="empty" style="grid-column:1/-1"><div style="font-size:40px">🦴</div>No genera match these filters.</div>`;
  wireCards(grid);
  renderChips();
  // result count into chip row
}
function renderChips() {
  const row = $('#cat-chips'); if (!row) return;
  const chips = [];
  const add = (label, clear) => chips.push({label, clear});
  if (state.q) add('“'+state.q+'”', () => { state.q=''; $('#cat-q').value=''; });
  if (state.period!=='all') add(state.period, () => { state.period='all'; $('#f-period').value='all'; });
  if (state.diet!=='all') add(state.diet, () => { state.diet='all'; $('#f-diet').value='all'; });
  if (state.clade!=='all') add(state.clade, () => { state.clade='all'; $('#f-clade').value='all'; });
  if (state.place!=='all') add(state.place, () => { state.place='all'; $('#f-place').value='all'; });
  if (state.validity!=='all') add(VALIDITY_LABELS[state.validity], () => { state.validity='all'; $('#f-validity').value='all'; });
  const count = $('#cat-grid').children.length;
  row.innerHTML = chips.map((c,i)=>`<span class="fchip" data-i="${i}">${esc(c.label)}<button aria-label="remove">×</button></span>`).join('')
    + `<span class="result-count">${count} genera</span>`;
  $$('.fchip', row).forEach(el => el.querySelector('button').addEventListener('click', () => { chips[+el.dataset.i].clear(); applyCatalog(); }));
}
function wireCards(root) {
  $$('.card[data-id]', root).forEach(c => c.addEventListener('click', () => go('dino/' + c.dataset.id)));
}

// ── PROFILE ─────────────────────────────────────────────────────────────────
function renderProfile(id) {
  const d = BY_ID[id];
  const p = profileFor(id);
  const overview = p.overview && p.overview.length ? p.overview : [d.description].filter(Boolean);
  const facts = d.facts || [];
  const fossil = FOSSIL[id];
  const ev = d.evidence;
  const cites = p.citations || defaultCitations(d);

  const tags = [
    `<span class="pill-tag" style="background:${d.periodMeta?d.periodMeta.col:'#777'};color:#fff">${esc(d.period)}</span>`,
    `<span class="pill-tag" style="background:${d.dietCol};color:#fff">${esc(d.diet)}</span>`,
    `<span class="pill-tag" style="background:var(--surface-3);color:var(--text-2)">${esc(d.clade)}</span>`,
    d.validity!=='valid' ? `<span class="pill-tag" style="background:#c9a22733;color:var(--text)">${VALIDITY_LABELS[d.validity]}</span>` : ''
  ].join('');

  const qf = [
    ['Length', d.length ? `${d.length}<small> m</small>` : '—'],
    ['Mass', d.massText || '—'],
    ['Lived', d.mya ? `${d.mya.replace(/ million years ago/,'')}<small> Ma</small>` : '—'],
    ['Diet', d.diet],
    ['Moved', cleanVal(d.locomotion)],
    ['Found in', (d.found||[]).join(', ') || '—'],
  ];

  const editorNote = d._corr ? `<div class="editor-note">
    <div class="h">Editor's note · v2 ${d._corr.kind}</div>
    <p>${esc(d._corr.note)}</p>
    <div class="refs">${(d._corr.refs||[]).map(r=>`<a href="${r.url}" target="_blank" rel="noreferrer">${esc(r.label)} ↗</a>`).join('')}</div>
  </div>` : '';

  const validityBanner = d.validityNote ? `<div class="validity-banner ${d.validity}">
    <span class="vic">${d.validity==='nomen_dubium'?'❓':'⚖️'}</span>
    <div class="vt"><b>${VALIDITY_LABELS[d.validity]}.</b> ${esc(d.validityNote)}</div>
  </div>` : '';

  $('#view-dino').innerHTML = `
    <div class="profile">
      <a class="back-link" href="#catalog">← Back to catalogue</a>
      <div class="p-hero">
        <div class="p-hero-img">
          ${d.imageUrlLarge ? `<img src="${d.imageUrlLarge}" alt="${esc(d.name)}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="fallback" style="display:none">${esc(d.name[0])}</div>` : `<div class="fallback">${esc(d.name[0])}</div>`}
          ${d.imageSource ? `<div class="credit">Image: <a href="${d.imageSource}" target="_blank" rel="noreferrer">Wikimedia Commons ↗</a></div>` : ''}
        </div>
        <div class="p-hero-body">
          <div class="p-tags">${tags}</div>
          <h1 class="p-name">${esc(d.name)}</h1>
          <div class="p-latin">${esc(d.latin)}</div>
          ${d.pronunciation ? `<div class="p-pron">/ ${esc(d.pronunciation)} /</div>` : ''}
          <div class="p-meaning">${d.meaning ? `“${esc(d.meaning)}” · ` : ''}<b>${esc(d.type)}</b></div>
          <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn" id="add-compare">＋ Compare</button>
            <a class="btn" href="${d.source}" target="_blank" rel="noreferrer">NHM record ↗</a>
          </div>
        </div>
      </div>

      ${editorNote}
      ${validityBanner}

      <div class="quickfacts">
        ${qf.map(([l,v])=>`<div class="qf"><div class="l">${l}</div><div class="v">${v}</div></div>`).join('')}
      </div>

      ${d.length ? `<div class="panel"><h3><span class="ic">▚</span> Scale</h3>${sizeViz(d)}</div>` : ''}

      <div class="panel prose"><h3><span class="ic">❧</span> Overview</h3>${overview.map(t=>`<p>${esc(t)}</p>`).join('')}</div>

      ${facts.length ? `<div class="panel"><h3><span class="ic">✦</span> Notable facts</h3><ul class="factlist">${facts.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></div>` : ''}

      <div class="panel"><h3><span class="ic">⛬</span> Classification</h3>
        <div class="class-path">${d.classPath.map((n,i)=>`${i?'<span class="class-sep">›</span>':''}<span class="class-node ${i===d.classPath.length-1?'leaf':''}">${esc(n)}</span>`).join('')}</div>
        ${d.pbdb?.attribution ? `<p style="margin-top:12px;font-size:13px;color:var(--text-3)">Named by ${esc(d.pbdb.attribution)}${d.pbdb.family && d.pbdb.family!=='NO_FAMILY_SPECIFIED'?` · Family ${esc(d.pbdb.family)}`:''}</p>`:''}
        <p style="margin-top:6px"><a href="#clado" style="color:var(--accent);font-size:13px">See ${esc(d.name)} in the family tree →</a></p>
      </div>

      ${fossilPanel(d, fossil, p)}
      ${evidencePanel(ev)}
      ${mapPanel(d)}

      <div class="panel"><h3><span class="ic">▤</span> Sources</h3>
        <div class="cite-list">${cites.map(c=>`<a href="${c.url}" target="_blank" rel="noreferrer">▸ ${esc(c.label)}</a>`).join('')}</div>
      </div>
    </div>
  `;
  $('#add-compare')?.addEventListener('click', () => { addCompare(id); });
}
function cleanVal(v) { return (!v || /not listed by nhm/i.test(v)) ? '—' : v; }
function defaultCitations(d) {
  const c = [{label:'NHM Dinosaur Directory: '+d.name, url:d.source}];
  if (d.wiki?.url) c.push({label:'Wikipedia: '+d.name, url:d.wiki.url});
  if (d.pbdb) c.push({label:'Paleobiology Database: '+d.name, url:d.pbdb.source || ('https://paleobiodb.org/classic/checkTaxonInfo?taxon_name='+d.name)});
  return c;
}
function sizeViz(d) {
  const maxRef = Math.max(d.length, 3);
  const trackH = 106;
  const humanH = trackH * (1.75 / maxRef);
  const dinoH = trackH * (d.length / maxRef);
  const scale = 100 / maxRef; // % width per relative — just visual
  return `<div class="sizeviz"><div class="sizeviz-track">
    <div class="sizeviz-human" style="left:0">
      <div class="sizeviz-bar" style="height:${humanH}px;width:11px"></div>
      <div class="sizeviz-cap">Human 1.75 m</div>
    </div>
    <div class="sizeviz-dino" style="left:70px;right:0">
      <div class="sizeviz-bar" style="height:${Math.max(dinoH,10)}px;width:100%;max-width:${Math.min(100, d.length*7)}%"></div>
      <div class="sizeviz-cap"><span class="sizeviz-len">${d.length} m</span> · ${esc(d.name)}</div>
    </div>
  </div></div>`;
}
function fossilPanel(d, fossil, p) {
  const sites = p.fossilSites || [];
  const pbForm = d.pbdb?.formations || [];
  let inner = '';
  if (fossil) {
    const rows = [];
    if (fossil.formations) rows.push(['Formations', fossil.formations]);
    if (fossil.material) rows.push(['Known material', fossil.material]);
    if (fossil.completeness) rows.push(['Completeness', fossil.completeness]);
    if (fossil.paleo) rows.push(['Palaeoenvironment', fossil.paleo]);
    inner += rows.map(([l,v])=>`<p><b>${l}.</b> <span style="color:var(--text-2)">${esc(v)}</span></p>`).join('');
  }
  if (sites.length) {
    inner += `<div class="fossil-grid" style="margin-top:6px">${sites.map(s=>`<div class="fossil-site"><div class="fn">${esc(s.name)}</div><div class="fr">${esc(s.region||'')}</div>${s.note?`<div class="fnote">${esc(s.note)}</div>`:''}</div>`).join('')}</div>`;
  } else if (!fossil && pbForm.length) {
    inner += `<p><b>PBDB formations.</b> <span style="color:var(--text-2)">${pbForm.map(esc).join(', ')}</span></p>`;
  }
  if (d.pbdb) {
    inner += `<p style="font-size:12.5px;color:var(--text-3);margin-top:8px">Paleobiology Database: ${d.pbdb.occurrenceCount||0} occurrence record(s)${d.pbdb.firstAppearanceMa?`, spanning ${d.pbdb.firstAppearanceMa}–${d.pbdb.lastAppearanceMa} Ma`:''}${d.pbdb.countries?.length?` across ${d.pbdb.countries.join(', ')}`:''}.</p>`;
  }
  if (!inner) return '';
  return `<div class="panel"><h3><span class="ic">⛰</span> Fossil record</h3>${inner}</div>`;
}
function evidencePanel(ev) {
  if (!ev) return '';
  const score = ev.score != null ? ev.score : null;
  const col = score>=70?'var(--herbivore)':score>=45?'#c9a227':'var(--carnivore)';
  const meter = score!=null ? `<div class="evidence-meter"><div class="evidence-bar"><div class="evidence-fill" style="width:${score}%;background:${col}"></div></div><span class="evidence-score" style="color:${col}">${score}/100</span></div>` : '';
  const rows = [];
  if (ev.summary) rows.push(ev.summary);
  const details = [];
  if (ev.confidenceLimit) details.push(['What we can\'t say', ev.confidenceLimit]);
  if (ev.inferredAnatomy) details.push(['Inferred anatomy', ev.inferredAnatomy]);
  return `<div class="panel"><h3><span class="ic">◔</span> Evidence quality</h3>
    ${meter}
    ${rows.map(r=>`<p style="color:var(--text-2)">${esc(r)}</p>`).join('')}
    ${details.map(([l,v])=>`<p style="font-size:13px"><b>${l}.</b> <span style="color:var(--text-2)">${esc(v)}</span></p>`).join('')}
  </div>`;
}
function mapPanel(d) {
  const pts = (d.found||[]).map(c => ({c, p:COUNTRY_POINTS[c]})).filter(x=>x.p);
  if (!pts.length) return '';
  const svg = miniMap(pts);
  return `<div class="panel"><h3><span class="ic">◍</span> Where it was found</h3>${svg}
    <p style="margin-top:10px;font-size:12.5px;color:var(--text-3)">Modern country locations of recorded fossils. In life, ${esc(d.name)} inhabited a very different palaeogeography — see the <a href="#timeline" style="color:var(--accent)">timeline</a> for period maps.</p></div>`;
}

// ── shared mini world map (equirectangular) ─────────────────────────────────
const MAP_W = 720, MAP_H = 360;
function proj(lat, lon) { return [ (lon+180)/360*MAP_W, (90-lat)/180*MAP_H ]; }
// coarse continent polygons (equirectangular lon/lat) — schematic, for orientation only
const CONTINENTS = [
  // North America
  [[-168,66],[-150,70],[-125,70],[-95,72],[-80,68],[-60,58],[-55,50],[-70,42],[-80,25],[-97,18],[-105,23],[-115,30],[-125,40],[-130,54],[-168,60]],
  // South America
  [[-81,10],[-70,12],[-60,8],[-50,0],[-42,-10],[-40,-22],[-48,-33],[-58,-40],[-65,-52],[-72,-52],[-72,-40],[-70,-20],[-78,-5],[-81,5]],
  // Africa
  [[-17,15],[-5,35],[10,37],[20,32],[32,31],[43,12],[51,12],[42,-2],[40,-15],[32,-28],[20,-35],[18,-32],[12,-18],[8,4],[-8,5],[-17,12]],
  // Europe
  [[-10,43],[-2,49],[2,51],[8,54],[10,58],[24,60],[30,60],[40,55],[40,46],[28,41],[20,40],[10,44],[0,43],[-9,40]],
  // Asia
  [[26,42],[45,42],[55,50],[60,66],[90,72],[140,72],[160,68],[178,66],[145,58],[135,48],[122,40],[122,32],[108,20],[95,18],[80,8],[77,8],[72,20],[60,25],[45,38],[35,37],[30,40]],
  // Australia
  [[113,-22],[122,-18],[131,-12],[142,-11],[150,-22],[153,-28],[147,-38],[138,-35],[129,-32],[115,-34],[113,-26]],
  // India tail already in asia; Greenland
  [[-45,60],[-30,64],[-20,70],[-25,78],[-40,80],[-52,76],[-55,68],[-48,60]],
];
function baseMapSvg(markers, opts={}) {
  const grat = [];
  for (let lon=-150; lon<=150; lon+=30) { const [x] = proj(0,lon); grat.push(`<line class="map-graticule" x1="${x}" y1="0" x2="${x}" y2="${MAP_H}"/>`); }
  for (let lat=-60; lat<=60; lat+=30) { const [,y] = proj(lat,0); grat.push(`<line class="map-graticule" x1="0" y1="${y}" x2="${MAP_W}" y2="${y}"/>`); }
  const land = CONTINENTS.map(poly => `<polygon class="map-land" points="${poly.map(([lo,la])=>proj(la,lo).join(',')).join(' ')}"/>`).join('');
  return `<svg class="map-svg" viewBox="0 0 ${MAP_W} ${MAP_H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="World fossil map">
    <rect width="${MAP_W}" height="${MAP_H}" fill="transparent"/>
    ${grat.join('')}
    ${land}
    ${markers}
  </svg>`;
}
function miniMap(pts) {
  const markers = pts.map(({c,p}) => {
    const [x,y] = proj(p.lat, p.lon);
    return `<g class="map-marker"><circle cx="${x}" cy="${y}" r="6"/><text x="${x}" y="${y-9}" text-anchor="middle">${esc(c.replace('United Kingdom','UK'))}</text></g>`;
  }).join('');
  return baseMapSvg(markers);
}

// ── TIMELINE ────────────────────────────────────────────────────────────────
const TL_OLD = 237, TL_YOUNG = 66;   // axis bounds aligned to the period rail
function tlX(ma) { return clamp((TL_OLD - ma)/(TL_OLD - TL_YOUNG) * 100, 0, 100); }
function recordAgeMid(d) {
  const nums = String(d.mya||'').match(/\d+(?:\.\d+)?/g);
  let mid = d.periodMeta ? d.periodMeta.mid : null;
  if (nums && nums.length) {
    const n = nums.map(Number);
    mid = n.length >= 2 ? (Math.max(n[0],n[1]) + Math.min(n[0],n[1]))/2 : n[0];
  }
  // keep within period bounds so nothing lands outside its coloured band
  if (d.periodMeta) mid = clamp(mid, d.periodMeta.ma[1]+0.5, d.periodMeta.ma[0]-0.5);
  return mid;
}
function renderTimeline() {
  const counts = {}; PERIOD_ORDER.forEach(p => counts[p]=0);
  DINOS.forEach(d => { if (counts[d.period]!=null) counts[d.period]++; });
  const periods = PERIOD_ORDER.map(p => {
    const m = PERIOD_META[p];
    const w = (m.ma[0]-m.ma[1]);
    return `<div class="tl-period ${state.tlPeriod&&state.tlPeriod!==p?'dim':''}" data-p="${p}" style="flex:${w};background:${m.col}">
      <div class="tp-name">${m.short}</div><div class="tp-ma">${m.ma[0]}–${m.ma[1]} Ma</div><div class="tp-count">${counts[p]} genera</div>
    </div>`;
  }).join('');

  // faint period band separators inside the plot, aligned to the axis
  const bands = PERIOD_ORDER.slice(1).map(p => `<div class="tl-band" style="left:${tlX(PERIOD_META[p].ma[0])}%"></div>`).join('');

  // dots: x by the genus's own age range midpoint (spreads them within the band)
  const plotDinos = DINOS.filter(d => d.periodMeta);
  const dots = plotDinos.map(d => {
    if (state.tlPeriod && d.period !== state.tlPeriod) return '';
    const x = tlX(recordAgeMid(d));
    const band = d.diet==='Carnivore'?0.20:d.diet==='Herbivore'?0.55:0.82;
    const jitter = ((hashStr(d.id)%1000)/1000 - .5) * 0.20;
    const y = clamp(band + jitter, 0.04, 0.94) * 100;
    return `<div class="tl-dot" data-id="${d.id}" style="left:${x}%;top:${y}%;background:${d.dietCol}"></div>`;
  }).join('');

  const EVENTS = (W.EVENTS || []).filter(e=>e.ma<=TL_OLD && e.ma>=TL_YOUNG).sort((a,b)=>b.ma-a.ma);
  const evMarks = EVENTS.map((e,i) => {
    const x = tlX(e.ma);
    const rowTop = [4, 22, 40][i % 3];
    return `<div class="tl-event" style="left:${x}%"><span style="top:${rowTop}px">${esc(e.label)} · ${e.ma}</span></div>`;
  }).join('');

  $('#view-timeline').innerHTML = `
    <div class="section-head"><div><div class="eyebrow">252 – 66 million years ago</div><h2>Mesozoic timeline</h2><p>Every genus is placed on a true time-axis by the midpoint of its dated range. Colour shows diet; vertical position separates the three diets. Click a period to isolate it, or a dot to open the genus.</p></div>
    ${state.tlPeriod?`<button class="btn" id="tl-reset">Show all periods</button>`:''}</div>
    <div class="tl-wrap">
      <div class="tl-periods">${periods}</div>
      <div class="tl-plot" id="tl-plot">${bands}${evMarks}${dots}</div>
      <div class="tl-legend">
        <span><i style="background:var(--carnivore)"></i>Carnivore</span>
        <span><i style="background:var(--herbivore)"></i>Herbivore</span>
        <span><i style="background:var(--omnivore)"></i>Omnivore</span>
        <span style="color:var(--text-3)">← older &nbsp;·&nbsp; younger →</span>
      </div>
    </div>
    <div class="section-head"><div><div class="eyebrow">Deep time context</div><h2>What changed, when</h2></div></div>
    <div class="fg-grid">
      ${(W.EVENTS||[]).map(e=>`<div class="fg-card"><h4>${e.ma} Ma · ${esc(e.label)}</h4><p>${esc(e.note||'')}</p>${e.url?`<p style="margin-top:6px"><a href="${e.url}" target="_blank" rel="noreferrer" style="color:var(--accent);font-size:12px">Read more ↗</a></p>`:''}</div>`).join('')}
    </div>
  `;
  $$('.tl-period').forEach(el => el.addEventListener('click', () => {
    state.tlPeriod = state.tlPeriod === el.dataset.p ? null : el.dataset.p; renderTimeline();
  }));
  $('#tl-reset')?.addEventListener('click', () => { state.tlPeriod=null; renderTimeline(); });
  const tip = $('#tl-tip');
  $$('.tl-dot').forEach(dot => {
    dot.addEventListener('mouseenter', e => {
      const d = BY_ID[dot.dataset.id];
      tip.innerHTML = `<b>${esc(d.name)}</b><br><span style="color:var(--text-3)">${esc(d.period)} · ${esc(d.diet)} · ${d.length?d.length+' m':'—'}</span>`;
      tip.style.display = 'block';
    });
    dot.addEventListener('mousemove', e => { tip.style.left = (e.clientX+14)+'px'; tip.style.top = (e.clientY+14)+'px'; });
    dot.addEventListener('mouseleave', () => tip.style.display='none');
    dot.addEventListener('click', () => go('dino/'+dot.dataset.id));
  });
}
function hashStr(s) { let h=0; for (let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))|0; return Math.abs(h); }

// ── MAP VIEW ────────────────────────────────────────────────────────────────
function renderMap() {
  const byCountry = {};
  DINOS.forEach(d => (d.found||[]).forEach(c => (byCountry[c]=byCountry[c]||[]).push(d)));
  const entries = Object.entries(byCountry).filter(([c])=>COUNTRY_POINTS[c]).sort((a,b)=>b[1].length-a[1].length);
  const maxN = Math.max(...entries.map(([,l])=>l.length), 1);
  const markers = entries.map(([c,list]) => {
    const p = COUNTRY_POINTS[c]; const [x,y] = proj(p.lat, p.lon);
    const r = 4 + Math.sqrt(list.length/maxN)*16;
    return `<g class="map-marker" data-c="${esc(c)}"><circle cx="${x}" cy="${y}" r="${r.toFixed(1)}"/><text x="${x}" y="${(y+3).toFixed(1)}" text-anchor="middle" style="font-size:${clamp(r,7,11).toFixed(0)}px">${list.length}</text></g>`;
  }).join('');
  const side = entries.map(([c,list]) => `<div class="map-row" data-c="${esc(c)}"><span>${esc(c.replace('United Kingdom','UK'))}</span><span class="n">${list.length}</span></div>`).join('');

  $('#view-map').innerHTML = `
    <div class="section-head"><div><div class="eyebrow">${entries.length} countries · ${DINOS.length} genera</div><h2>Fossil localities</h2><p>Recorded fossil occurrences plotted on modern geography. Marker size scales with the number of genera. Click a country to filter the catalogue.</p></div></div>
    <div class="map-wrap">
      ${baseMapSvg(markers)}
      <div class="map-side"><h4>By country</h4>${side}</div>
    </div>
  `;
  const openCountry = c => { state.place=c; state.q=''; state.period='all'; state.diet='all'; state.clade='all'; state.validity='all'; go('catalog'); };
  $$('.map-marker').forEach(m => m.addEventListener('click', () => openCountry(m.dataset.c)));
  $$('.map-row').forEach(m => m.addEventListener('click', () => openCountry(m.dataset.c)));
}

// ── CLADOGRAM ───────────────────────────────────────────────────────────────
let cladoCollapsed = new Set();
function countLeaves(node) {
  if (node.id) return 1;
  return (node.children||[]).reduce((s,c)=>s+countLeaves(c), 0);
}
function renderClado() {
  $('#view-clado').innerHTML = `
    <div class="section-head"><div><div class="eyebrow">Phylogeny</div><h2>Family tree</h2><p>A collapsible cladogram across Saurischia and Ornithischia. Named genera link to their profiles; click a clade to expand or collapse it.</p></div>
    <div style="display:flex;gap:8px"><button class="btn" id="clado-expand">Expand all</button><button class="btn" id="clado-collapse">Collapse all</button></div></div>
    <div class="clado-wrap" id="clado-wrap">${cladoNode(CLADO_TREE, 0)}</div>
  `;
  wireClado();
  $('#clado-expand').addEventListener('click', () => { cladoCollapsed.clear(); renderClado(); });
  $('#clado-collapse').addEventListener('click', () => {
    cladoCollapsed = new Set(); collectClades(CLADO_TREE, 1); renderClado();
  });
}
function collectClades(node, depth) {
  if (node.children && depth>=1) cladoCollapsed.add(cladeKey(node));
  (node.children||[]).forEach(c => collectClades(c, depth+1));
}
function cladeKey(node) { return node.name + '|' + (node.ma||''); }
function cladoNode(node, depth) {
  const isLeaf = !!node.id || !(node.children && node.children.length);
  if (node.id) {
    const d = BY_ID[node.id];
    const name = d ? d.name : node.name;
    return `<div class="clado-node"><div class="clado-row">
      <span class="clado-toggle leaf">•</span>
      <span class="clado-label genus" data-id="${node.id}" style="color:${d?d.dietCol:'inherit'}">${esc(name)}</span>
      ${node.ma?`<span class="clado-ma">${esc(node.ma)}</span>`:''}
      ${d?`<span class="clado-count">${d.length?d.length+' m':d.period}</span>`:''}
    </div></div>`;
  }
  const key = cladeKey(node);
  const collapsed = cladoCollapsed.has(key);
  const n = countLeaves(node);
  const kids = (node.children||[]).map(c => cladoNode(c, depth+1)).join('');
  return `<div class="clado-node">
    <div class="clado-row">
      <button class="clado-toggle" data-key="${esc(key)}">${collapsed?'+':'–'}</button>
      <span class="clado-label clade">${esc(node.name)}</span>
      ${node.ma?`<span class="clado-ma">${esc(node.ma)}</span>`:''}
      <span class="clado-count">${n}</span>
    </div>
    <div class="clado-children ${collapsed?'collapsed':''}">${kids}</div>
  </div>`;
}
function wireClado() {
  $$('#clado-wrap .clado-toggle[data-key]').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.key;
    if (cladoCollapsed.has(k)) cladoCollapsed.delete(k); else cladoCollapsed.add(k);
    renderClado();
  }));
  $$('#clado-wrap .clado-label.genus').forEach(g => g.addEventListener('click', () => go('dino/'+g.dataset.id)));
}

// ── FIELD GUIDE / glossary ──────────────────────────────────────────────────
const GLOSSARY = [
  ['Saurischia','“Lizard-hipped” dinosaurs — the pubis points forward. Includes all theropods and the long-necked sauropodomorphs. Despite the name, birds (nested within theropods) belong here.'],
  ['Ornithischia','“Bird-hipped” dinosaurs — the pubis points backward, paralleling the arrangement in birds (which are <i>not</i> ornithischians). All are herbivorous or omnivorous, and include the armoured, horned and duck-billed groups.'],
  ['Theropoda','Mostly bipedal, mostly carnivorous saurischians — from tiny <span class="term">Microraptor</span> to <span class="term">Tyrannosaurus</span>. Living birds are the only surviving theropods.'],
  ['Sauropodomorpha','The long-necked plant-eaters, including the gigantic sauropods (<span class="term">Argentinosaurus</span>, <span class="term">Brachiosaurus</span>) and their smaller early relatives.'],
  ['Thyreophora','Armoured ornithischians: the plated stegosaurs and the tank-like ankylosaurs.'],
  ['Marginocephalia','“Fringed heads” — the dome-skulled pachycephalosaurs and the frilled, horned ceratopsians such as <span class="term">Triceratops</span>.'],
  ['Ornithopoda','Beaked, often bipedal herbivores culminating in the hugely successful duck-billed hadrosaurs.'],
  ['Nomen dubium','A “doubtful name”: a taxon based on remains too incomplete or non-distinctive to be confidently distinguished from relatives (e.g. <span class="term">Troodon</span>).'],
  ['Holotype','The single specimen that formally anchors a species name. Every later identification is compared back to it.'],
  ['Formation','A named, mappable body of rock deposited over a defined interval — the fundamental unit for placing a fossil in time and environment (e.g. the Hell Creek or Nemegt Formation).'],
  ['Gastroliths','“Stomach stones” swallowed to help grind plant matter, found with many sauropods and some theropods such as <span class="term">Deinocheirus</span>.'],
  ['Ma (mega-annum)','Millions of years before present. The Mesozoic runs from ~252 Ma (start of the Triassic) to 66 Ma (the K–Pg extinction).'],
  ['K–Pg boundary','The Cretaceous–Palaeogene boundary at 66 Ma, marking the asteroid impact that ended the non-avian dinosaurs.'],
  ['Cladogram','A branching diagram of evolutionary relationships based on shared derived characters, rather than on overall similarity or time.'],
  ['Type species','The species that serves as the reference point defining a genus (e.g. <span class="term">Tyrannosaurus rex</span> for <i>Tyrannosaurus</i>).'],
  ['Bipedal / Quadrupedal','Walking on two legs versus four. Several lineages (iguanodonts, early sauropodomorphs) sat in between, walking on all fours but able to rear up.'],
];
function renderGlossary() {
  $('#view-glossary').innerHTML = `
    <div class="section-head"><div><div class="eyebrow">Reference</div><h2>Field guide</h2><p>Key terms for reading the profiles — the major dinosaur lineages, and the vocabulary of dating, naming and classifying fossils.</p></div></div>
    <div class="panel prose" style="margin-bottom:20px">
      <h3><span class="ic">◆</span> The two great orders</h3>
      <p>All dinosaurs fall into two branches distinguished originally by hip structure. <b>Saurischia</b> (“lizard-hipped”) contains the meat-eating theropods and the long-necked sauropodomorphs. <b>Ornithischia</b> (“bird-hipped”) contains the exclusively plant-eating armoured, horned and duck-billed dinosaurs. The naming is a historical irony: birds evolved from <i>saurischian</i> theropods, not from the “bird-hipped” group.</p>
    </div>
    <div class="fg-grid">
      ${GLOSSARY.map(([t,b])=>`<div class="fg-card"><h4>${t}</h4><p>${b}</p></div>`).join('')}
    </div>
  `;
}

// ── COMPARE ─────────────────────────────────────────────────────────────────
function addCompare(id) {
  if (state.compare.includes(id)) return;
  state.compare.push(id);
  if (state.compare.length > 2) state.compare.shift();
  renderCompare();
}
function renderCompare() {
  const bar = $('#compare-bar'); const inner = $('#compare-inner');
  if (!state.compare.length) { bar.classList.remove('open'); return; }
  const slots = state.compare.map(id => {
    const d = BY_ID[id];
    return `<div class="compare-slot">
      <img class="sw" src="${d.imageUrl}" alt="" onerror="this.style.visibility='hidden'">
      <div><div style="font-family:var(--serif);font-weight:600">${esc(d.name)}</div>
      <div style="font-size:11.5px;color:var(--text-3)">${d.length?d.length+' m':'—'} · ${d.massText||'—'}</div></div>
    </div>`;
  });
  let mid = '';
  if (state.compare.length === 2) {
    const [a,b] = state.compare.map(id=>BY_ID[id]);
    const lr = a.length&&b.length ? (Math.max(a.length,b.length)/Math.min(a.length,b.length)).toFixed(1) : null;
    mid = `<div class="compare-vs">vs</div>`;
    slots.splice(1,0,mid);
    mid = lr ? `<div style="font-size:12.5px;color:var(--text-2)">${(a.length>b.length?a.name:b.name)} is <b>${lr}×</b> longer</div>` : '';
  }
  inner.innerHTML = slots.join('') + mid +
    `<button class="btn compare-clear" id="cmp-view" ${state.compare.length<2?'disabled style="opacity:.5"':''}>Compare →</button>
     <button class="icon-btn" id="cmp-clear" title="Clear">✕</button>`;
  bar.classList.add('open');
  $('#cmp-clear').addEventListener('click', () => { state.compare=[]; renderCompare(); });
  $('#cmp-view')?.addEventListener('click', () => { if (state.compare.length===2) openCompareModal(); });
}
function openCompareModal() {
  const [a,b] = state.compare.map(id=>BY_ID[id]);
  const rows = [
    ['Species', a.latin, b.latin],
    ['Period', a.period, b.period],
    ['Diet', a.diet, b.diet],
    ['Length', a.length?a.length+' m':'—', b.length?b.length+' m':'—'],
    ['Mass', a.massText||'—', b.massText||'—'],
    ['Lineage', a.subclade, b.subclade],
    ['Found', (a.found||[]).join(', '), (b.found||[]).join(', ')],
    ['Status', VALIDITY_LABELS[a.validity], VALIDITY_LABELS[b.validity]],
  ];
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;z-index:400;background:rgba(0,0,0,.6);display:grid;place-items:center;padding:20px';
  modal.innerHTML = `<div style="background:var(--surface);border:1px solid var(--line);border-radius:16px;max-width:640px;width:100%;max-height:90vh;overflow:auto;box-shadow:var(--shadow)">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 22px;border-bottom:1px solid var(--line)">
      <h3 style="font-size:20px">${esc(a.name)} vs ${esc(b.name)}</h3>
      <button class="icon-btn" id="cmp-x">✕</button>
    </div>
    <div style="padding:12px 22px 22px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows.map(([l,x,y])=>`<tr style="border-bottom:1px solid var(--line-soft)"><td style="padding:9px 8px 9px 0;color:var(--text-3);font-size:12px;text-transform:uppercase;letter-spacing:.6px;width:90px">${l}</td><td style="padding:9px 8px">${esc(x)}</td><td style="padding:9px 8px">${esc(y)}</td></tr>`).join('')}
      </table>
    </div>
  </div>`;
  document.body.appendChild(modal);
  document.body.classList.add('no-scroll');
  const close = () => { modal.remove(); document.body.classList.remove('no-scroll'); };
  modal.addEventListener('click', e => { if (e.target===modal) close(); });
  $('#cmp-x', modal).addEventListener('click', close);
}

// ── global search ───────────────────────────────────────────────────────────
function wireGlobalSearch() {
  const input = $('#gsearch'); const box = $('#gsuggest'); let active = -1;
  const results = q => {
    const lq = q.toLowerCase();
    return DINOS.filter(d => searchText(d).includes(lq))
      .sort((a,b)=>(a.name.toLowerCase().startsWith(lq)?0:1)-(b.name.toLowerCase().startsWith(lq)?0:1) || a.name.localeCompare(b.name))
      .slice(0,7);
  };
  const render = q => {
    if (q.length < 2) { box.classList.remove('open'); return; }
    const list = results(q); active = -1;
    if (!list.length) { box.innerHTML = `<div class="suggest-item"><span style="color:var(--text-3)">No matches</span></div>`; box.classList.add('open'); return; }
    box.innerHTML = list.map(d => `<div class="suggest-item" data-id="${d.id}">
      <span class="suggest-dot" style="background:${d.dietCol}"></span>
      <div><div class="suggest-name">${esc(d.name)}</div><div class="suggest-meta">${esc(d.type)} · ${esc(d.period)}</div></div></div>`).join('');
    box.classList.add('open');
    $$('.suggest-item[data-id]', box).forEach(el => el.addEventListener('mousedown', e => { e.preventDefault(); pick(el.dataset.id); }));
  };
  const pick = id => { box.classList.remove('open'); input.value=''; go('dino/'+id); };
  input.addEventListener('input', () => render(input.value.trim()));
  input.addEventListener('focus', () => { if (input.value.trim().length>=2) render(input.value.trim()); });
  input.addEventListener('blur', () => setTimeout(()=>box.classList.remove('open'), 150));
  input.addEventListener('keydown', e => {
    const items = $$('.suggest-item[data-id]', box);
    if (!items.length) return;
    if (e.key==='ArrowDown'){e.preventDefault();active=Math.min(active+1,items.length-1);}
    else if (e.key==='ArrowUp'){e.preventDefault();active=Math.max(active-1,0);}
    else if (e.key==='Enter'&&active>=0){e.preventDefault();pick(items[active].dataset.id);return;}
    else if (e.key==='Escape'){box.classList.remove('open');return;}
    items.forEach((el,i)=>el.classList.toggle('active',i===active));
  });
}

// ── theme ───────────────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('dino-theme');
  const theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  $('#theme-btn').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dino-theme', next);
  });
}

// ── boot ────────────────────────────────────────────────────────────────────
initTheme();
wireGlobalSearch();
window.addEventListener('hashchange', router);
router();

// expose for debugging
W.DINOSAURIA = { DINOS, BY_ID, state, CORRECTIONS };
})();
