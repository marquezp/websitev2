/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        sliding: {
          "0%": { "margin-top": "-120px" },
          "5%": { "margin-top": "-90px" },
          "33%": { "margin-top": "-90px" },
          "38%": { "margin-top": "-45px" },
          "66%": { "margin-top": "-45px" },
          "71%": { "margin-top": "-0px" },
          "99.99%": { "margin-top": "-0px" },
          "100%": { "margin-top": "-120px" },
        },
      },
      animation: {
        sliding: "sliding 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
