// Render a carousel deck to one JPEG per slide, plus a contact sheet and a layout check.
//
// Usage: node tools/carousel.js <deck.html> [outDir]
//
// The deck is ONE html file. Slides are laid out side by side, left to right:
//   <div class="deck"> <section class="slide">…</section> × N </div>
// Each .slide is 1080×1350. Because slides sit next to each other, any element
// placed across a slide edge (class "bleed", absolutely positioned inside .deck)
// continues seamlessly onto the next slide after the swipe.
//
// Outputs (next to the deck unless outDir is given):
//   <name>-01.jpg … <name>-NN.jpg   the slides, in order
//   <name>-sheet.jpg                all slides tiled small, to check the whole story in one look
// It also prints WARN lines for text that overflows its box or content that crosses
// a slide edge without the "bleed" class. Fix every WARN before publishing.
const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 1350;
const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

(async () => {
  const [file, outArg] = process.argv.slice(2);
  if (!file) { console.error('usage: node tools/carousel.js <deck.html> [outDir]'); process.exit(1); }
  const abs = path.resolve(file);
  const outDir = path.resolve(outArg || path.dirname(abs));
  const base = path.basename(abs, '.html');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ executablePath: fs.existsSync(CHROME) ? CHROME : undefined });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto('file://' + abs);
  await page.evaluate(() => document.fonts.ready);

  const n = await page.$$eval('.slide', s => s.length);
  if (n < 2 || n > 10) { console.error(`ERROR: found ${n} .slide elements; a carousel needs 2 to 10`); process.exit(2); }
  await page.setViewportSize({ width: W * n, height: H });
  await page.waitForTimeout(400);

  // Layout checks
  const warns = await page.evaluate(({ W, H }) => {
    const out = [];
    const slides = [...document.querySelectorAll('.slide')];
    slides.forEach((s, i) => {
      const r = s.getBoundingClientRect();
      if (Math.round(r.width) !== W || Math.round(r.height) !== H) out.push(`slide ${i + 1} is ${Math.round(r.width)}×${Math.round(r.height)}, expected ${W}×${H}`);
      if (Math.round(r.left) !== W * i || Math.round(r.top) !== 0) out.push(`slide ${i + 1} is not at x=${W * i}, y=0 (use .deck{display:flex})`);
      s.querySelectorAll('*').forEach(el => {
        if (el.closest('.bleed') || el.closest('.grain')) return;
        const cs = getComputedStyle(el);
        if (cs.visibility === 'hidden' || cs.display === 'none') return;
        const hasText = [...el.childNodes].some(c => c.nodeType === 3 && c.textContent.trim());
        if (hasText && (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2) && cs.overflow !== 'visible') {
          out.push(`slide ${i + 1}: text overflows its box: "${el.textContent.trim().slice(0, 50)}"`);
        }
        if (hasText) {
          const b = el.getBoundingClientRect();
          if (b.width && (b.left < r.left - 1 || b.right > r.right + 1 || b.top < -1 || b.bottom > H + 1)) {
            out.push(`slide ${i + 1}: text crosses the slide edge: "${el.textContent.trim().slice(0, 50)}"`);
          }
        }
      });
    });
    return out;
  }, { W, H });

  const files = [];
  for (let i = 0; i < n; i++) {
    const out = path.join(outDir, `${base}-${String(i + 1).padStart(2, '0')}.jpg`);
    await page.screenshot({ path: out, type: 'jpeg', quality: 92, clip: { x: W * i, y: 0, width: W, height: H } });
    files.push(out);
  }

  // Contact sheet: up to 5 per row at 1/4 size, with slide numbers
  const cols = Math.min(n, 5), rows = Math.ceil(n / cols), tw = W / 4, th = H / 4, gap = 12;
  const sheet = await browser.newPage({ viewport: { width: cols * tw + (cols + 1) * gap, height: rows * (th + 28) + (rows + 1) * gap } });
  const imgs = files.map((f, i) => `<figure><img src="data:image/jpeg;base64,${fs.readFileSync(f).toString('base64')}"><figcaption>${i + 1}</figcaption></figure>`).join('');
  await sheet.setContent(`<html><body style="margin:0;background:#222;padding:${gap}px;display:grid;grid-template-columns:repeat(${cols},${tw}px);gap:${gap}px;font:14px sans-serif;color:#ccc">
    <style>figure{margin:0}img{width:${tw}px;height:${th}px;display:block}figcaption{text-align:center;padding-top:6px}</style>${imgs}</body></html>`);
  await sheet.waitForTimeout(300);
  const sheetPath = path.join(outDir, `${base}-sheet.jpg`);
  await sheet.screenshot({ path: sheetPath, type: 'jpeg', quality: 85, fullPage: true });

  await browser.close();
  files.forEach(f => console.log('SLIDE', path.relative(process.cwd(), f)));
  console.log('SHEET', path.relative(process.cwd(), sheetPath));
  warns.forEach(w => console.log('WARN', w));
  console.log(warns.length ? `${warns.length} warning(s): fix them and re-render` : 'OK: no layout warnings');
})();
