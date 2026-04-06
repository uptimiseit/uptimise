'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, MousePointer2, Layers, 
  Sparkles, PenTool, Layout, Box, 
  CheckCircle2, ArrowRight, Figma, 
  Monitor, Smartphone, Briefcase, Bot,
  Search
} from 'lucide-react';

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
      <section className="px-6 mb-32 relative">
        {/* Decorative SVG Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 text-center lg:text-left  space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
              <Sparkles size={14} className="text-purple-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-700 font-mono">Module::Design_Systems</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
              Experience <br />
              <span className="text-purple-600 italic">Architecture.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT crafts intuitive, high-stakes digital experiences by merging deep user research with AI-accelerated design workflows.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all shadow-xl shadow-slate-200">
                Start Design Project
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
                Book Strategy Call
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] aspect-square bg-slate-50 border border-slate-200 rounded-[4rem] p-10 flex flex-col justify-between shadow-2xl"
            >
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                     <PenTool size={24} />
                  </div>
                  <div className="text-right space-y-1">
                     <p className="text-[10px] font-black font-mono text-slate-400 uppercase">Canvas_State</p>
                     <p className="text-xs font-bold text-slate-950 uppercase italic">Iterating_v2.4</p>
                  </div>
               </div>
               {/* Abstract UI Elements */}
               <div className="space-y-4">
                  <div className="h-4 w-full bg-slate-200 rounded-lg animate-pulse" />
                  <div className="h-4 w-3/4 bg-slate-200 rounded-lg animate-pulse delay-75" />
                  <div className="grid grid-cols-3 gap-2">
                     <div className="h-10 bg-purple-100 rounded-lg" />
                     <div className="h-10 bg-blue-100 rounded-lg" />
                     <div className="h-10 bg-emerald-100 rounded-lg" />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. WHY DESIGN: The Business Logic --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
               Design is <br /><span className="text-purple-600">Performance.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Great software isn't just about code—it's about how it feels to use. We solve low engagement and high support costs by integrating design directly into our engineering lifecycle.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               { title: "Low Engagement", val: "Fixed via UX Strategy" },
               { title: "Interface Friction", val: "Resolved via User Testing" },
               { title: "Scalability", val: "Ensured via Design Systems" },
               { title: "Engineering Lag", val: "Removed via Handoff Ops" }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-sm font-bold text-slate-950">{item.val}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE PROCESS: Blueprint Stages --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h3 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">The Design Lifecycle.</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {designStages.map((stage) => (
              <div 
                key={stage.id} 
                onMouseEnter={() => setActiveStage(stage.id)}
                className={`p-10 rounded-[3rem] border transition-all duration-500 cursor-pointer ${
                  activeStage === stage.id ? 'bg-slate-950 text-white border-slate-950 shadow-2xl scale-105' : 'bg-white text-slate-950 border-slate-100'
                }`}
              >
                <div className="flex justify-between items-start mb-12">
                   <span className={`font-mono text-sm font-black ${activeStage === stage.id ? 'text-purple-400' : 'text-slate-200'}`}>
                      {stage.id}
                   </span>
                   <div className={`${activeStage === stage.id ? 'text-white' : 'text-slate-400'}`}>
                      {stage.icon}
                   </div>
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{stage.title}</h4>
                <p className={`text-xs leading-relaxed font-medium ${activeStage === stage.id ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. AI-ENHANCED DESIGN: The Turbocharger --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto p-12 lg:p-24 bg-purple-50 rounded-[4rem] border border-purple-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-purple-950 group-hover:scale-110 transition-transform duration-700">
               <Sparkles size={300} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none uppercase">
                    AI-Enhanced <br /><span className="text-purple-600">Velocity.</span>
                  </h2>
                  <p className="text-lg text-slate-600 font-medium max-w-md">
                    We use AI to automate the repetitive parts of design—like variation generation and usability pattern analysis—so our humans can focus on pure creativity.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Rapid Variation Generation", "Usability Pattern Audit", 
                    "AI-Driven Prototyping", "Automated UI Content"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/60 border border-white rounded-2xl">
                       <CheckCircle2 size={16} className="text-purple-600" />
                       <span className="text-xs font-black text-slate-950 uppercase tracking-tight">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. TOOLS & ECOSYSTEM: The Stack --- */}
      <section className="py-32 px-6 bg-[#0B0A0F] text-white">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-8">
               <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-purple-400">The Stack.</h3>
               <p className="text-slate-400 font-medium text-lg leading-relaxed">
                  We use industry-standard tools and collaborative systems to ensure that our design handoff to engineering is zero-friction.
               </p>
               <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-purple-400 transition-all">
                     <Figma className="text-white" size={24} />
                  </div>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-purple-400 transition-all">
                     <Bot className="text-white" size={24} />
                  </div>
               </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { icon: <Monitor />, title: "Web Platforms", desc: "SaaS products & Enterprise web layouts." },
                 { icon: <Smartphone />, title: "Mobile Apps", desc: "Native experiences optimized for touch." },
                 { icon: <Briefcase />, title: "Complex Systems", desc: "Dashboard systems for dense workflows." },
                 { icon: <Bot />, title: "AI Products", desc: "Smart interfaces for automation apps." }
               ].map((item, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="text-purple-400 mb-6">{item.icon}</div>
                    <h5 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto bg-purple-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
                Design Products <br /> Users <span className="italic">Actually Love.</span>
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200">
                 Start Your Mission
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default ProductDesignPage;