# 법적 고지 영어판 — 번역 용어집

대상: `/en/privacy` · `/en/terms` · `/en/eula` · `/en/cookie-policy` (+ `src/data/legal.ts`)

**이 문서에 없는 용어는 임의로 번역하지 않는다.** 새 용어가 필요하면 여기에 먼저 추가하고,
출처(법령 영문본 · 기관 공식 표기)를 메모 칸에 남긴다.

- 철자 · 아포스트로피 · 대시 · 제목 대소문자는 [I18N-GLOSSARY.md](../I18N-GLOSSARY.md) §0을 따른다.
- 상태 표기: ✅ 공식 영문본이 있어 이견 없음 · ⚠️ 확인 필요 · ⛔ 쓰지 않는다

---

## 0. 세 가지 원칙

### 0-1. 한국어판이 우선한다

영어판 네 페이지 모두 본문 맨 앞에 아래 고지를 둔다. 위치 · 서식은 쿠키 정책에서 먼저 확정한다.

> This English version is provided for reference only. In the event of any discrepancy
> between this translation and the Korean original, the Korean version shall prevail.

법적 효력은 한국어판에 있다. 이 한 줄이 번역 오류가 그대로 의무가 되는 것을 막는다.

### 0-2. 법령 · 기관명은 공식 영문본만 쓴다

국가법령정보센터(law.go.kr) 영문법령과 개인정보보호위원회(PIPC) 공식 영문 표기가 기준이다.
들어맞는 영문본이 없으면 ⚠️로 남기고 **임의 번역하지 않는다.**

### 0-3. GDPR · CCPA 용어를 끌어오지 않는다 — 가장 위험한 항목

네 문서는 전부 한국법 기반이다. EU · 미국 용어가 한 단어 섞이면 **그 규정을 준수한다고
약속한 문서로 읽힌다.** 없는 의무를 스스로 지는 셈이라, 오역 중 유일하게 법적 책임이 커진다.
영어 개인정보처리방침을 쓰다 보면 관용적으로 손이 가는 표현이라 §7 목록을 번역 전에 먼저 읽는다.

---

## 1. 법령

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 「개인정보 보호법」 | Personal Information Protection Act (PIPA) | ✅ | 첫 등장에 전체 명칭 + 약어, 이후 `PIPA` |
| 「개인정보 보호법 시행령」 | Enforcement Decree of the Personal Information Protection Act | ✅ | |
| 「개인정보의 안전성 확보조치 기준」 | Standards for Measures to Secure the Safety of Personal Information | ⚠️ | PIPC 고시. 영문본 명칭 대조 필요 |
| 「개인정보 처리 방법에 관한 고시」 | Notice on Methods of Processing Personal Information | ⚠️ | 같음 |
| 「개인정보 처리방침 작성지침(2025.4.)」 | Guidelines on Drafting Privacy Policies (April 2025) | ⚠️ | 공식 영문본 없음. 괄호에 한국어 원 제목 병기 검토 |
| 「약관의 규제에 관한 법률」 | Act on the Regulation of Terms and Conditions | ✅ | |
| 「저작권법」 | Copyright Act | ✅ | |
| 「대외무역법」 | Foreign Trade Act | ✅ | |
| 「국제물품매매계약에 관한 국제연합 협약(CISG)」 | United Nations Convention on Contracts for the International Sale of Goods (CISG) | ✅ | 국제 협약이라 명칭 확정 |

### 조 · 항 · 호 인용 형식

국가법령정보센터 영문본 방식을 따른다.

| 한국어 | 영어 |
|---|---|
| 제30조 | Article 30 |
| 제30조 제1항 | Article 30(1) |
| 제30조 제1항 제7호 | Article 30(1)7 |
| 제101조의5 | Article 101-5 |
| 제28조의8 제1항 제3호 가목 | Article 28-8(1)3(a) |

본문 서술에서는 `Article 30(1)7 of PIPA` 형태로 법령 약어를 뒤에 붙인다.

### 날짜 — 미국식 (2026-09-11 확정)

| 한국어판 | 영어판 |
|---|---|
| `2026-09-01` | `September 1, 2026` |
| 2026-09-01부터 시행합니다 | take effect on September 1, 2026 |

- [I18N-GLOSSARY.md](../I18N-GLOSSARY.md) §0과 같은 규칙이다. 영어 블로그(`July 30, 2026`)와 맞춘다.
- **숫자 + 빗금(`09/01/2026`)은 쓰지 않는다** — 미국은 9월 1일, 유럽은 1월 9일로 읽는다.
- **데이터는 ISO 그대로 둔다.** `legal.ts`의 `effectiveDate` · `revisions[].date`는 `2026-09-01`로
  유지하고, 영어 페이지가 표시할 때만 변환한다. 한국어판과 영어판이 다른 날짜를 갖는 일이 없다.
- 네 문서의 날짜 14곳(머리 시행일 · 본문 시행 문장 · 이력 표, 처리방침 +2)이 대상이다.

---

## 2. 기관

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 개인정보보호위원회 | Personal Information Protection Commission (PIPC) | ✅ | |
| 개인정보 분쟁조정위원회 | Personal Information Dispute Mediation Committee | ✅ | |
| 개인정보침해신고센터 | Personal Information Infringement Report Center | ⚠️ | KISA 운영. 영문 표기가 자료마다 갈림 — KISA 영문 사이트 대조 필요 |
| 한국인터넷진흥원 | Korea Internet & Security Agency (KISA) | ✅ | 앰퍼샌드 포함이 공식 표기 |
| 대검찰청 사이버수사과 | Cyber Investigation Division, Supreme Prosecutors' Office | ⚠️ | 부서명 영문 표기 대조 필요 |
| 경찰청 사이버범죄 신고시스템(ECRM) | Cybercrime Reporting System (ECRM), Korean National Police Agency | ⚠️ | 같음 |

> 기관명은 **영문 뒤 괄호에 한국어를 병기**한다. 한국 기관에 실제로 연락해야 하는 독자가
> 검색할 수 있어야 한다. 예: `Personal Information Dispute Mediation Committee (개인정보 분쟁조정위원회)`

---

## 3. 개인정보 용어 — PIPA 영문본 기준

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 개인정보 | personal information | ✅ | **`personal data`는 쓰지 않는다** — GDPR 용어다 (§7) |
| 개인정보처리자 | personal information controller | ✅ | PIPA 영문본 |
| 정보주체 | data subject | ✅ | PIPA 영문본. 본문 27회 등장 |
| 개인정보 보호책임자 | privacy officer | ✅ | PIPA 제31조 영문본. **`DPO`는 쓰지 않는다** (§7) |
| 개인정보취급자 | person in charge of handling personal information | ⚠️ | 길어서 첫 등장 후 축약할지 결정 필요 |
| 수탁자 | entrusted party (수탁자) | ⚠️ | PIPA 영문본은 `trustee`(영어권에서 신탁 수탁자로 읽힘), 자연스러운 `processor`는 GDPR 용어라 못 쓴다. `entrusted party` + 한국어 병기 + 무엇을 맡기는지 문장 설명. **아래 두 방향을 구분한다** |
| 처리위탁 | entrustment of processing | ⚠️ | 같음 |
| 재위탁 | sub-entrustment | ⚠️ | 같음 |
| 제3자 제공 | provision to third parties | ✅ | |
| 국외 이전 | transfer of personal information abroad | ✅ | PIPA 제28조의8 표제 |
| 가명처리 | pseudonymization | ✅ | |
| 익명처리 | anonymization | ✅ | 법무 리뷰에서 "비식별 → 익명처리"로 통일한 용어 |
| 민감정보 | sensitive information | ✅ | |
| 고유식별정보 | unique identifying information | ✅ | |
| 행태정보 | behavioral information | ⚠️ | 온라인 맞춤형 광고 가이드라인 용어. 첫 등장에 괄호 설명 권장 |
| 자동 수집 장치 | automatic collection device | ⚠️ | PIPA 제30조(1)7의 "인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치" |
| 접속기록 | access logs | ✅ | |
| 파기 | destruction | ✅ | PIPA는 `destroy`를 쓴다. `deletion`과 구분 |
| 열람 | access | ✅ | `right to access`가 아니라 `request access` 형태로 |
| 정정 · 삭제 | correction and deletion | ✅ | |
| 처리정지 | suspension of processing | ✅ | |
| 동의 철회 | withdrawal of consent | ✅ | |
| 보유 기간 | retention period | ✅ | |
| 수집 항목 | items collected | ✅ | |

### "수탁자"는 방향이 두 가지다

같은 낱말이 문서 안에서 정반대로 쓰인다. 영어에서는 문장으로 갈라 준다.

| 방향 | 어디 | 한국어 | 영어 |
|---|---|---|---|
| **회사가 수탁자** | 처리방침 10항 · 약관 제17조 · EULA 제13조 | 고객사가 개인정보처리자이고 회사는 수탁자입니다 | VETEC acts as an **entrusted party (수탁자)** processing on the Customer's behalf |
| **제3자가 수탁자** | 처리방침 8항 (Vercel · Google · Mixpanel · Web3Forms) | 수탁자는 회사의 업무를 처리하기 위해 개인정보를 위탁받는 자 | the following **entrusted parties (수탁자)** process personal information on our behalf |

`processor`를 쓰면 두 문장이 GDPR의 controller/processor 쌍으로 읽힌다. ①의 근거는
**PIPA 제26조(처리위탁)**이지 GDPR 제28조가 아니므로, DPA 체결 · 감사권 · 하위처리자 승인 같은
**없는 계약 의무를 약속한 것처럼 읽힌다.**

---

## 4. 계약 용어 — 이용약관 · EULA

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 이용약관 | Terms of Service | ✅ | |
| 소프트웨어 사용권 계약 | Software License Agreement | ✅ | 제목에 `(EULA)` 병기 |
| 사용권 | license | ✅ | 본문 25회 |
| 고객 데이터 | Customer Data | ✅ | **정의어라 대문자.** 정의된 뒤에는 항상 대문자로 |
| 고객사 | Customer | ✅ | 같음 |
| 지식재산권 | intellectual property rights | ✅ | |
| 저작권 | copyright | ✅ | |
| 2차적저작물 | derivative works | ✅ | |
| 영업비밀 | trade secrets | ✅ | |
| 비밀유지 | confidentiality | ✅ | |
| 역분석 | reverse engineering | ✅ | |
| 불가항력 | force majeure | ✅ | |
| 준거법 | governing law | ✅ | |
| 관할 | jurisdiction | ✅ | 약관 §26 · EULA §20의 "전속적 합의가 아니며"는 `non-exclusive`로 |
| 해지 | termination | ✅ | 약관 제19조 · EULA 제14조. 계약 해제(rescission)는 네 문서에 없다 |
| (이용) 제한을 해제 | lift the restriction | ✅ | 약관 제20조. **법률용어 '해제'가 아니라 제한 해소다** — `rescission`으로 옮기지 않는다 |
| 하자 | defect | ✅ | |
| 보증 | warranty | ✅ | |
| 보증 부인 | disclaimer of warranties | ✅ | |
| 면책 | **조문마다 다르다 → 아래 표** | ⚠️ | 본문에 '면책'이라는 낱말이 쓰인 곳은 **약관 제23조 제3항 한 곳뿐**이고 그것은 `indemnification`이다. 나머지는 조문 제목이 이미 셋을 갈라 놓았다 |
| 손해배상 | damages | ✅ | 위와 같이 `indemnification`과 구분 |
| 손해 | damages / loss | ⚠️ | 금액은 `damages`, 사실로서의 손해는 `loss` |
| 고의 또는 중대한 과실 | willful misconduct or gross negligence | ✅ | 본문 7회. 표현 고정 |
| 귀책사유 | fault | ✅ | |
| 책임총액 상한 | aggregate liability cap | ✅ | |
| 통지 | notice | ✅ | 본문 26회 |
| 유지보수 | maintenance | ✅ | |
| 서비스 수준 | service levels | ✅ | |
| 완전합의 | entire agreement | ✅ | 법무 리뷰 B-3에서 신설 권장된 조항 |
| 청약철회 | withdrawal of subscription | ⚠️ | 전자상거래법 용어. 해당 조항이 있을 때 확인 |

### 보증 부인 · 책임 제한 · 제3자 청구 방어 — 셋을 합치지 않는다

한국어 원문이 이미 조문 제목으로 갈라 놓았다. **영어에서 이 구분을 잃는 것이 가장 큰 위험이다.**

| 조 | 한국어 제목 | 영어 표제 | 방향 |
|---|---|---|---|
| 약관 제21조 · EULA 제15조 | 보증 및 보증의 부인 | Disclaimer of warranties | 회사를 보호 |
| 약관 제22조 · EULA 제17조 | 책임의 제한 | Limitation of liability | 회사를 보호 |
| 약관 제23조 | 제3자 청구에 대한 방어 | Indemnification | 회사 → 고객 (제3항은 고객 → 회사) |

영어 계약서 관행상 셋을 한 조로 묶어 `Indemnification`이라 부르는 경우가 있는데,
그렇게 하면 **책임 상한 조항이 지급 의무 조항으로 읽힌다.** 조문 번호와 표제를 원문 그대로 유지한다.

> 약관 제23조 제3항 "고객이 같은 방법으로 회사를 방어하고 면책합니다"는 **방향이 반대인
> indemnification**(고객 → 회사)이다. `the Customer shall defend and indemnify the Company`.

---

## 5. 쿠키 정책 전용

| 한국어 | 영어 | 상태 | 메모 |
|---|---|---|---|
| 쿠키 | cookies | ✅ | |
| 유사 기술 | similar technologies | ✅ | |
| 로컬 스토리지 | local storage | ✅ | 코드 표기는 `localStorage` 그대로 |
| 필수 항목 | strictly necessary | ✅ | |
| 분석 항목 | analytics | ✅ | |
| 세션 리플레이 | session replay | ✅ | |
| 히트맵 | heatmaps | ✅ | |
| 보관 기간 | retention | ✅ | 표 머리 칸 |
| 제공자 | provider | ✅ | 표 머리 칸 |
| 자사 / 제3자 | first party / third party | ✅ | |
| 모두 허용 / 모두 거부 | Accept all / Reject all | ✅ | 쿠키 배너 버튼. 이미 `CookieConsent.astro`에 있는 문구와 맞춘다 |
| 쿠키 설정 | Cookie settings | ✅ | 푸터 버튼. `nav.ts`와 맞춘다 |
| 설정 경로 | settings path | ✅ | 6항 표 머리 칸 |

> 6항 브라우저 설정 경로(`설정 › 개인 정보 보호 및 보안 › 서드 파티 쿠키`)는 **각 브라우저의
> 영어 UI 실제 메뉴 이름**으로 옮긴다. 한국어 메뉴를 직역하면 독자가 그 메뉴를 못 찾는다.
> Chrome · Edge · Safari · Firefox는 영어 UI에서 직접 확인하고, Whale은 영어 UI가 없으면 ⚠️로 남긴다.

---

## 6. `src/data/legal.ts` 데이터 값

한국어 값 32개 중 **번역이 필요한 문장형이 7개**, 나머지는 고유명사 · 숫자 · 날짜다.

| 키 | 한국어 | 영어 | 상태 |
|---|---|---|---|
| `company.legalName` | 주식회사 베텍 | VETEC Co., Ltd. | ✅ 2026-09-11 확인 |
| `company.address` | 대전광역시 유성구 관평동 1311 | 24, Techno 3-ro, Yuseong-gu, Daejeon, Korea | ✅ 2026-09-11 확인 — 아래 주의 |
| `company.ceo` | 최영준 | YJ Choi | ✅ 2026-09-11 확인 |
| `company.cpoName` | 윤현석 | HS Yoon | ✅ 2026-09-11 확인 |
| `company.cpoTitle` | 그룹장 | Head of Group | ✅ 2026-09-11 확인 |
| `processors[].task` | 웹사이트 호스팅 · CDN 운영, 트래픽 · 성능 측정(쿠키 미사용) | Website hosting and CDN operation; traffic and performance measurement (no cookies) | |
| `processors[].task` | 문의 · 데모 신청 폼 데이터의 전송 및 이메일 발송 처리 | Transmission of inquiry and demo request form data, and email delivery | |
| `processors[].task` | Google Analytics를 통한 웹사이트 이용 통계 분석 | Website usage statistics analysis via Google Analytics | |
| `processors[].task` | 제품 · 콘텐츠 이용 행태 분석, 세션 리플레이 및 히트맵 기록 | Analysis of product and content usage behavior; session replay and heatmap recording | |
| `processors[].country` | 미국 및 Vercel 엣지 네트워크 소재국 | United States and countries where Vercel edge networks are located | |
| `processors[].country` | 미국 등 Google 데이터센터 소재국 | United States and other countries where Google data centers are located | |
| `retention.*` | 14개월 · 12개월 · 30일 | 14 months · 12 months · 30 days | ✅ |
| `revisions[].summary` | 최초 제정 | Initial version | ✅ |
| `revisions[].href` 라벨 | 현행 | Current | ✅ |

회사 정보 5개는 사용자가 확인한 값이다. **표기를 바꾸지 않는다** — 성명은 이니셜 + 성
(`YJ Choi`), 국가는 `Korea`로 준 그대로 쓴다.

> **주소 주의 — 국문과 영문이 잠시 어긋난다.** 영문 `24, Techno 3-ro`는 도로명 주소이고
> 국문 `관평동 1311`은 지번 주소다. 영어판 작업을 마친 뒤 **별도 브랜치에서 국문을 도로명
> (`테크노3로 24`)으로 바꿀 예정**이다. 그때까지 두 값은 같은 장소를 다른 체계로 가리킨다.

---

## 7. ⛔ 쓰지 않는 표현 — 번역 전에 먼저 읽는다

아래 표현이 영어판에 들어가면 **한국법 기반 문서가 EU · 미국 규정 준수를 약속한 문서로 바뀐다.**

| 쓰지 않을 표현 | 왜 | 대신 |
|---|---|---|
| `personal data` | GDPR 용어 | `personal information` |
| `lawful basis` · `legal basis for processing` | GDPR 제6조 체계 | PIPA 조항을 직접 인용 |
| `legitimate interest` | GDPR 제6조(1)(f) | 해당 개념이 PIPA에 없다 |
| `data controller` / `data processor` | GDPR 쌍 개념 | `personal information controller` / `entrusted party` |
| `Data Protection Officer` · `DPO` | GDPR 제37조 | `privacy officer` |
| `right to erasure` · `right to be forgotten` | GDPR 제17조 | `request deletion` (PIPA 제36조) |
| `data portability` | GDPR 제20조 | PIPA 전송요구권은 별개 제도다 |
| `Standard Contractual Clauses` · `SCCs` | EU 국외이전 수단 | PIPA 제28조의8 근거를 그대로 |
| `supervisory authority` | GDPR 용어 | `Personal Information Protection Commission (PIPC)` |
| `Do Not Sell My Personal Information` | CCPA 전용 문구 | 해당 제도가 없다 |
| `GDPR-compliant` · `CCPA-compliant` | 준수 선언이 된다 | 쓰지 않는다 |
| `We may share your data with partners` | 한국어 원문에 없는 범위를 만든다 | 원문 그대로 옮긴다 |

> **원칙: 한국어 원문에 없는 말을 영어에서 만들지 않는다.** 영어 법적 문서의 관용 표현이
> 떠올라도, 원문에 대응하는 문장이 없으면 넣지 않는다.

---

## 8. ⚠️ 결정이 필요한 항목

번역을 시작하기 전에 정해야 할 것들. 위 표에서 ⚠️로 표시한 것 중 **영향이 큰 순서**다.

| # | 항목 | 무엇을 정해야 하나 | 상태 |
|---|---|---|---|
| 1 | **기관 · 고시 영문 명칭 5건** (§1 · §2) | 공식 영문본 대조 | 번역 중 확인 |
| 2 | **브라우저 영어 UI 메뉴 이름** (§5) | 영어 UI에서 직접 확인 | 번역 중 확인 |

### 결론이 난 항목

| 항목 | 결론 |
|---|---|
| **"면책"** | 원문이 조문 제목으로 이미 셋을 갈라 놓았다(제21 · 22 · 23조). 그 구분을 그대로 옮긴다 → §4 |
| **"수탁자"** | 방향이 두 가지였다. `entrusted party` + 한국어 병기로 문장에서 갈라 준다 → §3 |
| **"해제"** | 계약 해제가 아니라 "이용 제한을 해제한다"였다(약관 제20조). `rescission` 문제는 없다 → §4 |
| **회사 정보 로마자 표기** | 2026-09-11 사용자 확인 → §6 |
| **날짜 형식** | 2026-09-11 **미국식 확정** → §1 아래 「날짜」 |

---

## 9. 번역하지 않는 것

| 대상 | 이유 |
|---|---|
| `cookie_consent` · `lang` · `_ga` · `_ga_*` · `mp_*_mixpanel` · `__mp*` | 실제 쿠키 이름 |
| `localStorage` | 웹 표준 API 이름 |
| `Google Analytics` · `Mixpanel` · `Vercel` · `Web3Forms` | 제품명 |
| `Google LLC` · `Mixpanel, Inc.` · `Vercel Inc.` | 법인명 |
| `refinery.kr` · `info@vetec.co.kr` | 도메인 · 이메일 |
| 사업자등록번호 `130-81-49638` | 숫자 |
| 외부 정책 URL | 원문 링크 그대로 |

---

## 반영해야 할 파일

| 대상 | 파일 |
|---|---|
| 영어 법적 고지 본문 | `src/pages/en/{privacy,terms,eula,cookie-policy}.astro` |
| 공유 데이터 | `src/data/legal.ts` (`{ ko, en }` 구조) |
| 푸터 · 메가메뉴 약관 링크 | `src/i18n/nav.ts` |
| 쿠키 배너 정책 링크 | `src/components/CookieConsent.astro` |
| hreflang | 각 한국어 페이지 + 영어 페이지의 `alternates` |
