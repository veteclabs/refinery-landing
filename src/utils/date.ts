/** 한국어 화면의 날짜 표기: 2026. 07. 31
 *
 *  월·일을 두 자리로 채운다 — 목록에서 카드마다 자릿수가 달라지면 날짜 줄의
 *  길이가 흔들려 보인다(7월 3일 vs 12월 31일).
 *
 *  UTC로 읽는 이유: 글의 pubDate는 날짜만 적힌 값이라 자정 UTC로 해석된다.
 *  지역 시간으로 읽으면 UTC보다 뒤쳐진 시간대(미주 등)에서 빌드할 때 하루가
 *  밀린다. <time datetime>에 넣는 toISOString()도 UTC라 둘이 어긋나지 않는다.
 *
 *  영어 화면은 이 함수를 쓰지 않는다 — 그쪽은 'July 31, 2026'이 맞는 표기다.
 */
export const formatDateKo = (d: Date) =>
  `${d.getUTCFullYear()}. ${String(d.getUTCMonth() + 1).padStart(2, '0')}. ${String(
    d.getUTCDate()
  ).padStart(2, '0')}`;
