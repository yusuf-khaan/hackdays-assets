// Shared text checks for tools/carousel.js and tools/render.js (added by the 2026-W41 weekly review).
//
// 1. Overlapping text: two different elements whose rendered text lines cross each other.
//    The usual cause is a headline and its sub-line placed as two absolutely positioned blocks;
//    a longer headline then runs into the sub-line (hit three times on 11 Oct, no tool warned).
//    Fix: stack them in ONE element (sub-line as a display:block span) or move one.
// 2. Unquoted `font-family:Serif` as the first family: CSS reads it as the generic `serif` keyword and renders Times,
//    not Instrument Serif. Write `font-family:"Serif"`.
//
// Elements inside .bleed or .grain, or marked data-overlap-ok (a deliberate overlay), are skipped.

// Runs inside the page (pass to page.evaluate). Returns WARN strings.
// width = one frame's width; frames are laid side by side from x=0 (a story is one frame).
// Chromium serializes a quoted "Serif" as `Serif` and the bare keyword as lowercase `serif`, so the test is case-sensitive.
function inPage({ width }) {
  const out = [];
  const lines = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    if (!t.textContent.trim()) continue;
    const el = t.parentElement;
    if (!el || el.closest('.bleed, .grain, [data-overlap-ok], script, style')) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || +cs.opacity === 0) continue;
    const range = document.createRange();
    range.selectNodeContents(t);
    for (const r of range.getClientRects()) {
      if (r.width < 2 || r.height < 2) continue;
      lines.push({ el, r, text: el.textContent.trim().slice(0, 40) });
    }
  }
  const seen = new Set();
  for (let a = 0; a < lines.length; a++) {
    for (let b = a + 1; b < lines.length; b++) {
      const A = lines[a], B = lines[b];
      if (A.el === B.el || A.el.contains(B.el) || B.el.contains(A.el)) continue;
      // Shrink each line box to its glyph core so normal tight leading between stacked blocks is not flagged.
      const ix = Math.min(A.r.right, B.r.right) - Math.max(A.r.left, B.r.left);
      const iy = Math.min(A.r.bottom - A.r.height * 0.2, B.r.bottom - B.r.height * 0.2) - Math.max(A.r.top + A.r.height * 0.2, B.r.top + B.r.height * 0.2);
      if (ix <= 4 || iy <= 4) continue;
      const key = A.text + '|' + B.text;
      if (seen.has(key)) continue;
      seen.add(key);
      const frame = Math.floor(Math.max(A.r.left, B.r.left) / width) + 1;
      out.push(`slide ${frame}: text overlaps other text: "${A.text}" and "${B.text}"`);
    }
  }
  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; }
    for (const rule of rules || []) {
      if (rule.type === CSSRule.FONT_FACE_RULE) continue;
      const ff = rule.style && rule.style.getPropertyValue('font-family');
      if (ff && /^\s*serif\s*(,|$)/.test(ff)) {
        out.push(`font: "${rule.selectorText}" uses unquoted font-family:Serif, which renders Times; write font-family:"Serif"`);
      }
    }
  }
  document.querySelectorAll('[style*="font-family"]').forEach(el => {
    if (/^\s*serif\s*(,|$)/.test(el.style.fontFamily)) out.push(`font: inline style "${el.getAttribute('style').slice(0, 40)}" uses unquoted font-family:Serif; write font-family:"Serif"`);
  });
  return out;
}

module.exports = { inPage };
