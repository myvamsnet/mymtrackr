import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        "500": "#246BFD",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "off-white": {
          "100": "#F7F9FF",
          "200": "#F4F5F7",
          "300": "#FBFCFF",
          "400": "#FCFDFE",
          "500": "#F1F5FD",
          DEFAULT: "#F4F8FF",
        },
        dark: {
          "100": "#7A7A84",
          "200": "#808387",
          "300": "#3E3E4C",
          "400": "#1A1A1E",
          "500": "#EFF2F7",

          DEFAULT: "#010114",
        },
        success: {
          DEFAULT: "#1D9213",
        },
        payable: {
          DEFAULT: "#9B8306",
        },
        danger: {
          "500": "#C25353",
          DEFAULT: "#880606",
        },
        primary: {
          DEFAULT: "#246BFD",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
module.exports = withMT(config);
