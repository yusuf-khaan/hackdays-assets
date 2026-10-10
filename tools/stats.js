// Summarise published posts for the learning loop.
// Usage: node tools/stats.js [account] [days=28]
// Reads data/<account>.jsonl (all accounts if omitted). Prints counts and, where metrics exist,
// the median share+save rate ((saves+shares)/reach) and median reach per hook archetype,
// category, format, slot, CTA type and trend vs planned, against the account median.
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'data');
const [accArg, daysArg] = process.argv.slice(2);
const days = +(daysArg || (accArg && /^\d+$/.test(accArg) ? accArg : 28));
const acc = accArg && !/^\d+$/.test(accArg) ? accArg : null;
const since = new Date(Date.now() - days * 864e5).toISOString().slice(0, 10);
const med = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const rate = p => { const m = p.metrics; if (!m || !m.reach) return null; return ((m.saves || 0) + (m.shares || 0)) / m.reach; };
const fmt = x => x == null ? '   -  ' : (x < 1 ? (x * 100).toFixed(2) + '%' : String(Math.round(x))).padStart(6);
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.jsonl'))) {
  const name = f.replace(/\.jsonl$/, '');
  if (acc && name !== acc) continue;
  const posts = fs.readFileSync(path.join(dir, f), 'utf8').split('\n').filter(Boolean)
    .map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(p => p && p.date >= since);
  const car = posts.filter(p => p.kind !== 'story');
  const measured = car.filter(p => rate(p) != null);
  const accRate = med(measured.map(rate)), accReach = med(measured.map(p => p.metrics.reach));
  console.log(`\n== ${name} · last ${days} days · ${car.length} carousels, ${posts.length - car.length} stories, ${measured.length} with metrics`);
  console.log(`   account median share+save rate ${fmt(accRate)} · median reach ${fmt(accReach)} · median hook score ${fmt(med(car.map(p => p.hook_score).filter(Boolean)))}`);
  for (const key of ['hook_archetype', 'category', 'format', 'slot', 'cta', 'trend', 'slides']) {
    const groups = {};
    for (const p of car) { const k = String(p[key]); (groups[k] = groups[k] || []).push(p); }
    console.log(`\n   by ${key}:`);
    console.log('   ' + 'value'.padEnd(26) + '   n  rate    reach   hook  vs median');
    for (const [k, g] of Object.entries(groups).sort((a, b) => b[1].length - a[1].length)) {
      const r = med(g.map(rate).filter(x => x != null)), re = med(g.filter(p => p.metrics).map(p => p.metrics.reach || 0));
      const vs = r != null && accRate ? (r / accRate).toFixed(2) + 'x' : '-';
      console.log('   ' + k.slice(0, 26).padEnd(26) + String(g.length).padStart(4) + ' ' + fmt(r) + ' ' + fmt(re) + ' ' + fmt(med(g.map(p => p.hook_score).filter(Boolean))) + '  ' + vs);
    }
  }
  const exps = car.filter(p => p.experiment);
  if (exps.length) { console.log('\n   experiments:'); exps.forEach(p => console.log(`   ${p.date} ${p.topic}: ${p.experiment} → rate ${fmt(rate(p))}`)); }
  const reviews = car.slice(-10).map(p => p.self_review).filter(Boolean);
  if (reviews.length) { console.log('\n   latest self-reviews:'); reviews.forEach(r => console.log('   - ' + r)); }
}
