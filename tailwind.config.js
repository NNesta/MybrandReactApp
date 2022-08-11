/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    keyframes: {
      'spin-slow': {
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(360deg)'},
      },
      'rotate-img': {
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(-360deg)'},
      }
    },
  animation: {
    'spin-slow': 'spin-slow 50s linear infinite',
    'rotate-img': 'rotate-img 30s linear infinite',
  }
  },
  },
  plugins: [],
}
