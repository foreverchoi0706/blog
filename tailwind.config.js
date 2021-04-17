module.exports = {
  corePlugins: {
    preflight: false, //css 초기화
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        2: 2,
        3: 3,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
