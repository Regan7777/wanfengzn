import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../config';

export async function GET(context: { site: URL }) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  articles.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  return rss({
    title: SITE_CONFIG.siteName,
    description: SITE_CONFIG.description,
    site: context.site || SITE_CONFIG.siteUrl,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishedAt,
      description: article.data.description,
      link: `/articles/${article.slug}/`
    })),
    customData: `<language>${SITE_CONFIG.locale}</language>`
  });
}
