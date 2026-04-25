// import type { Metadata } from "next";
// import { Figtree, Geist, Geist_Mono, Josefin_Sans, Montserrat } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "./components/theme-provider";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { AnimatePresence } from "framer-motion";
// import { PageWrapper } from "@/components/PageWrapper";

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "600", "700"], // Select the weights you need
//   variable: "--font-josefin", // This defines a CSS variable we use in Tailwind
//   display: "swap",
// });

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   display: 'swap',
//   // Optional: specify weights if you don't want the entire variable font
//   weight: ['400', '700'],
//   variable: '--font-montserrat', // This creates a CSS variable
// });

// const figtree = Figtree({
//   subsets: ['latin'],
//   variable: '--font-figtree',
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: "Uptimise IT | AI-Native Software Development & Engineering",
//   description: "Uptimise IT is an AI-native software factory. We partner with ambitious founders and enterprises to engineer scalable SaaS platforms, intelligent AI applications, and Web3 ecosystems at venture speed.",
//   keywords: [
//     "AI Software Development",
//     "SaaS Development Agency",
//     "Enterprise Engineering",
//     "Web3 Development",
//     "Digital Transformation",
//     "AI Automation Systems"
//   ],
//   // icons: {
//   //   icon: "/logo.png",
//   //   shortcut: "/logo.png",
//   //   apple: "/logo.png",
//   // },

//   icons: {
//   icon: "/favicon.png", // Or "/favicon.ico"
//   shortcut: "/favicon.png",
//   apple: "/favicon.png",
// },
//   openGraph: {
//     title: "Uptimise IT | The AI-Native Software Factory",
//     description: "Partner with elite architects to build scalable SaaS, enterprise systems, and Web3 platforms 40% faster using      AI-assistedengineering.",
//     url: "https://uptimiseit-uptimise.vercel.app",
//     siteName: "Uptimise IT",
//     type: "website",
//     images: [
//       {
//         url: "/logo.png", // Note: For best results, eventually replace this with a 1200x630px social cover image (og-image.png)
//         width: 1200,
//         height: 630,
//         alt: "Uptimise IT - AI-Native Software Engineering",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Uptimise IT | AI-Native Software Development",
//     description: "We build high-stakes digital products with mathematical precision and 100x engineering velocity.",
//     images: ["/logo.png"],
//   },
//   other: {
//     "preconnect": "https://uptimiseit-uptimise.vercel.app"
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth js" suppressHydrationWarning>
// <head>
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "Organization",
//         "name": "Uptimise IT",
//         "url": "https://uptimiseit-uptimise.vercel.app",
//         "logo": "https://uptimiseit-uptimise.vercel.app/logo.png",
//         "description": "Uptimise IT is an AI-native product engineering company helping startups and enterprises build scalable digital platforms using modern technologies and AI-assisted development workflows.",
//         "founder": {
//           "@type": "Person",
//           "name": "Saurabh Sharma"
//         },
//         "sameAs": [
//           "https://in.linkedin.com/company/uptimise-it",
//           "https://twitter.com/uptimise",
//           "https://github.com/uptimise"
//         ],
//         "contactPoint": {
//           "@type": "ContactPoint",
//           "contactType": "customer support",
//           "email": "sales@uptimiseit.com"
//         }
//       })
//     }}
//   />
// </head>
//       <body
//         className={`${josefin.variable} antialiased ${montserrat.variable} ${figtree.variable}`}
//       >
//         <AnimatePresence mode="wait">
//           <PageWrapper  >

//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <Navbar />
//           {children}
//           <Footer />
//         </ThemeProvider>
//         </PageWrapper>
//         </AnimatePresence>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Figtree, Josefin_Sans, Montserrat } from "next/font/google"; // Removed unused Geist fonts
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer/Footer";
// import { Analytics } from '@vercel/analytics/next';
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
  display: "swap", // This allows text to show immediately with a fallback font
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Uptimise IT | AI-Native Software Development & Engineering",
  description:
    "Uptimise IT is an AI-native software factory engineering scalable SaaS, AI apps, and Web3 ecosystems.",
  metadataBase: new URL("https://uptimiseit-uptimise.vercel.app"),
  icons: {
    icon: [
      {
        url: "/favicon.png?v=4", // Change the 'v' number to force a refresh
        href: "/favicon.png?v=4",
      },
    ],
    shortcut: "/favicon.png?v=4",
    apple: "/favicon.png?v=4",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    preconnect: "https://uptimiseit-uptimise.vercel.app",
    "dns-prefetch": "https://uptimiseit-uptimise.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/_next/static/css/main.css" as="style" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uptimise IT",
              url: "https://uptimiseit-uptimise.vercel.app",
              logo: "https://uptimiseit-uptimise.vercel.app/logo.png",
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
      <body
        className={`${josefin.variable} ${montserrat.variable} ${figtree.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          <main>
            {children}
            <Analytics />
            <SpeedInsights />
            {/* ✅ GOOD: lazyOnload waits until the page is fully idle before fetching and executing */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"
              strategy="lazyOnload"
            />

            {/* 🔥 BEST: If you set up Partytown, 'worker' moves the script off the main thread entirely */}
            <Script
              src="https://heavy-customer-support-chat.com/widget.js"
              strategy="worker"
            />
          </main>

          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
