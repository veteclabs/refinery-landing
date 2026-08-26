import type { IndustryData } from './types';

export const machinery: IndustryData = {
  slug: 'machinery',
  name: '기계 · 플랜트',
  pageTitle: '기계 · 플랜트를 위한 Refinery: 공용 설비 최적화 · 에너지 원단위 관리 · 탄소 대응',
  description:
    '공기압축기 · 공조 · 냉각 같은 공용 설비를 하나의 구조로 연결하고, AI 에이전트가 에너지 집중 구간을 찾아냅니다. 대형 설비 중심 기계 · 플랜트 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/industries/machinery-hero.webp', alt: '', width: 1920, height: 1243 },
    // 세로 초점. 공통값 45%에서는 샤프트가 대제목 줄을 정통으로 가로지른다.
    // 30%로 낮추면 축이 제목 오른쪽으로 비켜간다(이동 여유 360px 중 54px).
    // 글자 대비도 13.37:1에서 14.06:1로 오른다. 15%는 대비가 더 높지만 축이
    // 위쪽에 잘려 구도가 답답해진다.
    imagePosition: 'center 30%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '기계 · 플랜트',
    title: '대형 설비와 공정을\n실시간으로 함께 제어합니다',
  },
  challenges: {
    dark: true,
    title: '기계 설비 현장의 문제',
    subtitle: '24시간 연속 운전하는 대형 설비 현장에서 반복되는 문제입니다.',
    items: [
      {
        title: '여러 에너지원이 동시에 쓰인다',
        description:
          '압축공기 · 전력 · 냉열 · 공조가 한 현장에서 함께 돌아 <br>어디에 얼마가 들어가는지 잡히지 않습니다.',
      },
      {
        title: '설비 간 연계도가 높다',
        description:
          '장비 하나의 이상이 전체 공정 효율에 <br>그대로 영향을 미칩니다.',
      },
      {
        title: '24시간 연속 운전과 정밀 조건을 함께 지켜야 한다',
        description:
          '멈출 수 없는 환경에서 공정 조건까지 유지해야 해 <br>손볼 시점을 잡기 어렵습니다.',
      },
      {
        title: '노후화 · 비용 · 규제가 한꺼번에 온다',
        description:
          '설비 노후화와 에너지 비용 증가, 탄소 규제 대응이 동시에 진행돼 <br>설비와 에너지를 한 체계로 봐야 합니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '기계 · 플랜트 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '공기압축기 수요 맞춤 제어 · 상태 감시',
        problem: '수요가 줄어도 그대로 돌아가는 공용 설비',
        approach: '실제 수요를 읽어 토출 압력과 대수 운전을 필요한 만큼으로 맞춥니다.',
        outcome: '에너지 소비 감소와 설비 수명 연장',
      },
      {
        title: '설비별 전력 사용 실시간 분석',
        problem: '군집으로 묶여 분리해 볼 수 없는 에너지 사용',
        approach: 'AI 에이전트가 설비별 소비를 실시간으로 보고 평소 패턴에서 벗어난 사용을 잡아, 원인과 조치를 함께 제시합니다.',
        outcome: '에너지 다소비 설비 식별과 운영 효율 개선',
      },
      {
        title: '공조 설비 엔탈피 기반 인버터 제어',
        problem: '외기 조건과 무관하게 고정된 공조 운전',
        approach: '라인별 온 · 습도를 엔탈피로 환산해 목표 엔탈피를 유지하도록 공조기 인버터를 제어합니다.',
        outcome: '공정 환경 안정화와 냉열 에너지 절감',
      },
      {
        title: '생산량 연계 에너지 원단위 관리',
        problem: '생산 대비 효율을 비교할 기준이 없는 구조',
        approach: '생산 실적과 설비별 에너지를 온톨로지로 연결해 한 구조로 모으고, 공정별 원단위를 자동 산출합니다.',
        outcome: '공정 효율 가시화와 원가 구조 개선',
      },
      {
        title: 'DC 마이크로그리드 기반 설비 제어',
        problem: '전력 계통 하나에 묶여 흔들리는 설비 운영',
        approach: '자체 전원과 계통을 함께 보고 설비 전력을 배분해 운전합니다.',
        outcome: '연료비 절감과 에너지 운영 안정성 확보',
      },
      {
        title: '탄소 배출량 통합 모니터링',
        problem: '공정별로 나뉘지 않는 배출량 집계',
        approach: '에너지 사용 데이터에서 공정별 배출량을 자동 산출해 Hot Spot을 표시합니다.',
        outcome: '탄소 규제 대응과 에너지 성과 관리',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '공기압축기 · 공조 · 냉각 설비 · 대형 장비 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'FEMS · SCADA · PLC · ERP · Modbus · BACnet', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '공용 설비 대시보드 · 원단위 리포트 · 배출량 관리', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 FEMS⁠/⁠SCADA가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '공기압축기 수요 기반 제어',
        icon: 'ph-wind',
        description: '실제 수요에 맞춰 \n필요한 만큼만 돌립니다.',
      },
      {
        title: '공조 인버터 제어 절감',
        icon: 'ph-thermometer',
        description: '엔탈피에 맞춰 부하를 \n조정해 냉열을 아낍니다.',
      },
      {
        title: '설비 상태 기반 유지보수',
        icon: 'ph-pulse',
        description: '상태 데이터로 손볼 시점을 \n먼저 잡습니다.',
      },
      {
        title: '생산량 연계 효율 분석',
        icon: 'ph-chart-line',
        description: '생산과 에너지를 이어 \n공정별 효율을 비교합니다.',
      },
      {
        title: '연료비 절감',
        icon: 'ph-battery-charging',
        description: 'DC 마이크로그리드로 전력을 배분해 \n운영 안정성을 함께 얻습니다.',
      },
      {
        title: '탄소 규제 대응',
        icon: 'ph-leaf',
        description: '공정별 배출량을 산출해 \nHot Spot부터 짚습니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '기계 · 플랜트 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['FEMS', 'SCADA', 'PLC', 'ERP', 'Modbus', 'BACnet', 'TCP⁠/⁠IP', '에너지관리공단'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '기계 · 플랜트 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
