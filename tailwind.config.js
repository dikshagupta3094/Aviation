/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./public/index.html",// Main HTML file
    "./public/**/*.html",
    "./public/**/*.php",
    // "./public/*.html", //All html file in Public 
    "./public/*.js",  // All js file in public    
    "./src/components/*.js",  // All js file in component   
    "./src/scripts/*.js",      // All JS and HTML files in src folder
    "./src/style/*.css"       // All CSS files in the styles folder (if needed)
],
  theme: {
    extend: {
      'noticeboard':"url('../src/assest/ticket.jpg')",
    },
  },
  plugins: [],
}

