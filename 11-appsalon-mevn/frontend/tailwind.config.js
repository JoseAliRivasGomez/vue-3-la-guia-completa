/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/vue-tailwind-datepicker/**/*.js',
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "app" : "url('/img/1.jpg')"
      },
      colors: {
        "vtd-primary" : colors.blue
      }
    },
  },
  plugins: [],
}
