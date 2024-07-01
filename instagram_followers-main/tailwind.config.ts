import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      bg: "#F2F2F2",
      black: "#080808",
      blackSecondary: "#121212",
      gray: "#D2D2D2",
      darkGray: "#AAAAAA",
      white: "#FFFFFF",
      secondary: "#fc883c",
    },

    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      spin: "spin 1s linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },

      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
export default config;
