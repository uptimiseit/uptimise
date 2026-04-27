// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Lightbulb,
//   Search,
//   PenTool,
//   Monitor,
//   Smartphone,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";
// import dynamic from "next/dynamic";
// // import Image from "next/image"; // Ensure you have images or remove Image components if testing
// import ab1 from "@/public/json/ab1.json";
// import ab2 from "@/public/json/ab2.json";
// import ab3 from "@/public/json/ab3.json";
// import ab4 from "@/public/json/ab4.json";
// import ab5 from "@/public/json/ab5.json";
// import Image from "next/image";

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// // --- Data Constants ---

// const SERVICES = [
//   "UI Design",
//   "UX Design",
//   "UI Development",
//   "UI Guidelines",
//   "Design System",
//   "User Research",
//   "UX Consultancy",
//   "UX Writing",
//   "Iconography",
//   "Illustrations",
//   "Animations",
// ];

// const PROCESS_STEPS = [
//   {
//     title: "Empathise",
//     desc: "We strive to be a UI UX agency that decodes emotions, anticipates behaviors, and maps journeys.",
//     icon: ab1,
//   },
//   {
//     title: "Define (The Problem)",
//     desc: "We blend behavioral insights with structured logic, ensuring functions and workflows feel intuitive.",
//     // icon: <PenTool className="w-8 h-8 text-gray-700" />,
//     icon: ab2,
//   },
//   {
//     title: "Ideation",
//     desc: "Our UI UX design firm integrates neuromarketing principles with strategy.",
//     // icon: <Lightbulb className="w-8 h-8 text-gray-700" />,
//     icon: ab3,
//   },
//   {
//     title: "Prototype",
//     desc: "We don't sketch possibilities, we build them considering every property to be a conversation starter.",
//     // icon: <Monitor className="w-8 h-8 text-gray-700" />,
//     icon: ab4,
//   },
//   {
//     title: "Testing",
//     desc: "As a UI and UX company that focuses on behavioral and cognitive assessments, we refine usability.",
//     // icon: <CheckCircle className="w-8 h-8 text-gray-700" />,
//     icon: ab5,
//   },
// ];

// const TOOLS = [
//   { name: "Adobe XD", color: "text-pink-700", label: "Xd" },
//   { name: "Photoshop", color: "text-blue-700", label: "Ps" },
//   { name: "Illustrator", color: "text-orange-600", label: "Ai" },
//   { name: "Sketch", color: "text-yellow-500", label: "💎" },
//   { name: "Figma", color: "text-purple-600", label: "Fi" },
//   { name: "InVision", color: "text-red-500", label: "in" },
// ];

// // --- Animation Helper ---
// const FadeIn = ({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 0.6, delay, ease: "easeOut" }}
//     className={className}
//   >
//     {children}
//   </motion.div>
// );

// export default function DesignPage() {
//   return (
//     <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 selection:text-pink-900">
//       {/* --- 1. HERO SECTION --- */}
//       <section className="container mx-auto px-6 py-20 md:py-32">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Left: Illustration (Placeholder for the Brain/Bulb) */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full md:w-1/2 flex justify-center"
//           >
//             {/* Replace this div with your actual SVG/Image */}
//             <div className="relative w-80 h-80 border-2 border-gray-100 rounded-full flex items-center justify-center bg-gray-50">
//               <Lightbulb strokeWidth={1} size={120} className="text-gray-400" />
//               <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500 rounded-full"></div>
//             </div>
//           </motion.div>

//           {/* Right: Text */}
//           <div className="w-full md:w-1/2 space-y-6">
//             <FadeIn>
//               <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">
//                 Design
//               </span>
//               <div className="text-sm text-gray-400 mt-1 mb-4">
//                 Home • Services • Design
//               </div>
//               <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
//                 We deliver art <br />
//                 <span className="text-gray-400">inspired by science.</span>
//               </h1>
//               <p className="text-xl md:text-2xl font-medium text-gray-600 mt-6 max-w-lg">
//                 Acing user psychology makes us the best UI UX design agency.
//               </p>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* --- 2. INTRO & SERVICES LIST --- */}
//       <section className="flex items-center justify-center">
//         <div className="max-w-4xl  flex items-center justify-center  px-6">
//           <div className="flex flex-col  gap-12">
//             {/* Left Title */}
//             <div className="w-full ">
//               <FadeIn>
//                 <h2 className="text-xl text-rose-500 font-bold leading-snug">
//                   What UI/UX Design Services Do We Offer?
//                 </h2>
//                 <p className="mt-6 text-2xl font-bold leading-relaxed">
//                   At the crossroads of human behaviour, neuromarketing, and
//                   data-driven design we craft what we call the ‘blended
//                   experience’ - where logic meets intuition, and design becomes
//                   second nature.{" "}
//                 </p>

//                 <p className="mt-6 text-lg">
//                   UI UX design services that go beyond shaping interfaces; we
//                   turn simple thoughts into immersive, behaviour-driven digital
//                   visions.
//                 </p>
//               </FadeIn>
//             </div>

//             {/* Right Grid */}
//             <div className="w-full ">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10">
//                 {SERVICES.map((service, index) => (
//                   <FadeIn key={index} delay={index * 0.05}>
//                     <h3 className="text-2xl font-bold text-gray-800 border-b w-fit border-dashed hover:text-pink-500 transition-colors cursor-pointer">
//                       {service}
//                     </h3>
//                   </FadeIn>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- 3. PROCESS (HOW WE DO IT) --- */}
//       <section className="py-20 bg-white flex items-center justify-center">
//         <div className=" px-6 max-w-4xl ">
//           <div className="text-center mb-16">
//             <span className="text-rose-500 font-bold uppercase tracking-widest text-base">
//               How We Do It ?
//             </span>
//             <h2 className="text-4xl font-bold mt-2">
//               Every pixel, we design with intent.
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {PROCESS_STEPS.map((step, index) => (
//               <FadeIn
//                 key={index}
//                 delay={index * 0.1}
//                 className="p-8 transition-all duration-300 bg-white group"
//               >
//                 <div className="mb-6 w-28 h-28 rounded-lg flex items-center justify-center  transition-colors">
//                   <Lottie
//                     animationData={step.icon}
//                     loop={true}
//                     className="w-full h-full" // Use Tailwind to control size
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">{step.title}</h3>
//                 <p className=" leading-relaxed text-base">{step.desc}</p>
//               </FadeIn>
//             ))}
//           </div>

//           <div className="text-left ml-10 mt-12">
//             <a href="/knowledge" className=" font-bold hover:underline">
//               To Know More Read{" "}
//               <span className="text-rose-500">Our Blog...</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* --- 4. TOOLS CAROUSEL --- */}
//       <section className="py-20 bg-white flex items-center justify-center">
//         <div className=" px-6 text-center">
//           <h3 className="text-2xl font-bold mb-12">Tools We Use</h3>
//           <div className=" justify-center grid grid-cols-3 gap-10">
//             {TOOLS.map((tool, i) => (
//               <FadeIn
//                 key={i}
//                 delay={i * 0.1}
//                 className="flex flex-col items-center group cursor-pointer"
//               >
//                 {/* Simulating the Logo Box */}
//                 <div className="w-20 h-20 bg-neutral-100/60 shadow-sm p-28  rounded-xl flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
//                   <span className={`text-3xl font-extrabold ${tool.color}`}>
//                     {tool.label}
//                   </span>
//                 </div>
//                 {/* <span className="text-gray-400 font-medium text-sm group-hover:text-gray-900">{tool.name}</span> */}
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- 5. WORK / CASE STUDY --- */}
//      <section className="py-20 bg-white w-full">
//   <div className="container mx-auto px-6 max-w-6xl">
    
//     {/* Section Label */}
//     <div className="text-pink-500 font-bold mb-8 text-xl tracking-wide">Design.</div>

//     {/* Card Container */}
//     <FadeIn className="relative w-full h-[500px] bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
      
//       {/* 1. Background Image (Using 'fill' for responsiveness) */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src="/about-design.jpg"
//           alt="TravelXp Project"
//           fill
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />
//       </div>

//       {/* 2. Gradient Overlay (Fixed Syntax: bg-gradient-to-t) */}
//       {/* This sits on top of the image but behind the text to ensure readability */}
//       <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

//       {/* 3. Text Content Overlay */}
    

//     </FadeIn>
//       <div className=" bottom-0 left-0 w-full  transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//         <h3 className="text-4xl md:text-5xl font-extrabold mb-3">TravelXp</h3>
        
//         <p className="text-lg mb-6 max-w-2xl leading-relaxed">
//           Created great experience for clients looking to book holidays.
//         </p>
        
//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 text-sm font-semibold tracking-wider uppercase ">
//           <span>UX-UI</span> 
//           <span className="text-pink-500">•</span> 
//           <span>Web</span> 
//           <span className="text-pink-500">•</span> 
//           <span>Mobile</span> 
//           <span className="text-pink-500">•</span> 
//           <span>Branding</span>
//         </div>
//       </div>
//   </div>
// </section>

//       {/* --- 6. OTHER SERVICES (Bottom Nav) --- */}
//       <section className="py-10 max-w-4xl mx-auto px-6 mb-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <FadeIn
//             delay={0.1}
//             className="bg-purple-50 p-5 rounded-2xl group cursor-pointer hover:bg-purple-100 transition-colors"
//           >
//             <h3 className="text-3xl font-bold mb-2">Technology.</h3>
//             <p className="text-gray-600 mb-6">Leverage the power of code.</p>
//             <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//           </FadeIn>
//           <FadeIn
//             delay={0.2}
//             className="bg-pink-50 p-10 rounded-2xl group cursor-pointer hover:bg-pink-100 transition-colors"
//           >
//             <h3 className="text-3xl font-bold mb-2">Marketing.</h3>
//             <p className="text-gray-600 mb-6">
//               Creative strategies for brands.
//             </p>
//             <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//           </FadeIn>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Code2, TrendingUp, Cloud, 
  ArrowRight, CheckCircle2, Bot, Cpu, 
  Zap, Globe, Database, Smartphone 
} from 'lucide-react';
import Link from 'next/link';

const servicePillars = [
  {
    title: "Product Design",
    icon: <Palette size={24} />,
    desc: "Creating intuitive digital experiences through research-driven UX and scalable design systems.",
    features: ["UX Research", "UI Design", "Design Systems", "Prototypes"],
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Software Development",
    icon: <Code2 size={24} />,
    desc: "Building modern web platforms, SaaS, and enterprise systems using scalable architectures.",
    features: ["Web Platforms", "SaaS Apps", "Enterprise Software", "AI Apps"],
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Digital Growth",
    icon: <TrendingUp size={24} />,
    desc: "Helping companies grow their presence through SEO, paid campaigns, and data-driven strategies.",
    features: ["SEO Ops", "Paid Advertising", "Content Systems", "Analytics"],
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={24} />,
    desc: "Managing cloud infrastructure and CI/CD pipelines to ensure reliable, high-performance platforms.",
    features: ["Cloud Arch", "CI/CD Pipelines", "Docker/K8s", "Monitoring"],
    color: "text-orange-600",
    bg: "bg-orange-50"
  }
];

const DesignPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800"
          >
            <Zap size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white font-mono">Integrated_Solutions_v1.0</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] max-w-5xl mx-auto">
            Technology & Growth <br />
            <span className="text-blue-600 italic">Solutions.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            A complete ecosystem of services designed to build, launch, and scale digital platforms with AI-native efficiency.
          </p>

          <div className="flex flex-col lg:flex-row  justify-center gap-4 pt-6">
            <button      aria-label="Uptimiseit" className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
              Start Your Project
            </button>
            <button     aria-label="Uptimiseit" className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY INTEGRATED? (The Manifesto) --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto text-center space-y-12">
           <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">The Power of a Unified Ecosystem.</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <p className="text-lg text-slate-500 leading-relaxed">
                Fragmented agencies create communication gaps and inconsistent strategies. At Uptimise IT, we replace silos with a unified engineering and growth team.
              </p>
              <p className="text-lg text-slate-950 font-bold border-l-4 border-blue-600 pl-8 leading-relaxed">
                One partner. One vision. The entire lifecycle of digital product development and growth managed through a single AI-native factory.
              </p>
           </div>
        </div>
      </section>

      {/* --- SECTION 3: THE SERVICE PILLARS (Grid) --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicePillars.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3.5rem] bg-white border border-slate-100 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-500 group"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-8">
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-slate-950 tracking-tighter">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{service.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-y-3">
                    {service.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-950 transition-colors">
                        <CheckCircle2 size={14} className="text-blue-600" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <button     aria-label="Uptimiseit" className="mt-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-blue-600 transition-colors">
                  Explore {service.title} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: HOW AI ENHANCES SERVICES --- */}
      <section className="py-32 px-6 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 p-24 opacity-5">
            <Bot size={400} />
         </div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-[10px] font-black uppercase tracking-widest">
                   <Cpu size={14} /> // Optimization_Module
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                  How AI <br /> <span className="text-blue-500 italic">Amplifies</span> Us.
                </h2>
                <p className="text-xl text-slate-400 max-w-md">
                   AI isn't a replacement—it's an integrated layer across every stage of our ecosystem to accelerate delivery and precision.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { title: "Design Prototyping", val: "AI-driven ideation & component mapping." },
                 { title: "Development Scaffolding", val: "Automated logic generation & commits." },
                 { title: "Infra Monitoring", val: "Predictive scaling and self-healing systems." },
                 { title: "Growth Intelligence", val: "Intelligent analytics and automated reporting." }
               ].map((item, i) => (
                 <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex justify-between items-center group hover:bg-white/10 transition-all">
                    <div className="space-y-1">
                       <h5 className="font-bold text-blue-400 text-xs uppercase tracking-widest">{item.title}</h5>
                       <p className="text-white font-bold">{item.val}</p>
                    </div>
                    <CheckCircle2 className="text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-40 px-6 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 leading-none">
              Build and Scale <br /> with <span className="text-blue-600">Uptimise IT.</span>
            </h2>
            <button      aria-label="Uptimiseit" className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
               Book Strategy Call
            </button>
         </div>
      </section>
    </main>
  );
};

export default DesignPage;