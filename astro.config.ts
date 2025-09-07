import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "static",
  site: "https://maxlsb.github.io",
  base: process.env.NODE_ENV === 'development' ? '/' : "/new-portfolio",
  prefetch: true,
  compressHTML: true,
});