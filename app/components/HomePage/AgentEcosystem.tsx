'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, Layers, Code2, 
  ShieldCheck, Terminal, Cpu, 
  ChevronRight, Activity 
} from 'lucide-react';

const agents = [
  {
    title: "AI Product Manager",
    desc: "Transforms vision into high-fidelity roadmaps and sprint plans.",
    icon: ClipboardList,
    color: "blue",
    size: "col-span-12 lg:col-span-4"
  },
  {
    title: "AI Coding Agent",
    desc: "Generates enterprise-grade scaffolding and production modules with 100x velocity.",
    icon: Code2,
    color: "blue",
    size: "col-span-12 lg:col-span-8",
    featured: true
  },
  {
    title: "AI Architecture",
    desc: "Designs scalable system topologies and database schemas.",
    icon: Layers,
    color: "slate",
    size: "col-span-12 lg:col-span-4"
  },
  {
    title: "AI QA Agent",
    desc: "Autonomous testing pipelines with 99.9% edge-case detection.",
    icon: ShieldCheck,
    color: "slate",
    size: "col-span-12 lg:col-span-4"
  },
  {
    title: "AI DevOps",
    desc: "Zero-touch CI/CD and cloud infrastructure provisioning.",
    icon: Terminal,
    color: "slate",
    size: "col-span-12 lg:col-span-4"
  }
];

const EcosystemSection = () => {
  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 space-y-4 flex items-center justify-between">

              <h2 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
            The Engineering <br />
            <span className="text-blue-600 italic">Ecosystem.</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <Cpu className="text-blue-600" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
              Agentic Workforce v4.0
            </span>
          </div>
      
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-min">
          
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`relative group ${agent.size} rounded-[2.5rem] border border-slate-100 bg-white p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -inset-20 bg-blue-400/0 group-hover:bg-blue-400/5 blur-[100px] rounded-full transition-all duration-700`} />

              <div className="relative z-10 h-full flex flex-col justify-between gap-12">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${agent.featured ? 'bg-blue-600 text-white' : 'bg-slate-50 text-blue-600'}`}>
                    {React.createElement(agent.icon, { size: 28 })}
                  </div>
                  
                  {agent.featured && (
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                      <Activity size={12} className="text-blue-600 animate-pulse" />
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest font-mono">Core_Engine</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className={`font-header font-black tracking-tight ${agent.featured ? 'text-4xl' : 'text-2xl'} text-slate-950`}>
                    {agent.title}
                  </h3>
                  <p className="text-slate-500 font-body leading-relaxed max-w-sm">
                    {agent.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-mono text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Initialize Protocol <ChevronRight size={14} />
                  </div>
                </div>
              </div>

              {/* Decorative Vector Lines (Bottom Right) */}
              <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="120" cy="120" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="120" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
                 </svg>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;