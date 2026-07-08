// Loads all data files in a fake-window sandbox and reports merged dataset stats.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const files = [
  'data/existing-dinosaurs.js',
  'data/nhm-imported-dinosaurs.js',
  'data/pbdb-enrichment.js',
  'data/wiki-enrichment.js',
  'data/ai-enriched-profiles.js',
  'data/ai-fossil-records.js',
  'data/ai-curated-evidence.js',
  'data/content-overrides.js',
];

const win = {};
const ctx = vm.createContext({ window: win, console });
for (const f of files) {
  const code = readFileSync(new URL('../' + f, import.meta.url), 'utf8');
  try { vm.runInContext(code, ctx, { filename: f }); }
  catch (e) { console.error('FAILED loading', f, '\n', e.message); process.exit(1); }
}

const existing = win.EXISTING_DINOSAUR_RECORDS || [];
const nhm = win.NHM_IMPORTED_DINOSAUR_RECORDS || [];
const all = [...existing, ...nhm];
console.log('existing:', existing.length, 'nhm:', nhm.length, 'total:', all.length);
console.log('PBDB:', Object.keys(win.PBDB_DINOSAUR_ENRICHMENT).length);
console.log('AI_ENRICHED_PROFILES:', Object.keys(win.AI_ENRICHED_PROFILES).length);
console.log('AI_CURATED_EVIDENCE:', Object.keys(win.AI_CURATED_EVIDENCE).length);
console.log('CONTENT_OVERRIDES:', Object.keys(win.CONTENT_OVERRIDES).length);

// field index reference
const FI = ['id','name','latin','meaning','type','period','mya','clade','subclade','diet','locomotion','length','massKg','found','food','teeth','silhouette','description','facts','pronunciation'];

// Dump a few well-known records for fact-checking
const byId = Object.fromEntries(all.map(r => [r[0], r]));
function show(id) {
  const r = byId[id];
  if (!r) { console.log('MISSING', id); return; }
  const o = {};
  FI.forEach((k,i)=>{ if(!['facts','description'].includes(k)) o[k]=r[i]; });
  console.log('\n===', id, '===');
  console.log(JSON.stringify(o));
}
['spinosaurus','tyrannosaurus','velociraptor','brachiosaurus','argentinosaurus','dreadnoughtus','deinocheirus','therizinosaurus','stegosaurus','triceratops','dilophosaurus','oviraptor','troodon','brontosaurus','apatosaurus','amphicoelias','ultrasauros'].forEach(show);

// how many missing mass
const noMass = all.filter(r => !r[12]).length;
console.log('\nrecords missing massKg:', noMass);
// periods present
console.log('periods:', [...new Set(all.map(r=>r[5]))].join(' | '));
