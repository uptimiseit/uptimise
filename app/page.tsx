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
