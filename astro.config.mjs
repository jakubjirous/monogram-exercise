import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compressor from "astro-compressor";

export default defineConfig({
	site: "https://monogram-exercise-jakubjirous.vercel.app/",
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		compressor({
			gzip: false,
			brotli: true,
			fileExtensions: [".html", ".js", ".css", ".svg", ".png", ".webp"],
		}),
	],
	experimental: {
		assets: true,
	},
	build: {
		split: true,
	},
});
