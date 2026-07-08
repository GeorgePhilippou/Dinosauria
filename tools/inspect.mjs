import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const files = ['data/existing-dinosaurs.js','data/nhm-imported-dinosaurs.js','data/pbdb-enrichment.js','data/curated-content.js'];
const win = {}; const ctx = vm.createContext({ window: win, console });
for (const f of files) vm.runInContext(readFileSync(new URL('../'+f,import.meta.url),'utf8'), ctx, {filename:f});
const all = [...(win.EXISTING_DINOSAUR_RECORDS||[]), ...(win.NHM_IMPORTED_DINOSAUR_RECORDS||[])];
const FI=['id','name','latin','meaning','type','period','mya','clade','subclade','diet','locomotion','length','massKg','found','food','teeth','silhouette'];
const byId=Object.fromEntries(all.map(r=>[r[0],r]));
const ids=process.argv.slice(2);
for(const id of ids){const r=byId[id];if(!r){console.log(id,'MISSING');continue;}const o={};FI.forEach((k,i)=>o[k]=r[i]);console.log(id.padEnd(18), `${o.length}m`, `${o.massKg}kg`, o.diet, '|', o.period, o.mya, '|', o.subclade, '|', (o.found||[]).join(','));}
