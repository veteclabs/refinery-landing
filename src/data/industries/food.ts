import type { IndustryData } from './types';

export const food: IndustryData = {
  slug: 'food',
  name: '식품 · 음료',
  pageTitle: '식품 · 음료를 위한 Refinery: 냉열 설비 효율 · 품질 온도 감시 · 배치별 원단위 관리',
  description:
    '냉동기 · 공기압축기 · 보일러의 운전 상태와 생산 데이터를 하나의 구조로 연결하고, AI 에이전트가 품질 온도 이탈을 먼저 감지합니다. 식품 · 음료 제조 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/industries/food-hero.webp', alt: '', width: 1920, height: 1280 },
    // 세로 초점. 값을 낮추면 사진 위쪽이 보여 이미지가 아래로 내려간다.
    // 15%면 45% 기준보다 116px 아래다(이동 여유 387px).
    // 글자 대비는 9.46:1로 AA 기준의 두 배 위다.
    imagePosition: 'center 15%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '식품 · 음료',
    title: '설비 효율로 품질과 원가를\n동시에 관리합니다',
  },
  challenges: {
    dark: true,
    title: '식품 제조 현장의 문제',
    subtitle: '원료 투입 · 가공 · 포장 · 보관 공정에서 반복되는 문제입니다.',
    items: [
      {
        title: '열 · 냉 설비 효율 저하가 곧 비용이 된다',
        description:
          '공기압축기 · 냉동기 · 보일러 · 스팀 설비 비중이 높아 <br>효율이 떨어지면 비용과 품질 리스크로 바로 이어집니다.',
      },
      {
        title: '생산이 멈추면 손실 규모가 크다',
        description:
          '위생 기준과 품질 규제가 엄격해 <br>한 번의 중단이 큰 손실로 남습니다.',
      },
      {
        title: '배치마다 에너지 사용 패턴이 달라진다',
        description:
          '배치 생산 구조라 생산량이 흔들리면 <br>에너지 사용도 함께 갈립니다.',
      },
      {
        title: '원가 · 탄소 · 노후화가 동시에 온다',
        description:
          '원가 압박과 탄소 규제 대응, 설비 노후화가 <br>같은 시기에 겹치고 있습니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '식품 제조 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '공기압축기 · 냉동기 전력 소비 · 운전 패턴 분석',
        problem: '서서히 떨어져도 드러나지 않는 설비 효율',
        approach: '전력 소비와 운전 패턴을 쌓아 효율이 꺾이는 구간을 짚어냅니다.',
        outcome: '설비 효율 향상과 에너지 비용 절감',
      },
      {
        title: '노후 설비 교체 전 · 후 에너지 시뮬레이션',
        problem: '숫자로 보여줄 수 없는 교체 효과',
        approach: '현재 운전 데이터를 기준으로 교체 후 에너지 사용을 추정해 나란히 놓습니다.',
        outcome: '투자 타당성 검증과 교체 효과 정량화',
      },
      {
        title: '전력 · LNG · 스팀 · 수도 통합 감시',
        problem: '각각 따로 집계되는 다중 에너지원',
        approach: '전력 · LNG · 스팀 · 수도와 설비별 소비를 온톨로지로 연결해 한 구조로 모으고, 공장 전체의 에너지 흐름을 한 화면에서 봅니다.',
        outcome: '에너지원별 사용 패턴 가시화',
      },
      {
        title: '생산량 연계 에너지 원단위 관리',
        problem: '비교할 기준이 없는 배치별 에너지 편차',
        approach: '생산 실적과 에너지 사용을 연결해 배치 · 제품별 원단위를 자동 산출합니다.',
        outcome: '원가 구조 개선과 공정 효율 비교',
      },
      {
        title: '냉동기 효율 분석 · 운전 최적화',
        problem: '기준 없이 계속 도는 냉동기 운전',
        approach: '냉동기 COP를 상시 계산해 효율이 높은 설비부터 선택적으로 운영합니다.',
        outcome: '냉열 에너지 절감과 품질 안정성 확보',
      },
      {
        title: '진동 기반 설비 상태 모니터링',
        problem: '멈춘 뒤에야 드러나는 회전체 이상',
        approach: 'AI 에이전트가 진동 추세에서 이상을 읽어 전조를 일찍 잡고, 원인 추정과 다음 조치를 근거 이력과 함께 제시합니다.',
        outcome: '고장 예방과 다운타임 감소',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '냉동기 · 공기압축기 · 보일러 · 온도 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'MES · SCADA · ERP⁠·⁠SAP · Modbus TCP⁠/⁠IP · LoRaWAN · 4-20mA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
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
        title: '노후 설비 교체 타당성 검증',
        icon: 'ph-calculator',
        description: '교체 전후를 숫자로 세워 \n투자 근거를 만듭니다.',
      },
      {
        title: '냉동기 · 압축기 운전 최적화',
        icon: 'ph-snowflake',
        description: '운전 패턴을 다듬어 \n냉열 에너지를 아낍니다.',
      },
      {
        title: '생산량 대비 효율 비교',
        icon: 'ph-chart-line',
        description: '배치마다 에너지를 견줘 \n원가 구조를 개선합니다.',
      },
      {
        title: '품질 이상 시 설비 상태 역추적',
        icon: 'ph-magnifying-glass',
        description: '이상이 난 시점의 설비를 \n시간축으로 되짚습니다.',
      },
      {
        title: '다운타임 감소',
        icon: 'ph-pulse',
        description: '진동에서 이상을 미리 잡아 \n고장을 예방합니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '식품 제조 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['MES', 'SCADA', 'ERP · SAP', 'Modbus TCP⁠/⁠IP', 'LoRaWAN', '4-20mA', 'Serial', 'BMS'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '식품 제조 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
