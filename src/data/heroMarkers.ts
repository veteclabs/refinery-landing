/** 히어로 그래픽 위 마커 카드의 문구.
 *
 *  좌표(x · y · stem · side)는 그래픽이 쥔다 — public/hero/vetec-hero.js 의 MARKERS.
 *  여기 id 는 그 배열의 id 와 같아야 카드가 제 핀에 붙는다.
 *  카드 마크업은 홈 페이지의 <template data-hero-card> 이고, 모양은 global.css 다.
 */
export type HeroCard = {
  /** vetec-hero.js 의 MARKERS[].id */
  id: string;
  /** 카드 위 작은 분류 라벨 */
  tag: string;
  title: string;
  /** 제목 아래 보조 한 줄 */
  note: string;
};

export const heroCards: Record<'ko' | 'en', HeroCard[]> = {
  ko: [
    { id: 'comp',  tag: 'EXPERIENCE', title: '30년의 노하우로 두 방식을 지원합니다', note: '*템플릿 예시 : 에너지경영시스템' },
    { id: 'pump',  tag: 'TECHNOLOGY', title: '시계열을 넘어 AI 판단까지 잇습니다',   note: '센서 · 설비 · 문서 · 이력을 온톨로지로 연결' },
    { id: 'motor', tag: 'PEOPLE',     title: '현장을 겪은 사람들이 제품을 설계합니다', note: '발전 · 제조 · 에너지 현장 엔지니어와 개발자가 한 팀' },
  ],
  en: [
    { id: 'comp',  tag: 'EXPERIENCE', title: 'Thirty years of know-how, either way you start', note: '*Template example: energy management system' },
    { id: 'pump',  tag: 'TECHNOLOGY', title: 'From time series through to AI judgement',       note: 'Sensors, equipment, documents and history on one ontology' },
    { id: 'motor', tag: 'PEOPLE',     title: 'Built by people who have worked the floor',      note: 'Power, manufacturing and energy engineers alongside developers' },
  ],
};
