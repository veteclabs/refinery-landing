/* 02 섹션 그림을 카드 세로 가운데에 세우는 값 — 그림마다 다르다.
 *
 * 아래 페이드 때문에 '그림 상자의 가운데'와 '눈에 보이는 띠의 가운데'가
 * 어긋난다. 상자를 그대로 가운데 두면 지워진 아래쪽만큼 아래가 비어 보인다.
 * 여기 적힌 값은 보이는 띠가 카드 한가운데 오도록 그림을 옮기는 양이고,
 * 단위는 '그림 제 높이에 대한 %'라 화면 폭이 바뀌어도 그대로 맞는다.
 *
 * 값을 구한 방법
 *   1. 1440 폭에서 카드를 한 장씩 찍는다.
 *   2. 행마다 카드 면(#F6F8FA)과 얼마나 다른지(잉크)를 더한다.
 *   3. 가장 진한 행의 10% 를 넘는 첫 행과 마지막 행을 보이는 띠로 본다.
 *      페이드가 완전히 투명해지는 77% 보다 앞에서 이미 읽히지 않으므로
 *      기하학적 끝이 아니라 이 기준을 쓴다.
 *   4. 그 띠의 가운데가 카드 가운데에 오도록 옮길 양을 낸다.
 *
 * ⚠️ 원본을 다시 뽑으면 다시 재야 한다. 그림 안에서 내용이 끝나는 자리가
 *    바뀌면 이 값도 바뀐다. 값이 없는 그림은 IndustryPage 의 식으로 넘어가며
 *    (높이만 보고 어림잡는다) 그래도 평균은 맞고 ±20px 안에 든다.
 * ⚠️ 영문판(-en)은 같은 그림의 글자만 바뀐 것이라 국문과 같은 값을 쓴다.
 */
export const imageShift: Record<string, number> = {
  '/industries/automotive-solutions/automotive-01-predictive-maintenance-en.svg': -37.4,
  '/industries/automotive-solutions/automotive-01-predictive-maintenance.svg': -37.4,
  '/industries/automotive-solutions/automotive-02-line-power-en.svg': -35.5,
  '/industries/automotive-solutions/automotive-02-line-power.svg': -35.26,
  '/industries/automotive-solutions/automotive-03-compressor-control-en.svg': -32.19,
  '/industries/automotive-solutions/automotive-03-compressor-control.svg': -33.21,
  '/industries/automotive-solutions/automotive-04-energy-intensity-en.svg': -34.81,
  '/industries/automotive-solutions/automotive-04-energy-intensity.svg': -35.03,
  '/industries/automotive-solutions/automotive-05-quality-environment-en.svg': -33.19,
  '/industries/automotive-solutions/automotive-05-quality-environment.svg': -33.79,
  '/industries/chemicals-solutions/chemicals-01-multi-energy-en.svg': -40.66,
  '/industries/chemicals-solutions/chemicals-01-multi-energy.svg': -40.66,
  '/industries/chemicals-solutions/chemicals-02-target-alarm-en.svg': -36.17,
  '/industries/chemicals-solutions/chemicals-02-target-alarm.svg': -36.17,
  '/industries/chemicals-solutions/chemicals-03-boiler-air-ratio-en.svg': -34.67,
  '/industries/chemicals-solutions/chemicals-03-boiler-air-ratio.svg': -39.91,
  '/industries/chemicals-solutions/chemicals-04-equipment-energy-en.svg': -35.5,
  '/industries/chemicals-solutions/chemicals-04-equipment-energy.svg': -35.26,
  '/industries/chemicals-solutions/chemicals-05-compressor-monitoring-en.svg': -36.68,
  '/industries/chemicals-solutions/chemicals-05-compressor-monitoring.svg': -37.21,
  '/industries/chemicals-solutions/chemicals-06-ghg-management-en.svg': -39.94,
  '/industries/chemicals-solutions/chemicals-06-ghg-management.svg': -40.38,
  '/industries/electronics-solutions/electronics-01-peak-demand-en.svg': -36.17,
  '/industries/electronics-solutions/electronics-01-peak-demand.svg': -36.17,
  '/industries/electronics-solutions/electronics-02-equipment-power-en.svg': -35.5,
  '/industries/electronics-solutions/electronics-02-equipment-power.svg': -35.26,
  '/industries/electronics-solutions/electronics-03-ups-outage-en.svg': -36.95,
  '/industries/electronics-solutions/electronics-03-ups-outage.svg': -38.01,
  '/industries/electronics-solutions/electronics-04-environment-monitoring-en.svg': -34.22,
  '/industries/electronics-solutions/electronics-04-environment-monitoring.svg': -34.67,
  '/industries/electronics-solutions/electronics-05-plan-vs-status-en.svg': -33.21,
  '/industries/electronics-solutions/electronics-05-plan-vs-status.svg': -33.21,
  '/industries/electronics-solutions/electronics-06-ehs-fire-en.svg': -36.68,
  '/industries/electronics-solutions/electronics-06-ehs-fire.svg': -37.74,
  '/industries/electronics-solutions/electronics-07-wireless-sensors-en.svg': -40.58,
  '/industries/electronics-solutions/electronics-07-wireless-sensors.svg': -40.84,
  '/industries/energy-solutions/energy-01-integrated-monitoring-en.svg': -40.66,
  '/industries/energy-solutions/energy-01-integrated-monitoring.svg': -40.66,
  '/industries/energy-solutions/energy-02-predictive-maintenance-en.svg': -37.4,
  '/industries/energy-solutions/energy-02-predictive-maintenance.svg': -37.4,
  '/industries/energy-solutions/energy-03-peak-optimization-en.svg': -40.79,
  '/industries/energy-solutions/energy-03-peak-optimization.svg': -40.79,
  '/industries/energy-solutions/energy-04-esg-report-en.svg': -39.49,
  '/industries/energy-solutions/energy-04-esg-report.svg': -40.38,
  '/industries/energy-solutions/energy-05-realtime-alarm-en.svg': -36.69,
  '/industries/energy-solutions/energy-05-realtime-alarm.svg': -37.75,
  '/industries/food-solutions/food-01-equipment-efficiency-en.svg': -29.24,
  '/industries/food-solutions/food-01-equipment-efficiency.svg': -36.04,
  '/industries/food-solutions/food-02-replacement-simulation-en.svg': -36.55,
  '/industries/food-solutions/food-02-replacement-simulation.svg': -38.45,
  '/industries/food-solutions/food-03-multi-energy-en.svg': -40.66,
  '/industries/food-solutions/food-03-multi-energy.svg': -40.66,
  '/industries/food-solutions/food-04-energy-intensity-en.svg': -33.98,
  '/industries/food-solutions/food-04-energy-intensity.svg': -37.36,
  '/industries/food-solutions/food-05-chiller-cop-en.svg': -40.23,
  '/industries/food-solutions/food-05-chiller-cop.svg': -40.48,
  '/industries/food-solutions/food-06-vibration-monitoring-en.svg': -37.4,
  '/industries/food-solutions/food-06-vibration-monitoring.svg': -37.4,
  '/industries/machinery-solutions/machinery-01-compressor-control-en.svg': -36.68,
  '/industries/machinery-solutions/machinery-01-compressor-control.svg': -36.96,
  '/industries/machinery-solutions/machinery-02-equipment-power-en.svg': -35.5,
  '/industries/machinery-solutions/machinery-02-equipment-power.svg': -35.26,
  '/industries/machinery-solutions/machinery-03-hvac-enthalpy-en.svg': -30.42,
  '/industries/machinery-solutions/machinery-03-hvac-enthalpy.svg': -39.91,
  '/industries/machinery-solutions/machinery-04-energy-intensity-en.svg': -33.36,
  '/industries/machinery-solutions/machinery-04-energy-intensity.svg': -38.52,
  '/industries/machinery-solutions/machinery-05-dc-microgrid-en.svg': -40.77,
  '/industries/machinery-solutions/machinery-05-dc-microgrid.svg': -40.77,
  '/industries/machinery-solutions/machinery-06-carbon-monitoring-en.svg': -35.25,
  '/industries/machinery-solutions/machinery-06-carbon-monitoring.svg': -35.25,
  '/industries/steel-solutions/steel-01-peak-demand-en.svg': -35.91,
  '/industries/steel-solutions/steel-01-peak-demand.svg': -39.91,
  '/industries/steel-solutions/steel-02-compressed-air-en.svg': -32.19,
  '/industries/steel-solutions/steel-02-compressed-air.svg': -35.25,
  '/industries/steel-solutions/steel-03-heat-treatment-en.svg': -27.46,
  '/industries/steel-solutions/steel-03-heat-treatment.svg': -33.83,
  '/industries/steel-solutions/steel-04-process-energy-en.svg': -35.5,
  '/industries/steel-solutions/steel-04-process-energy.svg': -35.26,
  '/industries/steel-solutions/steel-05-cooling-water-en.svg': -37.3,
  '/industries/steel-solutions/steel-05-cooling-water.svg': -38.26,
  '/industries/steel-solutions/steel-06-vibration-monitoring-en.svg': -37.4,
  '/industries/steel-solutions/steel-06-vibration-monitoring.svg': -37.4,
};
