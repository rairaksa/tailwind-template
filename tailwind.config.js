module.exports = {
  content: ["./index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins']
    },
    extend: {
      colors: {
        'milk-white': '#F5F5F5',
        // Primary
        'curious-dark': '#0E5A81',
        'curious': '#19A1E6',
        'curious-300': '#63BFEE',
        'curious-100': '#ACDDF6',
        'curious-50': '#BFE5F8',

        // Red
        'roman': '#F54D3D',
        'roman-300': '#F9948B',

        // Yellow
        'butter': '#F4C025',
        'butter-300': '#F8D672',

        // Green
        'meadow': '#14B866',
        'meadow-300': '#35E98F',

        // Black
        'noir-800': '#050506',
        'noir': '#383C43',
        'noir-400': '#6B7280',
        'noir-200': '#969BA7',
        'noir-50': '#C2C5CC',

        // Text
        'primary': '#050506',
        'secondary': '#6B7280',

        'overlay-base': 'rgba(43, 42, 42, 0.8)',
        'transparent': 'rgba(255, 255, 255, 0)',
      },},
  },
  plugins: [],
}