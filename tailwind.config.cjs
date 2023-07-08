/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			tablet: "768px",
			desktop: "1280px",
		},
		extend: {
			fontFamily: {
				inter: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				darkGrey: "#151515", // heading 1
				riceFlower: "#EFFFE2", // heading 2

				silver: "#C7C7C7", // body1 / gradient !!!

				tundora: "#414141", // body2

				boulder: "#757575", // small

				codGray: "#1A1A1A", // screen bg
				malibu: "#44DBFF", // code

				hollywoodCerise: "#FF069C" // footer heart
			},
			fontSize: {
				// heading 1
				56: ["3.5rem", { lineHeight: "1.1525" }],
				82: ["5.125rem", { lineHeight: "1.15976" }],
				133: ["8.3125rem", { lineHeight: "1.15973", }],

				// heading 1
				32: ["3.5rem", { lineHeight: "1" }],
				48: ["3rem", { lineHeight: "1" }],
				76: ["4.75rem", { lineHeight: "1", }],

				// body1
				26: ["1.625rem", { lineHeight: "2.635" }], // 162%

				// body2
				24: ["1.5rem", { lineHeight: "2.43" }], // 162%

				// small
				18: ["1.125rem", { lineHeight: "2.195" }], // 195.5%

				// code
				8: ["0.502rem", { lineHeight: "2.195" }],

				// footer ascii
				54: ["3.375rem", { lineHeight: "5.4675" }], // 162%
			},
		},
	},
};
