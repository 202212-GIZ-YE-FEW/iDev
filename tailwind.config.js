/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/pages/**/*.{js,jsx}",   
             "./src/components/**/*.{js,jsx}",  
  ],
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}