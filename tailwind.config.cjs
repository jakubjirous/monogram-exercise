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
				"dark-grey": "#151515", // heading 1
				"rice-flower": "#EFFFE2", // heading 2

				silver: "#C7C7C7", // body1 / gradient !!!

				tundora: "#414141", // body2

				boulder: "#757575", // small

				"cod-gray": "#1A1A1A", // screen bg
				malibu: "#44DBFF", // code

				harlequin: "#53FB2A", // score
				sunflower: "#E9E11F",

				"hollywood-cerise": "#FF069C", // footer heart

				// bricks
				endeavour: "#0165B1",
				thunderbird: "#D12510",
				koromiko: "#FEC05C",
				"gull-gray": "#97B1B2",
			},
			fontSize: {
				// heading 1
				"clamp-h1": "clamp(3.5rem, 0.4654rem + 9.8089vw, 8.3125rem)",
				56: ["3.5rem", { lineHeight: "1.1525" }],
				82: ["5.125rem", { lineHeight: "1.15976" }],
				133: ["8.3125rem", { lineHeight: "1.15973" }],

				// heading 2
				"clamp-h2": "clamp(3rem, 1.8965rem + 3.5669vw, 4.75rem)",
				32: ["3rem", { lineHeight: "1" }],
				48: ["3.5rem", { lineHeight: "1" }],
				76: ["4.75rem", { lineHeight: "1" }],

				// body1
				"clamp-body1": "clamp(1.375rem, 1.2174rem + 0.5096vw, 1.625rem)",
				22: ["1.375rem", { lineHeight: "162%" }],
				// 24:
				26: ["1.625rem", { lineHeight: "162%" }],

				// body2
				"clamp-body2": "clamp(1.25rem, 1.0924rem + 0.5096vw, 1.5rem)",
				20: ["1.25rem", { lineHeight: "162%" }],
				// 22:
				24: ["1.5rem", { lineHeight: "162%" }],

				// small
				"clamp-small": "clamp(1rem, 0.9212rem + 0.2548vw, 1.125rem)",
				16: ["1rem", { lineHeight: "195.5%" }],
				// 18:
				18: ["1.125rem", { lineHeight: "195.5%" }],

				// code
				8: ["0.502rem", { lineHeight: "2.195" }],

				// score
				"clamp-score": "clamp(1.96875rem, 0.7273rem + 4.0127vw, 3.9375rem)",
				31: ["1.96875rem", { lineHeight: "1" }],
				42: ["2.625rem", { lineHeight: "1" }],
				63: ["3.9375rem", { lineHeight: "1" }],

				// footer ascii
				"clamp-ascii": "clamp(1.6875rem, 0.6234rem + 3.4395vw, 3.375rem)",
				27: ["1.6875rem", { lineHeight: "162%" }],
				36: ["2.25rem", { lineHeight: "162%" }],
				54: ["3.375rem", { lineHeight: "162%" }],
			},
			borderRadius: {
				large: "4.25rem", // 68px
			},
			blur: {
				60: "60px",
			},
		},
	},
};
