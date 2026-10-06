import type { CollectionEntry } from 'astro:content';
import { SITE_CONFIG, type CategoryMeta } from '../config';

export function formatDate(date: Date): string {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function estimateReadingTime(text: string): number {
  if (!text) return 1;
  // 中文字符数 + 英文单词数
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (text.match(/[a-zA-Z0-9]+/g) || []).length;
  const totalWords = chineseChars + englishWords;
  const minutes = Math.ceil(totalWords / 300); // 假设平均阅读速度为300字/分钟
  return Math.max(1, minutes);
}

export function getCategoryMeta(categorySlug: string): CategoryMeta {
  return (
    SITE_CONFIG.categories[categorySlug] || {
      slug: categorySlug,
      name: categorySlug,
      shortName: categorySlug,
      title: `${categorySlug} - ${SITE_CONFIG.siteName}`,
      description: `关于${categorySlug}的相关文章与知识指南。`,
      icon: 'folder'
    }
  );
}

export function getCanonicalUrl(pathname: string): string {
  // Ensure trailing slash consistency
  let cleanPath = pathname;
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  if (!cleanPath.endsWith('/') && !cleanPath.includes('.')) {
    cleanPath += '/';
  }
  return `${SITE_CONFIG.siteUrl}${cleanPath}`;
}

export function getRelatedArticles(
  currentArticle: CollectionEntry<'articles'>,
  allArticles: CollectionEntry<'articles'>[],
  limit: number = 6
): CollectionEntry<'articles'>[] {
  // 排除当前文章和草稿
  const candidates = allArticles.filter(
    (item) => item.slug !== currentArticle.slug && !item.data.draft
  );

  // 1. 如果手动指定了 related 手动推荐
  if (currentArticle.data.related && currentArticle.data.related.length > 0) {
    const manualMatches = candidates.filter((item) =>
      currentArticle.data.related?.includes(item.slug)
    );
    if (manualMatches.length >= limit) {
      return manualMatches.slice(0, limit);
    }
  }

  // 2. 打分逻辑：同分类 +3分，每重合一个标签 +1分
  const currentCategory = currentArticle.data.category;
  const currentTags = new Set(currentArticle.data.tags || []);

  const scored = candidates.map((article) => {
    let score = 0;
    if (article.data.category === currentCategory) {
      score += 3;
    }
    if (article.data.tags) {
      article.data.tags.forEach((tag) => {
        if (currentTags.has(tag)) {
          score += 1;
        }
      });
    }
    return { article, score };
  });

  // 按得分从高到低排序，得分相同时按最新发布时间排序
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.article.data.publishedAt.getTime() - a.article.data.publishedAt.getTime();
  });

  return scored.slice(0, limit).map((item) => item.article);
}
