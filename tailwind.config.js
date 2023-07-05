/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				backgroundColor: "#F9F9F9",
				mainTextColor: "#2D2E32",
				secondTextColor: "#555555",
			},
		},
	},
	plugins: [],
};
