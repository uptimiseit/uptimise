'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, RefreshCw, MessageSquare, 
  FileText, Github, ShieldCheck, 
  ChevronRight, Radio 
} from 'lucide-react';

const transparencyPoints = [
  {
    title: "Clear Milestones",
    desc: "Discrete, value-driven phases with fixed delivery targets.",
    icon: <Radio size={20} />,
    status: "Trackable",
    size: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    title: "Regular Sprint Reviews",
    desc: "Bi-weekly demonstrations of working code and progress audits.",
    icon: <RefreshCw size={20} />,
    status: "Continuous",
    size: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    title: "Open Communication",
    desc: "Direct access to our engineering squad via Slack and dedicated portals.",
    icon: <MessageSquare size={20} />,
    status: "Instant",
    size: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    title: "Detailed Progress Reports",
    desc: "AI-generated technical audits and executive summaries delivered weekly.",
    icon: <FileText size={20} />,
    status: "Documented",
    size: "col-span-12 md:col-span-7"
  },
  {
    title: "Code Repository Access",
    desc: "Full visibility into the GitHub/GitLab repo from day one. You own the IP.",
    icon: <Github size={20} />,
    status: "Live_Access",
    size: "col-span-12 md:col-span-5",
    featured: true
  }
];

const TransparencySection = () => {
  return (
    <section className="relative bg-[#FDFDFF] py-32 px-6 overflow-hidden">
      {/* Background Decor: The "Pulse" Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 text-left">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <Eye className="text-emerald-600" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 font-mono">
                Visibility Protocol :: Active
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Full Spectrum <br />
              <span className="text-emerald-600 italic">Transparency.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 font-body max-w-sm lg:text-right pb-4">
            No black boxes. No hidden cycles. Just pure engineering visibility from discovery to deployment.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {transparencyPoints.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 group relative flex flex-col justify-between overflow-hidden ${
                item.featured 
                ? 'bg-slate-950 border-slate-800 text-white' 
                : 'bg-white border-slate-100 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-100/30'
              } ${item.size}`}
            >
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center">
                  <div className={`p-4 rounded-2xl ${item.featured ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest ${
                    item.featured ? 'bg-white/10 border-white/20 text-emerald-400' : 'bg-white border-slate-100 text-slate-400'
                  }`}>
                    {item.status}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-3xl font-black font-header tracking-tight ${item.featured ? 'text-white' : 'text-slate-950'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-base font-body leading-relaxed max-w-md ${item.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Decorative "Scanning" Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10 flex justify-end mt-8">
                <div className={`flex items-center gap-2 text-[10px] font-black font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity ${item.featured ? 'text-emerald-400' : 'text-emerald-600'}`}>
                   VIEW PROTOCOL <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Trust" Bar */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 items-center opacity-40 grayscale pointer-events-none">
           <div className="flex items-center gap-2 text-slate-900 font-black tracking-tighter text-2xl">
              <ShieldCheck className="text-emerald-600" />
              IP_PROTECTION
           </div>
           <div className="h-4 w-px bg-slate-300 hidden md:block" />
           <div className="flex items-center gap-2 text-slate-900 font-black tracking-tighter text-2xl">
              <Github />
              TOTAL_OWNERSHIP
           </div>
           <div className="h-4 w-px bg-slate-300 hidden md:block" />
           <div className="flex items-center gap-2 text-slate-900 font-black tracking-tighter text-2xl">
              LIVE_MONITORING
           </div>
        </div>

      </div>
    </section>
  );
};

export default TransparencySection;