import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compressor from "astro-compressor";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://monogram-exercise-jakubjirous.vercel.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), compressor({
    gzip: false,
    brotli: true,
    fileExtensions: [".html", ".js", ".css", ".svg", ".png", ".webp"]
  })],
  experimental: {
    assets: true
  },
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  build: {
    split: true
  },
});
