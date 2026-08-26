import type { IndustryData } from './types';

// 영어 산업 데이터. slug는 한국어(energy.ts)와 동일하게 맞춘다.
// ⚠️ 초안(원어민 검수 전).
export const energyEn: IndustryData = {
  slug: 'energy',
  name: 'Energy & Utilities',
  pageTitle: 'Refinery for energy & utilities: unified control, predictive maintenance, automated ESG',
  description:
    'Connect energy data scattered across SCADA, EMS and meters into one structure, let an AI agent catch anomalies first, and automate ESG reporting. Refinery for generation, transmission and utility operations.',
  hero: {
    dark: true,
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: 'Energy · Utilities',
    title: 'Connecting distributed energy sites\ninto a single intelligence',
  },
  challenges: {
    dark: true,
    title: 'Challenges on energy sites',
    subtitle: 'Recurring problems in generation, transmission and utilities.',
    items: [
      {
        title: 'The data sits apart',
        description:
          'Generation, substation and meter data live in SCADA, EMS and billing systems, so seeing the whole picture at once is difficult.',
      },
      {
        title: 'Failures are known too late',
        description:
          'Equipment anomalies are often understood only after they have already caused a stoppage or an incident, leaving little room to act preventively.',
      },
      {
        title: 'ESG and regulatory reports are manual',
        description:
          'Emissions and consumption figures for regulatory reports are gathered by hand, which takes time and leaves room for error.',
      },
      {
        title: 'Real-time response lags',
        description:
          'Adjusting consumption to demand, tariffs and weather requires several screens and several judgments, so the response arrives late.',
      },
    ],
  },
  useCases: {
    title: 'Representative use cases',
    // 큰 카드 왼쪽 칸에서 세 줄로 선다. 개행은 lines() 헬퍼가 <br>로 바꾸고,
    // <mark>는 형광펜이다(한국어판과 같은 자리 — 브랜드와 '하는 일').
    subtitle: 'What <mark>Refinery\nactually does</mark>\non an energy site.',
    layout: 'steps',
    items: [
      {
        title: 'Unified control of distributed assets',
        problem: 'SCADA, EMS and meter data kept apart, with no integrated view',
        approach: 'Site data is connected through an ontology, defining assets, grids and locations in one structure.',
        outcome: 'Generation, transmission and consumption status and alarms live on one screen',
      },
      {
        title: 'Predictive maintenance',
        problem: 'Response only after an anomaly has grown into a stoppage or incident',
        approach: 'Patterns that differ from the norm are learned from time-series data to catch early signs.',
        outcome: 'Fewer unplanned stoppages and less downtime by acting before failure',
      },
      {
        title: 'Energy efficiency and peak optimization',
        problem: 'Waste and peak charges built up by invisible consumption patterns',
        approach: 'Consumption is analyzed by asset and segment, with adjustments proposed against tariff and demand signals.',
        outcome: 'Lower operating cost from reduced peaks and better efficiency',
      },
      {
        title: 'Automated ESG and carbon reporting',
        problem: 'Manual aggregation of emissions and consumption for regulatory reports',
        approach: 'Emissions and consumption metrics are aggregated automatically from site data and turned into reports.',
        outcome: 'Regulatory reports produced automatically, every figure traceable to its source',
      },
      {
        title: 'Real-time anomaly detection and alerts',
        problem: 'Anomalous signals missed, or noticed too late',
        approach: 'An AI agent detects anomalies in live data and proposes both the likely cause and the next action.',
        outcome: 'Early recognition of problems, with an evidence-backed next step in hand',
      },
    ],
  },
  architecture: {
    title: 'How it fits together',
    subtitle: 'How site data gains meaning and turns into a decision.',
    steps: [
      { label: 'Site', detail: 'Generation and substation assets · smart meters · sensors', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: 'Connect', detail: 'SCADA · EMS · Modbus · OPC-⁠UA · DNP3 · IEC 61850', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: 'Ontology · AI agent · rules and automation', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: 'Use', detail: 'Unified dashboard · alerts · ESG reports', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: 'Where SCADA or EMS already exists, Refinery sits on top of it and integrates both ways rather than replacing it. Where none exists, collection is built from the ground up.',
  },
  benefits: {
    title: 'What you gain',
    subtitle: 'Benefits across operations, engineering and management.',
    items: [
      {
        title: 'Early anomaly detection',
        icon: 'ph-pulse',
        description: 'Signals that differ from the norm are caught in real time, reducing stoppage and incident risk.',
      },
      {
        title: 'Unified control',
        icon: 'ph-squares-four',
        description: 'Distributed assets and grids are monitored on one screen and in one structure.',
      },
      {
        title: 'Energy efficiency',
        icon: 'ph-lightning',
        description: 'Waste and peaks are found on the evidence of consumption patterns, cutting operating cost.',
      },
      {
        title: 'ESG automation',
        icon: 'ph-leaf',
        description: 'Emissions and consumption reports are aggregated automatically, with sources traceable.',
      },
      {
        title: 'Site security',
        icon: 'ph-shield-check',
        description: 'With on-premises deployment, data never leaves your network and the OT⁠/⁠IT boundary stays protected.',
      },
      {
        title: 'Integrate or build new',
        icon: 'ph-stack',
        description: 'Where legacy SCADA, EMS or ERP exists, Refinery layers on top and integrates both ways. Where none exists, it is built from scratch.',
      },
    ],
  },
  integrations: {
    title: 'Systems we connect to',
    subtitle: 'The systems and protocols commonly used on energy sites.',
    systems: ['SCADA', 'EMS', 'Smart meters · AMI', 'Modbus', 'OPC-⁠UA', 'DNP3', 'IEC 61850', 'ERP'],
    note: 'Systems not listed here can still be connected over standard protocols and APIs. Get in touch and we will walk through it.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: 'Let’s find the answer that fits\nyour energy operation, together.',
    buttonLabel: 'Request a demo',
  },
};
