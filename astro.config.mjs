import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://citas.bot',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
