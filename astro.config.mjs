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
        const isAffRedirect = href.startsWith('/go/');
        const isPromo = href.includes('aff') || href.includes('code=') || href.includes('invite=') || href.includes('ref=');
        if (isAffRedirect || (isExternal && isPromo)) {
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
  redirects: {
    '/go/shenxing': { status: 301, destination: 'https://wuhan01.shenxingaff.com/#/?code=WUQMrgI8' },
    '/go/dalaoyun': { status: 301, destination: 'https://fugui0077.dalaoyunaff.com/#/?code=1o7gYhTL' },
    '/go/shandianshu': { status: 301, destination: 'https://fugui0077.shandianshuaff.com/#/?code=I2yK9PfK' },
    '/go/liulianyun': { status: 301, destination: 'https://fugui007.liulianyunaff.com/#/?code=Y6A1M1MN' },
    '/go/huanqiuti': { status: 301, destination: 'https://fugui0077.huanqiutiaff.com/#/?code=rJyQn4xG' },
    '/go/yunjiexian': { status: 301, destination: 'https://fugui0077.yunjiexianaff.com/#/?code=qA3LF6hW' }
  },
  integrations: [
    sitemap({
      filter: (page) => 
        !page.includes('/search') && 
        !page.includes('/404') && 
        !page.includes('/draft') &&
        !page.includes('/go/')
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
