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
        "O-auth-buttons":
          " 0px 2px 4px -2px rgba(0, 0, 0, 0.10), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
        "confirm-email": "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
        feed: "0px 13px 23px 0px rgba(0, 0, 0, 0.11)",
        searchBox: " 0px 13px 30px 0px rgba(0, 0, 0, 0.03)",
        newsletter: "0px 0px 18px 0px rgba(0, 0, 0, 0.25)",
        "newsLetter-card":
          "0px 1.684px 3.368px -1.684px rgba(0, 0, 0, 0.10), 0px 3.368px 5.053px -0.842px rgba(0, 0, 0, 0.10)",
        "dark-newsLetter-card":
          " 0px 1.684px 3.368px -1.684px rgba(0, 0, 0, 0.10), 0px 3.368px 5.053px -0.842px rgba(0, 0, 0, 0.10)",
        subscribe: " 0px 9.244px 16.356px 0px rgba(0, 0, 0, 0.11)",
        menu: "-4px 0px 64px 0px rgba(0, 0, 0, 0.10);",
        "membership-card": "0px 1.621px 4.862px 0px rgba(0, 0, 0, 0.25)",
        "buy-now":
          "0px 1.153px 2.305px -1.153px rgba(33, 33, 33, 0.20), 0px 2.305px 3.458px -0.576px rgba(33, 33, 33, 0.20);",
        "product-card": "0px 0.85px 1.699px 0px rgba(51, 65, 86, 0.08)",
        "product-page-card": "0px 5.613px 12.23px 0px rgba(0, 0, 0, 0.25);",
        "latest-modal":
          " 0px 5.689px 28.444px 0px rgba(0, 0, 0, 0.04), 0px 1.422px 3.556px 0px rgba(0, 0, 0, 0.05), 0px 0px 1.422px 0px rgba(0, 0, 0, 0.15)",
        Calendar: "0px 13.832px 31.92px 0px rgba(0, 0, 0, 0.19)",
        "schedule-meeting": "1.932px 0.481px 14.569px 0px rgba(0, 0, 0, 0.20)",
        "home-header":"0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
      },

      colors: {
        "gray-10": "#FFFFFF",
        dark: "#101010",
        "gloss-dark": "#0D0D0D",
        red: "#E43834",
        "primary-text": "#333",
        "secondary-text": "#333333cc",
      },
    },
  },
  plugins: [],
};
