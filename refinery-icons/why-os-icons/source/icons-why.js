// why-refinery > "왜 운영체제인가" 카드 4종 v4 — 게이트웨이 · DB+관계 · 계기판 · AI 반짝임+말풍선
const { kOf, C, Icon, rr, ci, pa, roundPoly, bounce, smooth, motion } = require('./lib');
const BAR = 28, BR = 14;
const band = (P, Q, T) => { const L = Math.hypot(Q[0] - P[0], Q[1] - P[1]), a = Math.atan2(Q[1] - P[1], Q[0] - P[0]) * 180 / Math.PI, h = T / 2; return `<rect x="${P[0] - h}" y="${P[1] - h}" width="${(L + T).toFixed(2)}" height="${T}" rx="${h}" transform="rotate(${a.toFixed(3)} ${P[0]} ${P[1]})"/>`; };
const star = (cx, cy, R, r, rad = 12) => { const pts = []; for (let i = 0; i < 8; i++) { const a = -Math.PI / 2 + i * Math.PI / 4, d = i % 2 ? r : R; pts.push([cx + d * Math.cos(a), cy + d * Math.sin(a)]); } return pa(roundPoly(pts, pts.map((_, i) => i % 2 ? 6 : rad))); };
const lit = (t, a) => (t > a && t < a + 0.14) ? 0.3 : 1;

module.exports = {
  'os-connect': { group: '왜 운영체제인가', label: '연결', motion: '게이트웨이 안테나가 차례로 통 튀고, 상태 점이 차례로 깜빡', draw() {
    const I = new Icon();
    const a1 = motion(t => ({ y: bounce(t, 0.06, 0.2, 0.56, -14) }), [150, 120]), a2 = motion(t => ({ y: bounce(t, 0.16, 0.3, 0.66, -14) }), [362, 120]);
    I.face(band([150, 240], [150, 140], 28), [136, 126, 28, 128], { kind: 'deep', drop: false, holder: false });
    I.face(band([362, 240], [362, 140], 28), [348, 126, 28, 128], { kind: 'deep', drop: false, holder: false });
    I.face(ci(150, 116, 30), [120, 86, 60, 60], { kind: 'primary', tf: a1, holder: false });
    I.face(ci(362, 116, 30), [332, 86, 60, 60], { kind: 'primary', tf: a2, holder: false });
    const body = I.face(rr(52, 222, 408, 196, 56), [52, 222, 408, 196], { kind: 'primary' });
    I.face(rr(96, 284, 320, 76, 38), [96, 284, 320, 76], { kind: 'glass', behind: body });
    [[160, 0.1], [214, 0.22], [268, 0.34]].forEach(([x, a]) => I.detail(ci(x, 322, 18), C.b600, motion(t => ({ o: lit(t, a) }), [x, 322])));
    I.detail(rr(318, 308, 64, BAR, BR), C.b600, '', 0.8);
    return I.svg();
  } },
  'os-ontology': { group: '왜 운영체제인가', label: '온톨로지', motion: '관계 배지가 톡 튀고, 노드 연결이 차례로 반응', draw() {
    const I = new Icon();
    const rx = 140, ry = 46, cx = 220, top = 108, bot = 360;
    const cyl = `<path d="M${cx - rx} ${top}A${rx} ${ry} 0 0 1 ${cx + rx} ${top}V${bot}A${rx} ${ry} 0 0 1 ${cx - rx} ${bot}Z"/>`;
    const db = I.face(cyl, [cx - rx, top - ry, 2 * rx, bot - top + 2 * ry], { kind: 'primary' });
    I.face(`<ellipse cx="${cx}" cy="${top}" rx="${rx - 14}" ry="${ry - 10}"/>`, [cx - rx, top - ry, 2 * rx, 2 * ry], { kind: 'light', drop: false });
    I.detail(`<path d="M${cx - rx} 200A${rx} ${ry} 0 0 0 ${cx + rx} 200" fill="none"/>`, C.b50, '', 0);
    I.detail(rr(cx - rx + 30, 214, 90, 20, 10) + rr(cx - rx + 30, 290, 60, 20, 10), C.b50, '', 0.85);
    const s = motion(t => ({ s: 1 + bounce(t, 0.06, 0.22, 0.62, 0.08) }), [356, 340]);
    I.face(ci(356, 340, 104), [252, 236, 208, 208], { kind: 'glass', tf: s, behind: db });
    const LT = 20 / kOf(); I.rawNext = true; // 관계선: 기호 축소 없이 굵기 20 그대로
    I.detail(band([318, 372], [356, 304], LT) + band([356, 304], [396, 372], LT) + band([318, 372], [396, 372], LT), C.b600, s, 0.55);
    I.detail(ci(356, 304, 18) + ci(318, 372, 18) + ci(396, 372, 18), C.b600, s);
    return I.svg();
  } },
  'os-app': { group: '왜 운영체제인가', label: '앱', motion: '계기판 바늘이 한쪽으로 올라갔다 탄성으로 돌아옴', draw() {
    const I = new Icon();
    const card = I.face(rr(56, 210, 400, 216, 56), [56, 210, 400, 216], { kind: 'primary' });
    I.detail(rr(96, 370, 90, 22, 11) + rr(326, 370, 90, 22, 11), C.b50, '', 0.85);
    const g = `<path d="M96 300A160 160 0 0 1 416 300Q416 330 386 330H126Q96 330 96 300Z"/>`;
    I.face(g, [96, 140, 320, 190], { kind: 'glass', behind: card });
    I.detail(ci(152, 270, 13) + ci(196, 212, 13) + ci(256, 188, 13) + ci(316, 212, 13) + ci(360, 270, 13), C.b, '', 0.7);
    const n = motion(t => ({ r: bounce(t, 0.06, 0.32, 0.82, 70) }), [256, 300]);
    I.detail(band([256, 300], [190, 236], 24), C.b600, n);
    I.detail(ci(256, 300, 26), C.b600);
    return I.svg();
  } },
  'os-agent': { group: '왜 운영체제인가', label: 'AI 에이전트', motion: '큰 별이 반짝이며 90° 돌고, 말풍선 점 세 개가 차례로 통통', draw() {
    const I = new Icon();
    const tw = motion(t => ({ s: 1 + bounce(t, 0.06, 0.22, 0.62, 0.1), r: 90 * smooth(t, 0.06, 0.5) }), [326, 176]);
    const big = I.face(star(326, 176, 132, 40, 26), [194, 44, 264, 264], { kind: 'primary', tf: tw });
    I.face(star(132, 108, 50, 16, 12), [82, 58, 100, 100], { kind: 'deep', tf: motion(t => ({ s: 1 + bounce(t, 0.2, 0.34, 0.7, 0.14) }), [132, 108]) });
    I.face(pa(roundPoly([[56, 250], [300, 250], [300, 420], [150, 420], [100, 462], [110, 420], [56, 420]], [56, 56, 56, 12, 8, 10, 56])), [56, 250, 244, 212], { kind: 'glass', behind: big });
    [[122, 0.3], [178, 0.4], [234, 0.5]].forEach(([x, a]) => I.detail(ci(x, 335, 20), C.b600, motion(t => ({ y: bounce(t, a, a + 0.12, a + 0.36, -14) }), [x, 335])));
    return I.svg();
  } },
};

// 확정: 연결 = 허브와 설비(connect-a), 앱 = 겹친 앱 아이콘(app-d)
const ALT = require('./icons-why-alt');
module.exports['os-connect'] = { ...ALT['connect-a'], group: '왜 운영체제인가', label: '연결' };
module.exports['os-app'] = { ...ALT['app-d'], group: '왜 운영체제인가', label: '앱' };

// AI 에이전트: 대화를 주인공으로 — 질문(알약 말풍선) + 큰 유리 답 말풍선(점 셋), 별은 작은 강조로만
{
  const pill = (x, y, w, h) => { const r = h / 2; return `<path d="M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z"/>`; };
  const star = (cx, cy, R, r, rad = 8) => { const pts = []; for (let i = 0; i < 8; i++) { const a = -Math.PI / 2 + i * Math.PI / 4, d = i % 2 ? r : R; pts.push([cx + d * Math.cos(a), cy + d * Math.sin(a)]); } return pa(roundPoly(pts, pts.map((_, i) => i % 2 ? 5 : rad))); };
  module.exports['os-agent'] = { group: '왜 운영체제인가', label: 'AI 에이전트', motion: '답 말풍선이 떠오르며 점 세 개가 차례로 통통, 작은 별이 반짝', draw() {
    const I = new Icon();
    const back = I.face(pill(196, 60, 264, 140) + pa('M396 182L440 238L350 192Z'), [196, 60, 264, 178], { kind: 'primary' });
    I.detail(rr(244, 116, 120, 28, 14), C.b50, '', 0.85);
    const tw = motion(t => ({ s: 1 + bounce(t, 0.5, 0.62, 0.92, 0.2), r: 90 * smooth(t, 0.5, 0.8) }), [412, 128]);
    I.detail(star(412, 128, 26, 9), C.b50, tw, 0.95);
    const y = motion(t => ({ y: bounce(t, 0.04, 0.28, 0.78, -16) }), [210, 320]);
    I.face(pa(roundPoly([[52, 200], [372, 200], [372, 424], [156, 424], [96, 470], [110, 424], [52, 424]], [66, 66, 66, 12, 8, 10, 66])), [52, 200, 320, 270], { kind: 'glass', tf: y, behind: back });
    [[136, 0.1], [212, 0.2], [288, 0.3]].forEach(([x, a]) => I.detail(ci(x, 312, 24), C.b600, motion(t => ({ y: bounce(t, 0.04, 0.28, 0.78, -16) + bounce(t, a, a + 0.12, a + 0.36, -14) }), [x, 312])));
    return I.svg();
  } };
}

// 확정: AI 에이전트 = 겹침 배치
module.exports['os-agent'] = { ...require('./icons-why-alt')['agent-overlap'], group: '왜 운영체제인가', label: 'AI 에이전트' };
