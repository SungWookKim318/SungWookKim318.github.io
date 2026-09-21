import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sungwookkim318.github.io',
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx()],
});