import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  // ...
  vite: {
    optimizeDeps: {
      exclude: ["oslo"]
    }
  },
  output: "server",
  adapter: cloudflare(),
  integrations: [db()]
});