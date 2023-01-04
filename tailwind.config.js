const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      PT: ["PT Serif", "serif"],
    },
    extend: {},
  },
  plugins: [],
});
