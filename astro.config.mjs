import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://monogram-exercise-jakubjirous.vercel.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  experimental: {
    assets: true
  },
  build: {
    split: true
  }
});