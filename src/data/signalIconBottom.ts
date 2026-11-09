// 신호 아이콘 WebP 안에서 그림 아랫변 밑으로 비어 있는 높이 — 캔버스(512px) 대비 %.
//
// 아이콘마다 이 값이 2.7% ~ 33.2% 로 제각각이라(체온계는 거의 바닥까지, 유량계는
// 3분의 1이 빔), 그림자를 상자 기준으로만 놓으면 그림과 그림자 사이가 아이콘마다
// 달라 보인다. UseCasePage 가 이 값을 --ic-b 로 넘겨 그림자를 그림 아랫변에 맞춘다.
//
// 측정법: 각 WebP 를 캔버스에 그려 알파 > 12 인 가장 아래 줄을 찾고,
//   (높이 - 1 - 그줄) / 높이 x 100. 아이콘을 다시 뽑으면 다시 재야 한다.
// 단위를 % 로 두는 이유: bottom 의 백분율은 담는 상자 높이로 풀리므로
//   아이콘 크기를 바꿔도 비율이 따라온다.
export const signalIconBottom: Record<string, number> = {
  'current': 3.32,
  'emission': 21.09,
  'flow': 33.2,
  'frequency': 27.93,
  'harmonics-thd': 17.58,
  'humidity': 4.88,
  'imbalance': 20.31,
  'inspection': 8.98,
  'intensity': 6.84,
  'load-factor': 23.63,
  'material-lot': 6.25,
  'operating-history': 9.57,
  'peak': 8.2,
  'power': 4.69,
  'power-factor': 8.98,
  'pressure': 8.4,
  'process-conditions': 8.2,
  'production': 11.72,
  'sag-swell': 17.58,
  'temperature': 4.69,
  'utilities': 14.45,
  'vibration': 7.42,
  'voltage': 2.73,
};
