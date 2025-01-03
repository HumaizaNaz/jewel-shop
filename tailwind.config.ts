import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },  gold: {
        100: '#FFF5C2',
        200: '#FFE09C',
        300: '#FFD700', // Primary Gold Color
        400: '#FFBF00',
        500: '#E6A700',
      },
    },
  },
  plugins: [],
};
export default config;
