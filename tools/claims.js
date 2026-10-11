// Retired-claims check: catches wording that was once used but is now WRONG, so it can't be
// copied forward from an old post. The list lives in playbook/retired-claims.json.
//
// Usage:
//   node tools/claims.js <file.html|file.txt> [more files]   check slides or a saved caption
//   echo "<caption>" | node tools/claims.js -                 check a caption from stdin
// carousel.js and render.js also run it on every render. Any CLAIM line blocks scheduling:
// fix the text (use only the account playbook's Facts section) and re-render.
const fs = require('fs');
const path = require('path');

const LIST = path.join(__dirname, '..', 'playbook', 'retired-claims.json');

function rules() {
  return JSON.parse(fs.readFileSync(LIST, 'utf8')).map(r => ({ ...r, re: new RegExp(r.pattern, 'i') }));
}

// Returns ["<wrong claim>: <why> -> <say instead>", ...] for every rule the text matches.
function check(text) {
  const flat = String(text).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
  return rules().filter(r => r.re.test(flat)).map(r => `"${flat.match(r.re)[0]}": ${r.why} -> ${r.instead}`);
}

module.exports = { check };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (!args.length) { console.error('usage: node tools/claims.js <file> [...] | -'); process.exit(1); }
  let found = 0;
  for (const a of args) {
    const text = a === '-' ? fs.readFileSync(0, 'utf8') : fs.readFileSync(a, 'utf8');
    for (const w of check(text)) { console.log('CLAIM', a === '-' ? 'stdin' : a, w); found++; }
  }
  console.log(found ? `${found} retired claim(s): fix before scheduling` : 'OK: no retired claims');
  process.exit(found ? 3 : 0);
}
