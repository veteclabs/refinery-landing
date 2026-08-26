import type { IndustryData } from './types';

export const electronics: IndustryData = {
  slug: 'electronics',
  name: '전자 · 정밀',
  pageTitle: '전자 · 정밀을 위한 Refinery: 전력품질 감시 · 무정전 운영 · 미세환경 제어',
  description:
    '전력 품질 · UPS · 온습도 · 설비 알람을 하나의 구조로 연결하고, AI 에이전트가 라인 중단 가능성을 미리 감지합니다. 반도체 · 전자부품 · 정밀 장비 제조 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/industries/electronics-hero.webp', alt: '', width: 1920, height: 1206 },
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '전자 · 정밀',
    title: '무정전과 미세환경을\n하나의 구조로 지킵니다',
  },
  challenges: {
    dark: true,
    title: '전자 · 정밀 현장의 문제',
    subtitle: '반도체 · 전자부품 · 정밀 장비 제조 현장에서 반복되는 문제입니다.',
    items: [
      {
        title: '미세한 변화에도 설비가 반응한다',
        description:
          '생산 설비가 온도 변화와 전력 품질에 민감해 <br>작은 흔들림 하나가 그대로 공정에 남습니다.',
      },
      {
        title: '정전 · 설비 이상이 곧 불량이 된다',
        description:
          '순간의 정전이나 설비 이상이 <br>제품 불량과 라인 중단으로 직결됩니다.',
      },
      {
        title: '운영 요소가 복합적으로 얽혀 있다',
        description:
          '최대 수요 전력 · UPS 정전 대응 · 온습도 · 설비 알람에 <br>안전 · 방재까지 한 체계로 묶으라는 요구가 늘고 있습니다.',
      },
      {
        title: '다품종 소량 생산으로 라인이 잘게 나뉜다',
        description:
          '라인이 세분화될수록 공정 단위 에너지 관리와 <br>설비 상태 가시화가 어려워집니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '전자 · 정밀 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '최대 수요 전력 실시간 감시 · 부하 제어',
        problem: '피크가 지나간 뒤에야 확인되는 최대 수요 전력',
        approach: '최대수요관리장치와 연동해 목표 전력 이내로 부하를 제어하고, 피크 초과 전에 알립니다.',
        outcome: '전력 요금 절감과 피크 리스크 감소',
      },
      {
        title: '설비별 전력 사용 패턴 분석',
        problem: '어느 설비가 전력을 많이 쓰는지 알 수 없는 구조',
        approach: '설비 · 공정을 온톨로지로 연결해 각 신호가 어느 설비의 무엇인지 의미를 부여하고, 전력을 같은 기준으로 비교합니다.',
        outcome: '에너지 다소비 공정 식별',
      },
      {
        title: 'UPS 연계 정전 감지 · 알람',
        problem: '설비 이력과 따로 남는 정전 · UPS 전환 이벤트',
        approach: 'AI 에이전트가 전력 품질과 UPS 이벤트를 설비 상태와 같은 시간축에서 보고, 영향 범위와 다음 조치를 함께 제시합니다.',
        outcome: '무정전 운영과 라인 중단 최소화',
      },
      {
        title: '온습도 · 히팅 설비 실시간 감시',
        problem: '보이지 않는 라인별 온습도 편차',
        approach: '공정 환경을 구간별로 수집해 기준을 벗어난 지점을 즉시 표시합니다.',
        outcome: '공정 품질 안정화',
      },
      {
        title: '생산 계획 대비 설비 상태 추적',
        problem: '계획과 실제 설비 가동이 어긋나도 드러나지 않는 상황',
        approach: '생산 계획과 설비 가동 · 알람 이력을 연결해 응답 지연을 추적합니다.',
        outcome: '생산 예측 정확도 향상',
      },
      {
        title: 'EHS · 화재 감시 연계 알람',
        problem: '설비 감시와 따로 도는 안전 · 방재 시스템',
        approach: 'EHS · 화재 감지 신호를 설비 알람과 한 체계로 묶어 함께 알립니다.',
        outcome: '안전사고 예방',
      },
      {
        title: '무선 기반 전력 · 환경 센서 구축',
        problem: '배선 공사가 필요해 늘리기 어려운 계측점',
        approach: '무선 센서로 전력 · 환경 계측점을 늘려 배선 없이 범위를 넓힙니다.',
        outcome: '구축 비용 절감과 확장성 확보',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '수배전 설비 · UPS · 온습도 · 공정 장비 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'MES · SCADA · UPS · 최대수요관리장치 · Modbus · OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '전력품질 대시보드 · 정전 알람 · 환경 감시', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 MES⁠/⁠SCADA가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '피크 발생 전 사전 부하 제어',
        icon: 'ph-lightning',
        description: '피크에 닿기 전에 부하를 \n미리 낮춥니다.',
      },
      {
        title: '설비 이상 시 즉시 알람',
        icon: 'ph-bell-ringing',
        description: '이상이 나면 담당자를 \n바로 호출합니다.',
      },
      {
        title: '공정 환경 실시간 감시',
        icon: 'ph-thermometer',
        description: '온습도 변화를 구간별로 \n실시간 추적합니다.',
      },
      {
        title: '계획 대비 가동 상태 추적',
        icon: 'ph-clipboard-text',
        description: '생산 계획과 설비 응답을 \n나란히 놓고 봅니다.',
      },
      {
        title: '안전사고 예방',
        icon: 'ph-fire-extinguisher',
        description: 'EHS · 화재 감시 신호를 \n설비 알람과 한 체계로 묶습니다.',
      },
      {
        title: '확장성 확보',
        icon: 'ph-broadcast',
        description: '무선 센서로 계측점을 늘려 \n배선 없이 범위를 넓힙니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '전자 · 정밀 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['MES', 'SCADA', 'UPS', '최대수요관리장치', 'Modbus', 'Modbus TCP⁠/⁠IP', 'OPC-⁠UA', 'ERP'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '전자 · 정밀 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
