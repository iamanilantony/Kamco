/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        'poppins': ['Poppins'],
        'roboto': ['Roboto', 'sans-serif'],
        'serif-custom': ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
