import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(automotive.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const automotiveEn: IndustryData = {
  slug: 'automotive',
  name: 'Automotive & Mobility',
  pageTitle: 'Refinery for automotive & mobility: line bottlenecks, rotating-equipment PdM, quality variance',
  description:
    'Connect press, body, paint and assembly into one structure, and let an AI agent catch rotating-equipment anomalies and quality variance first. Refinery for automotive and mobility manufacturing.',
  hero: {
    dark: true,
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Automotive · Mobility',
    title: 'Holding equipment flow and\nquality steady, with data',
  },
  challenges: {
    dark: true,
    title: 'Challenges on automotive sites',
    subtitle: 'Recurring problems across press, body, paint and assembly.',
    items: [
      {
        title: 'Bottlenecks between coupled processes',
        description:
          'Press, body, paint and assembly run end to end, so one slow segment pushes the whole line back.',
      },
      {
        title: 'Rotating-equipment fault patterns',
        description:
          'The early signs of a motor or gearbox fault sit in vibration and current, but they are read only after the stoppage.',
      },
      {
        title: 'Energy variance between lines',
        description:
          'The same process draws different power on different lines, with no evidence to explain the gap.',
      },
      {
        title: 'Equipment history when quality slips',
        description:
          'Equipment state and ambient conditions at the moment of a defect are recorded separately, so retracing them is hard.',
      },
      {
        title: 'Energy reallocation as output shifts',
        description:
          'Output moves but the energy split stays fixed, and the spare capacity turns straight into cost.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non an automotive site.',
    layout: 'steps',
    items: [
      {
        title: 'Vibration-based predictive maintenance',
        problem: 'Rotating-equipment faults confirmed only after a stoppage',
        approach: 'Patterns that differ from the norm are learned from vibration and current time-series to catch early signs.',
        outcome: 'Less equipment downtime and steadier production',
      },
      {
        title: 'Power usage patterns by line',
        problem: 'Different power draw line to line, with no way to explain it',
        approach: 'Lines, processes and assets are defined in one structure so power use can be compared on equal terms.',
        outcome: 'Lower energy cost and inefficient processes identified',
      },
      {
        title: 'Demand-based compressed air control',
        problem: 'Air compressors running regardless of actual demand',
        approach: 'Real site demand is read and discharge pressure and unit staging are trimmed to what is needed.',
        outcome: 'Minimal energy waste and better operating efficiency',
      },
      {
        title: 'Energy intensity tied to output',
        problem: 'No structure for seeing efficiency against production',
        approach: 'Production records and energy use are linked to derive intensity by line and model automatically.',
        outcome: 'Efficiency made visible against output, cost structure improved',
      },
      {
        title: 'Ambient conditions and quality impact',
        problem: 'Causes of quality issues recorded apart and hard to retrace',
        approach: 'Temperature, humidity, equipment state and quality results are joined on one timeline to trace the cause.',
        outcome: 'Less quality variance and better process conditions',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Press, paint and assembly equipment · motors · vibration sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'MES · PLC · Modbus · OPC-⁠UA · EtherNet⁠/⁠IP · PROFINET', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Line dashboard · maintenance alerts · quality traceability', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where MES or PLC already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Less equipment downtime',
        icon: 'ph-pulse',
        description: 'Faults are caught early in vibration data, keeping production steady.',
      },
      {
        title: 'Lower energy cost',
        icon: 'ph-lightning',
        description: 'Power patterns are compared line by line to identify inefficient processes.',
      },
      {
        title: 'Better cost structure',
        icon: 'ph-chart-line',
        description: 'Efficiency against output is put into numbers.',
      },
      {
        title: 'Less quality variance',
        icon: 'ph-target',
        description: 'Ambient conditions and quality results are joined to tune process settings.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on automotive sites.',
    systems: ['MES', 'PLC', 'SCADA', 'Modbus', 'OPC-⁠UA', 'EtherNet⁠/⁠IP', 'PROFINET', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour automotive operation, together.',
    buttonLabel: 'Request a demo',
  },
};
