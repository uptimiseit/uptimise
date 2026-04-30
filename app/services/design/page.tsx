'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Palette, MousePointer2, Layers, 
  Sparkles, PenTool, Layout, Box, 
  CheckCircle2, ArrowRight, Figma, 
  Monitor, Smartphone, Briefcase, Bot,
  Search
} from 'lucide-react';
import HumanAICollaboration from '@/app/components/HumanAICollaboration';
import FAQSection from '@/app/components/HomePage/FAQSection';
import Link from 'next/link';
// import FAQSection from '@/app/components/HomePage/FAQSection';

// // --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

const designStages = [
  { id: "01", title: "Discovery & UX Research", desc: "Understanding behavior through persona mapping and journey analysis.", icon: <Search size={20} /> },
  { id: "02", title: "Wireframing", desc: "Structuring navigation and layouts before a single pixel is colored.", icon: <Layout size={20} /> },
  { id: "03", title: "UI & Visual Systems", desc: "High-fidelity interfaces built on scalable component libraries.", icon: <Palette size={20} /> },
  { id: "04", title: "Interactive Prototypes", desc: "Simulating behavior to validate concepts before engineering starts.", icon: <MousePointer2 size={20} /> }
];

const ProductDesignPage = () => {
  const [activeStage, setActiveStage] = useState("01");

  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The Creative Engine --- */}
   <section className="px-6 mb-32 relative py-20 overflow-hidden">
      {/* Background Technical Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Content & Links */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 text-center lg:text-left space-y-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100"
          >
            <Sparkles size={14} className="text-purple-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-700 font-mono">Module::Experience_Design</span>
          </motion.div>

          <motion.h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
            Experience <br />
            <motion.span 
              animate={{ color: ["#9333ea", "#3b82f6", "#9333ea"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-purple-600 italic"
            >
              Architecture.
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Uptimise IT crafts intuitive, high-stakes digital experiences by merging deep user research with AI-accelerated design workflows.
          </motion.p>

          <motion.div className="flex flex-col lg:flex-row gap-4">
            <Link href="/contact" className="w-full lg:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#000" }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl transition-all"
              >
                Start Design Project
              </motion.button>
            </Link>
            
            <Link href="/contact" className="w-full lg:w-auto">
              <motion.button 
                whileHover={{ backgroundColor: "#f8fafc", borderColor: "#9333ea" }} 
                className="w-full px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-[10px] transition-all"
              >
                Book Strategy Call
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Interactive UI Lab Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[440px] aspect-[4/5] bg-white border border-slate-200 rounded-[3rem] p-8 flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Header of the "Canvas" */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
              <p className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-widest">Lab_Interface::v2.4</p>
            </div>

            {/* Simulated UI Content */}
            <div className="space-y-6">
              {/* Feature Hero Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-4 bg-purple-50 rounded-2xl border border-purple-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                    <Palette size={16} />
                  </div>
                  <div className="h-2 w-20 bg-purple-200 rounded-full" />
                </div>
                <div className="h-2 w-full bg-purple-100 rounded-full mb-2" />
                <div className="h-2 w-2/3 bg-purple-100 rounded-full" />
              </motion.div>

              {/* Grid of Components */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3"
                >
                  <Layout size={14} className="text-blue-500" />
                  <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-slate-200 rounded-full" />
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3"
                >
                  <Layers size={14} className="text-emerald-500" />
                  <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-slate-200 rounded-full" />
                </motion.div>
              </div>

              {/* Dynamic Progress Bar */}
              <div className="p-4 bg-slate-900 rounded-2xl space-y-3 shadow-lg">
                <div className="flex justify-between">
                  <span className="text-[8px] font-black text-slate-400 uppercase">System_Optimization</span>
                  <span className="text-[8px] font-black text-blue-400">92%</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating PenTool Tooltip */}
            <motion.div 
              animate={{ 
                x: [0, 20, -10, 0], 
                y: [0, -30, 10, 0] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-xl border border-slate-100 z-30"
            >
              <MousePointer2 size={12} className="text-purple-600 fill-purple-600" />
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">Refining_Paths</span>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>



      {/* --- 2. WHY DESIGN --- */}
      <section className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
               Design is <br /><span className="text-purple-600">Performance.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Great software isn't just about code—it's about how it feels to use. We solve low engagement and high support costs by integrating design directly into our engineering lifecycle.
            </p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
             {[
               { title: "Low Engagement", val: "Fixed via UX Strategy" },
               { title: "Interface Friction", val: "Resolved via User Testing" },
               { title: "Scalability", val: "Ensured via Design Systems" },
               { title: "Engineering Lag", val: "Removed via Handoff Ops" }
             ].map((item, i) => (
               <motion.div 
                key={i} 
                
                whileHover={{ y: -5, borderColor: "#a855f7" }}
                className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm transition-colors"
               >
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-sm font-bold text-slate-950">{item.val}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE PROCESS: Morphing Accordion --- */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
             <h3 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">The Design Lifecycle.</h3>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          >
            {designStages.map((stage) => (
              <motion.div 
                key={stage.id} 
                layout
                
                onMouseEnter={() => setActiveStage(stage.id)}
                className={`p-10 rounded-[3rem] border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  activeStage === stage.id ? 'bg-slate-950 text-white shadow-2xl scale-105 z-20' : 'bg-white text-slate-950 border-slate-100 z-10'
                }`}
                style={{ backgroundColor: activeStage === stage.id ? "#020617" : "white" }}
              >
                <div className="flex justify-between items-start mb-12 relative z-10">
                   <span className={`font-mono text-sm font-black ${activeStage === stage.id ? 'text-purple-400' : 'text-slate-200'}`}>
                      {stage.id}
                   </span>
                   <motion.div 
                    animate={activeStage === stage.id ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className={`${activeStage === stage.id ? 'text-white' : 'text-slate-400'}`}
                   >
                      {stage.icon}
                   </motion.div>
                </div>
                <h4 className={`text-xl font-black mb-4 uppercase tracking-tight relative z-10 ${activeStage === stage.id ? 'text-white' : 'text-slate-900'}`}>
                  {stage.title}
                </h4>
                <p className={`text-xs leading-relaxed font-medium relative z-10 ${activeStage === stage.id ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stage.desc}
                </p>

                {activeStage === stage.id && (
                  <motion.div 
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. AI-ENHANCED DESIGN --- */}
      <section className="py-20  px-6">
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto p-12 lg:p-24 bg-purple-50 rounded-[4rem] border border-purple-100 relative overflow-hidden group"
         >
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 p-12 opacity-[0.03] text-purple-950"
            >
               <Sparkles size={300} />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none uppercase">
                    AI-Enhanced <br /><span className="text-purple-600">Velocity.</span>
                  </h2>
                  <p className="text-lg text-slate-600 font-medium max-w-md">
                    We use AI to automate the repetitive parts of design—so our humans can focus on pure creativity.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Rapid Variation Generation", "Usability Pattern Audit", 
                    "AI-Driven Prototyping", "Automated UI Content"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05, backgroundColor: "white" }}
                      className="flex items-center gap-3 p-4 bg-white/60 border border-white rounded-2xl shadow-sm transition-all"
                    >
                       <CheckCircle2 size={16} className="text-purple-600" />
                       <span className="text-xs font-black text-slate-950 uppercase tracking-tight">{text}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
         </motion.div>
      </section>

      {/* --- 5. TOOLS & ECOSYSTEM --- */}
      <section className="py-28 px-6 bg-[#0B0A0F] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-8"
            >
               <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-purple-400">The Stack.</h3>
               <p className="text-slate-400 font-medium text-lg leading-relaxed">
                  Zero-friction handoff to engineering using industry-standard tools.
               </p>
               <div className="flex gap-4">
                  {[Figma, Bot].map((Icon, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.1, borderColor: "#a855f7", color: "#a855f7" }}
                      className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 transition-all cursor-pointer"
                    >
                       <Icon size={24} />
                    </motion.div>
                  ))}
               </div>
            </motion.div>
            <motion.div 
              // variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
               {[
                 { icon: <Monitor />, title: "Web Platforms", desc: "SaaS products & Enterprise web layouts." },
                 { icon: <Smartphone />, title: "Mobile Apps", desc: "Native experiences optimized for touch." },
                 { icon: <Briefcase />, title: "Complex Systems", desc: "Dashboard systems for dense workflows." },
                 { icon: <Bot />, title: "AI Products", desc: "Smart interfaces for automation apps." }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all"
                 >
                    <div className="text-purple-400 mb-6">{item.icon}</div>
                    <h5 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
          </div>
      </section>

   <HumanAICollaboration/>

   <FAQSection />


      {/* --- 6. FINAL CTA --- */}
      <section className="px-6 py-10">
         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto bg-purple-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden"
         >
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" 
            />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
                Design Products <br /> Users <span className="italic">Actually Love.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <button     aria-label="Uptimiseit" className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl">
                 Start Your Mission
              </button>
            </motion.div>
         </motion.div>
      </section>
    </main>
  );
};

export default ProductDesignPage;