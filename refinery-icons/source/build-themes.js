// node build-themes.js  → out/themes/{light,dark}/{svg,svg-animated,png,png64}
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const { setMode } = require('./lib'); const icons = require('./icons');
const min = s => s.replace(/\s*\n\s*/g, '').replace(/(\d+\.\d{3})\d+/g, '$1');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 512, height: 512 } });
  await p.setContent('<html><body style="margin:0;background:transparent"><div id="s"></div></body></html>');
  for (const theme of ['light', 'dark']) {
    const R = path.join('out/themes', theme); for (const d of ['svg', 'svg-animated', 'png', 'png64']) fs.mkdirSync(path.join(R, d), { recursive: true });
    for (const [k, ic] of Object.entries(icons)) {
      setMode({ css: true, theme, pfx: `rf-${theme === 'dark' ? 'd-' : ''}${k}-` });
      fs.writeFileSync(path.join(R, 'svg-animated', `${k}.svg`), min(ic.draw()));
      setMode({ t: 0, theme, pfx: `rf-${theme === 'dark' ? 'd-' : ''}${k}-s-` });
      const st = min(ic.draw()); fs.writeFileSync(path.join(R, 'svg', `${k}.svg`), st);
      await p.evaluate(s => document.getElementById('s').innerHTML = s, st);
      await p.screenshot({ path: path.join(R, 'png', `${k}.png`), omitBackground: true, clip: { x: 0, y: 0, width: 512, height: 512 } });
      await p.evaluate(s => document.getElementById('s').innerHTML = s, st.replace('width="512" height="512"', 'width="64" height="64"'));
      await p.screenshot({ path: path.join(R, 'png64', `${k}.png`), omitBackground: true, clip: { x: 0, y: 0, width: 64, height: 64 } });
    }
  }
  setMode({}); await b.close();
})();
