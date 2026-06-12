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

        <Script id="mixpanel-init" strategy="afterInteractive">
          {`
    (function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_search looker_sign_in".split(" ");
    for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
    
    // Replace YOUR_TOKEN with your actual Mixpanel Project Token
    mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN", { 
      track_pageview: true,
      persistence: 'localStorage' 
    });
  `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-K8CMC8QK"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
