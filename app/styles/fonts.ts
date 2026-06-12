// 📁 app/styles/fonts.ts
import { Figtree, Josefin_Sans, Montserrat, Plus_Jakarta_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", 
  variable: "--font-josefin",
});

export const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-sans',
});

// Combine all variables into a clean, immutable template literal string array
export const fontClassNames = [
  josefin.variable,
  montserrat.variable,
  figtree.variable,
  sansFont.variable
].join(" ");