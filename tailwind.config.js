module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      textColor: {
        warning: "#fdb766",
        success: "white",
        info: "#f1f3fa"
      },
      borderColor: {
        warning: "#fdb766",
        success: "#42503d",
        info: "#555762"
      },
      backgroundColor: {
        warning: "#fdb7661a",
        success: "#232521",
        info: "#2b2f3a"
      },
      colors: {
        primary: "white",
        secondary: "#f0f04f",
        text: "#8d9092",
        background: "#121212",
        containers: "#141414",
        visible: "#202020",
        selected: "#1c1c1c",
        hover: "#1d1d1d",
        lines: "#323232"
      }
    },
  },
  plugins: [],
}