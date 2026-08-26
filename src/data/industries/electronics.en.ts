import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(electronics.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const electronicsEn: IndustryData = {
  slug: 'electronics',
  name: 'Electronics & Precision',
  pageTitle: 'Refinery for electronics & precision: power quality, uninterrupted operation, microclimate control',
  description:
    'Connect power quality, UPS events, temperature, humidity and equipment alarms into one structure, and let an AI agent flag the risk of a line stop before it happens. Refinery for semiconductor, component and precision equipment manufacturing.',
  hero: {
    dark: true,
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Electronics · Precision',
    title: 'Uninterrupted power and\nmicroclimate, in one structure',
  },
  challenges: {
    dark: true,
    title: 'Challenges on electronics sites',
    subtitle: 'Recurring problems in semiconductor and precision plants.',
    items: [
      {
        title: 'Power quality disturbances',
        description:
          'Equipment is sensitive to power quality, so a single brief disturbance turns directly into scrap and a line stop.',
      },
      {
        title: 'UPS transfer events',
        description:
          'Outage and UPS transfer events are logged apart from equipment history, making the blast radius hard to judge.',
      },
      {
        title: 'Temperature and humidity drift',
        description:
          'Small differences between lines move yield, but which segment drifted stays invisible.',
      },
      {
        title: 'Alarm-dense windows',
        description:
          'When equipment alarms arrive all at once, the one real cause is buried in the rest.',
      },
      {
        title: 'Equipment response against the plan',
        description:
          'Plan and actual operation drift apart and the gap passes unnoticed.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    subtitle: 'What <mark>Refinery\nactually does</mark>\non an electronics site.',
    layout: 'steps',
    items: [
      {
        title: 'Peak demand monitoring and load control',
        problem: 'Peak demand confirmed only once the peak has passed',
        approach: 'Live demand is tracked so load can be trimmed before the peak is reached.',
        outcome: 'Lower electricity charges and reduced peak risk',
      },
      {
        title: 'Power usage patterns by asset',
        problem: 'No way to tell which equipment draws the most power',
        approach: 'Power is metered separately by asset and process, then compared on equal terms.',
        outcome: 'Energy-intensive processes identified',
      },
      {
        title: 'UPS-linked outage detection and alerts',
        problem: 'Outage and UPS transfer events logged apart from equipment history',
        approach: 'Power quality and UPS events are placed on the same timeline as equipment state to pin the blast radius at once.',
        outcome: 'Uninterrupted operation and minimal line stops',
      },
      {
        title: 'Live temperature and humidity monitoring',
        problem: 'Invisible drift between lines',
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
        title: 'Wireless power and environment sensing',
        problem: 'Measurement points that need cabling work to add',
        approach: 'Wireless sensors extend power and environment coverage without new cable runs.',
        outcome: 'Lower build cost and room to scale',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Switchgear · UPS · temperature and humidity · process tool sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'MES · SCADA · BEMS · Modbus · OPC-⁠UA · SECS⁠/⁠GEM', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Power quality dashboard · outage alerts · environment monitoring', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where MES or BEMS already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
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
        title: 'Immediate alerts on equipment faults',
        icon: 'ph-bell-ringing',
        description: 'When a fault appears, the responsible engineer is paged at once.',
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
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on electronics sites.',
    systems: ['MES', 'SCADA', 'BEMS', 'UPS', 'Modbus', 'OPC-⁠UA', 'SECS⁠/⁠GEM', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour precision operation, together.',
    buttonLabel: 'Request a demo',
  },
};
