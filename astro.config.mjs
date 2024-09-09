import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

import { defineConfig } from 'astro/config';

export default defineConfig({
  // 其他 Astro 配置项
  vite: {
    resolve: {
      alias: {
        '@': '/src', // 使用 '@' 指代 'src' 目录
      },
    },
  },
});
