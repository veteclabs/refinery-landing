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
    image: { src: '/img_login-bg.webp', alt: '', width: 3840, height: 2160 },
    imagePosition: 'center 100%',
    icon: '/industry-09.svg',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Food · Beverage',
    title: 'Equipment efficiency that holds\nquality and cost at once',
  },
  challenges: {
    dark: true,
    title: 'Challenges on food manufacturing sites',
    subtitle: 'The problems that come up again and again from raw material intake through processing, packaging and storage.',
    items: [
      {
        title: 'Refrigeration efficiency slips quietly',
        description:
          'Chiller and cold storage performance degrades gradually, and which segment started slipping never surfaces.',
      },
      {
        title: 'Temperature excursions are noticed late',
        description:
          'When storage or transfer leaves its band, it is confirmed only after the product is out.',
      },
      {
        title: 'Energy varies batch to batch',
        description:
          'The same product draws different energy from batch to batch, with no baseline for comparison.',
      },
      {
        title: 'No basis for replacing ageing equipment',
        description:
          'The need is clear, but there is nothing on hand to show in numbers how much it would save.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non a food manufacturing site.',
    layout: 'steps',
    items: [
      {
        title: 'Chiller and compressor operating pattern analysis',
        problem: 'Refrigeration efficiency slipping without ever surfacing',
        approach: 'Power consumption and operating patterns are stacked to locate where efficiency bends.',
        outcome: 'Better equipment efficiency and lower energy cost',
      },
      {
        title: 'Live quality temperature monitoring',
        problem: 'Excursions confirmed only after the product is out',
        approach: 'Storage and transfer temperatures are read live and raised the moment they leave the band.',
        outcome: 'Steadier quality and minimal loss',
      },
      {
        title: 'Energy intensity by batch',
        problem: 'Batch-to-batch variance with no baseline to compare',
        approach: 'Production records and energy use are linked to derive intensity by batch and product automatically.',
        outcome: 'Better cost structure and comparable process efficiency',
      },
      {
        title: 'Before and after simulation for equipment replacement',
        problem: 'Replacement benefit that cannot be shown in numbers',
        approach: 'Post-replacement energy use is estimated from current operating data and placed side by side.',
        outcome: 'Investment case verified and replacement benefit quantified',
      },
      {
        title: 'Unified electricity, LNG, steam and water monitoring',
        problem: 'Utilities tallied separately, each on its own',
        approach: 'Energy sources are defined in one structure so use by asset and process lands on the same screen.',
        outcome: 'Usage patterns made visible by energy source',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Chillers · air compressors · boilers · temperature sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'PLC · SCADA · MES · FEMS · Modbus · OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Equipment dashboard · excursion alerts · batch reports', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where PLC or MES already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Refrigeration efficiency',
        icon: 'ph-snowflake',
        description: 'Chiller operation is tuned to its optimum, saving cooling energy.',
      },
      {
        title: 'Quality temperature monitoring',
        icon: 'ph-thermometer',
        description: 'Excursions are caught live, before they turn into loss.',
      },
      {
        title: 'Energy intensity by batch',
        icon: 'ph-chart-line',
        description: 'Batches are compared on energy, improving the cost structure.',
      },
      {
        title: 'Evidence for investment',
        icon: 'ph-calculator',
        description: 'Before and after are set out in numbers, verifying the case.',
      },
      {
        title: 'Site security',
        icon: 'ph-shield-check',
        description: 'With on-premises deployment, data never leaves your network and the OT⁠/⁠IT boundary stays protected.',
      },
      {
        title: 'Integrate or build new',
        icon: 'ph-stack',
        description: 'Where legacy PLC, MES or ERP exists, Refinery layers on top and integrates both ways. Where none exists, it is built from scratch.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on food manufacturing sites.',
    systems: ['PLC', 'SCADA', 'MES', 'FEMS', 'Modbus', 'OPC-⁠UA', 'BACnet', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour food operation, together.',
    buttonLabel: 'Request a demo',
  },
};
