/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          200: '#e5e7eb',
          400: '#9ca3af',
          800: '#1e1e1e',
          900: '#161616',
        }
      }
    },
  },
  plugins: [],
}