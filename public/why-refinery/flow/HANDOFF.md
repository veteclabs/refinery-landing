# Why Refinery · '리파이너리에서 이어지는 흐름' 카드 조형물 (모션 포함)

폴더: `public/why-refinery/flow/`
정본: `preview.html` (모션 · 배치) / `meta.json` (레이어 이름 · 중심점)

## 파일
모든 이미지는 같은 캔버스 1920×1080(카드 비율 그대로) · 배경 투명이다. 겹쳐 놓기만 하면 자리가 맞는다.

| 카드 | 바탕 | 모션 레이어 |
|---|---|---|
| 01 통합 | story-01.webp | story-01-arc · up0 · up1 · up2 · nodes |
| 02 AI 에이전트 | story-02.webp | story-02-arc · up0 · up1 · up2 · ans |
| 03 자동화 | story-03.webp | story-03-arc · up0 · up1 · ans |

- `arc` 공중선 · `upN` 선 위의 네모/점 — 바탕에도 정지 상태로 그려져 있어 빠지면 움직임만 없어진다.
- `nodes`(01 지식 그래프) · `ans`(02 차트 카드 · 03 문서 카드) — **바탕에 없다.** 레이어를 빼면 그 조형이 사라진다.
- `story-0N-still.jpg` : 바탕 + nodes/ans 를 합친 정지 이미지(흰 면). 모션이 필요 없을 때나 썸네일용.

## 1. stories 데이터
```ts
const stories = [
  { flow: 'story-01', layers: ['arc','up0','up1','up2','nodes'], eyebrow: '통합', ... },
  { flow: 'story-02', layers: ['arc','up0','up1','up2','ans'],   eyebrow: 'AI 에이전트', ... },
  { flow: 'story-03', layers: ['arc','up0','up1','ans'],         eyebrow: '자동화', ... },
];
```

## 2. 카드 마크업 (.ind-uc-card 안)
```astro
<div class="ind-uc-card wr-flow-art">
  <img class="ind-uc-img" src={`/why-refinery/flow/${s.flow}.webp`} alt="" width="1920" height="1080" loading="lazy" decoding="async" />
  {s.layers.map((g) => (
    <img class={`wr-ov wr-ov-${g === 'nodes' || g === 'ans' ? 'keep' : g}`} src={`/why-refinery/flow/${s.flow}-${g}.webp`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
  ))}
</div>
```

## 3. CSS
```css
.wr-flow-art{position:relative}
.wr-ov{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
/* 공중선 — 빛이 선을 따라 지나감 */
.wr-ov-arc{-webkit-mask-image:linear-gradient(100deg,transparent 38%,#000 50%,transparent 62%);mask-image:linear-gradient(100deg,transparent 38%,#000 50%,transparent 62%);-webkit-mask-size:300% 100%;mask-size:300% 100%;animation:wrScan 3.6s linear infinite}
@keyframes wrScan{from{-webkit-mask-position:100% 0;mask-position:100% 0}to{-webkit-mask-position:0 0;mask-position:0 0}}
/* 선 위 네모/점 — 차례로 깜빡임 */
.wr-ov-up0,.wr-ov-up1,.wr-ov-up2{opacity:0;animation:wrBlink 2.4s ease-in-out infinite}
.wr-ov-up1{animation-delay:.8s}.wr-ov-up2{animation-delay:1.6s}
@keyframes wrBlink{0%,100%{opacity:0}40%,55%{opacity:1}}
/* 떠 있는 조형(지식 그래프 · 답변 카드 · 문서 카드) — 천천히 위아래 */
.wr-ov-keep{animation:wrBob 3.4s ease-in-out infinite}
@keyframes wrBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.2%)}}
@media (prefers-reduced-motion:reduce){.wr-ov-arc,.wr-ov-up0,.wr-ov-up1,.wr-ov-up2{display:none}.wr-ov-keep{animation:none}}
```
- 카드 면은 지금처럼 흰색(#FFFFFF) 그대로 둔다. 그림에 제 바탕이 없다.
- `.ind-uc-img` 의 `object-fit: cover` 는 그대로 둬도 된다(같은 1920:1080).
- 기존 `story-0N.svg` 는 참조를 끊은 뒤 지워도 된다.
