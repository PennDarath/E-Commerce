/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1350px',
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false
  }
};
