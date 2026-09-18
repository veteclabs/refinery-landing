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
