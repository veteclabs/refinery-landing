# Refinery 아이콘 시리즈 (13종)

메인 #76A6D7 · 팔레트 #EEF4FB / #DCE8F5 / #76A6D7 / #5A8FC5 / #3F76AE (알파 변형만 사용)
광원 좌상단 · 정보 막대 두께 28px · 점 반지름 15px · 512px 캔버스 · 투명 배경
모션 1.6s 루프 60fps · 탄성 cubic-bezier(0.34,1.56,0.64,1) / 부드러운 동작 ease-in-out

| 파일명 | 섹션 | 항목 | 모션 |
|---|---|---|---|
| flow-site | 솔루션 구조 | 현장 | 굴뚝 위 원형 점이 천천히 떠오르며 사라짐 (ease-in-out) |
| flow-connect | 솔루션 구조 | 연동 | 두 고리가 살짝 벌어졌다가 탄성으로 맞물림 |
| flow-refinery | 솔루션 구조 | Refinery | 세 개의 레이어가 위아래로 벌어졌다가 탄성으로 다시 겹침 |
| flow-use | 솔루션 구조 | 활용 | 알림 카드가 위로 떠올랐다가 탄성으로 자리 잡음 |
| why-team | 현장이 먼저입니다 | 현장을 아는 팀 | 앞 인물이 먼저, 뒤 인물이 이어서 살짝 튀어 오름 |
| why-layer | 현장이 먼저입니다 | 걷어내지 않는 도입 | 위 카드가 들렸다가 기존 판 위로 탄성 있게 내려앉음 |
| why-knowledge | 현장이 먼저입니다 | 숫자를 넘어, 지식으로 | 주변 노드가 순서대로 살짝 커졌다 돌아옴 |
| stat-experience | 회사 소개 | 30년+ 경험 | 분침이 한 바퀴 부드럽게 회전 (중심 고정) |
| stat-sites | 회사 소개 | 100+ 현장 | 앞 핀이 튀어 올랐다가 탄성으로 착지 |
| stat-industries | 회사 소개 | 20+ 산업군 | 타일이 순서대로 작게 튀었다 제자리로 (스태거) |
| rule-field | 일하는 세 가지 기준 | 현장에서 나온 문제 | 톱니가 살짝 돌다 멈추고(탄성), 경고 배지가 톡 튐 |
| rule-build | 일하는 세 가지 기준 | 얹거나, 새로 세우거나 | 위 블록이 들렸다가 아래 블록 위로 탄성 착지 |
| rule-context | 일하는 세 가지 기준 | 숫자에 붙는 맥락 | 말풍선이 떠올랐다 탄성으로 자리 잡고 체크가 은은히 나타남 |

## 폴더
- png/ : 512×512 정지 이미지 (투명 PNG)
- png64/ : 64×64 축소 확인용
- svg/ : 벡터 원본 (필터·마스크 포함)
- webp/512, webp/256 : 애니메이션 WebP (투명, 60fps, 무한 루프)
- source/ : 생성 스크립트 (node render.js out anim)

## 교체 대상
- 솔루션 구조(산업별 페이지): flow/site·connect·refinery·use.webp → flow-*.png
- 플랫폼 개요 > 현장이 먼저입니다: icon-01~03.svg → why-team / why-layer / why-knowledge
- 회사 소개 통계: icon-stat-02(30년+) → stat-experience, icon-stat-01(100+) → stat-sites, icon-stat-03(20+) → stat-industries
- 일하는 세 가지 기준: icon-rule-01~03.webp → rule-field / rule-build / rule-context
