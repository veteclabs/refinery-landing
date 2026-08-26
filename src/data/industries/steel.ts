import type { IndustryData } from './types';

export const steel: IndustryData = {
  slug: 'steel',
  name: '가공 · 소재 · 철강',
  pageTitle: '가공 · 소재 · 철강을 위한 Refinery: 열처리 품질 안정화 · 피크 전력 제어 · 압축공기 최적화',
  description:
    '열처리 온도 · 냉각 곡선 · 압축공기 · 피크 전력을 하나의 구조로 연결하고, AI 에이전트가 품질 편차의 원인을 추적합니다. 철강 · 비철금속 · 소재 코팅 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/industries/steel-hero.webp', alt: '', width: 1920, height: 1280 },
    // 세로 초점. 공통값 45%에서는 밝은 시트 띠가 대제목 줄을 가로지른다.
    // 10%로 낮추면 띠가 제목 아래로 내려가고 압연 롤 구조가 위쪽에 들어온다
    // (이동 여유 387px 중 135px).
    imagePosition: 'center 10%',
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '가공 · 소재 · 철강',
    title: '소재 품질과 에너지 효율을\n함께 확보합니다',
  },
  challenges: {
    dark: true,
    title: '가공 공정 현장의 문제',
    subtitle: '열처리 · 성형 · 코팅 공정에서 반복되는 문제입니다.',
    items: [
      {
        title: '공정 조건의 미세한 변화가 품질과 직결된다',
        description:
          '열처리로 · 압축공기 · 냉각수 · 성형 장비가 연속으로 돌며 <br>작은 조건 차이가 제품에 그대로 남습니다.',
      },
      {
        title: '열처리는 설비 안정성과 에너지 제어를 함께 요구한다',
        description:
          '온도 · 유지 시간 · 냉각 조건이 소재 특성을 정하기 때문에 <br>둘 중 하나만 맞춰서는 재현되지 않습니다.',
      },
      {
        title: '에너지 흐름이 복잡하고 피크가 자주 튄다',
        description:
          '에너지가 공정마다 흩어져 흐르는 데다 고온 · 대전력 설비가 겹쳐 돌아 <br>과소비 구간을 짚기도, 최대 수요를 잡기도 어렵습니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '가공 · 소재 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '최대 수요 전력 감시 · 목표전력 부하 제어',
        problem: '겹쳐 돌아가는 대전력 설비로 급증하는 피크',
        approach: '목표 전력을 설정해 최대 전력 사용량을 그 안으로 관리하고, 목표 피크 초과 전에 알립니다.',
        outcome: '전력 요금 절감과 피크 리스크 감소',
      },
      {
        title: '압축공기 수요 맞춤 제어 · 상태 감시',
        problem: '수요와 무관하게 과하게 운전되는 압축공기 설비',
        approach: '소비 전력과 배관 유량, 온·습도를 함께 계측해 수요 맞춤 공급이 되도록 제어합니다.',
        outcome: '에너지 소비 감소와 설비 수명 연장',
      },
      {
        title: '열처리 공정 온도 · 시간 패턴 분석',
        problem: '결과물이 나온 뒤에야 확인되는 공정 조건 이탈',
        approach: '열처리로의 온도 · 유지 시간 · 냉각 곡선을 배치별로 쌓아 정상 패턴과 비교합니다.',
        outcome: '소재 품질 안정화',
      },
      {
        title: '공정별 에너지 흐름 시각화',
        problem: '어느 공정이 에너지를 삼키는지 보이지 않는 구조',
        approach: '공정 · 설비를 온톨로지로 연결해 에너지 흐름을 한 구조로 모으고, 공정별 사용을 같은 기준으로 나란히 세웁니다.',
        outcome: '과소비 구간 식별과 공정 효율 개선',
      },
      {
        title: '냉각수 설비 원격 제어 · 모니터링',
        problem: '사람이 현장에 가야 확인되는 냉각수 설비 상태',
        approach: '냉각수 온도 · 유량 · 펌프 상태를 원격으로 감시하고, 기준을 벗어나면 즉시 알립니다.',
        outcome: '설비 운영 안정성 확보',
      },
      {
        title: '진동 기반 설비 상태 감시',
        problem: '멈춘 뒤에야 드러나는 회전체 이상',
        approach: 'AI 에이전트가 진동 추세에서 이상을 읽어 전조를 일찍 잡고, 원인 추정과 다음 조치를 근거 이력과 함께 제시합니다.',
        outcome: '고장 예방과 유지 보수 효율 향상',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '열처리로 · 압축공기 · 냉각수 · 성형 장비 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'SCADA · PLC · FEMS · Modbus TCP · CAN · LTE-M', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '공정 대시보드 · 피크 알람 · 품질 이력', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 PLC⁠/⁠FEMS가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '열처리 품질 안정화',
        icon: 'ph-thermometer',
        description: '온도 패턴을 배치별로 남겨 \n같은 결과를 반복합니다.',
      },
      {
        title: '압축공기 수요 맞춤 공급',
        icon: 'ph-wind',
        description: '필요한 만큼만 공급해 \n낭비와 누설을 줄입니다.',
      },
      {
        title: '최대수요전력 사전 감지',
        icon: 'ph-lightning',
        description: '피크에 닿기 전에 감지해 \n부하를 미리 낮춥니다.',
      },
      {
        title: '공정 단위 에너지 편차 분석',
        icon: 'ph-chart-line',
        description: '공정마다 에너지를 나눠 \n과소비 구간을 짚습니다.',
      },
      {
        title: '고장 예방',
        icon: 'ph-pulse',
        description: '진동에서 이상을 미리 잡아 \n유지 보수 효율을 높입니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '가공 · 소재 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['SCADA', 'PLC', 'FEMS', 'MES', 'Modbus TCP⁠/⁠IP', 'CAN', 'OPC-⁠UA', 'LTE-M'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '가공 · 소재 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
