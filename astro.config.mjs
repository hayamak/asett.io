// astro.config.mjs
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Noto Sans JP",
      cssVariable: "--font-noto-sans-jp",
      weights: [400, 500, 700],
    },
  ],
});
