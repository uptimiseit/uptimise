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
//   { name: "Adobe XD", color: "text-purple-700", label: "Xd" },
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

// export default function TechnologyPage() {
//   return (
//     <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
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
//               <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full"></div>
//             </div>
//           </motion.div>

//           {/* Right: Text */}
//           <div className="w-full md:w-1/2 space-y-6">
//             <FadeIn>
//               <span className="text-purple-500 font-bold tracking-widest text-sm uppercase">
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
//                 <h2 className="text-xl text-purple-500 font-bold leading-snug">
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
//                     <h3 className="text-2xl font-bold text-gray-800 border-b w-fit border-dashed hover:text-purple-500 transition-colors cursor-pointer">
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
//             <span className="text-purple-500 font-bold uppercase tracking-widest text-base">
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
//               <span className="text-purple-500">Our Blog...</span>
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
//     <div className="text-purple-500 font-bold mb-8 text-xl tracking-wide">Design.</div>

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
//           <span className="text-purple-500">•</span> 
//           <span>Web</span> 
//           <span className="text-purple-500">•</span> 
//           <span>Mobile</span> 
//           <span className="text-purple-500">•</span> 
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
//             className="bg-purple-50 p-5 rounded-2xl group cursor-pointer hover:bg-purple-100 transition-colors"
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Layers, Bot, Terminal, 
  Cpu, Zap, CheckCircle2, ArrowRight, ShieldCheck,
  Globe, Activity, Server, Search, Box, Rocket, 
  ChevronDown, Lock, Code, Database, Gauge
} from 'lucide-react';

// Data for "What We Build"
const buildItems = [
  { title: "Web Applications", items: ["SaaS Platforms", "Enterprise Apps", "Marketplaces"], icon: <Globe size={20} /> },
  { title: "Mobile Apps", items: ["Kotlin (Android)", "Swift (iOS)", "Flutter"], icon: <Smartphone size={20} /> },
  { title: "SaaS Platforms", items: ["Multi-tenant Arch", "Billing Systems", "Analytics"], icon: <Layers size={20} /> },
  { title: "AI-Powered Apps", items: ["AI Assistants", "Automation Tools", "SaaS AI"], icon: <Bot size={20} /> }
];

// Data for "Common Problems"
const problems = [
  { id: "01", title: "Slow Development Cycles", desc: "Traditional workflows are fragmented. We use AI-assisted engineering to move from concept to functional product 3x faster without sacrificing quality." },
  { id: "02", title: "Scaling Bottlenecks", desc: "Products built quickly often break later. We design cloud-native, auto-scaling architectures that handle growth smoothly from Day 1." },
  { id: "03", title: "Technical Debt & Poor Arch", desc: "Inefficient code leads to expensive redesigns. Our 'Architecture-First' approach ensures modular, clean, and maintainable systems." },
  { id: "04", title: "Complex Integrations", desc: "Connecting AI, payment gateways, and third-party APIs can be messy. We design seamless, secure, and high-performance integration layers." }
];

const DevelopmentServices = () => {
  const [expandedProblem, setExpandedProblem] = useState<string | null>("01");

  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The High-Stakes Entry --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7  text-center lg:text-left  space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <Code2 size={14} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">Module::Software_Engineering</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
              Scalable <br />
              <span className="text-blue-600 italic">Digital Assets.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT builds reliable, high-performance platforms by combining AI-native workflows with enterprise-grade engineering discipline.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                Start Your Project
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
                Book Strategy Call
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
             <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
             <div className="relative bg-slate-50 border border-slate-100 rounded-[3rem] p-10 space-y-6 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                   <span className="text-[10px] font-black font-mono text-slate-400">ENGINEERING_SYNC: ACTIVE</span>
                   <Activity size={16} className="text-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Build_Velocity</p>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-blue-600" />
                      </div>
                   </div>
                   <p className="text-xs font-mono text-slate-500 leading-relaxed italic">
                     # Architecture_Validation::Success <br />
                     # AI_Scaffolding::Complete <br />
                     # Security_Audit::Passed
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 2. COMMON PROBLEMS: Interactive Problem Cards --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-none">Problems We <br /><span className="text-blue-600">Solve.</span></h2>
             <p className="text-slate-500 font-medium italic">// Identifying engineering bottlenecks before they stall your growth.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div 
                key={p.id} 
                onClick={() => setExpandedProblem(expandedProblem === p.id ? null : p.id)}
                className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer ${
                  expandedProblem === p.id ? 'bg-white border-blue-600 shadow-xl' : 'bg-white/50 border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-4">
                    <span className="text-blue-600 font-mono text-sm">{p.id}</span> {p.title}
                  </h4>
                  <ChevronDown className={`transition-transform duration-300 ${expandedProblem === p.id ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {expandedProblem === p.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="mt-6 text-slate-500 text-sm leading-relaxed font-medium pl-9 border-l-2 border-blue-50 ml-3">
                        {p.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. WHAT WE BUILD: Node Grid --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Core Build Ecosystem.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildItems.map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-blue-600/30 hover:shadow-2xl transition-all group">
                <div className="p-4 bg-slate-50 rounded-2xl w-fit text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-6 uppercase tracking-tight">{card.title}</h4>
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 group-hover:text-slate-950">
                      <CheckCircle2 size={12} className="text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. ENGINEERING STANDARDS: The Trust Builder --- */}
      <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <ShieldCheck size={400} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 font-mono italic">// Quality_Assurance</h4>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Engineering <br /> Standards.</h2>
            </div>
            <p className="text-slate-400 max-w-sm font-medium leading-relaxed">
              AI accelerates us, but engineering discipline defines us. We follow SOC2-ready standards across every codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Box />, title: "Architecture-First", desc: "No coding begins without a validated system topology designed for service boundaries and scale." },
              { icon: <Code />, title: "Modular Clean Code", desc: "We use strictly modular, reusable patterns to minimize technical debt and maximize maintainability." },
              { icon: <Lock />, title: "Security Protocols", desc: "Secure authentication, data encryption, and zero-trust API designs integrated into the core." },
              { icon: <Gauge />, title: "Automated Testing", desc: "Unit, integration, and regression tests are automated within our CI/CD factory pipelines." },
              { icon: <Database />, title: "Scalable Data", desc: "Optimized schemas and distributed data architectures to handle millions of concurrent operations." },
              { icon: <Rocket />, title: "Automated DevOps", desc: "Zero-downtime deployments via containerized cloud infrastructure (Docker, K8s, AWS)." }
            ].map((std, i) => (
              <div key={i} className="space-y-4 group">
                <div className="text-blue-500 group-hover:scale-110 transition-transform">{std.icon}</div>
                <h5 className="text-xl font-black tracking-tight uppercase">{std.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TECH STACK: Credibility Room --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center">
             <h3 className="text-4xl font-black tracking-tight text-slate-950 uppercase italic">The Stack Room.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
             {[
               { cat: "Frontend", tools: ["Next.js", "React", "Astro"] },
               { cat: "Backend", tools: ["Node.js", "Java", "Python"] },
               { cat: "Cloud", tools: ["AWS", "Google Cloud", "Docker"] },
               { cat: "AI Engine", tools: ["LLMs", "AI Agents", "LangChain"] }
             ].map((group, i) => (
               <div key={i} className="space-y-6">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 font-mono">{group.cat}</h5>
                  <div className="space-y-2">
                     {group.tools.map((t, idx) => (
                       <p key={idx} className="text-2xl font-black tracking-tighter text-slate-900 opacity-60 hover:opacity-100 transition-opacity cursor-default">{t}</p>
                     ))}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="px-6">
         <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
               Build Your Next <br /> Product with <span className="italic">Uptimise IT.</span>
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="px-12 py-6 bg-white text-blue-600 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all">
                 Start Your Project
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default DevelopmentServices;