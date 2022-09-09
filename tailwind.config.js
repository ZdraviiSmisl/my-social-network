const plugin = require('tailwindcss/plugin')

module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      "40": "40px",
    },
    extend: {
      gridTemplateColumns: {
        "gridLi": "minmax(300px, 1fr) 100px"
      },
      colors: {"sky-blue": "hsla(225, 35%, 87%, 1)"},
      keyframes: {
        spinner: {
          "0%, 20%": {
            opacity:"1",
            letterSpacing:"2px"

          },
          "80%, 100%": {
            opacity: "0",
            letterSpacing: "32px"
          }
        }
      },
      animation: {
        spinner: "spinner 2s linear infinite alternate"
      }
    },
  },
  plugins: []
}
