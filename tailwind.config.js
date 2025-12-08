/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        pizza: "#123456",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
