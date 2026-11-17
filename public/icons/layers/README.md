# 네 층 3D 아이콘 — 제품 소개 '왜 운영체제인가'

회사 소개 '일하는 세 가지 기준' 카드와 같은 자리다. 파일을 여기에 두고
`src/pages/why-refinery.astro` · `src/pages/en/why-refinery.astro` 의
`layers` 배열에서 `img` 에 경로 앞머리를 적으면 바로 들어간다.

| 층 | 파일 이름 앞머리 | layers 의 img 값 |
|---|---|---|
| 연결 | `layer-connect` | `/icons/layers/layer-connect` |
| 온톨로지 | `layer-ontology` | `/icons/layers/layer-ontology` |
| 앱 | `layer-apps` | `/icons/layers/layer-apps` |
| AI 에이전트 | `layer-agent` | `/icons/layers/layer-agent` |

## 규격
- **표시 크기 160x160**. `layer-xxx.webp`(1배, 320px 권장)와
  `layer-xxx@2x.webp`(2배, 640px)를 함께 둔다 — 마크업이 srcset 으로 둘을 묶는다.
- 바탕은 **투명**이다. 카드 면이 #F6F8FA 라 흰 바탕을 깔면 네모가 드러난다.
- 결은 산업별 '솔루션 구조'의 `public/icons/flow/*.webp` 와 같은 아이소메트릭
  3D 다 — 그쪽 넉 장(flow-site · flow-connect · flow-refinery · flow-use)을
  보고 맞춘다.
- WebP 로 커밋한다(`cwebp -q 82 -resize 320 0 원본 -o layer-xxx.webp`).

## 비워 두면
`img: null` 인 동안에는 같은 160x160 상자 안에 글꼴 아이콘(Phosphor)이
가운데 선다. 상자 크기가 같아 카드 높이와 제목 자리는 달라지지 않는다.
