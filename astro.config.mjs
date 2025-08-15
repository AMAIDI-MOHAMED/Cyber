// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import db from "@astrojs/db";
import svelte from "@astrojs/svelte";
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site.
  // Be sure to update this to your own domain (e.g., "https://yourdomain.com") before deploying.
  site: "https://your-site-name.netlify.app",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    db(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@data': resolve(__dirname, './src/data'),
        '@navigation': resolve(__dirname, './src/components/navigation'),
      }
    }
  },
  output: "server",
  adapter: netlify(),
});
