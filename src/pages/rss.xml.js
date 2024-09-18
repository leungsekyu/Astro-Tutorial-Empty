import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: "leungsekyu's Blog",
    description: 'leungsekyu 的个人博客',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('/src/**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
