# 한국어–영어 용어집 (Refinery)

영어 페이지에서 실제로 쓰고 있는 대응어와 그 선택 근거를 모았다.
`I18N-PLAN.md`의 **원어민 검수** 단계에서 이 문서를 먼저 보면, 전체를 읽는 대신
**결정이 갈리는 지점만** 확인할 수 있다.

- **상태 표기**: ✅ 표준 용어라 이견이 적음 · ⚠️ 검수 필요(지역·업계에 따라 갈림) · 🔵 자체 조어
- 용어를 바꾸면 반영해야 할 파일은 각 표 아래에 적었다.

---

## 0. 표기 규칙 (확정)

| 항목 | 규칙 |
|---|---|
| 철자 | **미국식**. `optimization`·`organization`·`analyze`·`judgment`·`program`·`toward` |
| 인용부호 구두점 | **미국식** — 마침표·쉼표를 닫는 따옴표 **안쪽**에. `"…wrong."` |
| 아포스트로피 | 곡선 `’` (직선 `'` 사용 금지) |
| 대시 | em dash `—` (양옆 공백 있음) |
| 숫자 | **10 이상은 숫자로**(AP 스타일). `30 years`·`100 industrial sites` (○) / `thirty years` (×). 국문도 `30년`이라 표기가 갈리지 않는다 |
| 날짜 | `en-US` — `July 30, 2026` |
| 제목 대소문자 | **문장형(sentence case)**. `Power management` (○) / `Power Management` (×) |

> `analysis`·`realistic`처럼 영·미 공통인 단어는 그대로 둔다.

> **국문 쪽 표기가 틀린 것** — `ISO-20816`(공식은 `ISO 20816`, 영어는 이미 맞음)·
> `OPC-UA`(공식은 `OPC UA`)·`4-20mA`(공식은 `4–20 mA`). 뒤 둘은 영어도 함께 틀려서 보류 중이다.

---

## 1. 제품·플랫폼

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 산업 AI 운영체제 | Industrial AI OS | 🔵 | **Refinery 전체를 가리키는 범주어.** 제목·태그라인은 `Industrial AI OS`, 문장 안에서는 `industrial AI OS` 또는 `operating system`. 대화형 AI 기능(부분)에는 쓰지 않는다 |
| 온톨로지 | ontology | ✅ | 업계 표준어 |
| AI 에이전트 | AI agent | ✅ | 운영체제 안의 대화형 구성요소 이름. 라벨·태그라인은 `AI Agent`, 문장 안에서는 `AI agent` |
| 통합 지능 레이어 | integrated intelligence layer | 🔵 | **자체 조어.** 영어권에서 자연스럽게 읽히는지 확인 필요. 대안: `unified intelligence layer`. 범주어가 아니다 — 기존 시스템 위에 얹는 도입 방식을 묘사할 때만 쓴다. |
| 데이터 계보 | data lineage | ✅ | |
| 파이프라인 | pipeline | ✅ | |
| 자동화 · 워크플로우 | automation & workflows | ✅ | |
| 근거 있는 / 근거를 들어 | evidence-backed / with evidence | ⚠️ | 마케팅 톤 문제. `explainable`을 쓸지 검토 |
| 전조 | early signs | ⚠️ | 기술 문서라면 `precursors`·`leading indicators`가 더 정확할 수 있음 |
| 현장 | site / field / plant | ⚠️ | **문맥마다 다르게 옮겼다.** 통일할지 결정 필요 (아래 §7) |

> 범주어(「산업 AI 운영체제」/`Industrial AI OS`)를 바꾸면 고칠 파일 — `src/pages/index.astro`·`src/pages/en/index.astro`(메타·JSON-LD·teams) · `src/pages/why-refinery.astro`·`src/pages/en/why-refinery.astro` · `public/llms.txt` · `src/data/pillars/industrial-ai.ts` · `public/agent-replay-demo.html`·`public/agent-replay-demo-en.html` · `src/components/ResourcesPage.astro`(플랫폼 개요 카드 제목).

## 2. 설비·예지보전

| 한국어 | 영어 | 상태 |
|---|---|---|
| 예지보전 | predictive maintenance | ✅ |
| 예방정비 | preventive maintenance | ✅ |
| 3축 진동 | 3-axis vibration | ✅ |
| 가동 이력 | runtime history | ⚠️ `operating history`도 흔함 |
| 베어링 마모 | bearing wear | ✅ |
| 다운타임 / 계획 외 정지 | downtime / unplanned stoppage | ✅ |
| 무선 진동센서 | wireless vibration sensor | ✅ |
| 게이트웨이 | gateway | ✅ |

고유명사는 그대로 둔다 — `WISE-2410`, `WISE-6610`, `LoRaWAN`, `ISO 20816`, `IP66`.
> 한국어 본문은 `ISO-20816`(하이픈), 영어는 `ISO 20816`(공백)으로 썼다. 영어 표기는 공백이 표준이다.

## 3. 전력

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 전력품질 | power quality | ✅ | |
| 역률 | power factor | ✅ | |
| 부하율 | load factor | ✅ | 검수 반영(2026-08-04). `load ratio`에서 변경 |
| **계약전력** | **contracted demand** | ⚠️ | **가장 확인이 필요한 항목.** 미국은 `contracted capacity`·`demand charge`를 더 씀 |
| 피크 | peak | ✅ | |
| 유효/무효 전력 | active/reactive power | ✅ | 미국에서 `real/reactive power`도 씀 |
| 고조파(THD) | harmonics (THD) | ✅ | |
| 불평형 | imbalance | ✅ | |
| 순간 전압 강하 / 상승 | sag / swell | ✅ | 업계 표준어 |
| 전압 · 주파수 | voltage · frequency | ✅ | |

## 4. 에너지·ESG

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| **원단위** | **energy intensity** | ⚠️ | 표준 용어는 맞음. 업계 관용어 확인 권장 |
| 에너지경영시스템 | energy management system (EnMS) | ✅ | ISO 50001 용어 |
| 공장 에너지관리 | factory energy management (FEMS) | ✅ | |
| 에너지 최적화 | energy optimization | ✅ | |
| 배출량 | emissions | ✅ | |
| 생산량 | output | ⚠️ `production volume`이 더 명확할 수 있음 |
| 전기·가스·스팀·용수 | electricity · gas · steam · water | ✅ | |
| 낭비 | waste | ✅ | |

## 5. 품질·공정

| 한국어 | 영어 | 상태 |
|---|---|---|
| 품질 예측 | quality prediction | ✅ |
| 불량 | defect | ✅ |
| 원료 로트 | material lot | ✅ |
| 공정 조건 | process conditions | ✅ |
| 검사 결과 | inspection results | ✅ |
| 완성품 검사 | final inspection | ✅ |

## 6. 시스템·프로토콜

약어는 번역하지 않고 그대로 쓴다.

`SCADA` · `MES` · `ERP` · `EMS` · `AMI` · `Modbus` · `OPC-UA` · `DNP3` · `IEC 61850` · `OT/IT`

| 한국어 | 영어 | 상태 |
|---|---|---|
| 스마트미터 | smart meters | ✅ |
| 온프레미스 | on-premises | ✅ `on-premise`(단수)는 쓰지 않는다 |
| 연동 | integration / connect | ✅ |
| 레거시 | legacy | ✅ |

## 7. 사이트 UI·내비게이션

헤더·푸터는 한국어와 **같은 축**을 쓴다. → `src/i18n/nav.ts`

| 한국어 | 영어 |
|---|---|
| 솔루션 | Solutions |
| 산업별 | By industry |
| 과제별 | By challenge |
| 리소스 | Resources |
| 회사 / 회사 소개 | Company / About |
| 문의하기 | Contact |
| 데모 신청하기 | Request a demo |
| 자료실 · 백서 | Resources & whitepapers |
| 문서 | Docs |
| 약관 | Legal |
| 준비중 | Soon |
| 왜 필요한가 | Why it matters |
| Refinery는 이렇게 풉니다 | How Refinery solves it |
| 다루는 데이터·신호 | Data and signals |
| 템플릿으로 시작 | Start from a template |
| 더 읽어보기 | Read more |
| 목차 | Contents |
| 이전 글 / 다음 글 | Previous / Next |
| 약 N분 읽기 | N min read |

### ⚠️ "현장"을 어떻게 옮길지

한국어 카피에서 가장 자주 나오는 단어인데, 영어에는 1:1 대응어가 없어 문맥별로 나눠 썼다.
**검수 시 통일 여부를 결정해야 한다.**

| 문맥 | 현재 영어 | 예 |
|---|---|---|
| 사업장 일반 | `site` | "problems on industrial **sites**" |
| 공장 건물 | `plant` | "walked the **plants** themselves" |
| 현장 직군·경험 | `field` | "**field** engineers" |
| 작업 현장 | `the floor` | "people who have been on **the floor**" |

---

## 8. 홀로 두면 갈리는 낱말 (2026-09-30)

영어로는 정확한데 **되돌아올 때 다른 말이 되는** 것들이다. 뜻이 여럿인 낱말이
문맥 없이 서면 번역기가 더 흔한 쪽을 고른다. 페이지 번역기는 `<br>`·목차 항목·
제목에서 세그먼트를 끊으므로([[br-splits-machine-translation]]) 그 자리가 특히 위험하다.

| 영어 | 홀로 두면 | 뜻대로 읽히려면 | 실제로 겪은 곳 |
|---|---|---|---|
| `adopt` · `adoption` | **입양** | 목적어를 붙인다 — `platform adoption` | 랜딩 FAQ 제목, AI 백서 07절 제목·본문 |
| `field` | **분야 · 영역** | 뒤에 명사를 붙인다 — `field data` · `field sites` · `field operations` | 플랫폼 개요 title, 히어로 lede |
| `layer` | **계층**(명사로 읽힘) | `sit on top of`로 바꾸거나 목적어를 준다 | 플랫폼 개요 카드, 데이터 통합 백서 |
| `follow` | **파악하다** | `trace`를 쓴다 | AI 백서 02절 |
| `grounded` | **실용적인**(AI를 수식할 때) | 답변을 수식하면 '근거'로 읽힌다. AI를 수식하면 풀어 쓴다 | AI 백서 CTA |
| `subject` | **주체 · 주제** | `thing`을 쓴다 | 데이터 통합 백서 03·07절 |
| `operations` | **현장 · 시스템 · 운영 프로세스** | 단수 `an operation`으로 두거나 `field`를 붙인다 | 플랫폼 개요 스토리·lede |
| `site` | **사이트** | `field`로 바꾼다 | AI 백서 07절 |
| `Refinery`(제품명) | **정유소 · 정유 산업용** | 본문은 `<span translate="no">`, `<title>`은 요소에 `translate="no"` | 랜딩 히어로, 백서 title |

### 반대로 — 고치지 않아도 되는 것

되돌아온 말이 다르다고 다 문제는 아니다. **영어가 업계 표준어**면 한국어 외래어
사정일 뿐이다. 억지로 맞추면 영어가 나빠진다.

| 영어 | 되돌아오는 말 | 국문 |
|---|---|---|
| `alarms` | 경보 | 알람 |
| `predictive maintenance` | 예측 유지보수 | 예지보전 |
| `anomaly detection` | 이상 탐지 | 이상 감지 |
| `train` | 훈련 | 학습 |
| `report` | 보고서 | 리포트 |
| `does not leave` | 유출되지 않는 | 벗어나지 않는 |

### 판정 기준

**뜻이 뒤집히거나 사라지면 고치고, 다른 낱말일 뿐이면 둔다.**
`subject` → '주체'는 `대상`과 거의 반대라 고쳤고, `alarms` → '경보'는 그냥 다른 말이라 두었다.

> ⚠️ `[nn]` 번호 목록만 보고 판정하면 과잉 교정이 난다. 목록은 문맥이 없는 최악 조건이라
> 실제 페이지에서는 멀쩡한 것까지 걸린다. **산문(페이지 순서대로 이어 붙인 판)이 최종 기준**이다.
> 2026-09-29 플랫폼 개요에서 목록 기준으로 잡은 3건을 산문 확인 뒤 철회했다.

---

## 9. 브랜드 카피 (번역이 아니라 결정)

아래는 직역이 아니라 영어 카피로 새로 쓴 문장이다. **가장 먼저 검수받아야 할 대상.**

| 위치 | 영어 |
|---|---|
| 회사 h1 | Industrial AI built by people who know the field |
| 회사 스토리 h2 | Built by people who have been on the floor |
| 블로그 h1 | Insight & news |
| 문의 히어로 | Let's find the answer that fits your operation, together. |
| 유즈케이스 CTA | Let's look at how this fits your operation. |
| 산업 CTA | Let's find the answer that fits your energy operation, together. |

> 위 문장의 아포스트로피는 실제 파일에서 곡선(`’`)이다.

---

## 용어를 바꿀 때 고쳐야 할 파일

| 대상 | 파일 |
|---|---|
| 유즈케이스 본문 | `src/data/usecases/en.ts` |
| 산업 본문 | `src/data/industries/energy.en.ts` |
| 헤더·푸터·CTA | `src/i18n/nav.ts` |
| 페이지 UI 문구 | `src/components/{UseCase,Industry,Contact,Company,Docs,Resources}Page.astro`의 `T` 사전 |
| 블로그 UI 문구 | `src/layouts/BlogPost.astro`의 `T` 사전 |
| 블로그 본문 | `src/content/blog/en/*.md` |

**한국어 파일(`index.ts`·`energy.ts`·`src/content/blog/*.md`)은 건드리지 않는다.**

---

## 검수 순서 제안

1. **§9 브랜드 카피** — 톤 결정이라 다른 것보다 먼저
2. **§3 계약전력**, **§4 원단위**, **§1 통합 지능 레이어** — 잘못되면 전문성 신뢰를 잃는 항목
3. **§7 "현장"** 통일 여부
4. 블로그 5편 전체 정독

새 페이지를 쓸 때는 **§8을 먼저 본다.** 거기 적힌 낱말은 쓰기 전에 문맥을 붙여 둔다 —
나중에 역번역으로 잡으면 이미 여러 자리에 퍼져 있다.

---

## 10. 법적 고지 4종은 별도 용어집을 쓴다

개인정보처리방침 · 이용약관 · 소프트웨어 사용권 계약 · 쿠키 정책은 한국법 기반 문서라
검수 기준이 다르다(법령 영문본 대조 · GDPR 용어 차단 · 한국어판 우선 조항).
용어집을 따로 두었다 → **[docs/legal-en-glossary.md](docs/legal-en-glossary.md)**

표기 규칙(§0 철자 · 아포스트로피 · 대시)은 그 문서도 이 문서를 따른다.
