/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0b131e",
        "light-obsidian": "#202b3b",
      },
      gridTemplateColumns: {
        'body': '1fr 3fr 3fr',
      }, 
      gridTemplateRows: {
        'body': '1fr 10fr',
        'forecast': '2fr 10fr',
      },
      spacing: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '85': '85px',
        '90': '90px',
        '100': '100px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '320': '320px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1200': '1200px',
        '1300': '1300px',
        '1400': "1400px",
        '1500': "1500px",
      },
    },
  },
  plugins: [],
}