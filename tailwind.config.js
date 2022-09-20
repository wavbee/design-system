/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        wgray: '#8c8c8c',
        white: '#ffffff',
        wred: '#ff2200',
        worange: '#ff5400',
        tangelo: '#f36e21',
        charcoal: '#333333',
      },
    },
  },
  plugins: [],
};
