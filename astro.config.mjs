import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tuagenda.mx',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
