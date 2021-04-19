module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: {
          primary: '#2F2E8B',
          secondary: '#1fb6ff',
          accent: '#009eeb',
          light: '#F5F5F5',
        },
        alternative: {
          1: '#42BB6D',
          2: '#6DBB1A',
        },
        backgroundOpacity: {
          10: '0.1',
          20: '0.2',
          95: '0.95',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
