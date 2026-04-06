'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Code2, Database, Radio, 
  Cloud, Palette, TrendingUp, ArrowUpRight, 
  ArrowRight
} from 'lucide-react';

const serviceGroups = [
  {
    title: "AI Product Development",
    icon: Cpu,
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-600",
    items: ["SaaS Platforms", "AI Applications", "Automation Systems"]
  },
  {
    title: "Software Engineering",
    icon: Code2,
    color: "from-slate-500/10 to-slate-600/5",
    accent: "text-slate-600",
    items: ["Web Applications", "Mobile Apps", "Enterprise Platforms"]
  },
  {
    title: "Blockchain Engineering",
    icon: Database,
    color: "from-purple-500/10 to-purple-600/5",
    accent: "text-purple-600",
    items: ["Smart Contracts", "Web3 Applications", "Crypto Wallets"]
  },
  {
    title: "IoT & Embedded",
    icon: Radio,
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-600",
    items: ["Embedded Firmware", "Sensor Integration", "IoT Platforms"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-cyan-500/10 to-cyan-600/5",
    accent: "text-cyan-600",
    items: ["AWS / Google Cloud", "Docker & Kubernetes", "CI/CD Pipelines"]
  },
  {
    title: "Product Design & UX",
    icon: Palette,
    color: "from-pink-500/10 to-pink-600/5",
    accent: "text-pink-600",
    items: ["UX Research", "UI Design", "Design Systems"]
  },
  {
    title: "Digital Growth",
    icon: TrendingUp,
    color: "from-orange-500/10 to-orange-600/5",
    accent: "text-orange-600",
    items: ["AI-Powered Marketing", "SEO / SMO", "Analytics Dashboards"]
  }
];

const ServicesEcosystem = () => {
  return (
    <section className="relative bg-white py-10 px-6 overflow-hidden">
      {/* Background Engineering Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className=" flex items-center gap-4 justify-between flex-col  lg:flex-row mb-10 space-y-6">


          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
    
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
              Expertise Matrix v2.0
             
            </span>
              
       
      
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
            Service <br />
            <span className="text-blue-600 italic">Ecosystem.</span>
          </h2>
      
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {serviceGroups.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${group.color} border border-slate-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-slate-100 overflow-hidden ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Animated Corner Icon */}
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 {React.createElement(group.icon, { size: 120 })}
              </div>

              <div className="space-y-8 relative z-10">
                <div className={`p-4 bg-white rounded-2xl w-fit shadow-sm ${group.accent}`}>
                  {React.createElement(group.icon, { size: 24 })}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black font-header text-slate-950 tracking-tight leading-none">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => (
                      <span key={idx} className="text-[11px] font-mono font-bold text-slate-400 bg-white/50 px-2 py-1 rounded-md border border-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-end relative z-10">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
            </motion.div>
          ))}

          {/* Contact "Bridge" Card */}
  

        </div>

       <div className="lg:col-span-2 p-8 md:p-12 mt-5 rounded-[3rem] bg-[#020617] flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer relative overflow-hidden border border-white/5">
  
  {/* --- Background Elements --- */}
  {/* 1. The Glow */}
  <div className="absolute inset-0 bg-blue-600/5 blur-[100px] group-hover:bg-blue-600/15 transition-all duration-700" />
  
  {/* 2. The Tech Watermark (Portrait Icon on the right) */}
  <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 pointer-events-none group-hover:rotate-12">
    <Cpu size={280} className="text-white" strokeWidth={1} />
  </div>

  {/* --- LEFT SIDE: Copy --- */}
  <div className="relative z-10 space-y-4 text-left max-w-xl">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
        Active_Squad_Deployment
      </span>
    </div>
    
    <div className="space-y-2">
      <h4 className="text-2xl md:text-4xl font-black font-header text-white tracking-tighter leading-[1.1]">
        Need a custom <br /> 
        <span className="text-blue-500">engineering squad?</span>
      </h4>
      <p className="text-slate-400 text-base font-medium max-w-md leading-relaxed">
        Scale your technical DNA with an elite AI-augmented team. 
        Engineered for speed, deployed in 48 hours.
      </p>
    </div>
  </div>

  {/* --- RIGHT SIDE: Action Button --- */}
  <div className="relative z-10 shrink-0 w-full md:w-auto">
    <button className="relative w-full md:w-auto px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:shadow-white/10 group/btn overflow-hidden">
      {/* Subtle shine effect on button hover */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
      
      <span className="relative flex items-center justify-center gap-3">
        Consult Our Lead Engineers
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </span>
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default ServicesEcosystem;