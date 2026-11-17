# 회사 소개 페이지 그래픽 교체 요청 (company-story 최신본)

대상 파일: `src/components/CompanyPage.astro`
그래픽 폴더: `public/company-story/` (이미지·`meta.json`·`preview.html`이 최신본, 이미 교체 완료)
기준: `public/company-story/preview.html` 이 모션·배치의 정본. `meta.json` 이 크기·큐브 자리의 정본.

## 1. 장면 폭 — `SCENE_REL` 교체
meta.json 의 `dw`(권장 폭, 1440px 화면 기준)를 가장 넓은 860 으로 나눈 값.

```ts
const SCENE_REL: Record<number, number> = { 1: 0.915, 2: 0.931, 3: 1.000, 4: 1.000, 5: 0.930 };
```
- 메인(scene-0)은 표시 폭 1100px(`meta.json` '0'.dw). 현재 900px 로 잡혀 있으면 1100px 로 변경.
- 장면별 `dw`: 0=1100 / 1=787 / 2=801 / 3=860 / 4=860 / 5=800

## 2. 모션 레이어 — `SCENE_LAYERS` 교체
레이어 이미지는 모두 바탕 그림과 같은 크기의 전체 캔버스. 위치값은 `meta.json` 의 `ov`(원본 픽셀)를 백분율로 바꾼 값.

```ts
const SCENE_LAYERS: Record<number, Layer[]> = {
  3: [ // 100+
    { file: '3-grid.webp', cls: 'ov-grid', ox: '50.00%', oy: '35.30%' },
    { file: '3-up0.webp',  cls: 'ov-up0',  ox: '46.32%', oy: '35.17%' },
    { file: '3-up1.webp',  cls: 'ov-up1',  ox: '43.52%', oy: '33.04%' },
    { file: '3-up2.webp',  cls: 'ov-up2',  ox: '35.50%', oy: '33.20%' },
  ],
  4: [ // 20+  (예전 4-spoke-base / 4-spoke / 4-r0 / 4-r1 은 삭제 — 새 그림에 없음)
    { file: '4-arc.webp', cls: 'ov-arc', ox: '50.03%', oy: '25.94%' },
    { file: '4-up0.webp', cls: 'ov-up0', ox: '54.25%', oy: '21.78%' },
    { file: '4-up1.webp', cls: 'ov-up1', ox: '57.40%', oy: '2.33%' },
    { file: '4-up2.webp', cls: 'ov-up2', ox: '34.13%', oy: '12.50%' },
  ],
  5: [ // 마지막 (움직이는 링은 r2 레이어 하나)
    // 퍼지는 링: 5-w0 ~ 5-w12 (13장, 같은 굵기, 안쪽→바깥 순서). 각 레이어에 style="--i:번호;--pk:세기"
    //   --pk = 0.32 × (1 − i/12)  → 바깥으로 갈수록 연해지고 마지막 장은 0
    { file: '5-b0.webp', cls: 'ov-b0', ox: '69.94%', oy: '16.83%' },
    { file: '5-b1.webp', cls: 'ov-b1', ox: '31.42%', oy: '9.95%' },
    { file: '5-b2.webp', cls: 'ov-b2', ox: '29.99%', oy: '48.91%' },
    { file: '5-b3.webp', cls: 'ov-b3', ox: '68.55%', oy: '55.45%' },
  ],
};
```
- 6번 떠 있는 도형 4개(5-b0~b3)는 바탕 그림에 없음 → 레이어를 빼면 도형이 사라짐.
- 나머지 레이어(그리드·네모·공중선·링)는 바탕에도 정지 상태로 그려져 있어, 빠지면 움직임만 없어짐.

## 3. 모션 CSS (preview.html 과 동일하게)
레이어 공통: `position:absolute; inset:0; width:100%; height:100%; transform-origin: var(--ox) var(--oy);`

```css
/* 4번 데이터 층 테두리 — 스캔 빛이 대각선으로 지나감 */
.ov-grid{-webkit-mask-image:linear-gradient(110deg,transparent 40%,#000 50%,transparent 60%);mask-image:linear-gradient(110deg,transparent 40%,#000 50%,transparent 60%);-webkit-mask-size:300% 100%;mask-size:300% 100%;animation:scan 4.5s linear infinite}
/* 5번 공중선 — 빛이 선을 따라 지나감 */
.ov-arc{-webkit-mask-image:linear-gradient(100deg,transparent 38%,#000 50%,transparent 62%);mask-image:linear-gradient(100deg,transparent 38%,#000 50%,transparent 62%);-webkit-mask-size:300% 100%;mask-size:300% 100%;animation:scan 3.6s linear infinite}
@keyframes scan{from{-webkit-mask-position:100% 0;mask-position:100% 0}to{-webkit-mask-position:0 0;mask-position:0 0}}
/* 4·5번 네모 — 차례로 깜빡임 */
.ov-up0,.ov-up1,.ov-up2{opacity:0;animation:blink 2.4s ease-in-out infinite}
.ov-up1{animation-delay:.8s}.ov-up2{animation-delay:1.6s}
@keyframes blink{0%,100%{opacity:0}40%,55%{opacity:1}}
/* 6번 링 — 13장이 차례로 이어받으며 다음 링 자리까지 미끄러지듯 커지고 서서히 사라짐(끊김 없이 흐름) */
.ov-w{opacity:0;transform-origin:var(--ox) var(--oy);animation:wflow 3.6s linear infinite;animation-delay:calc(var(--i)*.24s - 3.6s)}
@keyframes wflow{0%{opacity:0;transform:scale(1)}7%{opacity:var(--pk)}13.3%{opacity:0;transform:scale(var(--sc))}100%{opacity:0;transform:scale(var(--sc))}}
/* 각 5-wN 레이어 style: --i:N; --pk:0.32×(1−N/13); --sc:(19+1.5N+1.5)/(19+1.5N); --ox:49.97%; --oy:57.03% (preview.html 참고) */
/* 6번 떠 있는 도형 4개 — 천천히 위아래로 */
.ov-b0,.ov-b1,.ov-b2,.ov-b3{animation:bob 3.4s ease-in-out infinite}
.ov-b1{animation-delay:-.85s}.ov-b2{animation-delay:-1.7s}.ov-b3{animation-delay:-2.55s}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4.5%)}}
@media (prefers-reduced-motion: reduce){.ov-grid,.ov-arc,.ov-up0,.ov-up1,.ov-up2,.ov-w{display:none}.ov-b0,.ov-b1,.ov-b2,.ov-b3{animation:none}}
```
- 6번 링·5번 공중선·4번 세로선의 "아래쪽 흐려짐"은 이미지에 이미 들어가 있음 (CSS 작업 없음).
- 기존 클래스 `spk-base`, `spk-flow`, `ov-r0`, `ov-r1` 관련 CSS 는 삭제해도 됨.

## 4. 파란 네모 블록(큐브) 이동
- 자리·크기는 `meta.json` 의 `ax · ay · k` 를 그대로 읽으면 됨(현재 코드 방식 유지). 화면 크기: 1·3·6번 136px, 2·5번 90px, 4번 55px.
- 움직임을 `preview.html` 의 스크립트로 교체:
  - 각 장면 자리에서 구간 앞 35% 동안 머문 뒤(착지 후 잠시 고정), 포물선으로 다음 자리로 이동(ease-in-out).
  - 도착 직전 살짝 눌렸다 펴지는 착지(`transform-origin: 50% 90%`, scale).
  - 화면 위치는 목표값을 매 프레임 14%씩 따라가는 관성 처리(스크롤이 끊겨도 부드럽게).

```js
const easeIO=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
// A = 각 장면 큐브 자리 [{x,y,s}] (지금 코드의 A 계산 그대로), mid = 화면 55% 지점
function target(mid){
  let x=A[0].x,y=A[0].y,s=A[0].s,r=0,q=1;
  for(let i=0;i<A.length-1;i++){
    const a=A[i],b=A[i+1],span=b.y-a.y,t0=a.y+span*.35,t1=b.y-span*.05;
    if(mid<=t0)break;
    const t=Math.min(1,(mid-t0)/(t1-t0)),e=easeIO(t);
    x=a.x+(b.x-a.x)*e; y=a.y+(b.y-a.y)*e-Math.sin(Math.PI*e)*Math.min(span*.12,90);
    s=a.s+(b.s-a.s)*e; r=Math.sin(Math.PI*e)*(i%2?-70:70)*(1-e*.2);
    q=t>.9?1-Math.sin((t-.9)/.1*Math.PI)*.08:1;
    if(t<1)break;
  }
  return {x,y,s,r,q};
}
// 매 프레임: cur += (target - cur) * 0.14  (x,y,s,r,q 각각)
// cube.style.transformOrigin='50% 90%';
// cube.style.transform=`translate(${x-s/2}px,${y-s*.54}px) rotate(${r}deg) scale(${1+(1-q)*.6},${q})`;
```
※ 스크롤 이벤트 때만 그리지 말고 requestAnimationFrame 루프로 계속 그려야 관성이 살아남.

## 5. 정리해도 되는 옛 파일 (페이지에서 참조 끊은 뒤 삭제)
`4-spoke.webp`, `4-spoke-base.webp`, `4-r0.webp`, `4-r1.webp`, `5-r0.webp`, `5-r1.webp`
