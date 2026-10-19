const fs = require('fs'); const path = require('path');
const { setMode } = require('./lib'); const icons = require('./icons');
const OUT = process.argv[2] || 'out/svg-animated'; fs.mkdirSync(OUT, { recursive: true });
for (const [name, ic] of Object.entries(icons)) {
  setMode({ css: true, pfx: `rf-${name}-` });
  const svg = ic.draw().replace(/\s*\n\s*/g, '').replace(/(\d+\.\d{3})\d+/g, '$1');
  fs.writeFileSync(path.join(OUT, name + '.svg'), svg);
}
setMode({});
