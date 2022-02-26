module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      dark: "#202020",
      dark_01: '#262626',
      light: '#EDEDED',
      blue_highlight: '#4472CA'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
