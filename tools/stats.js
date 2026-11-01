// Summarise published posts for the learning loop.
// Usage: node tools/stats.js [account] [days=28]
// Reads data/<account>.jsonl (all accounts if omitted). Prints counts and, where metrics exist,
// the median share+save rate ((saves+shares)/reach) and median reach per hook archetype,
// category, format, slot, CTA type and trend vs planned, against the account median.
// When no measured post has a save or share, "vs median" falls back to median reach (marked "reach").
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'data');
const [accArg, daysArg] = process.argv.slice(2);
const days = +(daysArg || (accArg && /^\d+$/.test(accArg) ? accArg : 28));
const acc = accArg && !/^\d+$/.test(accArg) ? accArg : null;
const since = new Date(Date.now() - days * 864e5).toISOString().slice(0, 10);
const med = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const rate = p => { const m = p.metrics; if (!m || !m.reach) return null; return ((m.saves || 0) + (m.shares || 0)) / m.reach; };
const fmtN = x => x == null ? '   -  ' : String(Math.round(x)).padStart(6); // counts (reach 0 is 0, not 0.00%)
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
  console.log(`   account median share+save rate ${fmt(accRate)} · median reach ${fmtN(accReach)} · median hook score ${fmtN(med(car.map(p => p.hook_score).filter(Boolean)))}`);
  if (measured.length && !accRate) console.log('   no saves or shares on any measured post: "vs median" compares reach (Proven/Avoid by reach, LEARNING.md)');
  const top = [...measured].sort((a, b) => b.metrics.reach - a.metrics.reach);
  if (top.length) console.log('   reach high→low: ' + top.map(p => `${p.metrics.reach} ${p.date} c${p.slot}`).join(' · '));
  // Accounts with no carousels in the window skip the empty carousel tables (W44).
  for (const key of car.length ? ['hook_archetype', 'category', 'format', 'slot', 'cta', 'trend', 'slides'] : []) {
    const groups = {};
    for (const p of car) { const k = String(p[key]); (groups[k] = groups[k] || []).push(p); }
    console.log(`\n   by ${key}:`);
    console.log('   ' + 'value'.padEnd(26) + '   n  rate    reach   hook  vs median');
    for (const [k, g] of Object.entries(groups).sort((a, b) => b[1].length - a[1].length)) {
      const r = med(g.map(rate).filter(x => x != null)), re = med(g.filter(p => p.metrics).map(p => p.metrics.reach || 0));
      // No saves or shares anywhere (account median rate 0): compare reach instead, marked "reach".
      const vs = r != null && accRate ? (r / accRate).toFixed(2) + 'x'
        : re != null && accReach ? (re / accReach).toFixed(2) + 'x reach' : '-';
      console.log('   ' + k.slice(0, 26).padEnd(26) + String(g.length).padStart(4) + ' ' + fmt(r) + ' ' + fmtN(re) + ' ' + fmtN(med(g.map(p => p.hook_score).filter(Boolean))) + '  ' + vs);
    }
  }
  // Stories: Instagram only reports them while live (24 h), so daily runs record them (RUN.md "Story metrics").
  // Readings grow with age, so comparisons use only readings taken at >= 18 h (W44); earlier ones are counted, not compared.
  // Each group shows median reach and median views (views carry the signal where reach is always 0, e.g. @homingo.hackdays).
  const stAll = posts.filter(p => p.kind === 'story' && p.metrics && p.metrics.reach != null);
  const st = stAll.filter(p => (p.metrics.age_h || 0) >= 18);
  if (stAll.length) {
    const rv = g => `reach ${med(g.map(p => p.metrics.reach))} views ${med(g.map(p => p.metrics.views).filter(x => x != null))}`;
    console.log(`\n   stories with metrics: ${stAll.length} (${stAll.length - st.length} early readings < 18 h left out) · ${st.length ? rv(st) : 'none at >= 18 h'} (read at ${fmtN(med(st.map(p => p.metrics.age_h).filter(x => x != null)))} h)`);
    for (const key of st.length ? ['category', 'hook_archetype', 'slot'] : []) {
      const groups = {};
      for (const p of st) { const k = String(p[key]); (groups[k] = groups[k] || []).push(p); }
      console.log('   by ' + key + ': ' + Object.entries(groups).sort((a, b) => b[1].length - a[1].length).map(([k, g]) => `${k} ${g.length}× ${rv(g)}`).join(' · '));
    }
    const sexp = st.filter(p => p.experiment);
    if (sexp.length) {
      console.log('   story experiments (>= 18 h):');
      sexp.forEach(p => console.log(`   ${p.date} s${p.slot} reach ${p.metrics.reach} views ${p.metrics.views}: ${String(p.experiment).slice(0, 90)}`));
    }
  }
  const exps = car.filter(p => p.experiment);
  if (exps.length) { console.log('\n   experiments:'); exps.forEach(p => console.log(`   ${p.date} ${p.topic}: ${p.experiment} → rate ${fmt(rate(p))}`)); }
  const reviews = car.slice(-10).map(p => p.self_review).filter(Boolean);
  if (reviews.length) { console.log('\n   latest self-reviews:'); reviews.forEach(r => console.log('   - ' + r)); }
}
