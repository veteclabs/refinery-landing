# Refinery Landing — 개발 규칙

Refinery 제품 소개용 **Astro 기반 정적 사이트**. 랜딩 + 문의 + 블로그(추후 매뉴얼)를
하나의 리포에서 정적으로 빌드해 Vercel에 배포한다. (애플리케이션은 별도 서버에서 서빙)

## 프로젝트 성격
- **Astro (정적 출력)**: `astro build` → `dist/`. Vercel이 Astro를 자동 감지해 빌드·배포한다.
- Node **>=22.12** 필요(`.nvmrc`=22). 기여 전 `nvm use && npm install`.
- 개발: `npm run dev` · 빌드: `npm run build` · 미리보기: `npm run preview`.
- `build.format: 'file'` — 산출물은 `dist/contact.html` 형태(기존 URL 보존). 여기에 `vercel.json`의
  `cleanUrls: true`가 겹쳐, **프로덕션 서빙 URL은 클린 URL**이고 `/x.html` 요청은 `/x`로 308 리다이렉트된다.
  - 내부 링크·canonical·sitemap은 **클린 URL**로 쓴다(`/contact`, `/blog/<slug>`).
  - 단, 로컬 `npm run preview`에는 cleanUrls가 없다 → 프리뷰에선 `/contact`가 404, `/contact.html`만 뜬다.
    프리뷰에서만 나는 404는 배포 이슈가 아니다.

## 구조
```
src/
├─ layouts/    BaseLayout(공유 head)·BlogPost
├─ components/ Seo·Analytics·CookieConsent·Nav·Footer·LanguageSwitcher·RfIcon
├─ pages/      index.astro·en/index.astro·contact.astro·blog/*·rss.xml.js
│              industries/[slug]·use-cases/*·company·docs·resources·why-refinery
│              whitepapers/*·reports/*·privacy·terms·cookie-policy
├─ content/    blog/*.md (컬렉션, 스키마는 content.config.ts)
├─ data/       industries/*·usecases/* (데이터 주도 페이지 소스)
├─ icons/      dark/*·light/* — RfIcon이 인라인으로 넣는 아이콘 13종
├─ i18n/       ui.ts (사전 + t·translatePath 헬퍼)
└─ styles/     global.css(랜딩)·nav-footer·contact·blog·industry·whitepaper·legal
public/        경로 고정 자산(이미지·favicon·og-image·robots·데모 iframe)
middleware.ts  Vercel Edge — 홈(/)에서만 언어 자동 안내(봇·쿠키 예외)
```
- **공유 head·추적은 `BaseLayout`+`Analytics`+`Seo`+`CookieConsent` 1곳**에서 관리한다. 페이지마다 복붙 금지.
- **산업·유즈케이스 페이지는 데이터 주도**다. `src/data/`에 타입에 맞는 데이터 파일을 추가하고
  `index.ts`에 등록하면 `/industries/<slug>`·`/use-cases/<slug>`가 자동 생성된다. 템플릿 `.astro`는 건드리지 않는다.
- 포팅된 랜딩/문의 본문은 전역 CSS·인라인 JS 보존을 위해 `<style is:global>`·`<script is:inline>` 사용.
  - 특히 GA `gtag`처럼 인라인 `onclick`이 참조하는 전역 함수는 `define:vars`(IIFE 래핑) 쓰지 말 것.
- **줄바꿈은 `<br>`로 명시한다.** 마크업 안의 개행은 빌드 시 공백으로 합쳐지므로,
  `white-space: pre-line`에 기대어 개행으로 줄을 나누면 화면에서 한 줄로 이어 붙는다.
  (JS가 `textContent`로 넣는 `\n`은 정상 동작 → 초기 렌더와 상호작용 후가 달라지는 함정)
  - 줄 수가 의도대로 안 나오면 `max-width`도 함께 볼 것. `<br>`가 있어도 폭이 좁으면 각 줄이 다시 감긴다.
    예: `.section-header-row p`의 공통값 360px 때문에 `#integrations` 소제목이 2줄 대신 4줄이 됐다.
- **인라인 태그를 새 줄에서 시작하면 그 앞의 공백이 사라진다.** 빌드가 `글자 → 개행 → <strong>`
  사이의 공백을 지워 화면에서 낱말이 붙는다. 소스만 봐서는 멀쩡해 보이므로 눈에 잘 안 띈다.
  ```astro
  … 결정하는 자는 고객사이므로
  <strong>고객사가 개인정보처리자이고 …</strong>입니다.   ← "고객사이므로고객사가"로 붙는다
  ```
  - 고치는 법: 사라지는 자리에 **`{' '}`를 명시**한다(`… 고객사이므로{' '}`). 한 줄로 합쳐도 되지만
    줄이 길어진다. `&nbsp;`는 쓰지 말 것 — 줄바꿈이 막힌다.
  - 대상 태그: `<strong> <a> <span> <em> <b> <code>`와 `<Ph>` 같은 인라인 컴포넌트.
    닫는 태그 뒤에서 글자가 새 줄로 시작할 때도 같다(`</strong>` 개행 `이 경우에도` → 붙는다).
  - 줄 끝이 **쉼표·마침표**여도 똑같이 사라진다(`처리하며,` 개행 `<strong>` → `처리하며,정보주체의`).
  - 점검은 소스가 아니라 **`dist/*.html`에서** 한다. 2026-09-08 법적 고지 4개 페이지에서 20곳을 고쳤다.

## 아이콘 (`src/components/RfIcon.astro`)
- 솔루션 구조·현장이 먼저입니다·회사 소개 수치·일하는 세 가지 기준 — 네 섹션이 한 벌(13종)을 쓴다.
  Phosphor(`ph-*`)는 별개다. 섞지 말 것.
- **`<img>`가 아니라 인라인 SVG다.** 파일 안의 CSS 애니메이션이 `--rf-play`를 읽는데 `<img>`로 넣으면
  바깥 CSS가 그 변수에 닿지 못해 늘 돌아간다. 기본은 멈춤이고, 조상 `.rf-ic-host`에 마우스를 올렸을 때만 돈다.
  → **아이콘을 놓는 카드에 `rf-ic-host`를 함께 준다.** 빠뜨리면 영영 멈춰 있다.
- 테마는 OS 설정이 아니라 **놓이는 면의 밝기**로 고른다(어두운 면 `dark` · 밝은 면 `light`).
  사이트에 테마 토글이 없고 섹션 배경이 고정이기 때문이다.
- ⚠️ **크기 규칙은 `:global(...)`로 쓴다.** `set:html`로 넣는 인라인 SVG에는 Astro 스코프 속성이 붙지 않아
  페이지 `<style>` 안의 `.cmp-stat-icon { … }` 같은 규칙이 통째로 빗나간다. 크기가 제멋대로면 여기부터 본다.
  (`src/styles/*.css`의 전역 규칙은 그대로 먹는다 — `.ind-flow-img`가 그 경우다.)
- 아이콘을 고칠 때는 `src/icons/`의 SVG를 직접 건드리지 말고 **`refinery-icons/source/`에서 다시 뽑는다**.
  `icons.js`가 13종의 생김새를, `lib.js`가 재질(면 그라데이션 · 디테일 색 · 그림자)을 쥐고 있다.
  막대 두께는 `BAR`(28) · 점 반지름은 `DOT`(15) — 한 벌이 같은 값을 쓴다. 낱개로 다른 값을 박지 말 것.
  다크 디테일은 `DARK_DETAIL_G`(좌상단 brand-50 → 우하단 brand-100) 대각 그라데이션 하나를 함께 쓴다.
  단색 흰 면으로 두면 그 부분만 평평하게 뜨고, 더 파랗게 내리면 54px 수치 아이콘에서 디테일이 묻힌다.
- 다시 뽑는 법: `source/`를 CommonJS로 돌릴 수 있는 곳에 복사해(리포 `package.json`이 `type: module`이라
  그대로는 안 돈다) `setMode({ css: true, theme, pfx: 'rf-<d- 또는 빈칸><이름>-' })` 뒤 `ic.draw()`.
  접두사 규약이 어긋나면 한 페이지에 놓인 아이콘끼리 id가 충돌한다. `build-themes.js`는 playwright가 있어야 돈다.
- `refinery-icons/`에서 커밋하는 건 `source/`와 `README.md`뿐이다. PNG·WebP·테마 산출물(52MB)은 `.gitignore`에 있다.

## 이미지 규칙
- **래스터 이미지는 WebP로 커밋**한다. 표시 크기로 리사이즈(`cwebp -q 82 -resize <폭> 0 원본 -o 결과.webp`).
  - 배경/장식 `q 80`, 스크린샷/제품컷 `q 82`.
- 접힘선 아래 이미지는 `loading="lazy" decoding="async"`. 히어로/최상단에는 lazy 금지(LCP).
- CLS 방지를 위해 `width`/`height` 지정.
- 블로그 등 신규 콘텐츠 이미지는 `src/assets` + `astro:assets`(`<Image>`)로 빌드시 자동 최적화 가능.
- 경로 고정 자산(favicon, og-image, iframe 데모 등)은 `public/`. `og-image.png`는 소셜 호환 위해 PNG 유지.

## 에셋 위생
- 사이트에서 참조되지 않는 이미지·폰트·죽은 코드는 커밋하지 않는다.
- `node_modules`, `dist`, `.astro`, `.DS_Store`, `.vercel`은 `.gitignore`로 제외.
- 디자인 원본(`Refinery UI/`)·미사용 standalone HTML은 `.vercelignore`로 배포 업로드에서 제외.

## 분석/추적 (Analytics) — 동의 여부로 로드 위치가 갈린다
모두 `BaseLayout`에서 자동 포함되지만, **쿠키 사용 여부에 따라 파일이 다르다.**

| 파일 | 로드 대상 | 조건 |
|---|---|---|
| `src/components/Analytics.astro` | Vercel Web Analytics `/_vercel/insights/script.js` · Speed Insights `/_vercel/speed-insights/script.js` | 항상 (쿠키리스) |
| `src/components/CookieConsent.astro` | Google Analytics (`gtag`, ID `G-26MDX5Q369`) · Mixpanel (`mixpanel.init`) | `cookie_consent=granted` 쿠키가 있을 때만 |

- **GA·Mixpanel 관련 작업은 `Analytics.astro`가 아니라 `CookieConsent.astro`에서 한다.**
- 동의 배너는 미결정 시 노출, 푸터 '쿠키 설정' 버튼이 `window.openCookieSettings()`로 재노출한다.
- Vercel 두 종은 **대시보드에서 각각 Enable** 해야 수집되며, localhost 404는 정상.

## 브랜드 문장 · 호칭
- **Refinery = 산업 AI 운영체제**(en: Industrial AI OS). 정의 한 줄:
  「Refinery는 산업 AI 운영체제입니다. 현장의 설비·시스템·문서를 온톨로지 하나로 엮어, 사람과 AI가 같은 근거로 판단하고 조치하게 합니다.」
- **전체와 부분을 같은 이름으로 부르지 않는다.** 「산업 AI 운영체제」는 Refinery 전체에만 쓰고,
  대화형 AI 기능은 「AI 에이전트」(라벨 `AI Agent`)다. 이름을 바꿀 때 일괄 치환하지 말고 자리마다
  전체인지 부분인지 본다.
- Refinery가 무엇인지 말하는 자리(title · description · og · h1 · JSON-LD · `llms.txt` · 정의형 FAQ)에는
  「플랫폼」을 범주어로 쓰지 않는다. 내비 라벨 「플랫폼 개요」 같은 일반 명사는 그대로 둔다.
- 운영체제를 이루는 층은 넷 — 연결 · 온톨로지 · 앱 · AI 에이전트(`/why-refinery`, `llms.txt`). 앱 층은 열려 있다.
  단, **출하되지 않은 앱·기능은 공개 문구에 쓰지 않는다.**
- 범주어를 바꾸면 함께 고칠 파일은 `I18N-GLOSSARY.md` §1 아래에 있다. 제품 이름·구분의 정본은
  앱 리포의 `PRODUCTS.md` 이고, 어긋나면 그쪽이 이긴다.

## SEO / 메타 — `src/components/Seo.astro`
- 페이지별 `title`/`description`/`canonical`/OG/Twitter/`theme-color`를 props로 주입.
- 공개 색인 페이지 `robots: index`, 문의/유틸 `noindex, follow`.
- **sitemap은 `@astrojs/sitemap`이 자동 생성**(`/sitemap-index.xml`), 블로그 **RSS는 `/rss.xml`**.
- 블로그 글은 `BlogPosting` JSON-LD + `og:type=article`. canonical은 클린 URL(sitemap 정합).
- `jsonLd` prop은 객체·배열 모두 가능(국문 홈은 Organization + WebSite + FAQPage 3개, 영문 홈은 Organization + WebSite 2개).
- 정식 도메인은 **`https://refinery.kr`**로 전환 완료(`astro.config.mjs`의 `site`·robots·JSON-LD 기준값).

## 다국어(i18n) — 현재 상태
- 설계: `ko`(무접두사) · `en`(`/en`) · `ja`(`/ja`, 미구현). 로드맵은 `I18N-PLAN.md`.
- **주의: `/en`은 사전 기반이 아니라 `index.astro`를 복제한 별도 파일(`src/pages/en/index.astro`)이다.**
  `Nav.astro`/`Footer.astro`도 쓰지 않고 자체 인라인 nav를 갖는다.
  → **랜딩 카피·네비게이션 변경은 ko/en 두 파일을 함께 고쳐야 한다.**
- `src/i18n/ui.ts`의 사전·헬퍼는 아직 일부만 사용 중(카피 외부화는 미완).
- hreflang은 `alternates` prop을 넘긴 페이지에서만 출력한다(존재하는 로케일만).

## 폼
- 문의 폼은 web3forms(`access_key`는 클라이언트 공개가 정상). 스팸 방어용 honeypot(`botcheck`) 유지/추가.

## Git / 협업 · 배포 흐름
- **`main` 직접 커밋·푸시 금지.** 모든 변경은 작업 브랜치에서 진행한다.
- **2단계 흐름**: 작업 브랜치 → **`develop`(통합·스테이징)** → **`main`(프로덕션)**. 상세 전략은 [CONTRIBUTING.md](CONTRIBUTING.md).
  - 작업 브랜치는 **`develop`에서 분기**하고 **`develop`으로 PR**한다 (base=develop).
  - 릴리스는 **`develop` → `main` PR**로 한다. **`main` 머지 = 프로덕션 자동 배포(refinery.kr).**
  - 긴급 수정은 `hotfix/*` (main에서 분기 → main·develop 둘 다 반영).
- 브랜치 네이밍: `feat/`, `fix/`, `chore/`, `docs/`, `content/` + 짧은 설명.
- 머지 전 반드시 **Preview 배포 URL**에서 검증한다(스테이징 = `develop` Preview). 상태코드만 믿지 말고 히어로 iframe 등 실제 표시를 육안 확인.
- 커밋 메시지는 **`<접두사>: 한국어 요약`** + 본문에 변경 근거. 이미지 변환은 before/after 용량을 남긴다.
  - 접두사: `design:`(배치 · 줄 나눔 · 간격 · 색 등 보이는 것) · `fix:`(동작 · 버그) ·
    `content:`(문구 · 번역 · 콘텐츠) · `feat:`(새 페이지 · 새 기능) · `chore:`(정리 · 설정) ·
    `docs:`(문서). 같은 CSS를 만져도 **보이는 모습을 바꾸면 `design:`**, 깨진 것을 고치면 `fix:`.
  - 줄 나눔 · `<br>` · `max-width` · `text-wrap` 조정은 전부 `design:`이다.
  - 과거 `style:`을 쓴 커밋이 있으나(2026-09-11까지) 지금은 `design:`으로 통일한다.
- PR 본문에는 변경 요약 · 검증 방법 · 영향 범위를 적는다.
- 커밋·PR 메시지에 **AI 공동작성/생성 표기를 넣지 않는다** (`Co-Authored-By`, `Generated with ...` 등 금지).

## 변경 후 로컬 확인
```bash
npm run build && npm run preview   # http://localhost:4321
```
- 콘솔 에러(404) 0, 깨진 이미지 0. sitemap/RSS 생성, 추적 스크립트 로드 확인.
- 배포 후 프로덕션에서 히어로 iframe 등 외부 리소스가 실제로 뜨는지 **육안 확인**(상태코드만 믿지 말 것).
