'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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

// // --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     }
//   }
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 20, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

const EcosystemSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 px-6 overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4 flex items-center flex-col lg:flex-row justify-between text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
            The Engineering <br />
            <span className="text-blue-600 italic">Ecosystem.</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm mt-4 lg:mt-0">
            <Cpu className="text-blue-600 animate-pulse" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
              Agentic Workforce v4.0
            </span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-12 gap-4 auto-rows-min"
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              // variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`relative group ${agent.size} rounded-[2.5rem] border border-slate-100 bg-white p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/40`}
            >
              {/* Interactive Background Glow */}
              <div className="absolute -inset-20 bg-blue-400/0 group-hover:bg-blue-400/5 blur-[100px] rounded-full transition-all duration-700 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col justify-between gap-12">
                <div className="flex justify-between items-start">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 rounded-2xl ${agent.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-50 text-blue-600'}`}
                  >
                    {React.createElement(agent.icon, { size: 28 })}
                  </motion.div>
                  
                  {agent.featured && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100"
                    >
                      <Activity size={12} className="text-blue-600 animate-pulse" />
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest font-mono">Core_Engine</span>
                    </motion.div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className={`font-header font-black tracking-tight ${agent.featured ? 'text-4xl lg:text-5xl' : 'text-2xl'} text-slate-950`}>
                    {agent.title}
                  </h3>
                  <p className="text-slate-500 font-body leading-relaxed max-w-sm text-sm">
                    {agent.desc}
                  </p>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-blue-600 font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer group-hover:opacity-100 transition-all"
                  >
                    Initialize Protocol <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>

              {/* Decorative Vector Lines (Bottom Right) */}
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:opacity-20 transition-all duration-500 text-blue-600">
                 <svg width="160" height="160" viewBox="0 0 120 120">
                    <motion.circle 
                      cx="120" cy="120" r="100" 
                      fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <circle cx="120" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                 </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;