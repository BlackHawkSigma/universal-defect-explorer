module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'po-blue': '#0055a1',
      },
    },
    fontFamily: {
      heading: 'Comfortaa',
      content: 'Franklin Gothic Book, Libre Franklin',
    },
  },
  plugins: [],
}
