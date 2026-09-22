/* Genus profile page — renders data/profiles/<id>.md.
 *
 * Each profile file is YAML front matter (the facts, stated once) followed by
 * Markdown sections (## Overview, ## Anatomy & life, …). See
 * data/profiles/README.md for the format and house style.
 *
 * Uses helpers defined in index.html at call time: escapeSvg, commonsImageUrl,
 * commonsFilePage, worldMapSvg, profileSectionNavNode, dinosauriaFooterNode,
 * setPanelExpanded, openPanel, DINOS.
 */
(function () {
  const BASE = 'data/profiles/';
  const cache = new Map();
  const RECORD_LABELS = ['', 'Fragmentary', 'Partial', 'Good', 'Excellent'];
  const SECTION_ORDER = [
    ['Overview', 'overview'],
    ['Anatomy & life', 'life'],
    ['Fossil record', 'fossils'],
    ['Where it lived', 'where'],
    ['Classification', 'classification'],
    ['Open questions', 'questions'],
  ];

  // ---------- loading & parsing ----------

  function parseProfile(text) {
    const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) throw new Error('missing front matter');
    const facts = window.jsyaml.load(m[1]) || {};
    const sections = {};
    let current = null;
    m[2].split('\n').forEach(line => {
      const h = line.match(/^##\s+(.+?)\s*$/);
      if (h) { current = h[1]; sections[current] = []; return; }
      if (current) sections[current].push(line);
    });
    Object.keys(sections).forEach(k => { sections[k] = sections[k].join('\n').trim(); });
    return { facts, sections };
  }

  function loadProfile(id) {
    if (cache.has(id)) return cache.get(id).promise;
    const entry = { done: false, data: null };
    entry.promise = fetch(`${BASE}${encodeURIComponent(id)}.md`, { cache: 'no-cache' })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
      .then(text => { entry.data = parseProfile(text); return entry.data; })
      .catch(err => { console.warn(`Profile unavailable for "${id}":`, err.message); return null; })
      .finally(() => { entry.done = true; });
    cache.set(id, entry);
    return entry.promise;
  }

  const profileLoaded = id => Boolean(cache.get(id)?.done);
  const profileData = id => cache.get(id)?.data || null;

  // ---------- tiny Markdown renderer (paragraphs, lists, ###, bold, italic, links) ----------

  const esc = s => escapeSvg(s ?? '');

  function inline(text) {
    return esc(text)
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,;:]|$)/g, '$1<em>$2</em>');
  }

  function markdown(md) {
    if (!md) return '';
    return md.split(/\n{2,}/).map(block => {
      const lines = block.split('\n').filter(Boolean);
      if (!lines.length) return '';
      if (lines.every(l => /^\s*[-*]\s+/.test(l))) {
        return `<ul class="pv2-list">${lines.map(l => `<li>${inline(l.replace(/^\s*[-*]\s+/, ''))}</li>`).join('')}</ul>`;
      }
      const h = lines[0].match(/^###\s+(.+)/);
      if (h) return `<h3>${inline(h[1])}</h3>` + (lines.length > 1 ? `<p>${inline(lines.slice(1).join(' '))}</p>` : '');
      return `<p>${inline(lines.join(' '))}</p>`;
    }).join('');
  }

  // "### Question\n\nAnswer…" blocks become collapsible questions; bullets stay a list.
  function questionsHtml(md) {
    const parts = md.split(/^###\s+/m);
    const lead = parts.shift().trim();
    const qs = parts.map(p => {
      const [title, ...rest] = p.split('\n');
      return `<details class="pv2-q"><summary>${inline(title.trim())}</summary>${markdown(rest.join('\n').trim())}</details>`;
    }).join('');
    return markdown(lead) + qs;
  }

  // ---------- fact formatting ----------

  const fmtNum = n => (Number.isInteger(n) ? String(n) : String(Math.round(n * 10) / 10));

  function sizeParts(f) {
    if (f.size_note) {
      const [len, mass] = String(f.size_note).split(/\s*·\s*/);
      return [len.replace(/^about\s+/, '~'), mass && `weight ${mass.replace(/^about\s+/, '~')}`];
    }
    const len = typeof f.length_m === 'number' ? `~${fmtNum(f.length_m)} m` : null;
    const kg = typeof f.mass_kg === 'number' ? f.mass_kg : null;
    const mass = kg == null ? null : kg >= 1000 ? `~${fmtNum(kg / 1000)} t` : `~${fmtNum(kg)} kg`;
    return [len, mass && `weight ${mass}`];
  }

  function ageSub(f) {
    const a = f.age_ma;
    if (!Array.isArray(a) || !a.length) return f.age_note || '';
    return a[0] === a[1] ? `about ${fmtNum(a[0])} million years ago` : `${fmtNum(a[0])}–${fmtNum(a[1])} million years ago`;
  }

  // null rating = awaiting specialist review: no completeness band is shown.
  const recordLevel = f => (f.fossil_record == null ? 0 : Number(f.fossil_record) || 1);
  const recordLabel = level => (level ? RECORD_LABELS[level] : 'Review pending');

  const pipsHtml = level => `<span class="pv2-pips" role="img" aria-label="${level} of 4">${[1, 2, 3, 4]
    .map(i => `<i class="${i <= level ? 'on' : ''}"></i>`).join('')}</span>`;

  function factsHtml(f) {
    const fact = (label, value, sub = '') => `<div><dt>${label}</dt><dd class="${value ? '' : 'na'}">${value ? esc(value) : 'Not estimated'}${sub ? `<small>${sub}</small>` : ''}</dd></div>`;
    const [len, mass] = sizeParts(f);
    const level = recordLevel(f);
    return `<dl class="pv2-facts">
      ${fact('Lived', f.period, esc(ageSub(f)))}
      ${fact('Size', len, mass ? esc(mass) : '')}
      ${fact('Diet', f.diet)}
      ${fact('Found in', (f.found_in || []).join(', '))}
      ${fact('Fossil record', recordLabel(level), level ? pipsHtml(level) : '')}
    </dl>`;
  }

  // ---------- page ----------

  // Names that are not straightforwardly valid get a notice under the facts.
  const HISTORICAL = /junior synonym|probable .*synonym|nomen dubium|dubious name|chimeric|juvenile or subadult/i;
  function statusHtml(d, f) {
    const status = String(f.status || 'valid').trim();
    if (/^(valid|accepted)$/i.test(status)) return '';
    const text = status.charAt(0).toUpperCase() + status.slice(1);
    if (HISTORICAL.test(status)) {
      return `<div class="pv2-status historical"><b>Historical or synonymised name</b><p>This is a historical or synonymised name: ${esc(status)}. Figures on this page concern material historically referred to ${esc(d.name)}, not proof of a distinct animal.</p></div>`;
    }
    return `<div class="pv2-status"><b>Status under discussion</b><p>${esc(text)}.</p></div>`;
  }

  function heroNode(d, f) {
    const hero = document.createElement('div');
    hero.className = 'pv2-hero';
    const lead = f.summary ? `<p class="pv2-lead">${inline(f.summary)}</p>` : '';
    let figure = '';
    const img = f.image;
    if (img?.file) {
      const page = commonsFilePage(img.file);
      const credit = img.credit ? esc(img.credit) : 'Wikimedia Commons';
      const alt = img.alt || `${d.name} illustration`;
      figure = `<figure class="pv2-figure">
        <div class="pv2-figure-frame"><img class="dino-zoomable" src="${commonsImageUrl(img.file, 1000)}" alt="${esc(alt)}" loading="eager" decoding="async" tabindex="0" role="button"
          data-lightbox-type="dinosaur" data-lightbox-title="${esc(d.name)}" data-lightbox-original="${page}"
          data-lightbox-caption="${esc(`${img.caption ? esc(img.caption) + ' ' : ''}${credit} · <a href="${page}" target="_blank" rel="noreferrer">source</a>`)}"></div>
        <figcaption>${img.caption ? esc(img.caption) + ' ' : ''}<span>${credit} · <a href="${page}" target="_blank" rel="noopener">source</a></span></figcaption>
      </figure>`;
    }
    hero.innerHTML = figure + lead + factsHtml(f) + statusHtml(d, f);
    hero.querySelector('img')?.addEventListener('error', e => e.target.closest('.pv2-figure')?.remove(), { once: true });
    return hero;
  }

  function section(id, title, html) {
    const s = document.createElement('section');
    s.className = 'pv2-section';
    s.id = `pv2-${id}`;
    s.innerHTML = `<h2 class="pv2-h"><span class="section-index"></span>${esc(title)}</h2>${html}`;
    return s;
  }

  function fossilsHtml(f, body) {
    const level = recordLevel(f);
    const note = level ? f.fossil_record_note
      : 'This genus is awaiting specialist review, so no completeness rating is given yet.' + (f.fossil_record_note ? ' ' + f.fossil_record_note : '');
    const meter = `<div class="pv2-meter"><div class="pv2-score">${level ? pipsHtml(level) : ''}<b>${recordLabel(level)}</b></div>${note ? `<span>${inline(note)}</span>` : ''}</div>`;
    const specs = (f.specimens || []).map(s => `<div class="pv2-spec">
        <code>${esc(s.id)}</code>
        <div>${s.label ? `<b>${esc(s.label)}</b> ` : ''}${inline(s.note || '')}${s.where ? `<small>${esc(s.where)}</small>` : ''}</div>
      </div>`).join('');
    return meter + markdown(body) + (specs ? `<h3>Key specimens</h3><div class="pv2-specs">${specs}</div>` : '');
  }

  function whereHtml(f, body) {
    const sites = f.sites || [];
    const mapped = sites.filter(s => typeof s.lat === 'number' && typeof s.lon === 'number');
    const map = mapped.length && typeof worldMapSvg === 'function'
      ? `<div class="pv2-map">${worldMapSvg(mapped.map(s => ({ name: s.name, lat: s.lat, lon: s.lon })))}<p class="map-precision" data-map-precision="formation-level">Markers show approximate formation-level locations, not exact fossil sites.</p></div>` : '';
    const list = sites.map(s => `<div class="pv2-site"><b>${esc(s.name)}${s.type_locality ? ' <em>type locality</em>' : ''}</b>${s.region ? `<span>${esc(s.region)}</span>` : ''}${s.note ? `<p>${inline(s.note)}</p>` : ''}</div>`).join('');
    const names = sites.map(s => s.name).join(' ').toLowerCase();
    const rock = f.formations && !names.includes(String(f.formations).split(/[,(]/)[0].trim().toLowerCase())
      ? `<p class="pv2-rock"><b>Rock units:</b> ${esc(f.formations)}</p>` : '';
    return map + markdown(body) + rock + (list ? `<div class="pv2-sites">${list}</div>` : '');
  }

  function classificationHtml(f, body, d) {
    const path = (f.classification || []).map(t => `<span>${esc(t)}</span>`).join('<i aria-hidden="true">›</i>');
    const pathHtml = path ? `<div class="pv2-path">${path}<i aria-hidden="true">›</i><span class="self">${esc(d.name)}</span></div>` : '';
    const related = (f.related || []).map(r => {
      const other = (typeof DINOS !== 'undefined' ? DINOS : []).find(x => x.id === r.id);
      if (!other) return '';
      return `<button type="button" class="pv2-rel" data-open="${esc(r.id)}"><b>${esc(other.name)}</b><span>${esc(r.why || other.period)}</span></button>`;
    }).join('');
    return pathHtml + markdown(body) + (related ? `<h3>Related dinosaurs</h3><div class="pv2-rels">${related}</div>` : '');
  }

  function sourcesHtml(f) {
    const items = (f.sources || []).map(s => {
      const url = s.doi ? `https://doi.org/${s.doi}` : s.url;
      return `<li>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(s.cite)}</a>` : esc(s.cite)}</li>`;
    }).join('');
    const drafted = f.tier === 'drafted'
      ? ' Parts of the text were first drafted with AI from museum and database records and are being checked against the literature.' : '';
    return `<ol class="pv2-sources">${items}</ol>
      <details class="pv2-about"><summary>About this profile</summary>
        <p>${f.reviewed ? `Last checked against the cited literature on ${esc(f.reviewed)}. ` : ''}The fossil-record rating is an editorial guide to how completely the genus is known, not a published measurement.${drafted}</p>
      </details>`;
  }

  /** Builds the profile. Returns { node, sections } for openPanel's reading header. */
  function renderProfile(d, data) {
    const { facts: f, sections: md } = data;
    const article = document.createElement('article');
    article.className = 'pv2';
    article.setAttribute('aria-label', `${d.name} full scientific profile`);

    const built = [];
    SECTION_ORDER.forEach(([title, id]) => {
      const body = md[title] || '';
      let html;
      if (id === 'fossils') html = fossilsHtml(f, body);
      else if (id === 'where') html = (body || (f.sites || []).length) ? whereHtml(f, body) : '';
      else if (id === 'classification') html = classificationHtml(f, body, d);
      else if (id === 'questions') html = body ? questionsHtml(body) : '';
      else html = markdown(body);
      if (html) built.push({ id: `pv2-${id}`, label: title, color: d.accent, node: section(id, title, html) });
    });
    built.push({ id: 'pv2-sources', label: 'Sources', color: d.accent, node: section('sources', 'Sources', sourcesHtml(f)) });
    built.forEach((s, i) => { s.node.querySelector('.section-index').textContent = String(i + 1).padStart(2, '0'); });
    built.slice(1).forEach(s => s.node.classList.add('pv2-more'));

    const nav = profileSectionNavNode(built);
    nav.classList.add('profile-dossier-nav', 'pv2-nav');

    article.append(nav, heroNode(d, f), ...built.map(s => s.node), dinosauriaFooterNode());
    article.addEventListener('click', e => {
      const btn = e.target.closest('[data-open]');
      if (btn) openPanel(btn.dataset.open);
    });
    return { node: article, sections: built };
  }

  window.GenusProfile = { load: loadProfile, loaded: profileLoaded, data: profileData, render: renderProfile, parse: parseProfile };
})();
