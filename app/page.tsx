// import Image from "next/image";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/HomePage/Hero";
// import Footer from "./components/Footer/Footer";
// import FaqSection from "./components/HomePage/FAQ";
// import ServicesScroll from "./components/HomePage/Services";
// import PortfolioSection from "./components/HomePage/Projects";
// import ProjectsDelivered from "./components/HomePage/ProjectDelivered";
// import FounderAndTestimonials from "./components/HomePage/Testimonial";
// import HeroAnimation from "./components/HomePageAminations/HeroAnimation";
// import LiquidConnect from "./components/HomePage/LiquidConnect";
// import Map from "./components/HomePage/Map";

// export default function Home() {
//   return (
// <>

// <Hero />
// {/* <HeroAnimation /> */}
// <LiquidConnect />
// <ServicesScroll/>
// <PortfolioSection />
// <ProjectsDelivered />


// <FounderAndTestimonials />
// <FaqSection/>
// </>
//   );
// }


import type { Metadata } from "next"; // 1. Import Metadata type
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HomePage/Hero";
import Footer from "./components/Footer/Footer";
import FaqSection from "./components/HomePage/FAQ";
import ServicesScroll from "./components/HomePage/Services";
import PortfolioSection from "./components/HomePage/Projects";
import ProjectsDelivered from "./components/HomePage/ProjectDelivered";
import FounderAndTestimonials from "./components/HomePage/Testimonial";
import HeroAnimation from "./components/HomePageAminations/HeroAnimation";
import LiquidConnect from "./components/HomePage/LiquidConnect";
import Map from "./components/HomePage/Map";

// 2. Define your Meta Tags here
export const metadata: Metadata = {
  title: "Uptimiseit | UI/UX Design & Digital Transformation",
  description: "Your Trusted UI UX Design Agency. Redefining user experiences through Behavioural Science & AI.",
  icons: {
    icon: "/logo.png", // Points to public/logo.png
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Uptimiseit",
    description: "Your Trusted UI UX Design Agency.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Uptimiseit Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroAnimation /> */}
      <LiquidConnect />
      <ServicesScroll/>
      <PortfolioSection />
      <ProjectsDelivered />
      <FounderAndTestimonials />
      <FaqSection/>
    </>
  );
}