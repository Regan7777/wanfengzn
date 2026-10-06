import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
    }
  },
  build: {
    format: 'directory'
  }
});
