import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const files = ['data/existing-dinosaurs.js','data/nhm-imported-dinosaurs.js','data/pbdb-enrichment.js','data/wiki-enrichment.js','data/ai-enriched-profiles.js','data/ai-fossil-records.js','data/ai-curated-evidence.js','data/content-overrides.js','data/curated-content.js'];
const win = {}; const ctx = vm.createContext({ window: win, console });
for (const f of files) vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'), ctx, {filename:f});
const all = [...(win.EXISTING_DINOSAUR_RECORDS||[]), ...(win.NHM_IMPORTED_DINOSAUR_RECORDS||[])];
const pbdb = win.PBDB_DINOSAUR_ENRICHMENT||{};
const ai = win.AI_ENRICHED_PROFILES||{};
const FI=['id','name','latin','meaning','type','period','mya','clade','subclade','diet','locomotion','length','massKg','found','food','teeth','silhouette','description','facts','pronunciation'];
function parseAge(s){const m=String(s||'').match(/\d+(?:\.\d+)?/g);if(!m)return null;const n=m.map(Number);return [Math.max(...n),Math.min(...n)];}

console.log('# AGE MISMATCHES vs PBDB (>8 Myr gap on either bound)');
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

console.log('\n# MISSING MASS but AI/overview may have it (top candidates)');
let gap=0;
for(const r of all){const id=r[0];if(r[12])continue; const a=ai[id]; if(a&&a.overview){const txt=a.overview.join(' ');const m=txt.match(/([\d,]+)\s*(kg|tonnes|tonne|t\b)/i);if(m){gap++;if(gap<=40)console.log(`${id.padEnd(20)} -> ${m[0]}`);}}}
console.log('total gap-fill mass candidates:', gap);

console.log('\n# "Period not listed by NHM" records');
for(const r of all){if(/not listed/i.test(r[5]))console.log(r[0], '| PBDB:', pbdb[r[0]]?.earlyInterval, pbdb[r[0]]?.firstAppearanceMa);}
