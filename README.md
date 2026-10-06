# 2026 网络服务选择与使用知识博客 (Astro 中文 SEO 知识门户)

这是一个基于 **Astro 5 + TypeScript + Content Collections + 原生 CSS** 搭建的高性能、面向中文用户的“网络服务选择与使用知识博客”。全站围绕核心主题 **“机场推荐”** 建立了完整的 Topic Cluster（主题集群）搜索架构，兼顾中文 SEO、GEO（AI搜索优化）、静态生成性能与移动端极致阅读体验。

---

## 目录结构 (Project Structure)

```text
├── src/
│   ├── components/         # 核心可复用 UI 与 SEO 组件 (Header, Footer, SEO, Schema, TOC, FAQ, Card等)
│   ├── content/
│   │   ├── config.ts       # Astro Content Collections 强类型 z schema 定义
│   │   └── articles/       # Markdown 文章库 (示例文章与真实知识库)
│   ├── layouts/            # 页面布局模板 (BaseLayout, ArticleLayout, PillarLayout)
│   ├── lib/                # 辅助函数库 (utils.ts, schema.ts)
│   ├── pages/              # 全站路由与核心专题页 (/, /recommend/, /ranking/, /search/ 等)
│   ├── styles/             # 设计系统与全局 CSS 样式 (global.css)
│   └── config.ts           # 全局配置 (站点名称、域名、导航菜单、分类元数据)
├── public/                 # 静态资源 (图片、robots.txt, llms.txt, og-default)
├── docs/                   # 团队协作与写作规范 (content-guide.md)
├── astro.config.mjs        # Astro 配置文件 (Sitemap 插件与 Shiki 代码高亮)
├── tsconfig.json           # TypeScript 路径别名配置
└── package.json            # 项目依赖与构建脚本
```

---

## 快速上手与常用命令 (Getting Started)

### 1. 安装项目依赖

```bash
npm install
```

### 2. 本地开发调试 (Dev Server)

启动本地开发服务器（默认端口 `http://localhost:4321`）：

```bash
npm run dev
```

### 3. 类型与 Astro 静态检查 (Check)

在提交或部署前运行静态类型检查：

```bash
npm run check
```

### 4. 正式生产环境构建 (Build)

自动完成静态页面编译、Sitemap 生成与 Pagefind 全文检索索引构建：

```bash
npm run build
```

构建成功后，所有静态 HTML 文件将输出至 `dist/` 目录。

### 5. 本地预览构建产物 (Preview)

```bash
npm run preview
```

---

## 域名与全局配置修改 (Configuration)

部署前，请在以下文件中修改为您真实的网站域名与品牌名称：

### 1. `src/config.ts`
修改 `siteUrl`、`siteName`、`description` 及核心导航链接：

```typescript
export const SITE_CONFIG = {
  siteName: '网络服务选择指南',
  siteUrl: 'https://yourdomain.com', // 替换为您的真实域名
  description: '面向中文用户的网络服务选择与使用知识博客...',
  // ...
};
```

### 2. `astro.config.mjs`
修改 `site` 字段：

```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // 替换为您的真实域名
  // ...
});
```

---

## 如何添加文章 (Adding Articles)

在 `src/content/articles/` 目录下创建新的 `.md` 文件。每篇文章必须包含完整的 Frontmatter 信息：

```markdown
---
title: "文章标题"
description: "文章摘要，用于 Meta Description 与卡片显示"
publishedAt: 2026-10-05
category: "recommend" # 分类 slug
tags: ["机场推荐", "新手教程"]
author: "网络服务指南编辑部"
cover: "/images/covers/recommend-guide.svg"
coverAlt: "封面图描述"
featured: false
draft: false
tldr: "核心结论 (TL;DR)"
faq:
  - question: "常见问题？"
    answer: "回答内容..."
---

正文内容从 H2 开始...
```

详细的写作规范与 GEO 优化策略请参阅 [`docs/content-guide.md`](file:///docs/content-guide.md)。

---

## Content Collections Schema 字段说明

| 字段名 | 类型 | 必须 | 说明 |
| :--- | :--- | :--- | :--- |
| `title` | String | 是 | 文章标题 (H1) |
| `description` | String | 是 | 文章摘要与 Meta Description |
| `publishedAt` | Date | 是 | 首次发布日期 |
| `updatedAt` | Date | 否 | 最近更新日期 |
| `category` | Enum | 是 | 主题分类 (`recommend`, `ranking`, `reviews`, `compare`, `price`, `network`, `use-case`, `clients`, `tutorials`, `problems`, `guide`) |
| `tags` | Array | 否 | 文章标签数组 |
| `author` | String | 否 | 作者姓名 (默认: "网络服务指南编辑部") |
| `cover` | String | 否 | 封面图片路径 |
| `coverAlt` | String | 否 | 封面图 Alt 替代文本 |
| `featured` | Boolean | 否 | 是否推荐至首页精选模块 (默认: false) |
| `draft` | Boolean | 否 | 草稿状态 (设置为 true 不会生成页面和 sitemap) |
| `tldr` | String | 否 | 核心结论模块 (TL;DR) |
| `faq` | Array | 否 | 常见问题数组 `{ question, answer }` (自动生成 FAQPage Schema) |
| `related` | Array | 否 | 手动关联文章 slug 数组 |

---

## 部署说明 (Deployment)

本项目为 100% 纯静态生成（SSG），非常适合部署于各种云端静态托管平台：

### Cloudflare Pages / Vercel / Netlify
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Node.js Version:** `18.x` 或更高

---

## 许可协议 (License)

MIT License.
