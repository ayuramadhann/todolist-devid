/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html', './src/**/*.vue', './src/main.js'],
    // ...
  },
  // ...
}
