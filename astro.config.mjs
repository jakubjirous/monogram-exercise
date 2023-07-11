import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vercel from '@astrojs/vercel/static';

export default defineConfig({
	site: "https://monogram-exercise-jakubjirous.vercel.app/",
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
	experimental: {
		assets: true,
	},
	build: {
		split: true
	},
});
