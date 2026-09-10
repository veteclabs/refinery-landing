/** 표지 밑색 위에 올릴 글자색을 고른다.
 *
 *  표지 색을 글마다 정하므로 글자색을 손으로 맞추면 언젠가 어긋난다.
 *  대비를 재서 잉크색과 흰색 중 더 잘 읽히는 쪽을 빌드 때 고른다.
 *
 *  기준값(WCAG 상대휘도·대비비)은 사이트 다른 곳에서 쓰던 계산과 같다.
 */
const INK = '#16202C';

const luminance = (hex: string) => {
  const h = hex.replace('#', '');
  const rgb = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = rgb.map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
};

const ratio = (a: string, b: string) => {
  const [l1, l2] = [luminance(a), luminance(b)];
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

/** 밑색 위에서 잉크색이 더 잘 읽히면 'ink', 흰색이 나으면 'white'. */
export const coverTone = (bg?: string): 'ink' | 'white' | undefined =>
  bg ? (ratio(bg, INK) >= ratio(bg, '#FFFFFF') ? 'ink' : 'white') : undefined;
