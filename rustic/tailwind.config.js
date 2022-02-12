const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    fontFamily: {
      'handwriting': ['Style Script'],
      'serif': ['Raleway']
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'bright': '#f4f5ef',
      'taffy': '#c39b6a',
      'rust': '#c25a3d',
      'biscotti': '#d9c8ac'
    }
  },
  plugins: [],
}
