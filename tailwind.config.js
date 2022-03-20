module.exports = {
  content: ["./src/*.{html,js}", "./src/pages/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkgrey: "#1F1F1F",
        grey: "#2E2D2D",
        bemmblue: "#17CFC4",
        bemmgreen: "#48EA9C",
      },
      fontFamily: {
        "dm-sans": ["'DM Sans'", "sans-serif"],
      },
      width: {
        "30p": "30%",
      },
      backgroundImage: {
        "aboutus-cover":
          "url('/src/assets/images/backgrounds/aboutus-cover.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
