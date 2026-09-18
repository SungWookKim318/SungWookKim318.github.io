import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sungwookkim318.github.io',
  vite: { plugins: [tailwindcss()] },
});
