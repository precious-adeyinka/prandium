module.exports = {
  darkMode: "media", // using class strategy for dark mode functionality  - manual implementation
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'black' : '#241103',
      'brown' : '#241103',
      'orange' : '#241103',
      'yellow' : '#241103',
      'lightamber': '#F8D39F'
    },
    extend: {},
  },
  plugins: [],
}
