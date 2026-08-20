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
}

export interface FlowStep {
  label: string;
  detail: string;
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
    lede: string;
    // 배경 사진(선택). 지정하면 예지보전(.uc-hero-bg)과 같은 어두운 히어로가 된다.
    // 사진 위에 #111316 스크림이 깔리고 글자가 흰색으로 바뀐다.
    image?: { src: string; alt: string; width: number; height: number };
    // 사진마다 담긴 장면이 달라 세로 초점은 페이지별로 조정한다.
    // 0% = 위쪽 끝, 50% = 가운데, 100% = 아래쪽 끝. 기본 45%.
    imagePosition?: string;
  };
  challenges: {
    title: string;
    subtitle?: string;
    items: Challenge[];
  };
  useCases: {
    title: string;
    subtitle?: string;
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
  };
}
