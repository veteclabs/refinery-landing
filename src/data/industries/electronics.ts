import type { IndustryData } from './types';

export const electronics: IndustryData = {
  slug: 'electronics',
  name: '전자 · 정밀',
  pageTitle: '전자 · 정밀을 위한 Refinery: 전력품질 감시 · 무정전 운영 · 미세환경 제어',
  description:
    '전력 품질 · UPS · 온습도 · 설비 알람을 하나의 구조로 연결하고, AI 에이전트가 라인 중단 가능성을 미리 감지합니다. 반도체 · 전자부품 · 정밀 장비 제조 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/img_login-bg.webp', alt: '', width: 3840, height: 2160 },
    imagePosition: 'center 100%',
    icon: '/industry-06.svg',
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
        title: '순간 전압 변동이 라인을 세운다',
        description:
          '설비가 전력 품질에 민감해 짧은 변동 하나가 <br>제품 불량과 라인 중단으로 직결됩니다.',
      },
      {
        title: 'UPS 전환을 나중에 안다',
        description:
          '정전과 UPS 전환 이벤트가 설비 이력과 따로 남아 <br>영향 범위를 판단하기 어렵습니다.',
      },
      {
        title: '온습도 편차가 품질을 흔든다',
        description:
          '라인별 미세한 온습도 차이가 수율에 영향을 주지만 <br>어느 구간이 벗어났는지 보이지 않습니다.',
      },
      {
        title: '알람이 몰리면 원인이 묻힌다',
        description:
          '설비 알람이 한꺼번에 쏟아지면 진짜 원인 하나가 <br>나머지 신호에 가려집니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '전자 · 정밀 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '최대 수요 전력 감시 · 부하 제어',
        problem: '피크가 지나간 뒤에야 확인되는 최대 수요 전력',
        approach: '실시간 수요를 추종해 피크 도달 전에 부하를 미리 조정합니다.',
        outcome: '전력 요금 절감과 피크 리스크 감소',
      },
      {
        title: 'UPS 연계 정전 감지 · 알람',
        problem: '설비 이력과 따로 남는 정전 · UPS 전환 이벤트',
        approach: '전력 품질과 UPS 이벤트를 설비 상태와 같은 시간축에 붙여 영향 범위를 즉시 특정합니다.',
        outcome: '무정전 운영과 라인 중단 최소화',
      },
      {
        title: '온습도 · 히팅 설비 실시간 감시',
        problem: '보이지 않는 라인별 온습도 편차',
        approach: '공정 환경을 구간별로 수집해 기준을 벗어난 지점을 즉시 표시합니다.',
        outcome: '공정 품질 안정화',
      },
      {
        title: '설비별 전력 사용 패턴 분석',
        problem: '어느 설비가 전력을 많이 쓰는지 알 수 없는 구조',
        approach: '설비 · 공정 단위로 전력을 분리 계측하고 같은 기준으로 비교합니다.',
        outcome: '에너지 다소비 공정 식별',
      },
      {
        title: '생산 계획 대비 설비 응답 추적',
        problem: '계획과 실제 설비 가동이 어긋나도 드러나지 않는 상황',
        approach: '생산 계획과 설비 가동 · 알람 이력을 연결해 응답 지연을 추적합니다.',
        outcome: '생산 예측 정확도 향상',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '수배전 설비 · UPS · 온습도 · 공정 장비 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'MES · SCADA · BEMS · Modbus · OPC-⁠UA · SECS⁠/⁠GEM', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '전력품질 대시보드 · 정전 알람 · 환경 감시', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 MES⁠/⁠BEMS가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '무정전 운영',
        icon: 'ph-plug-charging',
        description: '정전과 UPS 전환을 즉시 잡아 \n라인 중단을 최소화합니다.',
      },
      {
        title: '전력품질 감시',
        icon: 'ph-wave-sine',
        description: '순간 변동과 피크를 실시간으로 \n추적하고 미리 대응합니다.',
      },
      {
        title: '미세환경 제어',
        icon: 'ph-thermometer',
        description: '라인별 온습도 편차를 잡아 \n공정 품질을 안정시킵니다.',
      },
      {
        title: '알람 정리',
        icon: 'ph-bell-ringing',
        description: '몰려드는 신호에서 원인 하나를 \n앞으로 끌어냅니다.',
      },
      {
        title: '현장 보안',
        icon: 'ph-shield-check',
        description: '온프레미스 배포 시 데이터가 사내를 벗어나지 않고, OT⁠/⁠IT 경계를 보호합니다.',
      },
      {
        title: '통합 또는 신규 구축',
        icon: 'ph-stack',
        description: '레거시 MES⁠/⁠BEMS⁠/⁠ERP가 있으면 그 위에 얹어 양방향 통합하고, 없으면 처음부터 새로 구축합니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '전자 · 정밀 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['MES', 'SCADA', 'BEMS', 'UPS', 'Modbus', 'OPC-⁠UA', 'SECS⁠/⁠GEM', 'ERP'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '전자 · 정밀 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
