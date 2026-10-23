/** 히어로 그래픽 위 마커 카드의 문구.
 *
 *  좌표(x · y · stem · side)는 그래픽이 쥔다 — public/hero/vetec-hero.js 의 MARKERS.
 *  여기 id 는 그 배열의 id 와 같아야 카드가 제 핀에 붙는다.
 *  카드 마크업은 홈 페이지의 <template data-hero-card> 이고, 모양은 global.css 다.
 *
 *  국문은 그래픽 원본에 있던 문구 그대로다. 영문은 원본에 없어 옮긴 것이다.
 *  세 카드는 /company 의 '제품의 세 가지 뿌리'(경험 · 기술 · 사람)를 따른다.
 */
export type HeroCard = {
  /** vetec-hero.js 의 MARKERS[].id */
  id: string;
  /** 카드 맨 위 분류 라벨 — 플랫폼 섹션의 series-tagline 자리 */
  tag: string;
  title: string;
  /** 제목 아래 보조 한 줄 */
  note: string;
  /** 본문 — 플랫폼 섹션의 series-desc 자리 */
  desc: string;
};

export const heroCards: Record<'ko' | 'en', HeroCard[]> = {
  ko: [
    {
      id: 'comp', tag: 'EXPERIENCE',
      title: '30년의 노하우로 두 방식을 지원합니다',
      note: '*템플릿 예시 : 에너지경영시스템',
      desc: '기존 시스템 위에 얹는 것도, 없는 현장을 새로 세우는 것도 가능합니다. 신규 구축도 30년 경험으로 만든 템플릿에서 시작합니다.',
    },
    {
      id: 'pump', tag: 'TECHNOLOGY',
      title: '시계열을 넘어 AI 판단까지 잇습니다',
      note: '센서 · 설비 · 문서 · 이력을 온톨로지로 연결',
      desc: '센서 시계열뿐 아니라 설비 · 문서 · 이력까지 엮고, 그 위에서 AI 에이전트가 근거를 들어 의사결정을 돕습니다.',
    },
    {
      id: 'motor', tag: 'PEOPLE',
      title: '현장을 겪은 사람들이 제품을 설계합니다',
      note: '발전 · 제조 · 에너지 현장 엔지니어와 개발자가 한 팀',
      desc: '설비가 어떻게 멈추고 운전자가 무엇을 보고 판단하는지, 겪어 본 사람들이 제품을 설계합니다.',
    },
  ],
  en: [
    {
      id: 'comp', tag: 'EXPERIENCE',
      title: 'Thirty years of know-how, either way you start',
      note: '*Template example: energy management system',
      desc: 'Refinery can sit on the systems you already run, or stand up a site that has none. A new build starts from templates shaped by thirty years on the floor.',
    },
    {
      id: 'pump', tag: 'TECHNOLOGY',
      title: 'From time series through to AI judgement',
      note: 'Sensors, equipment, documents and history on one ontology',
      desc: 'Not only sensor time series — equipment, documents and history are woven together, and on top of that an AI agent helps you decide with the evidence in hand.',
    },
    {
      id: 'motor', tag: 'PEOPLE',
      title: 'Built by people who have worked the floor',
      note: 'Power, manufacturing and energy engineers alongside developers',
      desc: 'How equipment fails, and what an operator looks at before deciding — the product is designed by people who have lived it.',
    },
  ],
};
