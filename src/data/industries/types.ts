// 산업 페이지 데이터 스키마 (ThingsBoard의 데이터 주도 유즈케이스 패턴 참고)
// 새 산업 = 이 타입에 맞는 데이터 파일 1개 추가 + index.ts 등록.

export interface Challenge {
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  problem: string;   // 산업 현장의 문제
  approach: string;  // Refinery의 접근
  outcome: string;   // 기대 성과
}

export interface Benefit {
  title: string;
  description: string;
  // Phosphor 아이콘 이름(선택). 예: 'ph-pulse'
  icon?: string;
}

export interface FlowStep {
  label: string;
  detail: string;
  /** Phosphor 아이콘 이름(ph-*). 없으면 번호만 든다. */
  icon?: string;
  /** 우리 자리를 밝힌다. 흐름에서 한 칸만 켜는 값이다. */
  highlight?: boolean;
  /** 카드 안에 놓는 일러스트(public 기준 경로). 어두운 카드 면에 맞춰 그린 것이다. */
  image?: string;
}

export interface IndustryData {
  slug: string;            // URL: /industries/<slug>
  name: string;            // 예: 에너지 · 유틸리티
  pageTitle: string;       // <title> (SEO)
  description: string;     // meta description (SEO)
  // 페이지별 SEO 미세조정(선택). 미지정 시 사이트 기본값 사용.
  seo?: {
    ogImage?: string;      // 산업 전용 OG 이미지 경로(예: /og/industry-energy.png)
    ogTitle?: string;      // OG/Twitter 전용 제목
  };
  hero: {
    eyebrow: string;
    title: string;
    // 소제목(선택). 예지보전 히어로처럼 제목만 두려면 생략한다.
    lede?: string;
    // 어두운 히어로(선택). 예지보전(.uc-hero-bg)과 같은 구성이 된다 —
    // #111316 바탕에 흰 글자, accent 면 주 버튼.
    dark?: boolean;
    // 배경 사진(선택). dark와 함께 쓰면 사진 위에 스크림이 깔린다.
    image?: { src: string; alt: string; width: number; height: number };
    // 사진마다 담긴 장면이 달라 세로 초점은 페이지별로 조정한다.
    // 0% = 위쪽 끝, 50% = 가운데, 100% = 아래쪽 끝. 기본 45%.
    imagePosition?: string;
    // 히어로 우측 오버레이 이미지(선택). 배경 사진 위에 얹혀 오른쪽을 채운다.
    overlay?: { src: string; width: number; height: number };
    // 태그라인 옆 아이콘(선택). 랜딩 산업 카드의 워터마크와 같은 SVG를 쓴다
    // (예: '/industry-08.svg' = 에너지 · 유틸리티).
    icon?: string;
    // 보조 버튼(제품 살펴보기). 기본 노출. 주 버튼 하나만 두려면 false.
    showSecondary?: boolean;
    // 위치 표시(Industries › 산업명). 기본 노출. 태그라인과 같은 말이 두 번
    // 나오는 페이지에서는 false로 끈다(JSON-LD BreadcrumbList는 그대로 남는다).
    showBreadcrumb?: boolean;
  };
  challenges: {
    title: string;
    subtitle?: string;
    // 섹션 배경 사진(선택).
    backgroundImage?: string;
    // 어두운 면(선택). 예지보전 '푸는 방식' 섹션과 같은 #111316이 된다 —
    // 카드도 같은 면색에 1px 테두리로만 구분한다.
    dark?: boolean;
    items: Challenge[];
  };
  useCases: {
    title: string;
    subtitle?: string;
    /** 'steps'면 좌측 번호 레일 + 우측 내용으로 그린다(번호를 누르면 그 내용에 상자).
     *  지정하지 않으면 기존 카드 목록 그대로다 — 다른 산업 페이지는 건드리지 않는다. */
    layout?: 'cards' | 'steps';
    items: UseCase[];
  };
  architecture: {
    title: string;
    subtitle?: string;
    steps: FlowStep[];   // 현장 → 연동 → Refinery → 활용 흐름
    note?: string;
  };
  benefits: {
    title: string;
    subtitle?: string;
    items: Benefit[];
  };
  integrations: {
    title: string;
    subtitle?: string;
    systems: string[];   // 해당 산업의 연동 시스템/프로토콜
    note?: string;
  };
  cta: {
    title: string;
    buttonLabel: string;
    // 배경 사진(선택). 지정하면 예지보전 CTA(.uc-cta-bg)와 같은 구성이 된다 —
    // 어두운 밑판 위 사진, 제목 좌측 · 버튼 우측 한 줄 배치.
    backgroundImage?: string;
  };
}
