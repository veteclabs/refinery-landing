import type { IndustryData } from './types';

export const chemicals: IndustryData = {
  slug: 'chemicals',
  name: '화학 · 소재',
  pageTitle: '화학 · 소재를 위한 Refinery: 반응 공정 안정화 · 다중 에너지원 통합 · 탄소 대응',
  description:
    '전력 · LNG · 스팀 · 수도를 하나의 구조로 연결하고, AI 에이전트가 연소 효율과 배출량 이상 징후를 먼저 감지합니다. 화학 · 소재 · 제약 공정 현장을 위한 Refinery.',
  hero: {
    dark: true,
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
        title: '다중 에너지원이 동시에 쓰인다',
        description:
          '전력 · LNG · 스팀 · 수도가 함께 들어가는데 <br>각각 따로 집계돼 전체 그림이 잡히지 않습니다.',
      },
      {
        title: '작은 변화가 품질과 생산 안정성을 흔든다',
        description:
          '반응기 · 보일러 · 송풍기 · 압축기가 연속 운전되며 <br>공정 조건의 작은 변화가 곧장 결과로 이어집니다.',
      },
      {
        title: '공정 변수의 정밀 제어가 필수다',
        description:
          '공기비 · 온도 · 압력 · 유량을 동시에 맞춰야 하는데 <br>사람의 감으로는 최적점을 유지하기 어렵습니다.',
      },
      {
        title: '에너지 비용과 탄소 규제가 함께 조인다',
        description:
          '단순 모니터링을 넘어 목표 기반 에너지 관리와 <br>공정 효율 최적화가 요구되고 있습니다.',
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
        approach: '전력 · LNG · 스팀 · 수도와 설비별 소비를 온톨로지로 연결해 한 구조로 모으고, 공정 전체의 에너지 흐름을 한 화면에서 봅니다.',
        outcome: '에너지원별 사용 패턴 가시화',
      },
      {
        title: '에너지 목표 설정 · 초과 알람',
        problem: '지나고 나서야 확인되는 과소비',
        approach: '설비 · 공정 단위로 목표를 걸고 초과 흐름을 실시간으로 알립니다.',
        outcome: '과소비 방지와 즉각 대응 체계 구축',
      },
      {
        title: '열매체 보일러 공기비 기반 송풍기 인버터 제어',
        problem: '감으로 맞추는 열매체 보일러 공기비',
        approach: '열매체 보일러 공기비에 따라 송풍기 인버터를 제어해 최적의 공기비를 유지합니다.',
        outcome: '연소 효율 향상과 에너지 비용 절감',
      },
      {
        title: '설비별 에너지 사용 분석',
        problem: '어느 설비가 에너지를 삼키는지 알 수 없는 구조',
        approach: '설비 단위로 에너지를 분리 계측하고 같은 기준으로 비교합니다.',
        outcome: '에너지 다소비 설비 식별',
      },
      {
        title: '공기압축기 상태 · 운전 인자 모니터링',
        problem: '멈춘 뒤에야 드러나는 압축기 이상',
        approach: 'AI 에이전트가 압축기 상태와 운전 인자를 함께 보고 평소와 다른 흐름에서 전조를 잡아, 원인과 조치를 함께 제시합니다.',
        outcome: '설비 안정성 확보와 유지 보수 효율 향상',
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
      { label: '연동', detail: 'SCADA · PLC · FEMS · Modbus · Serial · 4-20mA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '에너지 대시보드 · 목표 알람 · 배출량 리포트', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 SCADA⁠/⁠FEMS가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '목표 기반 에너지 사용 관리',
        icon: 'ph-target',
        description: '목표를 걸고 초과 흐름을 \n실시간으로 알립니다.',
      },
      {
        title: '공기비 최적 제어',
        icon: 'ph-flame',
        description: '연소 데이터로 공기비를 \n최적에 맞춥니다.',
      },
      {
        title: '설비별 에너지 편차 분석',
        icon: 'ph-chart-line',
        description: '설비마다 에너지를 나눠 \n다소비 설비를 짚습니다.',
      },
      {
        title: '에너지 이상 징후 조기 감지',
        icon: 'ph-pulse',
        description: '평소와 다른 흐름을 \n먼저 알아챕니다.',
      },
      {
        title: '탄소 규제 대응',
        icon: 'ph-leaf',
        description: '배출량을 자동 집계하고 \n출처를 추적합니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '화학 공정 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['SCADA', 'PLC', 'FEMS', 'ERP', 'Modbus', 'Serial · RS-485', '4-20mA', 'OPC-⁠UA'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '화학 공정 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
