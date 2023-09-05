/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian": "#0b131e",
        "light-obsidian": "#202b3b",
        "lighter": "#151F2D",
      },
      gridTemplateColumns: {
        'body': '1fr 3fr 3fr',
      }, 
      gridTemplateRows: {
        'body': '1fr 10fr',
        'forecast': '2fr 10fr',
      },
    },
  },
  plugins: [],
}