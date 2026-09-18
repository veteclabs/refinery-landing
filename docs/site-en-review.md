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
