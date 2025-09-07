import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "static",
  site: "https://maxlsb.github.io",
  base: "/",
  prefetch: true,
  compressHTML: true,
});