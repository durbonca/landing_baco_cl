module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "3/4": "60vh",
        "1/3": "33vh",
        "1/4": "25vh"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
