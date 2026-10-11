// Render a reel "scene deck" to an MP4 (H.264 + AAC, 1080×1920, 30 fps), a cover JPEG,
// a contact sheet and a layout check.
//
// Usage: node tools/reel.js <reel.html> [--silent] [--audio <file.mp3|m4a|wav>]
//
// The deck is ONE html file. Scenes sit side by side, left to right:
//   <div class="reel"> <section class="scene" data-sec="3.5">…</section> × N </div>
// Each .scene is 1080×1920. data-sec is optional: without it the scene stays on screen
// long enough to read (about 3.3 words per second + 1 s, between 2.2 and 6 s;
// the mark, labels and .ill/.no-read text don't count).
// Each scene gets a slow push-in (4%) and a 0.4 s crossfade into the next.
//
// Audio: by default a quiet generated ambient pad (made here, no licence issues).
// --audio uses your own track (it is trimmed and faded); --silent adds a silent track.
// Instagram music can't be added through the API.
//
// Outputs next to the deck:
//   <name>.mp4         the reel
//   <name>-cover.jpg   scene 1, used as the cover/thumbnail
//   <name>-sheet.jpg   all scenes tiled small, to check the story in one look
//   <name>-sNN.jpg     one frame per scene (kept for checking; not uploaded)
// WARN lines: text that overflows, crosses a scene edge, or sits in the reel UI zones
// (top 220 px, bottom 420 px, right 150 px are covered by Instagram's buttons and caption).
// Fix every WARN before scheduling.
const { chromium } = require('playwright-core');
const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const claims = require('./claims');

const W = 1080, H = 1920, FPS = 30, FADE = 0.4;
const SAFE = { top: 220, bottom: 420, right: 150 };
const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

(async () => {
  const args = process.argv.slice(2);
  const file = args.find(a => a.endsWith('.html'));
  const silent = args.includes('--silent');
  const ai = args.indexOf('--audio');
  const audioFile = ai >= 0 ? path.resolve(args[ai + 1]) : null;
  if (!file) { console.error('usage: node tools/reel.js <reel.html> [--silent] [--audio <file>]'); process.exit(1); }
  const abs = path.resolve(file);
  const outDir = path.dirname(abs);
  const base = path.basename(abs, '.html');

  const browser = await chromium.launch({ executablePath: fs.existsSync(CHROME) ? CHROME : undefined });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto('file://' + abs);
  await page.evaluate(() => document.fonts.ready);
  const n = await page.$$eval('.scene', s => s.length);
  if (n < 2 || n > 20) { console.error(`ERROR: found ${n} .scene elements; a reel needs 2 to 20`); process.exit(2); }
  await page.setViewportSize({ width: W * n, height: H });
  await page.waitForTimeout(400);

  const { warns, secs } = await page.evaluate(({ W, H, SAFE }) => {
    const out = [], secs = [];
    [...document.querySelectorAll('.scene')].forEach((s, i) => {
      const r = s.getBoundingClientRect();
      if (Math.round(r.width) !== W || Math.round(r.height) !== H) out.push(`scene ${i + 1} is ${Math.round(r.width)}×${Math.round(r.height)}, expected ${W}×${H}`);
      if (Math.round(r.left) !== W * i || Math.round(r.top) !== 0) out.push(`scene ${i + 1} is not at x=${W * i}, y=0 (use .reel{display:flex})`);
      const c = s.cloneNode(true); c.querySelectorAll('.v-mark,.ill,.v-label,.no-read').forEach(e => e.remove());
      const words = c.textContent.trim().split(/\s+/).filter(Boolean).length;
      const auto = Math.min(6, Math.max(2.2, words / 3.3 + 1.0));
      secs.push(parseFloat(s.dataset.sec) || auto);
      s.querySelectorAll('*').forEach(el => {
        if (el.closest('.grain')) return;
        const cs = getComputedStyle(el);
        if (cs.visibility === 'hidden' || cs.display === 'none') return;
        const hasText = [...el.childNodes].some(c => c.nodeType === 3 && c.textContent.trim());
        if (!hasText) return;
        const t = `"${el.textContent.trim().slice(0, 50)}"`;
        if ((el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2) && cs.overflow !== 'visible') out.push(`scene ${i + 1}: text overflows its box: ${t}`);
        const b = el.getBoundingClientRect();
        if (!b.width) return;
        if (b.left < r.left - 1 || b.right > r.right + 1 || b.top < -1 || b.bottom > H + 1) out.push(`scene ${i + 1}: text crosses the scene edge: ${t}`);
        else if (!el.closest('.ui-ok') && (b.top < SAFE.top || b.bottom > H - SAFE.bottom || b.right > r.left + W - SAFE.right)) out.push(`scene ${i + 1}: text in the reel UI zone (top ${SAFE.top}, bottom ${SAFE.bottom}, right ${SAFE.right} px): ${t}`);
      });
    });
    return { warns: out, secs };
  }, { W, H, SAFE });

  claims.check(await page.evaluate(() => document.body.innerText)).forEach(c => warns.push(`CLAIM ${c}`));

  const frames = [];
  for (let i = 0; i < n; i++) {
    const f = path.join(outDir, `${base}-s${String(i + 1).padStart(2, '0')}.jpg`);
    await page.screenshot({ path: f, type: 'jpeg', quality: 95, clip: { x: W * i, y: 0, width: W, height: H } });
    frames.push(f);
  }
  const cover = path.join(outDir, `${base}-cover.jpg`);
  fs.copyFileSync(frames[0], cover);

  // Contact sheet
  const cols = Math.min(n, 6), tw = W / 5, th = H / 5, gap = 12;
  const sheet = await browser.newPage({ viewport: { width: cols * tw + (cols + 1) * gap, height: 400 } });
  const imgs = frames.map((f, i) => `<figure><img src="data:image/jpeg;base64,${fs.readFileSync(f).toString('base64')}"><figcaption>${i + 1} · ${secs[i].toFixed(1)}s</figcaption></figure>`).join('');
  await sheet.setContent(`<html><body style="margin:0;background:#222;padding:${gap}px;display:grid;grid-template-columns:repeat(${cols},${tw}px);gap:${gap}px;font:14px sans-serif;color:#ccc">
    <style>figure{margin:0}img{width:${tw}px;height:${th}px;display:block}figcaption{text-align:center;padding-top:6px}</style>${imgs}</body></html>`);
  await sheet.waitForTimeout(300);
  const sheetPath = path.join(outDir, `${base}-sheet.jpg`);
  await sheet.screenshot({ path: sheetPath, type: 'jpeg', quality: 85, fullPage: true });
  await browser.close();

  // Video: each scene pushes in slowly; scenes crossfade.
  const inputs = [], filters = [];
  frames.forEach((f, i) => {
    const d = secs[i] + (i < n - 1 ? FADE : 0);
    const fr = Math.round(d * FPS);
    inputs.push('-loop', '1', '-framerate', String(FPS), '-t', d.toFixed(3), '-i', f);
    filters.push(`[${i}:v]scale=${W * 2}:${H * 2},zoompan=z='1+0.04*on/${fr}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=${W}x${H}:fps=${FPS},trim=duration=${d.toFixed(3)},setpts=PTS-STARTPTS,format=yuv420p[v${i}]`);
  });
  let last = 'v0', t = 0;
  for (let i = 1; i < n; i++) {
    t += secs[i - 1];
    const o = i === n - 1 ? 'vout' : `x${i}`;
    filters.push(`[${last}][v${i}]xfade=transition=fade:duration=${FADE}:offset=${t.toFixed(3)}[${o}]`);
    last = o;
  }
  const total = secs.reduce((a, b) => a + b, 0) + FADE;
  const a = n; // audio input index
  if (audioFile) inputs.push('-i', audioFile);
  else if (silent) inputs.push('-f', 'lavfi', '-t', total.toFixed(3), '-i', 'anullsrc=r=44100:cl=stereo');
  else inputs.push('-f', 'lavfi', '-t', total.toFixed(3), '-i',
    "aevalsrc='0.05*sin(2*PI*110*t)*(0.6+0.4*sin(2*PI*0.07*t))+0.035*sin(2*PI*164.81*t)*(0.6+0.4*sin(2*PI*0.05*t+1))+0.03*sin(2*PI*220*t)*(0.6+0.4*sin(2*PI*0.09*t+2))+0.02*sin(2*PI*277.18*t)*(0.5+0.5*sin(2*PI*0.04*t))':s=44100:c=stereo");
  filters.push(`[${a}:a]atrim=duration=${total.toFixed(3)},afade=t=in:d=1,afade=t=out:st=${Math.max(0, total - 1.5).toFixed(3)}:d=1.5,aformat=sample_rates=44100:channel_layouts=stereo[aout]`);
  const mp4 = path.join(outDir, `${base}.mp4`);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', filters.join(';'),
    '-map', '[vout]', '-map', '[aout]', '-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-pix_fmt', 'yuv420p',
    '-r', String(FPS), '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', '-t', total.toFixed(3), mp4], { stdio: 'inherit' });

  const mb = fs.statSync(mp4).size / 1e6;
  if (total < 5) warns.push(`reel is ${total.toFixed(1)} s; aim for 15–45 s`);
  if (total > 60) warns.push(`reel is ${total.toFixed(1)} s; keep it under 60 s`);
  if (mb > 19) warns.push(`file is ${mb.toFixed(1)} MB; jsDelivr serves files up to 20 MB, so shorten it or raise -crf`);

  console.log('VIDEO', path.relative(process.cwd(), mp4), `${total.toFixed(1)}s`, `${mb.toFixed(1)}MB`);
  console.log('COVER', path.relative(process.cwd(), cover));
  console.log('SHEET', path.relative(process.cwd(), sheetPath));
  warns.forEach(w => console.log('WARN', w));
  console.log(warns.length ? `${warns.length} warning(s): fix them and re-render` : 'OK: no layout warnings, no retired claims');
})();
