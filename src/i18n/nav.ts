// 헤더·푸터 IA를 로케일별로 정의한다. Nav.astro·Footer.astro가 현재 로케일로 골라 렌더한다.
//
// ko와 en은 같은 축·같은 구조를 쓴다(솔루션·리소스·회사 / Solutions·Resources·Company).
// 영어 페이지가 아직 없는 항목만 Soon 배지로 두고, 페이지가 생기면 href를 채운다.
// 영어 페이지가 없는 항목만 Soon 배지다.

// icon — Phosphor 아이콘 이름(ph-<icon>). desc — 항목 아래 한 줄 설명.
// 둘 다 카드로 펴는 묶음(리소스·회사)에서만 쓴다.
// desc는 이름을 되풀이하지 않고 '거기 가면 무엇이 있는지'를 적는다.
export type NavLink = { label: string; href?: string; badge?: string; icon?: string; desc?: string };
export type NavGroup = { title?: string; items: NavLink[] };
export type NavMenu = { label: string; href: string; groups?: NavGroup[] };
export type FooterCol = { title: string; items: NavLink[] };

type Lang = 'ko' | 'en';

/** 헤더 메가메뉴 */
export const navMenu: Record<Lang, NavMenu[]> = {
  ko: [
    {
      label: '솔루션',
      href: '/#industries',
      groups: [
        {
          // VETEC이 실제 수행한 100+ 현장의 산업 대분류. 실제 페이지가 있는 곳만 링크, 나머지는 '예정' 배지.
          title: '산업별',
          items: [
            { label: '에너지 ⁠· 유틸리티', href: '/industries/energy' },
            { label: '자동차 ⁠· 모빌리티', href: '/industries/automotive' },
            { label: '전자 ⁠· 정밀', href: '/industries/electronics' },
            { label: '철강 ⁠· 소재', href: '/industries/steel' },
            { label: '화학 ⁠· 소재', href: '/industries/chemicals' },
            { label: '기계 ⁠· 플랜트', href: '/industries/machinery' },
            { label: '식품 ⁠· 음료', href: '/industries/food' },
          ],
        },
        {
          // '산업별'과 짝을 이루는 축 이름. 목적지는 /use-cases 그대로.
          title: '과제별',
          items: [
            { label: '예지보전', href: '/use-cases/predictive-maintenance' },
            { label: '센서 모니터링', href: '/use-cases/sensor-monitoring' },
            { label: '전력관리', href: '/use-cases/power-management' },
            { label: '전력품질', href: '/use-cases/power-quality' },
            { label: '공장 에너지관리', href: '/use-cases/factory-energy' },
            { label: '에너지 최적화', href: '/use-cases/energy-optimization' },
            { label: '품질 예측', href: '/use-cases/quality-prediction' },
          ],
        },
      ],
    },
    {
      label: '리소스',
      href: '/blog',
      groups: [
        {
          title: '리소스',
          items: [
            { label: '산업 AI', href: '/industrial-ai', icon: 'sparkle', desc: '업종을 가리지 않는 AI 활용법' },
            // 푸터에는 있는데 헤더에만 빠져 있었다. 페이지는 한국어로 있다.
            { label: '에너지관리시스템', href: '/energy-management', icon: 'gauge', desc: '전기 ⁠· 가스 ⁠· 스팀 ⁠· 용수 통합 관리' },
            { label: '블로그', href: '/blog', icon: 'article', desc: '현장 적용 사례와 기술 노트' },
            // 초안만 있고 아직 공개 전이라 링크를 두지 않는다. 페이지는 그대로 있다(noindex).
            { label: '문서', badge: '예정', icon: 'file-text', desc: '설치 ⁠· 연동 ⁠· 운영 안내' },
            { label: '자료실', href: '/resources', icon: 'folder-open', desc: '백서 ⁠· 리포트 ⁠· 제품 자료' },
          ],
        },
      ],
    },
    {
      label: '회사',
      href: '/company',
      groups: [
        {
          // 문의는 헤더 우측 상시 버튼이 담당하고, 약관류는 푸터에 둔다.
          title: '회사',
          items: [
            { label: '회사 소개', href: '/company', icon: 'buildings', desc: '하는 일과 걸어온 길' },
            { label: '연혁 ⁠· 팀', badge: '예정', icon: 'users-three', desc: '주요 이력과 구성원' },
            { label: '채용', badge: '예정', icon: 'user-plus', desc: '함께할 동료를 찾습니다' },
            { label: '뉴스룸', badge: '예정', icon: 'newspaper', desc: '보도자료와 새소식' },
          ],
        },
      ],
    },
  ],

  // 한국어와 같은 3축 구조(솔루션·리소스·회사). 영어 페이지가 없는 항목만 Soon 배지다.
  en: [
    {
      label: 'Solutions',
      href: '/en#industries',
      groups: [
        {
          title: 'By industry',
          items: [
            { label: 'Energy & Utilities', href: '/en/industries/energy' },
            { label: 'Automotive & Mobility', href: '/en/industries/automotive' },
            { label: 'Electronics & Precision', href: '/en/industries/electronics' },
            { label: 'Steel & Materials', href: '/en/industries/steel' },
            { label: 'Chemicals & Materials', href: '/en/industries/chemicals' },
            { label: 'Machinery & Plant', href: '/en/industries/machinery' },
            { label: 'Food & Beverage', href: '/en/industries/food' },
          ],
        },
        {
          title: 'By challenge',
          items: [
            { label: 'Predictive maintenance', href: '/en/use-cases/predictive-maintenance' },
            { label: 'Multi-sensor monitoring', href: '/en/use-cases/sensor-monitoring' },
            { label: 'Power management', href: '/en/use-cases/power-management' },
            { label: 'Power quality', href: '/en/use-cases/power-quality' },
            { label: 'Factory energy management', href: '/en/use-cases/factory-energy' },
            { label: 'Energy optimization', href: '/en/use-cases/energy-optimization' },
            { label: 'Quality prediction', href: '/en/use-cases/quality-prediction' },
          ],
        },
      ],
    },
    {
      label: 'Resources',
      href: '/en/blog',
      groups: [
        {
          title: 'Resources',
          items: [
            // 한국어와 같은 목록·순서다.
            { label: 'Industrial AI', href: '/en/industrial-ai', icon: 'sparkle', desc: 'AI that fits any industry' },
            { label: 'Energy management', href: '/en/energy-management', icon: 'gauge', desc: 'All utilities in one view' },
            { label: 'Blog', href: '/en/blog', icon: 'article', desc: 'Field notes and case studies' },
            { label: 'Docs', badge: 'Soon', icon: 'file-text', desc: 'Setup, integration and operation' },
            { label: 'Resource library', href: '/en/resources', icon: 'folder-open', desc: 'Whitepapers and reports' },
          ],
        },
      ],
    },
    {
      label: 'Company',
      href: '/en/company',
      groups: [
        {
          title: 'Company',
          items: [
            { label: 'About', href: '/en/company', icon: 'buildings', desc: 'What we do and where we came from' },
            { label: 'History & team', badge: 'Soon', icon: 'users-three', desc: 'Milestones and the people' },
            { label: 'Careers', badge: 'Soon', icon: 'user-plus', desc: 'Roles we\'re hiring for' },
            { label: 'Newsroom', badge: 'Soon', icon: 'newspaper', desc: 'Press releases and updates' },
          ],
        },
      ],
    },
  ],
};

/** 푸터 열 */
/** 약관 — 푸터 '약관' 칸과 메가메뉴 패널 하단 띠가 같은 목록을 쓴다.
 *  href 없는 '쿠키 설정'은 버튼으로 렌더돼 동의 배너를 다시 연다. */
export const legalLinks: Record<Lang, NavLink[]> = {
  ko: [
    { label: '개인정보처리방침', href: '/privacy' },
    { label: '이용약관', href: '/terms' },
    { label: '소프트웨어 사용권 계약', href: '/eula' },
    { label: '쿠키 정책', href: '/cookie-policy' },
    { label: '쿠키 설정' },
  ],
  // 약관은 법적 효력이 있어 전문 번역을 마친 문서부터 하나씩 영어판으로 연결한다.
  // 영어판이 아직 없는 문서는 한국어 원문으로 간다(없는 /en/* 경로는 404).
  // 영어판을 켤 때는 CookieConsent.astro의 영어 링크와 두 페이지의 hreflang(alternates)도 함께 바꾼다.
  en: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Software License (EULA)', href: '/eula' },
    { label: 'Cookie Policy', href: '/en/cookie-policy' },
    { label: 'Cookie Settings' },
  ],
};

export const footerCols: Record<Lang, FooterCol[]> = {
  ko: [
    {
      // 헤더 메가메뉴의 '산업별'과 같은 목록·순서다.
      title: '산업별',
      items: [
        { label: '에너지 ⁠· 유틸리티', href: '/industries/energy' },
        { label: '자동차 ⁠· 모빌리티', href: '/industries/automotive' },
        { label: '전자 ⁠· 정밀', href: '/industries/electronics' },
        { label: '철강 ⁠· 소재', href: '/industries/steel' },
        { label: '화학 ⁠· 소재', href: '/industries/chemicals' },
        { label: '기계 ⁠· 플랜트', href: '/industries/machinery' },
        { label: '식품 ⁠· 음료', href: '/industries/food' },
      ],
    },
    {
      // 헤더 메가메뉴의 '과제별'과 같은 목록·순서다.
      title: '과제별',
      items: [
        { label: '예지보전', href: '/use-cases/predictive-maintenance' },
        { label: '센서 모니터링', href: '/use-cases/sensor-monitoring' },
        { label: '전력관리', href: '/use-cases/power-management' },
        { label: '전력품질', href: '/use-cases/power-quality' },
        { label: '공장 에너지관리', href: '/use-cases/factory-energy' },
        { label: '에너지 최적화', href: '/use-cases/energy-optimization' },
        { label: '품질 예측', href: '/use-cases/quality-prediction' },
      ],
    },
    {
      title: '리소스',
      items: [
        { label: '산업 AI', href: '/industrial-ai' },
        { label: '에너지관리시스템', href: '/energy-management' },
        { label: '블로그', href: '/blog' },
        { label: '자료실', href: '/resources' },
      ],
    },
    {
      title: '회사',
      items: [
        { label: '회사 소개', href: '/company' },
        { label: '문의하기', href: '/contact' },
      ],
    },
    {
      title: '약관',
      items: legalLinks.ko,
    },
  ],
  en: [
    {
      title: 'By industry',
      items: [
        { label: 'Energy & Utilities', href: '/en/industries/energy' },
        { label: 'Automotive & Mobility', href: '/en/industries/automotive' },
        { label: 'Electronics & Precision', href: '/en/industries/electronics' },
        { label: 'Steel & Materials', href: '/en/industries/steel' },
        { label: 'Chemicals & Materials', href: '/en/industries/chemicals' },
        { label: 'Machinery & Plant', href: '/en/industries/machinery' },
        { label: 'Food & Beverage', href: '/en/industries/food' },
      ],
    },
    {
      title: 'By challenge',
      items: [
        { label: 'Predictive maintenance', href: '/en/use-cases/predictive-maintenance' },
        { label: 'Multi-sensor monitoring', href: '/en/use-cases/sensor-monitoring' },
        { label: 'Power management', href: '/en/use-cases/power-management' },
        { label: 'Power quality', href: '/en/use-cases/power-quality' },
        { label: 'Factory energy management', href: '/en/use-cases/factory-energy' },
        { label: 'Energy optimization', href: '/en/use-cases/energy-optimization' },
        { label: 'Quality prediction', href: '/en/use-cases/quality-prediction' },
      ],
    },
    {
      title: 'Resources',
      items: [
        // 한국어 푸터와 같은 목록·순서다.
        { label: 'Industrial AI', href: '/en/industrial-ai' },
        { label: 'Energy management', href: '/en/energy-management' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Resource library', href: '/en/resources' },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '/en/company' },
        { label: 'Contact', href: '/en/contact' },
      ],
    },
    {
      // 링크는 legalLinks.en — 영어판이 있는 문서만 /en/*로 간다.
      title: 'Legal',
      items: legalLinks.en,
    },
  ],
};

/** 헤더 우측 상시 CTA·접근성 라벨 */
export const navUi: Record<Lang, { cta: string; ctaHref: string; home: string; openMenu: string; tagline: string }> = {
  ko: { cta: '문의하기', ctaHref: '/contact', home: 'Refinery 홈', openMenu: '메뉴 열기', tagline: 'Refining complexity<br>into pure insight' },
  en: { cta: 'Contact', ctaHref: '/en/contact', home: 'Refinery home', openMenu: 'Open menu', tagline: 'Refining complexity<br>into pure insight' },
};
