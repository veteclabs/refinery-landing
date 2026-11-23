industrial-ai 페이지 CTA 배경 그래픽

sparkle/   ai-cta-sparkle.*   AI 스파클 코어
cube/      ai-cta-cube.*      중첩 큐브 (why-refinery W6과 동일 그래픽)

  .webp / @2x.webp  정지 이미지 (1440x300 / 2880x600) — poster, 모션 끄기용
  .webm / .mp4      모션 4초 루프 (2880x600), 배경 #151B23 포함 — 메인 홈 CTA · page-cta와 동일

적용 예 (CTA 섹션 배경색 #151B23)
  <video class="cta-bg-video" autoplay muted loop playsinline poster="/cta/industrial-ai/<폴더>/<파일>.webp">
    <source src="/cta/industrial-ai/<폴더>/<파일>.webm" type="video/webm">
    <source src="/cta/industrial-ai/<폴더>/<파일>.mp4" type="video/mp4">
  </video>
  .cta-bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:right center;pointer-events:none}
  문구/버튼은 position:relative; z-index:1
