// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils"; // Assuming you have a standard utils file, otherwise remove cn
// import { 
//   FaReact, FaAngular, FaJs, FaCss3Alt, FaNodeJs, FaPython, FaAws, FaDocker, FaFigma, FaSketch 
// } from "react-icons/fa";
// import { 
//   SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, 
//   SiGoogleanalytics, SiHubspot, SiMailchimp 
// } from "react-icons/si";

// // 1. Data Configuration
// const categories = [
//   {
//     id: "frontend",
//     label: "Frontend",
//     items: [
//       { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
//       { name: "Angular", icon: FaAngular, color: "#DD0031" },
//       { name: "Javascript", icon: FaJs, color: "#F7DF1E" },
//       { name: "CSS 3", icon: FaCss3Alt, color: "#1572B6" },
//       { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
//       { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
//     ],
//   },
//   {
//     id: "backend",
//     label: "Backend",
//     items: [
//       { name: "Node.js", icon: FaNodeJs, color: "#339933" },
//       { name: "Python", icon: FaPython, color: "#3776AB" },
//     ],
//   },
//   {
//     id: "database",
//     label: "Database",
//     items: [
//       { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
//       { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
//     ],
//   },
//   {
//     id: "cloud",
//     label: "Cloud & DevOps",
//     items: [
//       { name: "AWS", icon: FaAws, color: "#FF9900" },
//       { name: "Docker", icon: FaDocker, color: "#2496ED" },
//     ],
//   },
//   {
//     id: "design",
//     label: "Designing Tools",
//     items: [
//       { name: "Figma", icon: FaFigma, color: "#F24E1E" },
//       { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
//       { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
//     ],
//   },
//   {
//     id: "marketing",
//     label: "Marketing Tools",
//     items: [
//       { name: "Analytics", icon: SiGoogleanalytics, color: "#E37400" },
//       { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B" },
//       { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
//     ],
//   },
// ];

// export default function TechStack() {
//   const [activeTab, setActiveTab] = useState("frontend");

//   const activeContent = categories.find((cat) => cat.id === activeTab);

//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="container mx-auto px-4">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Technologies and Platforms We Use
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             We leverage the latest and most reliable tools to build your digital solution.
//           </p>
//         </div>

//         {/* Tabs Navigation */}
//         <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 border-b border-gray-200">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveTab(category.id)}
//               className={cn(
//                 "relative pb-4 text-lg font-medium transition-colors duration-300",
//                 activeTab === category.id ? "text-blue-600" : "text-gray-500 hover:text-gray-800"
//               )}
//             >
//               {category.label}
              
//               {/* Animated Underline */}
//               {activeTab === category.id && (
//                 <motion.div
//                   layoutId="activeTab"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Content Area */}
//         <div className="min-h-[200px] flex items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 w-full max-w-5xl"
//             >
//              {/* Replace the icon rendering part inside activeContent.items.map */}
// {activeContent?.items.map((tech) => (
//   <div 
//     key={tech.name} 
//     className="flex flex-col items-center justify-center group cursor-pointer"
//   >
//     {/* Removed text-gray-400 class and applied tech.color directly */}
//     <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
//       <tech.icon 
//         style={{ color: tech.color }} // 🟢 Applies brand color by default
//       />
//     </div>
//     <span className="text-lg font-medium text-gray-700">
//       {tech.name}
//     </span>
//   </div>
// ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// }
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Server, Smartphone, 
  BrainCircuit, CloudIcon, ChevronRight 
} from 'lucide-react';

const techData = [
  {
    id: "ai",
    category: "AI & Intelligence",
    icon: <BrainCircuit size={24} />,
    techs: ["LLMs", "AI Agents", "PyTorch", "Automation Systems"],
    details: "Proprietary agentic frameworks for 100x velocity.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "frontend",
    category: "Frontend Architecture",
    icon: <Code2 size={24} />,
    techs: ["Next.js", "React", "Astro", "Tailwind"],
    details: "Sub-second load times with modern rendering patterns.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  },
  {
    id: "backend",
    category: "Backend Systems",
    icon: <Server size={24} />,
    techs: ["Node.js", "Java", "Python", "Go"],
    details: "High-concurrency systems engineered for stability.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  },
  {
    id: "mobile",
    category: "Mobile Excellence",
    icon: <Smartphone size={24} />,
    techs: ["Kotlin", "Swift", "Flutter", "React Native"],
    details: "Unified experiences across iOS and Android.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  },
  {
    id: "cloud",
    category: "Cloud Infrastructure",
    icon: <CloudIcon size={24} />,
    techs: ["AWS", "GCP", "Docker", "Kubernetes"],
    details: "Zero-trust security with automated CI/CD.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  }
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(techData[0]);

  return (
    <section className="relative bg-[#FDFDFF] py-32 px-6 overflow-hidden">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 flex justify-around opacity-[0.03] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-slate-900" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Engineering Spec Style */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-100 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
              <span className="w-8 h-px bg-blue-600" />
              Stack_Manifest_2026
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950">
              Tech <span className="text-blue-600">DNA.</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 font-body text-sm leading-relaxed">
            A precision-engineered selection of technologies designed for the AI-Native era.
          </p>
        </div>

        {/* --- THE HARDWARE RACK LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-2 border-y border-slate-100 py-2">
          
          {/* Left Side: Navigation Slots */}
          <div className="lg:w-1/2 flex flex-col gap-2">
            {techData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item)}
                onClick={() => setActiveTab(item)}
                className={`relative flex items-center justify-between p-8 rounded-2xl transition-all duration-500 text-left group overflow-hidden ${
                  activeTab.id === item.id 
                  ? 'bg-slate-950 text-white' 
                  : 'bg-white border border-slate-100 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${
                    activeTab.id === item.id ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:text-blue-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-xl md:text-2xl font-black font-header tracking-tight">
                    {item.category}
                  </span>
                </div>
                
                <ChevronRight className={`transition-all duration-500 ${
                  activeTab.id === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`} />

                {/* Vertical "Processing" Bar */}
                {activeTab.id === item.id && (
                  <motion.div 
                    layoutId="active-bar"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: The Content Blade */}
          <div className="lg:w-1/2 min-h-[500px] relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 flex flex-col justify-center items-center p-12">
            
            {/* Background Texture for the "Blade" */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            <div className="absolute top-0 right-0 p-20 opacity-[0.02] text-slate-900 pointer-events-none">
              {activeTab.icon}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative z-10 w-full text-center"
              >
                <div className="mb-10 inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                   <span className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400">
                     System_Status::Optimized
                   </span>
                </div>

                <h3 className="text-4xl md:text-6xl font-black font-header tracking-tight text-slate-950 mb-6">
                  {activeTab.category.split(' ')[0]} <br />
                  <span className="text-blue-600">{activeTab.category.split(' ')[1]}</span>
                </h3>

                <p className="text-slate-500 font-body text-lg mb-12 max-w-sm mx-auto">
                  {activeTab.details}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {activeTab.techs.map((t, i) => (
                    <span 
                      key={i}
                      className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Global Tech Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black font-mono text-slate-300 uppercase tracking-[0.4em]">
           <span>High_Concurrency_Safety</span>
           <div className="hidden md:block w-px h-4 bg-slate-200" />
           <span>Scalable_Microservices</span>
           <div className="hidden md:block w-px h-4 bg-slate-200" />
           <span>Continuous_AI_Deployment</span>
        </div>

      </div>
    </section>
  );
};

export default TechStack;