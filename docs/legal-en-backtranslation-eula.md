# 소프트웨어 사용권 계약(EULA) 영어판 — 역번역 검사

대상: `/eula` ↔ `/en/eula` · 2026-09-11 (영어 문법 검토 9단위 반영 뒤 바뀐 단위를 다시 역번역 — 뜻이 바뀐 곳 0)

영어판을 한국어로 **직역해 되돌린 뒤**(역번역) 원문과 뜻을 단위별로 대조했다. 제목 · 문단 · 목록 · 표 칸을 문서 순서대로 1:1로 짝지었다(110 단위, 어긋남 0).
하위 호를 품은 항 1곳(제7조 제1항)과 그 첫 호는 추출기가 한 덩어리로 건너뛰어 아래 「표에 없는 2단위」에 따로 적었다.
판정 순서는 용어집 §11 — 넓어진 곳 > 좁아진 곳 > 세기가 달라진 곳 > 어투 > 원어민 자연스러움(다듬은 문장은 역번역을 다시 했다).
이용약관 영어판의 문법 검토에서 찾은 번역투(`means of judgment` · `injury to life` · 수식이 앞 낱말에 붙는 어순 등)는 처음부터 피해 옮겼다.

> **호칭** — 계약서라 정의어를 쓴다(용어집 §10). the “Company” → 회사, the “Customer” → 고객. `we` · `you`는 쓰지 않았다.
> 정의어: Software · License · Individual Agreement · Scope of Use · Documentation · this Agreement.

> **조동사** — 의무 `must`, 약속 `will`, 권한 `may`. `shall`은 한국어판 우선 고지 고정 문구에만 있다.

> ⚠️ **한계** — 역번역은 번역한 사람(Claude)이 직접 했다. 원문을 알고 있어 뜻을 좋게 읽어 줄 치우침이 남는다.
> 이 기록은 참고용 점검이며 변호사 검토를 대신하지 않는다.

## 공식 영문본 대조

| 대상 | 영문본 | 확인한 곳 |
|---|---|---|
| 「저작권법」 제101조의3 | Limitations on Author’s Economic Right of Program | KLRI hseq=65951 (Act No. 19597, 2023. 8. 8.) |
| 「저작권법」 제101조의4 | Decompilation of Program Codes | 같은 곳. KLRI는 '역분석'을 decompilation으로 옮긴다 |
| 「저작권법」 제101조의5 | Reproduction for Storage by Legitimate Users | 같은 곳. 한국어판의 '보존을 위한 복제 등'은 표제를 줄여 적은 것 — 영어는 공식 표제 전체를 쓴다 |
| 기술적 보호조치 | technological protection measures | 같은 법 제2조 제28호 · 제104조의2 |
| 「대외무역법」 | Foreign Trade Act | KLRI |
| 전략물자 수출입고시 | Public Notice on Trade of Strategic Items | 산업통상자원부 영문 보도자료(고시는 KLRI에 실리지 않는다) |
| 미국 수출관리규정 | U.S. Export Administration Regulations (EAR) | |
| 국제물품매매계약에 관한 국제연합 협약 | United Nations Convention on Contracts for the International Sale of Goods (CISG) | |
| 「약관의 규제에 관한 법률」 제3조 | indication of important details | KLRI hseq=64981 — 초안 안내 |
| 개인정보처리자 · 수탁자 | personal information controller · person entrusted (수탁자) | 용어집 §3 (PIPA Act No. 19234) |

## 결과

| 판정 | 수 | 뜻 |
|---|---|---|
| 일치 | 102 | 역번역이 원문과 같은 뜻 |
| **고침** | 6 | 역번역에서 뜻 · 표기 차이가 드러나 영어판을 고쳤다 |
| 의도한 차이 | 2 (+ 표 밖 1) | 원문과 다르게 옮겼고 이유가 있다 |
| 확인 필요 | 0 | |

영어판에만 있는 것: 시행일 아래 한국어판 우선 고지(용어집 §0-1).

## 판정이 "일치"가 아닌 곳

### [34] 고침 — 좁아진 곳

- 원문: 다만 제2호의 백업 목적 복제는 「저작권법」 제101조의5 …에서, 제3호의 역분석은 같은 법 제101조의4 … 및 제101조의3 …에서 허용하는 범위, **그 밖에 강행법규가 허용하는 범위**에서는 적용하지 않습니다.
- 처음: … or that **such acts** are otherwise permitted by mandatory laws.
- 고친 뒤: … or **to the extent otherwise permitted by mandatory laws.**
- 원문의 "그 밖에 강행법규가 허용하는 범위"는 제6조의 금지 전부에 걸린다. `such acts`는 앞의 백업 복제 · 역분석 두 가지로 좁혀, **고객에게 남는 법정 예외가 원문보다 줄었다**

### [40] [61] [78] [79] [91] 고침 — 원어민 자연스러움

- [40] `for reasons such as …`가 바로 앞 `transmitted`에 붙어 읽힘 → 문장 앞으로
- [61] `the persons accessing` → `the persons who accessed the system`
- [78] `the safety of human life or body`(번역투) → `protecting human life and physical safety or preventing serious property damage`
- [79] `must recognize … and independently verify`에서 verify가 앞 명사구에 걸려 읽힘 → 두 문장으로 나누고 `must`를 되풀이
- [91] `within 30 days upon the Company’s request` → `upon the Company’s request, … within 30 days`
- 다듬은 뒤 역번역을 다시 해 넓어짐 · 좁아짐이 없음을 확인했다

### [2] 의도한 차이 — '고객'에 이름을 붙였다

- 원문은 "회사"만 (이하 "회사")로 정의하고 "고객"은 따로 정의하지 않는다
- 영어에서 대문자 `Customer`를 정의 없이 쓰면 정의되지 않은 용어가 된다 → 서문에서 `the customer (the “Customer”)`로 **이름만** 붙였다. 누가 고객인지의 범위를 새로 정한 것은 아니다
- 같은 이유로 '고객 데이터'(이 문서에서는 정의어가 아니다)는 `Customer Data`가 아니라 `the Customer’s data`로 옮겼다 — [39] · [66] · [91]. 제13조 표제만 `Customer Data`(표제의 Title Case)

### [75] 의도한 차이 — 인라인 열거 번호

- 원문: 다음의 경우에는 보증이 적용되지 않습니다. ① … ② … ③ … ④ …
- 영어: … (a) … (b) … (c) … and (d) …
- 영어판의 항 번호가 (1)(2)라 같은 꼴을 쓰면 항과 열거가 섞여 읽힌다 → (a)~(d)(용어집 §10 — 목은 `(a)`)

### 참고 메모가 붙은 "일치"

- **[25]** 원문 "사용권을 추가로 구매하거나 사용을 중단하여야 합니다"의 '사용'은 앞 문장의 초과 사용이다 → `discontinue such use`. 소프트웨어 사용 전체를 멈추라는 뜻으로 넓히지 않았다(고객에게 불리하게 넓어지는 쪽)
- **[34] 제6조 단서의 호 번호** — 원문 "제2호 · 제3호"를 화면에 보이는 번호와 맞춰 `subparagraph (2)` · `subparagraph (3)`으로 적었다

## 표에 없는 2단위 — 하위 호를 품은 항

| 원문 | 영어 | 역번역 | 판정 |
|---|---|---|---|
| 소프트웨어는 라이선스의 유효성을 확인하고 사용 범위를 산정하기 위하여 다음 정보를 회사에 전송할 수 있습니다. | For the purposes of verifying the validity of the License and determining the extent of use, the Software may transmit the following information to the Company: | 라이선스의 유효성 확인과 사용 정도 산정을 위해 소프트웨어는 다음 정보를 회사에 전송할 수 있습니다. | 의도한 차이 — 원문의 '사용 범위'는 제2조 정의어(수량적 한도)인데, 한도는 계약으로 정해지는 것이라 '산정'의 대상이 될 수 없다. 뜻대로 '실제 사용량'(`the extent of use`)으로 옮기고 정의어 `Scope of Use`는 쓰지 않았다 |
| 라이선스 키, 설치 식별자, 소프트웨어 버전 · 빌드 번호 | License key, installation identifier, and Software version and build number | 라이선스 키, 설치 식별자, 소프트웨어 버전 및 빌드 번호 | 일치 |

## 영어 문법 검토 — 9단위 (2026-09-11)

역번역을 마친 뒤 영어판 전체를 문법 · 원어민 자연스러움으로 다시 읽었다. 다듬은 문장은 모두 역번역을 다시 해
넓어짐 · 좁아짐 · 세기 변화가 없음을 확인했다(아래 전체 대조 표의 역번역 칸이 고친 뒤 기준이다).

| # | 무엇이 문제였나 | 처음 | 고친 뒤 |
|---|---|---|---|
| 3 | 부정 명령(do not)과 긍정 명령(return)이 please 하나에 걸려, "설치 · 사용 · 반환하지 말라"로도 읽힘 | please do not install or use the Software, and return it | please do not install or use the Software, and please return it |
| 16 | 사용권의 효력 범위에는 `valid`가 자연스럽다 | The License is effective only within … | The License is valid only within … |
| 33 | "측정하는 행위" 자체도 금지하는 것처럼 읽힘 — 원문의 금지 대상은 동의 없는 **공표**다 | Measuring the performance of the Software and publishing the results without … consent | Publishing, without the Company’s prior written consent, the results of measuring the performance of the Software |
| 7① | 목적 부정사의 주어가 Software가 되어 "소프트웨어가 확인한다"로 읽힘 | To verify the validity of the License and determine the extent of use, the Software may transmit … | For the purposes of verifying the validity of the License and determining the extent of use, the Software may transmit … |
| 44 | 주어 되풀이 | the Customer bears the cost, and the Customer will pay the fees for the excess | the Customer bears the cost and will also pay the fees for the excess |
| 46 | `provided by third parties and open source software` — 오픈소스가 "제공한 주체"로 읽힘 | components provided by third parties and open source software | open source software and components provided by third parties |
| 73 | `fix patch`는 겹말 | provide a fix patch | provide a corrective patch |
| 81 | 명사 네 개를 겹친 번역투 | Software license and maintenance fees | license and maintenance fees for the Software |
| 95 | 조건절 두 개가 한 문장에 겹쳐 길다 — 원문의 두 단계(협의 → 소송)대로 나눈다 | …in good faith, and if they fail to reach an agreement and a lawsuit is filed, … | …in good faith. If they fail to reach an agreement and a lawsuit is filed, … |

> **[33] 메모** — 원문 "소프트웨어의 성능을 측정하여 회사의 사전 서면 동의 없이 그 결과를 공표하는 행위". 처음 영어는
> 측정과 공표를 나란히 두어 **금지가 원문보다 넓어 보였다**(고객에게 불리하게 넓어지는 쪽). 고친 뒤 금지 대상은 공표 하나다.

## 단위별 전체 대조

| # | 원문 | 영어 | 역번역 | 판정 |
|---|---|---|---|---|
| 0 | 소프트웨어 사용권 계약 (EULA) | Software License Agreement (EULA) | 소프트웨어 사용권 계약(EULA) | 일치 |
| 1 | 시행일 : 2026-09-01 | Effective date: September 1, 2026 | 시행일: 2026년 9월 1일 | 일치 |
| 2 | 본 소프트웨어 사용권 계약(이하 "본 계약")은 주식회사 베텍(이하 "회사")가 온프레미스(고객 설치) 방식으로 제공하는 Refinery 설치형 소프트웨어(데이터 수집 장치인 Gateway · Silo, 서버 구성요소 및 부속 도구를 포함하며 이하 "소프트웨어")의 사용권에 관하여 회사와 고객 간의 권리 · 의무를 정합니다. | This Software License Agreement (this “Agreement”) sets forth the rights and obligations between VETEC Co., Ltd. (the “Company”) and the customer (the “Customer”) regarding the license for the Refinery installable software (including the Gateway and Silo data collection devices, server components, and accessory tools; the “Software”) that the Company provides on an on-premises (customer-installed) basis. | 본 소프트웨어 사용권 계약(이하 "본 계약")은 회사가 온프레미스(고객 설치) 방식으로 제공하는 Refinery 설치형 소프트웨어(데이터 수집 장치인 Gateway와 Silo, 서버 구성요소 및 부속 도구를 포함하며, 이하 "소프트웨어")의 사용권에 관하여 주식회사 베텍(이하 "회사")과 고객(이하 "고객") 사이의 권리와 의무를 정합니다. | 의도한 차이 |
| 3 | 고객이 소프트웨어를 설치 · 복제하거나 사용하는 경우 본 계약의 모든 내용에 동의한 것으로 봅니다. 동의하지 않는 경우 소프트웨어를 설치 · 사용하지 마시고 지체 없이 회사에 반환하시기 바랍니다. | By installing, copying, or using the Software, the Customer is deemed to have agreed to all terms of this Agreement. If the Customer does not agree, please do not install or use the Software, and please return it to the Company without delay. | 소프트웨어를 설치·복제 또는 사용하면 고객은 본 계약의 모든 조건에 동의한 것으로 봅니다. 고객이 동의하지 않는 경우 소프트웨어를 설치하거나 사용하지 마시고, 지체 없이 회사에 반환해 주십시오. | 일치 |
| 4 | 클라우드로 제공되는 Refinery 서비스의 이용에 관하여는 이용약관이, 개인정보의 처리에 관하여는 개인정보처리방침이 각각 적용됩니다. | Use of the Refinery service provided via the cloud is governed by the Terms of Service, and the processing of personal information is governed by the Privacy Policy. | 클라우드로 제공되는 Refinery 서비스의 이용은 이용약관이, 개인정보의 처리는 개인정보처리방침이 규율합니다. | 일치 |
| 5 | 제1조 (목적) | Article 1 (Purpose) | 제1조 (목적) | 일치 |
| 6 | 본 계약은 회사가 고객에게 소프트웨어의 사용을 허락하는 조건과 범위, 당사자의 권리 · 의무 및 책임에 관한 사항을 정함을 목적으로 합니다. | The purpose of this Agreement is to set forth the conditions and scope under which the Company permits the Customer to use the Software, and the rights, obligations, and responsibilities of the parties. | 본 계약의 목적은 회사가 고객에게 소프트웨어의 사용을 허락하는 조건과 범위, 그리고 당사자의 권리·의무 및 책임을 정하는 것입니다. | 일치 |
| 7 | 제2조 (용어의 정의) | Article 2 (Definitions) | 제2조 (정의) | 일치 |
| 8 | "소프트웨어"란 회사가 제공하는 실행 파일, 라이브러리, 컨테이너 이미지, 설정 파일, 부속 문서 및 이에 대한 수정본 · 업데이트를 말합니다. | “Software” means the executable files, libraries, container images, configuration files, and accompanying documents provided by the Company, and any modified versions of and updates to them. | "소프트웨어"란 회사가 제공하는 실행 파일, 라이브러리, 컨테이너 이미지, 설정 파일, 부속 문서와 이에 대한 모든 수정본 및 업데이트를 말합니다. | 일치 |
| 9 | "사용권"이란 본 계약과 개별계약에서 정한 범위 내에서 소프트웨어를 설치 · 실행할 수 있는 권리를 말합니다. | “License” means the right to install and run the Software within the scope set out in this Agreement and the Individual Agreement. | "사용권"이란 본 계약과 개별계약에서 정한 범위에서 소프트웨어를 설치하고 실행할 권리를 말합니다. | 일치 |
| 10 | "개별계약"이란 사용권의 유형 · 범위 · 기간 · 대가를 정하기 위하여 회사와 고객이 체결하는 계약서, 주문서, 견적서 및 이에 부속하는 문서를 말합니다. | “Individual Agreement” means the contracts, order forms, and quotations, and any documents attached to them, that the Company and the Customer enter into to determine the type, scope, term, and fees of the License. | "개별계약"이란 사용권의 유형, 범위, 기간, 대가를 정하기 위해 회사와 고객이 체결하는 계약서, 주문서, 견적서 및 이에 첨부된 문서를 말합니다. | 일치 |
| 11 | "사용 범위"란 개별계약에서 정한 설치 사업장 수, 서버 · 노드 수, 연동 설비 · 태그 수, 지정 사용자 수 등 사용권의 수량적 한도를 말합니다. | “Scope of Use” means the quantitative limits of the License set out in the Individual Agreement, such as the number of installation sites, servers and nodes, connected equipment items and tags, and named users. | "사용 범위"란 개별계약에서 정한 사용권의 수량적 한도로서 설치 사업장 수, 서버·노드 수, 연동 설비·태그 수, 지정 사용자 수 등을 말합니다. | 일치 |
| 12 | "문서"란 회사가 제공하는 설치 안내서, 운영 매뉴얼, 제품 사양서를 말합니다. | “Documentation” means the installation guides, operation manuals, and product specifications provided by the Company. | "문서"란 회사가 제공하는 설치 안내서, 운영 매뉴얼, 제품 사양서를 말합니다. | 일치 |
| 13 | 제3조 (사용권의 부여) | Article 3 (Grant of License) | 제3조 (사용권의 부여) | 일치 |
| 14 | 회사는 고객이 개별계약에 따른 대가를 지급하는 것을 조건으로, 고객에게 비독점적이고 양도 및 재실시(sublicense)가 불가능한 사용권을 부여합니다. | Subject to the Customer’s payment of the fees under the Individual Agreement, the Company grants the Customer a non-exclusive, non-transferable, and non-sublicensable License. | 고객이 개별계약에 따른 대가를 지급하는 것을 조건으로, 회사는 고객에게 비독점적이고 양도 불가능하며 재실시 불가능한 사용권을 부여합니다. | 일치 |
| 15 | 사용권은 고객의 내부 업무 목적으로만 행사할 수 있습니다. | The Customer may exercise the License only for its internal business purposes. | 고객은 사용권을 자신의 내부 업무 목적으로만 행사할 수 있습니다. | 일치 |
| 16 | 사용권은 개별계약에서 정한 사용 범위와 계약기간 내에서만 효력이 있습니다. | The License is valid only within the Scope of Use and the contract term set out in the Individual Agreement. | 사용권은 개별계약에서 정한 사용 범위와 계약기간 내에서만 유효합니다. | 일치 |
| 17 | 본 계약은 소프트웨어의 사용을 허락하는 것이며, 소프트웨어를 판매하거나 그에 관한 권리를 이전하는 것이 아닙니다. | This Agreement permits the use of the Software and does not sell the Software or transfer any rights in it. | 본 계약은 소프트웨어의 사용을 허락하는 것이며, 소프트웨어를 판매하거나 그에 관한 권리를 이전하지 않습니다. | 일치 |
| 18 | 제4조 (사용권의 유형) | Article 4 (Types of Licenses) | 제4조 (사용권의 유형) | 일치 |
| 19 | 구독형 사용권: 개별계약에서 정한 기간 동안 소프트웨어를 사용할 수 있으며, 기간이 만료되면 사용권이 소멸합니다. | Subscription license: The Customer may use the Software for the period set out in the Individual Agreement, and the License expires when that period ends. | 구독형 사용권: 고객은 개별계약에서 정한 기간 동안 소프트웨어를 사용할 수 있으며, 그 기간이 끝나면 사용권이 소멸합니다. | 일치 |
| 20 | 영구형 사용권: 기간의 제한 없이 해당 버전의 소프트웨어를 사용할 수 있습니다. 다만 업데이트 및 기술 지원은 별도의 유지보수 계약이 유효한 기간 동안에만 제공됩니다. | Perpetual license: The Customer may use the relevant version of the Software without any time limit. However, updates and technical support are provided only while a separate maintenance agreement is in effect. | 영구형 사용권: 고객은 기간 제한 없이 해당 버전의 소프트웨어를 사용할 수 있습니다. 다만 업데이트와 기술 지원은 별도의 유지보수 계약이 유효한 동안에만 제공됩니다. | 일치 |
| 21 | 평가판 · 시험판: 회사가 정한 기간과 범위 내에서 평가 목적으로만 사용할 수 있으며, 상용 운영에 사용할 수 없습니다. 평가 기간이 종료되면 사용권이 즉시 소멸합니다. | Evaluation and trial versions: The Customer may use them for evaluation purposes only, within the period and scope set by the Company, and may not use them for commercial operations. The License expires immediately when the evaluation period ends. | 평가판·시험판: 고객은 회사가 정한 기간과 범위 내에서 평가 목적으로만 이를 사용할 수 있으며, 상용 운영에 사용할 수 없습니다. 평가 기간이 끝나면 사용권은 즉시 소멸합니다. | 일치 |
| 22 | 제5조 (사용 범위의 초과) | Article 5 (Exceeding the Scope of Use) | 제5조 (사용 범위의 초과) | 일치 |
| 23 | 고객은 개별계약에서 정한 사용 범위를 초과하여 소프트웨어를 설치 · 사용할 수 없습니다. | The Customer may not install or use the Software beyond the Scope of Use set out in the Individual Agreement. | 고객은 개별계약에서 정한 사용 범위를 넘어 소프트웨어를 설치하거나 사용할 수 없습니다. | 일치 |
| 24 | 고객이 사용 범위를 초과한 경우, 회사는 초과분에 대하여 개별계약에서 정한 단가(정함이 없는 경우 회사의 정가)에 따라 추가 대가를 청구할 수 있습니다. 회사는 청구에 앞서 초과 사실과 산정 근거를 고객에게 통지합니다. | If the Customer exceeds the Scope of Use, the Company may charge additional fees for the excess at the unit price set out in the Individual Agreement (or, if none is set, at the Company’s list price). The Company will notify the Customer of the excess and the basis of calculation before charging. | 고객이 사용 범위를 초과하는 경우, 회사는 초과분에 대하여 개별계약에서 정한 단가(정함이 없으면 회사의 정가)로 추가 대가를 청구할 수 있습니다. 회사는 청구 전에 초과 사실과 산정 근거를 고객에게 통지합니다. | 일치 |
| 25 | 고객은 초과 사용 사실을 인지한 경우 지체 없이 회사에 통지하고 사용권을 추가로 구매하거나 사용을 중단하여야 합니다. | If the Customer becomes aware that it has exceeded the Scope of Use, it must notify the Company without delay and either purchase additional licenses or discontinue such use. | 고객이 사용 범위를 초과한 사실을 알게 된 경우, 지체 없이 회사에 통지하고 사용권을 추가로 구매하거나 그러한 사용을 중단하여야 합니다. | 일치 |
| 26 | 제6조 (금지행위) | Article 6 (Prohibited Acts) | 제6조 (금지행위) | 일치 |
| 27 | 고객은 다음 각 호의 행위를 하여서는 안 됩니다. | The Customer must not engage in any of the following acts: | 고객은 다음 각 호의 행위를 하여서는 안 됩니다. | 일치 |
| 28 | 소프트웨어를 제3자에게 판매 · 대여 · 재실시하거나, 호스팅 · 수탁운영 등의 방법으로 제3자가 사용하도록 하는 행위. 다만 개별계약에서 명시적으로 허용한 경우는 예외로 합니다. | Selling, renting, or sublicensing the Software to a third party, or allowing a third party to use it through hosting, outsourced operation, or similar means, except where expressly permitted in the Individual Agreement | 소프트웨어를 제3자에게 판매·대여·재실시하거나, 호스팅·수탁운영 등의 방법으로 제3자가 사용하도록 하는 행위. 다만 개별계약에서 명시적으로 허용한 경우는 제외합니다 | 일치 |
| 29 | 소프트웨어를 복제 · 개작 · 번안하거나 2차적 저작물을 작성하는 행위. 다만 백업 목적의 복제는 허용됩니다. | Reproducing, modifying, or adapting the Software, or creating derivative works from it, except that reproduction for backup purposes is permitted | 소프트웨어를 복제·개작·번안하거나 2차적 저작물을 작성하는 행위. 다만 백업 목적의 복제는 허용됩니다 | 일치 |
| 30 | 소프트웨어를 역분석(reverse engineering) · 역컴파일 · 역어셈블하는 행위 | Reverse engineering, decompiling, or disassembling the Software | 소프트웨어를 역분석·역컴파일·역어셈블하는 행위 | 일치 |
| 31 | 라이선스 인증, 사용량 측정, 접근 통제 등 기술적 보호조치를 회피 · 무력화하는 행위 | Circumventing or disabling technological protection measures such as license authentication, usage metering, and access control | 라이선스 인증, 사용량 측정, 접근 통제 등 기술적 보호조치를 회피하거나 무력화하는 행위 | 일치 |
| 32 | 소프트웨어에 표시된 저작권 표시, 상표, 라이선스 고지를 제거하거나 변경하는 행위 | Removing or altering copyright notices, trademarks, or license notices displayed on the Software | 소프트웨어에 표시된 저작권 표시, 상표, 라이선스 고지를 제거하거나 변경하는 행위 | 일치 |
| 33 | 소프트웨어의 성능을 측정하여 회사의 사전 서면 동의 없이 그 결과를 공표하는 행위 | Publishing, without the Company’s prior written consent, the results of measuring the performance of the Software | 회사의 사전 서면 동의 없이 소프트웨어의 성능을 측정한 결과를 공표하는 행위 | 일치 |
| 34 | 다만 제2호의 백업 목적 복제는 「저작권법」 제101조의5(보존을 위한 복제 등)에서, 제3호의 역분석은 같은 법 제101조의4(프로그램코드역분석) 및 제101조의3(프로그램의 저작재산권의 제한)에서 허용하는 범위, 그 밖에 강행법규가 허용하는 범위에서는 적용하지 않습니다. 이 경우에도 고객은 그 목적에 필요한 최소한의 범위에서만 해당 행위를 하여야 하며, 취득한 정보를 다른 목적으로 이용하거나 제3자에게 제공하여서는 안 됩니다. | However, the prohibitions above do not apply to the extent that reproduction for backup purposes under subparagraph (2) is permitted by Article 101-5 (Reproduction for Storage by Legitimate Users) of the Copyright Act, that reverse engineering under subparagraph (3) is permitted by Article 101-4 (Decompilation of Program Codes) and Article 101-3 (Limitations on Author’s Economic Right of Program) of the same Act, or to the extent otherwise permitted by mandatory laws. Even in such cases, the Customer must perform the relevant acts only to the minimum extent necessary for their purpose, and must not use the information obtained for any other purpose or provide it to any third party. | 다만 위 금지는 제2호의 백업 목적 복제가 저작권법 제101조의5(정당한 이용자에 의한 보존을 위한 복제)에 따라, 제3호의 역분석이 같은 법 제101조의4(프로그램코드역분석) 및 제101조의3(프로그램의 저작재산권의 제한)에 따라 허용되는 범위, 또는 그 밖에 강행법규가 허용하는 범위에서는 적용되지 않습니다. 이 경우에도 고객은 그 목적에 필요한 최소한의 범위에서만 해당 행위를 하여야 하며, 취득한 정보를 다른 목적으로 이용하거나 제3자에게 제공하여서는 안 됩니다. | 고침 |
| 35 | 제7조 (라이선스 인증 및 사용 현황 정보) | Article 7 (License Authentication and Usage Information) | 제7조 (라이선스 인증 및 사용 현황 정보) | 일치 |
| 36 | 설치 환경 정보(운영체제, 호스트명, CPU · 메모리 사양) | Installation environment information (operating system, host name, and CPU and memory specifications) | 설치 환경 정보(운영체제, 호스트명, CPU·메모리 사양) | 일치 |
| 37 | 사용량 지표(연동 설비 · 태그 수, 노드 수, 계정 수, 데이터 처리량) | Usage metrics (number of connected equipment items and tags, number of nodes, number of accounts, and data throughput) | 사용량 지표(연동 설비·태그 수, 노드 수, 계정 수, 데이터 처리량) | 일치 |
| 38 | 오류 및 장애 진단 로그 | Error and failure diagnostic logs | 오류 및 장애 진단 로그 | 일치 |
| 39 | 회사는 위 정보를 라이선스 관리, 기술 지원, 제품 개선 목적으로만 이용하며, 고객 데이터의 내용이나 개인정보는 수집하지 않습니다. | The Company uses the above information only for license management, technical support, and product improvement, and does not collect the content of the Customer’s data or any personal information. | 회사는 위 정보를 라이선스 관리, 기술 지원, 제품 개선 목적으로만 이용하며, 고객 데이터의 내용이나 개인정보는 수집하지 않습니다. | 일치 |
| 40 | 고객이 폐쇄망 환경 등의 사유로 위 정보의 전송을 원하지 않는 경우, 회사는 오프라인 인증 방식을 제공할 수 있으며 이 경우 고객은 회사의 요청에 따라 사용 현황 확인서를 제출합니다. | If, for reasons such as operating in a closed-network environment, the Customer does not wish the above information to be transmitted, the Company may provide an offline authentication method, in which case the Customer will submit a written confirmation of its usage upon the Company’s request. | 폐쇄망 환경 등의 사유로 고객이 위 정보의 전송을 원하지 않는 경우, 회사는 오프라인 인증 방식을 제공할 수 있으며, 이 경우 고객은 회사의 요청에 따라 사용 현황 확인서를 제출합니다. | 고침 |
| 41 | 제8조 (라이선스 준수 확인) | Article 8 (Verification of License Compliance) | 제8조 (라이선스 준수 확인) | 일치 |
| 42 | 회사는 고객의 사용권 준수 여부를 확인하기 위하여 연 1회에 한하여 고객에게 사용 현황의 제출을 요청할 수 있으며, 고객은 요청일부터 30일 이내에 이에 응합니다. | To verify the Customer’s compliance with the License, the Company may request, no more than once a year, that the Customer submit a report of its usage, and the Customer will comply within 30 days from the date of the request. | 고객의 사용권 준수 여부를 확인하기 위해 회사는 연 1회를 넘지 않는 범위에서 고객에게 사용 현황 보고서의 제출을 요청할 수 있으며, 고객은 요청일부터 30일 이내에 이에 응합니다. | 일치 |
| 43 | 제출된 자료만으로 확인이 곤란하고 위반이 의심되는 상당한 이유가 있는 경우, 회사는 30일 전에 서면으로 통지한 후 고객의 정상 근무시간 중에 고객이 지정한 담당자의 입회 하에 현장 확인을 할 수 있습니다. 이 경우 회사는 고객의 보안 규정을 준수하여야 하며, 확인 과정에서 알게 된 정보에 대하여 비밀유지 의무를 부담합니다. | If verification is difficult based solely on the submitted materials and there are reasonable grounds to suspect a violation, the Company may, after giving 30 days’ prior written notice, conduct an on-site verification during the Customer’s normal business hours in the presence of a representative designated by the Customer. In this case, the Company must comply with the Customer’s security regulations and is bound by a duty of confidentiality regarding information learned during the verification. | 제출된 자료만으로 확인이 곤란하고 위반을 의심할 상당한 이유가 있는 경우, 회사는 30일 전에 서면으로 통지한 뒤 고객의 정상 근무시간 중에 고객이 지정한 담당자의 입회 하에 현장 확인을 할 수 있습니다. 이 경우 회사는 고객의 보안 규정을 준수하여야 하며, 확인 중 알게 된 정보에 대하여 비밀유지 의무를 집니다. | 일치 |
| 44 | 확인 비용은 회사가 부담합니다. 다만 사용 범위를 5% 이상 초과한 사실이 확인된 경우에는 고객이 부담하며, 고객은 초과분에 대한 대가를 지급합니다. | The Company bears the cost of verification. However, if it is confirmed that the Customer has exceeded the Scope of Use by 5% or more, the Customer bears the cost and will also pay the fees for the excess. | 확인 비용은 회사가 부담합니다. 다만 고객이 사용 범위를 5% 이상 초과한 것으로 확인되면 고객이 비용을 부담하고, 초과분에 대한 대가도 지급합니다. | 일치 |
| 45 | 제9조 (제3자 구성요소 및 오픈소스) | Article 9 (Third-Party Components and Open Source) | 제9조 (제3자 구성요소 및 오픈소스) | 일치 |
| 46 | 소프트웨어에는 제3자가 제공하는 구성요소와 오픈소스 소프트웨어가 포함될 수 있습니다. | The Software may include open source software and components provided by third parties. | 소프트웨어에는 오픈소스 소프트웨어와 제3자가 제공하는 구성요소가 포함될 수 있습니다. | 일치 |
| 47 | 해당 구성요소에 관하여는 각각의 라이선스 조건이 본 계약에 우선하여 적용됩니다. | For such components, their respective license terms apply in preference to this Agreement. | 해당 구성요소에는 각각의 라이선스 조건이 본 계약에 우선하여 적용됩니다. | 일치 |
| 48 | 회사는 소프트웨어에 포함된 오픈소스 구성요소의 목록과 라이선스 전문을 소프트웨어 내 고지 파일 또는 문서를 통하여 제공합니다. | The Company provides a list of the open source components included in the Software and the full texts of their licenses through notice files within the Software or through the Documentation. | 회사는 소프트웨어에 포함된 오픈소스 구성요소의 목록과 그 라이선스 전문을 소프트웨어 내 고지 파일 또는 문서를 통해 제공합니다. | 일치 |
| 49 | 회사는 제3자 구성요소 자체의 하자에 대하여 해당 제3자의 라이선스가 정하는 범위를 넘어 보증하지 않습니다. 다만 회사가 해당 구성요소를 소프트웨어에 통합한 방식에 하자가 있는 경우에는 그러하지 않습니다. | The Company does not provide any warranty with respect to defects in third-party components themselves beyond the scope provided by the relevant third party’s license. However, this does not apply where there is a defect in the way the Company integrated the component into the Software. | 회사는 제3자 구성요소 자체의 하자에 대하여 해당 제3자의 라이선스가 정하는 범위를 넘어 보증하지 않습니다. 다만 회사가 그 구성요소를 소프트웨어에 통합한 방식에 하자가 있는 경우에는 그러하지 않습니다. | 일치 |
| 50 | 제10조 (업데이트 및 기술 지원) | Article 10 (Updates and Technical Support) | 제10조 (업데이트 및 기술 지원) | 일치 |
| 51 | 회사는 유효한 구독 또는 유지보수 계약 기간 동안 소프트웨어의 업데이트와 기술 지원을 제공합니다. | The Company provides updates and technical support for the Software during the term of a valid subscription or maintenance agreement. | 회사는 유효한 구독 또는 유지보수 계약 기간 동안 소프트웨어의 업데이트와 기술 지원을 제공합니다. | 일치 |
| 52 | 업데이트에는 오류 수정, 보안 패치, 기능 개선이 포함될 수 있으며, 적용 방법과 일정은 문서 또는 개별계약에서 정합니다. | Updates may include bug fixes, security patches, and feature improvements, and the method and schedule for applying them are set out in the Documentation or the Individual Agreement. | 업데이트에는 오류 수정, 보안 패치, 기능 개선이 포함될 수 있으며, 적용 방법과 일정은 문서나 개별계약에서 정합니다. | 일치 |
| 53 | 회사는 보안 취약점 조치를 위한 업데이트를 권고할 수 있으며, 고객이 상당한 기간 내에 이를 적용하지 않아 발생한 손해에 대하여는 책임을 지지 않습니다. 다만 회사가 업데이트의 필요성이나 위험을 고지하지 않은 경우에는 그러하지 않습니다. | The Company may recommend updates to address security vulnerabilities, and is not liable for damages arising from the Customer’s failure to apply them within a reasonable period. However, this does not apply where the Company has not informed the Customer of the need for the update or the associated risks. | 회사는 보안 취약점 조치를 위한 업데이트를 권고할 수 있으며, 고객이 상당한 기간 내에 이를 적용하지 않아 발생한 손해에 대하여 책임을 지지 않습니다. 다만 회사가 업데이트의 필요성이나 관련 위험을 고객에게 알리지 않은 경우에는 그러하지 않습니다. | 일치 |
| 54 | 회사는 소프트웨어의 특정 버전에 대한 지원을 종료할 수 있으며, 이 경우 종료 예정일 12개월 전까지 고객에게 통지합니다. | The Company may end support for specific versions of the Software, in which case it will notify the Customer at least 12 months before the scheduled end date. | 회사는 소프트웨어의 특정 버전에 대한 지원을 종료할 수 있으며, 이 경우 종료 예정일 최소 12개월 전에 고객에게 통지합니다. | 일치 |
| 55 | 제11조 (고객의 설치 환경 및 책임) | Article 11 (Customer’s Installation Environment and Responsibilities) | 제11조 (고객의 설치 환경 및 책임) | 일치 |
| 56 | 고객은 문서에 기재된 시스템 요구사항을 충족하는 환경을 스스로 준비하고 유지합니다. | The Customer is responsible for preparing and maintaining an environment that meets the system requirements set out in the Documentation. | 고객은 문서에 정한 시스템 요구사항을 충족하는 환경을 준비하고 유지할 책임이 있습니다. | 일치 |
| 57 | 온프레미스 설치 환경의 운영, 보안, 접근 통제, 백업은 고객의 책임으로 합니다. 다만 개별계약에서 회사가 운영을 수탁하기로 정한 경우에는 그러하지 않습니다. | The Customer is responsible for the operation, security, access control, and backup of the on-premises installation environment. However, this does not apply where the Individual Agreement provides that the Company will operate the environment on the Customer’s behalf. | 고객은 온프레미스 설치 환경의 운영, 보안, 접근 통제, 백업에 책임이 있습니다. 다만 개별계약에서 회사가 고객을 대신하여 그 환경을 운영하기로 정한 경우에는 그러하지 않습니다. | 일치 |
| 58 | 고객은 소프트웨어가 저장 · 처리하는 데이터에 대한 백업을 정기적으로 수행하여야 하며, 백업의 부재로 인하여 확대된 손해에 대하여는 회사가 책임지지 않습니다. | The Customer must regularly back up the data stored and processed by the Software, and the Company is not liable for any increase in damages resulting from the absence of backups. | 고객은 소프트웨어가 저장·처리하는 데이터를 정기적으로 백업하여야 하며, 백업이 없어 손해가 커진 부분에 대하여 회사는 책임을 지지 않습니다. | 일치 |
| 59 | 제12조 (원격 지원) | Article 12 (Remote Support) | 제12조 (원격 지원) | 일치 |
| 60 | 회사는 고객의 요청과 사전 동의가 있는 경우에 한하여 원격 접속을 통한 기술 지원을 제공합니다. | The Company provides technical support through remote access only upon the Customer’s request and with the Customer’s prior consent. | 회사는 고객의 요청이 있고 고객이 사전에 동의한 경우에만 원격 접속을 통한 기술 지원을 제공합니다. | 일치 |
| 61 | 원격 접속은 고객이 지정한 담당자의 입회 하에 이루어지며, 회사는 접속 일시 · 접속자 · 작업 내용을 기록하여 보관합니다. | Remote access is attended by a representative designated by the Customer, and the Company records and keeps the date and time of access, the persons who accessed the system, and the work performed. | 원격 접속에는 고객이 지정한 담당자가 입회하며, 회사는 접속 일시, 접속한 사람, 수행한 작업을 기록하여 보관합니다. | 고침 |
| 62 | 회사는 원격 지원 과정에서 알게 된 고객의 정보에 대하여 비밀유지 의무를 부담합니다. | The Company is bound by a duty of confidentiality regarding the Customer’s information learned in the course of remote support. | 회사는 원격 지원 과정에서 알게 된 고객의 정보에 대하여 비밀유지 의무를 집니다. | 일치 |
| 63 | 제13조 (고객 데이터) | Article 13 (Customer Data) | 제13조 (고객 데이터) | 일치 |
| 64 | 소프트웨어가 처리하는 고객의 설비 · 공정 · 운영 데이터에 관한 일체의 권리는 고객에게 귀속합니다. | All rights to the Customer’s equipment, process, and operational data processed by the Software belong to the Customer. | 소프트웨어가 처리하는 고객의 설비·공정·운영 데이터에 관한 모든 권리는 고객에게 귀속합니다. | 일치 |
| 65 | 온프레미스로 설치된 소프트웨어가 처리하는 데이터는 고객의 시스템 내에 보관되며, 회사는 제7조의 라이선스 · 사용현황 정보를 제외하고 이를 회사의 시스템으로 전송하지 않습니다. | Data processed by the Software installed on premises is stored within the Customer’s systems, and the Company does not transmit it to the Company’s systems, except for the license and usage information under Article 7. | 온프레미스로 설치된 소프트웨어가 처리하는 데이터는 고객의 시스템 안에 보관되며, 회사는 제7조의 라이선스·사용 현황 정보를 제외하고 이를 회사의 시스템으로 전송하지 않습니다. | 일치 |
| 66 | 고객 데이터에 개인정보가 포함되고 원격 지원 등으로 회사가 해당 개인정보를 처리하게 되는 경우에 한하여, 고객이 개인정보처리자, 회사가 수탁자의 지위에 있으며 그 처리에 관하여는 별도의 개인정보 처리위탁 계약에 따릅니다. 회사가 고객의 개인정보에 접근하지 않는 경우에는 그러하지 않습니다. | The Customer is the personal information controller and the Company is the person entrusted (수탁자) only where the Customer’s data contains personal information and the Company comes to process that personal information through remote support or otherwise; in that case, the processing is governed by a separate personal information entrustment contract. This does not apply where the Company does not access the Customer’s personal information. | 고객 데이터에 개인정보가 포함되어 있고 회사가 원격 지원 등으로 그 개인정보를 처리하게 되는 경우에만 고객은 개인정보처리자, 회사는 수탁자가 되며, 이 경우 그 처리는 별도의 개인정보 처리위탁 계약이 규율합니다. 회사가 고객의 개인정보에 접근하지 않는 경우에는 그러하지 않습니다. | 일치 |
| 67 | 제14조 (지식재산권) | Article 14 (Intellectual Property Rights) | 제14조 (지식재산권) | 일치 |
| 68 | 소프트웨어 및 그 수정본 · 업데이트에 관한 저작권 등 일체의 지식재산권은 회사 또는 정당한 권리자에게 유보됩니다. | All intellectual property rights, including copyrights, in the Software and its modified versions and updates are reserved to the Company or the legitimate rights holders. | 소프트웨어와 그 수정본·업데이트에 관한 저작권을 포함한 모든 지식재산권은 회사 또는 정당한 권리자에게 유보됩니다. | 일치 |
| 69 | 본 계약은 소프트웨어의 소스코드에 대한 권리를 부여하지 않습니다. | This Agreement does not grant any rights to the source code of the Software. | 본 계약은 소프트웨어의 소스코드에 대한 어떠한 권리도 부여하지 않습니다. | 일치 |
| 70 | 고객이 회사에 제공한 개선 제안 등 피드백에 대하여 회사는 별도의 대가 지급 의무 없이 이를 제품 개선에 이용할 수 있습니다. | The Company may use feedback provided by the Customer, such as suggestions for improvement, to improve its products without any obligation to pay separate compensation. | 회사는 개선 제안 등 고객이 제공한 피드백을 별도의 대가 지급 의무 없이 제품 개선에 이용할 수 있습니다. | 일치 |
| 71 | 제15조 (보증 및 보증의 부인) | Article 15 (Warranties and Disclaimer of Warranties) | 제15조 (보증 및 보증의 부인) | 일치 |
| 72 | 회사는 인도일부터 6개월 동안 소프트웨어가 문서의 내용에 실질적으로 부합하도록 작동할 것을 보증합니다. | The Company warrants that, for six months from the date of delivery, the Software will operate in substantial conformity with the Documentation. | 회사는 인도일부터 6개월 동안 소프트웨어가 문서에 실질적으로 부합하게 작동할 것을 보증합니다. | 일치 |
| 73 | 보증 기간 내에 하자가 발견된 경우 회사는 상당한 기간 내에 수정 패치를 제공하거나 대체 방법을 안내합니다. 하자를 제거할 수 없는 경우 고객은 계약을 해지하고 해당 부분에 상응하는 대가의 반환을 청구할 수 있습니다. | If a defect is discovered during the warranty period, the Company will provide a corrective patch or guidance on a workaround within a reasonable period. If the defect cannot be remedied, the Customer may terminate the agreement and claim a refund of the fees corresponding to the affected part. | 보증 기간 중 하자가 발견되면 회사는 상당한 기간 내에 수정 패치를 제공하거나 대체 방법을 안내합니다. 하자를 제거할 수 없는 경우 고객은 계약을 해지하고 해당 부분에 상응하는 대가의 환불을 청구할 수 있습니다. | 일치 |
| 74 | 회사는 소프트웨어가 중단이나 오류 없이 작동할 것을 보증하지 않으며, 고객의 특정한 목적에 적합할 것을 보증하지 않습니다. | The Company does not warrant that the Software will operate without interruption or error, and does not warrant that it will be fit for the Customer’s particular purpose. | 회사는 소프트웨어가 중단이나 오류 없이 작동할 것을 보증하지 않으며, 고객의 특정 목적에 적합할 것을 보증하지 않습니다. | 일치 |
| 75 | 다음의 경우에는 보증이 적용되지 않습니다. ① 고객이 문서에 반하여 설치 · 설정 · 운영한 경우 ② 회사가 제공하지 않은 방법으로 소프트웨어를 변경한 경우 ③ 시스템 요구사항을 충족하지 않는 환경에서 사용한 경우 ④ 평가판 · 시험판 · 베타 기능 | The warranty does not apply in the following cases: (a) where the Customer has installed, configured, or operated the Software contrary to the Documentation; (b) where the Software has been modified by means not provided by the Company; (c) where the Software has been used in an environment that does not meet the system requirements; and (d) for evaluation versions, trial versions, and beta features. | 다음의 경우에는 보증이 적용되지 않습니다. (a) 고객이 문서에 반하여 소프트웨어를 설치·설정·운영한 경우 (b) 회사가 제공하지 않은 방법으로 소프트웨어가 변경된 경우 (c) 시스템 요구사항을 충족하지 않는 환경에서 소프트웨어가 사용된 경우 (d) 평가판·시험판·베타 기능 | 의도한 차이 |
| 76 | 본 조는 회사의 고의 또는 중대한 과실, 회사가 하자를 알면서 고지하지 않은 경우의 책임을 배제하지 않습니다. | This Article does not exclude the Company’s liability for its willful misconduct or gross negligence, or for cases where the Company knew of a defect and failed to disclose it. | 본 조는 회사의 고의 또는 중대한 과실로 인한 책임, 또는 회사가 하자를 알면서 고지하지 않은 경우의 책임을 배제하지 않습니다. | 일치 |
| 77 | 제16조 (안전 관련 용도의 제한) | Article 16 (Restrictions on Safety-Related Use) | 제16조 (안전 관련 용도의 제한) | 일치 |
| 78 | 소프트웨어는 산업 데이터의 수집 · 분석과 의사결정 보조를 목적으로 하며, 인명 · 신체의 안전이나 중대한 재산 손해의 방지에 직접 관련된 용도의 유일한 판단 또는 제어 수단으로 사용하여서는 안 됩니다. 여기에는 안전계장시스템(SIS), 비상정지 계통, 화재 · 가스 감지에 따른 자동 차단, 원자력 시설의 제어, 항공 · 철도의 운항 제어, 의료기기 및 생명 유지 장치가 포함됩니다. | The Software is intended for collecting and analyzing industrial data and supporting decision-making, and must not be used as the sole means of decision-making or control for purposes directly related to protecting human life and physical safety or preventing serious property damage. Such purposes include safety instrumented systems (SIS), emergency shutdown systems, automatic shutoffs based on fire or gas detection, control of nuclear facilities, flight and railway operation control, medical devices, and life support equipment. | 소프트웨어는 산업 데이터의 수집·분석과 의사결정 보조를 위한 것이며, 인명과 신체의 안전을 지키거나 중대한 재산 손해를 막는 일에 직접 관련된 용도의 유일한 의사결정 또는 제어 수단으로 사용되어서는 안 됩니다. 그러한 용도에는 안전계장시스템(SIS), 비상정지 계통, 화재·가스 감지에 따른 자동 차단, 원자력 시설의 제어, 항공·철도 운항 제어, 의료기기 및 생명 유지 장치가 포함됩니다. | 고침 |
| 79 | 고객은 소프트웨어와 독립된 안전 계통을 갖추어야 하며, 소프트웨어가 제공하는 이상 탐지 · 예측 결과는 고객의 판단을 보조하는 참고 자료임을 인지하고 그 타당성을 자체적으로 검증하여야 합니다. | The Customer must have a safety system independent of the Software in place. The Customer must also recognize that the anomaly detection and prediction results provided by the Software are reference materials to support the Customer’s judgment, and must independently verify their validity. | 고객은 소프트웨어와 독립된 안전 계통을 갖추어야 합니다. 또한 고객은 소프트웨어가 제공하는 이상 탐지·예측 결과가 고객의 판단을 보조하는 참고 자료임을 인지하여야 하며, 그 타당성을 스스로 검증하여야 합니다. | 고침 |
| 80 | 제17조 (책임의 제한) | Article 17 (Limitation of Liability) | 제17조 (책임의 제한) | 일치 |
| 81 | 회사가 고객에게 부담하는 손해배상책임의 총액은, 손해가 발생한 사유가 생긴 날 이전 12개월 동안 고객이 회사에 실제로 지급한 소프트웨어 사용권 및 유지보수 대가의 총액을 한도로 합니다. | The Company’s total liability for damages to the Customer is limited to the total amount of license and maintenance fees for the Software actually paid by the Customer to the Company during the 12 months preceding the date on which the cause of the damage arose. | 회사가 고객에게 지는 손해배상책임의 총액은 손해의 원인이 발생한 날 이전 12개월 동안 고객이 회사에 실제로 지급한 소프트웨어의 사용권 및 유지보수 대가의 총액으로 제한됩니다. | 일치 |
| 82 | 회사는 통상손해의 범위를 넘는 특별한 사정으로 인한 손해, 일실이익, 생산 중단으로 인한 손해에 대하여는, 회사가 그러한 사정을 알았거나 알 수 있었을 경우에 한하여 책임을 집니다. | With respect to damages arising from special circumstances beyond the scope of ordinary damages, lost profits, and damages resulting from production stoppages, the Company is liable only if it knew or could have known of such circumstances. | 통상손해의 범위를 넘는 특별한 사정으로 인한 손해, 일실이익, 생산 중단으로 인한 손해에 대하여는 회사가 그러한 사정을 알았거나 알 수 있었던 경우에만 회사가 책임을 집니다. | 일치 |
| 83 | 제1항 및 제2항은 회사의 고의 또는 중대한 과실로 인한 손해, 회사가 서면으로 보증한 사항의 위반으로 인한 손해, 인적 손해(생명 · 신체의 침해)에 대하여는 적용하지 않습니다. | Paragraphs (1) and (2) do not apply to damages arising from the Company’s willful misconduct or gross negligence, damages arising from a breach of any written warranty given by the Company, or personal injury (death or bodily injury). | 제1항과 제2항은 회사의 고의 또는 중대한 과실로 인한 손해, 회사가 서면으로 한 보증의 위반으로 인한 손해, 인적 손해(사망 또는 신체 상해)에는 적용되지 않습니다. | 일치 |
| 84 | 평가판 · 시험판 · 무상 제공 기능에 대하여 회사는 고의 또는 중대한 과실이 있는 경우에 한하여 책임을 집니다. | For evaluation versions, trial versions, and features provided free of charge, the Company is liable only in cases of willful misconduct or gross negligence. | 평가판, 시험판, 무상으로 제공되는 기능에 대하여 회사는 고의 또는 중대한 과실이 있는 경우에만 책임을 집니다. | 일치 |
| 85 | 제18조 (수출 관리) | Article 18 (Export Control) | 제18조 (수출 관리) | 일치 |
| 86 | 고객은 소프트웨어의 사용 · 이전과 관련하여 「대외무역법」 및 전략물자 수출입고시, 미국 수출관리규정(EAR) 등 적용 가능한 수출 통제 법령을 준수하여야 합니다. | In connection with the use and transfer of the Software, the Customer must comply with applicable export control laws and regulations, such as the Foreign Trade Act, the Public Notice on Trade of Strategic Items, and the U.S. Export Administration Regulations (EAR). | 고객은 소프트웨어의 사용 및 이전과 관련하여 대외무역법, 전략물자 수출입고시, 미국 수출관리규정(EAR) 등 적용 가능한 수출 통제 법령을 준수하여야 합니다. | 일치 |
| 87 | 고객은 소프트웨어를 대량살상무기의 개발 · 생산에 이용하거나, 수출이 금지된 국가 · 지역 또는 제재 대상자에게 이전하여서는 안 됩니다. | The Customer must not use the Software for the development or production of weapons of mass destruction, or transfer it to countries or regions to which export is prohibited or to sanctioned persons. | 고객은 소프트웨어를 대량살상무기의 개발이나 생산에 이용하거나, 수출이 금지된 국가·지역 또는 제재 대상자에게 이전하여서는 안 됩니다. | 일치 |
| 88 | 제19조 (계약기간 및 해지) | Article 19 (Term and Termination) | 제19조 (계약기간 및 해지) | 일치 |
| 89 | 본 계약은 고객이 소프트웨어를 최초로 설치하거나 개별계약을 체결한 날부터 효력이 발생하며, 사용권이 소멸할 때까지 존속합니다. | This Agreement takes effect on the date on which the Customer first installs the Software or enters into the Individual Agreement, and remains in effect until the License expires. | 본 계약은 고객이 소프트웨어를 최초로 설치하거나 개별계약을 체결한 날부터 효력이 발생하며, 사용권이 소멸할 때까지 존속합니다. | 일치 |
| 90 | 회사는 고객이 제6조의 금지행위를 하거나 대가를 지급하지 않는 등 본 계약을 중대하게 위반하고, 30일 이상의 기간을 정한 시정 요구를 받고도 시정하지 않는 경우 본 계약을 해지할 수 있습니다. | The Company may terminate this Agreement if the Customer materially breaches this Agreement, such as by engaging in a prohibited act under Article 6 or failing to pay the fees, and fails to cure the breach after receiving a request to cure that sets a period of at least 30 days. | 고객이 제6조의 금지행위를 하거나 대가를 지급하지 않는 등 본 계약을 중대하게 위반하고, 30일 이상의 기간을 정한 시정 요구를 받은 후에도 이를 시정하지 않는 경우 회사는 본 계약을 해지할 수 있습니다. | 일치 |
| 91 | 본 계약이 종료된 경우 고객은 지체 없이 소프트웨어의 사용을 중단하고, 설치된 모든 사본(백업본을 포함)을 삭제 · 파기하여야 하며, 회사의 요청이 있으면 30일 이내에 파기 확인서를 제출합니다. 다만 고객이 소프트웨어를 통해 축적한 고객 데이터는 고객에게 귀속하며, 고객은 이를 반출 · 보관할 수 있습니다. | When this Agreement ends, the Customer must stop using the Software without delay and delete or destroy all installed copies (including backup copies), and, upon the Company’s request, will submit a certificate of destruction within 30 days. However, data accumulated by the Customer through the Software belongs to the Customer, and the Customer may export and retain it. | 본 계약이 종료되면 고객은 지체 없이 소프트웨어의 사용을 중단하고 설치된 모든 사본(백업본 포함)을 삭제 또는 파기하여야 하며, 회사가 요청하면 30일 이내에 파기 확인서를 제출합니다. 다만 고객이 소프트웨어를 통해 축적한 데이터는 고객에게 귀속하며, 고객은 이를 반출하고 보관할 수 있습니다. | 고침 |
| 92 | 제14조(지식재산권), 제17조(책임의 제한), 제20조(준거법 및 관할) 및 비밀유지에 관한 조항은 계약 종료 후에도 효력이 존속합니다. | Article 14 (Intellectual Property Rights), Article 17 (Limitation of Liability), Article 20 (Governing Law and Jurisdiction), and the provisions concerning confidentiality survive the termination of this Agreement. | 제14조(지식재산권), 제17조(책임의 제한), 제20조(준거법 및 관할) 및 비밀유지에 관한 조항은 본 계약 종료 후에도 존속합니다. | 일치 |
| 93 | 제20조 (준거법 및 관할) | Article 20 (Governing Law and Jurisdiction) | 제20조 (준거법 및 관할) | 일치 |
| 94 | 본 계약은 대한민국 법령에 따라 규율되고 해석되며, 「국제물품매매계약에 관한 국제연합 협약(CISG)」은 적용하지 않습니다. | This Agreement is governed by and construed in accordance with the laws of the Republic of Korea, and the United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply. | 본 계약은 대한민국 법령에 따라 규율되고 해석되며, 국제물품매매계약에 관한 국제연합 협약(CISG)은 적용되지 않습니다. | 일치 |
| 95 | 본 계약과 관련하여 분쟁이 발생한 경우 양 당사자는 성실히 협의하며, 협의가 이루어지지 않아 소송이 제기되는 경우 그 제1심 관할법원은 회사의 본점 소재지를 관할하는 법원으로 합니다. 다만 이는 전속적 합의가 아니며, 법령상 인정되는 다른 관할을 배제하지 않습니다. | If a dispute arises in connection with this Agreement, the parties will consult in good faith. If they fail to reach an agreement and a lawsuit is filed, the court having jurisdiction over the location of the Company’s head office will be the court of first instance. However, this is not an exclusive jurisdiction agreement and does not exclude any other jurisdiction recognized by law. | 본 계약과 관련하여 분쟁이 발생한 경우 당사자들은 성실히 협의합니다. 합의에 이르지 못하여 소송이 제기되는 경우 회사의 본점 소재지를 관할하는 법원을 제1심 법원으로 합니다. 다만 이는 전속적 관할 합의가 아니며 법률상 인정되는 다른 관할을 배제하지 않습니다. | 일치 |
| 96 | 제21조 (기타) | Article 21 (Miscellaneous) | 제21조 (기타) | 일치 |
| 97 | 본 계약의 일부 조항이 무효이거나 집행할 수 없더라도 나머지 조항의 효력에는 영향을 미치지 않습니다. | Even if any provision of this Agreement is invalid or unenforceable, the validity of the remaining provisions is not affected. | 본 계약의 어느 조항이 무효이거나 집행할 수 없더라도, 나머지 조항의 효력에는 영향이 없습니다. | 일치 |
| 98 | 본 계약과 개별계약의 내용이 다른 경우 개별계약이 우선합니다. | If the contents of this Agreement and the Individual Agreement differ, the Individual Agreement prevails. | 본 계약과 개별계약의 내용이 다르면 개별계약이 우선합니다. | 일치 |
| 99 | 회사는 본 계약을 변경할 수 있으며, 변경 시 시행일 30일 전까지 고객에게 통지합니다. 고객이 변경에 동의하지 않는 경우 시행일 전일까지 이의를 제기하고 계약을 해지할 수 있으며, 이 경우 회사는 잔여기간에 해당하는 대가를 일할 계산하여 환불합니다. 다만 이미 부여된 영구형 사용권의 범위는 변경에 의하여 축소되지 않습니다. | The Company may amend this Agreement, and will notify the Customer of any amendment at least 30 days before its effective date. If the Customer does not agree to the amendment, the Customer may raise an objection by the day before the effective date and terminate the agreement, in which case the Company will refund, on a pro rata daily basis, the fees corresponding to the remaining term. However, the scope of any perpetual license already granted will not be reduced by an amendment. | 회사는 본 계약을 변경할 수 있으며, 변경 시 시행일 최소 30일 전에 고객에게 통지합니다. 고객이 변경에 동의하지 않으면 시행일 전날까지 이의를 제기하고 계약을 해지할 수 있으며, 이 경우 회사는 잔여 기간에 해당하는 대가를 일할로 환불합니다. 다만 이미 부여된 영구형 사용권의 범위는 변경으로 축소되지 않습니다. | 일치 |
| 100 | 부칙 | Addenda | 부칙 | 일치 |
| 101 | 본 계약은 2026-09-01부터 시행합니다. 개정 이력은 아래와 같습니다. | This Agreement is effective as of September 1, 2026. The revision history is as follows. | 본 계약은 2026년 9월 1일부터 시행합니다. 개정 이력은 다음과 같습니다. | 일치 |
| 102 | 시행일 | Effective date | 시행일 | 일치 |
| 103 | 주요 변경 | Summary of changes | 주요 변경 | 일치 |
| 104 | 전문 | Full text | 전문 | 일치 |
| 105 | 2026-09-01 | September 1, 2026 | 2026년 9월 1일 | 일치 |
| 106 | 최초 제정 | Initial version | 최초 버전 | 일치 |
| 107 | 현행 | Current | 현행 | 일치 |
| 108 | 문의처 | Contact | 문의처 | 일치 |
| 109 | 본 계약에 관한 문의는 아래 연락처 또는 문의하기로 접수하실 수 있습니다. | For inquiries about this Agreement, please use the contact details below or the Contact page. | 본 계약에 관한 문의는 아래 연락처 또는 문의하기 페이지를 이용해 주십시오. | 일치 |
