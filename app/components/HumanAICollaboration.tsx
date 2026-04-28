'use client';

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Brain, Sparkles, ShieldCheck, Database, Layout, 
  FastForward, CheckCircle2, Workflow, Activity, Target 
} from 'lucide-react';
import { DottedSurface } from './DottedSurface';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Framer Motion Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//   }
// };

// const aiPointVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

// const humanPointVariants: Variants = {
//   hidden: { opacity: 0, y: -30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

const HumanAICollaboration = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle floating animation for the central "Synapse" using GSAP for infinite loop
    gsap.to(".central-synapse", {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-white py-24 px-6 overflow-hidden">
      {/* <DottedSurface /> */}
      <div className="max-w-7xl mx-auto relative z-10">

        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-6 flex items-center flex-col lg:flex-row gap-5 justify-between"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <Sparkles className="text-blue-600 size-3 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
              The Amplification Layer
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] text-center lg:text-right">
            Human Ingenuity. <br />
            <span className="text-blue-600 italic">AI Velocity.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          
          {/* LEFT: THE AI ENGINE */}
          <motion.div 
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-10 relative"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200">
                <Database size={24} />
              </div>
              <h3 className="text-3xl font-black font-header text-slate-950 tracking-tight uppercase">AI Systems</h3>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Layout size={18} />, title: "Development Scaffolding" },
                { icon: <CheckCircle2 size={18} />, title: "Automated Testing" },
                { icon: <FastForward size={18} />, title: "Deployment Automation" },
                { icon: <Workflow size={18} />, title: "Architecture Analysis" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  // variants={aiPointVariants}
                  whileHover={{ x: 10, backgroundColor: "#ffffff", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
                  className="flex items-center gap-6 p-6 bg-white/50 rounded-2xl border border-slate-100 transition-colors"
                >
                  <div className="text-blue-600">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE ELITE ENGINEER */}
          <motion.div 
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="p-10 rounded-[3rem] bg-slate-950 text-white space-y-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e293b,transparent)] opacity-50" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/10 shadow-inner">
                <Brain size={24} />
              </div>
              <h3 className="text-3xl font-black font-header tracking-tight uppercase">Elite Engineers</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {[
                { icon: <Target size={18} />, title: "Architecture Decisions" },
                { icon: <Activity size={18} />, title: "System Performance" },
                { icon: <ShieldCheck size={18} />, title: "Security Enforcement" },
                { icon: <Sparkles size={18} />, title: "Product Quality" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  // variants={humanPointVariants}
                  whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl transition-colors"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <h4 className="font-bold text-slate-100 uppercase text-xs tracking-widest">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CENTRAL INTERACTIVE SYNAPSE */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="central-synapse relative w-24 h-24 rounded-full bg-white border-[10px] border-slate-50 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.4)]">
               <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-5 h-5 bg-blue-600 rounded-full" 
               />
               {/* Pulsing Outer Ring */}
               <motion.div 
                  animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-blue-400 rounded-full"
               />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HumanAICollaboration;