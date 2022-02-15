module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      dark: "#202020",
      dark_01: '#262626',
      light: '#EDEDED',
      blue_highlight: '#4472CA'
    },
    fontFamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
