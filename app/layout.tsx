// app/layout.tsx
import type { Metadata } from "next";
import { Figtree, Josefin_Sans, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Script from "next/script";

// 🟢 CRITICAL SPEED FIX: Apply 'display: swap' globally across EVERY custom font asset loader
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

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Uptimise IT | AI-Native Software Development & Engineering",
  description: "Uptimise IT is an AI-native software factory engineering scalable SaaS, AI apps, and Web3 ecosystems.",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://uptimiseit.com"), 
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
        {/* Schema markup generation loaded statically without hydration costs */}
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
      <body className={`${josefin.variable} ${montserrat.variable} ${figtree.variable} ${sansFont.variable} antialiased bg-white text-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar sits cleanly outside dynamic routing layout states */}
          <Navbar />

          <AnimatePresence mode="wait">
            <PageWrapper>
              <main>{children}</main>
            </PageWrapper>
          </AnimatePresence>

          <Footer />
        </ThemeProvider>

        {/* Telemetry counters called cleanly below the layout fold */}
        <Analytics />
        <SpeedInsights />

        {/* 🟢 TRACKING PERFORMANCE FIX: Changed script loading strategies from default execution blocks to pure idle triggers */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K8CMC8QK');
          `}
        </Script>
        
        <Script
          src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
          strategy="lazyOnload"
        />

        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=GTM-K8CMC8QK" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}