import type { IndustryData } from './types';
import { energy } from './energy';
import { automotive } from './automotive';
import { electronics } from './electronics';
import { steel } from './steel';
import { chemicals } from './chemicals';
import { machinery } from './machinery';
import { food } from './food';

// 산업 레지스트리. 새 산업 = 데이터 파일 추가 후 여기에 등록하면 /industries/<slug> 자동 생성.
// 순서는 헤더 메가메뉴(src/i18n/nav.ts '산업별')와 같게 둔다.
export const industries: IndustryData[] = [
  energy,
  automotive,
  electronics,
  steel,
  chemicals,
  machinery,
  food,
];

export const industriesBySlug: Record<string, IndustryData> = Object.fromEntries(
  industries.map((i) => [i.slug, i])
);
