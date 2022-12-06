import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Learner | Blog',
  description: 'My journey learning Astro',
  site: 'https://dancing-cheesecake-18b7e0.netlify.app/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});
 