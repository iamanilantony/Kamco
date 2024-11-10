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
      animation: {
        'bounce-up': 'bounceUp 1s ease-out forwards',
      },
      keyframes: {
        bounceUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
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
