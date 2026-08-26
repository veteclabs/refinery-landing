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
    image: { src: '/img_login-bg.webp', alt: '', width: 3840, height: 2160 },
    imagePosition: 'center 100%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Chemicals · Materials',
    title: 'Continuous reactions and heat,\nunder precise control',
  },
  challenges: {
    dark: true,
    title: 'Challenges on chemical sites',
    subtitle: 'The problems that come up again and again where continuous reactions and heat-based equipment run.',
    items: [
      {
        title: 'Small swings become large losses',
        description:
          'A slight wobble in temperature, pressure or flow carries straight through to product quality and production stability.',
      },
      {
        title: 'Utilities are counted separately',
        description:
          'Electricity, LNG, steam and water are each tallied on their own, so where the loss sits is hard to see at once.',
      },
      {
        title: 'Air-fuel ratio is set by feel',
        description:
          'When a thermal boiler drifts off its optimal air-fuel ratio, how much fuel is being wasted never surfaces.',
      },
      {
        title: 'Carbon reporting is manual',
        description:
          'Emissions figures and regulatory reports are gathered by hand, which takes time and leaves room for error.',
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
        title: 'Reactor load against energy input',
        problem: 'Energy input drifting out of step with actual load',
        approach: 'Reaction load and real energy input are placed side by side to pin the deviating segment.',
        outcome: 'Steadier reactions and energy-intensive assets identified',
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
        title: 'Reaction stability',
        icon: 'ph-pulse',
        description: 'Swings in process variables are caught first, cutting the loss they carry.',
      },
      {
        title: 'Utilities in one place',
        icon: 'ph-squares-four',
        description: 'Electricity, LNG, steam and water are watched on a single screen.',
      },
      {
        title: 'Combustion efficiency',
        icon: 'ph-flame',
        description: 'The air-fuel ratio is held at its optimum, cutting fuel waste.',
      },
      {
        title: 'Carbon compliance',
        icon: 'ph-leaf',
        description: 'Emissions are aggregated automatically, with sources traceable.',
      },
      {
        title: 'Site security',
        icon: 'ph-shield-check',
        description: 'With on-premises deployment, data never leaves your network and the OT⁠/⁠IT boundary stays protected.',
      },
      {
        title: 'Integrate or build new',
        icon: 'ph-stack',
        description: 'Where legacy DCS, FEMS or ERP exists, Refinery layers on top and integrates both ways. Where none exists, it is built from scratch.',
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
