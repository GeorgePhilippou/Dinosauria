import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const files = [
  'data/existing-dinosaurs.js','data/nhm-imported-dinosaurs.js','data/pbdb-enrichment.js',
  'data/scientific-reviews.js','data/scientific-baseline-audit.js',
  'data/review-batches/reviews-a-c.js','data/review-batches/reviews-d-l.js',
  'data/review-batches/reviews-m-r.js','data/review-batches/reviews-s-z.js',
  'data/review-batches/reviews-s-z-remainder.js','data/review-batches/merge-reviews.js'
];
const win = {}; const ctx = vm.createContext({ window: win, console });
for (const f of files) vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'), ctx, {filename:f});
const original = [...(win.EXISTING_DINOSAUR_RECORDS||[]), ...(win.NHM_IMPORTED_DINOSAUR_RECORDS||[])];
const pbdb = win.PBDB_DINOSAUR_ENRICHMENT||{};
const reviews = win.SCIENTIFIC_REVIEWS||{};
const FI=['id','name','latin','meaning','type','period','mya','clade','subclade','diet','locomotion','length','massKg','found','food','teeth','silhouette','description','facts','pronunciation'];
const fieldIndexes = Object.fromEntries(FI.map((field, index) => [field, index]));
const all = original.map(row => {
  const result = [...row];
  const override = reviews[row[0]]?.record || {};
  Object.entries(override).forEach(([field, value]) => {
    if (fieldIndexes[field] !== undefined && value !== undefined) result[fieldIndexes[field]] = value;
  });
  return result;
});
function parseAge(s){const m=String(s||'').match(/\d+(?:\.\d+)?/g);if(!m)return null;const n=m.map(Number);return [Math.max(...n),Math.min(...n)];}

console.log('# REVIEWED PROFILE / PBDB AGE DIFFERENCES (>8 Myr on either bound)');
console.log('PBDB occurrence ranges are comparison alerts, not automatic corrections.');
let ageCount=0;
for(const r of all){
  const id=r[0]; const rec=Object.fromEntries(FI.map((k,i)=>[k,r[i]]));
  const p=pbdb[id]; if(!p||p.firstAppearanceMa==null) continue;
  const a=parseAge(rec.mya); if(!a) continue;
  const [recOld,recYoung]=a; const pOld=p.firstAppearanceMa, pYoung=p.lastAppearanceMa;
  const d1=Math.abs(recOld-pOld), d2=Math.abs(recYoung-pYoung);
  if(d1>8||d2>8){ ageCount++; if(ageCount<=40) console.log(`${id.padEnd(20)} rec ${rec.mya.padEnd(34)} | PBDB ${pOld}-${pYoung} (${p.earlyInterval||''}-${p.lateInterval||''})`);}
}
console.log('total age mismatches:', ageCount);

const noMass = all.filter(row => row[12] == null).length;
console.log(`\n# PROFILES WITH NO RETAINED MASS ESTIMATE: ${noMass}`);
console.log('Absence is retained rather than filling gaps from superseded generated prose.');

console.log('\n# UNSUPPORTED FINAL PERIOD LABELS');
let unsupportedPeriods = 0;
for(const r of all){if(/not listed/i.test(r[5]))console.log(r[0], '| PBDB:', pbdb[r[0]]?.earlyInterval, pbdb[r[0]]?.firstAppearanceMa);}
for(const r of all){if(/not listed/i.test(r[5]))unsupportedPeriods++;}
console.log('total unsupported period labels:', unsupportedPeriods);
