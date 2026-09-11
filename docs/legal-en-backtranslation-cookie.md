# 쿠키 정책 영어판 — 역번역 검사

대상: `/cookie-policy` ↔ `/en/cookie-policy` · 2026-09-11

영어판을 한국어로 **직역해 되돌린 뒤**(역번역) 원문과 뜻을 단위별로 대조했다. 뜻이 넓어지거나 좁아지거나,
원문에 없는 말이 생기거나 빠진 곳을 찾는 방법이다. 제목 · 문단 · 목록 · 표 칸을 문서 순서대로 1:1로 짝지었다(102 단위, 어긋남 0).

> ⚠️ **한계** — 역번역은 번역한 사람(Claude)이 직접 했다. 원문을 알고 있어 뜻을 좋게 읽어 줄 치우침이 남는다.
> 원문을 모르는 사람이 역번역하면 더 엄격하다. 이 기록은 참고용 점검이며 변호사 검토를 대신하지 않는다.

## 결과

| 판정 | 수 | 뜻 |
|---|---|---|
| 일치 | 97 | 역번역이 원문과 같은 뜻 |
| **고침** | 3 | 역번역에서 뜻 차이가 드러나 영어판을 고쳤다 |
| 의도한 차이 | 1 | 원문과 다르게 옮겼고 이유가 있다 |
| 확인 필요 | 1 | 번역이 아니라 사실 확인이 남았다 |

영어판에만 있는 것: 시행일 아래 한국어판 우선 고지(용어집 §0-1). 원문에 대응하는 문장이 없는 것이 정상이다.

## 판정이 "일치"가 아닌 곳

### [10] 고침

- 원문: 다만 회사는 이용자의 선택권을 넓히기 위하여, 사이트 동작에 반드시 필요한 쿠키를 제외한 모든 분석 쿠키를 이용자가 동의한 경우에만 설치합니다. 동의하지 않아도 웹사이트의 모든 기능을 제한 없이 이용할 수 있습니다.
- 영어: However, to give users more choice, the Company installs all analytics cookies, excluding cookies strictly necessary for the site to function, only when users consent. Users can access all features of the website without restriction even if they do not consent.
- 역번역: 다만 이용자에게 더 많은 선택권을 주기 위하여, 회사는 사이트 작동에 반드시 필요한 쿠키를 제외한 모든 분석 쿠키를 이용자가 동의한 경우에만 설치합니다. 이용자는 동의하지 않아도 웹사이트의 모든 기능을 제한 없이 이용할 수 있습니다.
- 처음 번역은 "all analytics cookies — that is, all cookies other than strictly necessary"로, 역번역하면 "필수 쿠키를 제외한 **모든 쿠키**"를 동의 시에만 설치한다는 약속이 됐다. 원문은 **분석 쿠키**만 말한다. 나중에 분석이 아닌 쿠키가 추가되면 영어판이 원문보다 더 넓은 의무를 지게 된다 → 원문 구조대로 되돌림

### [14] 고침

- 원문: 가. 필수 항목 (동의 없이 사용)
- 영어: A. Essential (used without consent)
- 역번역: 가. 필수 (동의 없이 사용)
- 처음 번역 "Strictly necessary"는 "엄격히 필요한"으로 돌아와 원문 "필수"보다 셌고, EU ePrivacy 지침 제5조 제3항의 용어이기도 하다 → "Essential"

### [30] 고침

- 원문: 필수 항목을 차단하면 언어 선택과 쿠키 동의 여부가 저장되지 않아, 방문할 때마다 동의 배너가 다시 표시됩니다.
- 영어: If essential items are blocked, the language selection and cookie consent status are not saved, and the consent banner is shown again on every visit.
- 역번역: 필수 항목을 차단하면 언어 선택과 쿠키 동의 상태가 저장되지 않아, 방문할 때마다 동의 배너가 다시 표시됩니다.
- 14와 같은 이유로 "strictly necessary items" → "essential items"

### [68] 의도한 차이

- 원문: 선택은 cookie_consent 쿠키에 저장되며, 언제든지 화면 하단 푸터의 '쿠키 설정'을 눌러 배너를 다시 열고 선택을 변경할 수 있습니다.
- 영어: The choice is stored in the cookie_consent cookie, and users can change it at any time by clicking “Cookie Settings” in the footer at the bottom of the page to reopen the banner.
- 역번역: 선택은 cookie_consent 쿠키에 저장되며, 이용자는 언제든지 페이지 하단 푸터의 “쿠키 설정”을 눌러 배너를 다시 열어 선택을 변경할 수 있습니다.
- 원문 "화면 하단 푸터"를 "footer at the bottom of the page"로 옮겼다. 푸터는 화면이 아니라 페이지 맨 아래에 있어서다. 한국어판도 "페이지 하단"으로 고치면 두 판이 같아진다(사용자 결정 대기)

### [85] 확인 필요

- 원문: 설정 › 개인정보 보호 › 인터넷 사용 기록 삭제 / 쿠키 및 기타 사이트 데이터
- 영어: Settings › Privacy › Clear browsing data / Cookies and other site data
- 역번역: 설정 › 개인정보 보호 › 인터넷 사용 기록 삭제 / 쿠키 및 기타 사이트 데이터
- Whale 영어 화면을 확인하지 못해 Chromium 메뉴 이름을 따랐다

## 참고 메모가 붙은 "일치"

- **[2]** 날짜 형식만 다름 — 용어집 §1
- **[9]** 제30조 제1항 제7호를 KLRI 영문본 표현(automatic collection tool … the denial thereof)으로 옮겼다. 원문 "고지"를 "disclosed"로 — 법 제30조 제2항의 "공개"와 같은 낱말
- **[63]** "연락처"를 "phone number"로 옮겼다 — 문의 폼의 해당 칸이 `type="tel"`이고 영어 폼 라벨도 "Phone"이라 좁아진 게 아니다
- **[81]** iOS 18부터는 `Settings › Apps › Safari`로 한 단계 내려갔다 — 한국어판도 같은 옛 경로라 두 판을 함께 고칠 일
- **[99]** 날짜 형식만 다름
- **[102]** "라벨 : 값"을 문장으로 풀었다 — 앞에 붙는 "Note:" 뒤에 콜론이 또 오지 않게(용어집 §10)

## 전체 대조표

| # | 원문 | 영어 | 역번역 | 판정 |
|---|---|---|---|---|
| 1 | 쿠키 정책 | Cookie Policy | 쿠키 정책 | 일치 |
| 2 | 시행일 : 2026-09-01 | Effective date: September 1, 2026 | 시행일: 2026년 9월 1일 | 일치 |
| 3 | 주식회사 베텍(이하 "회사")는 Refinery 웹사이트(https://refinery.kr)에서 쿠키와 이에 준하는 기술을 사용합니다. 본 정책은 그 종류와 목적, 보관 기간, 동의와 거부 방법을 안내합니다. 개인정보의 처리 전반에 관하여는 개인정보처리방침을 참고하세요. | VETEC Co., Ltd. (the “Company”) uses cookies and similar technologies on the Refinery website (https://refinery.kr). This policy describes their types, purposes, and retention periods, as well as how to give or refuse consent. For matters concerning the processing of personal information in general, please refer to the Privacy Policy. | 주식회사 베텍(“회사”)은 Refinery 웹사이트(https://refinery.kr)에서 쿠키와 유사 기술을 사용합니다. 본 정책은 그 종류, 목적, 보관 기간과 함께 동의하거나 거부하는 방법을 설명합니다. 개인정보 처리 전반에 관한 사항은 개인정보처리방침을 참고하십시오. | 일치 |
| 4 | 1. 쿠키와 유사 기술이란 | 1. What cookies and similar technologies are | 1. 쿠키와 유사 기술이란 무엇인가 | 일치 |
| 5 | 쿠키(cookie)는 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일로, 방문 기록이나 설정을 기억하는 데 사용됩니다. 회사는 쿠키 외에도 아래와 같은 유사 기술을 사용합니다. | A cookie is a small text file that a website stores in a user’s browser to remember visit history or settings. In addition to cookies, the Company uses the following similar technologies. | 쿠키는 웹사이트가 방문 기록이나 설정을 기억하기 위해 이용자의 브라우저에 저장하는 작은 텍스트 파일입니다. 회사는 쿠키 외에 다음과 같은 유사 기술을 사용합니다. | 일치 |
| 6 | 로컬 스토리지(localStorage) : 브라우저에 데이터를 저장하는 기술로, 쿠키와 달리 서버로 자동 전송되지 않습니다. | Local storage (localStorage): A technology that stores data in the browser. Unlike cookies, it is not automatically sent to the server. | 로컬 스토리지(localStorage): 브라우저에 데이터를 저장하는 기술. 쿠키와 달리 서버로 자동 전송되지 않습니다. | 일치 |
| 7 | 자바스크립트 SDK : 분석 도구가 페이지 이용 정보를 수집하기 위해 실행하는 스크립트입니다. | JavaScript SDK: A script run by an analytics tool to collect information on page usage. | 자바스크립트 SDK: 분석 도구가 페이지 이용 정보를 수집하기 위해 실행하는 스크립트. | 일치 |
| 8 | 2. 회사의 쿠키 사용 원칙 | 2. The Company’s principles for using cookies | 2. 회사의 쿠키 사용 원칙 | 일치 |
| 9 | 「개인정보 보호법」 제30조 제1항 제7호는 자동 수집 장치의 설치 · 운영 및 그 거부에 관한 사항을 개인정보 처리방침에 고지하도록 정하고 있으며, 국내법상 모든 쿠키에 사전 동의가 요구되는 것은 아닙니다. | Article 30 (1) 7 of the Personal Information Protection Act (“PIPA”) requires matters concerning the installation and operation of automatic collection tools for personal information, and the denial thereof, to be disclosed in the Privacy Policy. Under Korean law, not all cookies require prior consent. | 「개인정보 보호법」 제30조 제1항 제7호는 개인정보 자동 수집 도구의 설치·운영 및 그 거부에 관한 사항을 개인정보 처리방침에 공개하도록 요구합니다. 한국법상 모든 쿠키가 사전 동의를 필요로 하는 것은 아닙니다. | 일치 |
| 10 | 다만 회사는 이용자의 선택권을 넓히기 위하여, 사이트 동작에 반드시 필요한 쿠키를 제외한 모든 분석 쿠키를 이용자가 동의한 경우에만 설치합니다. 동의하지 않아도 웹사이트의 모든 기능을 제한 없이 이용할 수 있습니다. | However, to give users more choice, the Company installs all analytics cookies, excluding cookies strictly necessary for the site to function, only when users consent. Users can access all features of the website without restriction even if they do not consent. | 다만 이용자에게 더 많은 선택권을 주기 위하여, 회사는 사이트 작동에 반드시 필요한 쿠키를 제외한 모든 분석 쿠키를 이용자가 동의한 경우에만 설치합니다. 이용자는 동의하지 않아도 웹사이트의 모든 기능을 제한 없이 이용할 수 있습니다. | 고침 |
| 11 | 회사는 맞춤형 광고를 제공하지 않으며, 제3자 광고사업자가 본 웹사이트에서 행태정보를 수집하도록 허용하지 않습니다. | The Company does not provide personalized advertising and does not allow third-party advertising businesses to collect behavioral information on this website. | 회사는 맞춤형 광고를 제공하지 않으며, 제3자 광고 사업자가 본 웹사이트에서 행태정보를 수집하는 것을 허용하지 않습니다. | 일치 |
| 12 | 다만 회사가 분석 도구(Mixpanel)로 수집하는 행태정보(클릭 · 스크롤 등 화면 조작 기록)는 오직 서비스 사용성 분석 목적으로만 이용하며, 광고 목적으로 이용하거나 제3자에게 제공하지 않습니다. | However, the behavioral information (records of on-screen interactions such as clicks and scrolls) that the Company collects through its analytics tool, Mixpanel, is used solely to analyze the usability of the service, and is neither used for advertising purposes nor provided to third parties. | 다만 회사가 분석 도구인 Mixpanel을 통해 수집하는 행태정보(클릭·스크롤 등 화면 조작 기록)는 오직 서비스의 사용성 분석에만 이용되며, 광고 목적으로 이용되거나 제3자에게 제공되지 않습니다. | 일치 |
| 13 | 3. 사용하는 쿠키 및 유사 기술 | 3. Cookies and similar technologies in use | 3. 사용 중인 쿠키 및 유사 기술 | 일치 |
| 14 | 가. 필수 항목 (동의 없이 사용) | A. Essential (used without consent) | 가. 필수 (동의 없이 사용) | 고침 |
| 15 | 이름 | Name | 이름 | 일치 |
| 16 | 제공자 | Provider | 제공자 | 일치 |
| 17 | 유형 | Type | 유형 | 일치 |
| 18 | 목적 | Purpose | 목적 | 일치 |
| 19 | 보관 기간 | Retention | 보관 기간 | 일치 |
| 20 | cookie_consent | cookie_consent | (동일) | 일치 |
| 21 | refinery.kr / (자사) | refinery.kr / (first party) | refinery.kr / (자사) | 일치 |
| 22 | 쿠키 | Cookie | 쿠키 | 일치 |
| 23 | 분석 쿠키에 대한 동의 · 거부 선택을 저장하여 배너가 반복 노출되지 않도록 함 | Stores the user’s choice to accept or reject analytics cookies so that the banner is not shown repeatedly | 배너가 반복 표시되지 않도록 분석 쿠키에 대한 수락 또는 거부 선택을 저장 | 일치 |
| 24 | 1년 | 1 year | 1년 | 일치 |
| 25 | lang | lang | (동일) | 일치 |
| 26 | refinery.kr / (자사) | refinery.kr / (first party) | refinery.kr / (자사) | 일치 |
| 27 | 쿠키 | Cookie | 쿠키 | 일치 |
| 28 | 이용자가 선택한 표시 언어(한국어/영어)를 기억 | Remembers the display language selected by the user (Korean or English) | 이용자가 선택한 표시 언어(한국어 또는 영어)를 기억 | 일치 |
| 29 | 1년 | 1 year | 1년 | 일치 |
| 30 | 필수 항목을 차단하면 언어 선택과 쿠키 동의 여부가 저장되지 않아, 방문할 때마다 동의 배너가 다시 표시됩니다. | If essential items are blocked, the language selection and cookie consent status are not saved, and the consent banner is shown again on every visit. | 필수 항목을 차단하면 언어 선택과 쿠키 동의 상태가 저장되지 않아, 방문할 때마다 동의 배너가 다시 표시됩니다. | 고침 |
| 31 | 나. 분석 항목 (동의한 경우에만 사용) | B. Analytics (used only with consent) | 나. 분석 (동의한 경우에만 사용) | 일치 |
| 32 | 이름 | Name | 이름 | 일치 |
| 33 | 제공자 | Provider | 제공자 | 일치 |
| 34 | 유형 | Type | 유형 | 일치 |
| 35 | 목적 | Purpose | 목적 | 일치 |
| 36 | 보관 기간 | Retention | 보관 기간 | 일치 |
| 37 | _ga / _ga_* | _ga / _ga_* | (동일) | 일치 |
| 38 | Google LLC (제3자) | Google LLC (third party) | Google LLC (제3자) | 일치 |
| 39 | 쿠키 | Cookie | 쿠키 | 일치 |
| 40 | Google Analytics가 방문자를 구분하고 세션을 유지하여 방문 수 · 유입 경로 · 페이지별 이용 현황을 집계 | Used by Google Analytics to distinguish visitors and maintain sessions in order to aggregate the number of visits, traffic sources, and usage by page | Google Analytics가 방문자를 구분하고 세션을 유지하여 방문 수, 유입 경로, 페이지별 이용 현황을 집계하는 데 사용 | 일치 |
| 41 | 최대 2년 / (수집된 데이터 보관 : 14개월) | Up to 2 years / (Collected data retention: 14 months) | 최대 2년 / (수집된 데이터 보관: 14개월) | 일치 |
| 42 | mp_*_mixpanel / __mp* | mp_*_mixpanel / __mp* | (동일) | 일치 |
| 43 | Mixpanel, Inc. (제3자) | Mixpanel, Inc. (third party) | Mixpanel, Inc. (제3자) | 일치 |
| 44 | 쿠키 · 로컬 스토리지 | Cookie, local storage | 쿠키, 로컬 스토리지 | 일치 |
| 45 | 이용 행태 분석, 세션 리플레이 및 히트맵 기록을 위한 임의 식별자와 이벤트 정보 저장 | Stores random identifiers and event information for usage behavior analysis, session replay, and heatmap recording | 이용 행태 분석, 세션 리플레이, 히트맵 기록을 위한 임의 식별자와 이벤트 정보를 저장 | 일치 |
| 46 | 브라우저 저장소 삭제 시까지 / (수집된 데이터 보관 : 12개월 · 세션 리플레이 30일) | Until browser storage is cleared / (Collected data retention: 12 months; session replay: 30 days) | 브라우저 저장소를 삭제할 때까지 / (수집된 데이터 보관: 12개월, 세션 리플레이: 30일) | 일치 |
| 47 | 다. 쿠키를 사용하지 않는 측정 도구 | C. Measurement tools that do not use cookies | 다. 쿠키를 사용하지 않는 측정 도구 | 일치 |
| 48 | 도구 | Tool | 도구 | 일치 |
| 49 | 제공자 | Provider | 제공자 | 일치 |
| 50 | 목적 | Purpose | 목적 | 일치 |
| 51 | 쿠키 사용 | Cookie use | 쿠키 사용 | 일치 |
| 52 | Vercel Web Analytics | Vercel Web Analytics | (동일) | 일치 |
| 53 | Vercel Inc. | Vercel Inc. | (동일) | 일치 |
| 54 | 페이지뷰 · 유입 경로 등 트래픽 집계 | Aggregates traffic data such as page views and traffic sources | 페이지뷰, 유입 경로 등 트래픽 데이터를 집계 | 일치 |
| 55 | 사용하지 않음 | Not used | 사용하지 않음 | 일치 |
| 56 | Vercel Speed Insights | Vercel Speed Insights | (동일) | 일치 |
| 57 | Vercel Inc. | Vercel Inc. | (동일) | 일치 |
| 58 | 페이지 로딩 성능(Core Web Vitals) 측정 | Measures page loading performance (Core Web Vitals) | 페이지 로딩 성능(Core Web Vitals)을 측정 | 일치 |
| 59 | 사용하지 않음 | Not used | 사용하지 않음 | 일치 |
| 60 | 위 두 도구는 개별 방문자를 식별하는 쿠키나 저장소를 사용하지 않고 집계값만 수집하므로 동의 대상에서 제외됩니다. 문의 폼 처리에 사용하는 Web3Forms는 폼을 제출하는 시점에만 호출되며 쿠키를 설정하지 않습니다. | The two tools above collect only aggregate values without using cookies or storage that identify individual visitors, and are therefore not subject to consent. Web3Forms, which is used to process the contact form, is called only when a form is submitted and does not set cookies. | 위 두 도구는 개별 방문자를 식별하는 쿠키나 저장소를 사용하지 않고 집계값만 수집하므로 동의 대상이 아닙니다. 문의 폼 처리에 사용하는 Web3Forms는 폼을 제출할 때에만 호출되며 쿠키를 설정하지 않습니다. | 일치 |
| 61 | 4. 세션 리플레이와 히트맵에 관한 안내 | 4. About session replay and heatmaps | 4. 세션 리플레이와 히트맵에 관하여 | 일치 |
| 62 | 이용자가 분석 쿠키에 동의한 경우, Mixpanel의 세션 리플레이 기능이 페이지 이동 · 클릭 · 스크롤 등 화면 조작 기록을 수집합니다. 이는 이용자가 어디에서 막히는지를 파악하여 사용성을 개선하기 위한 것입니다. | If a user consents to analytics cookies, Mixpanel’s session replay feature collects records of on-screen interactions such as page navigation, clicks, and scrolls. The purpose is to identify where users encounter difficulties and to improve usability. | 이용자가 분석 쿠키에 동의한 경우, Mixpanel의 세션 리플레이 기능이 페이지 이동, 클릭, 스크롤 등 화면 조작 기록을 수집합니다. 그 목적은 이용자가 어려움을 겪는 지점을 파악하고 사용성을 개선하는 것입니다. | 일치 |
| 63 | 회사는 모든 입력값이 마스킹되도록 설정하고 있어, 문의 폼에 입력한 성명 · 이메일 · 연락처 · 문의 내용은 기록되지 않습니다. | The Company has configured all input values to be masked, so the name, email address, phone number, and inquiry details entered in the contact form are not recorded. | 회사는 모든 입력값이 마스킹되도록 설정해 두었으므로, 문의 폼에 입력한 이름, 이메일 주소, 전화번호, 문의 내용은 기록되지 않습니다. | 일치 |
| 64 | 회사는 세션 리플레이 기록을 회원 식별자나 문의자 정보와 결합하지 않으며, 브라우저에 저장된 임의 식별자 단위로만 처리합니다. | The Company does not combine session replay records with account identifiers or information about inquirers, and processes them only on the basis of the random identifier stored in the browser. | 회사는 세션 리플레이 기록을 계정 식별자나 문의자에 관한 정보와 결합하지 않으며, 브라우저에 저장된 임의 식별자를 기준으로만 처리합니다. | 일치 |
| 65 | 세션 리플레이 기록을 원하지 않으시는 경우 아래 제5항의 방법으로 분석 쿠키를 거부하시면 기록되지 않습니다. | Users who do not wish to have session replays recorded can refuse analytics cookies using the methods in Section 5 below, in which case no recording takes place. | 세션 리플레이 기록을 원하지 않는 이용자는 아래 제5항의 방법으로 분석 쿠키를 거부할 수 있으며, 그 경우 기록은 이루어지지 않습니다. | 일치 |
| 66 | 5. 동의 및 철회 방법 | 5. How to give and withdraw consent | 5. 동의하고 철회하는 방법 | 일치 |
| 67 | 최초 방문 시 화면 하단 배너에서 '모두 허용' 또는 '모두 거부'를 선택할 수 있습니다. | On their first visit, users can select “Accept all” or “Reject all” in the banner at the bottom of the screen. | 이용자는 첫 방문 시 화면 하단 배너에서 “모두 허용” 또는 “모두 거부”를 선택할 수 있습니다. | 일치 |
| 68 | 선택은 cookie_consent 쿠키에 저장되며, 언제든지 화면 하단 푸터의 '쿠키 설정'을 눌러 배너를 다시 열고 선택을 변경할 수 있습니다. | The choice is stored in the cookie_consent cookie, and users can change it at any time by clicking “Cookie Settings” in the footer at the bottom of the page to reopen the banner. | 선택은 cookie_consent 쿠키에 저장되며, 이용자는 언제든지 페이지 하단 푸터의 “쿠키 설정”을 눌러 배너를 다시 열어 선택을 변경할 수 있습니다. | 의도한 차이 |
| 69 | 브라우저에서 쿠키와 사이트 데이터를 삭제하면 선택이 초기화되어 배너가 다시 표시됩니다. | Deleting cookies and site data in the browser resets the choice, and the banner is shown again. | 브라우저에서 쿠키와 사이트 데이터를 삭제하면 선택이 초기화되고 배너가 다시 표시됩니다. | 일치 |
| 70 | 거부를 선택하면 Google Analytics와 Mixpanel 스크립트가 로드되지 않으므로, 해당 도구는 어떠한 정보도 수집하지 않습니다. | If users choose to reject analytics cookies, the Google Analytics and Mixpanel scripts are not loaded, so those tools do not collect any information. | 이용자가 분석 쿠키 거부를 선택하면 Google Analytics와 Mixpanel 스크립트가 로드되지 않으므로, 해당 도구는 어떠한 정보도 수집하지 않습니다. | 일치 |
| 71 | 6. 브라우저에서 쿠키를 차단 · 삭제하는 방법 | 6. How to block or delete cookies in the browser | 6. 브라우저에서 쿠키를 차단하거나 삭제하는 방법 | 일치 |
| 72 | 브라우저 | Browser | 브라우저 | 일치 |
| 73 | 설정 경로 | Settings path | 설정 경로 | 일치 |
| 74 | Chrome | Chrome | (동일) | 일치 |
| 75 | 설정 › 개인 정보 보호 및 보안 › 서드 파티 쿠키 (또는 '인터넷 사용 기록 삭제') | Settings › Privacy and security › Third-party cookies (or “Delete browsing data”) | 설정 › 개인정보 및 보안 › 서드 파티 쿠키 (또는 “인터넷 사용 기록 삭제”) | 일치 |
| 76 | Edge | Edge | (동일) | 일치 |
| 77 | 설정 › 쿠키 및 사이트 권한 › 쿠키 및 사이트 데이터 관리 및 삭제 | Settings › Cookies and site permissions › Manage and delete cookies and site data | 설정 › 쿠키 및 사이트 권한 › 쿠키 및 사이트 데이터 관리 및 삭제 | 일치 |
| 78 | Safari (macOS) | Safari (macOS) | (동일) | 일치 |
| 79 | 설정 › 개인 정보 보호 › 웹사이트 추적 방지 / '웹사이트 데이터 관리'에서 삭제 | Settings › Privacy › Prevent cross-site tracking / delete under “Manage Website Data” | 설정 › 개인정보 보호 › 크로스 사이트 추적 방지 / “웹사이트 데이터 관리”에서 삭제 | 일치 |
| 80 | Safari (iOS) | Safari (iOS) | (동일) | 일치 |
| 81 | 설정 앱 › Safari › 고급 › 웹사이트 데이터 | Settings app › Safari › Advanced › Website Data | 설정 앱 › Safari › 고급 › 웹사이트 데이터 | 일치 |
| 82 | Firefox | Firefox | (동일) | 일치 |
| 83 | 설정 › 개인 정보 및 보안 › 쿠키 및 사이트 데이터 | Settings › Privacy & Security › Cookies and Site Data | 설정 › 개인정보 및 보안 › 쿠키 및 사이트 데이터 | 일치 |
| 84 | Whale | Whale | (동일) | 일치 |
| 85 | 설정 › 개인정보 보호 › 인터넷 사용 기록 삭제 / 쿠키 및 기타 사이트 데이터 | Settings › Privacy › Clear browsing data / Cookies and other site data | 설정 › 개인정보 보호 › 인터넷 사용 기록 삭제 / 쿠키 및 기타 사이트 데이터 | 확인 필요 |
| 86 | Google Analytics의 수집만 별도로 차단하려면 Google Analytics 차단 브라우저 부가기능을 설치하실 수 있습니다. | To block only data collection by Google Analytics, users can install the Google Analytics Opt-out Browser Add-on. | Google Analytics에 의한 데이터 수집만 차단하려면, 이용자는 Google Analytics 차단 브라우저 부가기능을 설치할 수 있습니다. | 일치 |
| 87 | 브라우저 설정에서 모든 쿠키를 차단하면 본 웹사이트를 포함한 여러 웹사이트에서 로그인 유지, 언어 설정 등 일부 기능이 정상 동작하지 않을 수 있습니다. | Blocking all cookies in the browser settings may prevent some features, such as staying signed in and language settings, from working properly on many websites, including this one. | 브라우저 설정에서 모든 쿠키를 차단하면 이 웹사이트를 포함한 많은 웹사이트에서 로그인 유지, 언어 설정 등 일부 기능이 제대로 작동하지 않을 수 있습니다. | 일치 |
| 88 | 7. 제3자 쿠키 및 각 사의 정책 | 7. Third-party cookies and providers’ policies | 7. 제3자 쿠키 및 제공자의 정책 | 일치 |
| 89 | 분석 도구는 각 제공자의 정책에 따라 쿠키 · 저장소를 설정하고 정보를 처리합니다. 자세한 내용은 아래를 참고하세요. | Analytics tools set cookies, use browser storage, and process information in accordance with their providers’ policies. For details, please refer to the links below. | 분석 도구는 그 제공자의 정책에 따라 쿠키를 설정하고, 브라우저 저장소를 사용하며, 정보를 처리합니다. 자세한 내용은 아래 링크를 참고하십시오. | 일치 |
| 90 | Google LLC : 개인정보처리방침 · 쿠키 사용 방식 | Google LLC: Privacy Policy, How Google uses cookies | Google LLC: 개인정보처리방침, Google의 쿠키 사용 방식 | 일치 |
| 91 | Mixpanel, Inc. : Privacy Policy | Mixpanel, Inc.: Privacy Policy | Mixpanel, Inc.: Privacy Policy | 일치 |
| 92 | Vercel Inc. : Privacy Policy | Vercel Inc.: Privacy Policy | Vercel Inc.: Privacy Policy | 일치 |
| 93 | 이들 도구를 통한 개인정보의 국외 이전 내역(이전받는 자, 이전 국가, 이전 항목, 이용 목적, 보유 기간, 거부 방법)은 개인정보처리방침 제9항에 공개되어 있습니다. | Details of the cross-border transfer of personal information through these tools (recipient, destination country, items transferred, purpose of use, retention period, and how to refuse) are disclosed in Section 9 of the Privacy Policy. | 이들 도구를 통한 개인정보의 국외 이전 내역(이전받는 자, 이전 국가, 이전 항목, 이용 목적, 보유 기간, 거부 방법)은 개인정보처리방침 제9항에 공개되어 있습니다. | 일치 |
| 94 | 8. 정책의 변경 | 8. Changes to this policy | 8. 본 정책의 변경 | 일치 |
| 95 | 본 쿠키 정책은 2026-09-01부터 적용됩니다. 사용하는 도구나 쿠키 내역이 변경되는 경우 본 정책을 개정하고 웹사이트를 통하여 고지합니다. 개정 이력은 아래와 같습니다. | This Cookie Policy takes effect on September 1, 2026. If the tools or cookies in use change, the Company will revise this policy and provide notice on the website. The revision history is as follows. | 본 쿠키 정책은 2026년 9월 1일부터 시행됩니다. 사용 중인 도구나 쿠키가 바뀌면 회사는 본 정책을 개정하고 웹사이트에 고지합니다. 개정 이력은 다음과 같습니다. | 일치 |
| 96 | 시행일 | Effective date | 시행일 | 일치 |
| 97 | 주요 변경 | Summary of changes | 주요 변경 | 일치 |
| 98 | 전문 | Full text | 전문 | 일치 |
| 99 | 2026-09-01 | September 1, 2026 | 2026년 9월 1일 | 일치 |
| 100 | 최초 제정 | Initial version | 최초 버전 | 일치 |
| 101 | 현행 | Current | 현행 | 일치 |
| 102 | 쿠키 관련 문의 : info@vetec.co.kr | For inquiries about cookies, please contact info@vetec.co.kr. | 쿠키 관련 문의는 info@vetec.co.kr로 연락하십시오. | 일치 |
