// 📁 app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { fontClassNames } from "./styles/fonts"; // 🚀 Clean font map import path
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Uptimise IT | AI-Native Software Development & Engineering",
  description:
    "Uptimise IT is an AI-native software factory engineering scalable SaaS, AI apps, and Web3 ecosystems.",
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
      {/* 🚀 Injecting the pre-compiled class names string block clean */}
      <body className={`${fontClassNames} antialiased bg-white text-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          <AnimatePresence mode="wait">
            <PageWrapper>
              <main>{children}</main>
            </PageWrapper>
          </AnimatePresence>

          <Footer />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />

        {/* <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K8CMC8QK');
          `}
        </Script> */}

        {/* <Script
          src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
          strategy="lazyOnload"
        /> */}

        
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-K8CMC8QK"
          strategy="lazyOnload"
        /> */}
      </body>
    </html>
  );
}
