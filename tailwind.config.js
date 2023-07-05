/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				backgroundColor: "#F9F9F9",
				thirdColor: "#147EFB",
				mainTextColor: "#2D2E32",
				secondTextColor: "#555555",
			},
			boxShadow: {
				"3xl": "0 0 10px 0 rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
