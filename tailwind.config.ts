import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      colors: {
        "eu-black": "#171a22",
        "eu-blue-1": "#003399",
        "eu-blue-2": "#0e47cb",
        "eu-blue-3": "#3e6cd5",
        "eu-yellow": "#ffcc00",

        s: "rgb(237, 27, 52)",
        sd: "rgb(251, 199, 0)",
        m: "rgb(82, 189, 236)",
        v: "rgb(218, 41, 28)",
        c: "rgb(17, 72, 56)",
        kd: "rgb(0, 94, 161)",
        mp: "rgb(83, 160, 69)",
        l: "rgb(0, 106, 179)",
        fl: "linear-gradient(90deg, rgba(209,36,56,1) 0%, rgba(24,47,80,1) 100%)",

        grey: "#515560",

        pink: "#fe3c72",
        dark: "#424242",
        light: "#ffffff",

        peach: "#fd5564",
        rose: "#ef4a75",
      },
    },
  },
  plugins: [],
};
export default config;
