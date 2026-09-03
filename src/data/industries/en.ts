import type { IndustryData } from './types';
import { energyEn } from './energy.en';
import { automotiveEn } from './automotive.en';
import { electronicsEn } from './electronics.en';
import { steelEn } from './steel.en';
import { chemicalsEn } from './chemicals.en';
import { machineryEn } from './machinery.en';
import { foodEn } from './food.en';

// 영어 산업 레지스트리. 새 영어 산업 = 데이터 파일 추가 후 여기에 등록하면
// /en/industries/<slug>가 자동 생성된다. (한국어는 index.ts)
// 순서는 한국어 레지스트리·헤더 메가메뉴와 같게 둔다.
export const industriesEn: IndustryData[] = [
  energyEn,
  automotiveEn,
  electronicsEn,
  steelEn,
  chemicalsEn,
  machineryEn,
  foodEn,
];
