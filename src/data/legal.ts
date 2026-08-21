/**
 * 법적 고지 4종(개인정보처리방침·이용약관·EULA·쿠키 정책)이 공유하는 사업자 정보.
 *
 * ── 사용법 ────────────────────────────────────────────────────────────────
 * 빈 문자열('')로 둔 값은 각 페이지에서 노란 플레이스홀더(<Ph />)로 렌더된다.
 * 게시 전 **이 파일 한 곳만** 채우면 4개 문서에 동시 반영된다.
 * 값을 채운 뒤에는 각 페이지 상단의 `<div class="legal-draft">` 초안 경고 블록을 지울 것.
 *
 * ── 근거 ──────────────────────────────────────────────────────────────────
 * - 사업자 정보 표시: 전자상거래법 제10조 제1항 (통신판매 시 필수)
 * - 개인정보 보호책임자: 개인정보 보호법 제30조 제1항 제6호
 *   → 「개인정보 처리방침 작성지침(2025.4.)」은 CPO와 별개로 실제 고충처리
 *     담당부서(고객센터 등) 연락처를 함께 적을 것을 권고한다.
 */

export const company = {
  /** 사업자등록증상의 정식 상호 */
  legalName: '주식회사 베텍',
  /** 본문에서 부르는 약칭 */
  shortName: 'VETEC',
  /** 제품·서비스 이름 */
  serviceName: 'Refinery',
  /** 서비스 도메인 (프로토콜 없이) */
  domain: 'refinery.kr',
  /** 정식 사이트 URL */
  siteUrl: 'https://refinery.kr',

  /** 대표자 성명 */
  ceo: '최영준',
  /** 사업자등록번호 (000-00-00000) */
  bizNo: '130-81-49638',
  /**
   * 통신판매업 신고번호.
   * 홈페이지에서 온라인 자가결제로 구독을 개시하는 구조가 **없다면** 신고 대상이
   * 아니므로 공란으로 두면 된다(공란이면 해당 줄이 렌더되지 않는다).
   */
  mailOrderNo: '',
  /** 본점 소재지 (사업자등록증 기준) */
  address: '대전광역시 유성구 관평동 1311',
  /** 대표 전화 */
  tel: '042-935-3721',
  /** 팩스 (없으면 공란) */
  fax: '',
  /** 대표 이메일 */
  email: 'info@vetec.co.kr',

  /** 개인정보 보호책임자 — 법 제30조①6호 */
  cpoName: '윤현석',
  cpoTitle: '그룹장',
  cpoDept: '',

  /** 개인정보 고충처리·열람청구 담당부서 (작성지침 2025.4. 권고) */
  privacyDept: '',
  privacyTel: '042-935-3721',
  privacyEmail: 'info@vetec.co.kr',

  /** 호스팅 서비스 제공자 — 전자상거래법 제10조① 표시 항목(2022년 의무화) */
  hosting: 'Vercel Inc.',
};

/**
 * 법무 검토 완료 + 게시 준비가 되면 true로 바꾼다.
 * false인 동안에는 값이 모두 채워져 있어도 4개 문서 상단에 초안 경고 배너가 유지된다.
 * (retention 등 아직 빈 값이 남아도 배너가 성급히 사라지지 않게 하는 최종 스위치)
 */
export const legalReviewed = false;

/** 4개 문서 공통 시행일 (예: '2026-09-01') */
export const effectiveDate = '2026-09-01';

/** 최종 개정일. 최초 제정이면 시행일과 같게 둔다. */
export const revisedDate = '2026-09-01';

/**
 * 분석 도구의 데이터 보관 기간.
 * ⚠️ 각 콘솔의 실제 설정값을 확인해서 채울 것.
 *  - GA4: 관리 > 데이터 설정 > 데이터 보존 (기본 2개월, 최대 14개월)
 *  - Mixpanel: 프로젝트 설정의 데이터/세션 리플레이 보존 정책
 */
export const retention = {
  /** 예: '14개월' */
  ga: '',
  /** 예: '12개월' */
  mixpanel: '',
  /** 세션 리플레이 보관 기간. 예: '30일' */
  mixpanelReplay: '',
};

/** 개인정보 처리 위탁 현황 (개인정보 보호법 제26조 / 제30조①4호) */
export const processors = [
  {
    name: 'Vercel Inc.',
    task: '웹사이트 호스팅·CDN 운영, 트래픽·성능 측정(쿠키 미사용)',
    country: '미국 및 Vercel 엣지 네트워크 소재국',
    policy: 'https://vercel.com/legal/privacy-policy',
    consent: false,
  },
  {
    name: 'Web3Forms (Rifat Erdem Sahin)',
    task: '문의·데모 신청 폼 데이터의 전송 및 이메일 발송 처리',
    country: '미국',
    policy: 'https://web3forms.com/privacy',
    consent: false,
  },
  {
    name: 'Google LLC',
    task: 'Google Analytics 4를 통한 웹사이트 이용 통계 분석',
    country: '미국 등 Google 데이터센터 소재국',
    policy: 'https://policies.google.com/privacy',
    consent: true,
  },
  {
    name: 'Mixpanel, Inc.',
    task: '제품·콘텐츠 이용 행태 분석, 세션 리플레이 및 히트맵 기록',
    country: '미국',
    policy: 'https://mixpanel.com/legal/privacy-policy/',
    consent: true,
  },
] as const;

/** 정보주체 권익침해 구제 전문기관 — 작성지침 2025.4.에서 대검찰청은 목록에서 삭제됨 */
export const remedyAgencies = [
  { name: '개인정보분쟁조정위원회', tel: '(국번없이) 1833-6972', url: 'https://www.kopico.go.kr' },
  { name: '개인정보침해신고센터', tel: '(국번없이) 118', url: 'https://privacy.kisa.or.kr' },
  { name: '경찰청 사이버범죄 신고시스템(ECRM)', tel: '(국번없이) 182', url: 'https://ecrm.police.go.kr' },
] as const;
