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
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Machinery · Plant',
    title: 'Large equipment and process,\ncontrolled together in real time',
  },
  challenges: {
    dark: true,
    title: 'Challenges on plant sites',
    subtitle: 'Recurring problems where large equipment runs non-stop.',
    items: [
      {
        title: 'Several energy sources run at once',
        description:
          'Compressed air, electricity, cooling and HVAC all run on one site, and where the consumption lands never becomes clear.',
      },
      {
        title: 'Equipment is tightly coupled',
        description:
          'A fault in one machine carries straight through to the efficiency of the whole process.',
      },
      {
        title: 'Non-stop running with precise conditions',
        description:
          'The plant cannot pause while process conditions must still hold, leaving no obvious moment to intervene.',
      },
      {
        title: 'Ageing, cost and rules arrive at once',
        description:
          'Ageing equipment, rising energy cost and carbon compliance run in parallel, so equipment and energy have to be seen as one system.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non a plant site.',
    layout: 'steps',
    items: [
      {
        title: 'Demand-based compressed air control and monitoring',
        problem: 'Shared utilities running on when demand drops',
        approach: 'Real demand is read and discharge pressure and unit staging are matched to what is needed.',
        outcome: 'Lower energy use and longer equipment life',
      },
      {
        title: 'Live power analysis by asset',
        problem: 'Energy use grouped in clusters and impossible to separate',
        approach: 'An AI agent watches consumption by asset in real time to catch use that departs from the usual pattern, and proposes both the cause and the next action.',
        outcome: 'Energy-intensive assets identified and operations improved',
      },
      {
        title: 'Enthalpy-based HVAC inverter control',
        problem: 'HVAC running fixed, regardless of outdoor conditions',
        approach: 'Line temperature and humidity are converted to enthalpy, and the HVAC inverter is controlled to hold the target.',
        outcome: 'Steadier process environment and lower cooling energy',
      },
      {
        title: 'Energy intensity tied to output',
        problem: 'No baseline for comparing efficiency against production',
        approach: 'Production records and energy by asset are connected through an ontology into one structure, and intensity by process is derived automatically.',
        outcome: 'Process efficiency made visible and cost structure improved',
      },
      {
        title: 'DC microgrid based equipment control',
        problem: 'Operations tied to a single grid feed',
        approach: 'On-site generation and the grid are read together to distribute power across equipment.',
        outcome: 'Lower fuel cost and steadier energy operations',
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
      { label: 'Connect', detail: 'FEMS · SCADA · PLC · ERP · Modbus · BACnet', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Utility dashboard · intensity reports · emission management', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where FEMS or SCADA already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Demand-based compressed air control',
        icon: 'ph-wind',
        description: 'Shared utilities run only as far as real demand asks.',
      },
      {
        title: 'Savings from HVAC inverter control',
        icon: 'ph-thermometer',
        description: 'Load follows enthalpy, cutting cooling energy.',
      },
      {
        title: 'Condition-based maintenance',
        icon: 'ph-pulse',
        description: 'Condition data sets the moment to intervene.',
      },
      {
        title: 'Efficiency analysis tied to output',
        icon: 'ph-chart-line',
        description: 'Output and energy are joined to compare efficiency by process.',
      },
      {
        title: 'Lower fuel cost',
        icon: 'ph-battery-charging',
        description: 'A DC microgrid distributes power and steadies operations at the same time.',
      },
      {
        title: 'Carbon compliance',
        icon: 'ph-leaf',
        description: 'Emissions are derived per process so hot spots come first.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on machinery and plant sites.',
    systems: ['FEMS', 'SCADA', 'PLC', 'ERP', 'Modbus', 'BACnet', 'TCP⁠/⁠IP', 'OPC-⁠UA'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour plant operation, together.',
    buttonLabel: 'Request a demo',
  },
};
