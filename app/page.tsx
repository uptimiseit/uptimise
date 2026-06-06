// import type { Metadata } from "next"; // 1. Import Metadata type
// import Hero from "./components/HomePage/Hero";
// import TechStack from "./components/HomePage/TechStack";
// import PhilosophySection from "./components/HomePage/LiquidConnect";
// import ProblemSection from "./components/ProblemSection";
// import AIOSFactory from "./components/HomePage/AIOSFactory";
// import HumanAICollaboration from "./components/HumanAICollaboration";
// import AgentEcosystem from "./components/HomePage/AgentEcosystem";
// import CompareSection from "./components/HomePage/Compare";
// import DevelopmentProcess from "./components/HomePage/DevelopmentProcess";
// import ServicesEcosystem from "./components/HomePage/ServicesEcosystem";
// import IndustriesSection from "./components/HomePage/IndustriesSection";
// import TransparencySection from "./components/HomePage/TransparencySection";
// import EnterpriseStandards from "./components/HomePage/EnterpriseStandards";
// import ProjectsLedger from "./components/HomePage/ProjectsLedger";
// // import KnowledgeHub from "./components/HomePage/KnowledgeHub";
// // import FAQSection from "./components/HomePage/FAQSection";
// import FinalCTA from "./components/HomePage/FinalCTA";
// import FactoryArchitecture from "./components/HomePage/FactoryArchitecture";
// import NewBlogs from "./components/HomePage/NewBlogs";
// import ProjectEstimator from "./components/Clients/page";
// import FAQSection from "./components/HomePage/FAQSection";
// import TechTrends from "./components/HomePage/KnowledgeHub";

// // 2. Define your Meta Tags here
// export const metadata: Metadata = {
//   title: "Uptimise IT | AI-Native Software Development & Engineering",
//   description:
//     "Uptimise IT is an AI-native software factory. We partner with ambitious founders and enterprises to engineer scalable SaaS platforms, intelligent AI applications, and Web3 ecosystems at venture speed.",
//   keywords: [
//     "AI Software Development",
//     "SaaS Development Agency",
//     "Enterprise Engineering",
//     "Web3 Development",
//     "Digital Transformation",
//     "AI Automation Systems",
//   ],
//   icons: {
//     icon: "/logo.png",
//     shortcut: "/logo.png",
//     apple: "/logo.png",
//   },
//   openGraph: {
//     title: "Uptimise IT | The AI-Native Software Factory",
//     description:
//       "Partner with elite architects to build scalable SaaS, enterprise systems, and Web3 platforms 40% faster using AI-assisted engineering.",
//     url: "https://uptimiseit.com",
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
//     description:
//       "We build high-stakes digital products with mathematical precision and 100x engineering velocity.",
//     images: ["/logo.png"],
//   },
// };

// export default function Home() {
//   return (
//     <>
//       <Hero />

//       <PhilosophySection />
//       <ProblemSection />
//       <AIOSFactory />
// {/*  */}
//       <HumanAICollaboration />  
//       {/*  */}
//       <AgentEcosystem />
//       <CompareSection />
//       <DevelopmentProcess />
//       <ServicesEcosystem />
//       <TechStack />

//       <IndustriesSection />
//       <TransparencySection />
// {/*  */}
//       <EnterpriseStandards />
//       <ProjectsLedger />
//       <ProjectEstimator />
// {/*  */}
//       <NewBlogs />

//       <TechTrends />
//       <FAQSection />
//       <FactoryArchitecture />
//       <FinalCTA />
//     </>
//   );
// }


import type { Metadata } from "next";
import dynamic from "next/dynamic";

// 1. CRITICAL COMPONENTS: Loaded instantly (No dynamic import)
import Hero from "./components/HomePage/Hero";
import PhilosophySection from "./components/HomePage/LiquidConnect";

// 2. DEFERRED COMPONENTS: Code-split and lazy-loaded on demand
const ProblemSection = dynamic(() => import("./components/ProblemSection"), { ssr: true });
const AIOSFactory = dynamic(() => import("./components/HomePage/AIOSFactory"), { ssr: true });
const HumanAICollaboration = dynamic(() => import("./components/HumanAICollaboration"), { ssr: true });
const AgentEcosystem = dynamic(() => import("./components/HomePage/AgentEcosystem"), { ssr: true });
const CompareSection = dynamic(() => import("./components/HomePage/Compare"), { ssr: true });
const DevelopmentProcess = dynamic(() => import("./components/HomePage/DevelopmentProcess"), { ssr: true });
const ServicesEcosystem = dynamic(() => import("./components/HomePage/ServicesEcosystem"), { ssr: true });
const TechStack = dynamic(() => import("./components/HomePage/TechStack"), { ssr: true });
const IndustriesSection = dynamic(() => import("./components/HomePage/IndustriesSection"), { ssr: true });
const TransparencySection = dynamic(() => import("./components/HomePage/TransparencySection"), { ssr: true });
const EnterpriseStandards = dynamic(() => import("./components/HomePage/EnterpriseStandards"), { ssr: true });
const ProjectsLedger = dynamic(() => import("./components/HomePage/ProjectsLedger"), { ssr: true });
const ProjectEstimator = dynamic(() => import("./components/Clients/page"), { ssr: true });
const NewBlogs = dynamic(() => import("./components/HomePage/NewBlogs"), { ssr: true });
const TechTrends = dynamic(() => import("./components/HomePage/KnowledgeHub"), { ssr: true });
const FAQSection = dynamic(() => import("./components/HomePage/FAQSection"), { ssr: true });
const FactoryArchitecture = dynamic(() => import("./components/HomePage/FactoryArchitecture"), { ssr: true });
const FinalCTA = dynamic(() => import("./components/HomePage/FinalCTA"), { ssr: true });

export const metadata: Metadata = {
  title: "Uptimise IT | AI-Native Software Development & Engineering",
  description: "Uptimise IT is an AI-native software factory. We partner with ambitious founders and enterprises to engineer scalable SaaS platforms, intelligent AI applications, and Web3 ecosystems at venture speed.",
  keywords: ["AI Software Development", "SaaS Development Agency", "Enterprise Engineering", "Web3 Development", "Digital Transformation", "AI Automation Systems"],
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Uptimise IT | The AI-Native Software Factory",
    description: "Partner with elite architects to build scalable SaaS, enterprise systems, and Web3 platforms 40% faster using AI-assisted engineering.",
    url: "https://uptimiseit.com",
    siteName: "Uptimise IT",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Uptimise IT - AI-Native Software Engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uptimise IT | AI-Native Software Development",
    description: "We build high-stakes digital products with mathematical precision and 100x engineering velocity.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <>
      {/* Loaded instantly - Unblocked Main Thread */}
      <Hero />
      <PhilosophySection />

      {/* Chunked & deferred scripts */}
      {/* <ProblemSection />
      <AIOSFactory />
      <HumanAICollaboration />  
      <AgentEcosystem />
      <CompareSection />
      <DevelopmentProcess />
      <ServicesEcosystem />
      <TechStack />
      <IndustriesSection />
      <TransparencySection />
      <EnterpriseStandards />
      <ProjectsLedger />
      <ProjectEstimator />
      <NewBlogs />
      <TechTrends />
      <FAQSection />
      <FactoryArchitecture />
      <FinalCTA /> */}
    </>
  );
}