/**
 * 블로그 목록 · 글 상세가 함께 쓰는 값과 함수. 한국어(/blog)와 영어(/en/blog)가 같은 것을 쓴다.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { formatDateKo } from './date';

export type Lang = 'ko' | 'en';
export type Post = CollectionEntry<'blog'>;

/**
 * 글의 종류. 순서가 목록의 섹션 순서(01 · 02 · 03)다.
 * 글 원본의 category 값은 ko 또는 en 이름 그대로 적혀 있어 여기서 slug로 바꾼다.
 * 새 종류를 쓰려면 여기에 한 줄을 더한다 — 없는 이름은 목록 섹션에 나오지 않는다(카드에는 그대로 적힌다).
 */
export const CATEGORIES = [
  { slug: 'insight', ko: '인사이트', en: 'Insight' },
  { slug: 'guide', ko: '가이드', en: 'Guide' },
  { slug: 'news', ko: '소식', en: 'News' },
] as const;

export const categorySlug = (name?: string) =>
  CATEGORIES.find((c) => c.ko === name || c.en === name)?.slug;

export const blogBase = (lang: Lang) => (lang === 'ko' ? '/blog' : '/en/blog');

/** 영어 글의 컬렉션 id는 'en/<slug>'라 접두사를 뗀다. */
export const postSlug = (post: Post) => post.id.replace(/^en\//, '');
export const postHref = (post: Post) => `${blogBase(post.data.lang)}/${postSlug(post)}`;

/** 한국어는 '2026. 07. 31', 영어는 'July 31, 2026'. */
export const formatPostDate = (d: Date, lang: Lang) =>
  lang === 'ko'
    ? formatDateKo(d)
    : new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(d);

/** 공개 글을 최신순으로. */
export const getPosts = async (lang: Lang) =>
  (await getCollection('blog', ({ data }) => !data.draft && data.lang === lang)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

/**
 * 글 끝의 「다른 글」. 같은 종류를 먼저, 나머지는 최신순으로 채운다.
 */
export const relatedPosts = (post: Post, all: Post[], n = 3) => {
  const others = all.filter((p) => p.id !== post.id);
  const same = others.filter((p) => p.data.category && p.data.category === post.data.category);
  const rest = others.filter((p) => !same.includes(p));
  return [...same, ...rest].slice(0, n);
};

/**
 * 문장을 지정한 말 바로 뒤에서 두 도막으로 나눈다. 못 찾으면 나누지 않는다.
 * description 자체에 <br>을 넣지 않는 이유는 같은 값이 meta description · RSS에도 쓰이기 때문이다.
 */
export const splitAt = (text: string, at?: string): [string, string] => {
  if (!at) return [text, ''];
  const i = text.indexOf(at);
  if (i < 0) return [text, ''];
  const cut = i + at.length;
  return [text.slice(0, cut), text.slice(cut).trimStart()];
};

/**
 * 읽는 시간(분). 마크다운 기호 · 링크 주소를 걷어 낸 본문으로 센다.
 * 한국어는 분당 500자(공백 제외), 영어는 분당 230낱말로 잡는다. 1분 아래는 1분이다.
 */
export const readingMinutes = (body: string | undefined, lang: Lang) => {
  const text = (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`|-]/g, ' ');
  const n = lang === 'ko' ? text.replace(/\s/g, '').length / 500 : text.split(/\s+/).filter(Boolean).length / 230;
  return Math.max(1, Math.round(n));
};
