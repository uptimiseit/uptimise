'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ShieldCheck, Rocket, ChevronRight, 
  Target, BarChart, Users, Cpu, MessageSquare, 
  ArrowRight, CheckCircle2, Globe, Lock
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-[#FDFDFF] font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION: The Hook */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <Zap size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700 font-mono">
              The AI Software Factory Model
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] mb-8">
            Build Faster with <br />
            <span className="text-blue-600 italic">AI-Native Engineering.</span>
          </h1>

          <p className="text-xl text-slate-500 font-body max-w-3xl mx-auto leading-relaxed mb-12">
            Uptimise IT combines orchestrated AI agents and elite engineers to launch digital platforms 
            significantly faster than traditional development models. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button     aria-label="Uptimiseit" className="h-16 px-10 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
              Book a Strategy Call <ArrowRight size={20} />
            </button>
            <button     aria-label="Uptimiseit" className="h-16 px-10 bg-white text-slate-950 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE: Identifying the Pain */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black font-header tracking-tight text-slate-950">
                Traditional Development <br /> is Broken.
              </h2>
              <p className="text-slate-500 font-body text-lg">
                Most companies struggle with long timelines and bloated teams. We solved it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Long development timelines",
                "Expensive, bloated teams",
                "Slow iteration cycles",
                "Unclear architecture",
                "Communication gaps"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-sm font-bold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION: AI Software Factory */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-black font-header tracking-tight text-slate-950 uppercase">
              The AI Software Factory
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI-Assisted Workflows", desc: "Agents handle documentation, scaffolding, and deployment.", icon: <Cpu /> },
              { title: "Elite Engineers", desc: "Humans manage architecture, security, and performance.", icon: <Users /> },
              { title: "Rapid Delivery", desc: "Parallel development cycles for accelerated launch.", icon: <Rocket /> }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 font-header">{card.title}</h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING & ENGAGEMENT: The Trust Bridge (New Section) */}
      <section className="py-24 px-6 bg-slate-950 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-10 blur-3xl bg-blue-600 rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black font-header tracking-tight uppercase">
              Engagement Models & Transparency
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We offer flexible, results-driven pricing to fit your product's growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: "MVP Launch", focus: "Seed Startups", timeline: "4-8 Weeks", pricing: "Fixed Price" },
              { type: "Scale-Up Squad", focus: "Growth Companies", timeline: "Continuous", pricing: "Monthly Retainer" },
              { type: "Enterprise Factory", focus: "Modernization", timeline: "Custom", pricing: "Project Based" }
            ].map((model, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">{model.focus}</span>
                <h4 className="text-2xl font-black mt-2 mb-6">{model.type}</h4>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs text-slate-400"><span>Timeline</span> <span>{model.timeline}</span></div>
                  <div className="flex justify-between text-xs text-slate-400"><span>Model</span> <span>{model.pricing}</span></div>
                </div>
                <button     aria-label="Uptimiseit" className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all text-sm">
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA: The Closing Argument */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-black font-header tracking-tighter leading-none">
            Ready to Build Your <br />
            <span className="text-blue-600 italic">Next Product?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button     aria-label="Uptimiseit" className="h-20 px-12 bg-blue-600 text-white rounded-full font-black text-xl shadow-2xl shadow-blue-200 flex items-center gap-3">
              Book a Strategy Call <ChevronRight />
            </button>
          </div>
          <div className="flex justify-center gap-12 pt-12 border-t border-slate-100 mt-12 opacity-50 grayscale">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><Lock size={14}/> IP_OWNERSHIP</div>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><Globe size={14}/> GLOBAL_SUPPORT</div>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><CheckCircle2 size={14}/> ZERO_DEBT</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;