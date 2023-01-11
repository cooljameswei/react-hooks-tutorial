/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }){
      addComponents({
        '.btn': {
          padding: '1rem',
          borderColor: '#D8d8d8',
          fontWeight: '600',
          color: '#D8d8d8',
          borderWidth: '.1rem',
          transition: '.3s',
          '&:hover': {
            backgroundColor: '#D8d8d8',
            color: '#4a4f50',
          },
          '&:active': {
            backgroundColor: '#2e2f2f',
            color: '#4c4e4e',
          }
        }
      })
    })
  ],
}
