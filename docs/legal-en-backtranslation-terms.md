# 이용약관 영어판 — 역번역 검사

대상: `/terms` ↔ `/en/terms` · 2026-09-11 (영어 문법 검토 27단위 반영 뒤 바뀐 단위를 다시 역번역 — 뜻이 바뀐 곳 0)

영어판을 한국어로 **직역해 되돌린 뒤**(역번역) 원문과 뜻을 단위별로 대조했다. 제목 · 문단 · 목록 · 표 칸을 문서 순서대로 1:1로 짝지었다(155 단위, 어긋남 0).
하위 호를 품은 항 4곳(제10조 제2항 · 제18조 제2항 · 제22조 제4항 · 제23조 제2항)과 그 첫 호는 추출기가 한 덩어리로 건너뛰어 아래 「표에 없는 8단위」에 따로 적었다.
판정 순서는 용어집 §11 — 넓어진 곳 > 좁아진 곳 > 세기가 달라진 곳 > 어투 > 원어민 자연스러움(다듬은 문장은 역번역을 다시 했다).

> **호칭** — 계약서라 정의어를 쓴다(용어집 §10). the “Company” → 회사, Customer → 고객, User → 이용자, End User → 최종이용자.
> `we` · `you`는 쓰지 않았다.

> **조동사** — 의무는 `must`, 회사의 약속은 `will`, 권한은 `may`로 통일했다. `shall`은 한국어판 우선 고지 문구(용어집 §0-1 고정 문구)에만 있다.

> ⚠️ **한계** — 역번역은 번역한 사람(Claude)이 직접 했다. 원문을 알고 있어 뜻을 좋게 읽어 줄 치우침이 남는다.
> 이 기록은 참고용 점검이며 변호사 검토를 대신하지 않는다.

## 공식 영문본 대조

| 대상 | 영문본 | 확인한 곳 |
|---|---|---|
| 「약관의 규제에 관한 법률」 | Act on the Regulation of Terms and Conditions | KLRI hseq=64981 (Act No. 20240, 2024. 2. 6.) — 제3조 제1항 “explicitly indicate important details thereof with signs, color, bold and large letters”를 초안 안내의 “indication of important details”에 옮겼다 |
| 상법 제54조 | Statutory Interest Rate in Commercial Activities — six percent per annum | KLRI hseq=54525 — 제13조 제4항 |
| 정보통신망법 제50조의2 | **“Article 50-2 Deleted. &lt;May 28, 2014&gt;”** | KLRI hseq=55570 · 64717(2024. 1. 23. 개정 반영) — 아래 [43]. 인용을 지웠다 |
| 개인정보처리자 · 수탁자 · 익명처리 | personal information controller · person entrusted (수탁자) · anonymization | 용어집 §3 (PIPA Act No. 19234) |

## 결과

| 판정 | 수 | 뜻 |
|---|---|---|
| 일치 | 143 | 역번역이 원문과 같은 뜻 |
| **고침** | 11 | 역번역에서 뜻 · 표기 차이가 드러나 영어판을 고쳤다 |
| 의도한 차이 | 0 | |
| 원문 수정 | 1 | 원문의 사실 오류(삭제된 조문 인용)를 한국어판과 함께 고쳤다 |

영어판에만 있는 것: 시행일 아래 한국어판 우선 고지(용어집 §0-1).

## 판정이 "일치"가 아닌 곳

### [23] 고침 — 세기가 달라진 곳

- 원문: 본 약관과 개별계약의 내용이 서로 다른 경우에는 개별계약이 우선합니다.
- 처음: If these Terms and the Individual Agreement conflict, …
- 고친 뒤: If the contents of these Terms and the Individual Agreement differ, the Individual Agreement prevails.
- `conflict`(충돌)는 "서로 다름"보다 좁다. 개별계약이 약관과 다르게 정했지만 정면으로 부딪치지는 않는 경우 영어판에서는 개별계약이 우선하지 않는 것으로 읽힐 수 있었다 → 원문 그대로 `differ`

### [69] 고침 — 뜻이 흐려진 곳

- 원문: 회사는 14일 이상의 기간을 정하여 이행을 최고한 후 서비스의 제공을 중지하거나 …
- 처음: after demanding performance **within** a period of at least 14 days
- 고친 뒤: after demanding performance and setting a period of at least 14 days to do so
- 처음 문장은 "14일 안에 최고한 뒤"로도 읽혀, 고객에게 주는 **14일 이상의 이행 기간**이 사라질 수 있었다(좁아진 곳)

### [121] 고침 — 좁아진 곳

- 원문: 무상으로 제공되는 시험판 · 베타 기능 · 평가판에 대하여 회사는 고의 또는 중대한 과실이 있는 경우에 한하여 책임을 집니다.
- 처음: For free trial versions, beta features, and evaluation versions, …
- 고친 뒤: For trial versions, beta features, and evaluation versions provided free of charge, …
- `free`가 앞의 trial에만 붙어, **유상 베타 · 평가판**까지 회사 책임이 고의 · 중과실로 줄어드는 것처럼 읽혔다. 원문의 "무상으로 제공되는"은 셋 모두를 꾸민다

### [87] 고침 — 어순

- 처음: … Customer Data in a form that can identify a customer or an individual to train the Company’s artificial intelligence models.
- 고친 뒤: … Customer Data for training the Company’s artificial intelligence models in any form that can identify a customer or an individual.
- 처음 어순은 "모델을 학습시킬 고객이나 개인"처럼 `to train`이 앞 낱말에 붙어 읽혔다. 약속의 범위(식별 가능한 형태 전부)는 원문과 같다

### [13] [42] [45] [57] [105] 고침 — 원어민 자연스러움

- [13] "connected to or collected by the Service" → "brought into the Service … through integration or collection" (연동 · 수집되는 데이터)
- [42] [45] 목록 안의 "; however, … is excepted" → ", except for …" — 단서의 범위는 같다
- [57] "number of connected equipment" → "connected equipment items" (`equipment`는 셀 수 없는 명사)
- [105] "notify the reason" → "give notice of the reason"
- 다듬은 뒤 역번역을 다시 해 넓어짐 · 좁아짐이 없음을 확인했다

### [89] [87] 고침 — 용어 통일

- 개인정보 처리위탁 계약: 처음 `entrustment agreement` → 처리방침 영어판 10항과 같은 `personal information entrustment contract`. 약관에서 `Agreement`는 정의어(Individual Agreement)라 섞이지 않게 했다

### [154] 고침 — 호칭

- "or our Contact page" → "or the Contact page". 계약서에는 `we` · `our`를 쓰지 않는다(용어집 §10)

### [43] 원문 수정 — 삭제된 조문 인용을 지웠다

- 처음 원문: 웹사이트에 게시된 이메일 주소를 … 수집 · 판매 · 유통하는 행위(정보통신망법 제50조의2)
- KLRI 영문본에 **“Article 50-2 Deleted. &lt;May 28, 2014&gt;”**, 국가법령정보센터 현행 국문도 "제50조의2 삭제 &lt;2014. 5. 28.&gt;"(사용자 확인).
  삭제 전 조문(2012년판 Act No. 11322)은 ① 홈페이지 운영자 동의 없는 이메일 주소 자동 수집 금지 ② 그렇게 모은 주소의 판매 · 유통 금지
  ③ 알면서 정보 전송에 이용 금지 — 약관 문장은 ①②를 합친 것이었다
- 이 행위를 통째로 막는 현행 조문이 없다. 정보통신망법 제50조 제5항 제2 · 3호는 광고 전송자에게만, 개인정보 보호법 제59조 제1호는 개인정보일 때만 적용된다
- **2026-09-11 사용자 결정: 괄호 인용만 지운다.** 한국어판 · 영어판을 함께 고쳤다. 금지 내용은 그대로이고, 법 위반 일반은 같은 조 제7호가 덮는다

## 조 제목 — 용어집 §4를 원문 쪽으로 고쳤다

| 조 | 원문 | 용어집(처음) | 영어판 |
|---|---|---|---|
| 제21조 | 보증 및 보증의 부인 | Disclaimer of warranties | **Warranties and Disclaimer of Warranties** — 제1항은 회사가 지는 보증이다. 처음 표제는 이것을 빠뜨려 좁아진다 |
| 제23조 | 제3자 청구에 대한 방어 | Indemnification | **Defense Against Third-Party Claims** — 제3자 지식재산권 청구로 한정된 조를 일반 손해 보전 약속처럼 넓힌다. `indemnify`는 제3항 한 곳에만 쓴다 |

용어집 §4 표도 같이 고쳤다.

## 표에 없는 8단위 — 하위 호를 품은 항

| 원문 | 영어 | 역번역 | 판정 |
|---|---|---|---|
| 회사는 다음 각 호에 해당하는 경우 이용 신청을 승낙하지 않거나 사후에 계약을 해지할 수 있습니다. | The Company may decline an application, or subsequently terminate the agreement, in any of the following cases: | 회사는 다음 각 경우에 신청을 거절하거나 사후에 계약을 해지할 수 있습니다. | 일치 |
| 신청 내용에 허위 사실이 있는 경우 | Where the application contains false information | 신청에 허위 정보가 있는 경우 | 일치 |
| 다만 다음 각 호의 정보는 비밀정보에서 제외합니다. | However, the following information is excluded from confidential information: | 다만 다음 정보는 비밀정보에서 제외됩니다. | 일치 |
| 공지의 사실인 정보 | Information that is publicly known | 공개적으로 알려진 정보 | 일치 |
| 회사는 다음 각 호의 사유로 인한 손해에 대하여 책임을 지지 않습니다. 다만 회사의 고의 또는 과실이 있는 경우에는 그러하지 않습니다. | The Company is not liable for damages arising from any of the following causes. However, this does not apply where the Company has acted with willful misconduct or negligence. | 회사는 다음 사유로 인한 손해에 책임을 지지 않습니다. 다만 회사에게 고의 또는 과실이 있는 경우에는 그러하지 않습니다. | 일치 — 원문이 "중대한"을 붙이지 않은 곳이라 `gross` 없이 옮겼다(제12조 제2항과 같음) |
| 천재지변, 전쟁, 폭동, 정부의 조치 등 불가항력 | Force majeure, such as natural disasters, war, riots, or government actions | 천재지변, 전쟁, 폭동, 정부 조치 등 불가항력 | 일치 |
| 제1항의 경우 회사는 자신의 선택에 따라 다음 각 호의 조치를 할 수 있습니다. | In the case of paragraph (1), the Company may, at its option, take any of the following measures: | 제1항의 경우 회사는 선택에 따라 다음 조치 중 하나를 할 수 있습니다. | 일치 |
| 계속 이용할 권리를 확보 | Securing the right to continue using the Service | 서비스를 계속 이용할 권리를 확보 | 일치 |

## 영어 문법 검토 — 27단위 (2026-09-11)

역번역을 마친 뒤 영어판 전체를 문법 · 원어민 자연스러움으로 다시 읽었다. 다듬은 문장은 모두 역번역을 다시 해
넓어짐 · 좁아짐 · 세기 변화가 없음을 확인했다(아래 전체 대조 표의 역번역 칸이 고친 뒤 기준이다).

| # | 무엇이 문제였나 | 처음 | 고친 뒤 |
|---|---|---|---|
| 2 | 과거분사 수식이 길어 무거움 | license to installable software separately provided by the Company | license for installable software that the Company provides separately |
| 12 | 단수 `the contract, order form, …`가 한 문서처럼 읽힘 · 정의어 `Terms`와 겹치는 소문자 `terms` | the contract, order form, quotation, purchase order, and any documents attached thereto … other terms of the Service | the contracts, order forms, quotations, and purchase orders, and any documents attached to them … other conditions of the Service |
| 16 | 웹 문맥에서 어색한 낱말 · `see`는 원문 '알 수 있도록'보다 가벼움 | front page … easily see their contents | home page … easily become aware of their contents |
| 19 | 분사구 `stating …`가 문장 가운데 끼어 흐름이 끊김 | stating the effective date and the reasons for the amendment | together with its effective date and the reasons for it |
| 20 | 정의어 앞 관사 통일 | If a Customer | If the Customer |
| 21 | 제4조 표제 — `Rules Not Covered`는 "약관이 다루지 않는 규칙"으로 읽힘 | Rules Not Covered by These Terms | Matters Not Covered by These Terms |
| 27 | 항목 안에 쉼표가 있는 병렬은 세미콜론으로 가른다 | …solutions, content such as …, and a service … | …solutions; content such as …; and a service … |
| 31 | 사이트 · 처리방침 영어판과 같은 이름으로 | inquiry form | contact form |
| 33 | `acceptance to provide`는 영어에 없는 결합 — 제10조의 '이용 신청 승낙'과 같은 말로 | acceptance to provide the Service | acceptance of an application for the Service |
| 43 | `using technical devices`가 앞의 Website에 붙어 읽힘 | Collecting, selling, or distributing email addresses posted on the Website using technical devices … | Using technical devices, such as automatic collection programs, to collect, sell, or distribute email addresses posted on the Website |
| 47 | 목록의 다른 호와 병렬(동명사)로 | Any act that violates relevant laws | Violating relevant laws |
| 49 | `its`가 이용자 · 고객을 가리킬 수 있음 | regarding its products or services | regarding the Company’s products or services |
| 53 | 명사 네 개를 겹친 번역투 | strategic item export or import restrictions | restrictions on the export or import of strategic items |
| 57 | 관사 | (number of connected …) | (the number of connected …) |
| 60 | 수량의 상한은 `up to` | within the number set out | up to the number set out |
| 61 | 낱말 선택 | authentication means · leakage | authentication methods · leak |
| 67 | 의무 표현 — `bears` 단독은 어색 | the Customer bears any taxes and public charges under relevant laws | the Customer is responsible for any taxes and public charges imposed under relevant laws |
| 69 | `to do so`가 무엇을 가리키는지 흐림 — 제14조 제4항과 같은 꼴로 | after demanding performance and setting a period of at least 14 days to do so | after sending a demand for performance that sets a period of at least 14 days |
| 72 | `at least 30 days before`가 바로 앞 `renew`에 붙어 "30일 전까지 갱신"으로 읽힘 | of its intention not to renew at least 30 days before … | at least 30 days before …, that it does not intend to renew · the upcoming automatic renewal and the post-renewal Fees |
| 78 | 전치사 | when necessary for operations, such as system inspection | when operationally necessary, such as for system inspection |
| 88 · 96 | `laws` 복수 단독은 어색 | under laws · pursuant to laws | by law · pursuant to law |
| 101 | `only`의 자리 — 권리를 한정한다 | only has the right | has only the right |
| 111 | `must not … nor`는 부정이 겹침 · `means of judgment`는 번역투 | nor as the sole means of judgment | or as the sole means of making decisions |
| 115 | 목록의 셋이 모두 `damages arising from`에 걸려 읽힘 | The Company is liable for damages arising from special circumstances …, lost profits, and indirect damages … only if … | With respect to damages arising from special circumstances …, lost profits, and indirect damages …, the Company is liable only if it knew or could have known … |
| 116 | 명사구가 무거움 · `injury to life`는 영어에서 쓰지 않는 결합 | a breach of matters warranted by the Company in writing · (injury to life or body) | a breach of any written warranty given by the Company · (death or bodily injury) |
| 131 | 문장 끝 `instead` · 수동태로 통지 주체가 사라짐 | may be given by posting on the Website instead … will be notified individually | may instead be given by posting on the Website … the Company will notify the Customer individually |

그 밖에 초안 안내(게시 전 보이는 노란 상자) "Sentences in bold are the …" → "Sentences in bold serve as the …".

> **[33] 메모** — 원문은 "서비스 제공의 승낙". 제10조 제2항이 같은 행위를 "이용 신청을 승낙"이라 부르므로
> 영어에서는 한 표현(acceptance of an application)으로 맞췄다. 회사 의무의 범위는 같다.

## 단위별 전체 대조

| # | 원문 | 영어 | 역번역 | 판정 |
|---|---|---|---|---|
| 0 | 이용약관 | Terms of Service | 이용약관 | 일치 |
| 1 | 시행일 : 2026-09-01 | Effective date: September 1, 2026 | 시행일: 2026년 9월 1일 | 일치 |
| 2 | 본 약관은 주식회사 베텍(이하 "회사")가 제공하는 Refinery 웹사이트 및 Refinery 서비스에 적용됩니다. 회사가 별도로 제공하는 설치형 소프트웨어의 사용권에 관하여는 소프트웨어 사용권 계약(EULA)이, 개인정보의 처리에 관하여는 개인정보처리방침이 각각 적용됩니다. | These Terms of Service (these “Terms”) apply to the Refinery website and the Refinery service provided by VETEC Co., Ltd. (the “Company”). The license for installable software that the Company provides separately is governed by the Software License Agreement (EULA), and the processing of personal information is governed by the Privacy Policy. | 본 이용약관(이하 "본 약관")은 주식회사 베텍(이하 "회사")이 제공하는 Refinery 웹사이트와 Refinery 서비스에 적용됩니다. 회사가 별도로 제공하는 설치형 소프트웨어의 사용권은 소프트웨어 사용권 계약(EULA)이, 개인정보의 처리는 개인정보처리방침이 규율합니다. | 일치 |
| 3 | 제1장 총칙 | Chapter 1. General Provisions | 제1장 총칙 | 일치 |
| 4 | 제1조 (목적) | Article 1 (Purpose) | 제1조 (목적) | 일치 |
| 5 | 본 약관은 회사가 운영하는 Refinery 웹사이트(https://refinery.kr) 및 회사가 제공하는 Refinery 서비스의 이용과 관련하여 회사와 이용자 간의 권리 · 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다. | The purpose of these Terms is to set forth the rights, obligations, and responsibilities of the Company and Users, and other necessary matters, in connection with the use of the Refinery website (https://refinery.kr) operated by the Company and the Refinery service provided by the Company. | 본 약관의 목적은 회사가 운영하는 Refinery 웹사이트(https://refinery.kr)와 회사가 제공하는 Refinery 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무, 책임 및 그 밖에 필요한 사항을 정하는 것입니다. | 일치 |
| 6 | 제2조 (용어의 정의) | Article 2 (Definitions) | 제2조 (정의) | 일치 |
| 7 | "웹사이트"란 회사가 https://refinery.kr 및 그 하위 도메인에서 운영하는 정보 제공 웹사이트를 말합니다. | “Website” means the information website operated by the Company at https://refinery.kr and its subdomains. | "웹사이트"란 회사가 https://refinery.kr 및 그 하위 도메인에서 운영하는 정보 웹사이트를 말합니다. | 일치 |
| 8 | "서비스"란 회사가 Refinery이라는 이름으로 제공하는 산업 데이터 수집 · 저장 · 분석 · 시각화 및 이에 부수하는 일체의 서비스를 말합니다. | “Service” means the industrial data collection, storage, analysis, and visualization services, and all services incidental thereto, provided by the Company under the name Refinery. | "서비스"란 회사가 Refinery라는 이름으로 제공하는 산업 데이터 수집·저장·분석·시각화 서비스와 이에 부수하는 모든 서비스를 말합니다. | 일치 |
| 9 | "이용자"란 웹사이트에 접속하여 정보를 열람하거나 문의를 제출하는 자를 말합니다. | “User” means a person who accesses the Website to view information or submit inquiries. | "이용자"란 웹사이트에 접속하여 정보를 열람하거나 문의를 제출하는 자를 말합니다. | 일치 |
| 10 | "고객"이란 회사와 개별계약을 체결하고 서비스를 이용하는 법인 또는 개인사업자를 말합니다. | “Customer” means a corporation or sole proprietor that has entered into an Individual Agreement with the Company and uses the Service. | "고객"이란 회사와 개별계약을 체결하고 서비스를 이용하는 법인 또는 개인사업자를 말합니다. | 일치 |
| 11 | "최종이용자"란 고객이 부여한 계정으로 서비스를 실제 사용하는 고객의 임직원 및 고객이 승인한 제3자를 말합니다. | “End User” means an officer or employee of the Customer, or a third party approved by the Customer, who actually uses the Service through an account granted by the Customer. | "최종이용자"란 고객이 부여한 계정을 통해 서비스를 실제로 이용하는 고객의 임원·직원 또는 고객이 승인한 제3자를 말합니다. | 일치 |
| 12 | "개별계약"이란 서비스의 범위 · 기간 · 요금 등을 정하기 위하여 회사와 고객이 체결하는 계약서, 주문서, 견적서, 발주서 및 이에 부속하는 문서를 말합니다. | “Individual Agreement” means the contracts, order forms, quotations, and purchase orders, and any documents attached to them, that the Company and the Customer enter into to determine the scope, term, fees, and other conditions of the Service. | "개별계약"이란 서비스의 범위, 기간, 요금 및 그 밖의 조건을 정하기 위해 회사와 고객이 체결하는 계약서, 주문서, 견적서, 발주서 및 이에 첨부된 문서를 말합니다. | 일치 |
| 13 | "고객 데이터"란 고객 또는 최종이용자가 서비스에 입력 · 업로드하거나 고객의 시스템 · 설비에서 서비스로 연동 · 수집되는 일체의 데이터를 말합니다. | “Customer Data” means all data that the Customer or End Users enter or upload into the Service, or that is brought into the Service from the Customer’s systems or equipment through integration or collection. | "고객 데이터"란 고객 또는 최종이용자가 서비스에 입력하거나 업로드하는 모든 데이터, 또는 연동이나 수집을 통해 고객의 시스템·설비에서 서비스로 들어오는 모든 데이터를 말합니다. | 고침 |
| 14 | "이용요금"이란 고객이 서비스 이용의 대가로 회사에 지급하는 금액을 말합니다. | “Fees” means the amounts the Customer pays to the Company in consideration for the use of the Service. | "이용요금"이란 고객이 서비스 이용의 대가로 회사에 지급하는 금액을 말합니다. | 일치 |
| 15 | 제3조 (약관의 명시 · 효력 및 변경) | Article 3 (Posting, Effect, and Amendment of the Terms) | 제3조 (약관의 게시, 효력 및 변경) | 일치 |
| 16 | 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 웹사이트 첫 화면 하단에 게시합니다. | The Company posts these Terms at the bottom of the Website’s home page so that Users can easily become aware of their contents. | 회사는 이용자가 그 내용을 쉽게 알 수 있도록 본 약관을 웹사이트 홈페이지 하단에 게시합니다. | 일치 |
| 17 | 본 약관은 웹사이트에 게시함으로써 효력이 발생합니다. | These Terms take effect upon being posted on the Website. | 본 약관은 웹사이트에 게시됨으로써 효력이 발생합니다. | 일치 |
| 18 | 회사는 「약관의 규제에 관한 법률」 등 관계 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다. | The Company may amend these Terms to the extent that doing so does not violate relevant laws, such as the Act on the Regulation of Terms and Conditions. | 회사는 「약관의 규제에 관한 법률」 등 관계 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있습니다. | 일치 |
| 19 | 회사가 약관을 변경하는 경우 적용일자와 변경 사유를 명시하여 적용일자 7일 전부터 공지합니다. 다만 이용자에게 불리한 변경의 경우에는 적용일자 30일 전부터 공지하고, 고객에게는 등록된 이메일 주소로 개별 통지합니다. | If the Company amends these Terms, it will announce the amendment, together with its effective date and the reasons for it, starting 7 days before the effective date. However, for amendments unfavorable to Users, the Company will announce them starting 30 days before the effective date and will also notify Customers individually at their registered email addresses. | 회사가 본 약관을 변경하는 경우 적용일자와 변경 사유를 함께 밝혀 적용일자 7일 전부터 변경을 공지합니다. 다만 이용자에게 불리한 변경은 적용일자 30일 전부터 공지하고, 고객에게는 등록된 이메일 주소로 개별 통지도 합니다. | 일치 |
| 20 | 고객이 변경된 약관에 동의하지 않는 경우 적용일자 전일까지 회사에 이의를 제기하고 개별계약을 해지할 수 있으며, 이 경우 회사는 잔여 계약기간에 해당하는 이용요금을 일할 계산하여 환불합니다. 적용일자까지 이의를 제기하지 않은 경우 변경된 약관에 동의한 것으로 봅니다. | If the Customer does not agree to the amended Terms, the Customer may raise an objection with the Company by the day before the effective date and terminate the Individual Agreement, in which case the Company will refund, on a pro rata daily basis, the Fees corresponding to the remaining contract term. If the Customer does not raise an objection by the effective date, the Customer is deemed to have agreed to the amended Terms. | 고객이 변경된 약관에 동의하지 않는 경우 적용일자 전날까지 회사에 이의를 제기하고 개별계약을 해지할 수 있으며, 이 경우 회사는 잔여 계약기간에 해당하는 이용요금을 일할로 환불합니다. 고객이 적용일자까지 이의를 제기하지 않으면 변경된 약관에 동의한 것으로 봅니다. | 일치 |
| 21 | 제4조 (약관 외 준칙 및 개별계약의 우선) | Article 4 (Matters Not Covered by These Terms and Precedence of the Individual Agreement) | 제4조 (본 약관에 정하지 않은 사항 및 개별계약의 우선) | 일치 |
| 22 | 본 약관에 정하지 아니한 사항은 개별계약, 관계 법령 및 상관례에 따릅니다. | Matters not provided for in these Terms are governed by the Individual Agreement, relevant laws, and commercial practice. | 본 약관에 정하지 않은 사항은 개별계약, 관계 법령 및 상관례에 따릅니다. | 일치 |
| 23 | 본 약관과 개별계약의 내용이 서로 다른 경우에는 개별계약이 우선합니다. | If the contents of these Terms and the Individual Agreement differ, the Individual Agreement prevails. | 본 약관과 개별계약의 내용이 서로 다르면 개별계약이 우선합니다. | 고침 |
| 24 | 개인정보의 처리에 관한 사항은 개인정보처리방침에 따르며, 개인정보 처리방침의 내용이 본 약관보다 정보주체에게 유리한 경우에는 개인정보 처리방침이 우선합니다. | Matters concerning the processing of personal information are governed by the Privacy Policy, and if the Privacy Policy is more favorable to data subjects than these Terms, the Privacy Policy prevails. | 개인정보의 처리에 관한 사항은 개인정보처리방침에 따르며, 개인정보처리방침이 본 약관보다 정보주체에게 유리한 경우에는 개인정보처리방침이 우선합니다. | 일치 |
| 25 | 제2장 웹사이트의 이용 | Chapter 2. Use of the Website | 제2장 웹사이트의 이용 | 일치 |
| 26 | 제5조 (웹사이트의 제공) | Article 5 (Provision of the Website) | 제5조 (웹사이트의 제공) | 일치 |
| 27 | 회사는 웹사이트를 통하여 제품 · 솔루션 소개, 블로그 · 백서 · 자료실 등 콘텐츠 제공, 문의 및 데모 신청 접수 서비스를 제공합니다. | Through the Website, the Company provides information on its products and solutions; content such as blog posts, whitepapers, and resource libraries; and a service for receiving inquiries and demo requests. | 회사는 웹사이트를 통해 제품·솔루션 정보, 블로그 글·백서·자료실 등의 콘텐츠, 문의 및 데모 신청 접수 서비스를 제공합니다. | 일치 |
| 28 | 웹사이트 이용에는 별도의 회원가입이나 요금이 발생하지 않습니다. | No membership registration or fee is required to use the Website. | 웹사이트 이용에는 회원가입이나 요금이 필요하지 않습니다. | 일치 |
| 29 | 회사는 웹사이트의 구성과 내용을 회사의 정책에 따라 변경할 수 있습니다. | The Company may change the structure and content of the Website in accordance with its policies. | 회사는 회사의 정책에 따라 웹사이트의 구성과 내용을 변경할 수 있습니다. | 일치 |
| 30 | 제6조 (문의 및 데모 신청) | Article 6 (Inquiries and Demo Requests) | 제6조 (문의 및 데모 신청) | 일치 |
| 31 | 이용자는 웹사이트의 문의 양식을 통하여 제품 문의, 데모 신청, 제휴 제안 등을 할 수 있습니다. | Users may submit product inquiries, demo requests, partnership proposals, and the like through the contact form on the Website. | 이용자는 웹사이트의 문의 양식을 통해 제품 문의, 데모 신청, 제휴 제안 등을 제출할 수 있습니다. | 일치 |
| 32 | 이용자는 문의 시 정확한 정보를 제공하여야 하며, 타인의 정보를 도용하거나 허위 정보를 기재하여서는 안 됩니다. | Users must provide accurate information when submitting inquiries and must not misappropriate another person’s information or provide false information. | 이용자는 문의 시 정확한 정보를 제공하여야 하며, 타인의 정보를 도용하거나 허위 정보를 제공하여서는 안 됩니다. | 일치 |
| 33 | 회사는 접수된 문의에 대하여 회신할 수 있으나, 회신 자체가 계약의 체결이나 서비스 제공의 승낙을 의미하지 않습니다. | The Company may respond to inquiries it receives, but a response does not in itself constitute the conclusion of a contract or acceptance of an application for the Service. | 회사는 접수한 문의에 회신할 수 있으나, 회신 자체가 계약의 체결이나 서비스 신청의 승낙이 되지는 않습니다. | 일치 |
| 34 | 문의 과정에서 수집되는 개인정보의 처리에 관하여는 개인정보처리방침이 적용됩니다. | The processing of personal information collected in the course of an inquiry is governed by the Privacy Policy. | 문의 과정에서 수집된 개인정보의 처리는 개인정보처리방침이 규율합니다. | 일치 |
| 35 | 제7조 (콘텐츠의 이용) | Article 7 (Use of Content) | 제7조 (콘텐츠의 이용) | 일치 |
| 36 | 이용자는 웹사이트에 게시된 콘텐츠(블로그 글, 백서, 리포트, 이미지, 도표 등)를 비상업적 목적의 열람 및 내부 참고 용도로만 이용할 수 있습니다. | Users may use content posted on the Website (blog posts, whitepapers, reports, images, charts, etc.) only for non-commercial viewing and internal reference purposes. | 이용자는 웹사이트에 게시된 콘텐츠(블로그 글, 백서, 리포트, 이미지, 도표 등)를 비상업적 열람 및 내부 참고 목적으로만 이용할 수 있습니다. | 일치 |
| 37 | 회사의 사전 서면 동의 없이 콘텐츠를 복제 · 배포 · 전송 · 출판 · 전시하거나, 2차적 저작물을 작성하거나, 상업적으로 이용할 수 없습니다. | Without the Company’s prior written consent, Users may not reproduce, distribute, transmit, publish, or display the content, create derivative works from it, or use it for commercial purposes. | 회사의 사전 서면 동의 없이 이용자는 콘텐츠를 복제·배포·전송·출판·전시하거나, 이로부터 2차적 저작물을 작성하거나, 상업적 목적으로 이용할 수 없습니다. | 일치 |
| 38 | 인용 시에는 출처를 명시하여야 하며, 원문의 취지를 왜곡하여서는 안 됩니다. | When quoting content, Users must cite the source and must not distort the intent of the original. | 콘텐츠를 인용할 때 이용자는 출처를 밝혀야 하며 원문의 취지를 왜곡하여서는 안 됩니다. | 일치 |
| 39 | 제8조 (금지행위) | Article 8 (Prohibited Acts) | 제8조 (금지행위) | 일치 |
| 40 | 이용자는 다음 각 호의 행위를 하여서는 안 됩니다. | Users must not engage in any of the following acts: | 이용자는 다음 각 호의 행위를 하여서는 안 됩니다. | 일치 |
| 41 | 회사 또는 제3자의 지식재산권, 명예, 신용 기타 권리를 침해하는 행위 | Infringing the intellectual property rights, reputation, credit, or other rights of the Company or any third party | 회사 또는 제3자의 지식재산권, 명예, 신용 또는 그 밖의 권리를 침해하는 행위 | 일치 |
| 42 | 자동화된 수단(크롤러, 스크래퍼, 봇 등)을 이용하여 웹사이트의 콘텐츠를 대량으로 수집하는 행위. 다만 robots.txt가 허용하는 검색엔진의 색인 수집은 예외로 합니다. | Collecting Website content in bulk using automated means (crawlers, scrapers, bots, etc.), except for indexing by search engines as permitted by robots.txt | 자동화된 수단(크롤러, 스크래퍼, 봇 등)을 이용하여 웹사이트 콘텐츠를 대량으로 수집하는 행위. 다만 robots.txt가 허용하는 검색엔진의 색인은 제외합니다 | 고침 |
| 43 | 웹사이트에 게시된 이메일 주소를 자동 수집 프로그램 등 기술적 장치를 이용하여 수집 · 판매 · 유통하는 행위 | Using technical devices, such as automatic collection programs, to collect, sell, or distribute email addresses posted on the Website | 자동 수집 프로그램 등 기술적 장치를 이용하여 웹사이트에 게시된 이메일 주소를 수집·판매·유통하는 행위 | 일치 (원문 수정 뒤) |
| 44 | 비정상적으로 과도한 요청을 발생시켜 서비스의 정상적인 운영을 방해하는 행위 | Generating abnormally excessive requests that interfere with the normal operation of the Service | 서비스의 정상적인 운영을 방해하는 비정상적으로 과도한 요청을 발생시키는 행위 | 일치 |
| 45 | 웹사이트나 서비스의 취약점을 탐색하거나, 접근 권한 없이 시스템에 접근을 시도하는 행위. 다만 회사에 사전 통보하고 회사가 승인한 보안 점검은 예외로 합니다. | Probing the Website or the Service for vulnerabilities, or attempting to access systems without authorization, except for security testing notified to the Company in advance and approved by the Company | 웹사이트나 서비스의 취약점을 탐색하거나 권한 없이 시스템 접근을 시도하는 행위. 다만 회사에 사전 통보하고 회사가 승인한 보안 점검은 제외합니다 | 고침 |
| 46 | 회사를 사칭하거나 회사와의 관계를 허위로 표시하는 행위 | Impersonating the Company or falsely representing a relationship with the Company | 회사를 사칭하거나 회사와의 관계를 허위로 표시하는 행위 | 일치 |
| 47 | 관계 법령에 위반되는 행위 | Violating relevant laws | 관계 법령을 위반하는 행위 | 일치 |
| 48 | 제9조 (피드백) | Article 9 (Feedback) | 제9조 (피드백) | 일치 |
| 49 | 이용자 또는 고객이 회사에 제품 · 서비스에 관한 아이디어, 개선 제안, 의견(이하 "피드백")을 제공하는 경우, 회사는 이를 비밀유지 의무나 별도의 대가 지급 의무 없이 제품 · 서비스 개선에 자유롭게 이용할 수 있습니다. 다만 피드백에 고객의 영업비밀이 포함되어 있음을 고객이 서면으로 명시한 경우에는 그러하지 않습니다. | If a User or Customer provides the Company with ideas, suggestions for improvement, or opinions regarding the Company’s products or services (“Feedback”), the Company may freely use such Feedback to improve its products and services without any obligation of confidentiality or separate compensation. However, this does not apply where the Customer has specified in writing that the Feedback contains the Customer’s trade secrets. | 이용자 또는 고객이 회사의 제품·서비스에 관한 아이디어, 개선 제안 또는 의견(이하 "피드백")을 회사에 제공하는 경우, 회사는 비밀유지 의무나 별도의 보상 의무 없이 이를 제품·서비스 개선에 자유롭게 이용할 수 있습니다. 다만 피드백에 고객의 영업비밀이 포함되어 있다고 고객이 서면으로 명시한 경우에는 그러하지 않습니다. | 일치 |
| 50 | 제3장 Refinery 서비스의 이용 | Chapter 3. Use of the Refinery Service | 제3장 Refinery 서비스의 이용 | 일치 |
| 51 | 제10조 (계약의 성립) | Article 10 (Formation of the Agreement) | 제10조 (계약의 성립) | 일치 |
| 52 | 서비스 이용계약은 고객이 회사에 이용을 신청하고 회사와 고객이 개별계약을 체결함으로써 성립합니다. | A service agreement is formed when the Customer applies to the Company for use of the Service and the Company and the Customer enter into an Individual Agreement. | 서비스 이용계약은 고객이 회사에 서비스 이용을 신청하고 회사와 고객이 개별계약을 체결할 때 성립합니다. | 일치 |
| 53 | 고객이 관계 법령상 회사와 거래할 수 없는 자에 해당하는 경우(전략물자 수출입 제한 대상, 제재 대상 등) | Where the Customer is a person with whom the Company may not transact under relevant laws (e.g., a person subject to restrictions on the export or import of strategic items, or to sanctions) | 고객이 관계 법령상 회사가 거래할 수 없는 자에 해당하는 경우(예: 전략물자의 수출입 제한 대상자 또는 제재 대상자) | 일치 |
| 54 | 회사의 설비 용량이나 기술상 서비스 제공이 곤란한 경우 | Where it is difficult to provide the Service due to the Company’s facility capacity or technical constraints | 회사의 설비 용량이나 기술적 제약으로 서비스 제공이 곤란한 경우 | 일치 |
| 55 | 제11조 (서비스의 내용) | Article 11 (Content of the Service) | 제11조 (서비스의 내용) | 일치 |
| 56 | 회사는 개별계약에서 정한 범위에 따라 산업 데이터의 수집 · 저장 · 처리 · 분석 · 시각화 기능과 이에 부수하는 기술 지원을 제공합니다. | Within the scope set out in the Individual Agreement, the Company provides functions for collecting, storing, processing, analyzing, and visualizing industrial data, and technical support incidental thereto. | 회사는 개별계약에서 정한 범위 내에서 산업 데이터의 수집·저장·처리·분석·시각화 기능과 이에 부수하는 기술 지원을 제공합니다. | 일치 |
| 57 | 서비스의 구체적인 기능, 이용 한도(연동 설비 · 태그 · 이용자 수, 저장 용량, 보존 기간 등), 제공 방식(클라우드 또는 고객 설치형)은 개별계약에서 정합니다. | The specific functions of the Service, usage limits (the number of connected equipment items, tags, and users; storage capacity; retention period; etc.), and delivery method (cloud or customer-installed) are set out in the Individual Agreement. | 서비스의 구체적 기능, 이용 한도(연동 설비·태그·이용자의 수, 저장 용량, 보존 기간 등), 제공 방식(클라우드 또는 고객 설치형)은 개별계약에서 정합니다. | 고침 |
| 58 | 회사는 서비스의 품질 향상을 위하여 기능을 추가 · 개선할 수 있습니다. | The Company may add or improve functions to enhance the quality of the Service. | 회사는 서비스 품질 향상을 위해 기능을 추가하거나 개선할 수 있습니다. | 일치 |
| 59 | 제12조 (계정 및 최종이용자의 관리) | Article 12 (Management of Accounts and End Users) | 제12조 (계정 및 최종이용자의 관리) | 일치 |
| 60 | 고객은 개별계약에서 정한 수의 범위 내에서 최종이용자에게 계정을 부여할 수 있습니다. | The Customer may grant accounts to End Users up to the number set out in the Individual Agreement. | 고객은 개별계약에서 정한 수까지 최종이용자에게 계정을 부여할 수 있습니다. | 일치 |
| 61 | 고객은 계정 정보(아이디 · 비밀번호 · 인증 수단)의 관리 책임을 부담하며, 계정 정보의 유출 · 양도 · 대여로 인하여 발생한 결과에 대하여 책임을 집니다. 다만 회사의 고의 또는 과실로 인한 경우에는 그러하지 않습니다. | The Customer is responsible for managing account information (IDs, passwords, and authentication methods) and is liable for any consequences arising from the leak, transfer, or lending of account information. However, this does not apply where such consequences are caused by the Company’s willful misconduct or negligence. | 고객은 계정 정보(아이디, 비밀번호, 인증 수단)의 관리에 책임이 있으며, 계정 정보의 유출·양도·대여로 발생한 결과에 대하여 책임을 집니다. 다만 그 결과가 회사의 고의 또는 과실로 인한 경우에는 그러하지 않습니다. | 일치 |
| 62 | 고객은 최종이용자가 본 약관 및 개별계약을 준수하도록 하여야 하며, 최종이용자의 행위를 고객 자신의 행위로 봅니다. | The Customer must ensure that End Users comply with these Terms and the Individual Agreement, and the acts of End Users are deemed to be the acts of the Customer. | 고객은 최종이용자가 본 약관과 개별계약을 준수하도록 하여야 하며, 최종이용자의 행위는 고객의 행위로 봅니다. | 일치 |
| 63 | 고객은 계정 정보의 도용이나 무단 사용을 인지한 경우 즉시 회사에 통지하고 회사의 안내에 따라야 합니다. | If the Customer becomes aware of any theft or unauthorized use of account information, the Customer must immediately notify the Company and follow the Company’s instructions. | 고객은 계정 정보의 도용이나 무단 사용을 알게 된 경우 즉시 회사에 통지하고 회사의 지시에 따라야 합니다. | 일치 |
| 64 | 제13조 (이용요금 및 지급) | Article 13 (Fees and Payment) | 제13조 (이용요금 및 지급) | 일치 |
| 65 | 이용요금의 금액, 산정 기준, 청구 주기, 지급 기한은 개별계약에서 정합니다. | The amount, calculation basis, billing cycle, and payment due date of the Fees are set out in the Individual Agreement. | 이용요금의 금액, 산정 기준, 청구 주기, 지급 기한은 개별계약에서 정합니다. | 일치 |
| 66 | 고객이 개별계약에서 정한 이용 한도를 초과하여 서비스를 이용하는 경우, 회사는 초과 사용분에 대하여 개별계약에서 정한 단가(정함이 없는 경우 회사의 정가)에 따라 추가 요금을 청구할 수 있습니다. 이 경우 회사는 청구에 앞서 초과 사용 사실과 산정 근거를 고객에게 통지합니다. | If the Customer uses the Service in excess of the usage limits set out in the Individual Agreement, the Company may charge additional fees for the excess usage at the unit price set out in the Individual Agreement (or, if none is set, at the Company’s list price). In this case, the Company will notify the Customer of the excess usage and the basis of calculation before charging. | 고객이 개별계약에서 정한 이용 한도를 초과하여 서비스를 이용하는 경우, 회사는 초과 사용분에 대하여 개별계약에서 정한 단가(정함이 없으면 회사의 정가)로 추가 요금을 청구할 수 있습니다. 이 경우 회사는 청구 전에 초과 사용 사실과 산정 근거를 고객에게 통지합니다. | 일치 |
| 67 | 이용요금에는 부가가치세가 포함되지 않으며, 관계 법령에 따른 제세공과금은 고객이 부담합니다. | The Fees do not include value-added tax, and the Customer is responsible for any taxes and public charges imposed under relevant laws. | 이용요금에는 부가가치세가 포함되지 않으며, 관계 법령에 따라 부과되는 세금과 공과금은 고객이 부담합니다. | 일치 |
| 68 | 고객이 지급 기한까지 이용요금을 지급하지 않는 경우 회사는 연체 금액에 대하여 연 6%(상법상 법정이율)의 지연이자를 청구할 수 있습니다. | If the Customer fails to pay the Fees by the payment due date, the Company may charge late-payment interest on the overdue amount at 6% per annum (the statutory interest rate in commercial activities under the Commercial Act). | 고객이 지급 기한까지 이용요금을 지급하지 않으면, 회사는 연체 금액에 대하여 연 6%(상법상 상행위 법정이율)의 지연이자를 청구할 수 있습니다. | 일치 |
| 69 | 고객의 요금 연체가 30일을 초과하는 경우, 회사는 14일 이상의 기간을 정하여 이행을 최고한 후 서비스의 제공을 중지하거나 개별계약을 해지할 수 있습니다. | If the Customer’s payment is overdue by more than 30 days, the Company may, after sending a demand for performance that sets a period of at least 14 days, suspend the provision of the Service or terminate the Individual Agreement. | 고객의 지급이 30일을 초과하여 연체된 경우, 회사는 14일 이상의 기간을 정한 이행 최고를 한 후 서비스 제공을 중지하거나 개별계약을 해지할 수 있습니다. | 고침 |
| 70 | 제14조 (계약기간 및 해지) | Article 14 (Term and Termination) | 제14조 (계약기간 및 해지) | 일치 |
| 71 | 계약기간은 개별계약에서 정하며, 정함이 없는 경우 1년으로 합니다. | The contract term is as set out in the Individual Agreement, or one year if not specified. | 계약기간은 개별계약에서 정한 바에 따르며, 정하지 않은 경우 1년입니다. | 일치 |
| 72 | 회사와 고객 중 어느 일방이 계약기간 만료일 30일 전까지 갱신하지 않겠다는 의사를 서면 또는 이메일로 통지하지 않는 경우, 개별계약은 동일한 조건으로 1년간 자동으로 갱신됩니다. 회사는 계약기간 만료일 60일 전부터 30일 전 사이에 자동갱신 예정 사실과 갱신 후 이용요금을 고객에게 통지합니다. | Unless either the Company or the Customer notifies the other party in writing or by email, at least 30 days before the expiration date of the contract term, that it does not intend to renew, the Individual Agreement is automatically renewed for one year on the same terms. The Company will notify the Customer of the upcoming automatic renewal and the post-renewal Fees between 60 and 30 days before the expiration date of the contract term. | 회사와 고객 중 어느 쪽도 계약기간 만료일 30일 전까지 갱신하지 않겠다는 뜻을 서면 또는 이메일로 상대방에게 통지하지 않으면, 개별계약은 같은 조건으로 1년간 자동 갱신됩니다. 회사는 계약기간 만료일 60일 전부터 30일 전 사이에 다가오는 자동갱신과 갱신 후 이용요금을 고객에게 통지합니다. | 일치 |
| 73 | 고객은 언제든지 회사에 서면 또는 이메일로 통지하여 개별계약을 해지할 수 있습니다. 이 경우 이미 지급한 이용요금 중 잔여 계약기간에 해당하는 금액은 개별계약에서 정한 바에 따라 정산합니다. | The Customer may terminate the Individual Agreement at any time by notifying the Company in writing or by email. In this case, any portion of the Fees already paid that corresponds to the remaining contract term will be settled as set out in the Individual Agreement. | 고객은 언제든지 서면 또는 이메일로 회사에 통지하여 개별계약을 해지할 수 있습니다. 이 경우 이미 지급한 이용요금 중 잔여 계약기간에 해당하는 부분은 개별계약에서 정한 바에 따라 정산합니다. | 일치 |
| 74 | 회사 또는 고객은 상대방이 본 약관 또는 개별계약을 중대하게 위반하고 30일 이상의 기간을 정한 시정 요구를 받고도 이를 시정하지 않는 경우 개별계약을 해지할 수 있습니다. | The Company or the Customer may terminate the Individual Agreement if the other party materially breaches these Terms or the Individual Agreement and fails to cure the breach after receiving a request to cure that sets a period of at least 30 days. | 회사 또는 고객은 상대방이 본 약관이나 개별계약을 중대하게 위반하고, 30일 이상의 기간을 정한 시정 요구를 받은 후에도 위반을 시정하지 않는 경우 개별계약을 해지할 수 있습니다. | 일치 |
| 75 | 일방 당사자에게 파산 · 회생 절차의 개시, 어음 · 수표의 부도, 영업정지 등 신용에 중대한 사유가 발생한 경우 상대방은 최고 없이 즉시 개별계약을 해지할 수 있습니다. | If bankruptcy or rehabilitation proceedings are commenced against a party, its bills or checks are dishonored, its business is suspended, or any other event materially affecting its creditworthiness occurs, the other party may terminate the Individual Agreement immediately without prior demand. | 일방 당사자에 대해 파산 또는 회생 절차가 개시되거나, 그 어음·수표가 부도 처리되거나, 영업이 정지되거나, 그 밖에 신용에 중대한 영향을 미치는 사유가 발생한 경우, 상대방은 최고 없이 즉시 개별계약을 해지할 수 있습니다. | 일치 |
| 76 | 제15조 (서비스의 제공 시간 및 유지보수) | Article 15 (Service Hours and Maintenance) | 제15조 (서비스 제공 시간 및 유지보수) | 일치 |
| 77 | 서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다. | As a rule, the Service is provided 24 hours a day, every day of the year. | 원칙적으로 서비스는 연중무휴 1일 24시간 제공됩니다. | 일치 |
| 78 | 회사는 시스템 점검, 증설, 교체 등 운영상 필요한 경우 서비스의 전부 또는 일부를 일시 중단할 수 있으며, 정기 점검은 시행 7일 전까지, 부득이한 긴급 점검은 사전에(사전 통지가 불가능한 경우 사후 지체 없이) 웹사이트 또는 이메일로 통지합니다. | The Company may temporarily suspend all or part of the Service when operationally necessary, such as for system inspection, expansion, or replacement, and will give notice of scheduled maintenance at least 7 days in advance, and of unavoidable emergency maintenance in advance (or, if prior notice is impossible, without delay afterward), through the Website or by email. | 회사는 시스템 점검, 증설, 교체 등 운영상 필요한 경우 서비스의 전부 또는 일부를 일시 중단할 수 있으며, 정기 유지보수는 7일 전까지, 부득이한 긴급 유지보수는 사전에(사전 통지가 불가능하면 사후 지체 없이) 웹사이트 또는 이메일로 통지합니다. | 일치 |
| 79 | 서비스 가용률(SLA), 장애 대응 시간, 미달 시 이용요금 크레딧 등에 관하여는 개별계약에서 정할 수 있습니다. | Service availability (SLA), incident response times, and Fee credits for failing to meet them may be set out in the Individual Agreement. | 서비스 가용률(SLA), 장애 대응 시간, 이를 충족하지 못한 경우의 이용요금 크레딧은 개별계약에서 정할 수 있습니다. | 일치 |
| 80 | 제16조 (서비스의 변경 및 중단) | Article 16 (Change and Discontinuation of the Service) | 제16조 (서비스의 변경 및 중단) | 일치 |
| 81 | 회사는 기술적 사양의 변경, 법령의 개정, 서비스 정책의 변경 등 상당한 이유가 있는 경우 서비스의 내용을 변경하거나 일부 기능의 제공을 중단할 수 있습니다. | The Company may change the content of the Service or discontinue certain functions where there are reasonable grounds, such as changes in technical specifications, amendments to laws, or changes in service policy. | 회사는 기술 사양의 변경, 법령 개정, 서비스 정책의 변경 등 상당한 이유가 있는 경우 서비스의 내용을 변경하거나 일부 기능을 중단할 수 있습니다. | 일치 |
| 82 | 회사가 서비스의 주요 기능을 고객에게 불리하게 변경하거나 서비스 전부의 제공을 중단하는 경우, 시행일 90일 전까지 고객에게 통지합니다. 이 경우 고객은 개별계약을 해지할 수 있고, 회사는 잔여 계약기간에 해당하는 이용요금을 일할 계산하여 환불합니다. | If the Company changes major functions of the Service to the Customer’s disadvantage or discontinues the Service entirely, it will notify the Customer at least 90 days before the change or discontinuation takes effect. In this case, the Customer may terminate the Individual Agreement, and the Company will refund, on a pro rata daily basis, the Fees corresponding to the remaining contract term. | 회사가 서비스의 주요 기능을 고객에게 불리하게 변경하거나 서비스 전부를 중단하는 경우, 그 변경 또는 중단이 시행되기 최소 90일 전에 고객에게 통지합니다. 이 경우 고객은 개별계약을 해지할 수 있으며, 회사는 잔여 계약기간에 해당하는 이용요금을 일할로 환불합니다. | 일치 |
| 83 | 천재지변, 국가비상사태, 기간통신사업자의 서비스 중단 등 불가항력적 사유가 있는 경우에는 제2항의 통지 기간을 적용하지 않습니다. | The notice period in paragraph (2) does not apply in the event of force majeure, such as natural disasters, national emergencies, or service interruptions by telecommunications carriers. | 천재지변, 국가비상사태, 기간통신사업자의 서비스 중단 등 불가항력의 경우에는 제2항의 통지 기간을 적용하지 않습니다. | 일치 |
| 84 | 제17조 (고객 데이터의 귀속 및 이용) | Article 17 (Ownership and Use of Customer Data) | 제17조 (고객 데이터의 귀속 및 이용) | 일치 |
| 85 | 고객 데이터에 관한 일체의 권리는 고객에게 귀속합니다. 회사는 고객 데이터에 대하여 어떠한 소유권도 주장하지 않습니다. | All rights to Customer Data belong to the Customer. The Company does not claim any ownership of Customer Data. | 고객 데이터에 관한 모든 권리는 고객에게 귀속합니다. 회사는 고객 데이터에 대하여 어떠한 소유권도 주장하지 않습니다. | 일치 |
| 86 | 회사는 서비스의 제공, 장애 대응, 고객 지원, 계약 이행에 필요한 범위 내에서만 고객 데이터를 처리하며, 고객의 사전 서면 동의 없이 고객 데이터를 제3자에게 제공하거나 다른 목적으로 이용하지 않습니다. | The Company processes Customer Data only to the extent necessary to provide the Service, respond to incidents, provide customer support, and perform the agreement, and does not provide Customer Data to third parties or use it for other purposes without the Customer’s prior written consent. | 회사는 서비스 제공, 장애 대응, 고객 지원, 계약 이행에 필요한 범위에서만 고객 데이터를 처리하며, 고객의 사전 서면 동의 없이 고객 데이터를 제3자에게 제공하거나 다른 목적으로 이용하지 않습니다. | 일치 |
| 87 | 회사는 고객이나 개인을 식별할 수 있는 형태의 고객 데이터를 회사의 인공지능 모델 학습에 이용하지 않습니다. 다만 개별 고객 · 설비를 다시 식별할 수 없도록 익명처리 · 집계한 정보(설비 사양, 전력 · 효율 지표, 운전 · 개선 이력 등 개인정보에 해당하지 않는 정보)는 서비스 개선 및 연구 목적으로 이용할 수 있습니다. 고객 데이터에 개인정보가 포함된 경우 그 처리는 제5항 및 개인정보 처리위탁 계약에서 정한 범위를 따릅니다. | The Company does not use Customer Data for training the Company’s artificial intelligence models in any form that can identify a customer or an individual. However, the Company may use information that has been anonymized and aggregated so that individual customers or equipment cannot be re-identified (information that does not constitute personal information, such as equipment specifications, power and efficiency indicators, and operation and improvement history) for service improvement and research. If Customer Data contains personal information, its processing is subject to paragraph (5) and the scope set out in the personal information entrustment contract. | 회사는 고객이나 개인을 식별할 수 있는 어떠한 형태로도 고객 데이터를 회사의 인공지능 모델 학습에 이용하지 않습니다. 다만 개별 고객·설비를 다시 식별할 수 없도록 익명처리·집계한 정보(설비 사양, 전력·효율 지표, 운전·개선 이력 등 개인정보에 해당하지 않는 정보)는 서비스 개선 및 연구에 이용할 수 있습니다. 고객 데이터에 개인정보가 포함된 경우 그 처리는 제5항과 개인정보 처리위탁 계약에서 정한 범위를 따릅니다. | 고침 |
| 88 | 개별계약이 종료된 경우 고객은 종료일부터 30일 이내에 고객 데이터를 반출할 수 있으며, 회사는 그 기간이 경과한 후 지체 없이 고객 데이터를 삭제합니다. 다만 법령에 따라 보존하여야 하는 정보는 해당 기간 동안 분리하여 보관합니다. | When the Individual Agreement ends, the Customer may export Customer Data within 30 days of the end date, and the Company will delete Customer Data without delay after that period expires. However, information that must be retained by law is stored separately for the required period. | 개별계약이 종료되면 고객은 종료일부터 30일 이내에 고객 데이터를 반출할 수 있으며, 회사는 그 기간이 지난 뒤 지체 없이 고객 데이터를 삭제합니다. 다만 법령에 따라 보존하여야 하는 정보는 필요한 기간 동안 분리하여 보관합니다. | 일치 |
| 89 | 고객 데이터에 개인정보가 포함된 경우 고객이 개인정보처리자, 회사가 수탁자의 지위에 있으며, 그 처리에 관하여는 회사와 고객이 체결하는 개인정보 처리위탁 계약 및 개인정보처리방침에 따릅니다. | If Customer Data contains personal information, the Customer is the personal information controller and the Company is the person entrusted (수탁자), and its processing is governed by the personal information entrustment contract entered into between the Company and the Customer and by the Privacy Policy. | 고객 데이터에 개인정보가 포함된 경우 고객은 개인정보처리자, 회사는 수탁자이며, 그 처리는 회사와 고객이 체결하는 개인정보 처리위탁 계약과 개인정보처리방침이 규율합니다. | 고침 |
| 90 | 고객은 고객 데이터의 백업에 대한 책임을 부담합니다. 다만 개별계약에서 회사가 백업 서비스를 제공하기로 정한 경우에는 그러하지 않습니다. | The Customer is responsible for backing up Customer Data. However, this does not apply where the Individual Agreement provides that the Company will provide a backup service. | 고객은 고객 데이터의 백업에 책임이 있습니다. 다만 개별계약에서 회사가 백업 서비스를 제공하기로 정한 경우에는 그러하지 않습니다. | 일치 |
| 91 | 제18조 (비밀유지) | Article 18 (Confidentiality) | 제18조 (비밀유지) | 일치 |
| 92 | 회사와 고객은 본 계약의 이행 과정에서 알게 된 상대방의 영업상 · 기술상 비밀을 제3자에게 누설하거나 계약 목적 외로 사용하여서는 안 됩니다. | The Company and the Customer must not disclose to any third party, or use for any purpose other than the purpose of the agreement, the other party’s business or technical secrets learned in the course of performing the agreement. | 회사와 고객은 계약 이행 과정에서 알게 된 상대방의 영업상·기술상 비밀을 제3자에게 누설하거나 계약 목적 외의 목적으로 사용하여서는 안 됩니다. | 일치 |
| 93 | 수령 당시 이미 보유하고 있던 정보 | Information already in the receiving party’s possession at the time of receipt | 수령 당시 수령자가 이미 보유하고 있던 정보 | 일치 |
| 94 | 제3자로부터 적법하게 취득한 정보 | Information lawfully obtained from a third party | 제3자로부터 적법하게 취득한 정보 | 일치 |
| 95 | 비밀정보를 이용하지 않고 독자적으로 개발한 정보 | Information independently developed without using confidential information | 비밀정보를 이용하지 않고 독자적으로 개발한 정보 | 일치 |
| 96 | 법령이나 정부기관 · 법원의 적법한 요구에 따라 비밀정보를 공개하는 경우, 공개 당사자는 가능한 범위에서 사전에 상대방에게 통지합니다. | If confidential information is disclosed pursuant to law or a lawful request of a government agency or court, the disclosing party will notify the other party in advance to the extent possible. | 법령이나 정부기관·법원의 적법한 요구에 따라 비밀정보를 공개하는 경우, 공개하는 당사자는 가능한 범위에서 상대방에게 사전에 통지합니다. | 일치 |
| 97 | 본 조의 의무는 계약 종료 후 3년간 존속합니다. | The obligations under this Article survive for three years after the termination of the agreement. | 본 조의 의무는 계약 종료 후 3년간 존속합니다. | 일치 |
| 98 | 제4장 일반 조항 | Chapter 4. Miscellaneous Provisions | 제4장 일반 조항 | 일치 |
| 99 | 제19조 (지식재산권) | Article 19 (Intellectual Property Rights) | 제19조 (지식재산권) | 일치 |
| 100 | 웹사이트, 서비스, 소프트웨어, 문서, 상표 및 이에 포함된 일체의 지식재산권은 회사 또는 정당한 권리자에게 귀속합니다. | All intellectual property rights in the Website, the Service, software, documentation, trademarks, and everything contained therein belong to the Company or the legitimate rights holders. | 웹사이트, 서비스, 소프트웨어, 문서, 상표 및 이에 포함된 모든 것에 관한 모든 지식재산권은 회사 또는 정당한 권리자에게 귀속합니다. | 일치 |
| 101 | 고객은 개별계약에서 정한 범위 내에서 서비스를 이용할 권리를 가질 뿐이며, 그 밖에 어떠한 권리도 이전받지 않습니다. | The Customer has only the right to use the Service within the scope set out in the Individual Agreement, and no other rights are transferred to the Customer. | 고객은 개별계약에서 정한 범위에서 서비스를 이용할 권리만 가지며, 그 밖의 어떠한 권리도 고객에게 이전되지 않습니다. | 일치 |
| 102 | 서비스 제공 과정에서 회사가 생성한 분석 모델 · 알고리즘 · 산출물에 관한 권리는 회사에 귀속합니다. 다만 개별계약에서 달리 정한 경우에는 그에 따릅니다. | Rights to analytical models, algorithms, and outputs generated by the Company in the course of providing the Service belong to the Company, unless otherwise provided in the Individual Agreement. | 서비스 제공 과정에서 회사가 생성한 분석 모델, 알고리즘, 산출물에 관한 권리는 개별계약에서 달리 정하지 않는 한 회사에 귀속합니다. | 일치 |
| 103 | 제20조 (이용의 제한) | Article 20 (Restriction of Use) | 제20조 (이용의 제한) | 일치 |
| 104 | 회사는 이용자 또는 고객이 제8조의 금지행위를 하거나 본 약관을 위반한 경우, 사전에 시정을 요구한 후 서비스 이용을 제한할 수 있습니다. | If a User or Customer engages in any prohibited act under Article 8 or violates these Terms, the Company may restrict use of the Service after first requesting correction. | 이용자 또는 고객이 제8조의 금지행위를 하거나 본 약관을 위반한 경우, 회사는 먼저 시정을 요구한 후 서비스 이용을 제한할 수 있습니다. | 일치 |
| 105 | 다만 서비스의 안정성이나 다른 고객의 이익에 급박하고 중대한 위험이 발생한 경우에는 즉시 이용을 제한하고 지체 없이 그 사유를 통지할 수 있습니다. | However, if an imminent and serious risk arises to the stability of the Service or the interests of other customers, the Company may restrict use immediately and give notice of the reason without delay. | 다만 서비스의 안정성이나 다른 고객의 이익에 급박하고 중대한 위험이 발생한 경우, 회사는 즉시 이용을 제한하고 지체 없이 그 사유를 통지할 수 있습니다. | 고침 |
| 106 | 회사는 이용 제한 사유가 해소된 경우 지체 없이 제한을 해제합니다. | The Company will lift the restriction without delay once the grounds for the restriction are resolved. | 회사는 제한 사유가 해소되면 지체 없이 제한을 해제합니다. | 일치 |
| 107 | 제21조 (보증 및 보증의 부인) | Article 21 (Warranties and Disclaimer of Warranties) | 제21조 (보증 및 보증의 부인) | 일치 |
| 108 | 회사는 서비스가 개별계약 및 회사가 제공한 제품 사양서의 내용에 실질적으로 부합하도록 제공할 것을 보증합니다. | The Company warrants that the Service will be provided in substantial conformity with the Individual Agreement and the product specifications provided by the Company. | 회사는 서비스가 개별계약 및 회사가 제공한 제품 사양서에 실질적으로 부합하게 제공될 것을 보증합니다. | 일치 |
| 109 | 회사는 서비스가 중단이나 오류 없이 작동할 것을 보증하지 않으며, 서비스가 고객의 특정한 목적에 적합할 것을 보증하지 않습니다. | The Company does not warrant that the Service will operate without interruption or error, and does not warrant that the Service will be fit for the Customer’s particular purpose. | 회사는 서비스가 중단이나 오류 없이 작동할 것을 보증하지 않으며, 서비스가 고객의 특정 목적에 적합할 것을 보증하지 않습니다. | 일치 |
| 110 | 서비스가 제공하는 분석 · 예측 결과는 의사결정을 보조하기 위한 참고 자료이며, 회사는 고객이 해당 결과에 기초하여 내린 판단이나 조치의 결과에 대하여 보증하지 않습니다. 고객은 결과의 타당성을 자체적으로 검증하여야 합니다. | The analysis and prediction results provided by the Service are reference materials to support decision-making, and the Company does not warrant the consequences of any judgments made or actions taken by the Customer based on such results. The Customer must independently verify the validity of the results. | 서비스가 제공하는 분석·예측 결과는 의사결정을 보조하는 참고 자료이며, 회사는 고객이 그 결과에 기초하여 내린 판단이나 취한 조치의 결과를 보증하지 않습니다. 고객은 결과의 타당성을 스스로 검증하여야 합니다. | 일치 |
| 111 | 서비스를 인명 · 안전에 직접 관련된 제어 목적(안전계장시스템, 비상정지, 화재 · 가스 감지에 따른 자동 차단, 의료기기 등)으로 사용하여서는 안 되며, 그러한 용도의 유일한 판단 수단으로 사용하여서도 안 됩니다. 고객은 별도의 독립된 안전 계통을 갖추어야 합니다. | The Service must not be used for control purposes directly related to human life or safety (such as safety instrumented systems, emergency shutdowns, automatic shutoffs based on fire or gas detection, or medical devices), or as the sole means of making decisions for such purposes. The Customer must maintain a separate, independent safety system. | 서비스는 인명 또는 안전에 직접 관련된 제어 목적(안전계장시스템, 비상정지, 화재·가스 감지에 따른 자동 차단, 의료기기 등)으로 사용되어서는 안 되며, 그러한 목적의 유일한 의사결정 수단으로 사용되어서도 안 됩니다. 고객은 별도의 독립적인 안전 계통을 유지하여야 합니다. | 일치 |
| 112 | 본 조는 회사의 고의 또는 중대한 과실로 인한 책임을 배제하지 않습니다. | This Article does not exclude the Company’s liability arising from its willful misconduct or gross negligence. | 본 조는 회사의 고의 또는 중대한 과실로 인한 회사의 책임을 배제하지 않습니다. | 일치 |
| 113 | 제22조 (책임의 제한) | Article 22 (Limitation of Liability) | 제22조 (책임의 제한) | 일치 |
| 114 | 회사가 고객에게 부담하는 손해배상책임의 총액은, 손해가 발생한 사유가 생긴 날 이전 12개월 동안 고객이 회사에 실제로 지급한 이용요금의 총액을 한도로 합니다. | The Company’s total liability for damages to the Customer is limited to the total amount of Fees actually paid by the Customer to the Company during the 12 months preceding the date on which the cause of the damage arose. | 회사가 고객에게 지는 손해배상책임의 총액은 손해의 원인이 발생한 날 이전 12개월 동안 고객이 회사에 실제로 지급한 이용요금의 총액으로 제한됩니다. | 일치 |
| 115 | 회사는 통상손해의 범위를 넘는 특별한 사정으로 인한 손해, 일실이익, 데이터 멸실로 인한 간접손해에 대하여는, 회사가 그러한 사정을 알았거나 알 수 있었을 경우에 한하여 책임을 집니다. | With respect to damages arising from special circumstances beyond the scope of ordinary damages, lost profits, and indirect damages resulting from data loss, the Company is liable only if it knew or could have known of such circumstances. | 통상손해의 범위를 넘는 특별한 사정으로 인한 손해, 일실이익, 데이터 멸실로 인한 간접손해에 대하여는 회사가 그러한 사정을 알았거나 알 수 있었던 경우에만 회사가 책임을 집니다. | 일치 |
| 116 | 제1항 및 제2항은 회사의 고의 또는 중대한 과실로 인한 손해, 회사가 서면으로 보증한 사항의 위반으로 인한 손해, 인적 손해(생명 · 신체의 침해)에 대하여는 적용하지 않습니다. | Paragraphs (1) and (2) do not apply to damages arising from the Company’s willful misconduct or gross negligence, damages arising from a breach of any written warranty given by the Company, or personal injury (death or bodily injury). | 제1항과 제2항은 회사의 고의 또는 중대한 과실로 인한 손해, 회사가 서면으로 한 보증의 위반으로 인한 손해, 인적 손해(사망 또는 신체 상해)에는 적용되지 않습니다. | 일치 |
| 117 | 기간통신사업자의 회선 장애, 전력 공급 중단 등 회사의 지배 영역 밖의 사유 | Causes beyond the Company’s control, such as line failures of telecommunications carriers or power outages | 기간통신사업자의 회선 장애나 전력 공급 중단 등 회사의 통제 밖의 사유 | 일치 |
| 118 | 고객이 제공한 데이터 · 설비 · 네트워크의 결함이나 고객의 지시에 따른 처리 | Defects in data, equipment, or networks provided by the Customer, or processing performed according to the Customer’s instructions | 고객이 제공한 데이터·설비·네트워크의 결함, 또는 고객의 지시에 따라 수행된 처리 | 일치 |
| 119 | 고객 또는 최종이용자의 계정 관리 소홀 | Negligent account management by the Customer or End Users | 고객 또는 최종이용자의 계정 관리 소홀 | 일치 |
| 120 | 고객이 회사가 권고한 보안 조치나 업데이트를 이행하지 않아 발생한 사고 | Incidents arising from the Customer’s failure to implement security measures or updates recommended by the Company | 회사가 권고한 보안 조치나 업데이트를 고객이 이행하지 않아 발생한 사고 | 일치 |
| 121 | 무상으로 제공되는 시험판 · 베타 기능 · 평가판에 대하여 회사는 고의 또는 중대한 과실이 있는 경우에 한하여 책임을 집니다. | For trial versions, beta features, and evaluation versions provided free of charge, the Company is liable only in cases of willful misconduct or gross negligence. | 무상으로 제공되는 시험판, 베타 기능, 평가판에 대하여 회사는 고의 또는 중대한 과실이 있는 경우에만 책임을 집니다. | 고침 |
| 122 | 제23조 (제3자 청구에 대한 방어) | Article 23 (Defense Against Third-Party Claims) | 제23조 (제3자 청구에 대한 방어) | 일치 |
| 123 | 회사는 서비스가 대한민국 내에서 제3자의 지식재산권을 침해한다는 이유로 고객이 제3자로부터 청구를 받은 경우, 자신의 비용으로 방어하고 확정판결에 따라 고객이 부담하게 된 손해배상액을 부담합니다. 다만 고객이 지체 없이 회사에 통지하고 방어에 협력한 경우에 한합니다. | If the Customer receives a claim from a third party alleging that the Service infringes the third party’s intellectual property rights in the Republic of Korea, the Company will defend the claim at its own expense and bear the damages the Customer is ordered to pay under a final and binding judgment. However, this applies only if the Customer notifies the Company without delay and cooperates in the defense. | 서비스가 대한민국에서 제3자의 지식재산권을 침해한다고 주장하는 청구를 고객이 제3자로부터 받은 경우, 회사는 자신의 비용으로 그 청구를 방어하고 확정판결에 따라 고객이 지급하도록 명령받은 손해배상액을 부담합니다. 다만 이는 고객이 지체 없이 회사에 통지하고 방어에 협력한 경우에만 적용됩니다. | 일치 |
| 124 | 침해가 없도록 서비스를 변경 | Modifying the Service so that it no longer infringes | 더 이상 침해가 없도록 서비스를 변경 | 일치 |
| 125 | 개별계약을 해지하고 잔여기간 이용요금을 환불 | Terminating the Individual Agreement and refunding the Fees for the remaining term | 개별계약을 해지하고 잔여 기간의 이용요금을 환불 | 일치 |
| 126 | 고객 데이터 또는 고객의 지시로 인하여 제3자의 권리가 침해된 경우에는 고객이 같은 방법으로 회사를 방어하고 면책합니다. | If a third party’s rights are infringed due to Customer Data or the Customer’s instructions, the Customer will defend and indemnify the Company in the same manner. | 고객 데이터나 고객의 지시로 인해 제3자의 권리가 침해된 경우, 고객이 같은 방법으로 회사를 방어하고 면책합니다. | 일치 |
| 127 | 제24조 (권리 · 의무의 양도) | Article 24 (Assignment of Rights and Obligations) | 제24조 (권리·의무의 양도) | 일치 |
| 128 | 회사와 고객은 상대방의 사전 서면 동의 없이 본 약관 및 개별계약상의 권리 · 의무를 제3자에게 양도하거나 담보로 제공할 수 없습니다. 다만 합병 · 분할 · 영업양도로 인한 포괄승계의 경우에는 그러하지 않으며, 이 경우 지체 없이 상대방에게 통지합니다. | Neither the Company nor the Customer may assign to a third party, or provide as collateral, its rights or obligations under these Terms and the Individual Agreement without the other party’s prior written consent. However, this does not apply to universal succession resulting from a merger, division, or business transfer, in which case the relevant party will notify the other party without delay. | 회사와 고객 모두 상대방의 사전 서면 동의 없이 본 약관 및 개별계약상의 권리나 의무를 제3자에게 양도하거나 담보로 제공할 수 없습니다. 다만 합병, 분할, 영업양도로 인한 포괄승계에는 적용되지 않으며, 이 경우 해당 당사자는 지체 없이 상대방에게 통지합니다. | 일치 |
| 129 | 제25조 (통지) | Article 25 (Notices) | 제25조 (통지) | 일치 |
| 130 | 회사가 고객에게 하는 통지는 개별계약에 기재된 이메일 주소로 발송함으로써 효력이 발생합니다. | Notices from the Company to the Customer take effect when sent to the email address stated in the Individual Agreement. | 회사가 고객에게 하는 통지는 개별계약에 기재된 이메일 주소로 발송된 때 효력이 발생합니다. | 일치 |
| 131 | 불특정 다수의 이용자에 대한 통지는 웹사이트 게시로 갈음할 수 있습니다. 다만 고객의 권리 · 의무에 중대한 영향을 미치는 사항은 개별 통지합니다. | Notices to Users in general may instead be given by posting on the Website. However, the Company will notify the Customer individually of matters that materially affect the Customer’s rights or obligations. | 이용자 일반에 대한 통지는 웹사이트 게시로 대신할 수 있습니다. 다만 회사는 고객의 권리나 의무에 중대한 영향을 미치는 사항을 고객에게 개별 통지합니다. | 일치 |
| 132 | 고객은 연락처가 변경된 경우 지체 없이 회사에 통지하여야 하며, 통지하지 않아 발생한 불이익에 대하여는 회사가 책임지지 않습니다. | If the Customer’s contact information changes, the Customer must notify the Company without delay, and the Company is not responsible for any disadvantage arising from the Customer’s failure to do so. | 고객의 연락처가 변경된 경우 고객은 지체 없이 회사에 통지하여야 하며, 고객이 이를 하지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다. | 일치 |
| 133 | 제26조 (불가항력) | Article 26 (Force Majeure) | 제26조 (불가항력) | 일치 |
| 134 | 천재지변, 전쟁 · 내란, 감염병의 확산, 국가기관의 조치, 기간통신 · 전력 · 클라우드 등 기반시설의 광범위한 장애 등 당사자의 합리적인 지배를 벗어난 사유로 의무를 이행하지 못하거나 지연한 경우, 그 범위에서 책임을 지지 않습니다. | A party is not liable to the extent that it fails to perform, or delays performance of, its obligations due to causes beyond its reasonable control, such as natural disasters, war or civil unrest, the spread of infectious diseases, actions by government authorities, or widespread failures of infrastructure such as telecommunications, power, or cloud services. | 당사자는 천재지변, 전쟁 또는 내란, 감염병의 확산, 정부 당국의 조치, 통신·전력·클라우드 서비스 등 기반시설의 광범위한 장애 등 그 합리적인 통제를 벗어난 사유로 의무를 이행하지 못하거나 이행이 지연된 경우, 그 범위에서 책임을 지지 않습니다. | 일치 |
| 135 | 불가항력 사유가 30일 이상 계속되는 경우, 상대방은 서면 통지로 개별계약을 해지할 수 있습니다. | If a force majeure event continues for 30 days or more, the other party may terminate the Individual Agreement by written notice. | 불가항력 사유가 30일 이상 계속되는 경우, 상대방은 서면 통지로 개별계약을 해지할 수 있습니다. | 일치 |
| 136 | 다만 이미 발생한 금전지급의무는 불가항력을 이유로 면제되지 않습니다. | However, payment obligations that have already arisen are not excused on the grounds of force majeure. | 다만 이미 발생한 금전지급의무는 불가항력을 이유로 면제되지 않습니다. | 일치 |
| 137 | 제27조 (완전합의) | Article 27 (Entire Agreement) | 제27조 (완전합의) | 일치 |
| 138 | 본 약관과 개별계약은 그 대상에 관한 회사와 고객 간의 완전한 합의를 구성하며, 그 이전의 구두 또는 서면에 의한 합의 · 제안 · 표시에 우선합니다. 다만 회사가 서면으로 한 보증은 그러하지 않습니다. | These Terms and the Individual Agreement constitute the entire agreement between the Company and the Customer with respect to their subject matter and take precedence over all prior oral or written agreements, proposals, and representations. However, this does not apply to warranties made by the Company in writing. | 본 약관과 개별계약은 그 대상에 관하여 회사와 고객 사이의 완전한 합의를 구성하며, 이전의 모든 구두 또는 서면 합의, 제안, 표시에 우선합니다. 다만 회사가 서면으로 한 보증에는 적용되지 않습니다. | 일치 |
| 139 | 제28조 (준거법 및 관할) | Article 28 (Governing Law and Jurisdiction) | 제28조 (준거법 및 관할) | 일치 |
| 140 | 본 약관 및 개별계약은 대한민국 법령에 따라 규율되고 해석됩니다. | These Terms and the Individual Agreement are governed by and construed in accordance with the laws of the Republic of Korea. | 본 약관과 개별계약은 대한민국 법령에 따라 규율되고 해석됩니다. | 일치 |
| 141 | 회사와 이용자 · 고객 사이에 분쟁이 발생한 경우 양 당사자는 원만한 해결을 위하여 성실히 협의합니다. | If a dispute arises between the Company and a User or Customer, the parties will consult in good faith to resolve it amicably. | 회사와 이용자 또는 고객 사이에 분쟁이 발생한 경우, 당사자들은 원만한 해결을 위해 성실히 협의합니다. | 일치 |
| 142 | 협의가 이루어지지 않아 소송이 제기되는 경우, 그 제1심 관할법원은 회사의 본점 소재지를 관할하는 법원으로 합니다. 다만 이는 전속적 합의가 아니며, 법령상 인정되는 다른 관할을 배제하지 않습니다. | If the parties fail to reach an agreement and a lawsuit is filed, the court having jurisdiction over the location of the Company’s head office will be the court of first instance. However, this is not an exclusive jurisdiction agreement and does not exclude any other jurisdiction recognized by law. | 당사자들이 합의에 이르지 못하여 소송이 제기되는 경우, 회사의 본점 소재지를 관할하는 법원을 제1심 법원으로 합니다. 다만 이는 전속적 관할 합의가 아니며 법률상 인정되는 다른 관할을 배제하지 않습니다. | 일치 |
| 143 | 제29조 (분리 가능성) | Article 29 (Severability) | 제29조 (분리 가능성) | 일치 |
| 144 | 본 약관의 일부 조항이 관계 법령에 위반되어 무효이거나 집행할 수 없는 것으로 판단되더라도, 나머지 조항의 효력에는 영향을 미치지 않습니다. | Even if any provision of these Terms is held invalid or unenforceable for violating relevant laws, the validity of the remaining provisions is not affected. | 본 약관의 어느 조항이 관계 법령 위반으로 무효이거나 집행할 수 없다고 판단되더라도, 나머지 조항의 효력에는 영향이 없습니다. | 일치 |
| 145 | 부칙 | Addenda | 부칙 | 일치 |
| 146 | 본 약관은 2026-09-01부터 시행합니다. 개정 이력은 아래와 같습니다. | These Terms are effective as of September 1, 2026. The revision history is as follows. | 본 약관은 2026년 9월 1일부터 시행합니다. 개정 이력은 다음과 같습니다. | 일치 |
| 147 | 시행일 | Effective date | 시행일 | 일치 |
| 148 | 주요 변경 | Summary of changes | 주요 변경 | 일치 |
| 149 | 전문 | Full text | 전문 | 일치 |
| 150 | 2026-09-01 | September 1, 2026 | 2026년 9월 1일 | 일치 |
| 151 | 최초 제정 | Initial version | 최초 버전 | 일치 |
| 152 | 현행 | Current | 현행 | 일치 |
| 153 | 문의처 | Contact | 문의처 | 일치 |
| 154 | 본 약관에 관한 문의는 아래 연락처 또는 문의하기로 접수하실 수 있습니다. | For inquiries about these Terms, please use the contact details below or the Contact page. | 본 약관에 관한 문의는 아래 연락처 또는 문의하기 페이지를 이용해 주십시오. | 고침 |
