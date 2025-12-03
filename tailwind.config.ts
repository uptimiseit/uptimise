// import type { Config } from "tailwindcss";

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   darkMode: 'class', // <--- Add this line
//   content: [
//     // ... your content paths
//   ],
//   // ... rest of config
// }

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         // This allows you to use className="font-josefin"
//         josefin: ["var(--font-josefin)", "sans-serif"], 
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;


import type { Config } from "tailwindcss";

// We remove the explicit ': Config' type here to prevent TS from fighting 
// the custom TAOS configuration.
const config = {
  darkMode: 'class',
  content: {
    relative: true,
    transform: (content: string) => content.replace(/taos:/g, ''),
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        josefin: ["var(--font-josefin)", "sans-serif"],
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
} as any; // <--- Casting to 'any' forces TypeScript to accept this object

export default config;