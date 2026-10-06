import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      'recommend',
      'ranking',
      'reviews',
      'compare',
      'price',
      'network',
      'use-case',
      'clients',
      'tutorials',
      'problems',
      'guide'
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('网络服务指南编辑部'),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()).optional(),
    tldr: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    related: z.array(z.string()).optional(),
    toc: z.boolean().default(true)
  })
});

export const collections = {
  articles: articlesCollection
};
