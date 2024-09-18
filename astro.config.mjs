import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://astro-tutorial-empty.netlify.app/',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
