const { C, Icon, rr, ci, pa, rrPath, roundPoly, tr, sc, ro, bounce, spring, smooth, seg, motion, wrap } = require('./lib');

// Shared rhythm constants (series consistency)
const BAR = 20, BR = 10;     // info bar thickness / radius (BR = BAR/2 — 양끝이 반원)
const PIP = 12;              // 막대와 나란히 놓는 점의 반지름(지름 24)
// 점은 PIP 로, 막대는 BAR 로 적는다. 둘을 따로 두는 까닭은 한쪽만 조절하는 일이
// 잦아서다 — BR 에 점을 묶어 두면 막대를 줄일 때 점까지 끌려 내려간다.
// 솔루션 구조 넷의 점과 느낌표의 점(PIP + 1)이 PIP 를 쓴다.
// DOT 계열 원은 막대와 무관한 점이라 여기 묶이지 않는다.
const DOT = 15;              // info dot radius

function pinPath(cx, cy, R, k, rt = 26) {
  // teardrop pin: circle (cx,cy,R) + tip at (cx, cy+k) with rounded tip
  const phi = Math.acos(R / k);
  const lx = cx - R * Math.sin(phi), ly = cy + R * Math.cos(phi);
  const rx = cx + R * Math.sin(phi);
  const T = [cx, cy + k];
  const vl = [lx - T[0], ly - T[1]], L = Math.hypot(...vl);
  const a = [T[0] + vl[0] / L * rt, T[1] + vl[1] / L * rt], bq = [T[0] - vl[0] / L * rt, T[1] + vl[1] / L * rt];
  return `M${lx.toFixed(2)} ${ly.toFixed(2)}A${R} ${R} 0 1 1 ${rx.toFixed(2)} ${ly.toFixed(2)}L${bq[0].toFixed(2)} ${bq[1].toFixed(2)}Q${T[0]} ${T[1]} ${a[0].toFixed(2)} ${a[1].toFixed(2)}Z`;
}
function rhombus(cx, cy, hw, hh, r = 34) { return roundPoly([[cx, cy - hh], [cx + hw, cy], [cx, cy + hh], [cx - hw, cy]], r); }
function ring(x, y, w, h, r, th) { return `<path fill-rule="evenodd" d="${rrPath(x, y, w, h, r)}${rrPath(x + th, y + th, w - 2 * th, h - 2 * th, r - th)}"/>`; }

const icons = {
  // ───────── 솔루션 구조 ─────────
  'flow-site': { center: [0, 18], group: '솔루션 구조', label: '현장', motion: '굴뚝 위 원형 점이 천천히 떠오르며 사라짐 (ease-in-out)', draw() {
    const I = new Icon();
    const back = I.face(rr(330, 96, 60, 200, 30) + rr(262, 176, 184, 248, 44), [262, 96, 184, 328], { kind: 'primary' });
    // puffs (loop: rises & fades, a new one fades in at base)
    const m1 = motion(t => { const p = smooth(t, 0.05, 0.75); return { y: -30 * p, o: 0.9 * (1 - p) }; }, [360, 60]);
    const m0 = motion(t => { const q = smooth(t, 0.5, 0.95); return { s: 0.6 + 0.4 * q, o: t < 0.5 ? 0 : 0.9 * q }; }, [360, 60]);
    const puff1 = wrap(m1, I.face(ci(360, 60, 20), [340, 40, 40, 40], { kind: 'light', drop: false, noAppend: true }));
    const puff0 = wrap(m0, I.face(ci(360, 60, 20), [340, 40, 40, 40], { kind: 'light', drop: false, noAppend: true }));
    I.raw(puff1 + puff0);
    const frontShape = pa(roundPoly([[66, 424], [66, 196], [190, 150], [190, 220], [330, 160], [330, 424]], [44, 40, 28, 26, 30, 44]));
    I.face(frontShape, [66, 150, 264, 274], { kind: 'glass', behind: back });
    I.detail(ci(124, 300, PIP) + ci(188, 300, PIP) + ci(252, 300, PIP) + rr(106, 352, 108, BAR, BR), C.b600);
    return I.svg();
  } },
  'flow-connect': { center: [0, 0], group: '솔루션 구조', label: '연동', motion: '두 고리가 살짝 벌어졌다가 탄성으로 맞물림', draw() {
    const I = new Icon();
    const cs = Math.cos(-35 * Math.PI / 180), sn = Math.sin(-35 * Math.PI / 180);
    const dir = k => t => { const d = k * bounce(t, 0.08, 0.38, 0.85, 22); return { x: d * cs, y: d * sn }; };
    const A = motion(dir(-1), [256, 256], 'rotate(-35 256 256)'), B = motion(dir(1), [256, 256], 'rotate(-35 256 256)');
    const back = I.face(ring(54, 186, 250, 150, 75, 46), [54, 186, 250, 150], { kind: 'primary', tf: A });
    I.face(ring(208, 176, 250, 150, 75, 46), [208, 176, 250, 150], { kind: 'glass', tf: B, behind: back });
    I.detail(ci(333, 251, PIP), C.b600, B);
    return I.svg();
  } },
  'flow-refinery': { center: [0, -6], group: '솔루션 구조', label: 'Refinery', motion: '세 개의 레이어가 위아래로 벌어졌다가 탄성으로 다시 겹침', draw() {
    const I = new Icon();
    const dn = motion(t => ({ y: bounce(t, 0.08, 0.38, 0.85, 18) }), [256, 336]), up = motion(t => ({ y: -bounce(t, 0.08, 0.38, 0.85, 18) }), [256, 190]);
    const b1 = I.face(pa(rhombus(256, 336, 184, 100)), [72, 236, 368, 200], { kind: 'deep', tf: dn });
    const mid = I.face(pa(rhombus(256, 266, 184, 100)), [72, 166, 368, 200], { kind: 'primary', noAppend: true });
    I.raw(mid);
    const top = I.face(pa(rhombus(256, 190, 184, 100)), [72, 90, 368, 200], { kind: 'glass', tf: up, behind: b1 + mid });
    // 네 점은 맨 위 마름모(중심 256,190 · 184x100)와 같은 비율의 작은 마름모를 이룬다.
    // 55:30 ≈ 184:100 이라 네 변 길이가 62.7 로 같고, 면의 기울기를 그대로 따라간다.
    I.detail(ci(256, 160, PIP) + ci(311, 190, PIP) + ci(256, 220, PIP) + ci(201, 190, PIP), C.b600, up);
    return I.svg();
  } },
  'flow-use': { center: [0, 2], group: '솔루션 구조', label: '활용', motion: '알림 카드가 위로 떠올랐다가 탄성으로 자리 잡음', draw() {
    const I = new Icon();
    const back = I.face(rr(56, 92, 360, 250, 48), [56, 92, 360, 250], { kind: 'primary' });
    const stand = I.face(rr(206, 330, 60, 60, 20) + rr(136, 378, 200, 40, 20), [136, 330, 200, 88], { kind: 'deep' });
    I.detail(rr(100, 236, BAR, 70, BR) + rr(160, 186, BAR, 120, BR) + rr(220, 214, BAR, 92, BR) + rr(100, 136, 110, BAR, BR), C.b50, '', 0.92);
    const y = motion(t => ({ y: bounce(t, 0.08, 0.36, 0.85, -26) }), [364, 311]);
    I.face(rr(272, 236, 184, 150, 44), [272, 236, 184, 150], { kind: 'glass', tf: y, behind: back + stand });
    I.detail(ci(320, 290, PIP) + rr(352, 276, 72, BAR, BR) + rr(304, 330, 120, BAR, BR), C.b600, y);
    return I.svg();
  } },

  // ───────── 플랫폼 개요 · 현장이 먼저입니다 ─────────
  'why-team': { center: [0, -5], group: '현장이 먼저입니다', label: '현장을 아는 팀', motion: '앞 인물이 먼저, 뒤 인물이 이어서 살짝 튀어 오름', draw() {
    const I = new Icon();
    const y2 = motion(t => ({ y: bounce(t, 0.16, 0.42, 0.9, -16) }), [330, 250]), y1 = motion(t => ({ y: bounce(t, 0.06, 0.32, 0.8, -20) }), [192, 280]);
    const body = (x, y, w, h) => pa(`M${x} ${y + h - 30}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h - 30}Q${x + w} ${y + h} ${x + w - 30} ${y + h}H${x + 30}Q${x} ${y + h} ${x} ${y + h - 30}Z`);
    const back = I.face(ci(330, 150, 62) + body(222, 236, 216, 176), [222, 88, 216, 324], { kind: 'primary', tf: y2 });
    I.face(ci(192, 198, 64) + body(74, 286, 236, 140), [74, 134, 236, 292], { kind: 'glass', tf: y1, behind: back });
    return I.svg();
  } },
  'why-layer': { center: [0, -18], group: '현장이 먼저입니다', label: '걷어내지 않는 도입', motion: '위 카드가 들렸다가 기존 판 위로 탄성 있게 내려앉음', draw() {
    const I = new Icon();
    const base = I.face(rr(58, 312, 396, 112, 44), [58, 312, 396, 112], { kind: 'primary' });
    I.detail(ci(118, 368, DOT) + ci(166, 368, DOT) + rr(204, 354, 120, BAR, BR), C.b50, '', 0.9);
    const y = motion(t => ({ y: bounce(t, 0.06, 0.36, 0.86, -40) }), [256, 231]);
    I.face(rr(108, 124, 296, 214, 48), [108, 124, 296, 214], { kind: 'glass', tf: y, behind: base });
    I.detail(rr(156, 180, 150, BAR, BR) + rr(156, 228, 200, BAR, BR) + ci(342, 194, DOT - 1), C.b600, y);
    return I.svg();
  } },
  'why-knowledge': { center: [2, -4], group: '현장이 먼저입니다', label: '숫자를 넘어, 지식으로', motion: '주변 노드가 순서대로 살짝 커졌다 돌아옴', draw() {
    const I = new Icon();
    const k = (a, b, o) => motion(t => ({ s: 1 + bounce(t, a, a + 0.18, b, 0.1) }), o);
    const s1 = k(0.04, 0.5, [110, 142]), s2 = k(0.16, 0.64, [356, 170]), s3 = k(0.28, 0.8, [384, 388]);
    I.face(rr(98, 168, 150, 26, 13), [98, 168, 150, 26], { kind: 'deep', tf: ro(173, 181, 40), drop: false, inner: false, sheen: false });
    I.face(rr(220, 340, 160, 26, 13), [220, 340, 160, 26], { kind: 'deep', tf: ro(300, 353, 28), drop: false, inner: false, sheen: false });
    const n1 = I.face(ci(110, 142, 40), [70, 102, 80, 80], { kind: 'deep', tf: s1 });
    const n3 = I.face(ci(384, 388, 44), [340, 344, 88, 88], { kind: 'light', tf: s3 });
    const core = I.face(ci(226, 286, 100), [126, 186, 200, 200], { kind: 'primary' });
    I.detail(ci(196, 270, DOT) + ci(250, 306, DOT), C.b50, '', 0.9);
    I.face(ci(356, 170, 82), [274, 88, 164, 164], { kind: 'glass', tf: s2, behind: core + n1 });
    I.detail(ci(356, 170, DOT + 4), C.b600, s2);
    return I.svg();
  } },

  // ───────── 회사 소개 · 통계 ─────────
  'stat-experience': { center: [-2, -2], group: '회사 소개', label: '30년+ 경험', motion: '분침이 한 바퀴 부드럽게 회전 (중심 고정)', draw() {
    const I = new Icon();
    const back = I.face(ci(296, 296, 148), [148, 148, 296, 296], { kind: 'primary' });
    I.face(ci(242, 242, 168), [74, 74, 336, 336], { kind: 'glass', behind: back });
    I.detail(ci(242, 116, 11) + ci(368, 242, 11) + ci(242, 368, 11) + ci(116, 242, 11), C.b, '', 0.9);
    const a = motion(t => ({ r: 360 * smooth(t, 0.08, 0.82) }), [242, 242]);
    I.detail(rr(228, 150, BAR, 106, BR), C.b700);                                // hour hand (12 o'clock)
    I.detail(rr(228, 228, 120, BAR, BR), C.b600, a);              // minute hand
    I.detail(ci(242, 242, 22), C.b700);
    return I.svg();
  } },
  'stat-sites': { center: [-2, 0], group: '회사 소개', label: '100+ 현장', motion: '앞 핀이 튀어 올랐다가 탄성으로 착지', draw() {
    const I = new Icon();
    I.face(pa(`M96 398a160 34 0 1 0 320 0a160 34 0 1 0 -320 0Z`), [96, 364, 320, 68], { kind: 'light', drop: false });
    const back = I.face(pa(pinPath(342, 172, 80, 150, 22)), [264, 90, 156, 254], { kind: 'primary' });
    const y = motion(t => ({ y: bounce(t, 0.06, 0.34, 0.84, -34) }), [214, 245]);
    I.face(pa(pinPath(214, 196, 116, 214, 28)), [98, 80, 232, 330], { kind: 'glass', tf: y, behind: back });
    I.detail(ci(214, 196, 42), C.b600, y);
    return I.svg();
  } },
  'stat-industries': { center: [0, 0], group: '회사 소개', label: '20+ 산업군', motion: '타일이 순서대로 작게 튀었다 제자리로 (스태거)', draw() {
    const I = new Icon();
    const p = (a, o) => motion(t => ({ s: 1 + bounce(t, a, a + 0.16, a + 0.5, -0.08) }), o);
    const pA = p(0.04, [155, 155]), pB = p(0.12, [357, 155]), pC = p(0.2, [155, 357]), pD = p(0.28, [338, 338]);
    const A = I.face(rr(76, 76, 158, 158, 46), [76, 76, 158, 158], { kind: 'primary', tf: pA });
    const B = I.face(ci(357, 155, 79), [278, 76, 158, 158], { kind: 'deep', tf: pB });
    const Cc = I.face(rr(76, 278, 158, 158, 46), [76, 278, 158, 158], { kind: 'primary', tf: pC });
    I.face(rr(240, 240, 196, 196, 54), [240, 240, 196, 196], { kind: 'glass', tf: pD, behind: A + B + Cc });
    I.detail(ci(298, 304, DOT) + rr(284, 352, 108, BAR, BR), C.b600, pD);
    return I.svg();
  } },

  // ───────── 회사 소개 · 일하는 세 가지 기준 ─────────
  'rule-field': { center: [2, -2], group: '일하는 세 가지 기준', label: '현장에서 나온 문제', motion: '톱니가 살짝 돌다 멈추고(탄성), 경고 배지가 톡 튐', draw() {
    const I = new Icon();
    const gx = 224, gy = 288;
    let teeth = '';
    for (let i = 0; i < 8; i++) teeth += `<rect x="${gx - 34}" y="${gy - 168}" width="68" height="80" rx="22" transform="rotate(${i * 45 + 22.5} ${gx} ${gy})"/>`;
    const mid = I.uid('hole');
    I.defs.push(`<mask id="${mid}" maskUnits="userSpaceOnUse" x="-64" y="-64" width="640" height="640"><rect x="-64" y="-64" width="640" height="640" fill="#fff"/><circle cx="${gx}" cy="${gy}" r="48" fill="#000"/></mask>`);
    const rot = motion(t => ({ r: bounce(t, 0.06, 0.34, 0.82, -22) }), [gx, gy]);
    const gear = I.face(ci(gx, gy, 128) + teeth, [56, 120, 336, 336], { kind: 'primary', tf: rot, mask: mid });
    const s = motion(t => ({ s: 1 + bounce(t, 0.3, 0.46, 0.9, 0.1) }), [362, 150]);
    I.face(ci(362, 150, 84), [278, 66, 168, 168], { kind: 'glass', tf: s, behind: gear });
    I.detail(rr(348, 104, BAR, 60, BR) + ci(362, 192, PIP + 1), C.b600, s);
    return I.svg();
  } },
  'rule-build': { center: [0, -4], group: '일하는 세 가지 기준', label: '얹거나, 새로 세우거나', motion: '위 블록이 들렸다가 아래 블록 위로 탄성 착지', draw() {
    const I = new Icon();
    const L = I.face(rr(70, 274, 176, 150, 42), [70, 274, 176, 150], { kind: 'primary' });
    const R = I.face(rr(266, 274, 176, 150, 42), [266, 274, 176, 150], { kind: 'deep' });
    const y = motion(t => ({ y: bounce(t, 0.06, 0.36, 0.86, -40) }), [258, 196]);
    I.face(rr(160, 98, 196, 196, 50), [160, 98, 196, 196], { kind: 'glass', tf: y, behind: L + R });
    I.detail(rr(244, 152, BAR, 88, BR) + rr(214, 182, 88, BAR, BR), C.b600, y); // rounded plus
    return I.svg();
  } },
  'rule-context': { center: [-2, 14], group: '일하는 세 가지 기준', label: '숫자에 붙는 맥락', motion: '말풍선이 떠올랐다 탄성으로 자리 잡고 체크가 은은히 나타남', draw() {
    const I = new Icon();
    const bars = I.face(rr(72, 246, 64, 168, 32) + rr(156, 170, 64, 244, 32) + rr(240, 300, 64, 114, 32), [72, 170, 232, 244], { kind: 'primary' });
    const y = motion(t => ({ y: bounce(t, 0.06, 0.34, 0.84, -24) }), [315, 197]);
    const bub = pa(roundPoly([[184, 72], [446, 72], [446, 270], [356, 270], [316, 322], [300, 270], [184, 270]], [56, 56, 56, 22, 12, 10, 56]));
    I.face(bub, [184, 72, 262, 250], { kind: 'glass', tf: y, behind: bars });
    const ckm = motion(t => ({ y: bounce(t, 0.06, 0.34, 0.84, -24), o: t < 0.34 ? 1 - smooth(t, 0.06, 0.2) * 0.75 : 0.25 + 0.75 * smooth(t, 0.42, 0.7) }), [315, 197]);
    const seg2 = (P, Q) => { const L = Math.hypot(Q[0] - P[0], Q[1] - P[1]), a = Math.atan2(Q[1] - P[1], Q[0] - P[0]) * 180 / Math.PI; return `<rect x="${P[0] - BR}" y="${P[1] - BR}" width="${L + BAR}" height="${BAR}" rx="${BR}" transform="rotate(${a} ${P[0]} ${P[1]})"/>`; };
    const ck = seg2([246, 172], [292, 218]) + seg2([292, 218], [384, 126]);
    I.detail(ck, C.b600, ckm);
    return I.svg();
  } },
};
module.exports = icons;
