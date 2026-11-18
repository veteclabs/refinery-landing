# 산업별 페이지 · 솔루션 구조 아이콘 (3D, 아이소메트릭)

배경 투명 · 어두운 면(#11161C 계열) 위에 놓는 것을 기준으로 만든 아이콘입니다.
흐린 점선 큐브 + 바닥판(진한 실선) 틀, 안쪽 요소는 음각 디테일.

| 파일 | 단계 |
|---|---|
| flow-site | 현장 (공장 건물) |
| flow-connect | 연동 (순환 화살표) |
| flow-refinery-layers | Refinery — 계층형 (A안) |
| flow-refinery-logo | Refinery — 로고 심볼 (B안) |
| flow-use | 활용 (대시보드) |

- `*.png` / `*.webp` : 512×512 (화면 145px 기준 레티나 충분)
- `*@2x.png` / `*@2x.webp` : 1024×1024
- 모든 파일이 같은 캔버스 · 같은 배율이라 같은 크기로 넣으면 크기가 맞습니다.

사용 예 (IndustryPage.astro 의 .ind-flow-img 자리):
  <img class="ind-flow-img" src="/icons/flow/flow-site.webp" width="145" height="145" alt="" aria-hidden="true">

## 흰 면(밝은 배경)용
같은 이름 뒤에 `-light` 가 붙은 파일입니다 (예: `flow-site-light.webp`).
큐브 점선과 바닥판 테두리를 회색 잉크 톤으로 바꿔 흰 배경에서도 보이게 했고, 안쪽 아이콘은 동일합니다.

## 큐브 선 없는 버전
이름 뒤에 `-plain` 이 붙은 파일입니다 (예: `flow-site-plain.webp`).
큐브 점선 · 바닥 테두리 없이 아이콘과 바닥판만 있어 어두운 면 · 흰 면 어디에나 그대로 씁니다.
5개 모두 같은 캔버스 · 같은 배율입니다.
