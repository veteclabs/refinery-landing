import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(steel.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const steelEn: IndustryData = {
  slug: 'steel',
  name: 'Materials & Steel',
  pageTitle: 'Refinery for materials & steel: heat-treatment quality, peak load control, compressed air optimization',
  description:
    'Connect heat-treatment temperature, cooling curves, compressed air and peak demand into one structure, and let an AI agent trace the cause of quality variance. Refinery for steel, non-ferrous and materials coating operations.',
  hero: {
    dark: true,
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Materials · Steel',
    title: 'Material quality and energy\nefficiency, secured together',
  },
  challenges: {
    dark: true,
    title: 'Challenges on materials sites',
    subtitle: 'Recurring problems in heat treatment, forming and coating.',
    items: [
      {
        title: 'Heat-treatment conditions decide quality',
        description:
          'Small differences in temperature, hold time and cooling change the material properties outright.',
      },
      {
        title: 'Cooling curve deviations surface late',
        description:
          'When the cooling segment leaves its band, it is often confirmed only once the finished piece is out.',
      },
      {
        title: 'Peak demand spikes often',
        description:
          'High-temperature, high-power equipment running together drives peak demand up and the bill with it.',
      },
      {
        title: 'Compressed air leaks and overruns',
        description:
          'Some segments run regardless of real demand, with no evidence at hand to locate the leak.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non a materials site.',
    layout: 'steps',
    items: [
      {
        title: 'Heat-treatment temperature and time analysis',
        problem: 'Process deviations confirmed only once the piece is out',
        approach: 'Furnace temperature, hold time and cooling curves are stacked batch by batch and compared with the normal pattern.',
        outcome: 'Steadier material quality and repeatable results',
      },
      {
        title: 'Peak demand monitoring and load control',
        problem: 'Peaks driven up by high-power equipment running together',
        approach: 'A target demand is set and live load is tracked so it can be trimmed before the target is reached.',
        outcome: 'Lower electricity charges and reduced peak risk',
      },
      {
        title: 'Demand-based compressed air control',
        problem: 'Compressed air equipment overrunning against real demand',
        approach: 'Demand patterns are read to trim discharge pressure and unit staging, and leaking segments are located.',
        outcome: 'Lower energy use and longer equipment life',
      },
      {
        title: 'Energy flow visualized by process',
        problem: 'No visibility into which process consumes the energy',
        approach: 'Energy is metered separately by process and lined up on equal terms.',
        outcome: 'Over-consuming segments identified and process efficiency improved',
      },
      {
        title: 'Remote cooling water control and monitoring',
        problem: 'Cooling water equipment that has to be checked on foot',
        approach: 'Cooling water temperature, flow and pump state are monitored remotely and controlled to condition.',
        outcome: 'Steadier equipment operation',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Heat-treatment furnaces · compressed air · cooling water · forming equipment sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'PLC · SCADA · FEMS · Modbus · OPC-⁠UA · PROFIBUS', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Process dashboard · peak alerts · quality history', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where PLC or FEMS already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Repeatable quality',
        icon: 'ph-thermometer',
        description: 'Heat-treatment conditions are kept batch by batch so the same result repeats.',
      },
      {
        title: 'Peak control',
        icon: 'ph-lightning',
        description: 'Load is trimmed before peak demand is reached.',
      },
      {
        title: 'Compressed air savings',
        icon: 'ph-wind',
        description: 'Equipment runs to demand and leaking segments are located.',
      },
      {
        title: 'Equipment condition monitoring',
        icon: 'ph-pulse',
        description: 'Vibration catches faults early, making maintenance more efficient.',
      },
      {
        title: 'Site security',
        icon: 'ph-shield-check',
        description: 'With on-premises deployment, data never leaves your network and the OT⁠/⁠IT boundary stays protected.',
      },
      {
        title: 'Integrate or build new',
        icon: 'ph-stack',
        description: 'Where legacy PLC, FEMS or ERP exists, Refinery layers on top and integrates both ways. Where none exists, it is built from scratch.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on materials sites.',
    systems: ['PLC', 'SCADA', 'FEMS', 'MES', 'Modbus', 'OPC-⁠UA', 'PROFIBUS', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour materials operation, together.',
    buttonLabel: 'Request a demo',
  },
};
