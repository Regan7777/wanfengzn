import { SITE_CONFIG } from '../config';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SITE_CONFIG.siteName,
    'url': SITE_CONFIG.siteUrl,
    'logo': `${SITE_CONFIG.siteUrl}/images/logo.png`,
    'description': SITE_CONFIG.description,
    'sameAs': []
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_CONFIG.siteName,
    'url': SITE_CONFIG.siteUrl,
    'description': SITE_CONFIG.description,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${SITE_CONFIG.siteUrl}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${SITE_CONFIG.siteUrl}${item.url}`
    }))
  };
}

export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  publishedAt: Date;
  updatedAt?: Date;
  authorName?: string;
  coverUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': params.url
    },
    'headline': params.title,
    'description': params.description,
    'image': params.coverUrl ? [params.coverUrl] : [`${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`],
    'datePublished': params.publishedAt.toISOString(),
    'dateModified': (params.updatedAt || params.publishedAt).toISOString(),
    'author': {
      '@type': 'Person',
      'name': params.authorName || SITE_CONFIG.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE_CONFIG.siteName,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_CONFIG.siteUrl}/images/logo.png`
      }
    }
  };
}

export function generateItemListSchema(title: string, items: { name: string; url: string; position: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': title,
    'itemListElement': items.map((item) => ({
      '@type': 'ListItem',
      'position': item.position,
      'name': item.name,
      'url': item.url.startsWith('http') ? item.url : `${SITE_CONFIG.siteUrl}${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
