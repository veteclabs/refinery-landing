import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(electronics.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const electronicsEn: IndustryData = {
  slug: 'electronics',
  name: 'Electronics & Precision',
  pageTitle: 'Refinery for electronics & precision: power quality, uninterrupted operation, microenvironment control',
  description:
    'Connect power quality, UPS events, temperature, humidity and equipment alarms into one structure, and let an AI agent flag the risk of a line stop before it happens. Refinery for semiconductor, component and precision equipment manufacturing.',
  hero: {
    dark: true,
    image: { src: '/industries/electronics-hero.webp', alt: '', width: 1920, height: 1079 },
    // 원본(3500x1477)은 가로가 길어 히어로 상자와 비율이 거의 같았다. 그대로 쓰면
    // 세로 이동 여유가 38px뿐이라 초점을 0%까지 내려도 17px밖에 안 움직였다.
    // 좌우를 436px씩 잘라 2629x1477로 만든 뒤 넣었다 — 여유가 246px이 된다.
    // (transform: scale로 여유를 만드는 길은 접었다. 확대하면 하단 페이드가
    //  히어로 밖에서 끝나 경계가 다시 생긴다 — 1.35배에서 경계 차 1 → 19.)
    imagePosition: 'center 20%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Electronics ⁠· Precision',
    title: 'Uninterrupted power and microenvironment,\nprotected by one system',
  },
  challenges: {
    dark: true,
    title: 'Challenges on electronics sites',
    subtitle: 'Recurring problems in semiconductor, electronic component and precision equipment manufacturing.',
    items: [
      {
        title: 'Equipment reacts to the smallest change',
        description:
          'Production equipment is sensitive to temperature shifts and power quality, so a slight wobble carries straight into the process.',
      },
      {
        title: 'A power outage or equipment anomaly becomes a defect',
        description:
          'A momentary outage or equipment anomaly turns directly into defective product and a line stop.',
      },
      {
        title: 'Operating factors are tangled together',
        description:
          'Peak demand, UPS-backed outage response, temperature, humidity, equipment alarms and now safety and fire systems are all expected to sit in one structure.',
      },
      {
        title: 'High-mix, low-volume production splits the lines',
        description:
          'The finer the lines are divided, the harder process-level energy management and equipment visibility become.',
      },
    ],
  },
  useCases: {
    title: 'How the problems are solved',
    subtitle: 'What <mark><span translate="no">Refinery</span>\nactually does</mark>\non an electronics site.',
    layout: 'steps',
    items: [
      {
        title: 'Live peak demand monitoring and load control',
        problem: 'Peak demand confirmed only once the peak has passed',
        approach: 'Working with a demand controller, load is held inside the target and an alert is raised before the peak is exceeded.',
        outcome: 'Lower electricity charges and reduced peak risk',
      },
      {
        title: 'Power usage patterns by asset',
        problem: 'No way to tell which equipment draws the most power',
        approach: 'Assets and processes are connected through an ontology, so each signal carries which asset it belongs to and what it measures, and power can be compared on equal terms.',
        outcome: 'Energy-intensive processes identified',
      },
      {
        title: 'UPS-linked outage detection and alerts',
        problem: 'Outage and UPS transfer events logged apart from equipment history',
        approach: 'An AI agent reads power quality and UPS events on the same timeline as equipment state, and proposes both the scope of impact and the next action.',
        outcome: 'Uninterrupted operation and minimal line stops',
      },
      {
        title: 'Live temperature, humidity and process heater monitoring',
        problem: 'Invisible temperature and humidity drift between lines',
        approach: 'Process environment is collected segment by segment and any point outside the band is flagged immediately.',
        outcome: 'Steadier process quality',
      },
      {
        title: 'Equipment state against the production plan',
        problem: 'Plan and actual equipment operation drifting apart unnoticed',
        approach: 'Production plans are linked to equipment operation and alarm history to trace response lag.',
        outcome: 'More accurate production forecasting',
      },
      {
        title: 'EHS and fire monitoring in the same alert stream',
        problem: 'Safety systems running apart from equipment monitoring',
        approach: 'EHS and fire detection signals are folded into the same alert structure as equipment alarms.',
        outcome: 'Safety incidents prevented',
      },
      {
        title: 'Wireless sensor deployment for power and environment',
        problem: 'Measurement points that need cabling work to add',
        approach: 'Wireless sensors extend power and environment coverage without new cable runs.',
        outcome: 'Lower build cost and room to scale',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How field data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Switchgear ⁠· UPS ⁠· temperature and humidity ⁠· process tool sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'MES ⁠· SCADA ⁠· UPS ⁠· demand controllers ⁠· Modbus ⁠· OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology ⁠· AI agent ⁠· rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Power quality dashboard ⁠· outage alerts ⁠· environment monitoring', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where MES or SCADA already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Load trimmed before the peak',
        icon: 'ph-lightning',
        description: 'Load is lowered ahead of the peak rather than after it.',
      },
      {
        title: 'Immediate alerts on equipment anomalies',
        icon: 'ph-bell-ringing',
        description: 'When an anomaly appears, the responsible engineer is alerted at once.',
      },
      {
        title: 'Live process environment monitoring',
        icon: 'ph-thermometer',
        description: 'Temperature and humidity are tracked segment by segment in real time.',
      },
      {
        title: 'Operation tracked against the plan',
        icon: 'ph-clipboard-text',
        description: 'Production plan and equipment response are placed side by side.',
      },
      {
        title: 'Safety incidents prevented',
        icon: 'ph-fire-extinguisher',
        description: 'EHS and fire signals join equipment alarms in one alert structure.',
      },
      {
        title: 'Room to scale',
        icon: 'ph-broadcast',
        description: 'Wireless sensors extend coverage without new cable runs.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on electronics sites.',
    systems: ['MES', 'SCADA', 'UPS', 'Demand controllers', 'Modbus', 'Modbus TCP⁠/⁠IP', 'OPC-⁠UA', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'The Refinery team will work with you to find\nthe answer that fits your electronics operation.',
    buttonLabel: 'Request a demo',
  },
};
