/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.{html,js}",
    "./taller/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06A9D2',
        'secondary': '#036781',
        'fade-green': '#00A91F',
        'blue-lumos': '#00CCFF',
        'blue-light': '#E9F8FF',
        'fade-terroso': '#1D0806'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
    },
  },
  },
  plugins: [

    ]
}

