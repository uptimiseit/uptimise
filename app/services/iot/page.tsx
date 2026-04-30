'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, MousePointer2, Layout, 
  Sparkles, PenTool, CheckCircle2, 
  Figma, Monitor, Smartphone, 
  Briefcase, Bot, Search, ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

const designStages = [
  { id: "01", title: "Discovery & Research", desc: "Understanding behavior through persona mapping and journey analysis.", icon: <Search size={20} /> },
  { id: "02", title: "Wireframing", desc: "Structuring navigation and layouts before a single pixel is colored.", icon: <Layout size={20} /> },
  { id: "03", title: "Visual Systems", desc: "High-fidelity interfaces built on scalable component libraries.", icon: <Palette size={20} /> },
  { id: "04", title: "Interactive Prototypes", desc: "Simulating behavior to validate concepts before engineering starts.", icon: <MousePointer2 size={20} /> }
];

export default function ProductDesignPage() {
  const [activeStage, setActiveStage] = useState("01");

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-100 overflow-hidden">
      
      {/* 1. HERO: LIGHT THEME (The Creative Studio) */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea08_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
              <Sparkles size={14} className="text-purple-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-700 font-mono">Module::Design_Systems</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] uppercase">
              Experience <br />
              <span className="text-purple-600 italic">Architecture.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Uptimise IT crafts high-stakes digital experiences by merging deep user research with AI-accelerated design workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/contact" className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:bg-purple-600 transition-colors">
                Start Design Project
              </Link>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
                View Showcase
              </button>
            </div>
          </motion.div>

          {/* Abstract Design Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 hidden lg:flex justify-end"
          >
            <div className="relative w-96 h-96 bg-slate-50 border border-slate-200 rounded-[4rem] p-10 shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start relative z-10">
                <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <PenTool size={24} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono font-black text-slate-400">CANVAS_STATUS</p>
                  <p className="text-xs font-bold text-slate-950">Active_Iteration</p>
                </div>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-purple-600" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 bg-purple-100 rounded-xl" />
                  <div className="h-12 bg-blue-100 rounded-xl" />
                  <div className="h-12 bg-emerald-100 rounded-xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PROP: DARK THEME (The Logic) */}
      <section className="py-24 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight uppercase">
              Design is <br /><span className="text-purple-500 italic">Performance.</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Great software isn't just about code—it's about how it feels. We solve low engagement by integrating UX research directly into our engineering lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Low Engagement", val: "UX Strategy" },
              { title: "Interface Friction", val: "User Testing" },
              { title: "Scalability", val: "Design Systems" },
              { title: "Dev-Design Gap", val: "Handoff Ops" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-purple-500/50 transition-all group">
                <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-2">{item.title}</p>
                <p className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">Resolved via {item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS: LIGHT THEME (Accordion) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">The Design Lifecycle.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {designStages.map((stage) => (
              <motion.div 
                key={stage.id} 
                onMouseEnter={() => setActiveStage(stage.id)}
                className={`p-10 rounded-[3rem] border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  activeStage === stage.id ? 'bg-slate-950 text-white scale-105 shadow-2xl' : 'bg-slate-50 border-slate-100 text-slate-900'
                }`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className={`font-mono text-sm font-black ${activeStage === stage.id ? 'text-purple-400' : 'text-slate-300'}`}>
                    /{stage.id}
                  </span>
                  <div className={activeStage === stage.id ? 'text-white' : 'text-slate-400'}>
                    {stage.icon}
                  </div>
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{stage.title}</h4>
                <p className={`text-xs leading-relaxed font-medium ${activeStage === stage.id ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stage.desc}
                </p>
                {activeStage === stage.id && (
                  <motion.div layoutId="glow" className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI DESIGN: PURPLE THEME */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-purple-600 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                AI-Enhanced <br /><span className="text-slate-950">Velocity.</span>
              </h2>
              <p className="text-lg text-purple-100 font-medium">
                We automate repetitive design tasks using custom AI agents, allowing our designers to focus on high-level problem solving.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Rapid Variations", "Usability Audits", "Pattern Recognition", "Auto-Scaffolding"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ECOSYSTEM: DARK THEME */}
      <section className="py-24 px-6 bg-[#0B0A0F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-4xl font-black uppercase italic text-purple-400 tracking-tighter">The Stack.</h3>
              <p className="text-slate-400 font-medium">Zero-friction handoff to engineering via industry-standard protocols.</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-purple-500 transition-colors">
                  <Figma size={20} />
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-purple-500 transition-colors">
                  <Bot size={20} />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Monitor, title: "Web Platforms", desc: "SaaS products & Enterprise web layouts." },
                { icon: Smartphone, title: "Mobile Apps", desc: "Native experiences optimized for touch." },
                { icon: Briefcase, title: "Complex Systems", desc: "Dashboard systems for dense workflows." },
                { icon: Bot, title: "AI Interfaces", desc: "Smart layouts for automation apps." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <item.icon className="text-purple-400 mb-6" size={24} />
                  <h5 className="font-black uppercase tracking-tight mb-2 text-white">{item.title}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA: THE FINAL SHOT */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto bg-slate-950 p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea15_0%,transparent_70%)]" />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
            Design <br /> for <span className="text-purple-500 italic">Humans.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-12 py-6 bg-purple-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-purple-700 transition-all">
              Initialize Project
            </Link>
            <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}