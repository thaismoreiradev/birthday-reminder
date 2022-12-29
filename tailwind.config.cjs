/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
screens: {
      'xs': '375px',
      'extraheight': { 'raw': '(min-height: 480px)' },
      
},
    extend: {
      fontFamily: {
        'fjalla': ['Fjalla One', 'sans-serif']
      }
    },
  },
  plugins: [],
}