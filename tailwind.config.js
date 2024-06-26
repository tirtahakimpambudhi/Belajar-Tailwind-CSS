/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./public/*.{html,js}"],
  theme: {
    extend: {
      spacing : {
        13 : '3.25rem',
      },
      fontFamily: {
        inter : ['Inter']
      },
      colors : {
        body : '#fcfbed',
        p : '#26402b'
      }
    },
  },
  plugins: [],
}

