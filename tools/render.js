const { chromium } = require('playwright-core');
const path = require('path');
const claims = require('./claims');
const lint = require('./lint');
(async () => {
  const [file, out, w = '1080', h = '1350'] = process.argv.slice(2);
  // Use CHROME_PATH, else the newest /opt/pw-browsers/chromium-*/chrome-linux(64)/chrome that exists (2026-10-25: 1194 was missing).
  const fs = require('fs');
  let exe = process.env.CHROME_PATH;
  if (!exe || !fs.existsSync(exe)) {
    const base = '/opt/pw-browsers';
    const dirs = fs.existsSync(base) ? fs.readdirSync(base).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => +b.split('-')[1] - +a.split('-')[1]) : [];
    exe = dirs.flatMap(d => ['chrome-linux', 'chrome-linux64'].map(s => path.join(base, d, s, 'chrome'))).find(p => fs.existsSync(p));
  }
  const browser = await chromium.launch({ executablePath: exe });
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(file));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  await page.screenshot({ path: out, ...(out.endsWith('.jpg') ? { type: 'jpeg', quality: 92 } : {}), clip: { x: 0, y: 0, width: +w, height: +h } });
  const found = claims.check(await page.evaluate(() => document.body.innerText));
  const layout = (await page.evaluate(lint.inPage, { width: +w })).map(m => m.replace(/^slide 1: /, ''));
  await browser.close();
  layout.forEach(m => console.log('WARN', m));
  found.forEach(c => console.log('WARN CLAIM', c));
  const n = found.length + layout.length;
  console.log(n ? `${n} warning(s): fix and re-render` : 'OK: no overlapping text, no retired claims');
})();
