/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gumela': ['Gumela', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
