import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#0A4D82',
        'app-primary-light': '#197AFF',
      },
      screens: {
        'xm': '350px',  // Custom extra-small screen size
        'xs': '475px',  // Custom extra-small screen size
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1530px', // Custom double-extra-large screen size
      },
    },
  },
  plugins: [],
};
export default config;
