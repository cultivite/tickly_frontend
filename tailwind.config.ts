import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				deepNavy: '#171A23',
				stormyBlue: '#242A37',
				slateGray: '#3C424F',
				softMist: '#EFF0F4',
				rosySunset: '#DF6270',
				crimsonBlaze: '#DA0037',
			},
		},
	},
	plugins: [],
} satisfies Config;
