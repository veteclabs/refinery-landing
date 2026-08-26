import type { IndustryData } from './types';

export const food: IndustryData = {
  slug: 'food',
  name: '식품 · 음료',
  pageTitle: '식품 · 음료를 위한 Refinery: 냉열 설비 효율 · 품질 온도 감시 · 배치별 원단위 관리',
  description:
    '냉동기 · 공기압축기 · 보일러의 운전 상태와 생산 데이터를 하나의 구조로 연결하고, AI 에이전트가 품질 온도 이탈을 먼저 감지합니다. 식품 · 음료 제조 현장을 위한 Refinery.',
  hero: {
    dark: true,
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '식품 · 음료',
    title: '설비 효율로 품질과 원가를\n동시에 관리합니다',
  },
  challenges: {
    dark: true,
    title: '식품 제조 현장의 문제',
    subtitle: '원료 투입부터 가공 · 포장 · 보관까지 이어지는 현장에서 반복되는 문제입니다.',
    items: [
      {
        title: '냉열 설비 효율이 조용히 떨어진다',
        description:
          '냉동 · 냉장 설비의 성능이 서서히 나빠져도 <br>어느 구간부터 떨어졌는지 드러나지 않습니다.',
      },
      {
        title: '품질 온도 이탈을 뒤늦게 안다',
        description:
          '보관 · 이송 구간의 온도가 기준을 벗어나도 <br>제품이 나온 뒤에야 확인됩니다.',
      },
      {
        title: '배치마다 에너지 사용이 다르다',
        description:
          '같은 제품인데 배치별 에너지 사용이 갈리고 <br>비교할 기준이 없습니다.',
      },
      {
        title: '노후 설비 교체를 판단할 근거가 없다',
        description:
          '교체가 필요한 건 알지만 얼마나 아낄 수 있는지 <br>숫자로 보여줄 자료가 없습니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '식품 제조 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '냉동기 · 압축기 운전 패턴 분석',
        problem: '서서히 떨어져도 드러나지 않는 냉열 설비 효율',
        approach: '전력 소비와 운전 패턴을 쌓아 효율이 꺾이는 구간을 짚어냅니다.',
        outcome: '설비 효율 향상과 에너지 비용 절감',
      },
      {
        title: '품질 온도 이탈 실시간 감시',
        problem: '제품이 나온 뒤에야 확인되는 온도 이탈',
        approach: '보관 · 이송 구간의 온도를 실시간으로 읽어 기준을 벗어나면 즉시 알립니다.',
        outcome: '품질 안정성 확보와 손실 최소화',
      },
      {
        title: '배치별 에너지 원단위 관리',
        problem: '비교할 기준이 없는 배치별 에너지 편차',
        approach: '생산 실적과 에너지 사용을 연결해 배치 · 제품별 원단위를 자동 산출합니다.',
        outcome: '원가 구조 개선과 공정 효율 비교',
      },
      {
        title: '노후 설비 교체 전후 시뮬레이션',
        problem: '숫자로 보여줄 수 없는 교체 효과',
        approach: '현재 운전 데이터를 기준으로 교체 후 에너지 사용을 추정해 나란히 놓습니다.',
        outcome: '투자 타당성 검증과 교체 효과 정량화',
      },
      {
        title: '전력 · LNG · 스팀 · 수도 통합 감시',
        problem: '각각 따로 집계되는 다중 에너지원',
        approach: '에너지원을 하나의 구조로 정의해 설비 · 공정별 사용을 같은 화면에 세웁니다.',
        outcome: '에너지원별 사용 패턴 가시화',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '냉동기 · 공기압축기 · 보일러 · 온도 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'PLC · SCADA · MES · FEMS · Modbus · OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '설비 대시보드 · 온도 이탈 알람 · 배치별 리포트', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 PLC⁠/⁠MES가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '냉열 효율',
        icon: 'ph-snowflake',
        description: '냉동기 운전을 최적으로 맞춰 \n냉열 에너지를 아낍니다.',
      },
      {
        title: '품질 온도 감시',
        icon: 'ph-thermometer',
        description: '이탈 구간을 실시간으로 잡아 \n손실을 막습니다.',
      },
      {
        title: '배치별 원단위',
        icon: 'ph-chart-line',
        description: '배치마다 에너지를 비교해 \n원가 구조를 개선합니다.',
      },
      {
        title: '투자 근거',
        icon: 'ph-calculator',
        description: '교체 전후를 숫자로 세워 \n타당성을 검증합니다.',
      },
      {
        title: '현장 보안',
        icon: 'ph-shield-check',
        description: '온프레미스 배포 시 데이터가 사내를 벗어나지 않고, OT⁠/⁠IT 경계를 보호합니다.',
      },
      {
        title: '통합 또는 신규 구축',
        icon: 'ph-stack',
        description: '레거시 PLC⁠/⁠MES⁠/⁠ERP가 있으면 그 위에 얹어 양방향 통합하고, 없으면 처음부터 새로 구축합니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '식품 제조 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['PLC', 'SCADA', 'MES', 'FEMS', 'Modbus', 'OPC-⁠UA', 'BACnet', 'ERP'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '식품 제조 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
