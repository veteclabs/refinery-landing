// 필러 페이지(개념 설명 + 정의형 Q&A) 내용. PillarPage 컴포넌트가 렌더한다.
export interface PillarFaq {
  q: string;
  /** 화면 줄바꿈은 \n으로 넣는다. 좁은 폭에서는 CSS가 <br>을 숨겨 단락을 푼다. */
  a: string;
}
export interface PillarUse {
  label: string;
  /** 화면 줄바꿈은 \n으로 넣는다. */
  desc: string;
  href: string;
}
export interface PillarContent {
  title: string;
  description: string;
  canonical: string;
  /** <br>로 줄을 나눈다. */
  heroTitle: string;
  /** 대제목 아래 한 줄 소개. 없는 페이지도 있다(산업 AI). */
  heroLede?: string;
  ctaPrimary: string;
  contactHref: string;
  ctaGhost: string;
  ghostHref: string;
  /** 히어로 데모 iframe 주소. 언어별 파일이 따로 있다. 빈 문자열이면 자리만 남긴다. */
  demoSrc: string;
  demoTitle: string;
  /** 데모 시작 화면에 띄우는 좌측 글. \n에서 두 줄로 나뉜다. */
  openTitle: string;
  faqHead: string;
  usesHead: string;
  usesLede: string;
  more: string;
  /** <br>로 줄을 나눈다. */
  ctaTitle: string;
  faq: PillarFaq[];
  uses: PillarUse[];
}

// 산업 AI — /industrial-ai · /en/industrial-ai
export const industrialAi: Record<'ko' | 'en', PillarContent> = {
  ko: {
    title: '산업 AI란? 제조·에너지 현장의 AI 에이전트 | Refinery',
    description: '산업 AI·제조 AI·에너지 AI·산업 AI 에이전트가 무엇인지, 흩어진 현장 데이터를 어떻게 판단으로 잇는지 정리했습니다. Refinery는 온톨로지로 근거 있는 AI 판단을 제공합니다.',
    canonical: '/industrial-ai',
    heroTitle: '흩어진 현장의 데이터를<br>근거 있는 판단으로 잇는 산업 AI',
    ctaPrimary: '문의하기',
    contactHref: '/contact',
    ctaGhost: '플랫폼 개요',
    ghostHref: '/why-refinery',
    /* 데모는 언어별 파일이 따로 있다. 시나리오·구조는 같고 문구만 다르다. */
    demoSrc: '/agent-replay-demo',
    demoTitle: 'Refinery AI 에이전트 데모',
    /* 시작 화면에 띄우는 좌측 글. \n에서 두 줄로 나뉜다. */
    openTitle: '묻는 것으로 시작하는\nAI 에이전트',
    faqHead: '자주 묻는 질문',
    usesHead: '현장에서 바로 쓰는 활용',
    usesLede: '산업 AI가 실제 현장에서 어떻게 쓰이는지 살펴보세요.',
    more: '자세히보기',
    ctaTitle: '지금 바로<br>Refinery를 경험해보세요.',
    faq: [
      {
        q: '산업 AI란 무엇인가요?',
        a: '산업 AI는 제조 · 에너지 · 플랜트 등 산업 현장의 설비 · 공정 · 센서 데이터를 수집 · 통합 · 분석해 \n판단과 조치를 돕는 인공지능입니다. 범용 챗봇과 달리 실제 현장 데이터와 도메인 맥락에 근거해 답합니다.',
      },
      {
        q: '제조 AI란 무엇인가요?',
        a: '제조 AI는 생산 · 품질 · 설비 운영에 적용되는 산업 AI입니다. 대표적인 활용은 설비 고장을 미리 예측하는 \n예지보전, 불량을 사전에 잡는 품질 예측, 에너지 사용을 줄이는 에너지 최적화입니다.',
      },
      {
        q: '제조업 AI란 무엇인가요?',
        a: '제조업 AI는 생산 · 품질 · 설비 · 에너지 운영에 인공지능을 적용해 예측과 자동화를 돕는 기술로, \n제조 AI와 같은 의미로 쓰입니다. 흩어진 현장 데이터를 통합해 근거 있는 판단을 만드는 것이 핵심입니다.',
      },
      {
        q: '스마트팩토리 AI란 무엇인가요?',
        a: '스마트팩토리 AI는 공장의 설비 · 공정 · 품질 · 에너지 데이터를 하나로 연결해 스스로 감지 · 예측 · 최적화하는 \n지능형 공장을 만드는 AI입니다. 단순 자동화를 넘어 데이터에 근거해 판단하고 다음 조치를 제안합니다.',
      },
      {
        q: '에너지 AI란 무엇인가요?',
        a: '에너지 AI는 전력 · 에너지 데이터를 분석해 소비 · 품질 · 효율을 관리하는 산업 AI입니다. \n에너지관리시스템(EMS)과 결합해 전력 피크와 이상을 감지하고 절감 기회를 찾습니다.',
      },
      {
        q: '산업 AI 에이전트란 무엇인가요?',
        a: '산업 AI 에이전트는 질문에 근거(출처)를 들어 답하고, 원인을 추론해 다음 조치까지 제안하는 대화형 AI입니다. \nRefinery는 흩어진 데이터를 온톨로지로 엮어 의미를 부여함으로써 이를 구현합니다.',
      },
      {
        q: 'AI 시스템을 도입하려면 무엇이 필요한가요?',
        a: '먼저 SCADA · MES · ERP · 센서 · 문서에 흩어진 데이터를 하나로 통합해야 합니다. \nRefinery는 기존 시스템 위에 통합 지능 레이어로 얹거나, 시스템이 없는 현장은 새로 구축해 \n데이터에 의미를 부여하고 AI가 근거를 들어 판단하게 합니다.',
      },
      {
        q: 'Refinery의 산업 AI는 무엇이 다른가요?',
        a: 'Refinery는 흩어진 SCADA · MES · ERP · 센서 · 문서를 온톨로지로 엮어 근거 있는 판단을 만듭니다. \n기존 시스템 위에 얹거나 새로 구축하며, 데이터가 사내를 벗어나지 않는 온프레미스 배포를 지원합니다. \n30년 경험과 100곳이 넘는 산업 현장에서 검증됐습니다.',
      },
    ],
    uses: [
      { label: '예지보전', desc: '무선 진동센서로 설비 고장을 \n미리 예측하고 모터 예지보전까지', href: '/use-cases/predictive-maintenance' },
      { label: '전력관리', desc: '전력 데이터로 피크 · 이상 · \n절감 기회를 찾는 에너지 AI', href: '/use-cases/power-management' },
      { label: '품질 예측', desc: '공정 데이터로 불량을 \n사전에 잡는 제조 AI', href: '/use-cases/quality-prediction' },
      { label: '에너지관리시스템(EMS)', desc: 'EMS · 전력관리 · 전력감시 · \n정전감시 개념을 한눈에', href: '/energy-management' },
    ],
  },
  en: {
    title: 'What Is Industrial AI? AI Agents for Manufacturing and Energy | Refinery',
    description: 'A plain explanation of industrial AI, manufacturing AI, energy AI and industrial AI agents, and of how scattered plant data becomes grounded decisions. Refinery grounds every answer in an ontology.',
    canonical: '/en/industrial-ai',
    heroTitle: 'Industrial AI that turns scattered<br>plant data into grounded decisions',
    ctaPrimary: 'Contact',
    contactHref: '/en/contact',
    ctaGhost: 'Platform overview',
    /* 영어 /why-refinery는 없다. 랜딩의 플랫폼 구간으로 보낸다. */
    ghostHref: '/en#platform',
    demoSrc: '/agent-replay-demo-en',
    demoTitle: 'Refinery AI agent demo',
    openTitle: 'AI that starts\nwith a question',
    faqHead: 'FAQ',
    usesHead: 'Where industrial AI is used on site',
    usesLede: 'See how industrial AI works in real plants.',
    more: 'Learn more',
    ctaTitle: 'See what Refinery<br>can do for your site.',
    faq: [
      {
        q: 'What is industrial AI?',
        a: 'Industrial AI collects, integrates and analyzes equipment, process and sensor data from industrial sites in manufacturing, energy and process plants to support decisions and actions. Unlike a general chatbot, it bases its answers on real site data and domain context.',
      },
      {
        q: 'What is manufacturing AI?',
        a: 'Manufacturing AI is industrial AI applied to production, quality and equipment operations. Common uses include predictive maintenance that anticipates failures, quality prediction that catches defects early, and energy optimization.',
      },
      {
        q: 'What is AI in the manufacturing industry?',
        a: 'AI in the manufacturing industry means applying artificial intelligence to production, quality, equipment and energy operations; it is another term for manufacturing AI. The core is integrating scattered site data so that every decision has evidence behind it.',
      },
      {
        q: 'What is smart factory AI?',
        a: 'Smart factory AI brings a plant\u2019s equipment, process, quality and energy data together in one place so the factory can sense, predict and optimize on its own. It goes beyond simple automation: it reasons from data and proposes the next action.',
      },
      {
        q: 'What is energy AI?',
        a: 'Energy AI is industrial AI that analyzes power and energy data to manage consumption, quality and efficiency. Combined with an energy management system (EMS), it detects peaks and anomalies and finds opportunities to save.',
      },
      {
        q: 'What is an industrial AI agent?',
        a: 'An industrial AI agent answers questions with sources, reasons about causes, and proposes the next action. Refinery does this by weaving scattered data into an ontology that gives it meaning.',
      },
      {
        q: 'What do you need to adopt an AI system?',
        a: 'First, data scattered across SCADA, MES, ERP, sensors and documents has to be brought together. Refinery sits on top of existing systems as an integrated intelligence layer, or builds one where none exists, giving data meaning so AI can reason with evidence.',
      },
      {
        q: 'What makes Refinery\u2019s industrial AI different?',
        a: 'Refinery weaves scattered SCADA, MES, ERP, sensor and document data into an ontology to produce grounded decisions. It sits on top of existing systems or builds new ones, and supports on-premises deployment so data never leaves your network. It is proven over 30 years across more than 100 industrial sites.',
      },
    ],
    uses: [
      { label: 'Predictive maintenance', desc: 'Predict equipment failure early \nwith wireless vibration sensors', href: '/en/use-cases/predictive-maintenance' },
      { label: 'Power management', desc: 'Find peaks, anomalies and \nsavings in power data', href: '/en/use-cases/power-management' },
      { label: 'Quality prediction', desc: 'Spot defects in process data \nbefore they happen', href: '/en/use-cases/quality-prediction' },
      { label: 'Energy optimization', desc: 'Cut plant energy use with \ndata-driven control', href: '/en/use-cases/energy-optimization' },
    ],
  },
};
