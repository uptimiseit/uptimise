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
import TechStack from "./components/HomePage/TechStack";
import BlogSection from "./components/HomePage/Blog";

// 2. Define your Meta Tags here
export const metadata: Metadata = {
  title: "Uptimiseit | UI/UX Design & Digital Transformation",
  description: "We will focus on high-intent keywords like 'Digital Transformation,' 'Enterprise Development,' and 'AI Solutions.'.",
  icons: {
    icon: "/logo.png", // Points to public/logo.png
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Uptimiseit",
    description: "We will focus on high-intent keywords like 'Digital Transformation,' 'Enterprise Development,' and 'AI Solutions.'",
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
      <TechStack />
      <BlogSection />
      <ProjectsDelivered />
      <FounderAndTestimonials />
      <FaqSection/>
    </>
  );
}