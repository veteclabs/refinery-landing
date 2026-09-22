import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(food.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const foodEn: IndustryData = {
  slug: 'food',
  name: 'Food & Beverage',
  pageTitle: 'Refinery for food & beverage: refrigeration efficiency, quality temperature monitoring, batch energy intensity',
  description:
    'Connect chillers, air compressors and boilers to production data in one structure, and let an AI agent catch temperature excursions first. Refinery for food and beverage manufacturing.',
  hero: {
    dark: true,
    image: { src: '/industries/food-hero.webp', alt: '', width: 1920, height: 1280 },
    // 세로 초점. 값을 낮추면 사진 위쪽이 보여 이미지가 아래로 내려간다.
    // 15%면 45% 기준보다 116px 아래다(이동 여유 387px).
    // 글자 대비는 9.46:1로 AA 기준의 두 배 위다.
    imagePosition: 'center 15%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Food ⁠· Beverage',
    title: 'Equipment efficiency that holds\nquality and cost at once',
  },
  challenges: {
    dark: true,
    title: 'Challenges on food sites',
    subtitle: 'Recurring problems from intake through processing to packaging and storage.',
    items: [
      {
        title: 'Thermal and refrigeration efficiency losses become cost',
        description:
          'Air compressors, chillers, boilers and steam equipment carry most of the load, so any efficiency loss turns straight into cost and quality risk.',
      },
      {
        title: 'A stoppage costs a great deal',
        description:
          'Hygiene standards and quality regulation are strict, so a single interruption leaves a large loss.',
      },
      {
        title: 'Energy patterns shift batch to batch',
        description:
          'With batch production, a change in output changes the energy profile with it.',
      },
      {
        title: 'Cost, carbon and ageing arrive together',
        description:
          'Cost pressure, carbon compliance and ageing equipment are all happening in the same period.',
      },
    ],
  },
  useCases: {
    title: 'How the problems are solved',
    subtitle: 'What <mark><span translate="no">Refinery</span>\nactually does</mark>\non a food manufacturing site.',
    layout: 'steps',
    items: [
      {
        title: 'Chiller and compressor power and operating pattern analysis',
        problem: 'Equipment efficiency slipping without ever surfacing',
        approach: 'Power consumption and operating patterns are stacked to locate where efficiency bends.',
        outcome: 'Better equipment efficiency and lower energy cost',
      },
      {
        title: 'Energy simulation before and after replacing ageing equipment',
        problem: 'Replacement benefit that cannot be shown in numbers',
        approach: 'Post-replacement energy use is estimated from current operating data and placed side by side.',
        outcome: 'Investment case verified and replacement benefit quantified',
      },
      {
        title: 'Unified electricity, LNG, steam and water monitoring',
        problem: 'Utilities tallied separately, each on its own',
        approach: 'Electricity, LNG, steam, water and consumption by asset are connected through an ontology into one structure, so the whole plant energy flow sits on one screen.',
        outcome: 'Usage patterns made visible by energy source',
      },
      {
        title: 'Energy intensity tied to output',
        problem: 'Batch-to-batch variance with no baseline to compare',
        approach: 'Production records and energy use are linked to derive energy intensity by batch and product automatically.',
        outcome: 'Better cost structure and comparable process efficiency',
      },
      {
        title: 'Chiller efficiency analysis and operating optimization',
        problem: 'Chillers running on without a reference point',
        approach: 'Chiller COP is computed continuously so the most efficient units are run first.',
        outcome: 'Lower thermal and refrigeration energy, and steadier quality',
      },
      {
        title: 'Vibration-based equipment monitoring',
        problem: 'Rotating-equipment anomalies that surface only after a stop',
        approach: 'An AI agent reads anomalies in vibration trends to catch early signs, and proposes both the likely cause and the next action with the history behind it.',
        outcome: 'Failures prevented and downtime reduced',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How field data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Chillers ⁠· air compressors ⁠· boilers ⁠· temperature sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'MES ⁠· SCADA ⁠· ERP⁠ ⁠· ⁠SAP ⁠· Modbus TCP⁠/⁠IP ⁠· LoRaWAN ⁠· 4-20mA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology ⁠· AI agent ⁠· rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Equipment dashboard ⁠· temperature excursion alerts ⁠· batch reports', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where PLC or MES already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Replacement justified with evidence',
        icon: 'ph-calculator',
        description: 'Before and after are set out in numbers to justify the spend.',
      },
      {
        title: 'Chiller and compressor tuning',
        icon: 'ph-snowflake',
        description: 'Operating patterns are refined to save thermal and refrigeration energy.',
      },
      {
        title: 'Efficiency compared against output',
        icon: 'ph-chart-line',
        description: 'Energy is weighed batch against batch to improve the cost structure.',
      },
      {
        title: 'Retracing equipment on a quality issue',
        icon: 'ph-magnifying-glass',
        description: 'Equipment state at the moment of the issue is retraced on one timeline.',
      },
      {
        title: 'Less downtime',
        icon: 'ph-pulse',
        description: 'Vibration catches anomalies early, preventing failures.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on food manufacturing sites.',
    systems: ['MES', 'SCADA', 'ERP ⁠· SAP', 'Modbus TCP⁠/⁠IP', 'LoRaWAN', '4-20mA', 'Serial', 'BMS'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'The Refinery team will work with you to find\nthe answer that fits your food operation.',
    buttonLabel: 'Request a demo',
  },
};
