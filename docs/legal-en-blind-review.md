# 법적 고지 영어판 — 블라인드 역번역 검증

대상: 개인정보처리방침 · 이용약관 · 소프트웨어 사용권 계약(EULA) · 쿠키 정책 영어판 · 2026-09-11 ~ 09-15

## 왜 했나

문서별 역번역(`legal-en-backtranslation-*.md`)은 번역한 사람(Claude)이 원문을 알고서 했다. 원문을 아는 사람은 영어를
원문 뜻대로 좋게 읽어 주는 치우침이 남는다. 그래서 **원문을 보지 못한 번역자**가 영어판만 보고 한국어로 되돌리게 하고,
그 결과를 원문과 맞댔다.

## 방법

1. 네 문서의 영어판 · 한국어판을 빌드 결과(`dist/`)에서 같은 규칙으로 뽑아 단위(제목 · 문단 · 목록 · 표 칸)마다 번호를 매겼다 — 692단위, 두 판 번호 1:1
2. **블라인드 역번역** — 문서마다 별도 에이전트가 영어 파일 하나만 읽고 한국어로 옮겼다. 한국어 원문 · 소스 · 용어집은 열지 못하게 했다.
   영어가 두 가지로 읽히는 곳(수식어가 걸리는 자리 · 범위 · 부정문 속 and/or)은 따로 표시하게 했다
3. **원문 대조** — 또 다른 에이전트가 원문 · 영어 · 블라인드 역번역을 단위별로 맞대 판정했다(용어집 §11 순서: 넓어진 곳 > 좁아진 곳 > 세기 > 두 가지로 읽힘)
4. 대조에서 짚힌 곳은 Claude가 원문과 한 줄씩 다시 확인해 고칠 곳 · 원문 문제 · 문제 아님으로 갈랐다
5. 고친 문장만 **다시 블라인드 역번역**해 원문과 같은 뜻으로 돌아오는지 확인했다

> 한계 — 블라인드 번역자도 같은 계열의 AI다. 원문을 아는 치우침은 빠지지만 독립된 사람 번역자만큼 독립적이지는 않다.
> 게시 전 최종 확인은 법률 번역가의 블라인드 역번역이나 변호사 검토로 한다. 번역기(DeepL · Google) 역번역 대조도 따로 진행 중이다.

## 결과

| 문서 | 단위 | 원문과 같음 | 영어를 고침 | 한국어 원문 확인 필요 |
|---|---|---|---|---|
| 개인정보처리방침 | 287 | 283 | 4 | 0 |
| 이용약관 | 177 | 170 | 7 | 1 |
| EULA | 126 | 123 | 2 | 1 |
| 쿠키 정책 | 102 | 99 | 3 | 0 |
| **합계** | **692** | **675** | **16** | **2** |

숫자 · 기간 · 조문 번호 · 보유기간 · 법적 근거 · 수집 항목에서 틀린 곳은 0이다. 고친 곳은 모두 영어 문장 구조 때문에 두 가지로
읽히거나, '등' · '종료' 같은 말의 범위가 달라진 곳이다.

## 영어를 고친 16곳

| # | 위치 | 문제 | 전 | 후 |
|---|---|---|---|---|
| 1 | 처리방침 10항 | **넓어질 위험** — `such data`가 고객 데이터 전체로도 읽혀 AI 학습 금지가 원문(식별 가능한 형태만)보다 커졌다 | We do not use Customer Data in any form that can identify … for our marketing, nor do we use such data to train AI models | Customer Data in a form that can identify a customer or an individual is not used for our marketing, and is not used to train AI models |
| 2 | 처리방침 17항 | '식별 가능한 형태'가 문의 내용 · 계약 정보까지 걸려 약속이 좁아질 수 있었다 | …: inquiry details, contract information, and Customer Data in any form that can identify … | …: inquiry details; contract information; and any Customer Data that can identify … |
| 3 | 이용약관 제13조⑤ | 최고만 보내면 곧바로 중지 · 해지할 수 있다고도 읽혔다 | …may, after sending a demand for performance that sets a period of at least 14 days, suspend… | If … and the Customer does not pay within a period of at least 14 days set in a demand for performance, the Company may suspend… |
| 4 | EULA 제6조 1호 | 개별계약 허용 예외가 뒤쪽 '호스팅 등'에만 걸렸다 · '수탁운영'의 방향이 흐렸다 | Selling, … or similar means, except where expressly permitted in the Individual Agreement · outsourced operation | Except where expressly permitted in the Individual Agreement, selling, … · operation on a third party’s behalf |
| 5 | EULA 제19조④ | '종료'를 termination(해지)로 옮겨 기간 만료로 끝날 때 존속 조항이 빠지는 것처럼 읽혔다 | …survive the termination of this Agreement | …remain in effect after this Agreement ends |
| 6 | 이용약관 제18조④ | 5와 같다 | …survive for three years after the termination of the agreement | …remain in effect for three years after the agreement ends |
| 7 | 이용약관 제15조③ | '등'이 빠져 세 가지로 한정됐다 | Service availability (SLA), … may be set out… | Matters such as service availability (SLA), … may be set out… |
| 8 | 처리방침 1항 | '장애 대응'이 보안 사고 대응까지 넓게 읽혔다 | incident response | response to service failures |
| 9 | 이용약관 제17조② | 8과 같다 | respond to incidents | respond to service failures |
| 10 | 이용약관 제18조③ | `disclosing party`가 같은 조의 `receiving party`와 짝을 이뤄 정보를 처음 준 쪽으로 읽혔다 | the disclosing party | the party making the disclosure |
| 11 | 이용약관 제2조 3호 | '이용자' 정의가 목적(열람하려고 접속하는 자)으로 읽혔다 | accesses the Website to view information or submit inquiries | accesses the Website and views information or submits inquiries |
| 12 | 쿠키 정책 2항 | `on this website`가 앞 절까지 걸려 맞춤형 광고 미제공이 이 사이트로 좁아졌다 | We do not provide personalized advertising and do not allow… | We do not provide personalized advertising, and we do not allow… |
| 13 | 쿠키 정책 4항 | 마스킹을 session replay로 한정했다(원문은 기능을 한정하지 않음) | We have configured session replay to mask all input values | We have configured all input values to be masked |
| 14 | 이용약관 제23조① | `in the Republic of Korea`가 침해 장소가 아니라 권리에 걸렸다 | infringes the third party’s intellectual property rights in the Republic of Korea | infringes, in the Republic of Korea, the third party’s intellectual property rights |
| 15 | 처리방침 1항 | '제안' 자체가 목적으로도 읽혔다 | scheduling demos and proposals | coordinating schedules for demos and proposals |
| 16 | 쿠키 정책 3항 표 | 뜻은 같고 모호함만 덜었다 | usage by page | per-page usage |

굵게 표시는 한국어판과 같은 자리 · 같은 수로 두었다(처리방침 10항은 'AI 학습에 이용하지 않는다' 부분).

## 다시 한 블라인드 역번역 — 17단위

고친 16곳에 더해, 같은 기간 develop에 들어온 커밋 `b2d4e2a`가 바꾼 처리방침 9항 문장(국외 이전 고지 방법) 1곳을 함께 돌렸다.
**17단위 모두 원문과 같은 뜻으로 돌아왔다.** 블라인드 번역자가 남긴 '두 가지로 읽힘' 9곳은 모두 한국어 원문에도 같은 모호함이
있는 곳이다(예: '사전 서면 동의 없이'가 두 동사에 다 걸리는지, '가능한 범위에서'가 통지 전체에 걸리는지).

## 한국어 원문 확인이 필요한 곳 — 영어는 원문을 그대로 따른다

| 위치 | 내용 |
|---|---|
| ~~이용약관 제3조⑤~~ | **해결(2026-09-17)** — 이의 제기 기한이 앞 문장 '적용일자 전일까지', 뒤 문장 '적용일자까지'로 어긋났다. 사용자 결정(A안)으로 **둘 다 '적용일자 전일까지'**로 통일하고 한국어판 · 영어판(by the day before the effective date)을 함께 고쳤다 |
| EULA 제10조③ 단서 | '업데이트의 **필요성이나 위험**을 고지하지 않은 경우' — 하나라도 안 알리면 회사 책임인지, 둘 다 안 알려야 책임인지 원문도 모호하다 |

## 문제 아님으로 판단한 것

- 쿠키 정책 2항 '필수 쿠키를 제외한'이 영어에 없는 것 — 필수 쿠키는 분석 쿠키가 아니라 범위가 같다. 직역했을 때 오히려 넓어져 이전 검토에서 뺀 곳이다(`legal-en-backtranslation-cookie.md`)
- 대검찰청 기관명, 대표자 `YJ Choi` — 공식 영문명 대조를 마쳤고, 대표자 표기는 사용자가 준 값이다
- 한국어 원문에도 같은 모호함이 있는 약 30곳 — 번역 문제가 아니다

## 번역기 역번역 대조 (B) — 개인정보처리방침 2026-09-17

블라인드 역번역(A)과 **다른 엔진**으로 한 번 더 걸렀다. 영어판을 1500자 조각으로 나눠 번역기로 한국어로 되돌린 뒤(287단위),
원문과 단위별로 맞댔다. 기계 번역 특유의 표현 차이(범주/분류 · 파기/삭제 · 재현/재생 등)와 이미 정한 표기 차이(미국식 날짜 ·
국제 전화 표기 · `PIPA` 약칭 · `Section N` · (1)(2)(3) · 공식 기관명)는 판정에서 뺐다.

결과 — 283단위 일치, **4곳 고침**. 조문 번호 · 법적 근거 · 보유기간 · 동의 필요 여부 · 수집 항목 · 수신자는 모두 일치.

| 단위 | 위치 | 문제 | 전 → 후 |
|---|---|---|---|
| 41 | 1항 서비스 운영 목적 | **좁아진 곳** — '부정이용 방지'를 사기(fraud)로 좁혔다. 원문은 계정 도용 · 무단 사용까지 포함한다 | fraud prevention → **prevention of unauthorized use** |
| 224 | 18항 보호책임자 지정 | '불만처리 및 피해구제 **등**'의 '등'이 빠져 역할이 닫힌 목록이 됐다 | …complaints and remedy damages → …complaints, remedy damages, **and address similar matters** |
| 235 | 18항 문의 안내 | 같은 유형('문의, 불만처리, 피해구제 **등**') | …or remedies for damages → …remedies for damages, **or other related matters** |
| 237 | 19항 열람청구 | **세기가 달라진 곳** — '노력하겠습니다'가 '최선을 다하겠습니다'로 세졌다 | make every effort to → **endeavor to** |

41은 **블라인드 역번역이 놓친 곳**이다. 블라인드 번역자는 `fraud prevention`을 '부정 이용 방지'로 되돌려 차이가 드러나지
않았는데, 번역기는 '사기 방지'로 옮겨 보였다. 서로 다른 두 방식을 함께 쓰는 이유가 여기 있다.

고친 4곳은 다시 블라인드 역번역해 '부정 이용 방지' · '이와 유사한 사항' · '그 밖의 관련 사항' · '노력하겠습니다'로
원문과 같은 뜻으로 돌아오는 것을 확인했다.

고치지 않은 것 — 성명 이니셜(`HS Yoon` · `YJ Choi`)과 영문 주소는 사용자가 준 값이다. 다만 개인정보 보호법 제30조가
보호책임자의 **성명**을 적도록 하므로, 영어판에서 성을 풀어 적을지는 따로 정한다(미정).

### 나머지 세 문서 — 2026-09-17 ~ 09-18

| 문서 | 단위 | 일치 | 본문에서 고친 곳 |
|---|---|---|---|
| 이용약관 | 177 | 175 | 0 |
| EULA | 126 | 124 | 0 |
| 쿠키 정책 | 102 | 100 | 0 |

세 문서 모두 **본문에서 뜻이 달라진 곳은 없었다.** 확인한 것 —
- 이용약관: 통지 기간(7 · 30 · 14 · 60~30 · 90일), 해지 · 환불 조건, 면책 등급 구분(제12조② · 제22조④ 도입부는 '고의 또는 과실', 제21조⑤ · 제22조③은 '고의 또는 중대한 과실'), 책임 한도, '다만' 단서 20곳, '등'의 처리, 의무 방향(회사↔고객)
- EULA: 보증 6개월, 지원 종료 12개월 전 통지, 준수 확인 연 1회 · 30일, 초과 5%, 시정 요구 30일, 변경 통지 30일 전 · 이의 시행일 전일까지, 배상 한도 12개월, 저작권법 제101조의5 · 101조의4 · 101조의3 인용
- 쿠키 정책: 보관 기간 전부(1년 · 최대 2년/14개월 · 브라우저 저장소 삭제 시까지/12개월 · 세션 리플레이 30일), 쿠키 이름 · 제공자 · 도구별 역할, 동의 조건, 부정문

짚혔으나 고치지 않은 것 —
- **성명 · 주소 표기**(세 문서 공통): 번역기가 `YJ Choi`를 '최용진'이라는 다른 이름으로 되돌렸다. 이니셜만으로는 누구인지 특정되지 않는다는 뜻이다.
  성을 풀어 쓰거나(`Youngjun Choi`) 한글을 병기하는(`Youngjun Choi (최영준)`) 안을 제시했으나 **2026-09-18 사용자 결정: 지금 표기를 유지한다**(주소의 '(관평동)' 병기도 하지 않는다). 사용자가 준 값이라 임의로 바꾸지 않는다.
- **쿠키 정책 4항 `inquirers`**: 번역기가 '조회자'로 되돌려 모호함을 의심했으나, `inquirer`는 사전적으로 '문의하는 사람'이고 '조회자'도 같은 뜻의 다른 낱말이다. 번역 문제가 아니다(2026-09-18).
- **폼 항목의 '연락처' → `phone number`**: 문의 폼의 해당 칸이 실제로 전화번호를 받는 칸이라 이미 정해 둔 표기다.

## 마무리 — 검증 두 갈래를 모두 마쳤다

| 방식 | 대상 | 결과 |
|---|---|---|
| A. 블라인드 역번역(원문을 모르는 번역자) | 692단위 | 16곳 고침 · 한국어 원문 문제 2곳 발견(1곳 해결, 1곳 보류) |
| B. 번역기 역번역(다른 엔진) | 692단위 | 4곳 고침(모두 처리방침) |

두 방식이 서로 다른 곳을 짚었다 — A는 문장 구조에서 생기는 모호함(수식어가 걸리는 자리 · 예외의 범위)에, B는 낱말의 폭(부정이용 → fraud, '등'의 누락, 노력 → 최선)에 강했다.
남은 최종 확인은 사람 번역가의 블라인드 역번역이나 변호사 검토다(용어집 §11 변호사 질문 Q1 · Q3).
