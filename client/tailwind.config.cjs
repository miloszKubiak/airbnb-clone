/** @type {import('tailwindcss').Config} */
const defaultTheme = module.require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
