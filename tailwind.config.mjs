/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					'50': '#eff9ff',
					'100': '#daf0ff',
					'200': '#bee6ff',
					'300': '#91d7ff',
					'400': '#5ebffc',
					'500': '#38a1f9',
					'600': '#2284ee',
					'700': '#1a6ddb',
					'800': '#1c58b1',
					'900': '#1b4885',
					'950': '#162e55',
					'light': '#1a6ddb',
					'dark': '#91d7ff',
				},
				'secondary': {
					'50': '#fffdea',
					'100': '#fff8c4',
					'200': '#fff184',
					'light': '#fff184',
					'300': '#ffe244',
					'400': '#ffd019',
					'500': '#ffaf00',
					'600': '#e48400',
					'dark': '#b95a00',
					'700': '#b95a00',
					'800': '#994607',
					'900': '#7e3909',
					'950': '#481d00',
				},
				'error': {
					'50': '#fef2f2',
					'100': '#fee2e2',
					'200': '#ffc9c9',
					'300': '#fda4a4',
					'400': '#fa6f6f',
					'500': '#f14242',
					'600': '#de2424',
					'700': '#ba1a1a',
					'800': '#9b1919',
					'900': '#801c1c',
					'950': '#460909',
				},
				'txt':{
					'dark': '#f6f6f7',
					'light': '#222125',
				},
				'surface': {
					'light': '#f6f6f7',
					'100': '#eeeef1',
					'200': '#dad9df',
					'300': '#cfcdd4',
					'400': '#bab7c2',
					'500': '#a8a4b0',
					'600': '#948e9d',
					'700': '#7f7b87',
					'800': '#69646f',
					'900': '#57545b',
					'950': '#323135',
					'dark': '#222125',
				},
				
				
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: 'selector'
}
