import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(chemicals.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const chemicalsEn: IndustryData = {
  slug: 'chemicals',
  name: 'Chemicals & Materials',
  pageTitle: 'Refinery for chemicals & materials: reaction stability, multi-utility integration, carbon compliance',
  description:
    'Connect electricity, LNG, steam and water into one structure, and let an AI agent catch combustion inefficiency and emission anomalies first. Refinery for chemicals, materials and pharmaceutical process operations.',
  hero: {
    dark: true,
    image: { src: '/industries/chemicals-hero.webp', alt: '', width: 1920, height: 1172 },
    // 세로 초점. 값을 올리면 사진 아래쪽이 보여 이미지가 위로 올라간다.
    // 공통값 45%에서는 대물렌즈가 대제목 줄을 가로질렀다. 75%로 올리면
    // 렌즈가 제목 위로 가고 슬라이드와 스테이지가 아래에 들어온다
    // (이동 여유 307px 중 92px). 이 지점이 글자 대비(11.72:1)와
    // 아래 이음새 어둡기 모두 가장 좋다 — 90% 위로는 이음새가 다시 밝아진다.
    imagePosition: 'center 75%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Chemicals ⁠· Materials',
    title: 'Continuous reactions and heat,\nunder precise control',
  },
  challenges: {
    dark: true,
    title: 'Challenges on chemical sites',
    subtitle: 'Recurring problems where continuous reaction and heat-based equipment run.',
    items: [
      {
        title: 'Several energy sources run at once',
        description:
          'Electricity, LNG, steam and water all feed the process, yet each is aggregated separately and the whole picture never forms.',
      },
      {
        title: 'Small changes upset quality and production stability',
        description:
          'Reactors, boilers, blowers and compressors run continuously, so a slight change in conditions carries straight through to the result.',
      },
      {
        title: 'Process variables need precise control',
        description:
          'Air-fuel ratio, temperature, pressure and flow must all be held in range at once, and going by feel cannot keep them at the optimum.',
      },
      {
        title: 'Energy cost and carbon rules tighten together',
        description:
          'Beyond simple monitoring, target-based energy management and process optimization are now expected.',
      },
    ],
  },
  useCases: {
    title: 'How the problems are solved',
    subtitle: 'What <mark><span translate="no">Refinery</span>\nactually does</mark>\non a chemical site.',
    layout: 'steps',
    items: [
      {
        title: 'Unified electricity, LNG, steam and water monitoring',
        problem: 'Multiple energy sources, each aggregated separately',
        approach: 'Electricity, LNG, steam, water and consumption by asset are connected through an ontology into one structure, so the whole energy flow sits on one screen.',
        outcome: 'Usage patterns made visible by energy source',
      },
      {
        title: 'Energy targets and overrun alerts',
        problem: 'Over-consumption confirmed only after the fact',
        approach: 'Targets are set by asset and process, and overrun is raised in real time.',
        outcome: 'Over-consumption prevented and immediate response in place',
      },
      {
        title: 'Air-fuel-ratio-based blower inverter control for thermal fluid boilers',
        problem: 'Thermal fluid boiler air-fuel ratio set by feel',
        approach: 'The blower inverter is controlled against the thermal fluid boiler air-fuel ratio so the optimum is held.',
        outcome: 'Better combustion efficiency and lower energy cost',
      },
      {
        title: 'Energy use analysis by asset',
        problem: 'No way to tell which assets are eating up the energy',
        approach: 'Energy is metered separately by asset and compared on equal terms.',
        outcome: 'Energy-intensive assets identified',
      },
      {
        title: 'Air compressor state and operating parameter monitoring',
        problem: 'Compressor anomalies that surface only after a stop',
        approach: 'An AI agent reads compressor state and operating parameters together to catch early signs in patterns that differ from the norm, and proposes both the cause and the next action.',
        outcome: 'Steadier equipment operation and more efficient maintenance',
      },
      {
        title: 'Unified greenhouse gas emissions management',
        problem: 'Manual aggregation of emissions and regulatory reports',
        approach: 'Emission metrics are aggregated automatically from field data into reports traceable to their source.',
        outcome: 'Carbon compliance and energy performance management',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How field data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Reactors ⁠· thermal fluid boilers ⁠· blowers ⁠· compressor sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'SCADA ⁠· PLC ⁠· FEMS ⁠· Modbus ⁠· Serial ⁠· 4-20mA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology ⁠· AI agent ⁠· rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Energy dashboard ⁠· target alerts ⁠· emission reports', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where SCADA or FEMS already exists, a layer sits on top of it and integrates bidirectionally rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Target-based energy management',
        icon: 'ph-target',
        description: 'Targets are set and overrun is raised in real time.',
      },
      {
        title: 'Optimal air-fuel ratio control',
        icon: 'ph-flame',
        description: 'Combustion data holds the ratio at its optimum.',
      },
      {
        title: 'Energy variance by asset',
        icon: 'ph-chart-line',
        description: 'Energy is split asset by asset to pin the heavy consumers.',
      },
      {
        title: 'Early detection of energy anomalies',
        icon: 'ph-pulse',
        description: 'Patterns that differ from the norm are noticed first.',
      },
      {
        title: 'Carbon compliance',
        icon: 'ph-leaf',
        description: 'Emissions are aggregated automatically, with sources traceable.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on chemical sites.',
    systems: ['SCADA', 'PLC', 'FEMS', 'ERP', 'Modbus', 'Serial ⁠· RS-485', '4-20mA', 'OPC-⁠UA'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'The Refinery team will work with you to find\nthe answer that fits your chemical operation.',
    buttonLabel: 'Request a demo',
  },
};
