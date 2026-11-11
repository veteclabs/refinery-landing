페이지 CTA 배경 그래픽

industry-cta-terrain.*  산업별 페이지 CTA (와이어프레임 지형)
usecase-cta-focus.*     과제별 페이지 CTA (포커스 타깃)

  .webp / @2x.webp  정지 이미지 (1440x300 / 2880x600) — poster, 모션 끄기용
  .webm / .mp4      모션 4초 루프 (2880x600, 배경 #151B23 포함 — 메인 홈 CTA와 동일)

그래픽 왼쪽은 배경색으로 자연스럽게 사라지게 되어 있어 CTA 섹션 전체 폭에 깔면 됩니다.
  <video class="cta-bg-video" autoplay muted loop playsinline poster="/cta/page-cta/industry-cta-terrain.webp">
    <source src="/cta/page-cta/industry-cta-terrain.webm" type="video/webm">
    <source src="/cta/page-cta/industry-cta-terrain.mp4" type="video/mp4">
  </video>
  .cta-bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:right center;pointer-events:none}
  섹션 배경색도 #151B23 으로 맞춰 주세요, 문구/버튼은 position:relative; z-index:1
