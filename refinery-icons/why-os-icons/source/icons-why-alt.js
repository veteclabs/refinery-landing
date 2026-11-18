// 연결 · 앱 재시안 (각 2안)
const { C, Icon, rr, ci, pa, roundPoly, bounce, smooth, motion } = require('./lib');
const BAR = 28, BR = 14;
const band = (P, Q, T) => { const L = Math.hypot(Q[0] - P[0], Q[1] - P[1]), a = Math.atan2(Q[1] - P[1], Q[0] - P[0]) * 180 / Math.PI, h = T / 2; return `<rect x="${P[0] - h}" y="${P[1] - h}" width="${(L + T).toFixed(2)}" height="${T}" rx="${h}" transform="rotate(${a.toFixed(3)} ${P[0]} ${P[1]})"/>`; };
const hex = (cx, cy, R, rad) => pa(roundPoly(Array.from({ length: 6 }, (_, i) => { const a = (-90 + i * 60) * Math.PI / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; }), rad));
const diamond = (cx, cy, R, rad) => pa(roundPoly([[cx, cy - R], [cx + R, cy], [cx, cy + R], [cx - R, cy]], rad));
// 두께 있는 호(둥근 끝) — a0,a1 도(0=오른쪽, 시계방향)
const arcBand = (cx, cy, r, w, a0, a1) => {
  const p = (rad, a) => [cx + rad * Math.cos(a * Math.PI / 180), cy + rad * Math.sin(a * Math.PI / 180)].map(v => v.toFixed(2));
  const ro = r + w / 2, ri = r - w / 2, large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const [o0, o1, i1, i0] = [p(ro, a0), p(ro, a1), p(ri, a1), p(ri, a0)];
  return `<path d="M${o0}A${ro} ${ro} 0 ${large} 1 ${o1}A${w / 2} ${w / 2} 0 0 1 ${i1}A${ri} ${ri} 0 ${large} 0 ${i0}A${w / 2} ${w / 2} 0 0 1 ${o0}Z"/>`;
};
const wedge = (cx, cy, r, a0, a1) => { const p = a => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)].map(v => v.toFixed(2)); return pa(`M${cx} ${cy}L${p(a0)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p(a1)}Z`); };

module.exports = {
  'connect-a': { label: '연결 A · 허브와 설비', motion: '가운데 유리 허브가 톡 튀고, 주변 설비가 차례로 반응', draw() {
    const I = new Icon();
    const lines = I.face(band([256, 256], [110, 120], 28) + band([256, 256], [402, 120], 28) + band([256, 256], [256, 418], 28), [96, 106, 320, 326], { kind: 'deep', drop: false, inner: false, sheen: false });
    const sc = (x, y, a) => motion(t => ({ s: 1 + bounce(t, a, a + 0.14, a + 0.46, 0.1) }), [x, y]);
    const n1 = I.face(ci(110, 120, 60), [50, 60, 120, 120], { kind: 'primary', tf: sc(110, 120, 0.3) });
    const n2 = I.face(rr(342, 60, 120, 120, 36), [342, 60, 120, 120], { kind: 'primary', tf: sc(402, 120, 0.38) });
    const n3 = I.face(diamond(256, 418, 66, 20), [190, 352, 132, 132], { kind: 'deep', tf: sc(256, 418, 0.46) });
    const hub = motion(t => ({ s: 1 + bounce(t, 0.06, 0.2, 0.56, 0.08) }), [256, 256]);
    I.face(hex(256, 256, 96, 26), [173, 160, 166, 192], { kind: 'glass', tf: hub, behind: lines + n1 + n2 + n3 });
    I.detail(ci(256, 256, 18), C.b600, hub);
    return I.svg();
  } },
  'connect-b': { label: '연결 B · 무선 송신탑', motion: '안쪽에서 바깥쪽으로 신호 호가 차례로 켜짐', draw() {
    const I = new Icon();
    const tower = I.face(pa(roundPoly([[230, 230], [282, 230], [334, 452], [178, 452]], [14, 14, 24, 24])), [178, 230, 156, 222], { kind: 'primary' });
    I.face(rr(194, 380, 124, 26, 13), [194, 380, 124, 26], { kind: 'deep', drop: false, holder: false });
    const sig = (r, a) => motion(t => ({ o: (t > a && t < a + 0.3) ? 0.35 + 0.65 * smooth(t, a, a + 0.1) : 1 }), [256, 176]);
    [[96, 0.06, 'primary'], [150, 0.18, 'deep']].forEach(([r, a, kind]) => I.face(arcBand(256, 176, r, 30, 200, 250) + arcBand(256, 176, r, 30, 290, 340), [256 - r - 15, 176 - r - 15, 2 * r + 30, r + 30], { kind, tf: sig(r, a), holder: false }));
    I.face(ci(256, 176, 62), [194, 114, 124, 124], { kind: 'glass', behind: tower });
    I.detail(ci(256, 176, 22), C.b600);
    return I.svg();
  } },
  'app-a': { label: '앱 A · 분석 차트', motion: '파이 조각이 바깥으로 빠졌다 탄성으로 제자리', draw() {
    const I = new Icon();
    const bars = I.face(rr(330, 250, 44, 176, 22) + rr(392, 190, 44, 236, 22), [330, 190, 106, 236], { kind: 'deep' });
    const pie = I.face(ci(206, 262, 150), [56, 112, 300, 300], { kind: 'glass', behind: bars });
    const out = motion(t => { const d = bounce(t, 0.06, 0.32, 0.82, 22); return { x: d * Math.cos(-0.785), y: d * Math.sin(-0.785) }; }, [206, 262]);
    I.face(wedge(218, 250, 150, -90, 0), [218, 100, 150, 150], { kind: 'primary', tf: out });
    I.detail(ci(206, 262, 30), C.b600);
    return I.svg();
  } },
  'app-b': { label: '앱 B · 워크플로우', motion: '단계가 차례로 톡톡 튀며 흐름을 따라감', draw() {
    const I = new Icon();
    const sc = (x, y, a) => motion(t => ({ s: 1 + bounce(t, a, a + 0.14, a + 0.46, 0.1) }), [x, y]);
    const lines = I.face(band([150, 150], [362, 150], 28) + band([362, 150], [362, 362], 28) + band([362, 362], [150, 362], 28), [136, 136, 240, 240], { kind: 'deep', drop: false, inner: false, sheen: false });
    const s1 = I.face(ci(150, 150, 76), [74, 74, 152, 152], { kind: 'primary', tf: sc(150, 150, 0.06) });
    const s3 = I.face(rr(286, 286, 152, 152, 44), [286, 286, 152, 152], { kind: 'primary', tf: sc(362, 362, 0.34) });
    const g = sc(362, 150, 0.2);
    I.face(diamond(362, 150, 92, 26), [270, 58, 184, 184], { kind: 'glass', tf: g, behind: lines + s1 });
    I.detail(ci(362, 150, 20), C.b600, g);
    I.face(ci(150, 362, 50), [100, 312, 100, 100], { kind: 'deep', tf: sc(150, 362, 0.48) });
    return I.svg();
  } },
};

const star4 = (cx, cy, R, r, rad = 10) => { const pts = []; for (let i = 0; i < 8; i++) { const a = -Math.PI / 2 + i * Math.PI / 4, d = i % 2 ? r : R; pts.push([cx + d * Math.cos(a), cy + d * Math.sin(a)]); } return pa(roundPoly(pts, pts.map((_, i) => i % 2 ? 6 : rad))); };
Object.assign(module.exports, {
  'app-c': { label: '앱 C · 휴대폰 + 튀어나온 앱', motion: '화면 속 앱 하나가 밖으로 톡 튀어나왔다 돌아감', draw() {
    const I = new Icon();
    const phone = I.face(rr(110, 40, 236, 432, 60), [110, 40, 236, 432], { kind: 'primary' });
    I.detail(rr(150, 104, 56, 56, 18) + rr(222, 104, 56, 56, 18) + rr(150, 176, 56, 56, 18) + rr(150, 248, 56, 56, 18) + rr(222, 248, 56, 56, 18) + rr(198, 430, 60, 14, 7), C.b50, '', 0.85);
    const pop = motion(t => { const d = bounce(t, 0.06, 0.3, 0.8, 1); return { x: 16 * d, y: -16 * d, s: 1 + 0.06 * d }; }, [340, 230]);
    I.face(rr(250, 150, 190, 190, 54), [250, 150, 190, 190], { kind: 'glass', tf: pop, behind: phone });
    I.detail(star4(345, 245, 50, 17, 10), C.b600, pop);
    return I.svg();
  } },
  'app-d': { label: '앱 D · 겹친 앱 아이콘', motion: '뒤 앱 아이콘이 부채처럼 살짝 펼쳐졌다 모임', draw() {
    const I = new Icon();
    const f = (k) => motion(t => ({ r: k * bounce(t, 0.06, 0.32, 0.82, 6) }), [256, 440]);
    const L = I.face(rr(110, 110, 230, 230, 64), [110, 110, 230, 230], { kind: 'deep', tf: motion(t => ({ r: -bounce(t, 0.06, 0.32, 0.82, 6) }), [256, 440], 'rotate(-14 256 440)') });
    const R = I.face(rr(172, 110, 230, 230, 64), [172, 110, 230, 230], { kind: 'primary', tf: motion(t => ({ r: bounce(t, 0.06, 0.32, 0.82, 6) }), [256, 440], 'rotate(14 256 440)') });
    const y = motion(t => ({ y: bounce(t, 0.06, 0.32, 0.82, -10) }), [256, 290]);
    I.face(rr(136, 170, 240, 240, 66), [136, 170, 240, 240], { kind: 'glass', tf: y, behind: L + R });
    I.detail(ci(214, 248, 24) + pa(roundPoly([[298, 222], [324, 248], [298, 274], [272, 248]], 8)) + rr(190, 306, 48, 48, 14) + rr(274, 306, 48, 48, 14), C.b600, y);
    return I.svg();
  } },
  'app-e': { label: '앱 E · 앱 창', motion: '창 속 유리 위젯 카드가 톡 튀었다 제자리', draw() {
    const I = new Icon();
    const win = I.face(rr(52, 80, 408, 336, 56), [52, 80, 408, 336], { kind: 'primary' });
    I.detail(ci(104, 130, 13) + ci(142, 130, 13) + ci(180, 130, 13) + rr(92, 182, 96, 20, 10) + rr(92, 222, 70, 20, 10) + rr(92, 262, 86, 20, 10), C.b50, '', 0.85);
    const s = motion(t => ({ s: 1 + bounce(t, 0.06, 0.22, 0.62, 0.08) }), [326, 290]);
    I.face(rr(222, 176, 208, 228, 50), [222, 176, 208, 228], { kind: 'glass', tf: s, behind: win });
    I.detail(rr(258, 300, 30, 72, 15) + rr(310, 256, 30, 116, 15) + rr(362, 280, 30, 92, 15) + rr(258, 214, 100, 20, 10), C.b600, s);
    return I.svg();
  } },
});

const pillP = (x, y, w, h) => { const r = h / 2; return `<path d="M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z"/>`; };
const bubbleL = (x, y, w, h, r) => pa(roundPoly([[x, y], [x + w, y], [x + w, y + h], [x + 100, y + h], [x + 40, y + h + 46], [x + 54, y + h], [x, y + h]], [r, r, r, 12, 8, 10, r]));
const bubbleR = (x, y, w, h, r) => pa(roundPoly([[x, y], [x + w, y], [x + w, y + h], [x + w - 54, y + h], [x + w - 40, y + h + 46], [x + w - 100, y + h], [x, y + h]], [r, r, r, 10, 8, 12, r]));
const dots3 = (I, xs, y, tf0, base = 0.1) => xs.forEach((x, i) => I.detail(ci(x, y, 24), C.b600, motion(t => ({ y: (tf0 ? tf0(t) : 0) + bounce(t, base + i * 0.1, base + i * 0.1 + 0.12, base + i * 0.1 + 0.36, -14) }), [x, y])));
Object.assign(module.exports, {
  'agent-b': { label: 'AI B · 상담원 + 말풍선', motion: '말풍선이 떠오르며 점 세 개가 차례로 통통', draw() {
    const I = new Icon();
    const person = I.face(ci(150, 196, 74) + pa('M44 470V388A106 106 0 0 1 256 388V470Z'), [44, 122, 212, 348], { kind: 'primary' });
    I.face(rr(68, 186, 30, 70, 15) + rr(202, 186, 30, 70, 15) + band([217, 250], [190, 300], 20), [68, 186, 164, 124], { kind: 'deep', drop: false, holder: false });
    const y = motion(t => ({ y: bounce(t, 0.04, 0.28, 0.78, -16) }), [340, 190]);
    I.face(bubbleR(206, 70, 262, 190, 62), [206, 70, 262, 236], { kind: 'glass', tf: y, behind: person });
    dots3(I, [272, 338, 404], 165, t => bounce(t, 0.04, 0.28, 0.78, -16));
    return I.svg();
  } },
  'agent-c': { label: 'AI C · 묻고 답하는 대화', motion: '질문 → 답 순서로 말풍선이 차례로 톡 튐', draw() {
    const I = new Icon();
    const q = motion(t => ({ s: 1 + bounce(t, 0.04, 0.16, 0.5, 0.08) }), [180, 140]);
    const qb = I.face(bubbleL(56, 64, 250, 150, 60), [56, 64, 250, 196], { kind: 'primary', tf: q });
    I.detail(rr(104, 112, 120, 24, 12) + rr(104, 152, 80, 24, 12), C.b50, q, 0.85);
    const a = motion(t => ({ s: 1 + bounce(t, 0.22, 0.34, 0.7, 0.08) }), [320, 330]);
    I.face(bubbleR(176, 230, 280, 180, 64), [176, 230, 280, 226], { kind: 'glass', tf: a, behind: qb });
    dots3(I, [248, 316, 384], 320, null, 0.34);
    return I.svg();
  } },
  'agent-d': { label: 'AI D · 근거 문서 + 답', motion: '답 말풍선이 떠오르고, 점 세 개가 차례로 통통', draw() {
    const I = new Icon();
    const doc = I.face(pa(roundPoly([[230, 48], [396, 48], [452, 104], [452, 330], [230, 330]], [40, 14, 14, 40, 40])), [230, 48, 222, 282], { kind: 'primary' });
    I.detail(rr(272, 110, 120, 24, 12) + rr(272, 152, 140, 24, 12) + rr(272, 194, 96, 24, 12), C.b50, '', 0.85);
    const y = motion(t => ({ y: bounce(t, 0.04, 0.28, 0.78, -16) }), [210, 320]);
    I.face(bubbleL(52, 214, 300, 200, 64), [52, 214, 300, 246], { kind: 'glass', tf: y, behind: doc });
    dots3(I, [130, 202, 274], 314, t => bounce(t, 0.04, 0.28, 0.78, -16));
    return I.svg();
  } },
});

const star5 = (cx, cy, R, r, rad = 8) => { const pts = []; for (let i = 0; i < 8; i++) { const a = -Math.PI / 2 + i * Math.PI / 4, d = i % 2 ? r : R; pts.push([cx + d * Math.cos(a), cy + d * Math.sin(a)]); } return pa(roundPoly(pts, pts.map((_, i) => i % 2 ? 5 : rad))); };
// 현재 AI 안의 배치 변형: P = 질문 알약 [x,y,w,h], G = 답 말풍선 [x,y,w,h]
const agentVariant = (label, P, G) => ({ label, motion: '답 말풍선이 떠오르며 점 세 개가 차례로 통통, 작은 별이 반짝', draw() {
  const I = new Icon();
  const [px, py, pw, ph] = P, [gx, gy, gw, gh] = G;
  const tx = px + pw - 64;
  const back = I.face(pillP(px, py, pw, ph) + pa(`M${tx} ${py + ph - 18}L${tx + 44} ${py + ph + 38}L${tx - 46} ${py + ph - 8}Z`), [px, py, pw, ph + 38], { kind: 'primary' });
  // 막대 + 간격 + 별을 한 묶음으로 보고 알약 안에서 좌우 여백을 같게 (막대 120 · 간격 32 · 별 지름 52)
  const BW = 120, GAP = 32, SR = 26, pad = (pw - (BW + GAP + 2 * SR)) / 2;
  I.detail(rr(px + pad, py + ph / 2 - 14, BW, 28, 14), C.b50, '', 0.85);
  const sx = px + pad + BW + GAP + SR, sy = py + ph / 2;
  I.detail(star5(sx, sy, 26, 9), C.b50, motion(t => ({ s: 1 + bounce(t, 0.5, 0.62, 0.92, 0.2), r: 90 * smooth(t, 0.5, 0.8) }), [sx, sy]), 0.95);
  const lift = t => bounce(t, 0.04, 0.28, 0.78, -16);
  const y = motion(t => ({ y: lift(t) }), [gx + gw / 2, gy + gh / 2]);
  I.face(pa(roundPoly([[gx, gy], [gx + gw, gy], [gx + gw, gy + gh], [gx + 104, gy + gh], [gx + 44, gy + gh + 46], [gx + 58, gy + gh], [gx, gy + gh]], [66, 66, 66, 12, 8, 10, 66])), [gx, gy, gw, gh + 46], { kind: 'glass', tf: y, behind: back });
  const cy = gy + gh / 2, step = gw / 4;
  [1, 2, 3].forEach((k, i) => { const x = gx + step * k; I.detail(ci(x, cy, 18), C.b600, motion(t => ({ y: lift(t) + bounce(t, 0.1 + i * 0.1, 0.22 + i * 0.1, 0.46 + i * 0.1, -14) }), [x, cy])); });
  return I.svg();
} });
Object.assign(module.exports, {
  'agent-gap': agentVariant('AI · 간격 띄움', [212, 40, 256, 136], [44, 250, 316, 196]),
  'agent-overlap': agentVariant('AI · 겹침', [176, 56, 288, 156], [48, 168, 312, 224]),
});
