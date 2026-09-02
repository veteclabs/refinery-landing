import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 블로그 컬렉션: src/content/blog/*.md(x)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Refinery'),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // 로케일. 영어 글은 src/content/blog/en/ 아래에 두고 lang: 'en'을 지정한다.
      // 한국어는 기본값이라 기존 글은 손대지 않아도 된다.
      lang: z.enum(['ko', 'en']).default('ko'),
      // 글별 OG 이미지(public 경로). 미지정 시 기본 og-image.png 사용.
      ogImage: z.string().optional(),
      // 표지 이미지. src/assets 아래 파일을 상대 경로로 가리킨다
      // (예: ../../assets/blog/refinery-blog-start.webp).
      // image() 헬퍼를 쓰면 빌드가 폭별 파일을 여러 벌 만들어 준다 — 목록 카드(382px)와
      // 글 머리(1184px)가 같은 원본에서 각자 크기에 맞는 파일을 받는다.
      // 없으면 표지 칸이 빈 면으로 남는다(자리는 그대로라 배치가 흔들리지 않는다).
      image: image().optional(),
      // 글의 종류. 목록 카드에서 날짜 옆에 적는다(자료실 표지의 '백서'·'리포트'와 같은 자리).
      // 미지정 시 카드에 종류를 적지 않는다.
      category: z.string().optional(),
      // 목록 카드에서 소제목을 두 줄로 끊을 지점. 여기 적은 말 바로 뒤에 <br>이 들어간다.
      // description 자체에 <br>을 넣지 않는 이유: 같은 값이 meta description과 RSS에도
      // 쓰여서 태그가 그대로 새어 나간다. 끊을 지점만 따로 두면 카드에서만 먹는다.
      // 찾지 못하면 끊지 않는다(문구를 고쳐도 깨지지 않는다).
      cardBreakAfter: z.string().optional(),
    }),
});

export const collections = { blog };
