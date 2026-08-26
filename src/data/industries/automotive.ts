import type { IndustryData } from './types';

export const automotive: IndustryData = {
  slug: 'automotive',
  name: '자동차 · 모빌리티',
  pageTitle: '자동차 · 모빌리티를 위한 Refinery: 라인 병목 해소 · 회전체 예지보전 · 품질 편차 관리',
  description:
    '프레스 · 차체 · 도장 · 조립으로 이어지는 라인을 하나의 구조로 연결하고, AI 에이전트가 회전체 이상과 품질 편차를 먼저 감지합니다. 자동차 · 모빌리티 제조 현장을 위한 Refinery.',
  hero: {
    dark: true,
    image: { src: '/industries/automotive-hero.webp', alt: '', width: 1920, height: 1080 },
    showSecondary: false,
    showBreadcrumb: false,
    eyebrow: '자동차 · 모빌리티',
    title: '설비 흐름과 품질 일관성을\n데이터로 제어합니다',
  },
  challenges: {
    dark: true,
    title: '자동차 제조 현장의 문제',
    subtitle: '프레스 · 차체 · 도장 · 조립 라인에서 반복되는 문제입니다.',
    items: [
      {
        title: '한 공정의 이상이 라인 전체를 흔든다',
        description:
          '프레스 · 차체 · 도장 · 조립이 연속으로 물려 있어 <br>설비 하나의 이상이 라인 전체 정지로 번집니다.',
      },
      {
        title: '고출력과 정밀 제어를 동시에 요구한다',
        description:
          '큰 전력을 쓰는 설비와 미세한 제어가 한 라인에 섞여 있어 <br>한쪽을 맞추면 다른 쪽이 흔들립니다.',
      },
      {
        title: '설비 · 에너지 · 생산이 따로 논다',
        description:
          '전동화와 품질 기준 강화로 셋을 함께 봐야 하는데 <br>데이터가 각각의 시스템에 남아 이어지지 않습니다.',
      },
    ],
  },
  useCases: {
    title: '문제를 푸는 방법',
    subtitle: '자동차 제조 현장에서\n<mark>Refinery가 실제로\n하는 일</mark>입니다.',
    layout: 'steps',
    items: [
      {
        title: '모터 · 회전체 진동 기반 예지보전',
        problem: '정지가 난 뒤에야 확인되는 회전체 이상',
        approach: 'AI 에이전트가 진동 · 전류 추세에서 이상을 읽어 전조를 일찍 잡고, 원인 추정과 다음 조치를 근거 이력과 함께 제시합니다.',
        outcome: '설비 다운타임 감소와 생산 안정성 확보',
      },
      {
        title: '라인별 전력 사용 패턴 분석',
        problem: '라인마다 다른 전력 사용과 설명할 수 없는 차이',
        approach: '라인 · 공정 · 설비를 온톨로지로 연결해 각 신호가 어느 설비의 무엇인지 의미를 부여하고, 전력 사용을 같은 기준으로 비교합니다.',
        outcome: '에너지 비용 절감과 비효율 공정 식별',
      },
      {
        title: '공기압축기 수요 기반 제어',
        problem: '실제 수요와 무관하게 돌아가는 공기압축기',
        approach: '소비 전력과 운전 패턴을 읽어 VSD로 수요 맞춤 공급이 되도록 제어하고, 점검 주기와 고장 진단을 함께 관리합니다.',
        outcome: '에너지 낭비 최소화와 설비 운전 효율 향상',
      },
      {
        title: '생산량 연계 에너지 원단위 관리',
        problem: '생산 대비 에너지 효율을 볼 수 없는 구조',
        approach: '생산 실적과 에너지 사용을 연결해 라인 · 차종별 원단위를 자동 산출합니다.',
        outcome: '생산 대비 에너지 효율 가시화와 원가 구조 개선',
      },
      {
        title: '환경 조건 변화에 따른 품질 영향 분석',
        problem: '따로 기록돼 되짚기 어려운 품질 이슈의 원인',
        approach: '온습도 · 설비 상태 · 품질 결과를 같은 시간축에서 연결해 원인을 추적합니다.',
        outcome: '품질 편차 최소화와 공정 조건 최적화',
      },
    ],
  },
  architecture: {
    title: '솔루션 구조',
    subtitle: '현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름입니다.',
    steps: [
      { label: '현장', detail: '프레스 · 도장 · 조립 설비 · 모터 · 진동 센서', icon: 'ph-broadcast', image: '/flow/site.webp' },
      { label: '연동', detail: 'SCADA · PLC · MES · Modbus TCP⁠/⁠IP · RS-485 · OPC-⁠UA', icon: 'ph-plugs-connected', image: '/flow/connect.webp' },
      { label: 'Refinery', detail: '온톨로지 · AI 에이전트 · 룰⁠/⁠자동화', icon: 'ph-sparkle', highlight: true, image: '/flow/refinery.webp' },
      { label: '활용', detail: '라인 대시보드 · 예지보전 알람 · 품질 추적', icon: 'ph-monitor', image: '/flow/use.webp' },
    ],
    note: '기존 MES⁠/⁠PLC가 있으면 걷어내지 않고 그 위에 얹어 양방향 연동하고, 없는 현장은 수집부터 새로 구축합니다.',
  },
  benefits: {
    title: '도입 효과',
    subtitle: '운영 · 기술 · 경영 관점 모두에서 얻는 이점입니다.',
    items: [
      {
        title: '설비 다운타임 감소',
        icon: 'ph-pulse',
        description: '회전체 진동에서 이상을 미리 잡아 \n생산 안정성을 확보합니다.',
      },
      {
        title: '에너지 비용 절감',
        icon: 'ph-lightning',
        description: '라인별 전력 패턴을 비교해 \n비효율 공정을 식별합니다.',
      },
      {
        title: '원가 구조 개선',
        icon: 'ph-chart-line',
        description: '생산 대비 에너지 효율을 \n숫자로 드러냅니다.',
      },
      {
        title: '품질 편차 최소화',
        icon: 'ph-target',
        description: '환경 조건과 품질 결과를 이어 \n공정 조건을 맞춥니다.',
      },
    ],
  },
  integrations: {
    title: '연동 시스템',
    subtitle: '자동차 제조 현장에서 흔히 쓰는 시스템 · 프로토콜과 연결됩니다.',
    systems: ['SCADA', 'PLC', 'MES', 'ERP', 'Modbus TCP⁠/⁠IP', 'RS-485', 'OPC-⁠UA', 'LTE'],
    note: '목록에 없는 시스템도 표준 프로토콜 · API로 연동 가능합니다. 자세한 내용은 문의해 주세요.',
  },
  cta: {
    backgroundImage: '/use-cases/cta-bg.webp',
    title: '자동차 제조 현장에 맞는 답을\nRefinery 팀이 함께 찾아드립니다.',
    buttonLabel: '데모 신청하기',
  },
};
