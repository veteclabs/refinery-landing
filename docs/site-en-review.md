# 법적 고지 외 영어 페이지 검증 기록

2026-09-18. 대상은 `/en` 아래 영어 페이지 27개(법적 고지 4개 제외).
법적 고지 검증 기록은 `legal-en-blind-review.md`에 따로 있다.

## 1. 범위

| 묶음 | 페이지 |
|---|---|
| 랜딩·회사 | `/en` · `/en/company` · `/en/contact` |
| 허브 | `/en/docs` · `/en/resources` · `/en/blog` |
| 개념 | `/en/industrial-ai` · `/en/energy-management` |
| 산업 7 | automotive · chemicals · electronics · energy · food · machinery · steel |
| 유즈케이스 7 | energy-optimization · factory-energy · power-management · power-quality · predictive-maintenance · quality-prediction · sensor-monitoring |
| 블로그 5 | energy-optimization · industrial-data-best-practices · predictive-maintenance · quality-prediction · refinery-blog-start |

영어판이 없는 한국어 페이지 6개: `why-refinery` · `whitepapers/ai-agent` · `whitepapers/data-integration` ·
`reports/2026-industrial-data` · `agent-replay-demo` · `agent-replay-demo-en`.

## 2. 방법

1. **구조 대조** — `dist/*.html`의 `<main>`에서 p·li·h1~h4·th·td·dt·dd를 뽑아 ko/en 단위 수를 맞춘다(영어 1,069단위).
2. **수치 대조** — 본문의 숫자를 모두 뽑아 양쪽을 비교한다(날짜 형식·조사 차이는 걸러낸다).
3. **길이 비율** — 한 단위의 영어/한국어 글자수 비가 1.35 미만이면 문장 누락을 의심하고 원문을 확인한다.
   (한국어 1자 ≈ 영어 2.2~2.8자)
4. **링크 점검** — 영어 페이지 `<main>` 안에서 `/en`으로 시작하지 않는 링크를 모두 뽑는다.
   언어 전환 링크와 법적 고지의 "Korean original" 링크는 정상으로 본다.
5. **메타 점검** — `html lang` · `<title>` · description 길이 · canonical · `og:locale` · `hreflang` alternates.
6. **표기 일관성** — 영국식/미국식 철자, 대시 종류, 숫자 표기.
7. **정독** — 영어 본문 전체를 읽고 문법·자연스러움을 본다.
8. **반응형** — 390 · 768 · 1280px에서 가로 넘침과 텍스트 잘림을 검사한다.

## 3. 결과

### 3.1 내용 누락 (4건)

| 위치 | 한국어 | 영어 | 판단 |
|---|---|---|---|
| `/en` FAQ "What happens to our existing SCADA/MES/ERP?" | 3문장 | 1문장 | "시스템이 없는 현장은 30년 경험으로 만든 템플릿(예: 에너지경영시스템)에서 새로 구축합니다. 두 방식 모두 지원합니다." 누락. FAQPage JSON-LD에도 그대로 들어간다 |
| `/en` Lens 카드 제목 | 원인을 찾고 **미래를 그리는** 분석 | Analysis that finds causes | 예측이 사라졌다 |
| `/en` 통합 섹션 제목 | **기존 위에 얹거나** 처음부터 새로, 어느 쪽이든 끊김 없이 | Adopt it anew, seamlessly | 두 경로 중 한쪽만 남았다 |
| `/en/use-cases/energy-optimization` 실행 3항목 | 각 2문장 | 각 1문장 | 성과를 말하는 둘째 문장이 셋 다 빠졌다 |

### 3.2 한국어 페이지로 가는 링크 (5건)

| 위치 | 현재 | 비고 |
|---|---|---|
| `/en` "Request a demo" 2곳 | `/contact` | 드로어가 뜨면 가려지지만, 열리지 않으면 한국어 문의 페이지 |
| `/en/docs` "Read the blog" | `/blog` | `/en/blog`가 있다 |
| `/en/industrial-ai` 4번째 카드 | `/en/use-cases/energy-optimization` | 한국어는 `/energy-management`. 영어판 `/en/energy-management`가 있는데도 다른 곳을 가리킨다 |
| 영어 블로그 3편 "In closing" | `/whitepapers/ai-agent` · `/whitepapers/data-integration` | 백서 영어판이 없다 |
| `/en/resources` 카드 6개 | 링크 없음 | 한국어는 앞 3개가 링크다. 영어 방문자는 자료실에서 아무것도 받을 수 없다 |

### 3.3 표기 흔들림

- `optimisation` · `optimise` 각 1곳(`src/data/usecases/en.ts`) — 나머지는 미국식(`optimization` 16 · `optimize` 3)
- 대시 세 가지 혼용 — en dash 27 · 스페이스+하이픈 17 · em dash 4
- 숫자 — `thirty years`(company) vs `30 years`(industrial-ai)
- 구분자 — 랜딩·산업은 `·`, 문의 폼 산업 목록은 `&`
- 구조 칩 개수 — automotive 한국어 5개 → 영어 3개, energy 4개 → 3개(나머지 5개 산업은 1:1)

### 3.4 낱말 선택

| 위치 | 현재 | 한국어 | 비고 |
|---|---|---|---|
| electronics 유즈케이스 3 | the blast radius | 영향 범위 | 반도체·전자 공장 맥락에서 폭발 반경으로 읽힐 수 있다 |
| electronics 도입 효과 | the responsible engineer is **paged** | 담당자를 바로 호출합니다 | IT on-call 뉘앙스. `alerted`가 현장 영어에 가깝다 |
| chemicals 유즈케이스 3 | Air-fuel ratio based blower inverter control | — | `Air-fuel-ratio-based` |
| machinery 유즈케이스 5 | DC microgrid based equipment control | — | `DC-microgrid-based` |

### 3.5 SEO

- description이 영어만 175~264자 — 검색결과에서 잘린다(권장 160자 안팎). 한국어판은 101~139자.
  대상: `/en`(175) · company(217) · industrial-ai(197) · energy-management(264) · 산업 7(184~242) · predictive-maintenance(175)
- `hreflang` alternates 없음: contact · docs · resources · blog · 블로그 글 5편.
  **한국어판도 같아서 영문만의 문제는 아니다** — 별건으로 본다.
- `html lang="en"` · canonical · `og:locale` · robots는 27개 모두 정상.

### 3.6 문제 없음

- 영어 페이지에 남은 한국어 글자: 없음(법적 고지의 수탁자·고시 제목 병기는 의도된 것)
- 구조: 산업 7 · 유즈케이스 7 · 블로그 5 모두 한국어판과 단위 수가 일치(automotive·energy의 칩 묶음만 예외)
- 반응형: 390 · 768 · 1280px에서 가로 넘침 0, 텍스트 잘림 0
- 문법: 블로그 5편을 포함해 정독한 범위에서 문법 오류는 발견되지 않았다

## 4. 역번역 검증 (블라인드, A안)

법적 고지에서 쓴 방식과 같다 — 한국어 원문 접근을 막은 번역가가 **영어만 읽고 한국어로 옮긴 뒤**,
그 결과를 원문과 조항별로 대조한다. 영어가 원문보다 넓어졌는지·좁아졌는지가 이 단계에서 드러난다.

대상은 영어 1,069단위 전체. 여섯 묶음으로 나눠 각각 독립된 번역가에게 맡겼다.

| 묶음 | 페이지 | 단위 |
|---|---|---|
| g1 | `/en` · company · docs · resources · blog | 107 |
| g2 | industrial-ai · energy-management | 54 |
| g3 | 산업 automotive · chemicals · electronics · energy | 355 |
| g4 | 산업 food · machinery · steel | 274 |
| g5 | 유즈케이스 7 | 183 |
| g6 | 블로그 5 | 96 |

자동차·에너지는 구조 칩 개수가 달라(한국어 17·16 vs 영어 15) 단순 인덱스 매칭이 밀린다.
`difflib`로 태그 시퀀스를 정렬해 다시 맞춘 뒤 대조했다.

### 4.1 내용이 빠진 곳

| 위치 | 빠진 것 |
|---|---|
| `/en` FAQ 기존 SCADA/MES/ERP | 2문장 — 템플릿 신규 구축, 두 방식 모두 지원 |
| `/en` Lens 카드 제목 | 미래를 그리는(예측) |
| `/en` 통합 섹션 제목 | 기존 위에 얹거나(두 경로 중 한쪽) |
| `/en/use-cases/energy-optimization` 실행 3항목 | 각 둘째 문장(성과) |
| `/en/use-cases/factory-energy` 문제 제기 | **"ESG 보고를 위한 집계도 매번 수작업으로 반복됩니다."** 한 문장. 바로 아래 해결책에 ESG 자동 집계가 있어 영어판만 근거 없이 해법이 나온다 |
| `/en/industrial-ai` 예지보전 카드 | 모터 예지보전까지 |
| `/en/industrial-ai` · `/en/energy-management` 카드 설명 | 주어 — 에너지 AI · 제조 AI · 전력관리 솔루션 |
| `/en/resources` 카드 제목 3개 | 설명문이 라벨로 대체됨(Product overview · Whitepaper ⁠· …) |
| 자동차 · 전자 유즈케이스 2 | 각 신호가 **어느 설비의 무엇인지** → `giving every signal a meaning` |
| 자동차 도입 효과 | **회전체** 진동에서 **이상** → `Faults ... in vibration data`(고장) |

### 4.2 뜻이 어긋난 곳

| 위치 | 원문 | 영어 | 역번역 |
|---|---|---|---|
| company | 화려한 기술 데모는 만들지 않습니다 | We do not build **impressive** demos | 인상적인 데모를 만들지 않습니다 |
| resources | AI 에이전트 **도입 흐름** | the **direction** of AI agents | AI 에이전트의 방향 |
| industrial-ai 4번째 카드 | 에너지관리시스템(EMS) 개념 | Energy optimization | 카드와 링크가 모두 다른 페이지 |
| electronics 유즈케이스 3 | 영향 범위 | the **blast radius** | 폭발 반경으로 읽힐 수 있다 |

`impressive`는 "우리 데모는 인상적이지 않다"는 자기비하로 읽힌다. 원문의 "화려한"은 `flashy`·`showy`다.

### 4.3 원문에 없는 단정이 붙은 곳

법적 고지 검증에서 가장 먼저 찾던 유형이다. 한국어는 모두 단정 없이 "…하지 않습니다 / …합니다"인데,
영어에 `never` · `any` · `every`가 붙어 회사의 약속이 커졌다.

| 위치 | 원문 | 영어 |
|---|---|---|
| `/en` 보안 | 고객 데이터는 AI 모델 학습에 사용되지 않습니다 | Customer data is **never** used |
| `/en` 멀티테넌시 | 교차 접근을 차단합니다 | block **any** cross-access |
| `/en/industrial-ai` | 데이터가 사내를 벗어나지 않는 온프레미스 | data **never** leaves your network |
| `/en/energy-management` | 〃 | data **never** leaves your company |
| `/en/industrial-ai` | 근거 있는 판단을 만드는 것이 핵심 | so that **every** decision has evidence |
| 자동차 · 전자 | 각 신호가 | **every** signal |
| 에너지 | 출처까지 추적 가능한 | **every** figure traceable |
| energy-optimization | 총량만 봐서는 보이지 않아 | Totals alone **never** show |
| industrial-data-best-practices | 그 근거를 추적할 수 있습니다 | **every** figure stays traceable |

참고로 영어판 개인정보처리방침은 같은 내용을 `is not used to train artificial intelligence models`로 썼다.
랜딩만 `never`로 더 세다.

### 4.4 문제가 없던 곳

- 블로그 5편(96단위) — 문장 누락 0, 단정 강화 실질 0. 번역이 가장 충실하다
- 산업 7페이지의 문제 제기 · 유즈케이스 · 도입 효과 본문 — 어휘 선택 차이는 있으나 뜻이 좁아지거나 넓어진 곳 없음
- 두 문장을 한 문장으로 합친 곳(유즈케이스 다수)은 내용이 보존되어 있다

### 4.5 번역가가 모호하다고 표시한 곳

영어만 읽고 두 가지로 읽힌다고 표시한 것들. 뜻이 틀린 것은 아니지만 영어 독자가 헷갈릴 수 있다.

`Adopt it anew`(새로/다시) · `run by one question`(사람이 운영/현장이 돌아감) · `from the floor`(현장에서/바닥부터) ·
`thirty years in the field`(수식 대상) · `quality`(전력 품질/에너지 품질) · `savings`(절감 기회/절감액) ·
`switchgear`(수배전반/개폐장치) · `equipment flow and quality`(2항목/3항목) · `model`(차종/모델) ·
`thermal boiler`(열매체 보일러/열 보일러) · `a single grid feed` · `a run`(가동/배치)

## 5. 수정 반영 (2026-09-18, `content/site-en-review`)

§3 · §4에서 찾은 것 중 **번역에 해당하는 것만** 고쳤다. 아래 세 가지는 사용자 결정으로 **보류**한다.

- 영어판이 없는 한국어 자료(백서 2종 · why-refinery)로 가는 링크 — 다른 영어 페이지 검증을 끝낸 뒤에 다룬다
- description 길이(영어 175~264자) — 한국어판도 픽셀 기준으로는 같이 잘리므로 함께 판단한다
- `hreflang` alternates 누락 — 한국어판과 공통이라 별건

### 5.1 내용 복원

| 페이지 | 고친 것 |
|---|---|
| `/en` FAQ | 빠졌던 2문장 추가 — `Where no system exists, we build from a template shaped by thirty years on site (an energy management system, for example). Both paths are supported.` |
| `/en` Lens 카드 | `Analysis that finds causes` → `…and looks ahead` |
| `/en` 통합 섹션 제목 | `Adopt it anew, seamlessly` → `Layer onto what you have, or start from scratch — either way, without a break` |
| `/en/use-cases/energy-optimization` | 실행 3항목에 빠졌던 둘째 문장 추가 |
| `/en/use-cases/factory-energy` | `Aggregating figures for ESG reporting turns into manual work, every time.` 추가 |
| `/en/industrial-ai` | 예지보전 카드에 `down to motor predictive maintenance` · 카드 주어 복원(`Energy AI that…` · `Manufacturing AI that…`) |
| `/en/energy-management` | 카드 주어 복원(`A power management solution that…` · `Factory energy management`) |
| `/en/resources` | 카드 제목 3개를 라벨에서 문장으로(파일 상단 주석의 규칙대로 — 명사구는 `cover`에만) |
| 자동차 · 전자 | `giving every signal a meaning` → `each signal carries which asset it belongs to and what it measures` |
| 자동차 도입 효과 | `Faults ... in vibration data` → `Anomalies are caught early in rotating-equipment vibration` |
| 전자 유즈케이스 4 | 제목에 heating equipment 추가 |

### 5.2 뜻이 어긋난 곳

| 원문 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|
| 화려한 기술 데모 | `impressive demos` | `flashy tech demos` |
| AI 에이전트 도입 흐름 | `the direction of AI agents` | `how AI agents are being adopted` |
| 영향 범위 | `the blast radius` | `the scope of impact` |
| 담당자를 바로 호출 | `is paged at once` | `is alerted at once` |
| 에너지관리시스템(EMS) 카드 | `Energy optimization` → `/en/use-cases/energy-optimization` | `Energy management system (EMS)` → `/en/energy-management` |

### 5.3 원문에 없는 단정 제거

회사의 약속에 붙은 것만 고쳤다. 고객 현장의 문제를 서술하는 `never`(예: `the whole picture never forms`)는
회사 의무와 무관해 그대로 둔다.

| 위치 | 바꾼 뒤 |
|---|---|
| `/en` 보안 카드 · FAQ | `is never used` → `is not used` |
| `/en` 멀티테넌시 | `block any cross-access` → `block cross-access` |
| `/en` 보안 · FAQ · industrial-ai · energy-management · energy 산업 | `data never leaves…` → `data does not leave…` (5곳) |
| 에너지 산업 유즈케이스 4 | `every figure traceable` → `traceable` |
| energy-optimization | `Totals alone never show` → `do not show` |

### 5.4 표기 통일 — `I18N-GLOSSARY.md` §0

- 철자 미국식 — `optimisation`·`optimise`·`analyses`·`signalling` → `optimization`·`optimize`·`analyzes`·`signaling`
- 대시 — 스페이스+하이픈 17곳 · en dash 27곳 → em dash `—`
- 아포스트로피 — 직선 `'` → 곡선 `’`
- `on-premise` → `on-premises`
- 하이픈 — `Air-fuel-ratio-based` · `DC-microgrid-based`
- 구조 칩 — 자동차 3→5개, 에너지 3→4개로 나눠 한국어와 맞춤

> ⚠️ `/en/index.astro`에는 인라인 JS가 있다. 대시 일괄 치환이 **뺄셈 연산자까지 바꿔** 스크립트가 깨졌다.
> 되돌린 뒤 본문만 다시 고쳤다. 이 파일에서 대시를 일괄 치환하지 말 것.

### 5.5 링크

- `/en` "Request a demo" 2곳 → `/en/contact`
- `/en/docs` "Read the blog" → `/en/blog`(`DocsPage.astro`에 `blogHref`를 로케일별로 추가)

### 5.6 확인

- 빌드 66페이지 정상, 반영 24곳 전수 확인
- **ko/en 단위 수 대조 차이 0** — 자동차·에너지의 칩 불일치까지 해소됐다
- 반응형 390 · 768 · 1280px — 가로 넘침 0, 잘림 0
- 영어 본문에 남은 표기 문제 0(스페이스하이픈·en dash·직선 아포스트로피·영국식 철자 모두 0)

## 6. 번역기 역번역 대조 (B안) — 진행 중

블라인드 역번역(§4)과 별개로, 영어판을 1500자 조각으로 나눠 사용자가 번역기에 돌린 결과를
조항 번호로 대조한다. 조각 파일은 `번역검증-mt/site/pages/`(git 제외)에 페이지별로 둔다.

### 6.1 랜딩 `/en` — 50단위 (본문 38 + FAQ 12)

> ⚠️ 단위 추출이 `<main>` 안의 p·li·h1~h4 등 **블록 태그만** 잡는다. 랜딩 FAQ는 `<div class="faq-q/faq-a">`
> 라서 처음 만든 조각에서 빠졌다. `01b_랜딩-FAQ.txt`로 보충했다. 나머지 25개 페이지에는 같은 누락이 없다.

§5에서 고친 곳은 번역기에서 모두 의도대로 읽혔다 — Lens 예측 · 두 도입 경로 · `never`/`any` 제거 ·
FAQ 2문장 복원 · 영어 지원 문구.

새로 나온 것:

| 단위 | 영어 | 번역기가 읽은 뜻 | 조치 |
|---|---|---|---|
| [1] | **Refinery** Industrial AI OS | **정유 산업용** AI OS | `<span translate="no">` |
| [27] | No matter **the field** | **분야**에 상관없이 | `No matter where you operate` |
| [40] | the scale of your **field** | 해당 **분야**의 규모 | `the scale of your operation` |
| [30] | TLS 1.3 in transit, AES-256 at rest | 전송 중 TLS 1.3, 저장 시 AES-256 **적용** | `Encrypted with TLS 1.3 in transit and AES-256 at rest.` |

#### field는 그대로 둔다 — 2026-09-18 사용자 판단

`field`(현장 = 일이 벌어지는 맥락)와 `site`(사업장 = 물리적 장소)는 뜻이 다르다.
`AI understands the field`처럼 **맥락**을 이해한다는 자리에서는 `field`가 맞고 `site`로 바꾸면 뜻이 좁아진다.
번역기도 이런 자리는 모두 "현장"으로 정확히 읽었다.

| 유지 | 이유 |
|---|---|
| AI understands **the field** | 장소가 아니라 현장 사정을 안다는 뜻 |
| **The field** on one dashboard · **A field** run by one question | 대시보드에 담기는 것은 현장 상황 |
| **field data** · **field operations** · **field edge** | 산업계 관용어 · OT 기술 용어 |

고친 세 곳도 `field`가 나빠서가 아니라 **붙는 자리**가 문제였다.
`No matter the ~`는 뒤 낱말을 범주로 읽게 하고, `scale of ~`는 뒤에 잴 수 있는 대상을 요구한다.

#### 섹션 제목을 문장으로

한국어 「산업도 과제도 가리지 않는 / 모든 현장에 최적화된 솔루션」은 양보절이 앞에 서고
명사구로 닫히는 한 문장이다. 영어는 `Optimized for every field, any industry, any challenge`로
세 조각을 나열해 주종이 사라져 있었다.

`Whatever the industry or challenge, / a solution optimized for every field`로 바꿨다.
바로 아래 보안 제목 `No matter where you operate, / an uncompromising security framework`와 대구를 이루는데,
한국어도 「산업도 과제도 가리지 않는」 / 「어떤 현장에서도」로 같은 리듬이다.

측정: 1440px·768px 2줄(제목 716·480px), 가로 넘침 0.
**모바일 390px에서 3줄 → 4줄**이 된다(한국어는 2줄). 모바일 일괄 점검 때 함께 본다.

#### 보안 카드에 동사를 되살렸다

한국어 「…AES-256으로 **암호화합니다**」인데 영어는 `TLS 1.3 in transit, AES-256 at rest.`로
동사 없는 명사구였다. 번역기는 "적용"으로 메웠고 블라인드 역번역은 아예 빼고 읽었다.

네 보안 카드 중 **이 카드만** 동사가 없었다(나머지는 `is fully isolated` · `block` · `is blocked` ·
`is stored securely` · `applies`). 같은 내용을 말하는 FAQ에는 `is encrypted with AES-256`이 있어
카드와 FAQ가 서로 달랐다.

`Encrypted with TLS 1.3 in transit and AES-256 at rest.`로 고쳤다.
줄 수는 1440px 2줄(다른 카드와 같음) · 768 · 390px 3줄(멀티테넌시 카드와 같음), 가로 넘침 0.

### 6.2 회사소개 `/en/company` — 20단위

§5에서 고친 `flashy tech demos`와 em dash는 의도대로 읽혔다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] | 문제를 정의하고 **풉니다** | we **define** problems | we **define and solve** problems |
| [9] | 설비가 어떻게 **멈추고** / 무엇을 보고 **판단하는지** | how equipment **fails** / what an operator **watches** | how equipment **stops** / what an operator **watches to decide** |
| [11] | **그 위에서** AI 에이전트가 | **On top of that** | **On that foundation** |
| [18] | 숫자에 붙는 **맥락** | **Meaning** in the numbers | **Context** in the numbers |
| [20] | **현장**의 문제를 함께 풀어보세요 | on your **site** | in your **operation** |

`fails`는 고장이다. 설비는 고장 없이도 멈추며, 예지보전을 파는 회사에서 둘은 구분해야 할 말이다.
`On top of that`은 영어에서 '게다가'로 읽혀 온톨로지가 토대라는 구조가 사라진다.
[20]은 영어 자체는 정확했지만 산업 7페이지 CTA가 모두 `your ... operation`이라 통일했다.

#### 철회한 지적 — `Three standards we work by`

번역기가 "세 가지 **표준**"으로 옮겨 ISO 규격으로 읽힐까 지적했으나, **사용자 확인 결과 '기준'으로도 번역된다.**
`the standards we work by`는 "우리가 일하는 기준"으로 읽히는 자연스러운 영어이고
원문 「일하는 세 가지 기준」에 이미 맞는다. 고치지 않는다.

측정: 1440 · 768 · 390px 모두 세 원칙 카드 높이 동일, CTA 2줄, 가로 넘침 0.

### 6.3 산업 AI `/en/industrial-ai` — 29단위

§5에서 고친 네 곳(모터 예지보전 · 카드 주어 복원 2 · EMS 카드)은 모두 의도대로 읽혔다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [1] h1 | 흩어진 **현장**의 데이터 | scattered **plant** data | scattered **field** data |
| [6] | **에너지 사용을 줄이는** 에너지 최적화 | and energy optimization. | and energy optimization **that cuts energy use**. |
| [8] | …**예측과 자동화를 돕는** 기술 / **근거 있는 판단** | (누락) / so that **every** decision has | …operations **to support prediction and automation** / so that **decisions have** |
| [14] | …제안하는 **대화형 AI입니다** | An industrial AI agent **answers**… | An industrial AI agent **is a conversational AI that** answers… |
| [16] | **시스템이 없는 현장은 새로 구축해** | or **builds one where none exists** | or **builds from scratch where no system exists** |
| [28] | …정전감시 **개념**을 한눈에 | …outage detection at a glance | **The concepts of** …outage detection **at a glance** |

`plant`는 업종(플랜트)으로 읽힌다 — 바로 아래 [4]가 `process plants`를 별도 업종으로 들고 있어 h1의 범위가 좁아졌다.
[14]는 질문이 `What is an industrial AI agent?`인데 답에 '무엇이다'가 없이 동작만 나열돼 있었다.
[16]의 `one`은 앞의 `intelligence layer`를 받아 '지능 레이어를 구축한다'로 읽혔다 — 원문은 시스템 자체를 새로 구축한다는 뜻이고,
랜딩 FAQ에서 같은 대목을 `Where no system exists, we build…`로 이미 고쳤다.
[28]은 `/en/energy-management`가 용어를 설명하는 페이지인데 '현황을 한눈에'로 읽혀 실시간 대시보드처럼 보였다.

**짝 카드도 함께 고쳤다** — `/en/energy-management`의 마지막 카드가 이 페이지를 거울처럼 가리키는데
거기서도 '개념'이 빠져 있었다: `Industrial, manufacturing and energy AI at a glance`
→ `The concepts of industrial, manufacturing and energy AI at a glance`.

#### '현장 데이터'를 `field data`로 통일했다 — 2026-09-18 사용자 결정

처음에는 이 페이지 [1]·[8]만 갈린 줄 알았으나, 영어 본문 전체를 세어 보니
**사이트 전반이 `site data`(12곳)이고 랜딩만 `field data`(4곳)**였다. 한국어는 모두 '현장 데이터'다.

`field`(현장 = 일이 벌어지는 맥락)를 살리기로 한 앞선 판단에 맞춰 **12곳을 모두 `field data`로 바꿨다.**

| 바꾼 곳 | 한국어 |
|---|---|
| 산업 7페이지 `How site data gains meaning…` | 현장 데이터가 의미를 얻고 의사결정으로 이어지는 흐름 |
| 화학 · 에너지 `aggregated automatically from site data` | 현장 데이터에서 배출 지표를 자동 집계 |
| 산업 AI [4] `on real site data and domain context` | 실제 현장 데이터와 도메인 맥락에 근거해 |
| 블로그 `turning scattered site data` | 흩어진 현장 데이터를 |

**쿠키 정책의 `site data` 3곳은 건드리지 않는다** — `Deleting cookies and site data`처럼
브라우저 저장 데이터를 가리키는 다른 뜻이다.

결과: 영어 본문 `field data` 16곳 · `site data` 3곳(쿠키 정책뿐).

측정: 03 · 04 모두 1440px에서 h1 2줄 · 카드 4개 높이 동일, 가로 넘침 0.
390px에서 h1 4줄이고 03의 EMS 카드가 다른 카드보다 높다(221 vs 166px). 모바일 일괄 점검 때 함께 본다.

### 6.4 에너지관리 `/en/energy-management` — 25단위

§5·§6.3에서 고친 세 곳(`does not leave` · 카드 주어 복원 · 산업 AI 카드의 '개념')은 의도대로 읽혔다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [1] h1 | **전력 · 에너지 데이터**를 근거로 | in your **power data** | in your **power and energy data** |
| [8] | **수전 · 분전 계통**의 | incoming and distribution **circuits** | the incoming and distribution **system** |
| [12] | **담당자**에게 통보합니다 | the **person on duty** is notified | the **responsible engineer** is notified |
| [15] | 현장에서 **바로 쓰는** 활용 | Where energy management is used on site | **Ready-to-run uses on site** |
| [20] | …통합 관리하는 EMS **활용** | **Managing** energy use across the whole plant… | **An EMS that manages** energy use… |
| [22] | …줄이는 **AI 최적화** | **AI that** finds waste and cuts energy use | **AI optimization that** finds waste… |

EMS 페이지인데 h1이 전력만 말해, 바로 아래 [4]의 EMS 정의(전기 · 가스 · 열)와 어긋나 있었다.
`the person on duty`는 당직 근무자라 24시간 당직 체계를 전제한다 — 전자 산업 페이지가 이미
`the responsible engineer`를 쓴다. [20]은 카드 넷 중 혼자 동명사구였다.

#### '현장에서 바로 쓰는 활용' — 03 · 04를 같은 문장으로

한국어는 두 페이지가 같은 문장인데 영어는 주어를 넣어 서로 달랐다(`Where industrial AI…` / `Where energy management…`).
게다가 `is used on site`(활용되는)에는 **'바로'라는 즉시성이 없다.**

사용자가 번역기로 후보를 확인하며 세 번 다듬었다.
`put to work`(실제로 적용되는) → `Use cases`(활용 **사례** — 원문에 없는 '사례'가 붙음) →
`Uses`(문두에서 동사로도 읽힘) → **`Ready-to-run uses on site`**.
하이픈으로 `Ready-to-run`을 형용사로 묶으면 `uses`가 명사 자리에 확정된다. 03 · 04 모두 이 문장을 쓴다.

측정: 04는 1440px h1 2줄 · 섹션 제목 2줄 · 카드 4개 높이 동일, 가로 넘침 0.
**768px에서 h1이 2 → 3줄, 390px에서 4 → 5줄**이 된다(한국어는 390px에서 4줄).
`<br>` 위치를 옮겨도 같아 글자 수 자체의 문제다. 모바일 일괄 점검 때 함께 본다.

### 6.5 제품 문서 `/en/docs` — 25단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [17] | 승인/자동 처리 규칙을 **대화로 설계** | **Design** approval and auto-handling rules in conversation | **Set** approval and auto-handling rules **through** conversation |
| [7] | 핵심 개념 **한눈에** | Core concepts | Core concepts **at a glance** |
| [11] | …OPC-UA · Modbus 등 **프로토콜** | …Modbus **and more** | …Modbus **and other protocols** |
| [3] | **설치** · 연동부터 | From **setup** and integration | From **install** and integration |

[17]이 가장 무겁다. `Design`이 동사인데 번역기가 `Design approval`을 **'설계 승인'이라는 하나의 명사구**로 읽어
"무엇을 설계한다"가 사라지고 목록처럼 변했다. 제조업에서 design approval은 실제 쓰는 말이라 더 잘 붙는다.
`Set`은 명사로 읽혀도 뜻이 붙지 않아 동사로만 읽힌다.

[11]은 '등'이 무엇의 등인지 사라져 프로토콜 목록임을 알 수 없었다.
[3]은 같은 페이지 [6]이 이미 `From install and first setup`으로 '설치'를 install로 옮기고 있어 한 페이지 안에서 갈렸다.

그대로 둔 것: [18] `Operations & scale`(번역기가 '확장성'으로 읽었고 뜻이 통한다),
[24] `The blog covers…`(원문 '먼저 만나보실 수 있습니다'의 초대 어감이 서술로 바뀌었으나 내용은 같다).

측정: 1440 · 768 · 390px 모두 카드 높이 동일, 가로 넘침 0.

### 6.6 자료실 `/en/resources` · 블로그 목록 `/en/blog` — 13 + 11단위

§5에서 고친 자료실 카드 제목 셋과 '도입 흐름'은 의도대로 읽혔다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| 07 [10] | Refinery 블로그를 **시작합니다** | **Starting the Refinery blog** | **The Refinery blog starts here** |
| 06 [12] | 산업별 활용 **자료** | Industry application **kits** | Industry application **materials** |
| 06 [11] | 제품 **시연**과 현장 적용 **사례** 영상 | Product **walkthroughs** and field application videos | Product **demos** and field application **case** videos |

07 [10]은 번역기가 `Starting the Refinery`를 **블로그 이름으로 묶어** 읽어
「'Starting the Refinery' 블로그」가 됐다 — 시작한다는 동작이 사라졌다.
랜딩 히어로의 `Refinery Industrial`과 같은 유형, 제품명 옆 낱말이 붙어 읽히는 문제다.

06 [12]는 딱지(`kind`)가 이미 `Kit`이라 제목의 `kits`가 중복이기도 했다.
`materials`가 '재료'로 읽힐 수 있다고 `guides`·`notes`를 제안했으나 **사용자가 `materials`를 선택했다.**

06 [11]의 `walkthrough`는 둘러보기다. 원문 '시연'은 demo이고, 바로 위 항목이 이미 `demo videos`를 쓴다.

#### 철회한 지적 — `Pipes versus ontology`

번역기가 '파이프라인'으로 읽어 제품 기능 `Pipeline`과 헷갈릴 수 있다고 보고 `Point-to-point pipes`를 제안했으나,
**백서 본문을 확인하니 뜻이 달랐다.** 원문의 '파이프'는 「ETL로 값을 옮겨 한 저장소에 모으는 것」이고
(백서 02장 · 「데이터를 한곳에 모으는 것(파이프)과 의미를 부여하는 것(온톨로지)은 다릅니다」),
`point-to-point`는 시스템끼리 1:1로 직접 잇는 별개 개념이다. 중앙에 모으는 것과 서로 직접 잇는 것은 오히려 반대 구도다.

지금의 `Pipes versus ontology`가 원문 은유에 맞다. 제품 기능 `Pipeline`과의 중첩은
**한국어에도 그대로 있다**(자료실 '파이프 연결' / 문서 목차 '파이프라인'). 한국어에서 문제 삼지 않은 것을 영어만 손대지 않는다.

측정: 06 카드 6개 · 07 카드 5개 모두 1440 · 768 · 390px에서 높이 동일, 가로 넘침 0.

### 6.7 산업 · 자동차 `/en/industries/automotive` — 81단위

§5·§6에서 고친 네 곳([24] 온톨로지 설명 · [49] `field data` · [50]~[54] 칩 5개 · [74] 회전체 · 이상)은
모두 의도대로 읽혔다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] h1 | **설비 흐름**과 품질 일관성을 데이터로 **제어합니다** | **Holding** equipment **flow** and quality **steady**, with data | **Process flow** and quality consistency, **controlled with data** |
| [8] | **큰 전력을 쓰는 설비**와 **미세한 제어**가 … 다른 쪽이 **흔들립니다** | **Heavy-draw** equipment and **precision control share the same line** … **unsettles** the other | High-power equipment **runs on a line that also needs fine control** … **makes the other unstable** |
| [11] | **문제를 푸는 방법** | Representative use cases | **How the problems are solved** (산업 7페이지 공통) |
| [13] | **모터 · 회전체** 진동 기반 예지보전 | Vibration-based predictive maintenance | …predictive maintenance **for motors and rotating equipment** |
| [38] | 라인 · **차종**별 원단위 | by line and **model** | by line and **vehicle model** |
| [65] | **예지보전** 알람 | maintenance alerts | **predictive** maintenance alerts |

#### 자동차 페이지라 더 잘 붙은 오독 둘

`Heavy-draw`의 `draw`는 전력 소비와 **성형(drawing)** 둘 다 뜻한다. 하필 이 페이지가 프레스 · 차체 공정을
다뤄 번역기가 **'중압 성형 장비'**로 읽었다. `High-power`로 바꿔 해결했다.

`equipment flow`는 흐름 · 유량 · **가동률**로 다 읽힌다. 블라인드 역번역도 이 대목을 모호하다고 표시했으니
두 번 걸린 곳이다. 원문 '설비 흐름'은 [6]이 설명하듯 프레스 → 차체 → 도장 → 조립으로 이어지는 공정 간 흐름이라
`process flow`로 못 박았다. **'설비'가 '공정'으로 바뀌는 것은 사용자가 확인하고 받아들였다.**

#### 번역기로 세 번 다듬은 [8]

`A and B share the same line`이라는 틀 자체가 B를 라인 위의 물체로 만든다.
`precision control` → '정밀 제어 장비', `fine control` → '정밀 제어 장비',
`fine process control` → '정밀 공정 제어 시스템'으로 계속 물체화됐다.
`a line that also needs fine control`로 **제어를 `needs`의 목적어로 넣자** 비로소 '정밀한 제어'로 읽혔다.

#### [11]은 유즈케이스 페이지와 원문이 다르다

처음에 유즈케이스 7페이지의 `How Refinery solves it`에 맞추려 했으나, **두 페이지의 한국어가 다르다.**

| 페이지 | 한국어 | 영어 |
|---|---|---|
| 유즈케이스 | **Refinery로** 푸는 방식 | How **Refinery** solves it ✓ |
| 산업 | 문제를 푸는 방법 (주어 없음) | How the problems are solved |

산업 페이지에 Refinery를 넣으면 원문에 없는 주어가 생긴다. 번역기가 'Refinery는 이를 어떻게 해결하는가'로
읽어 이를 확인했다.

측정: 산업 7페이지 모두 1440 · 768px h1 2줄 · 섹션 제목 1줄, 가로 넘침 0.

> ⚠️ **[13] 제목만 길다.** 한국어는 이 페이지 h3 다섯 개가 1440px 1줄 · 390px 2줄로 고른데,
> 영어 [13]만 1440px 2줄 · **390px 5줄**이다(68자). 원문의 세 요소(모터 · 회전체 / 진동 기반 / 예지보전) 중
> 하나를 덜거나 어순을 바꾸는 안을 냈으나 **사용자가 지금 형태를 유지하기로 했다.**
> 자동차만 대상을 특정하고 '예지보전'까지 못 박는 유일한 페이지라(식품 · 철강은 '설비 상태 모니터링')
> 덜어낼 것이 마땅치 않다. 모바일 일괄 점검 때 함께 본다.

### 6.8 산업 · 화학 `/en/industries/chemicals` — 91단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [4] | 연속 반응 · **열 기반 설비**를 운영하는 현장 | in continuous reaction operations | where continuous reaction **and heat-based equipment** run |
| [7] | 품질과 **생산** 안정성을 **흔든다** | **move** quality and stability | **shake** quality and **production** stability |
| [29][31][33][60] | **열매체** 보일러 | **thermal** boiler | **thermal fluid** boiler |
| [43] | 공기압축기 상태 · 운전 인자 **모니터링** | Air compressor state and operating factors | …operating factor **monitoring** |
| [47] | 평소와 다른 흐름에서 **전조를 잡아** | to catch flows that differ from the norm | to catch **early signs in** flows that differ from the norm |
| [50] | 온실가스 **배출량** 통합 **관리** | Unified greenhouse gas **accounting** | Unified greenhouse gas **emissions management** |

#### 열매체 보일러 — `thermal fluid boiler`로 확정

`thermal boiler`는 업계에서 쓰지 않는 형태라 번역기가 '열보일러'라는 없는 말로 옮겼다.
이 설비의 영어는 `thermal oil boiler` · `thermal fluid boiler` · `thermal fluid heater` · `hot oil heater` 등인데
**모두 열매체가 무엇인지 밝힌다**(oil 또는 fluid).

처음에 `thermal oil boiler`를 제안했으나 **사용자가 `thermal fluid boiler`를 골랐고, 그쪽이 맞다.**
원문이 「열매체 보일러」이지 「열매체**유** 보일러」가 아니므로 오일로 한정하지 않는 `fluid`가 직역이다
(열매체 = thermal fluid / 열매체유 = thermal oil).

#### `flows`는 그대로 둔다 — 2026-09-18 사용자 결정

[88] `Flows that differ from the norm are noticed first`가 번역기에서 **'유량'**으로 읽혔다.
화학 공정 페이지에서 `flow`는 유량(flow rate)으로 먼저 읽히고, 블라인드 역번역도 이 대목을 모호하다고 표시했다.
`patterns`를 제안했으나 **사용자가 지금 표현을 유지하기로 했다.**
[47]에도 같은 `flows`가 있어 **한쪽만 바꾸면 갈리므로 함께 두었다** — [47]은 '전조'만 넣었다.

측정: 칩 높이 동일, 가로 넘침 0.

> ⚠️ 1440px에서 한국어는 h3 아홉 개가 **모두 1줄**인데 영어는 **둘이 2줄**이다.
> [7]은 이번에 '생산'을 넣으며, [29]는 `fluid`를 넣으며 길어졌다. 모바일 일괄 점검 때 함께 본다.

### 6.9 산업 · 전자 `/en/industries/electronics` — 100단위

§5에서 고친 다섯 곳(`scope of impact` · 히팅 설비 · `alerted` · 온톨로지 설명 · `field data`)은 반영됐다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] h1 | 무정전과 **미세환경**을 하나의 구조로 **지킵니다** | **microclimate**, **in one structure** | **microenvironment**, **protected by one system** |
| [4] | 반도체 · **전자부품** · 정밀 **장비 제조** 현장 | semiconductor and precision plants | semiconductor, **electronic component** and precision **equipment manufacturing** |
| [7] | **정전** · **설비 이상**이 곧 **불량**이 된다 | An **outage** becomes **scrap** | A **power outage or equipment fault** becomes a **defect** |
| [11] | 다품종 **소량** 생산으로 | High-mix production | High-mix, **low-volume** production |
| [15] | 최대 수요 전력 **실시간** 감시 | Peak demand monitoring… | **Live** peak demand monitoring… |
| [36] | 온습도 · **히팅 설비** 실시간 감시 | **heating equipment** monitoring | **process heater** monitoring |
| [38] | 보이지 않는 라인별 **온습도** 편차 | Invisible drift between lines | Invisible **temperature and humidity** drift between lines |
| [57] | 무선 기반 전력 · 환경 센서 **구축** | **Wireless power** and environment **sensing** | **Wireless sensor deployment for** power and environment |
| [100] | **전자 제조** 현장에 맞는 답 | your **precision** operation | your **electronics** operation |

#### 이 페이지에서만 생기는 오독 셋

- `wireless power`는 **무선 전력 전송**(Qi 충전 등)을 가리키는 굳은 말이라 '무선 전력'으로 읽혔다.
  원문은 무선 **센서**로 전력을 계측한다는 뜻이다.
- `heating equipment`가 **'난방 장비'**로 읽혔다. 반도체 · 정밀 공장의 '히팅 설비'는 난방기가 아니라 공정 가열 설비다.
  **§5에서 누락을 메우며 넣은 표현이 오해를 낳았다** — 고칠 때 넣은 말도 다시 검증해야 한다.
- `microclimate`는 기상 · 건축 용어(미기후)다. 반도체에서 '미세환경'은 `microenvironment`(FOUP · SMIF 내부 환경)가 표준어다.
  `<title>`의 `microclimate control`도 함께 바꿨다.

#### h1은 번역기로 세 번 다듬었다

`in one structure` → **'구조물'**(물리적 건물), `held in one system` → **'구현'**(만들어 낸다)으로 계속 어긋났다.
`protected by one system`에서 비로소 「단 한 개의 시스템으로 … 보장합니다」가 나와 원문 '지킵니다'와 맞았다.

#### `outage`와 `scrap`

번역기가 `An outage becomes scrap`을 **'가동 중단은 손실로 이어집니다'**로 읽었다.
`outage`는 정전과 가동 중단 둘 다, `scrap`은 폐기물로도 읽힌다. 원문은 '정전'과 '불량'이다.

측정: 가로 넘침 0. 1440 · 768px h1 2줄로 한국어와 같다.
390px에서 h1 3줄 · 부제 3줄(한국어는 2줄)이고 h3 열한 개가 2~4줄로 벌어진다 — 이 페이지는 수정 전에도 그랬다.

### 6.10 산업 · 에너지 `/en/industries/energy` — 86단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] h1 | 하나의 **지능**으로 잇습니다 | into a single **intelligence** | into a single **intelligence layer** |
| [4] | 발전 · **송배전** · 유틸리티 현장 | generation, **transmission** and utilities | generation, **transmission and distribution**, and utilities |
| [19] | **현장 데이터**를 온톨로지로 연결해 | **Site** data is connected… | **Field** data is connected… |
| [21] | 발전 · **송배전** · 소비 현황 | Generation, **transmission** and consumption | Generation, **transmission and distribution**, and consumption |

#### `field data` 통일에서 빠진 한 곳

§6.2에서 `site data` 12곳을 바꿀 때 **문장 첫머리라 대문자였던 `Site data` 한 곳이 걸러지지 않았다.**
같은 페이지 [51]은 `field data`로 바뀌어 있어 한 페이지 안에서 갈렸다.
일괄 치환 뒤에는 대소문자를 함께 확인해야 한다. 지금은 영어 본문에 `site data`가 0곳이다(쿠키 정책 제외).

#### '송배전'에서 배전이 빠져 있었다

송배전은 영어로 transmission **and distribution**(업계 약어 T&D)인데 두 곳 모두 transmission만 있었다.
`T&D` 약어도 후보였으나 이 사이트는 본문에서 약어를 잘 쓰지 않아 풀어 썼다.
쉼표 구조가 바뀌면서 뒤의 `utilities`도 '공공시설'이 아니라 '유틸리티'로 읽히게 된 것은 덤이다.

#### h1의 '지능'

`a single intelligence`가 **'하나의 통합 시스템'**으로 읽혀 원문의 '지능'이 통째로 사라졌다.
영어에서 `a single intelligence`를 홀로 쓰면 추상적이라 기계가 '시스템'으로 메운다.
`intelligence layer`는 사이트 전반이 이미 쓰는 말이라(`as an integrated intelligence layer`) 새 개념이 생기지 않는다.
**원문에 '레이어'는 없지만, 지능이 사라지는 것보다 낫다고 보고 사용자가 제시안을 골랐다.**

측정: 가로 넘침 0. 1440 · 768px h1 2줄로 한국어와 같다. 390px에서 h1 4줄(한국어 2줄).

### 6.11 산업 · 식품 `/en/industries/food` — 92단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [4] | 원료 투입 · **가공** · 포장 · 보관 | from intake **to packaging** and storage | from intake **through processing to packaging** and storage |
| [5] | **열 · 냉** 설비 효율 저하 | **Refrigeration losses** | **Thermal and refrigeration efficiency losses** |
| [22] | **노후** 설비 교체 전 · 후 **에너지** 시뮬레이션 | Before and after simulation for equipment replacement | **Energy simulation before and after replacing ageing equipment** |
| [49] | **냉열** 에너지 절감 | Lower **cooling** energy | Lower **thermal and refrigeration** energy |
| [74] | **온도 이탈** 알람 | excursion alerts | **temperature** excursion alerts |
| [82] | 노후 설비 교체 **타당성 검증** | Verified **case** for replacement | **Replacement justified with evidence** |
| [85] | **냉열** 에너지를 아낍니다 | save **cooling** energy | save **thermal and refrigeration** energy |
| [87] | 배치마다 **에너지**를 견줘 | **Batches** are weighed against each other | **Energy is weighed batch against batch** |
| [91] | 진동에서 **이상**을 미리 잡아 | Vibration catches **faults** early | Vibration catches **anomalies** early |

#### '열'이 세 곳에서 사라져 있었다

원문 「열 · 냉」 · 「냉열」이 영어에서는 `refrigeration` · `cooling`만 남아 **가열 쪽이 빠져 있었다.**
[5]는 제목이 냉각만 말하는데 바로 아래 [6]은 `boilers and steam equipment`까지 든다.

처음 제안한 `heating and cooling`은 번역기에서 **'난방 및 냉방'**으로 읽혔다 —
식품 공장의 열 설비는 난방기가 아니라 보일러 · 스팀이다.
**전자 페이지에서 `heating equipment`가 '난방 장비'로 읽혔던 것과 같은 함정**이라,
공조가 아닌 공정 설비를 가리키는 `thermal and refrigeration`으로 바꿔 통과했다.

#### `case`와 `faults`

`Verified case for replacement`의 `case`가 **'사례'**로 읽혀 투자 타당성이라는 뜻이 사라졌다.
`Replacement justified with evidence`로 `case`를 아예 뺐다.

[91]의 `faults`는 **자동차 페이지에서 이미 고친 것과 같은 문제**다(원문 '이상' → anomalies).
페이지마다 흩어져 있어 한 번에 잡히지 않았다.

측정: 칩 높이 동일, 가로 넘침 0.

> ⚠️ 1440px에서 한국어 h3 열한 개가 모두 1줄인데 영어는 **둘이 2줄**([5] · [22] — 이번에 길어진 곳).
> 390px에서는 한국어 2줄, 영어 2~4줄이다. 모바일 일괄 점검 때 함께 본다.

### 6.12 산업 · 기계 `/en/industries/machinery` — 93단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [6] | 압축공기 · 전력 · **냉열** · 공조 | …electricity, **cooling** and HVAC | …electricity, **thermal and refrigeration loads** and HVAC |
| [14] | **Refinery**가 실제로 하는 일 | What **Refinery** actually does on a **plant** site | `<span translate="no">` (산업 7페이지 공통) |
| [35] | **냉열** 에너지 절감 | lower **cooling** energy | lower **thermal and refrigeration** energy |
| [45] | 전력 계통 하나에 묶여 **흔들리는 설비** 운영 | **Operations** tied to a single grid feed | **Equipment operation left unsteady**, tied to a single grid feed |
| [73] | **원단위** 리포트 | **intensity** reports | **energy intensity** reports |

#### 제품명이 정유 공장이 된 곳

`What Refinery actually does on a **plant** site.`가 번역기에서 **'정유 공장에서 실제로 수행하는 작업'**으로 읽혔다.
제품명이 통째로 사라지고 업종이 됐다 — 바로 뒤의 `plant`가 `Refinery`를 정유소로 굳혔다.

일곱 페이지가 뒤의 업종명만 다른 같은 문장이라 `translate="no"`를 함께 넣었다.
나머지 여섯은 지금까지 제품명으로 읽혔지만, 한 곳만 표시하면 왜 거기만 다른지 나중에 알 수 없다.

`Refinery` 뒤에 **동사**가 오는 곳(`sits` 8 · `solves` 7 · `weaves` 2 · `runs` 1)은 문법상 주어라 건드리지 않았다.
`/en/company`의 `the Refinery team`도 '팀'이 정유소로 읽힐 여지가 없어 그대로 둔다.

#### '열'이 또 빠져 있었다 — 식품에 이어 세 번째 페이지

원문 '냉열'이 `cooling`만 남은 곳이 이 페이지에도 둘 있었다.
식품에서 통과한 `thermal and refrigeration`을 그대로 썼다.

#### `intensity` 홀로 쓰면 '배출 강도'가 된다

구조 칩 `intensity reports`에 앞말이 없어 번역기가 **'배출 강도 보고서'**로 읽었다.
바로 옆 칩이 `emission management`라 배출 쪽으로 끌린 것이다. 원문은 **에너지 원단위**다.

측정: 칩 높이 동일, 가로 넘침 0. 1440px h1 2줄로 한국어와 같다.
390px에서 h1 4줄(한국어 2줄), [45] 문제 문장 6줄(한국어 3줄)이다. 모바일 일괄 점검 때 함께 본다.

### 6.13 산업 · 철강 `/en/industries/steel` — 89단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [6] | **열처리로** · 압축공기 · 냉각수 | **Furnaces**, compressed air… | **Heat-treatment furnaces**, compressed air… |
| [31] | **열처리로의** 온도 · 유지 시간 | **Furnace** temperature… | **Heat-treatment furnace** temperature… |
| [38] | **공정별 사용을** 같은 기준으로 나란히 세웁니다 | …and **lines up** on equal terms | …and **use by process can be compared** on equal terms |
| [50] | 회전체 **이상** | Rotating-equipment **faults** | Rotating-equipment **anomalies** |
| [88] | 진동에서 **이상**을 미리 잡아 | Vibration catches **faults** early | Vibration catches **anomalies** early |

#### 열처리로가 용광로가 됐다

`Furnace`만 남은 본문 두 곳이 제철소 문맥에서 **'용광로'**로 읽혔다.
열처리로(heat-treatment furnace)는 소재를 가열 · 냉각해 성질을 바꾸는 로이고,
용광로(blast furnace)는 철광석을 녹여 선철을 뽑는 제선 설비다. 이 페이지는 열처리 · 성형 · 코팅을 다루니 용광로는 나오지 않는다.
**구조 칩만 `Heat-treatment furnaces`로 정확했다** — 같은 낱말이 곳에 따라 정확도가 달랐다.

#### `lines up`이 '공정 라인'을 만들었다

`use by process lines up on equal terms`에서 `lines`가 명사 '라인'으로, `use`가 '활용'으로 읽혀
**'공정 라인에서 동등한 조건으로 활용됩니다'**가 됐다. 이 페이지에 실제 생산 라인 이야기가 있어 더 잘 붙었다.
자동차 페이지에서 이미 통과한 `can be compared on equal terms`로 바꿔 해결했다.

### 6.14 되풀이 유형 전수 점검 — `faults` · `cooling energy`

한 페이지씩 고치다 보니 **같은 유형이 여러 페이지에 흩어져 남아 있었다.**
영어 데이터 전체를 정규식으로 훑고 한국어 원문과 대조해 한꺼번에 처리했다.

| 유형 | 고친 곳 |
|---|---|
| 원문 '이상' → `faults`(고장 · 결함) | 자동차 [15] · 화학 [45] · 전자 [8][90][91] + 제목 · 식품 [52] · 기계 [8] · 에너지관리 [12] · **유즈케이스 7페이지 공통 카드** |
| 원문 '냉열' → `cooling energy` | 기계 [84] |

유즈케이스 쪽은 전력품질 카드 설명이 **일곱 페이지에 복제**돼 있어 한 문장을 고치자 일곱 곳이 함께 바뀌었다.

**원문이 '고장'인 곳은 `fault`가 맞아 그대로 둔다** — 자동차 [31] '고장 진단'(`fault diagnosis`),
식품 [91] '고장을 예방'(`preventing failures`).

> 아직 남은 둘(3/4 유즈케이스 차례에 다룬다):
> 예지보전 FAQ의 `load faults`(원문 '부하 **이상**'),
> 전력품질 [4]의 `The fault gets written off`(원문 '왜 하필 그때 **멈췄는지**').
> 후자에는 원문에 없는 `and it happens again`(그리고 또 일어난다)도 붙어 있다.

#### 배운 것

- **일괄 치환 뒤에는 대소문자를 확인한다** — `site data` → `field data`에서 문장 첫머리 `Site data` 한 곳이 남았다.
- **한 곳을 고칠 때 같은 유형을 전수로 훑는다** — `faults`는 자동차 · 식품 · 철강에서 한 번씩 고친 뒤에도
  8개 페이지에 12곳이 남아 있었다.
- **고칠 때 넣은 말도 다시 검증한다** — 누락을 메우며 넣은 `heating equipment`가 '난방 장비'로 읽혔다.

### 6.15 유즈케이스 · 예지보전 `/en/use-cases/predictive-maintenance` — 47단위

> ⚠️ 유즈케이스 7페이지에서 **신호 카드(33개)와 FAQ 답변(7문답)이 조각 파일에서 빠졌다.**
> 신호 카드는 `uc-signal`, FAQ 답변은 `uc-faq-a`로 `<div>`라 블록 태그 추출에 걸리지 않았다.
> 랜딩 FAQ와 같은 원인이다 — `15-21b_유즈케이스-보충.txt`로 보충했다(47단위).
> 산업 7페이지와 블로그에는 같은 구조가 없다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] h1 · tagline · cardDesc | **무선 진동센서로** … **멈춤과 손실**을 줄입니다 | (센서는 tagline에만) cut **unplanned downtime** | **with wireless vibration sensors**, and cut **stoppages and loss** |
| [5] | **읽는** 데이터와 신호 | Data and signals | **The data and signals we read** (7페이지 공통) |
| [8] | 배선 공사 없이 … 실시간으로 보냅니다. | …+ **Installation is simple enough to fit equipment that is already running.** | 덧붙은 문장 삭제 |
| [11] | 추세 기반 **조기 감지** | Catch the trend, not the **spike** | **Catch it early**, from the trend |
| [19] | 배터리 최장 2년 **저전력** | Up to 2-year battery life | **Low power** ⁠· up to 2-year battery life |
| [22] | IP66 · **동작온도** -20~85℃ | IP66 ⁠· −20 to 85°C | IP66 ⁠· **operating range** −20 to 85°C |
| [45] FAQ | 부하 **이상**과 절연 열화 | load **faults** | load **anomalies** |

#### h1에서 수단과 결과가 반씩 빠져 있었다

한국어는 tagline · heroTitle · cardDesc 셋이 모두 「무선 진동센서로 … 멈춤과 손실」인데,
영어는 **센서가 tagline에만 있고 '손실'은 세 곳 어디에도 없었다.**
이 페이지 전체가 무선 센서를 파는 내용인데 h1에 수단이 없었다.

#### 원문에 없는 문장

[8]의 `Installation is simple enough to fit equipment that is already running.`은 원문에 없다.
**블라인드 역번역에서도 잡혔으나 그때 넘어간 것**이다. 바로 아래 [16]에
`With no wiring work, installation stays simple`이 또 있어 같은 말을 두 번 했다.

측정: 가로 넘침 0. 1440 · 768px h1 2줄로 한국어와 같다.
390px에서 h1 4줄(한국어 3줄). 다른 페이지에 실리는 관련 카드 높이는 320px로 한국어와 같다.

### 6.16 유즈케이스 · 센서 모니터링 `/en/use-cases/sensor-monitoring` — 26단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [1] 이름 | **센서 모니터링** | **Multi-sensor** monitoring | **Sensor** monitoring (5곳) |
| [2] h1 | 이상을 **놓치지 않고** 함께 읽습니다 | read anomalies **together** | read anomalies together, **without missing any** |
| [11] | 실시간 **이상** 감시 | Watch in real time | Watch **for anomalies** in real time |
| [16] | 실시간으로 **잡아 기록합니다** | in real time, **on the record** | in real time, **and put them on the record** |

#### 이름에 없던 `Multi-`

한국어는 nav · 카드 · h1 · `<title>`이 모두 「센서 모니터링」인데 영어에만 `Multi-`가 붙어 있었다.
다중 개념은 카드 [7]「다중 센서 수집」(`Collect from many sources`)에 이미 있다.
nav 2곳 · 랜딩 카드 · 유즈케이스 name · `<title>` 다섯 곳을 함께 바꿨다.

#### `on the record`는 동작이 아니다

원문 「잡아 **기록합니다**」는 잡고 → 기록하는 순차인데, `on the record`는 '기록에 남는'이라는 부사구라
기록한다는 동작이 사라졌다. 번역기가 '기록상에서도'로 어색하게 읽었다.
**이 문장은 유즈케이스 일곱 페이지에 복제**돼 있어 한 번에 바뀐다.

#### 「놓치지 않고」와 `every`

「놓치지 않고」를 `read every anomaly … missing none`으로 옮기려다,
**랜딩에서 `every` · `never` 같은 단정을 걷어낸 것과 어긋나** `without missing any`로 눌러 썼다.

측정: 가로 넘침 0. 1440 · 768px h1 2줄로 한국어와 같다. 390px에서 h1 5줄(한국어 3줄).
일곱 페이지에 실리는 전력품질 카드 높이는 320px로 한국어와 같다.

> dev 서버가 HMR 중 500을 냈다(`astro dev stop` 후 재시작으로 해결). 빌드는 계속 정상이었다.

### 6.17 유즈케이스 · 전력관리 `/en/use-cases/power-management` — 43단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] h1 | **전력** 비용과 리스크를 줄입니다 | cut **cost** and risk | cut **power cost** and risk |
| [4] | 피크 요금을 무는 일도 **지나고 나서야 압니다** | …the peak charge follows **for a year** | …you only find out …, **after the fact** |
| [17] | 설비 · 구역별 **전력** 계량 구조 | Metering structure by asset and area | **Power** metering structure by asset and area |
| [18] | 피크 · 계약전력 **관리 기준** | …**thresholds** | …**management criteria** |

#### 원문에 없는 제도 설명

[4]의 마지막 문장이 **원문과 다른 말을 하고 있었다.**
원문은 「지나고 나서야 압니다」로, 앞 문장들(고지서에 안 나온다 · 원인을 못 찾는다)을 받는 **인지 시점** 이야기다.
영어 `the peak charge follows for a year`는 **1년간 부과된다는 제도 설명**이고 `for a year`는 원문에 없다.
한국 전력 제도상 틀린 말은 아니지만 문단이 하려는 말이 아니다.

#### 그대로 둔 것

- [39] `the incoming and distribution system` — 번역기가 '유입'으로 읽지만 영어는 정확하다.
  **04번 에너지관리와 같은 문장**이라 바꾸려면 함께 봐야 한다.
- [43] `a falling power factor` → '전력 요인 하락' — 같은 페이지 [34] 칩에서는 '역률'로 맞게 읽었다. 번역기 변덕이다.
- [14] `flagged with room to improve` — 원문 「여지를 알려줍니다」와 미묘하게 다르나 뜻은 통한다.
  블라인드 역번역에서도 모호하다고 표시했던 곳이다.

측정: 가로 넘침 0. 1440 · 768px h1 2줄로 한국어와 같다.
문제 문단이 한국어 3줄 · 영어 4줄(390px에서 7줄 · 9줄), 템플릿 항목은 390px에서 영어만 2줄이 된다.

### 6.18 유즈케이스 · 전력품질 `/en/use-cases/power-quality` — 33단위

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [4] | 왜 하필 그때 **멈췄는지**는 **끝내 알지 못한 채 넘어갑니다** | The **fault** gets written off as unexplained, **and it happens again** | **So nobody ever finds out why it stopped just then, and it is left at that** |

#### 원문에 없는 문장과 잘못된 낱말이 한 문장에 겹쳐 있었다

- `fault`(고장) — 원문은 **'멈춤'**이다. 이 문단 첫 문장이 「설비가 이유 없이 **멈추거나**」로 시작한다
- `and it happens again`(그리고 또 일어난다) — **원문에 없다.** 앞 문단 어디에도 재발 이야기가 없다

#### 번역기로 세 번 다듬었다

처음 낸 `Why it stopped just then goes unexplained.`는 **'설명되지 않은 채 남게 됩니다'**로 읽혔다.
원문 「**끝내 알지 못한 채** **넘어갑니다**」는 사람이 모르고 + 그대로 지나친다는 **두 동작**인데,
`goes unexplained`는 상태 서술이라 둘 다 빠진다.

두 안을 돌려 **사용자가 B안을 골랐다.**

| 안 | 영어 | 되읽으면 |
|---|---|---|
| A | …and **it is left at that** | 그저 그렇게 **방치되곤 합니다** |
| **B** | …and **the matter passes** | 문제는 **그냥 넘어가게 됩니다** |

A안의 `left at that`은 '방치'로 읽혀 **알고도 내버려 둔다는 뉘앙스**가 섞인다.
원문 「넘어갑니다」에는 B안이 맞고, 앞부분도 「아무도 **알지 못한 채**」로 어순까지 같다.
`So`로 시작해 앞 문장을 받는 원문 구조도 살았다.

최종: `So nobody ever learns why it stopped just then, and the matter passes.`

`nobody ever`는 랜딩에서 걷어낸 `never`와 다르다 — **거기는 회사의 약속이었고 여기는 고객 현장에서 벌어지는 일**이다.
화학 페이지의 `the whole picture never forms`를 남겨 둔 것과 같은 기준이다.

#### 그대로 둔 것

- [12] `the timing lines up with` — 철강 [38]과 달리 주어+동사라 '일치하는지'로 정확히 읽혔다
- [18] `Sag/swell and interruption thresholds` — 전압 몇 % 이하 같은 실제 임계값이라 `thresholds`가 맞다.
  17번의 「관리 기준」을 `management criteria`로 바꾼 것과 성격이 다르다
- [13] `Separate what mattered` — '중요한 요소 구분'으로 읽혔으나 뜻이 통한다

측정: 가로 넘침 0. 1440px h1 2줄로 한국어와 같다. 768px h1 3줄 · 390px 5줄(한국어 2줄 · 3줄).

### 6.19 유즈케이스 · 공장에너지 `/en/use-cases/factory-energy` — 33단위

§6.1에서 넣은 ESG 문장은 의도대로 읽혔다. 이 페이지는 큰 어긋남이 없고 **경미한 셋**만 고쳤다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [2] h1 | 에너지 **흐름**을 한곳에 모아 | the whole plant’s **energy** into one view | …**energy flow** into one view |
| [4] | 어디서 **얼마나** 왜 쓰는지 | where it goes **and why** | where it goes, **how much**, and why |
| [10] | **원단위, 곧** 생산량 대비 에너지 사용 | Compare **energy used against output** | Compare **energy intensity, meaning** energy used against output |

[2]는 h1인데 '흐름'이 빠져 있었다 — 바로 아래 카드 [8]에는 `energy flow`가 있었다.
카드 설명이라 **일곱 페이지의 관련 카드에도 함께 실린다**(2곳 × 7페이지).

[10]은 원문이 「원단위, **곧** ~」으로 용어를 풀어주는데 영어에는 설명만 있고 용어가 없었다.
`—` 대시 버전과 `meaning` 버전을 함께 돌려 **`meaning` 쪽이 원문 「곧」과 구조가 같아** 그쪽을 택했다.

#### 그대로 둔 것

| 영어 | 번역기 | 판단 |
|---|---|---|
| Meter **everything** together | **모든 항목**을 통합 측정 | 원문 「통합 계량」에 '모든'은 없으나 `together`만으로는 약하다 |
| **over** thirty years | 30년 **이상** | 원문 「30년간」이라 엄밀히는 `across`지만 뜻이 통한다 |
| **Abnormal** consumption | 비정상 소비 | 원문 「이상 소비」이고 17번 `Abnormal-use`와 일관된다 |
| water | 물 | 원문 「용수」지만 영어 `water`가 맞다 |

측정: 가로 넘침 0. 1440 · 768px h1 2줄로 한국어와 같다.
해결 카드 4개 높이는 서로 같으나(327px) 한국어(250px)보다 높다 — [10]이 길어진 탓이다.

### 6.20 유즈케이스 · 에너지최적화 `/en/use-cases/energy-optimization` — 23단위

§5.1에서 되살린 실행 3항목의 둘째 문장은 모두 의도대로 읽혔다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [4] | 큰 설비**보다 눈에 잘 띄지 않는 곳에 흩어져** 있습니다 | Waste **hides away from** the large machines | Waste **is scattered in the places that draw less attention than** the large machines |
| [11] | **지속** 관리 | Keep it from **returning** | **Keep the gains** |
| [21] | 시간**대별** 소비 | **Hourly** consumption | Consumption **by time of day** (17번과 함께 2곳) |

`hides away from`이 **'대형 기계 뒤에 숨어'**로 읽혔다. 원문은 큰 설비가 **아닌**, 덜 눈에 띄는 곳에
**흩어져** 있다는 뜻인데 '흩어져'도 빠져 있었다.

[11]은 원문 「**지속** 관리」의 핵심이 계속한다는 것이라 `returning`(방지)보다 `gains`(유지)가 가깝다.
다만 바로 아래 본문이 「다시 새지 않게」 · 「돌아가는 구간」이라 **지금 표현도 흐름에는 맞았다** — 원문 일치를 택했다.

같은 카드의 **설명 둘째 문장도 고쳤다.** `Any stretch … **is caught** at once`가
**'즉시 파악해야 합니다'**라는 의무로 읽혔다. 첫 문장이 명령형(`Track …`)인데 둘째만 수동태라
기계가 앞의 명령에 끌려간 것이다. 원문은 둘 다 시스템이 하는 일(「관리합니다 · 잡아냅니다」)이다.

| 카드 | 첫 문장 | 둘째 문장 |
|---|---|---|
| [7] 낭비 발굴 | `Overlay …` 명령형 | `The stretches … **stand out**` 능동 |
| [9] 피크 저감 | `Identify …` 명령형 | `Contracted demand … **come down**` 능동 |
| [11] 지속 관리 | `Track …` 명령형 | `… **is caught**` **수동** ← 혼자 달랐다 |

`stands out`으로 바꾸자 '즉시 눈에 띄게 됩니다'가 나왔다. [7]이 이미 쓰는 표현이라 페이지 안에서도 맞는다.

[21]의 `hourly`는 '매시간 · 시간당'이고 원문 「시간대별」은 오전 · 야간 같은 구간이다.
같은 사이트 17번 [8]이 이미 `time of day`를 쓴다. **17번 신호 칩에도 같은 것이 있어 두 곳이 함께 바뀌었다.**

#### 그대로 둔 것

- [2] h1 `the peaks` → '소비 급증' — 같은 페이지 [22] 칩에서는 '피크'로 맞게 읽었다
- [10] `Contracted demand … come down` → '수요 감소와' — 17 · 19번에서는 '계약 수요량'으로 정확히 읽혔다. 번역기 변덕이다

측정: 신호 칩 높이가 한국어와 완전히 같고 가로 넘침 0.

#### [11] 카드 설명 — 어조는 잡히지 않았다

원문 「개선 효과를 추적해 다시 새지 않게 **관리합니다**」가 번역기에서 계속 **'~하십시오'**라는 명령으로 읽혔다.
네 차례 다듬으며 원인을 좁혔다.

| 영어 | 역번역 | 글자 수 |
|---|---|---|
| `… each improvement so savings do not leak back` | 각 개선 조치의 효과를 철저히 관리하여 절감 효과가 다시 새어 나가지 않도록 해야 합니다 | 48 |
| `… improvement, keeping savings from leaking back` | 개선 효과를 추적하여 절감 효과가 다시 사라지지 않도록 하십시오 | 32 |
| `… so the savings stay` | 개선 효과를 추적하여 절감 효과가 지속되도록 하십시오 | 28 |
| **`… and hold the savings`** (채택) | 개선 효과를 추적하고 절감 효과를 유지하십시오 | **24** |
| 한국어 원문 | 개선 효과를 추적해 다시 새지 않게 관리합니다 | 24 |

**두 가지를 배웠다.**

- **`each`처럼 원문에 없는 낱말이 길이를 키운다.** '각 ~ 조치의'로 불어나 역번역이 원문의 두 배가 됐다.
  `each`를 덜자 48자 → 32자로 줄었다.
- **어조는 붙잡히지 않았다.** 처음에는 `so`절 탓이라 보고 `and`로 바꿨으나 결과는 같았다.
  영어 문장이 동사 원형으로 시작하는 명령문이라서인데, 같은 구조인 [9] `Identify … and spread …`는
  '파악하고 분산시킵니다'로 서술로 읽힌다. **번역기가 문장마다 달리 판단하는 영역**이라 여기서 멈췄다.

채택안은 **글자 수가 원문과 같고 앞머리 「개선 효과를 추적하」까지 일치**한다. 남은 차이는 어조 하나다.

#### 역번역이 원문보다 길어지는 이유

1. 영어는 관사 · 전치사로 압축하지만 한국어는 조사와 어미로 풀어 쓴다
2. 번역기가 생략된 것을 채운다('철저히' · '조치의')
3. **영어에 원문에 없는 요소가 있으면 그만큼 더 불어난다** — 이번 `each`가 그랬다

한국어 1자당 영어 2~2.8자가 보통이므로, 영어가 원문의 2.5배쯤이면 정상 범위로 본다.

측정: 카드 3개 높이가 서로 같고(272px) 가로 넘침 0.

### 6.21 유즈케이스 카드 제목 25개를 명사구로 — 2026-09-18 사용자 결정

#### 발단

에너지최적화 [11]의 「지속 관리」를 `Keep the gains`로 고친 뒤,
사용자가 **「`Ongoing management`이 맞지 않느냐」**고 물었다.

처음에는 「이 사이트는 카드 제목을 한국어 명사구 ↔ 영어 동사구로 **설계했다**」고 답했으나,
**확인해 보니 그런 규칙은 없었다.**

- `I18N-GLOSSARY.md`의 제목 관련 항목은 「대소문자는 문장형」 하나뿐이다
- 유즈케이스 영어 데이터는 2026-08-04 `c9327f4`로 들어왔고 커밋에 **「⚠️ 원어민 검수 전 초안이다」**라고 적혀 있다
- 그 뒤 손본 것은 `load ratio → load factor`와 철자 통일뿐, 제목 형식을 논한 적이 없다

즉 **정해진 규칙이 아니라 초안의 습관**이 일곱 페이지에 일관되게 남은 것이었다.
「설계했다」는 표현은 부정확했다.

#### 결정

한국어는 25개가 모두 명사구인데 영어만 동사구였다. 사용자가 **원문을 따라 명사구로** 가기로 했다.

| 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|
| 무선 진동센서 부착 | Attach a wireless sensor | Wireless vibration sensor mounting |
| ISO-20816 기준 판정 | Judge against ISO 20816 | Assessment against ISO 20816 |
| 추세 기반 조기 감지 | Catch it early, from the trend | Trend-based early detection |
| 근거 있는 조치 제안 | Act on evidence | Evidence-backed action proposals |
| 다중 센서 수집 | Collect from many sources | Multi-sensor collection |
| 온톨로지로 연결 | Connect through the ontology | Connection through the ontology |
| 실시간 이상 감시 | Watch for anomalies in real time | Real-time anomaly monitoring |
| 사용 가시화 | Make usage visible | Usage made visible |
| 피크 관리 | Manage peaks | Peak management |
| 이상 사용 감지 | Detect abnormal use | Abnormal-use detection |
| 역률 · 부하 점검 | Check power factor and load | Power factor ⁠· load checks |
| 품질 지표 감시 | Monitor quality metrics | Quality metric monitoring |
| 이벤트 자동 기록 | Record events automatically | Automatic event recording |
| 원인 연결 | Connect to causes | Connection to causes |
| 영향 구분 | Separate what mattered | Impact separation |
| 통합 계량 | Meter everything together | Unified metering |
| 원단위 분석 | Analyze energy intensity | Energy intensity analysis |
| 피크 · 부하 관리 | Manage peak and load | Peak ⁠· load management |
| ESG 자동 집계 | Aggregate ESG automatically | Automatic ESG aggregation |
| 낭비 발굴 | Uncover waste | Waste discovery |
| 피크 저감 | Reduce peaks | Peak reduction |
| **지속 관리** | Keep the gains | **Ongoing management** |
| 공정과 품질 연결 | Link process to quality | Process-to-quality linking |
| 전조 감지 | Detect early signs | Early-sign detection |
| 사전 경고 | Warn in advance | Advance warning |

번역기로 25개를 한 번에 확인해 **24개가 통과**했다. 어긋난 하나는 「다중 **센서** 수집」을
`Multi-source`로 쓴 것(본문의 `diverse sources`에 이끌렸다) — `Multi-sensor`로 고쳤다.

`Usage made visible`만 분사구다. 「가시화」를 명사 `visualization`으로 옮기면
'데이터 시각화'라는 다른 뜻이 되어 분사형이 원문에 가깝다.

#### 대가

명사구가 동사구보다 길어 **예지보전 카드 제목 넷이 1440px에서 2줄이 됐다**(한국어는 1줄).
카드 높이도 250 → 327px로 늘었다. 다른 페이지는 대부분 1줄을 유지한다.
가로 넘침은 일곱 페이지 모두 0이다.

### 6.22 유즈케이스 · 품질예측 `/en/use-cases/quality-prediction` — 25단위

카드 제목 3개(`Process-to-quality linking` · `Early-sign detection` · `Advance warning`)와
공통 카드 수정은 모두 의도대로 읽혔다. **이 페이지 자체는 고칠 것이 없었고**, 관련 카드에서
**앞서 고친 17번의 누락**이 드러났다.

#### 세 곳을 함께 보지 않아 생긴 누락

17번 「전력 비용」을 고칠 때 **heroTitle만 바꾸고 tagline · cardDesc를 놓쳤다.**
`cardDesc`는 다른 여섯 페이지의 관련 카드에 실리므로, 21번 [21]에서 '비용과 위험'으로 나타났다.

| | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| tagline | **전력 비용**과 리스크 | both **cost** and risk | both **power cost** and risk |
| heroTitle | 〃 | (§6.17에서 고침) | cut **power cost** and risk |
| cardDesc | 〃 | cut **cost** and risk | cut **power cost** and risk |

**예지보전 h1에서도 같은 일이 있었다**(§6.15 — 센서가 tagline에만 있었다).
유즈케이스는 `tagline` · `heroTitle` · `cardDesc` 세 곳이 같은 문장을 담으므로 **항상 함께 확인한다.**

#### 그대로 둔 것

- [13] `which conditions **correlate with** defects` → '상관관계가 있는지'.
  원문 「불량이 늘었는지」보다 신중한 표현이라 오히려 정확하다.
- [4] `which step went wrong` — 원문은 「어느 공정의 **무엇이**」 둘인데 영어는 하나다.
  `or what in it`을 붙여 돌렸더니 **'부품의 어느 부분에서'**로 읽혀 원문(공정 안의 요인)과 더 멀어졌다.
  지금 표현을 유지한다.

### 6.23 블로그 · 「낭비는 어디에 숨어 있나」 — 15단위

**블라인드 역번역에서 블로그가 가장 충실했던 것과 일치한다.** 문장 누락도, 뜻이 바뀐 곳도 없었다.
경미한 셋만 고쳤다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [7] | 그 차이가 **낭비의** 신호입니다 | that difference is **the signal** | …the signal **of waste** |
| [11] | 그 **근거를** 추적할 수 있습니다 | **every figure** stays traceable | **the figures stay** traceable |
| [13] | 변동이 심한 **구역** 하나부터 | one **area** | one **zone** |

#### `every`가 블로그에만 남아 있었다

§4.3에서 원문에 없는 단정으로 지적해 두고 §5.3에서 랜딩 · 산업 페이지만 걷어냈다.
**블로그는 그때 범위에 넣지 않아 남았다.** 한 유형을 고칠 때 전수로 훑어야 한다는 것이
`faults` · `site data`에 이어 세 번째다.

#### `area` → `zone`은 한 곳만 바꿨다

`one area`가 **'분야'**로 읽혔다. 다만 17번 전력관리의 `by asset and area`는 '설비 및 **구역**별'로
정확히 읽혔다 — 앞에 `asset`이 있어 문맥이 잡아준다. 단독으로 선 이 한 곳만 `zone`으로 바꿨다.
**같은 '구역'이 사이트 안에서 `area` · `zone` 두 낱말로 갈리지만**, 오독을 막는 쪽을 택했다.

#### 그대로 둔 것

- [2] `peaks` → '급증 현상' — 20번과 같다. 다른 곳에서는 '피크'로 읽힌다
- [1] `Where the waste hides` — 원문은 의문형(「숨어 있나」)이지만 제목으로 통한다
- [15] `For the groundwork →` — 원문 「궁금하다면」이 빠졌으나 링크 안내라 무방하다

### 6.24 블로그 · 「불량은 검사보다 먼저 드러난다」 — 15단위

문장 누락도 뜻이 바뀐 곳도 없었다. **한 곳만** 고쳤다.

| 단위 | 한국어 | 바꾸기 전 | 바꾼 뒤 |
|---|---|---|---|
| [11] | 현장이 그 경고를 **믿고** 움직입니다 | before anyone **will act on it** | when an answer carries its evidence, **the shop floor trusts the warning and moves** |

#### `the floor`가 '의회'로 읽혔다

'믿고'를 넣으려 `the floor will trust it and act`로 바꿨더니 번역기가 **'의회가 그 답변을 신뢰하고'**로 읽었다.
영어 `the floor`는 의회 본회의장을 뜻하기도 하는데 `trust` · `act`가 붙자 표결 장면으로 끌린 것이다.
같은 문단 앞 문장 `the floor can intervene`은 '현장'으로 맞게 읽혔다 — **동사에 따라 갈린다.**
`shop floor`로 바꿔 해결했다.

> 회사소개(§6.2)에도 `from the floor` · `on the floor`가 있고 블라인드 역번역에서
> '현장/바닥'으로 모호하다고 표시됐던 곳이다. 이번 결과를 보면 그쪽도 확인할 값이 있다.

#### `before`절은 한국어에서 어순이 뒤집힌다

낱말을 고쳐도 원문 어순이 살지 않았다.

```
영어    A needs B  before  X will Y
한국어   X가 Y하려면  A에 B가 필요하다     ← 순서가 뒤바뀜
원문    A에 B가 따라야  X가 Y한다          ← 조건 → 결과
```

`before`절이 한국어에서 목적절('~하기 위해서는')로 앞으로 끌려 나온다. **낱말로는 막을 수 없다.**
`when` 조건절로 바꾸자 조건 → 결과 순서가 원문대로 돌아왔다.

남은 '현장의 **직원들**'은 `shop floor`가 한국어에서 사람을 가리키게 되는 낱말의 성질이라 여기까지가 최선이다.

#### 그대로 둔 것

- [5] `further upstream` → '공정 상류의 더 앞 단계' — 제조에서 upstream은 전공정을 뜻하는 정확한 용어다
- [7] `a material property` → '재료 특성' — 원문 「원료」지만 사이트 전반이 `material`을 쓴다
- [9] `conditions correlated with defects` — **원문이 「상관 있는」이라 정확하다**(21번에서 지적했던 것과 달리 여기는 맞다)

#### 회사소개의 `floor`는 확인 결과 문제없다 — 2026-09-22

블로그에서 `the floor`가 '의회'로 읽힌 뒤, 회사소개의 세 곳도 확인했다.

| 위치 | 한국어 | 영어 | 번역기 |
|---|---|---|---|
| 스토리 제목 | **현장**을 아는 팀이 만든 | built by a team **from the floor** | **현장 경험이 풍부한** 팀 ✓ |
| 강점 부제 | **현장**을 겪은 팀과 | a team that has been **on the floor** | **현장에서 직접 일해 온** 팀 ✓ |
| People 카드 | **현장**을 겪은 사람들이 설계 | people who have been **on the floor** | ✓ |

**문법 자리에 따라 위험도가 갈린다.**

```
회사소개   from the floor · on the floor      ← 전치사구, 장소로만 읽힌다
블로그     the floor trusts … and acts        ← 주어 + 동사, 의회 표결로 읽힌다
```

`the floor`가 **주어 자리에 서고 사람처럼 행동할 때만** 의회로 끌린다.

블라인드 역번역은 스토리 제목을 '현장에서 온 / 바닥부터'로 모호하다고 표시했으나
**번역기는 세 곳 다 '현장'으로 정확히 읽었다.** 두 검증이 갈릴 때는 실제 오독이 나온 쪽을 따라 고치지 않는다.
