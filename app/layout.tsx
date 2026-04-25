// import type { Metadata } from "next";
// import { Figtree, Josefin_Sans, Montserrat } from "next/font/google"; // Removed unused Geist fonts
// import "./globals.css";
// import { ThemeProvider } from "./components/theme-provider";
// import Navbar from "./components/Navbar/Navbar";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import Footer from "./components/Footer/Footer";
// // import { Analytics } from '@vercel/analytics/next';
// import { AnimatePresence } from "framer-motion";
// import { PageWrapper } from "@/components/PageWrapper";
// import Script from "next/script";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "700"],
//   variable: "--font-montserrat",
// });

// const figtree = Figtree({
//   subsets: ["latin"],
//   variable: "--font-figtree",
//   display: "swap",
// });

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap", // This allows text to show immediately with a fallback font
//   variable: "--font-josefin",
// });

// export const metadata: Metadata = {
//   title: "Uptimise IT | AI-Native Software Development & Engineering",
//   description:
//     "Uptimise IT is an AI-native software factory engineering scalable SaaS, AI apps, and Web3 ecosystems.",
//   metadataBase: new URL("https://uptimiseit-uptimise.vercel.app"),
//   icons: {
//     icon: [
//       {
//         url: "/favicon.png?v=4", // Change the 'v' number to force a refresh
//         href: "/favicon.png?v=4",
//       },
//     ],
//     shortcut: "/favicon.png?v=4",
//     apple: "/favicon.png?v=4",
//   },
//   alternates: {
//     canonical: "/",
//   },
//   other: {
//     preconnect: "https://uptimiseit-uptimise.vercel.app",
//     "dns-prefetch": "https://uptimiseit-uptimise.vercel.app",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth" suppressHydrationWarning>
//       <head>
//         <link rel="preload" href="/_next/static/css/main.css" as="style" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Uptimise IT",
//               url: "https://uptimiseit-uptimise.vercel.app",
//               logo: "https://uptimiseit-uptimise.vercel.app/logo.png",
//               description: "AI-native product engineering company.",
//               founder: {
//                 "@type": "Person",
//                 name: "Saurabh Sharma",
//               },
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 contactType: "customer support",
//                 email: "sales@uptimiseit.com",
//               },
//             }),
//           }}
//         />
//       </head>
//       <body
//         className={`${josefin.variable} ${montserrat.variable} ${figtree.variable} antialiased`}
//       >
//           <AnimatePresence mode="wait">
//        <PageWrapper  >
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Navbar />

//           <main>
//             {children}
//             <Analytics />
//             <SpeedInsights />
//             {/* ✅ GOOD: lazyOnload waits until the page is fully idle before fetching and executing */}
//             <Script
//               src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"
//               strategy="lazyOnload"
//             />

//             {/* 🔥 BEST: If you set up Partytown, 'worker' moves the script off the main thread entirely */}
//             <Script
//               src="https://heavy-customer-support-chat.com/widget.js"
//               strategy="worker"
//             />
//           </main>

//           <Footer />
//         </ThemeProvider>
//          </PageWrapper>
//        </AnimatePresence>
//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Figtree, Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", 
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Uptimise IT | AI-Native Software Development & Engineering",
  description: "Uptimise IT is an AI-native software factory engineering scalable SaaS, AI apps, and Web3 ecosystems.",
  metadataBase: new URL("https://uptimiseit.com"), // Updated to your real domain
  icons: {
    icon: [{ url: "/favicon.png?v=4", href: "/favicon.png?v=4" }],
    shortcut: "/favicon.png?v=4",
    apple: "/favicon.png?v=4",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uptimise IT",
              url: "https://uptimiseit.com",
              logo: "https://uptimiseit.com/logo.png",
              description: "AI-native product engineering company.",
              founder: {
                "@type": "Person",
                name: "Saurabh Sharma",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "sales@uptimiseit.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${josefin.variable} ${montserrat.variable} ${figtree.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar sits outside the page transitions so it doesn't re-render */}
          <Navbar />

          {/* Only the actual page content triggers Framer Motion animations */}
          <AnimatePresence mode="wait">
            <PageWrapper>
              <main>{children}</main>
            </PageWrapper>
          </AnimatePresence>

          {/* Footer sits outside the page transitions */}
          <Footer />
        </ThemeProvider>

        {/* Analytics called exactly ONCE */}
        <Analytics />
        <SpeedInsights />

        {/* Note: Update these with your real GTM IDs when ready, or remove if unused */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}