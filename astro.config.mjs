import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Keep HTML-aware whitespace handling (Astro v7 defaults to 'jsx' rules,
  // which would collapse spaces between inline elements).
  compressHTML: true,
  site: 'https://zayathon.in',
  devToolbar: { enabled: false },
});
