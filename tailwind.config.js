/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	theme: {
		extend: {
			fontFamily: {
				caveat: ['Caveat', 'cursive'],
			},
		},
	},
	plugins: [require('daisyui')],
}
