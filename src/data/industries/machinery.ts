import type { IndustryData } from './types';

export const machinery: IndustryData = {
  slug: 'machinery',
  name: '기계 · 플랜트',
  pageTitle: '기계 · 플랜트를 위한 Refinery: 공용 설비 최적화 · 에너지 원단위 관리 · 탄소 대응',
  description:
    '공기압축기 · 공조 · 냉각 같은 공용 설비를 하나의 구조로 연결하고, AI 에이전트가 에너지 집중 구간을 찾아냅니다. 대형 설비 중심 기계 · 플랜트 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/img_login-bg.webp', alt: '', width: 3840, height: 2160 },
    imagePosition: 'center 100%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '기계 · 플랜트',
    title: '대형 설비와 공정을\n실시간으로 함께 제어합니다',
  },
  challenges: {
    dark: true,
    title: '기계 · 플랜트 현장의 문제',
    subtitle: '24시간 연속 운전하는 대형 설비 현장에서 반복되는 문제입니다.',
    items: [
      {
        title: '설비끼리 서로 영향을 준다',
        description:
          '공기압축기 · 공조 · 냉각이 얽혀 돌아가 <br>한 곳의 조정이 다른 곳의 부하로 넘어갑니다.',
      },
      {
        title: '수요와 공급이 어긋난다',
        description:
          '실제 수요가 줄어도 공용 설비는 그대로 돌아 <br>남는 용량이 그대로 비용이 됩니다.',
      },
      {
        title: '에너지가 몰리는 구간을 못 짚는다',
        description:
          '설비가 군집으로 묶여 있어 어느 구간이 에너지를 <br>삼키는지 분리해 보기 어렵습니다.',
      },
      {
        title: '탄소 배출 Hot Spot이 안 보인다',
        description:
          '배출량이 공정별로 나뉘지 않아 어디부터 손대야 할지 <br>판단할 근거가 없습니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '기계 · 플랜트 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '공기압축기 수요 맞춤 제어',
        problem: '수요가 줄어도 그대로 돌아가는 공용 설비',
        approach: '실제 수요를 읽어 토출 압력과 대수 운전을 필요한 만큼으로 맞춥니다.',
        outcome: '에너지 소비 감소와 설비 수명 연장',
      },
      {
        title: '설비별 전력 사용 실시간 분석',
        problem: '군집으로 묶여 분리해 볼 수 없는 에너지 사용',
        approach: '설비 · 공정 단위로 전력을 분리 계측하고 같은 기준으로 비교합니다.',
        outcome: '다소비 설비 식별과 운영 효율 개선',
      },
      {
        title: '공조 설비 엔탈피 기반 인버터 제어',
        problem: '외기 조건과 무관하게 고정된 공조 운전',
        approach: '외기와 실내 엔탈피를 함께 읽어 송풍 · 냉동 부하를 조건에 맞춰 조정합니다.',
        outcome: '공정 환경 안정화와 냉열 에너지 절감',
      },
      {
        title: '생산량 연계 에너지 원단위 관리',
        problem: '생산 대비 효율을 비교할 기준이 없는 구조',
        approach: '생산 실적과 에너지 사용을 연결해 공정별 원단위를 자동 산출합니다.',
        outcome: '공정 효율 가시화와 원가 구조 개선',
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
      { label: '연동', detail: 'PLC · SCADA · BEMS · FEMS · Modbus · OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '공용 설비 대시보드 · 원단위 리포트 · 배출량 관리', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 PLC⁠/⁠BEMS가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '수요 맞춤 운전',
        icon: 'ph-wind',
        description: '실제 수요에 맞춰 공용 설비를 \n필요한 만큼만 돌립니다.',
      },
      {
        title: '공용 설비 통합',
        icon: 'ph-squares-four',
        description: '압축공기 · 공조 · 냉각을 \n하나의 화면으로 봅니다.',
      },
      {
        title: '에너지 원단위',
        icon: 'ph-chart-line',
        description: '생산량과 에너지를 연결해 \n공정별 효율을 비교합니다.',
      },
      {
        title: '탄소 Hot Spot',
        icon: 'ph-leaf',
        description: '공정별 배출량을 나눠 \n손댈 곳부터 짚어냅니다.',
      },
      {
        title: '현장 보안',
        icon: 'ph-shield-check',
        description: '온프레미스 배포 시 데이터가 사내를 벗어나지 않고, OT⁠/⁠IT 경계를 보호합니다.',
      },
      {
        title: '통합 또는 신규 구축',
        icon: 'ph-stack',
        description: '레거시 PLC⁠/⁠BEMS⁠/⁠ERP가 있으면 그 위에 얹어 양방향 통합하고, 없으면 처음부터 새로 구축합니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '기계 · 플랜트 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['PLC', 'SCADA', 'BEMS', 'FEMS', 'Modbus', 'OPC-⁠UA', 'BACnet', 'ERP'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '기계 · 플랜트 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
