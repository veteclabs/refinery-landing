// 영어 블로그 RSS(/en/rss.xml). 한국어 /rss.xml과 같은 모양이고 영어 글만 싣는다.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft && data.lang === 'en')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'Refinery Blog',
    description: 'Insight and product news on industrial data, AI agents and field operations.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${post.id.replace(/^en\//, '')}`,
    })),
    trailingSlash: false,
    customData: `<language>en-us</language>`,
  });
}
