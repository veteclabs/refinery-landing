/**
 * 법적 고지 4종(개인정보처리방침·이용약관·EULA·쿠키 정책)이 공유하는 사업자 정보.
 *
 * ── 사용법 ────────────────────────────────────────────────────────────────
 * 빈 문자열('')로 둔 값은 각 페이지에서 노란 플레이스홀더(<Ph />)로 렌더된다.
 * 게시 전 **이 파일 한 곳만** 채우면 4개 문서에 동시 반영된다.
 * 값을 채운 뒤에는 각 페이지 상단의 `<div class="legal-draft">` 초안 경고 블록을 지울 것.
 *
 * ── 한국어 · 영어 ─────────────────────────────────────────────────────────
 * 언어에 따라 달라지는 값은 `{ ko, en }` 한 쌍으로 적는다. 페이지는 `legal('ko')` ·
 * `legal('en')`으로 한쪽만 꺼내 쓴다 — 꺼낸 모양은 쌍이 아니라 평범한 문자열이다.
 *  - 쌍의 한쪽 **키가 없으면 빌드가 멈춘다**(아래 `resolve`). 한국어만 고치고 영어를 잊는 사고를 막는다.
 *  - `en: ''`은 **아직 번역하지 않은 값**이다. 영어 페이지에서 <Ph />로 감싸 노란 칩으로 드러낸다.
 *  - 도메인 · 이메일 · 전화 · URL · 업체 법인명처럼 언어와 무관한 값은 쌍으로 만들지 않는다.
 *  - 영문 표기 기준은 docs/legal-en-glossary.md. 거기 없는 용어는 임의로 옮기지 않는다.
 *
 * ── 근거 ──────────────────────────────────────────────────────────────────
 * - 사업자 정보 표시: 전자상거래법 제10조 제1항 (통신판매 시 필수)
 * - 개인정보 보호책임자: 개인정보 보호법 제30조 제1항 제6호
 *   → 「개인정보 처리방침 작성지침(2025.4.)」은 CPO와 별개로 실제 고충처리
 *     담당부서(고객센터 등) 연락처를 함께 적을 것을 권고한다.
 */

/** 한국어 · 영어 한 쌍. */
export type Text = { ko: string; en: string };
export type Lang = keyof Text;

const company = {
  /** 사업자등록증상의 정식 상호 */
  legalName: { ko: '주식회사 베텍', en: 'VETEC Co., Ltd.' },
  /** 본문에서 부르는 약칭 */
  shortName: 'VETEC',
  /** 제품·서비스 이름 */
  serviceName: 'Refinery',
  /** 서비스 도메인 (프로토콜 없이) */
  domain: 'refinery.kr',
  /** 정식 사이트 URL */
  siteUrl: 'https://refinery.kr',

  /** 대표자 성명 — 영문은 사용자 확인값(이니셜 + 성) */
  ceo: { ko: '최영준', en: 'YJ Choi' },
  /** 사업자등록번호 (000-00-00000) */
  bizNo: '130-81-49638',
  /**
   * 통신판매업 신고번호.
   * 홈페이지에서 온라인 자가결제로 구독을 개시하는 구조가 **없다면** 신고 대상이
   * 아니므로 공란으로 두면 된다(공란이면 해당 줄이 렌더되지 않는다).
   */
  mailOrderNo: '',
  /**
   * 본점 소재지 (사업자등록증 기준)
   * ⚠️ 영문은 도로명, 국문은 아직 지번이다. 영어판을 마친 뒤 국문을 도로명(테크노3로 24)으로 바꿀 예정.
   */
  address: { ko: '대전광역시 유성구 관평동 1311', en: '24, Techno 3-ro, Yuseong-gu, Daejeon, Korea' },
  /** 대표 전화 */
  tel: '042-935-3721',
  /** 팩스 (없으면 공란) */
  fax: '',
  /** 대표 이메일 */
  email: 'info@vetec.co.kr',

  /** 개인정보 보호책임자 — 법 제30조①6호 */
  cpoName: { ko: '윤현석', en: 'HS Yoon' },
  cpoTitle: { ko: '그룹장', en: 'Head of Group' },
  cpoDept: { ko: '', en: '' },

  /** 개인정보 고충처리·열람청구 담당부서 (작성지침 2025.4. 권고) */
  privacyDept: { ko: '', en: '' },
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
export const legalReviewed = true;

/**
 * 4개 문서 공통 시행일 (예: '2026-09-01')
 * 날짜는 언어와 무관하게 ISO로 적는다. 영어 페이지는 formatDate()로 `September 1, 2026`을 만든다.
 */
export const effectiveDate = '2026-09-01';

/** 최종 개정일. 최초 제정이면 시행일과 같게 둔다. */
export const revisedDate = '2026-09-01';

/**
 * 개정 이력. 문서를 개정할 때마다 해당 배열 **맨 위에** 새 항목을 추가한다.
 *  - date: 시행일(YYYY-MM-DD)
 *  - summary: 주요 변경 요약
 *  - href(선택): 과거 전문을 열람하게 하려면, 개정 직전 페이지를 스냅샷으로
 *    아카이브(예: src/pages/legal/privacy-2026-09-01.astro)한 뒤 그 경로를 넣는다.
 *    href가 없으면 '현행'으로 표시된다.
 * 개정 시 effectiveDate·revisedDate도 함께 갱신한다.
 */
type RevisionSrc = { date: string; summary: Text; href?: string };
const initial: RevisionSrc = { date: '2026-09-01', summary: { ko: '최초 제정', en: 'Initial version' } };
const revisions: Record<'privacy' | 'terms' | 'eula' | 'cookie', RevisionSrc[]> = {
  privacy: [initial],
  terms: [initial],
  eula: [initial],
  cookie: [initial],
};

/**
 * 분석 도구의 데이터 보관 기간.
 * ⚠️ 각 콘솔의 실제 설정값을 확인해서 채울 것.
 *  - GA4: 관리 > 데이터 설정 > 데이터 보존 (기본 2개월, 최대 14개월)
 *  - Mixpanel: 프로젝트 설정의 데이터/세션 리플레이 보존 정책
 */
const retention = {
  ga: { ko: '14개월', en: '14 months' },
  mixpanel: { ko: '12개월', en: '12 months' },
  /** 세션 리플레이 보관 기간 */
  mixpanelReplay: { ko: '30일', en: '30 days' },
};

/**
 * 국외 이전 한 줄 — 처리방침 9항 표.
 *  - contact · method는 HTML로 렌더된다(set:html). 굵게 · <wbr> 줄바꿈 자리를 담는다.
 *  - 보유 기간은 period(문장) 또는 retentionKey(위 retention 값을 가리킴) 중 하나만 둔다.
 */
type Transfer = {
  recipient: string;
  contact: string;
  country: Text;
  method: Text;
  items: Text;
  purpose: Text;
} & ({ period: Text; retentionKey?: never } | { retentionKey: keyof typeof retention; period?: never });

type Processor = {
  name: string;
  task: Text;
  policy: string;
  consent: boolean;
  transfer: Transfer;
};

/**
 * 개인정보 처리 위탁 현황 (개인정보 보호법 제26조 / 제30조①4호) — 처리방침 8항 표
 * + 국외 이전 (같은 법 제28조의8) — 처리방침 9항 표(transfer)
 * 수탁자가 바뀌면 이 배열 한 곳만 고친다. 8항 · 9항이 함께 바뀐다.
 */
const processors: Processor[] = [
  {
    name: 'Vercel Inc.',
    task: {
      ko: '웹사이트 호스팅 ⁠· CDN 운영, 트래픽 ⁠· 성능 측정(쿠키 미사용)',
      en: 'Website hosting and CDN operation; traffic and performance measurement (no cookies)',
    },
    policy: 'https://vercel.com/legal/privacy-policy',
    consent: false,
    transfer: {
      recipient: 'Vercel Inc.',
      contact: 'privacy@vercel.com',
      country: { ko: '미국', en: 'United States' },
      method: {
        ko: '이용자가 웹사이트에 접속하는 시점에 네트워크를 통한 전송(TLS 암호화)',
        en: 'When you access the website, via network transmission (TLS-encrypted)',
      },
      items: {
        ko: '접속 IP 주소, 접속 일시, 요청 URL, 브라우저 ⁠· 기기 정보',
        en: 'Access IP address, access date and time, requested URL, and browser and device information',
      },
      purpose: {
        ko: '웹사이트 호스팅 ⁠· CDN 운영 및 트래픽 ⁠· 성능 측정',
        en: 'Website hosting, CDN operation, and traffic and performance measurement',
      },
      period: {
        ko: '위탁계약 종료 시 또는 Vercel의 로그 보존기간 경과 시까지',
        en: 'Until the entrustment contract ends or Vercel’s log retention period expires',
      },
    },
  },
  {
    name: 'Web3Forms (Rifat Erdem Sahin)',
    task: {
      ko: '문의 ⁠· 데모 신청 폼 데이터의 전송 및 이메일 발송 처리',
      en: 'Transmission of inquiry and demo request form data, and email delivery',
    },
    policy: 'https://web3forms.com/privacy',
    consent: false,
    transfer: {
      recipient: 'Web3Forms',
      contact: 'support@web3forms.com',
      country: { ko: '미국', en: 'United States' },
      method: {
        ko: '이용자가 문의 폼을 제출하는 시점에 네트워크를 통한 전송(TLS 암호화)',
        en: 'When you submit the contact form, via network transmission (TLS-encrypted)',
      },
      items: {
        ko: '회사명, 성명, 이메일 주소, 연락처, 직책, 산업 분야, 문의 내용',
        en: 'Company name, name, email address, phone number, job title, industry, and inquiry details',
      },
      purpose: {
        ko: '문의 내용의 이메일 전달',
        en: 'Forwarding inquiry details by email',
      },
      period: {
        ko: '전달 완료 후 지체 없이 파기',
        en: 'Destroyed without delay after forwarding is complete',
      },
    },
  },
  {
    name: 'Google LLC',
    task: {
      ko: 'Google Analytics를 통한 웹사이트 이용 통계 분석',
      en: 'Website usage statistics analysis via Google Analytics',
    },
    policy: 'https://policies.google.com/privacy',
    consent: true,
    transfer: {
      recipient: 'Google LLC',
      contact: 'https://support.google.com/<wbr>policies',
      country: {
        ko: '미국 등 Google 데이터센터 소재국',
        en: 'United States and other countries where Google data centers are located',
      },
      method: {
        ko: '이용자가 <strong>분석 쿠키에 동의한 후</strong> 웹사이트를 이용하는 시점에 네트워크를 통한 전송',
        en: 'When you use the website <strong>after consenting to analytics cookies</strong>, via network transmission',
      },
      items: {
        ko: '쿠키 식별자, 접속 IP 주소(일부 삭제), 방문 페이지, 브라우저 ⁠· 기기 정보',
        en: 'Cookie identifiers, access IP address (partially truncated), pages visited, and browser and device information',
      },
      purpose: {
        ko: '웹사이트 이용 통계 분석',
        en: 'Website usage statistics analysis',
      },
      retentionKey: 'ga',
    },
  },
  {
    name: 'Mixpanel, Inc.',
    task: {
      ko: '제품 ⁠· 콘텐츠 이용 행태 분석, 세션 리플레이 및 히트맵 기록',
      en: 'Analysis of product and content usage behavior; session replay and heatmap recording',
    },
    policy: 'https://mixpanel.com/legal/privacy-policy/',
    consent: true,
    transfer: {
      recipient: 'Mixpanel, Inc.',
      contact: 'privacy@mixpanel.com',
      country: { ko: '미국', en: 'United States' },
      method: {
        ko: '이용자가 <strong>분석 쿠키에 동의한 후</strong> 웹사이트를 이용하는 시점에 네트워크를 통한 전송',
        en: 'When you use the website <strong>after consenting to analytics cookies</strong>, via network transmission',
      },
      items: {
        ko: '임의 식별자, 방문 페이지, 클릭 ⁠· 스크롤 등 상호작용 기록, 화면 조작 기록(입력값 마스킹), 브라우저 ⁠· 기기 정보',
        en: 'Random identifiers, pages visited, interaction records such as clicks and scrolls, on-screen interaction records (with input values masked), and browser and device information',
      },
      purpose: {
        ko: '이용 행태 분석 및 사용성 개선',
        en: 'Usage behavior analysis and usability improvement',
      },
      retentionKey: 'mixpanel',
    },
  },
];

/**
 * 정보주체 권익침해 구제 전문기관 — 표준 개인정보 처리방침 기준 4개 기관
 * 영문 명칭은 공식 표기를 대조했다(용어집 §2, 2026-09-11).
 *  - 분쟁조정위원회: KLRI 영문법령 PIPA 제40조 / 침해신고센터: PIPC 영문 사이트의 표기
 *  - 대검 사이버수사과: 대검찰청 영문 사이트 조직도(과학수사부 Forensic Science Investigation
 *    Department 아래 'Cyber and Technology Crime Investigation Division' — 한국어 조직도의 4개 과와 순서 · 업무가 1:1)
 *  - 경찰청 ECRM: ecrm.police.go.kr 머리글의 영문명(사이트는 'system'을 소문자로 적는다 — 고유명사라 대문자로 둔다)
 */
const remedyAgencies = [
  {
    name: { ko: '개인정보분쟁조정위원회', en: 'Personal Information Dispute Mediation Committee' },
    tel: { ko: '(국번 없이) 1833-6972', en: '1833-6972 (no area code needed)' },
    url: 'https://www.kopico.go.kr',
  },
  {
    name: { ko: '개인정보침해신고센터', en: 'Personal Information Infringement Report Call Center (KISA)' },
    tel: { ko: '(국번 없이) 118', en: '118 (no area code needed)' },
    url: 'https://privacy.kisa.or.kr',
  },
  {
    name: { ko: '대검찰청 사이버수사과', en: 'Cyber and Technology Crime Investigation Division, Supreme Prosecutors’ Office' },
    tel: { ko: '(국번 없이) 1301', en: '1301 (no area code needed)' },
    url: 'https://www.spo.go.kr',
  },
  {
    name: { ko: '경찰청 사이버범죄 신고시스템(ECRM)', en: 'Electronic Cybercrime Report & Management System (ECRM), Korean National Police Agency' },
    tel: { ko: '(국번 없이) 182', en: '182 (no area code needed)' },
    url: 'https://ecrm.police.go.kr',
  },
];

// ── 언어별로 꺼내기 ──────────────────────────────────────────────────────────

/** `{ ko, en }` 쌍을 문자열로 푼 모양. 배열 · 중첩 객체 안까지 내려간다. */
type Resolve<X> = X extends Text
  ? string
  : X extends readonly (infer U)[]
    ? Resolve<U>[]
    : X extends object
      ? { [K in keyof X]: Resolve<X[K]> }
      : X;

/**
 * 쌍을 만나면 한쪽을 고른다. 쌍의 키가 하나라도 빠져 있으면 **빌드를 멈춘다** —
 * `astro build`는 타입을 검사하지 않으므로 여기서 직접 막는다.
 */
function resolve(v: unknown, lang: Lang, path: string): unknown {
  if (Array.isArray(v)) return v.map((x, i) => resolve(x, lang, `${path}[${i}]`));
  if (v && typeof v === 'object') {
    if ('ko' in v || 'en' in v) {
      const t = v as Partial<Text>;
      if (typeof t.ko !== 'string' || typeof t.en !== 'string') {
        throw new Error(`src/data/legal.ts ${path}: 한국어(ko) · 영어(en) 두 값이 모두 있어야 한다.`);
      }
      return t[lang];
    }
    return Object.fromEntries(
      Object.entries(v).map(([k, x]) => [k, resolve(x, lang, path ? `${path}.${k}` : k)]),
    );
  }
  return v;
}

const data = { company, retention, processors, remedyAgencies, revisions };

/** 페이지가 쓰는 입구. `const { company, retention } = legal('ko');` */
export function legal(lang: Lang) {
  return resolve(data, lang, '') as Resolve<typeof data>;
}

// 영어 페이지가 아직 없어도 쌍이 온전한지 빌드 때마다 확인한다.
legal('en');

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * ISO 날짜를 언어에 맞게 표시한다. 한국어는 그대로, 영어는 `September 1, 2026`(용어집 §1).
 * Date 객체를 거치지 않는다 — 시간대에 따라 하루가 밀릴 수 있다.
 */
export function formatDate(iso: string, lang: Lang): string {
  if (lang === 'ko' || !iso) return iso;
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
