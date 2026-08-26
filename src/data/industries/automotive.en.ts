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
        title: 'One process stops the whole line',
        description:
          'Processes are coupled end to end, so a single piece of equipment going wrong spreads into a full line stoppage.',
      },
      {
        title: 'Rotating-equipment faults are known too late',
        description:
          'The early signs of a motor or gearbox fault sit in the vibration data, but they are read only after the stoppage.',
      },
      {
        title: 'Energy varies line to line',
        description:
          'The same process draws different power on different lines, with no evidence at hand to explain why.',
      },
      {
        title: 'Quality issues have no traceable cause',
        description:
          'Equipment state and ambient conditions at the moment of a defect are recorded separately, so retracing them is hard.',
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
        problem: 'Motor and rotating-equipment faults confirmed only after a stoppage',
        approach: 'Patterns that differ from the norm are learned from vibration and current time-series to catch early signs.',
        outcome: 'Less equipment downtime and steadier production',
      },
      {
        title: 'Power usage patterns by line',
        problem: 'Different power draw line to line, with no way to explain it',
        approach: 'Lines, processes and assets are defined in one structure so power use can be compared on equal terms.',
        outcome: 'Inefficient processes identified and energy cost reduced',
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
        title: 'Less downtime',
        icon: 'ph-pulse',
        description: 'Rotating-equipment faults are caught early, cutting unplanned stoppages.',
      },
      {
        title: 'Unified line control',
        icon: 'ph-squares-four',
        description: 'The flow from press to assembly is watched on a single screen.',
      },
      {
        title: 'Energy intensity',
        icon: 'ph-lightning',
        description: 'Output and energy are linked so efficiency can be compared line by line.',
      },
      {
        title: 'Quality traceability',
        icon: 'ph-magnifying-glass',
        description: 'Equipment and ambient conditions at the moment of a defect are retraced on one timeline.',
      },
      {
        title: 'Site security',
        icon: 'ph-shield-check',
        description: 'With on-premises deployment, data never leaves your network and the OT⁠/⁠IT boundary stays protected.',
      },
      {
        title: 'Integrate or build new',
        icon: 'ph-stack',
        description: 'Where legacy MES, PLC or ERP exists, Refinery layers on top and integrates both ways. Where none exists, it is built from scratch.',
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
