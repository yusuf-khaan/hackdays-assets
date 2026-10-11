const { chromium } = require('playwright-core');
const path = require('path');
const claims = require('./claims');
(async () => {
  const [file, out, w = '1080', h = '1350'] = process.argv.slice(2);
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(file));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  await page.screenshot({ path: out, ...(out.endsWith('.jpg') ? { type: 'jpeg', quality: 92 } : {}), clip: { x: 0, y: 0, width: +w, height: +h } });
  const found = claims.check(await page.evaluate(() => document.body.innerText));
  await browser.close();
  found.forEach(c => console.log('WARN CLAIM', c));
  console.log(found.length ? `${found.length} retired claim(s): fix and re-render` : 'OK: no retired claims');
})();
