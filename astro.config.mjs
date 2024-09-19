import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://astro-tutorial-empty.netlify.app/',

  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },

  integrations: [preact()],
});