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

// export default function MarketingPage() {
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

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, BarChart3, Search, Share2, 
  Target, Video, PieChart, Zap, 
  ArrowRight, CheckCircle2, Bot, Globe,
  Instagram, Linkedin, Twitter, Youtube,
  LineChart, MousePointerClick, Megaphone
} from 'lucide-react';

const growthStats = [
  { label: "ROAS", val: "4.2x Avg", icon: <LineChart size={20} /> },
  { label: "Indexing", val: "Technical", icon: <Search size={20} /> },
  { label: "Conversion", val: "Optimized", icon: <MousePointerClick size={20} /> },
  { label: "Analytics", val: "Real-time", icon: <PieChart size={20} /> }
];

const DigitalGrowthPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The Growth Engine --- */}
      <section className="px-6 mb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#10b98108_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <TrendingUp size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 font-mono">Module::Growth_Systems_v4.0</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
              Algorithmic <br />
              <span className="text-emerald-600 italic">Growth.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT engineers data-driven growth engines that combine AI-powered automation with performance marketing to scale user adoption with mathematical precision.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                Scale Your Revenue
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
                Audit My Traffic
              </button>
            </div>
          </div>

          {/* Performance Dashboard Visual */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-950 rounded-[3rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-400">
                  <Megaphone size={200} />
               </div>
               
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center pb-6 border-b border-white/5">
                     <span className="text-[10px] font-black font-mono text-emerald-500 tracking-widest">PERFORMANCE_MATRIX</span>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-bold text-slate-400 font-mono">LIVE_DATA</span>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     {growthStats.map((stat, i) => (
                        <div key={i} className="space-y-2 group cursor-default">
                           <div className="flex items-center gap-2 text-slate-500 group-hover:text-emerald-400 transition-colors">
                              {stat.icon}
                              <span className="text-[9px] font-black uppercase tracking-widest">{stat.label}</span>
                           </div>
                           <p className="text-2xl font-black text-white italic">{stat.val}</p>
                        </div>
                     ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                     <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-3">
                        <span>Acquisition_Target</span>
                        <span>88%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 2 }} className="h-full bg-emerald-500" />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. WHY GROWTH: The Technical Edge --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
               Beyond <br /><span className="text-emerald-600">Advertising.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Most agencies run ads. We build growth systems. We understand the code, the data, and the user behavior, allowing us to optimize the entire funnel from search to conversion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               "Algorithmic SEO", "Performance Ad Ops", 
               "Data-Driven Insights", "AI Content Systems"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-emerald-200 transition-all">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{text}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE GROWTH PILLARS: SEO, SMO, ADS --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* SEO Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
               <h3 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                  <Search className="text-emerald-600" /> SEO Optimization
               </h3>
               <p className="text-slate-500 font-medium leading-relaxed">
                  The long-term growth engine. We focus on technical SEO, high-authority keyword clusters, and performance optimization to ensure your product ranks where it matters.
               </p>
               <ul className="grid grid-cols-2 gap-y-3 pt-4">
                  {["Technical SEO", "Keyword Arch", "On-Page Ops", "Content Strategy"].map(t => (
                    <li key={t} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1 h-1 bg-emerald-600 rounded-full" /> {t}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="text-emerald-600 font-black text-xl italic font-mono">01. SMO</div>
                  <h5 className="font-black text-slate-950 uppercase tracking-tight">Social Growth</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">Building brand authority across LinkedIn, X, and Instagram through content storytelling.</p>
               </div>
               <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="text-emerald-600 font-black text-xl italic font-mono">02. PPC</div>
                  <h5 className="font-black text-slate-950 uppercase tracking-tight">Paid Campaigns</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">High-conversion Google and Meta ad campaigns optimized for maximum ROAS.</p>
               </div>
            </div>
          </div>

          {/* Social Icons Bar */}
          <div className="flex flex-wrap justify-center gap-12 py-12 border-y border-slate-50 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
             <Instagram size={32} />
             <Linkedin size={32} />
             <Twitter size={32} />
             <Youtube size={32} />
             <Globe size={32} />
          </div>
        </div>
      </section>

      {/* --- 4. AI-POWERED AUTOMATION --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto p-12 lg:p-24 bg-emerald-950 rounded-[4rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
               <Bot size={400} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                    AI-Driven <br /><span className="text-emerald-400">Marketing.</span>
                  </h2>
                  <p className="text-lg text-emerald-100/60 font-medium max-w-md leading-relaxed">
                    We use machine learning to analyze campaign performance, automate content generation, and identify audience targeting patterns that humans miss.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Campaign Analysis", "Content Orchestration", 
                    "Targeting Insights", "Workflow Automation"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                       <Zap size={16} className="text-emerald-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. ANALYTICS & TOOLS --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">Growth Stack.</h3>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] font-mono mt-4">// Analytics_Toolkit_v1.0</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
               {[
                 { cat: "Measurement", tools: ["Google Analytics", "Search Console"] },
                 { cat: "SEO Tools", tools: ["SEMrush", "Ahrefs"] },
                 { cat: "Performance", tools: ["Google Ads", "Meta Ads Manager"] },
                 { cat: "Content", tools: ["Adobe Suite", "AI Copywriting"] }
               ].map((group, i) => (
                 <div key={i} className="space-y-6">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 font-mono">{group.cat}</h5>
                    <div className="space-y-2">
                       {group.tools.map((tool, idx) => (
                         <p key={idx} className="text-2xl font-black tracking-tighter opacity-60 hover:opacity-100 transition-opacity cursor-default">{tool}</p>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
                Accelerate Your <br /> <span className="italic">Digital Reach.</span>
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200">
                 Scale My Product
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default DigitalGrowthPage;