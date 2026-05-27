/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f2',
          100: '#ffe8e0',
          200: '#ffc9b8',
          300: '#ffa08a',
          400: '#ff6e4a',
          500: '#ff4813',
          600: '#e63600',
          700: '#c42d00',
          800: '#a12600',
          900: '#7d1f00',
          950: '#4a1000',
        }
      }
    },
  },
  plugins: [],
}
