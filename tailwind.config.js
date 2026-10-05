/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseGold: {
          light: '#fdf2f2',
          DEFAULT: '#e0a99d',
          dark: '#b87d71',
        },
        champagne: '#f7f4ef',
        luxuryGold: '#d4af37',
      },
    },
  },
  plugins: [],
}
