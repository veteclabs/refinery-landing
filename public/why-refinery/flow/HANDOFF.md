# Why Refinery · '리파이너리에서 이어지는 흐름' 카드 조형물 (모션 포함)

폴더: `public/why-refinery/flow/`
정본: `preview.html` (모션 · 배치) / `meta.json` (레이어 이름 · 중심점) / `motion.css` (그대로 붙일 CSS)

## 파일
모든 이미지는 같은 캔버스 1920×1080(카드 비율 그대로) · 배경 투명 — 겹쳐 놓기만 하면 자리가 맞는다.
세 장은 그래픽 덩어리 면적이 같도록 크기를 맞췄다.

| 카드 | 바탕 | 모션 레이어 |
|---|---|---|
| 01 통합 | story-01.webp | story-01-arc · up0 · up1 · up2 · nodes |
| 02 AI 에이전트 | story-02.webp | story-02-arc · up0 · s0 |
| 03 자동화 | story-03.webp | story-03-arc · up0 · up1 · up2 · s0 · s1 · s2 |

- `arc` 공중선/화살표 · `upN` 선 위 표시(01 네모 · 02 설비의 원인 고리 · 03 라인으로 내려가는 선과 표시) — 바탕에도 정지 상태로 있다.
- `nodes`(01 지식 그래프) · `s0`(02 추세선 카드) · `s0~s2`(03 감지 · 분석 · 보고 카드) — **바탕에 없다.** 빼면 조형이 사라진다.
- `story-0N-still.jpg` : 바탕 + 떠 있는 조형을 합친 정지 이미지(흰 면).

## 1. stories 데이터
```ts
const stories = [
  { flow: 'story-01', layers: ['arc','up0','up1','up2','nodes'], eyebrow: '통합', ... },
  { flow: 'story-02', layers: ['arc','up0','s0'],                 eyebrow: 'AI 에이전트', ... },
  { flow: 'story-03', layers: ['arc','up0','up1','up2','s0','s1','s2'], eyebrow: '자동화', ... },
];
```

## 2. 카드 마크업 (.ind-uc-card 안) — data-flow 에 1·2·3
```astro
<div class="ind-uc-card wr-flow-art" data-flow={i + 1}>
  <img class="ind-uc-img" src={`/why-refinery/flow/${s.flow}.webp`} alt="" width="1920" height="1080" loading="lazy" decoding="async" />
  {s.layers.map((g) => (
    <img class={`wr-ov wr-ov-${g}`} src={`/why-refinery/flow/${s.flow}-${g}.webp`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
  ))}
</div>
```
(`stories.map((s, i) => ...)` 처럼 순번 i 를 받는다.)

## 3. CSS
`motion.css` 내용을 그대로 붙인다. 카드 면은 지금처럼 흰색(#FFFFFF).

## 4. 지워도 되는 옛 파일 (참조 끊은 뒤)
`story-02-ans.webp`, `story-02-up1.webp`, `story-02-up2.webp`, `story-03-ans.webp`, 그리고 기존 `story-0N.svg`
