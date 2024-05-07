import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at top right, rgba(216, 76, 221, 0.2) 0%, rgba(216, 76, 221, 0) 80%), radial-gradient(ellipse at bottom left, rgba(104, 41, 239, 0.2) 0%, rgba(104, 41, 239, 0) 80%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'display': ['Syne']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl' : '1000px'
      }
    }
  },  
  plugins: [],
};
export default config;
