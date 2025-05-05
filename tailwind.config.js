/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'header-logo': "url('/assets/img/fahasa-logo.webp')",
      // }
    },
    // width: {
    //   '146.5': '586px',
    // },
    colors: {
      'red-201': 'rgb(201, 32, 38)',
    },
  },
  plugins: [],
}

