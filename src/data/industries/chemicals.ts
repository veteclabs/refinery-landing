import type { IndustryData } from './types';

export const chemicals: IndustryData = {
  slug: 'chemicals',
  name: '화학 · 소재',
  pageTitle: '화학 · 소재를 위한 Refinery: 반응 공정 안정화 · 다중 에너지원 통합 · 탄소 대응',
  description:
    '전력 · LNG · 스팀 · 수도를 하나의 구조로 연결하고, AI 에이전트가 연소 효율과 배출량 이상 징후를 먼저 감지합니다. 화학 · 소재 · 제약 공정 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/img_login-bg.webp', alt: '', width: 3840, height: 2160 },
    imagePosition: 'center 100%',
    icon: '/industry-03.svg',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '화학 · 소재',
    title: '연속 반응 공정과 열에너지를\n정밀하게 제어합니다',
  },
  challenges: {
    dark: true,
    title: '화학 공정 현장의 문제',
    subtitle: '연속 반응 · 열 기반 설비를 운영하는 현장에서 반복되는 문제입니다.',
    items: [
      {
        title: '작은 변수 변화가 큰 손실이 된다',
        description:
          '온도 · 압력 · 유량의 작은 흔들림이 제품 품질과 <br>생산 안정성에 그대로 이어집니다.',
      },
      {
        title: '에너지원이 여러 갈래로 흩어져 있다',
        description:
          '전력 · LNG · 스팀 · 수도가 각각 따로 집계돼 <br>어디서 새는지 한눈에 보기 어렵습니다.',
      },
      {
        title: '연소 공기비를 감으로 맞춘다',
        description:
          '열매체 보일러의 공기비가 최적에서 벗어나도 <br>연료가 얼마나 낭비되는지 드러나지 않습니다.',
      },
      {
        title: '탄소 리포트가 수작업이다',
        description:
          '배출량 집계와 규제 리포트를 사람이 취합해 <br>시간이 걸리고 오류 여지가 큽니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '화학 공정 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '전력 · LNG · 스팀 · 수도 통합 감시',
        problem: '각각 따로 집계되는 다중 에너지원',
        approach: '에너지원을 하나의 구조로 정의해 설비 · 공정별 사용을 같은 화면에 세웁니다.',
        outcome: '에너지원별 사용 패턴 가시화',
      },
      {
        title: '에너지 목표 설정 · 초과 알람',
        problem: '지나고 나서야 확인되는 과소비',
        approach: '설비 · 공정 단위로 목표를 걸고 초과 흐름을 실시간으로 알립니다.',
        outcome: '과소비 방지와 즉각 대응 체계 구축',
      },
      {
        title: '공기비 기반 송풍기 인버터 제어',
        problem: '감으로 맞추는 열매체 보일러 공기비',
        approach: '연소 데이터를 읽어 최적 공기비를 산출하고 송풍기 인버터를 자동 조정합니다.',
        outcome: '연소 효율 향상과 에너지 비용 절감',
      },
      {
        title: '반응기 부하 대비 투입 에너지 분석',
        problem: '부하와 어긋난 채 들어가는 에너지 투입량',
        approach: '반응 공정 부하와 실제 에너지 투입을 나란히 놓고 편차 구간을 짚어냅니다.',
        outcome: '반응 안정성 확보와 다소비 설비 식별',
      },
      {
        title: '온실가스 배출량 통합 관리',
        problem: '수작업으로 이뤄지는 배출량 집계와 규제 리포트',
        approach: '현장 데이터에서 배출 지표를 자동 집계하고 출처까지 추적 가능한 리포트를 만듭니다.',
        outcome: '탄소 규제 대응과 에너지 성과 관리',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '반응기 · 열매체 보일러 · 송풍기 · 압축기 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'DCS · PLC · FEMS · Modbus · OPC-⁠UA · PROFIBUS', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '에너지 대시보드 · 목표 알람 · 배출량 리포트', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 DCS⁠/⁠FEMS가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '반응 안정성',
        icon: 'ph-pulse',
        description: '공정 변수의 흔들림을 먼저 잡아 \n손실을 줄입니다.',
      },
      {
        title: '다중 에너지 통합',
        icon: 'ph-squares-four',
        description: '전력 · LNG · 스팀 · 수도를 \n하나의 화면으로 봅니다.',
      },
      {
        title: '연소 효율',
        icon: 'ph-flame',
        description: '공기비를 최적으로 맞춰 \n연료 낭비를 줄입니다.',
      },
      {
        title: '탄소 대응',
        icon: 'ph-leaf',
        description: '배출량을 자동 집계하고 \n출처를 추적합니다.',
      },
      {
        title: '현장 보안',
        icon: 'ph-shield-check',
        description: '온프레미스 배포 시 데이터가 사내를 벗어나지 않고, OT⁠/⁠IT 경계를 보호합니다.',
      },
      {
        title: '통합 또는 신규 구축',
        icon: 'ph-stack',
        description: '레거시 DCS⁠/⁠FEMS⁠/⁠ERP가 있으면 그 위에 얹어 양방향 통합하고, 없으면 처음부터 새로 구축합니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '화학 공정 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['DCS', 'PLC', 'SCADA', 'FEMS', 'Modbus', 'OPC-⁠UA', 'PROFIBUS', 'ERP'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '화학 공정 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
