import type { PillarContent } from './industrial-ai';

// 에너지 · 전력 관리 개념 필러 페이지 — /energy-management
// EMS · BEMS · 전력관리시스템 · 전력감시/모니터링 · 정전감시를 정의형 Q&A로 답한다.
// 답변은 실제 사실만(온톨로지 · 온프레미스 · 전력 계측). 창작 수치 금지.
export const energyManagement: PillarContent = {
  title: '에너지관리시스템(EMS)이란? 전력관리 · 전력감시 · 정전감시 | Refinery',
  description: '에너지관리시스템(EMS) · 빌딩에너지관리시스템(BEMS) · 전력관리시스템 · 전력감시 · 전력모니터링 · 정전감시가 무엇인지 정리했습니다. Refinery는 전력 · 에너지 데이터를 온톨로지로 엮어 AI가 근거를 들어 관리합니다.',
  canonical: '/energy-management',
  heroTitle: '전력 · 에너지 데이터를 근거로<br>이상과 절감 기회를 찾는 에너지관리시스템',
  ctaPrimary: '문의하기',
  contactHref: '/contact',
  ctaGhost: '플랫폼 개요',
  ghostHref: '/why-refinery',
  /* 히어로에는 영상 대신 그래픽을 넣는다(PillarPage가 demoSrc로 판정). */
  demoSrc: '',
  heroGraphic: {
    src: '/energy-management-graphic.svg',
    alt: '전력 · 에너지 데이터를 수집하고 통합해 Refinery Plate · Lens · AI Agent로 잇는 구조도',
    width: 1200,
    height: 1200,
  },
  demoTitle: '',
  openTitle: '',
  faqHead: '자주 묻는 질문',
  usesHead: '현장에서 바로 쓰는 활용',
  usesLede: '전력 감시부터 절감까지, 현장에 적용된 모습을 살펴보세요.',
  more: '자세히보기',
  ctaTitle: '전력 · 에너지 관리, 우리 현장에<br>어떻게 적용할까요?',
  faq: [
    {
      q: '에너지관리시스템(EMS)이란 무엇인가요?',
      a: '에너지관리시스템(EMS, Energy Management System)은 공장 · 건물의 전력 · 가스 · 열 등 에너지 사용을 \n실시간으로 계측 · 분석해 소비를 줄이고 효율을 높이는 시스템입니다. 사용 현황을 가시화하고 낭비와 이상을 찾아 \n절감으로 잇습니다.',
    },
    {
      q: '빌딩에너지관리시스템(BEMS)이란 무엇인가요?',
      a: '빌딩에너지관리시스템(BEMS, Building Energy Management System)은 건물의 냉난방 · 조명 · 전력 설비의 \n에너지를 통합 관리하는 EMS입니다. 공장용 EMS와 원리는 같고, 관리 대상이 건물 설비라는 점이 다릅니다.',
    },
    {
      q: '전력관리시스템이란 무엇인가요?',
      a: '전력관리시스템은 수전 · 분전 계통의 전압 · 전류 · 전력 · 역률을 실시간으로 수집 · 분석해 전력 사용을 감시하고 \n최적화하는 시스템입니다. 피크 수요와 이상 부하를 관리해 전력 요금과 정전 위험을 줄입니다.',
    },
    {
      q: '전력감시 · 전력모니터링은 무엇인가요?',
      a: '전력감시(전력모니터링)는 수배전 계통의 전기 데이터를 실시간으로 지켜보며 이상을 조기에 감지하는 것을 말합니다. \n전압 강하 · 과부하 · 역률 저하 같은 징후를 알람으로 알려 사고를 예방합니다.',
    },
    {
      q: '정전감시는 어떻게 하나요?',
      a: '정전감시는 전원 이상이나 정전을 즉시 감지해 알리는 기능입니다. \n계통의 전압 · 전류를 상시 모니터링해 전원이 끊기거나 불안정해지는 순간을 포착하고, 담당자에게 실시간으로 통보합니다.',
    },
    {
      q: 'Refinery의 에너지 · 전력 관리는 무엇이 다른가요?',
      a: 'Refinery는 EMS · 전력 계측 · 설비 데이터를 온톨로지로 하나로 엮어, 흩어진 지표를 맥락과 함께 봅니다. \nAI가 피크와 이상의 원인을 근거를 들어 설명하고 조치를 제안하며, 데이터가 사내를 벗어나지 않는 \n온프레미스 배포를 지원합니다.',
    },
  ],
  uses: [
    { label: '전력관리', desc: '전력 데이터로 피크 · 이상 · \n절감 기회를 찾는 전력관리 솔루션', href: '/use-cases/power-management' },
    { label: '공장 에너지관리', desc: '공장 전체 에너지 사용을 \n통합 관리하는 EMS 활용', href: '/use-cases/factory-energy' },
    { label: '에너지 최적화', desc: '낭비를 찾아 에너지 사용을 \n줄이는 AI 최적화', href: '/use-cases/energy-optimization' },
    { label: '산업 AI', desc: '산업 AI · 제조 AI · 에너지 AI \n개념을 한눈에', href: '/industrial-ai' },
  ],
};
