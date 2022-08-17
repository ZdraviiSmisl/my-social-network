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
      colors: {"sky-blue": "hsla(225, 35%, 87%, 1)"}
    },
  },
  plugins: []
}
