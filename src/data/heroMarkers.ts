/** 히어로 그래픽 위 마커 카드의 문구.
 *
 *  좌표(x · y · stem · side)는 그래픽이 쥔다 — public/hero/vetec-hero.js 의 MARKERS.
 *  여기 id 는 그 배열의 id 와 같아야 카드가 제 핀에 붙는다.
 *  카드 마크업은 홈 페이지의 <template data-hero-card> 이고, 모양은 global.css 다.
 *
 *  제목은 명사구로 짧게 둔다 — 카드가 좁아 서술형으로 두면 두 줄을 넘긴다.
 *  영문은 그래픽 원본에 없어 옮긴 것이다.
 *  세 카드는 /company 의 '제품의 세 가지 뿌리'(경험 · 기술 · 사람)를 따른다.
 */
export type HeroCard = {
  /** vetec-hero.js 의 MARKERS[].id */
  id: string;
  /** 카드 맨 위 분류 라벨 — 플랫폼 섹션의 series-tagline 자리 */
  tag: string;
  title: string;
  /** 본문 — 플랫폼 섹션의 series-desc 자리 */
  desc: string;
};

export const heroCards: Record<'ko' | 'en', HeroCard[]> = {
  ko: [
    {
      id: 'comp', tag: 'EXPERIENCE',
      title: '30년 경험, 두 가지 시작',
      desc: '기존 시스템 위에 얹고, 없는 현장은 새로 세웁니다. 신규 구축도 30년 템플릿에서 시작합니다.',
    },
    {
      id: 'pump', tag: 'TECHNOLOGY',
      title: '시계열 너머의 AI 판단',
      desc: '센서 시계열에 설비 · 문서 · 이력을 엮고, AI 에이전트가 근거를 들어 판단합니다.',
    },
    {
      id: 'motor', tag: 'PEOPLE',
      title: '현장을 겪은 사람들의 설계',
      desc: '설비가 어떻게 멈추는지 겪어 본 사람들이 만듭니다.',
    },
  ],
  en: [
    {
      id: 'comp', tag: 'EXPERIENCE',
      title: 'Thirty years, two ways to start',
      desc: 'Sits on the systems you already run, or stands up a site that has none — from templates shaped by thirty years.',
    },
    {
      id: 'pump', tag: 'TECHNOLOGY',
      title: 'From time series to AI judgement',
      desc: 'Sensor series woven with equipment, documents and history — an AI agent decides with the evidence in hand.',
    },
    {
      id: 'motor', tag: 'PEOPLE',
      title: 'Design from the floor',
      desc: 'Made by people who have seen equipment fail on the floor.',
    },
  ],
};
