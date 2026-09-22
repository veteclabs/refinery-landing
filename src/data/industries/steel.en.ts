import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(steel.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const steelEn: IndustryData = {
  slug: 'steel',
  name: 'Steel & Materials',
  pageTitle: 'Refinery for steel & materials: heat-treatment quality, peak load control, compressed air optimization',
  description:
    'Connect heat-treatment temperature, cooling curves, compressed air and peak demand into one structure, and let an AI agent trace the cause of quality variance. Refinery for steel, non-ferrous and materials coating operations.',
  hero: {
    dark: true,
    image: { src: '/industries/steel-hero.webp', alt: '', width: 1920, height: 1280 },
    // 세로 초점. 공통값 45%에서는 밝은 시트 띠가 대제목 줄을 가로지른다.
    // 10%로 낮추면 띠가 제목 아래로 내려가고 압연 롤 구조가 위쪽에 들어온다
    // (이동 여유 387px 중 135px).
    imagePosition: 'center 10%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Steel ⁠· Materials',
    title: 'Material quality and energy\nefficiency, secured together',
  },
  challenges: {
    dark: true,
    title: 'Challenges on steel sites',
    subtitle: 'Recurring problems in heat treatment, forming and coating.',
    items: [
      {
        title: 'Small process shifts decide quality',
        description:
          'Heat-treatment furnaces, compressed air, cooling water and forming equipment run continuously, and a slight difference in conditions stays in the product.',
      },
      {
        title: 'Heat treatment needs stability and energy control together',
        description:
          'Temperature, hold time and cooling conditions set the material properties, so getting only one of them right will not reproduce the result.',
      },
      {
        title: 'Complex energy flow, frequent peaks',
        description:
          'Energy is scattered across processes while high-temperature, high-power equipment runs together, making both over-consuming segments and peak demand hard to pin down.',
      },
    ],
  },
  useCases: {
    title: 'How the problems are solved',
    subtitle: 'What <mark><span translate="no">Refinery</span>\nactually does</mark>\non a steel site.',
    layout: 'steps',
    items: [
      {
        title: 'Peak demand monitoring and target-based load control',
        problem: 'Peaks driven up by high-power equipment running together',
        approach: 'A target demand is set and peak usage is held inside it, with an alert raised before the target is exceeded.',
        outcome: 'Lower electricity charges and reduced peak risk',
      },
      {
        title: 'Demand-based compressed air control and monitoring',
        problem: 'Compressed air equipment running hard regardless of actual demand',
        approach: 'Power draw, header flow, temperature and humidity are measured together so supply is controlled to match demand.',
        outcome: 'Lower energy use and longer equipment life',
      },
      {
        title: 'Heat-treatment temperature and time analysis',
        problem: 'Process deviations confirmed only after the piece comes out of the furnace',
        approach: 'Heat-treatment furnace temperature, hold time and cooling curves are overlaid batch by batch and compared with the normal pattern.',
        outcome: 'Steadier material quality',
      },
      {
        title: 'Energy flow visualized by process',
        problem: 'No visibility into which processes are eating up the energy',
        approach: 'Processes and assets are connected through an ontology so energy flow gathers into one structure, and use by process can be compared on equal terms.',
        outcome: 'Over-consuming segments identified and process efficiency improved',
      },
      {
        title: 'Remote cooling water control and monitoring',
        problem: 'Cooling water equipment that has to be checked in person on site',
        approach: 'Cooling water temperature, flow and pump state are monitored remotely, and any departure from the band is raised at once.',
        outcome: 'Steadier equipment operation',
      },
      {
        title: 'Vibration-based equipment monitoring',
        problem: 'Rotating-equipment anomalies that surface only after a stop',
        approach: 'An AI agent reads anomalies in vibration trends to catch early signs, and proposes both the likely cause and the next action with the history behind it.',
        outcome: 'Failures prevented and maintenance made more efficient',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How field data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Heat-treatment furnaces ⁠· compressed air ⁠· cooling water ⁠· forming equipment sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'SCADA ⁠· PLC ⁠· FEMS ⁠· Modbus TCP ⁠· CAN ⁠· LTE-M', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology ⁠· AI agent ⁠· rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Process dashboard ⁠· peak alerts ⁠· quality history', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where PLC or FEMS already exists, a layer sits on top of it and integrates bidirectionally rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Steadier heat-treatment quality',
        icon: 'ph-thermometer',
        description: 'Temperature patterns are recorded batch by batch so the same result is reproduced.',
      },
      {
        title: 'Compressed air matched to demand',
        icon: 'ph-wind',
        description: 'Only what is needed is supplied, cutting waste and leaks.',
      },
      {
        title: 'Peak demand caught early',
        icon: 'ph-lightning',
        description: 'Load is lowered before peak demand is reached.',
      },
      {
        title: 'Energy variance by process',
        icon: 'ph-chart-line',
        description: 'Energy is split process by process to pin over-consuming segments.',
      },
      {
        title: 'Failures prevented',
        icon: 'ph-pulse',
        description: 'Vibration catches anomalies early, making maintenance more efficient.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on steel sites.',
    systems: ['SCADA', 'PLC', 'FEMS', 'MES', 'Modbus TCP⁠/⁠IP', 'CAN', 'OPC-⁠UA', 'LTE-M'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'The Refinery team will work with you to find\nthe answer that fits your steel operation.',
    buttonLabel: 'Request a demo',
  },
};
