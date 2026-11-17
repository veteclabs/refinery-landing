// Shared style system for the Refinery icon series (512×512, light from top-left)
const C = { b50: '#EEF4FB', b100: '#DCE8F5', b: '#76A6D7', b600: '#5A8FC5', b700: '#3F76AE' };

// ---------- easing ----------
function bezier(p1x, p1y, p2x, p2y) {
  const cx = 3 * p1x, bx = 3 * (p2x - p1x) - cx, ax = 1 - cx - bx;
  const cy = 3 * p1y, by = 3 * (p2y - p1y) - cy, ay = 1 - cy - by;
  const sx = t => ((ax * t + bx) * t + cx) * t, sy = t => ((ay * t + by) * t + cy) * t;
  const dx = t => (3 * ax * t + 2 * bx) * t + cx;
  return x => {
    if (x <= 0) return 0; if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) { const e = sx(t) - x, d = dx(t); if (Math.abs(e) < 1e-6 || Math.abs(d) < 1e-6) break; t -= e / d; }
    let lo = 0, hi = 1; if (Math.abs(sx(t) - x) > 1e-4) { t = x; while (hi - lo > 1e-6) { if (sx(t) < x) lo = t; else hi = t; t = (lo + hi) / 2; } }
    return sy(t);
  };
}
const springE = bezier(0.34, 1.56, 0.64, 1); // 탄성
const smoothE = bezier(0.42, 0, 0.58, 1);    // ease-in-out
const seg = (t, a, b) => Math.min(1, Math.max(0, (t - a) / (b - a)));
// out with ease-in-out, return with spring overshoot. returns 0 at rest.
function bounce(t, t0, t1, t2, amp) {
  if (t <= t0 || t >= t2 + 0.0001) return t >= t2 ? 0 : 0;
  if (t < t1) return amp * smoothE(seg(t, t0, t1));
  return amp * (1 - springE(seg(t, t1, t2)));
}
// one-way spring progress 0→1
const spring = (t, a, b) => springE(seg(t, a, b));
const smooth = (t, a, b) => smoothE(seg(t, a, b));

// ---------- geometry ----------
// SOFT=1 → 둥글기 완화: 헤더 버튼(높이 37px, radius 6px ≈ 짧은 변의 16%) 비율에 맞춤
const SOFT = process.env.SOFT === '1';
const RK = 6 / 37;
const softR = (w, h, r) => SOFT ? Math.min(r, +(Math.min(w, h) * RK).toFixed(2)) : r;
const rr = (x, y, w, h, r) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${softR(w, h, r)}"/>`;
const ci = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
const pa = d => `<path d="${d}"/>`;
function rrPath(x, y, w, h, r) {
  r = softR(w, h, r);
  return `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
}
// polygon with rounded corners (quadratic through each vertex)
function roundPoly(pts, r) {
  const n = pts.length; let d = '';
  for (let i = 0; i < n; i++) {
    const p = pts[i], a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
    const ra = (Array.isArray(r) ? r[i] : r) * (SOFT ? 0.45 : 1);
    const va = [a[0] - p[0], a[1] - p[1]], vb = [b[0] - p[0], b[1] - p[1]];
    const la = Math.hypot(...va), lb = Math.hypot(...vb);
    const qa = Math.min(ra, la / 2), qb = Math.min(ra, lb / 2);
    const s = [p[0] + va[0] / la * qa, p[1] + va[1] / la * qa], e = [p[0] + vb[0] / lb * qb, p[1] + vb[1] / lb * qb];
    d += (i === 0 ? 'M' : 'L') + s.map(v => v.toFixed(2)).join(' ') + 'Q' + p.join(' ') + ' ' + e.map(v => v.toFixed(2)).join(' ');
  }
  return d + 'Z';
}
const tr = (dx = 0, dy = 0) => `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`;
const sc = (cx, cy, s) => `translate(${cx} ${cy}) scale(${s.toFixed(4)}) translate(${-cx} ${-cy})`;
const ro = (cx, cy, a) => `rotate(${a.toFixed(3)} ${cx} ${cy})`;

// ---------- material builder ----------
// dark-mode materials (palette dark tokens: brand-50 = rgba(118,166,215,.15), brand-100 = rgba(118,166,215,.24))
const KINDS_DARK = {
  primary: [[0, C.b, 1], [1, C.b600, 1]],
  deep: [[0, C.b600, 1], [1, C.b700, 1]],
  light: [[0, C.b, 0.42], [1, C.b, 0.24]],
  glass: [[0, C.b, 0.46], [0.6, C.b, 0.3], [1, C.b, 0.2]],
};
const DARK_DETAIL = { [C.b600]: C.b50, [C.b700]: C.b100, [C.b]: C.b100, [C.b50]: C.b50 };
const isDark = () => MODE.theme === 'dark';
const KINDS = {
  primary: [[0, C.b, 1], [1, C.b600, 1]],
  deep: [[0, C.b600, 1], [1, C.b700, 1]],
  light: [[0, C.b50, 1], [1, C.b100, 1]],
  glass: [[0, C.b50, 0.9], [0.6, C.b100, 0.8], [1, C.b, 0.42]],
};
// ---------- motion (raster: evaluated at MODE.t / css: sampled keyframes) ----------
let MODE = { css: false, t: 0, pfx: '', anims: [], theme: 'light' };
const setMode = m => { MODE = Object.assign({ css: false, t: 0, pfx: '', anims: [], theme: 'light' }, m); };
const f2 = v => +v.toFixed(3);
function tfStr(v, o) {
  const x = v.x || 0, y = v.y || 0, r = v.r || 0, s = v.s == null ? 1 : v.s;
  return `translate(${f2(x)} ${f2(y)}) translate(${o[0]} ${o[1]}) rotate(${f2(r)}) scale(${f2(s)}) translate(${-o[0]} ${-o[1]})`;
}
/** fn(t) -> {x,y,r,s,o}; origin = pivot (element centre); inner = static transform applied inside */
function motion(fn, origin = [256, 256], inner = '') {
  if (!MODE.css) { const v = fn(MODE.t); return { raster: tfStr(v, origin) + ' ' + inner, op: v.o, inner }; }
  const cls = `${MODE.pfx}m${MODE.anims.length}`;
  const N = 60, frames = [];
  for (let i = 0; i <= N; i++) {
    const v = fn(i / N === 1 ? 0.99999 : i / N);
    const x = f2(v.x || 0), y = f2(v.y || 0), r = f2(v.r || 0), sc = f2(v.s == null ? 1 : v.s);
    let d = `transform:translate(${x}px,${y}px)` + (r ? ` rotate(${r}deg)` : '') + (sc !== 1 ? ` scale(${sc})` : '');
    if (v.o != null) d += `;opacity:${f2(v.o)}`;
    frames.push([+(i * 100 / N).toFixed(2), d]);
  }
  frames[N][1] = frames[0][1]; // seamless loop
  // collapse holds: keep first & last of each run of identical declarations
  const kept = frames.filter((f, i) => i === 0 || i === N || f[1] !== frames[i - 1][1] || f[1] !== frames[i + 1][1]);
  MODE.anims.push(`.${cls}{transform-box:view-box;transform-origin:${origin[0]}px ${origin[1]}px;animation:var(--rf-play,${cls}) var(--rf-duration,1.6s) linear infinite}` +
    `@keyframes ${cls}{${kept.map(([p, d]) => `${p}%{${d}}`).join('')}}`);
  return { cls, inner };
}
// wrap content with a static transform string or a motion object
function wrap(tf, content, attrs = '') {
  if (!tf) return attrs ? `<g${attrs}>${content}</g>` : content;
  if (typeof tf === 'string') return `<g transform="${tf}"${attrs}>${content}</g>`;
  if (tf.cls) { const inner = tf.inner ? `<g transform="${tf.inner}"${attrs}>${content}</g>` : (attrs ? `<g${attrs}>${content}</g>` : content); return `<g class="${tf.cls}">${inner}</g>`; }
  return `<g transform="${tf.raster}"${tf.op != null ? ` opacity="${f2(tf.op)}"` : ''}${attrs}>${content}</g>`;
}
const ID = n => `${MODE.pfx}${n}`;

// THIN=1 → 아이콘 안 요소 굵기 통일 (에너지 페이지 적용본 기준: 막대 20, 점 r12)
const THIN = process.env.THIN === '1';
const T_BAR = 20, T_DOT = 12;
function thinDetail(shapes, TB = T_BAR) {
  // 안쪽 원형 요소: connect 아이콘의 점(r14) 기준으로 통일. 시계 중심(22)·핀 중심 등 큰 원은 유지
  shapes = shapes.replace(/<circle cx="([^"]+)" cy="([^"]+)" r="([^"]+)"\/>/g, (m, cx, cy, r) => +r <= 20 ? `<circle cx="${cx}" cy="${cy}" r="${dotR()}"/>` : m);
  return shapes.replace(/<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)" rx="([^"]+)"(\s+transform="[^"]+")?\/>/g, (m, x, y, w, h, rx, trf) => {
    x = +x; y = +y; w = +w; h = +h;
    const thin = Math.min(w, h), long = Math.max(w, h);
    if (thin > 44 || long / thin < 1.5) return m;                            // 타일/정사각형은 유지
    if (thin <= TB) return m.replace(/rx="[^"]+"/, `rx="${thin / 2}"`);    // 이미 얇은 막대: 알약형만 적용
    const d = thin - TB, r = TB / 2;                                    // 안쪽 요소는 둥근 알약형
    if (trf) return `<rect x="${x + d / 2}" y="${y + d / 2}" width="${w - d}" height="${TB}" rx="${r}"${trf}/>`; // 꺾쇠·체크 등: 끝점 유지
    return h <= w ? `<rect x="${x}" y="${y + d / 2}" width="${w}" height="${TB}" rx="${r}"/>` : `<rect x="${x + d / 2}" y="${y}" width="${TB}" height="${h}" rx="${r}"/>`;
  });
}
// 회사 소개 페이지 적용본 기준: 꺾쇠·체크·화살표 같은 기호는 굵기 20을 유지한 채 0.75배로 축소
const GLYPH_K = 0.75;
// DOTMODE=icon → connect 아이콘 전체 크기(√면적 327) 대비 각 아이콘 전체 크기에 비례해 점 크기 조정
let ICON_SCALE = {}; let BBOX = {}; const NORM = process.env.NORM === '1';
try { const bb = require('./bbox.json'); BBOX = bb; const ref = Math.sqrt(bb['flow-connect'][2] * bb['flow-connect'][3]); for (const k in bb) ICON_SCALE[k] = Math.sqrt(bb[k][2] * bb[k][3]) / ref; } catch (e) {}
// DOTMODE=ratio → 점 크기를 담고 있는 면 크기에 비례 (connect: 고리 짧은 변 150 에 r14 → 0.0933)
let LAST_BOX = null;
const dotR = () => {
  if (process.env.DOTMODE === 'icon') return +(14 * (ICON_SCALE[MODE.key] || 1)).toFixed(1);   // 아이콘 전체 크기 비례
  if (process.env.DOTMODE !== 'ratio' || !LAST_BOX) return 14;
  return +Math.min(22, Math.max(10, Math.min(LAST_BOX[2], LAST_BOX[3]) * (14 / 150))).toFixed(1);
};
function glyphOrThin(shapes) {
  if (process.env.GLYPH === '0' || !/transform="rotate\(/.test(shapes)) return thinDetail(shapes);
  const xs = [], ys = [];
  const re = /<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)" rx="[^"]+"(?:\s+transform="rotate\(([^ ]+) ([^ ]+) ([^)]+)\)")?\/>/g;
  let m;
  while ((m = re.exec(shapes))) {
    const [x, y, w, h] = [+m[1], +m[2], +m[3], +m[4]];
    if (m[5] != null) { const a = +m[5] * Math.PI / 180, px = +m[6], py = +m[7], L = w - h; xs.push(px, px + L * Math.cos(a)); ys.push(py, py + L * Math.sin(a)); }
    else if (w >= h) { xs.push(x + h / 2, x + w - h / 2); ys.push(y + h / 2); } else { ys.push(y + w / 2, y + h - w / 2); xs.push(x + w / 2); }
  }
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  const thick = thinDetail(shapes, T_BAR / GLYPH_K);
  return `<g transform="translate(${cx.toFixed(2)} ${cy.toFixed(2)}) scale(${GLYPH_K}) translate(${(-cx).toFixed(2)} ${(-cy).toFixed(2)})">${thick}</g>`;
}
class Icon {
  constructor() { this.defs = []; this.body = []; this.n = 0; }
  uid(p) { return ID(`${p}${this.n++}`); }
  grad(kind, b) {
    const id = this.uid('g');
    const stops = (isDark() ? KINDS_DARK : KINDS)[kind].map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('');
    this.defs.push(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${b[0]}" y1="${b[1]}" x2="${b[0] + b[2]}" y2="${b[1] + b[3]}">${stops}</linearGradient>`);
    return id;
  }
  sheen(b, strength = 0.38) {
    const id = this.uid('s');
    this.defs.push(`<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${b[0] + b[2] * 0.22}" cy="${b[1] + b[3] * 0.18}" r="${Math.max(b[2], b[3]) * 0.75}"><stop offset="0" stop-color="${C.b50}" stop-opacity="${strength}"/><stop offset="1" stop-color="${C.b50}" stop-opacity="0"/></radialGradient>`);
    return id;
  }
  face(shapes, b, o = {}) {
    if (!o.noAppend && o.holder !== false) LAST_BOX = b;
    const kind = o.kind || 'primary', tf = o.tf || '';
    const isGlass = kind === 'glass';
    const g = this.grad(kind, b);
    let out = '';
    const maskAttr = o.mask ? ` mask="url(#${o.mask})"` : '';
    if (o.drop !== false)
      out += wrap(tf, `<g transform="translate(8 16)" filter="url(#${ID('drop')})" fill="${C.b700}" opacity="${isDark() ? 0.25 : isGlass ? 0.12 : 0.14}">${shapes}</g>`, maskAttr);
    if (isGlass && o.behind) {
      const m = this.uid('m');
      this.defs.push(`<mask id="${m}" maskUnits="userSpaceOnUse" x="-64" y="-64" width="640" height="640">${wrap(tf, shapes, ' fill="#fff"')}</mask>`);
      out += `<g mask="url(#${m})">${o.mask ? `<g mask="url(#${o.mask})">` : ''}<g filter="url(#${ID('frost')})">${o.behind}</g>${o.mask ? '</g>' : ''}</g>`;
    }
    const sm = this.uid('u');
    this.defs.push(`<mask id="${sm}" maskUnits="userSpaceOnUse" x="-128" y="-128" width="768" height="768"><g fill="#fff">${shapes}</g></mask>`);
    const full = (f) => `<rect x="-128" y="-128" width="768" height="768" fill="${f}"/>`;
    const sh = o.sheen === false ? '' : full(`url(#${this.sheen(b, isGlass ? (isDark() ? 0.3 : 0.55) : 0.36)})`);
    out += wrap(tf, `<g mask="url(#${sm})">${full(`url(#${g})`)}${sh}</g>` +
      (o.inner === false ? '' : `<g filter="url(#${ID(isGlass ? 'innerG' : 'inner')})" fill="#000">${shapes}</g>`),
      maskAttr + (o.opacity != null ? ` opacity="${o.opacity}"` : ''));
    if (!o.noAppend) this.body.push(out);
    return out;
  }
  detail(shapes, color, tf = '', opacity = 1) {
    if (isDark()) color = DARK_DETAIL[color] || color;
    // 다크: 밝은 안쪽 요소는 단색 대신 b50→b100 그라데이션(dg) — 랜딩 적용본 규칙
    if (isDark() && (color === C.b50 || color === C.b100)) {
      if (!this.dg) { this.dg = ID('dg'); this.defs.push(`<linearGradient id="${this.dg}" gradientUnits="userSpaceOnUse" x1="96" y1="96" x2="416" y2="416"><stop offset="0" stop-color="${C.b50}"/><stop offset="1" stop-color="${C.b100}"/></linearGradient>`); }
      color = `url(#${this.dg})`;
    }
    if (THIN) shapes = glyphOrThin(shapes);
    const out = wrap(tf, shapes, ` fill="${color}"${opacity !== 1 ? ` opacity="${opacity}"` : ''}`);
    this.body.push(out); return out;
  }
  raw(s) { this.body.push(s); return s; }
  svg(size = 512) {
    const common = `<filter id="${ID('drop')}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="18"/></filter>` +
      `<filter id="${ID('frost')}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>` +
      `<filter id="${ID('inner')}" x="-20%" y="-20%" width="140%" height="140%"><feOffset in="SourceAlpha" dx="-9" dy="-11" result="o"/><feGaussianBlur in="o" stdDeviation="9" result="b"/><feComposite in="SourceAlpha" in2="b" operator="out" result="m"/><feFlood flood-color="${C.b700}" flood-opacity="0.30"/><feComposite in2="m" operator="in"/></filter>` +
      `<filter id="${ID('innerG')}" x="-20%" y="-20%" width="140%" height="140%"><feOffset in="SourceAlpha" dx="-7" dy="-9" result="o"/><feGaussianBlur in="o" stdDeviation="9" result="b"/><feComposite in="SourceAlpha" in2="b" operator="out" result="m"/><feFlood flood-color="${C.b600}" flood-opacity="0.22"/><feComposite in2="m" operator="in"/></filter>`;
    const style = MODE.css && MODE.anims.length
      ? `<style>${MODE.anims.join('')}@media (prefers-reduced-motion:reduce){[class^="${MODE.pfx}m"]{animation:none!important}}</style>` : '';
    let body = this.body.join('');
    // NORM=1 → 아이콘 전체 크기 통일: 보이는 영역 √면적 360(최대 변 400 이하), 캔버스 중앙 정렬
    const bb = NORM && BBOX[MODE.key];
    if (bb) {
      const [x, y, w, h] = bb, k = Math.min(360 / Math.sqrt(w * h), 400 / Math.max(w, h));
      const cx = x + w / 2, cy = y + h / 2;
      body = `<g transform="translate(256 256) scale(${k.toFixed(4)}) translate(${-cx} ${-cy})">${body}</g>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512" class="${MODE.pfx}icon">${style}<defs>${common}${this.defs.join('')}</defs>${body}</svg>`;
  }
}
module.exports = { C, Icon, rr, ci, pa, rrPath, roundPoly, tr, sc, ro, bounce, spring, smooth, seg, springE, smoothE, motion, wrap, setMode };
