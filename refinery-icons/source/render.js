const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const icons = require('./icons'); const { setMode } = require('./lib'); const D = (ic, t) => { setMode({ t }); return ic.draw(); };
const OUT = process.argv[2] || 'out'; const mode = process.argv[3] || 'static';
const only = process.argv[4] ? process.argv[4].split(',') : null;
const FR = 96; // 1.6s @60fps
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 512, height: 512 } });
  await p.setContent('<html><body style="margin:0;background:transparent"><div id="s"></div></body></html>');
  for (const [name, ic] of Object.entries(icons)) {
    if (only && !only.includes(name)) continue;
    fs.mkdirSync(path.join(OUT, 'svg'), { recursive: true });
    fs.mkdirSync(path.join(OUT, 'png'), { recursive: true });
    const rest = D(ic, 0);
    fs.writeFileSync(path.join(OUT, 'svg', name + '.svg'), rest);
    const shot = async (svg, file) => { await p.evaluate(s => document.getElementById('s').innerHTML = s, svg); await p.screenshot({ path: file, omitBackground: true, clip: { x: 0, y: 0, width: 512, height: 512 } }); };
    await shot(rest, path.join(OUT, 'png', name + '.png'));
    if (mode === 'anim') {
      const fd = path.join(OUT, 'frames', name); fs.mkdirSync(fd, { recursive: true });
      for (let i = 0; i < FR; i++) await shot(D(ic, i / FR), path.join(fd, String(i).padStart(3, '0') + '.png'));
    }
    console.log('done', name);
  }
  await b.close();
})();
