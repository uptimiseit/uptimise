import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // <--- Add this line
  content: [
    // ... your content paths
  ],
  // ... rest of config
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This allows you to use className="font-josefin"
        josefin: ["var(--font-josefin)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;