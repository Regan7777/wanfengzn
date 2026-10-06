import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://regan-a19.pages.dev',
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
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
