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
      // 표지 오른쪽 아래에 얹는 아이콘(public 경로). 표지 사진과 별개로 붙는다 —
      // 사진이 없는 글에서는 빈 면 위에 아이콘만 놓인다.
      coverIcon: z.string().optional(),
      // 표지 밑색 위에 깔 무늬(public 경로). 흑백 이미지를 곱하기로 얹어
      // 밑색에 묻히게 한다 — 사진처럼 덮는 표지(image)와는 다른 자리다.
      coverTexture: z.string().optional(),
      // 표지 아이콘을 놓을 자리. 기본은 오른쪽 아래이고, center면 한가운데 온다.
      coverIconAt: z.enum(['corner', 'center']).default('corner'),
      // 표지 밑색(hex). 사진이 없는 글에서 표지 면에 깔린다. 글마다 다르게 준다.
      // 글자색은 정하지 않는다 — 이 색 위에서 잉크색과 흰색 중 잘 읽히는 쪽을
      // 빌드 때 골라 쓴다(src/utils/cover-tone.ts).
      coverColor: z.string().optional(),
      // 표지 왼쪽 위 태그라인(첫 태그)을 감춘다. 표지가 그림 하나로 충분한 글에 쓴다.
      hideCoverKind: z.boolean().default(false),
      // 표지 태그라인을 두 줄로 끊을 지점. 여기 적은 말 바로 뒤에서 나눈다.
      // 태그가 긴 영어 글에 쓴다(#predictive maintenance).
      coverKindBreakAfter: z.string().optional(),
      // 표지 글자색(hex). 지정하면 자동 판정(잉크/흰색)보다 우선한다.
      // 밑색과 같은 계열의 짙은 단계를 쓰고 싶을 때 넣는다.
      coverTextColor: z.string().optional(),
      // 표지 왼쪽 아래에 넣을 글(예: 글의 종류). 태그라인과 같은 글자 규격을 쓴다.
      // 값이 없으면 아무것도 넣지 않는다.
      coverFoot: z.string().optional(),
      // 표지 안에 대제목을 얹을 때 줄을 끊을 지점. 여기 적은 말 바로 뒤에서 나눈다.
      // 값이 없으면 표지에 대제목을 넣지 않는다(글마다 켜고 끈다).
      // 배열로 두 지점을 주면 세 줄이 된다 — 영어는 같은 뜻이라도 한국어보다 길어
      // 두 줄로는 오른쪽 아이콘에 닿는다.
      // title 자체에 <br>을 넣지 않는 이유는 cardBreakAfter와 같다 — 같은 값이
      // <title>·og:title·JSON-LD에도 쓰여 태그가 그대로 새어 나간다.
      titleBreakAfter: z.union([z.string(), z.array(z.string())]).optional(),
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
