// 헤더·푸터 IA를 로케일별로 정의한다. Nav.astro·Footer.astro가 현재 로케일로 골라 렌더한다.
//
// ko와 en은 같은 축·같은 구조를 쓴다(솔루션·리소스·회사 / Solutions·Resources·Company).
// 영어 페이지가 아직 없는 항목만 Soon 배지로 두고, 페이지가 생기면 href를 채운다.
// 영어 페이지가 없는 항목만 Soon 배지다.

// icon — Phosphor 아이콘 이름(ph-<icon>). 카드로 펴는 묶음(리소스·회사)에서만 쓴다.
export type NavLink = { label: string; href?: string; badge?: string; icon?: string };
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
          // VETEC이 실제 수행한 100+ 현장의 산업 대분류. 실제 페이지가 있는 곳만 링크, 나머지는 준비중 배지.
          title: '산업별',
          items: [
            { label: '에너지 · 유틸리티', href: '/industries/energy' },
            { label: '자동차 · 모빌리티', href: '/industries/automotive' },
            { label: '전자 · 정밀', href: '/industries/electronics' },
            { label: '가공 · 소재 · 철강', href: '/industries/steel' },
            { label: '화학 · 소재', href: '/industries/chemicals' },
            { label: '기계 · 플랜트', href: '/industries/machinery' },
            { label: '식품 · 음료', href: '/industries/food' },
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
          items: [
            { label: '산업 AI', href: '/industrial-ai', icon: 'brain' },
            // 푸터에는 있는데 헤더에만 빠져 있었다. 페이지는 한국어로 있다.
            // (영문은 /en/energy-management가 없어 영문 메뉴에는 넣지 않는다.)
            { label: '에너지관리시스템', href: '/energy-management', icon: 'gauge' },
            { label: '블로그', href: '/blog', icon: 'article' },
            // 초안만 있고 아직 공개 전이라 링크를 두지 않는다. 페이지는 그대로 있다(noindex).
            { label: '문서', badge: '준비중', icon: 'file-text' },
            { label: '자료실', href: '/resources', icon: 'folder-open' },
          ],
        },
      ],
    },
    {
      label: '회사',
      href: '/company',
      groups: [
        {
          // 한 열이라 제목을 두지 않는다(리소스 메뉴와 같은 형태).
          // 문의는 헤더 우측 상시 버튼이 담당하고, 약관류는 푸터에 둔다.
          items: [
            { label: '회사 소개', href: '/company', icon: 'buildings' },
            { label: '연혁 · 팀', badge: '준비중', icon: 'users-three' },
            { label: '채용', badge: '준비중', icon: 'user-plus' },
            { label: '뉴스룸', badge: '준비중', icon: 'newspaper' },
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
            { label: 'Materials & Steel', href: '/en/industries/steel' },
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
          items: [
            // 한국어와 같은 목록·순서다. 이 둘은 영어 페이지가 아직 없어 국문 페이지로
            // 보낸다(임시). 영어 페이지가 생기면 href를 /en/...으로 바꾸면 된다.
            { label: 'Industrial AI', href: '/industrial-ai', icon: 'brain' },
            { label: 'Energy management', href: '/energy-management', icon: 'gauge' },
            { label: 'Blog', href: '/en/blog', icon: 'article' },
            { label: 'Docs', badge: 'Soon', icon: 'file-text' },
            { label: 'Resources & whitepapers', href: '/en/resources', icon: 'folder-open' },
          ],
        },
      ],
    },
    {
      label: 'Company',
      href: '/en/company',
      groups: [
        {
          items: [
            { label: 'About', href: '/en/company', icon: 'buildings' },
            { label: 'History & team', badge: 'Soon', icon: 'users-three' },
            { label: 'Careers', badge: 'Soon', icon: 'user-plus' },
            { label: 'Newsroom', badge: 'Soon', icon: 'newspaper' },
          ],
        },
      ],
    },
  ],
};

/** 푸터 열 */
export const footerCols: Record<Lang, FooterCol[]> = {
  ko: [
    {
      // 헤더 메가메뉴의 '산업별'과 같은 목록·순서다.
      title: '산업별',
      items: [
        { label: '에너지 · 유틸리티', href: '/industries/energy' },
        { label: '자동차 · 모빌리티', href: '/industries/automotive' },
        { label: '전자 · 정밀', href: '/industries/electronics' },
        { label: '가공 · 소재 · 철강', href: '/industries/steel' },
        { label: '화학 · 소재', href: '/industries/chemicals' },
        { label: '기계 · 플랜트', href: '/industries/machinery' },
        { label: '식품 · 음료', href: '/industries/food' },
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
      items: [
        { label: '개인정보처리방침', href: '/privacy' },
        { label: '이용약관', href: '/terms' },
        { label: '소프트웨어 사용권 계약', href: '/eula' },
        { label: '쿠키 정책', href: '/cookie-policy' },
        // href 없는 항목은 '쿠키 설정' 버튼으로 렌더된다(배너를 다시 여는 동작).
        { label: '쿠키 설정' },
      ],
    },
  ],
  en: [
    {
      title: 'By industry',
      items: [
        { label: 'Energy & Utilities', href: '/en/industries/energy' },
        { label: 'Automotive & Mobility', href: '/en/industries/automotive' },
        { label: 'Electronics & Precision', href: '/en/industries/electronics' },
        { label: 'Materials & Steel', href: '/en/industries/steel' },
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
        // 한국어 푸터와 같은 목록·순서다. 이 둘은 영어 페이지가 아직 없어 국문
        // 페이지로 보낸다(임시). 영어 페이지가 생기면 /en/...으로 바꾼다.
        { label: 'Industrial AI', href: '/industrial-ai' },
        { label: 'Energy management', href: '/energy-management' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Resources & whitepapers', href: '/en/resources' },
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
      // 약관은 법적 효력이 있어 전문 번역 전까지 영어판을 만들지 않는다. 한국어 페이지로 연결.
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Software License (EULA)', href: '/eula' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'Cookie Settings' },
      ],
    },
  ],
};

/** 헤더 우측 상시 CTA·접근성 라벨 */
export const navUi: Record<Lang, { cta: string; ctaHref: string; home: string; openMenu: string; tagline: string }> = {
  ko: { cta: '문의하기', ctaHref: '/contact', home: 'Refinery 홈', openMenu: '메뉴 열기', tagline: 'Refining complexity<br>into pure insight' },
  en: { cta: 'Contact', ctaHref: '/en/contact', home: 'Refinery home', openMenu: 'Open menu', tagline: 'Refining complexity<br>into pure insight' },
};
