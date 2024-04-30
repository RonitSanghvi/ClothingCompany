/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/*.js"],
  theme: {
    // colors:{
    //   black: '#000000',
    //   white: '#ffffff',
    //   primaryBg: '#15161E',
    // },
    extend: {
      backgroundImage:{
        'main_bg': "url('./assets/shirt.webp')",
        'logo': "url('./assets/Logo.jpg')",
        'shirt_1': "url('./assets/Shirt_1.jpg')",
        'shirt_2': "url('./assets/Shirt_2.jpg')",
        'shirt_4': "url('./assets/Shirt_4.webp')",
        'step_1': "url('./assets/manufacturing/step_1.jpg')",
        'step_2': "url('./assets/manufacturing/step_2.jpg')",
        'step_3': "url('./assets/manufacturing/step_3.jpg')",
        'step_4': "url('./assets/manufacturing/step_4.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

