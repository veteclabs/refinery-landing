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
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Chemicals · Materials',
    title: 'Continuous reactions and heat,\nunder precise control',
  },
  challenges: {
    dark: true,
    title: 'Challenges on chemical sites',
    subtitle: 'Recurring problems in continuous reaction operations.',
    items: [
      {
        title: 'Thermal fluid circulation efficiency',
        description:
          'Loss differs along every circulation path, and where it leaks never surfaces.',
      },
      {
        title: 'Combustion air-fuel ratio',
        description:
          'When a boiler drifts off its optimal ratio, how much fuel is wasted stays invisible.',
      },
      {
        title: 'Load variance between reactors',
        description:
          'The same reaction carries different load reactor to reactor, with no baseline to compare.',
      },
      {
        title: 'Energy input against reaction load',
        description:
          'Input drifts out of step with actual load, and it is confirmed only after the fact.',
      },
      {
        title: 'Emission anomalies',
        description:
          'Emissions move away from the norm, but manual aggregation delays noticing it.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non a chemical site.',
    layout: 'steps',
    items: [
      {
        title: 'Unified electricity, LNG, steam and water monitoring',
        problem: 'Utilities tallied separately, each on its own',
        approach: 'Energy sources are defined in one structure so use by asset and process lands on the same screen.',
        outcome: 'Usage patterns made visible by energy source',
      },
      {
        title: 'Energy targets and overrun alerts',
        problem: 'Over-consumption confirmed only after the fact',
        approach: 'Targets are set by asset and process, and overrun is raised in real time.',
        outcome: 'Over-consumption prevented and immediate response in place',
      },
      {
        title: 'Air-fuel ratio based blower inverter control',
        problem: 'Thermal boiler air-fuel ratio set by feel',
        approach: 'Combustion data is read to derive the optimal ratio and the blower inverter is adjusted automatically.',
        outcome: 'Better combustion efficiency and lower energy cost',
      },
      {
        title: 'Energy use analysis by asset',
        problem: 'No way to tell which asset consumes the energy',
        approach: 'Energy is metered separately by asset and compared on equal terms.',
        outcome: 'Energy-intensive assets identified',
      },
      {
        title: 'Air compressor state and operating factors',
        problem: 'Compressor faults that surface only after a stop',
        approach: 'Compressor state and operating factors are tracked together to spot flows that differ from the norm.',
        outcome: 'Steadier equipment operation and more efficient maintenance',
      },
      {
        title: 'Unified greenhouse gas accounting',
        problem: 'Manual aggregation of emissions and regulatory reports',
        approach: 'Emission metrics are aggregated automatically from site data into reports traceable to their source.',
        outcome: 'Carbon compliance and energy performance management',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Reactors · thermal boilers · blowers · compressor sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'DCS · PLC · FEMS · Modbus · OPC-⁠UA · PROFIBUS', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Energy dashboard · target alerts · emission reports', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where DCS or FEMS already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
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
        description: 'Flows that differ from the norm are noticed first.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on chemical sites.',
    systems: ['DCS', 'PLC', 'SCADA', 'FEMS', 'Modbus', 'OPC-⁠UA', 'PROFIBUS', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour chemical operation, together.',
    buttonLabel: 'Request a demo',
  },
};
