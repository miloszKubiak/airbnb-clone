/** @type {import('tailwindcss').Config} */
const defaultTheme = module.require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.7)',
      },
    },
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
