/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
			fontFamily:{
				bodyFont: ["Poppins", "sans-serif"],
				titleFont: ["Montserrat", "sans-serif"],
			},
			colors: {
				bodyColor: "#212428",
				lightText: "#c4cfde",
				designColor: "#ff014d",
			},
			boxShadow:{
				shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
			},
		},
  },
  plugins: [],
}
