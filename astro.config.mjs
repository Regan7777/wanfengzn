import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 自动拦截并为外部商业/AFF推广链接注入 SEO 白帽规范属性
function rehypeAffExternalLinks() {
  return (tree) => {
    function walk(node) {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'element' && node.tagName === 'a' && node.properties && typeof node.properties.href === 'string') {
        const href = node.properties.href;
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const isPromo = href.includes('aff') || href.includes('code=') || href.includes('invite=') || href.includes('ref=');
        if (isExternal && isPromo) {
          node.properties.target = '_blank';
          node.properties.rel = 'nofollow sponsored noopener noreferrer';
        }
      }
      if (Array.isArray(node.children)) {
        for (const child of node.children) {
          walk(child);
        }
      }
    }
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://wanfengzn.com',
  integrations: [
    sitemap({
      filter: (page) => 
        !page.includes('/search') && 
        !page.includes('/404') && 
        !page.includes('/draft')
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    },
    rehypePlugins: [rehypeAffExternalLinks]
  },
  build: {
    format: 'directory'
  }
});
