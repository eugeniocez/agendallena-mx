import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://agendallena.mx',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
