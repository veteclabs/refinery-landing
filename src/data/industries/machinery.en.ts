import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(machinery.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const machineryEn: IndustryData = {
  slug: 'machinery',
  name: 'Machinery & Plant',
  pageTitle: 'Refinery for machinery & plant: utility optimization, energy intensity, carbon compliance',
  description:
    'Connect shared utilities such as compressed air, HVAC and cooling into one structure, and let an AI agent locate where the energy concentrates. Refinery for machinery and plant operations built on large equipment.',
  hero: {
    dark: true,
    image: { src: '/img_login-bg.webp', alt: '', width: 3840, height: 2160 },
    imagePosition: 'center 100%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Machinery · Plant',
    title: 'Large equipment and process,\ncontrolled together in real time',
  },
  challenges: {
    dark: true,
    title: 'Challenges on machinery and plant sites',
    subtitle: 'The problems that come up again and again where large equipment runs around the clock.',
    items: [
      {
        title: 'Equipment pushes on equipment',
        description:
          'Compressed air, HVAC and cooling run entangled, so trimming one place lands as load somewhere else.',
      },
      {
        title: 'Supply drifts from demand',
        description:
          'Shared utilities keep running when real demand drops, and the spare capacity turns straight into cost.',
      },
      {
        title: 'Energy-heavy segments stay hidden',
        description:
          'Equipment is grouped in clusters, so which segment is drawing the energy is hard to separate out.',
      },
      {
        title: 'Carbon hot spots are invisible',
        description:
          'Emissions are not split by process, leaving no basis for deciding where to start.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non a plant site.',
    layout: 'steps',
    items: [
      {
        title: 'Demand-based compressed air control',
        problem: 'Shared utilities running on when demand drops',
        approach: 'Real demand is read and discharge pressure and unit staging are matched to what is needed.',
        outcome: 'Lower energy use and longer equipment life',
      },
      {
        title: 'Live power analysis by asset',
        problem: 'Energy use grouped in clusters and impossible to separate',
        approach: 'Power is metered separately by asset and process, then compared on equal terms.',
        outcome: 'Energy-intensive assets identified and operations improved',
      },
      {
        title: 'Enthalpy-based HVAC inverter control',
        problem: 'HVAC running fixed, regardless of outdoor conditions',
        approach: 'Outdoor and indoor enthalpy are read together to adjust airflow and cooling load to condition.',
        outcome: 'Steadier process environment and lower cooling energy',
      },
      {
        title: 'Energy intensity tied to output',
        problem: 'No baseline for comparing efficiency against production',
        approach: 'Production records and energy use are linked to derive intensity by process automatically.',
        outcome: 'Process efficiency made visible and cost structure improved',
      },
      {
        title: 'Unified carbon emission monitoring',
        problem: 'Emissions never broken out by process',
        approach: 'Emissions are derived per process from energy data and hot spots are marked.',
        outcome: 'Carbon compliance and energy performance management',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Air compressors · HVAC · cooling equipment · large machinery sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'PLC · SCADA · BEMS · FEMS · Modbus · OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Utility dashboard · intensity reports · emission management', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where PLC or BEMS already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Run to demand',
        icon: 'ph-wind',
        description: 'Shared utilities run only as far as real demand asks.',
      },
      {
        title: 'Utilities in one place',
        icon: 'ph-squares-four',
        description: 'Compressed air, HVAC and cooling are watched on a single screen.',
      },
      {
        title: 'Energy intensity',
        icon: 'ph-chart-line',
        description: 'Output and energy are linked so efficiency can be compared process by process.',
      },
      {
        title: 'Carbon hot spots',
        icon: 'ph-leaf',
        description: 'Emissions are split by process so the place to start becomes obvious.',
      },
      {
        title: 'Site security',
        icon: 'ph-shield-check',
        description: 'With on-premises deployment, data never leaves your network and the OT⁠/⁠IT boundary stays protected.',
      },
      {
        title: 'Integrate or build new',
        icon: 'ph-stack',
        description: 'Where legacy PLC, BEMS or ERP exists, Refinery layers on top and integrates both ways. Where none exists, it is built from scratch.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on machinery and plant sites.',
    systems: ['PLC', 'SCADA', 'BEMS', 'FEMS', 'Modbus', 'OPC-⁠UA', 'BACnet', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour plant operation, together.',
    buttonLabel: 'Request a demo',
  },
};
