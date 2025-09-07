import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "static",
  site: "https://maxlsb.github.io",
  base: "/new-portfolio",
  prefetch: true,
  compressHTML: true,
});