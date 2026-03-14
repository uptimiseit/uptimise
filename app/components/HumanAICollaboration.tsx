'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Brain, Sparkles, ShieldCheck, Database, Layout, FastForward, CheckCircle2, Workflow, Activity, Target } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const HumanAICollaboration = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animation for AI Points (Slide up and fade in)
    gsap.from(".ai-point", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ai-point",
        start: "top 85%",
      }
    });

    // Animation for Human Points (Slide down and fade in)
    gsap.from(".human-point", {
      y: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: ".human-point",
        start: "top 85%",
      }
    });

    // Subtle floating animation for the central "Synapse"
    gsap.to(".central-synapse", {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className=" mb-10 space-y-6 flex items-center justify-between">
          <div className="flex justify-between items-center  gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <div className='flex items-center gap-2'>
                 <Sparkles className="text-blue-600 size-3" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
              The Amplification Layer
            </span>
                </div>
           
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
            Human Ingenuity. <br />
            <span className="text-blue-600">AI Velocity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          
          {/* LEFT: THE AI ENGINE (Points slide UP) */}
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                <Database size={24} />
              </div>
              <h3 className="text-3xl font-black font-header text-slate-950">AI Systems</h3>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Layout size={18} />, title: "Development Scaffolding" },
                { icon: <CheckCircle2 size={18} />, title: "Automated Testing" },
                { icon: <FastForward size={18} />, title: "Deployment Automation" },
                { icon: <Workflow size={18} />, title: "Architecture Analysis" }
              ].map((item, i) => (
                <div key={i} className="ai-point flex items-center gap-6 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-blue-600">{item.icon}</div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE ELITE ENGINEER (Points slide DOWN) */}
          <div className="p-10 rounded-[3rem] bg-slate-950 text-white space-y-10 relative overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/10">
                <Brain size={24} />
              </div>
              <h3 className="text-3xl font-black font-header">Elite Engineers</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {[
                { icon: <Target size={18} />, title: "Architecture Decisions" },
                { icon: <Activity size={18} />, title: "System Performance" },
                { icon: <ShieldCheck size={18} />, title: "Security Enforcement" },
                { icon: <Sparkles size={18} />, title: "Product Quality" }
              ].map((item, i) => (
                <div key={i} className="human-point flex items-center gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-blue-400">{item.icon}</div>
                  <h4 className="font-bold text-slate-100">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* CENTRAL INTERACTIVE SYNAPSE */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="central-synapse w-20 h-20 rounded-full bg-white border-8 border-slate-50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]">
               <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanAICollaboration;