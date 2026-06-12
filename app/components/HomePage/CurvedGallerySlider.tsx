// "use client";

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Cpu, Rocket, Code2, ShieldCheck, Workflow, Binary } from 'lucide-react';

// const AIOSFactory = () => {
//   return (
//     <section className="relative bg-linear-to-br from-white to-green-50 py-16 px-6 overflow-hidden">
//       {/* Background Decor: The Factory Blueprint */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

//       <motion.div
//         className="max-w-7xl mx-auto relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         // variants={staggerContainer}
//       >
//         <motion.div className="text-center max-w-3xl mx-auto mb-16 space-y-6"
//         //  variants={fadeInUp}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
//             <Workflow className="text-blue-600 size-4" />
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
//               Operational Framework 01
//             </span>
//           </div>

//           <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.9]">
//             The AI-Native <br />
//             <span className="text-blue-600">Software Factory.</span>
//           </h2>

//           <p className="text-sm text-slate-500 font-body leading-relaxed">
//             A hybrid ecosystem where elite human ingenuity meets autonomous intelligence
//             to accelerate the entire product lifecycle.
//           </p>
//         </motion.div>

//         {/* The Factory Flow Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Column 1: Planning & Architecture */}
//           <div className="space-y-8">
//             <motion.div
//               // variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-slate-50/50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
//             >
//               <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <Binary className="text-blue-600" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-950 mb-4 font-header">Intelligent Planning</h3>
//               <p className="text-slate-500 text-sm leading-relaxed font-body">
//                 AI agents convert product vision into structured roadmaps and technical
//                 requirements instantly, eliminating the "planning gap."
//               </p>
//             </motion.div>

//             <motion.div
//               // variants={fadeInUp}
//               className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-500/20 transition-all"
//             >
//                <div className="flex items-center gap-4 mb-6">
//                   <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
//                   <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">System Architecture</span>
//                </div>
//                <p className="text-slate-900 font-bold mb-2">Automated Schema Design</p>
//                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                   <motion.div
//                     // variants={barAnimation}
//                     className="h-full bg-blue-600 relative overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-shimmer" />
//                   </motion.div>
//                </div>
//             </motion.div>
//           </div>

//           {/* Column 2: The Core (Visual Highlight) */}
//           <motion.div
//             // variants={fadeInUp}
//             whileHover={{ scale: 1.01 }}
//             className="relative h-full min-h-[400px] lg:min-h-0 bg-slate-950 rounded-[3rem] p-10 overflow-hidden flex flex-col justify-end group shadow-2xl"
//           >
//             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.2, 0.4, 0.2]
//               }}
//               transition={{ duration: 8, repeat: Infinity }}
//               className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"
//             />

//             <div className="relative z-10 space-y-6">
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="p-4 bg-white/10 backdrop-blur-md rounded-3xl w-fit"
//               >
//                 <Cpu className="text-blue-400" size={40} />
//               </motion.div>
//               <h3 className="text-4xl font-black text-white font-header tracking-tight">
//                 AI Coding <br />Orchestrator.
//               </h3>
//               <p className="text-slate-400 text-sm font-body leading-relaxed">
//                 Our proprietary AI Coding Agent generates backend APIs, frontend components,
//                 and infrastructure scaffolding with mathematical precision.
//               </p>
//               <div className="pt-4 border-t border-white/10 flex justify-between items-center text-blue-400 font-mono text-[10px] font-bold tracking-widest">
//                 <span>STATUS: OPTIMIZED</span>
//                 <span>EFFICIENCY: +340%</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Column 3: Quality & Deployment */}
//           <div className="space-y-8 lg:mt-12">
//             <motion.div
//               // variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-slate-50/50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all"
//             >
//               <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
//                 <ShieldCheck className="text-emerald-500" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-950 mb-4 font-header">Autonomous QA</h3>
//               <p className="text-slate-500 text-sm leading-relaxed font-body">
//                 AI-driven testing pipelines detect bugs and security vulnerabilities
//                 before they ever reach production. Zero-compromise quality.
//               </p>
//             </motion.div>

//             <motion.div
//               // variants={fadeInUp}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="group p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 cursor-pointer overflow-hidden relative"
//             >
//               <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-6">
//                   <Rocket size={32} />
//                   <div className="text-[10px] font-mono bg-white/20 px-3 py-1 rounded-full">CD/CI ACTIVE</div>
//                 </div>
//                 <h3 className="text-2xl font-bold font-header mb-2 tracking-tight text-white">Rapid Deployment</h3>
//                 <p className="text-blue-100 text-xs font-body leading-relaxed">
//                   Pushing world-class code at market-leading speed.
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//         </div>

//         {/* Bottom Proof Section */}
//         <motion.div
//           // variants={fadeInUp}
//           className="mt-20 p-1 bg-slate-100 rounded-full max-w-2xl mx-auto flex items-center justify-between px-6 py-4"
//         >
//            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">The Result:</span>
//            <div className="flex gap-12 pr-6">
//               <div className="flex flex-col"><span className="text-slate-950 font-bold">2x</span><span className="text-[8px] text-slate-400 uppercase">Faster Build</span></div>
//               <div className="flex flex-col"><span className="text-slate-950 font-bold">0%</span><span className="text-[8px] text-slate-400 uppercase">Manual Debt</span></div>
//               <div className="flex flex-col"><span className="text-slate-950 font-bold">100%</span><span className="text-[8px] text-slate-400 uppercase">Scalable</span></div>
//            </div>
//         </motion.div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 2.5s infinite linear;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AIOSFactory;

// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Cpu, Rocket, Code2, ShieldCheck, Workflow, Binary } from 'lucide-react';

// const AIOSFactoryDark = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-slate-950 to-slate-900 py-16 px-6 overflow-hidden">
//       {/* Background Decor: The Factory Blueprint */}
//       {/* <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" /> */}

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" />

//       <motion.div
//         className="max-w-7xl mx-auto relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         // variants={staggerContainer}
//       >
//         <motion.div className="text-center max-w-3xl mx-auto mb-16 space-y-6"
//         //  variants={fadeInUp}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm">
//             <Workflow className="text-blue-400 size-4" />
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
//               Operational Framework 01
//             </span>
//           </div>

//           <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-white leading-[0.9]">
//             The AI-Native <br />
//             <span className="text-blue-500">Software Factory.</span>
//           </h2>

//           <p className="text-sm text-slate-100 font-body leading-relaxed">
//             A hybrid ecosystem where elite human ingenuity meets autonomous intelligence
//             to accelerate the entire product lifecycle.
//           </p>
//         </motion.div>

//         {/* The Factory Flow Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Column 1: Planning & Architecture */}
//           <div className="space-y-8">
//             <motion.div
//               // variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-slate-700 transition-all duration-500"
//             >
//               <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <Binary className="text-blue-400" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4 font-header">Intelligent Planning</h3>
//               <p className="text-slate-100 text-sm leading-relaxed font-body">
//                 AI agents convert product vision into structured roadmaps and technical
//                 requirements instantly, eliminating the "planning gap."
//               </p>
//             </motion.div>

//             <motion.div
//               // variants={fadeInUp}
//               className="group p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-sm hover:border-blue-500/30 transition-all"
//             >
//                <div className="flex items-center gap-4 mb-6">
//                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//                   <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest">System Architecture</span>
//                </div>
//                <p className="text-white font-bold mb-2">Automated Schema Design</p>
//                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
//                   <motion.div
//                     // variants={barAnimation}
//                     className="h-full bg-blue-500 relative overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-shimmer" />
//                   </motion.div>
//                </div>
//             </motion.div>
//           </div>

//           {/* Column 2: The Core (Visual Highlight) */}
//           <motion.div
//             // variants={fadeInUp}
//             whileHover={{ scale: 1.01 }}
//             className="relative h-full min-h-[400px] lg:min-h-0 bg-slate-950 border border-slate-800/50 rounded-[3rem] p-10 overflow-hidden flex flex-col justify-end group shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
//           >
//             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.15, 0.3, 0.15]
//               }}
//               transition={{ duration: 8, repeat: Infinity }}
//               className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/30 blur-[100px] rounded-full"
//             />

//             <div className="relative z-10 space-y-6">
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl w-fit"
//               >
//                 <Cpu className="text-blue-400" size={40} />
//               </motion.div>
//               <h3 className="text-4xl font-black text-white font-header tracking-tight">
//                 AI Coding <br />Orchestrator.
//               </h3>
//               <p className="text-slate-100 text-sm font-body leading-relaxed">
//                 Our proprietary AI Coding Agent generates backend APIs, frontend components,
//                 and infrastructure scaffolding with mathematical precision.
//               </p>
//               <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-blue-400 font-mono text-[10px] font-bold tracking-widest">
//                 <span>STATUS: OPTIMIZED</span>
//                 <span>EFFICIENCY: +340%</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Column 3: Quality & Deployment */}
//           <div className="space-y-8 lg:mt-12">
//             <motion.div
//               // variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] hover:bg-slate-800 hover:shadow-2xl hover:border-slate-700 transition-all"
//             >
//               <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
//                 <ShieldCheck className="text-emerald-400" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4 font-header">Autonomous QA</h3>
//               <p className="text-slate-100 text-sm leading-relaxed font-body">
//                 AI-driven testing pipelines detect bugs and security vulnerabilities
//                 before they ever reach production. Zero-compromise quality.
//               </p>
//             </motion.div>

//             <motion.div
//               // variants={fadeInUp}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="group p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-900/40 cursor-pointer overflow-hidden relative"
//             >
//               <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-6">
//                   <Rocket size={32} />
//                   <div className="text-[10px] font-mono bg-white/30 px-3 py-1  text-white rounded-full backdrop-blur-sm">CD/CI ACTIVE</div>
//                 </div>
//                 <h3 className="text-2xl font-bold font-header mb-2 tracking-tight text-white">Rapid Deployment</h3>
//                 <p className="text-white text-xs font-medium leading-relaxed">
//                   Pushing world-class code at market-leading speed.
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//         </div>

//         {/* Bottom Proof Section */}
//         <motion.div
//           // variants={fadeInUp}
//           className="mt-20 p-1 bg-slate-900 border border-slate-800 rounded-full max-w-2xl mx-auto flex items-center justify-between px-6 py-4 shadow-lg"
//         >
//            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-4">The Result:</span>
//            <div className="flex gap-12 pr-6">
//               <div className="flex flex-col"><span className="text-white font-bold">2x</span><span className="text-[9px] text-slate-300 font-semibold">Faster Build</span></div>
//               <div className="flex flex-col"><span className="text-white font-bold">0%</span><span className="text-[9px] text-slate-300 font-semibold">Manual Debt</span></div>
//               <div className="flex flex-col"><span className="text-white font-bold">100%</span><span className="text-[9px] text-slate-300 font-semibold">Scalable</span></div>
//            </div>
//         </motion.div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 2.5s infinite linear;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AIOSFactoryDark;

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";

interface ActiveAsset {
  src: string;
  alt: string;
}

export default function CurvedGallerySlider() {
  const [activeAssets, setActiveAssets] = useState<ActiveAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- 🛰️ SYNC PIPELINE WITH USER-FACING API ROUTE MATRIX ---
  useEffect(() => {
    const fetchGalleryAssets = async () => {
      try {
        setIsLoading(true);
        // Hits the dedicated public read-optimized endpoint on your admin workspace
        // const response = await fetch('https://admin.uptimiseit.com/api/gallery-front');
        // Inside your CurvedGallerySlider.tsx
        const response = await fetch(
          "https://admin.uptimiseit.com/api/gallery-front",
          {
            method: "GET",
            mode: "cors", // Explicitly tell the browser this is a cross-origin request
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          setActiveAssets(data.data);
        }
      } catch (err) {
        console.error("Failed downloading asset cluster pipeline:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryAssets();
  }, []);

  // --- SAFE LOADING FALLBACK FOR INTERACTIVE RENDERING ---
  if (isLoading) {
    return (
      <section className="relative bg-[#0A0D14] py-32 px-6 flex flex-col items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center justify-center space-y-3 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
          <Loader2 size={24} className="animate-spin text-[#4F8CFF]" />
          <span>Syncing workspace graphics database maps...</span>
        </div>
      </section>
    );
  }

  // Safely avoid rendering layout artifacts if the dataset returns blank
  if (activeAssets.length === 0) return null;

  // Clone array fields to sustain a smooth, infinite marquee workflow calculation layer
  const duplicatedItems = [...activeAssets, ...activeAssets, ...activeAssets];

  return (
    <section className="relative bg-[#0A0D14] py-24 px-6 overflow-hidden flex flex-col items-center justify-between min-h-[750px]">
      {/* 🌌 High-Tech Deep Blue Gradient Meshes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#4F8CFF]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#7BDFF2]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Background Decor: Fine-grain grid structure */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 pointer-events-none" />

      {/* --- Part 1: Central Core Content Block --- */}
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-20 mb-16">
        {/* Tech Badge Pill */}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4F8CFF]/10 text-[#7BDFF2] border border-[#4F8CFF]/20"
        >
          <Sparkles className="w-3.5 h-3.5" /> Our Workspace Matrix
        </motion.span>

        {/* Heading Typography Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Inside Our Studio, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] via-[#7BDFF2] to-[#B4F1FF]">
              Where Ideas Take Shape
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            Explore the spaces, ecosystems, and collaborative environments
            driving our engineering breakthroughs.
          </p>
        </motion.div>

        {/* Dynamic CTA Funnel Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-2"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-[#4F8CFF] to-[#7BDFF2] text-[#0A0D14] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#4F8CFF]/10 hover:opacity-90 transition-all flex items-center justify-center gap-2 mx-auto group">
            See Life At The Company
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* --- Part 2: 3D Curved Concave Perspective Slider Track --- */}
      <div
        className="relative w-full overflow-hidden z-10 pt-10"
        style={{
          perspective: "1200px",
          WebkitPerspective: "1200px",
        }}
      >
        <div
          className="w-full flex justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(6deg) rotateY(0deg)",
          }}
        >
          <motion.div
            className="flex gap-4 md:gap-6 flex-nowrap pointer-events-auto cursor-grab active:cursor-grabbing px-4"
            // 🚀 PERF FIX: Translating using strict percentages loop metrics so short arrays loop cleanly!
            animate={{ x: ["0%", "-33.3333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: Math.max(activeAssets.length * 4.5, 20), // Scales rotational speed based on array length
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {duplicatedItems.map((item, i) => {
              const positionIndex = i % activeAssets.length;

              // 🚀 MATH FIX: Auto-balances calculation parameters based on active row counts matrix
              const rotateYVal =
                (positionIndex - activeAssets.length / 2) *
                (38 / activeAssets.length);
              const translateZVal =
                Math.abs(positionIndex - activeAssets.length / 2) * -14;

              return (
                <motion.div
                  key={i}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotateYVal}deg) translateZ(${translateZVal}px)`,
                  }}
                  whileHover={{
                    scale: 1.04,
                    z: 30,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="w-[180px] sm:w-[220px] md:w-[260px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-800/60 bg-slate-900/40 backdrop-blur-md shadow-2xl flex-shrink-0 relative group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-102 group-hover:scale-108 brightness-90 group-hover:brightness-100 contrast-[1.02]"
                    loading="lazy"
                  />

                  {/* Subtle Gradient Shadow Frame Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-[#0A0D14]/10 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Interactive Dynamic Lighting Reflection Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Masking Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0D14] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
