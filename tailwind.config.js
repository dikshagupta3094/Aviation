/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",       // Main HTML file
    "./src/components/*.js",       // All JS and HTML files in src folder
    "./src/style/*.css"       // All CSS files in the styles folder (if needed)
],
  theme: {
    extend: {},
  },
  plugins: [],
}

