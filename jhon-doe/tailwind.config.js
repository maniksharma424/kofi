/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "info-text-primary": "linear-gradient(96deg, #5B8DFE 0%, #FF5F5F 100%)",
        "info-text-secondary":
          "linear-gradient(98deg, #5B8DFE 0%, #FF5F5F 100%)",
      },
      fontFamily: {
        Nunito: ["Nunito"],
      },
      boxShadow: {
        header: "0px 4px 10px 0px rgba(51, 51, 51, 0.06)",
        claim: "0px 3.815px 19.073px 0px rgba(149, 185, 193, 0.60)",
        "dark-claim": "0px 3.815px 19.073px 0px rgba(149, 185, 193, 0.60)",
      },

      colors: {
        "gray-10": "#FFF",
        dark: "#0D0D0D",
        red: "#E43834",
        "primary-text": "#000",
      },
    },
  },
  plugins: [],
};
