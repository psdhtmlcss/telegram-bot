// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/telegram-bot' : '/',
  site: process.env.NODE_ENV === 'production' ? 'https://psdhtmlcss.github.io' : 'http://localhost:4321'
});
