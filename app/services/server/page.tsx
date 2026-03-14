'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Cloud, ShieldCheck, Terminal, 
  Cpu, Zap, Activity, Globe, RefreshCcw, 
  Database, HardDrive, BarChart3, Lock, 
  ArrowRight, CheckCircle2, Bot, Layers,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const infraStats = [
  { label: "Uptime", val: "99.99%", icon: <Activity size={20} /> },
  { label: "Deployments", val: "Automated", icon: <Zap size={20} /> },
  { label: "Security", val: "Zero-Trust", icon: <ShieldCheck size={20} /> },
  { label: "Scaling", val: "Elastic", icon: <Layers size={20} /> }
];

const DevOpsPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The High-Availability Entry --- */}
      <section className="px-6 mb-32 relative">
        {/* Background Grid for Technical Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100">
              <Terminal size={14} className="text-cyan-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700 font-mono">Module::Cloud_Infra_v2.0</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
              Scalable <br />
              <span className="text-cyan-600 italic">Persistence.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT engineers resilient, automated cloud environments that support high-performance digital platforms at any scale.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all shadow-xl shadow-slate-200">
                Scale Your Infrastructure
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
                System Audit
              </button>
            </div>
          </div>

          {/* Infrastructure "Live Dashboard" Visual */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-950 rounded-[3rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-400">
                  <Cpu size={200} />
               </div>
               
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center pb-6 border-b border-white/5">
                     <span className="text-[10px] font-black font-mono text-cyan-500 tracking-widest">INFRA_MONITORING</span>
                     <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />)}
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     {infraStats.map((stat, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex items-center gap-2 text-slate-500">
                              {stat.icon}
                              <span className="text-[9px] font-black uppercase tracking-widest">{stat.label}</span>
                           </div>
                           <p className="text-2xl font-black text-white italic">{stat.val}</p>
                        </div>
                     ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-3">
                     <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Cluster_Load</span>
                        <span>42%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '42%' }} transition={{ duration: 1.5 }} className="h-full bg-cyan-500" />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. THE CHALLENGE: Why DevOps? --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
               Stability <br /><span className="text-cyan-600">is not Optional.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Without modern DevOps, scaling becomes an existential risk. We solve unstable deployments and infrastructure bottlenecks by integrating automation directly into your code's DNA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               "Auto-Scaling Workloads", "Zero-Downtime Releases", 
               "Predictive Monitoring", "Cloud Cost Optimization"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                  <CheckCircle2 className="text-cyan-600 shrink-0" size={20} />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{text}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE CORE PILLARS: CI/CD & Cloud --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Automated Pipelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
               <h3 className="text-3xl font-black uppercase tracking-tight">CI/CD & Deployment Automation</h3>
               <p className="text-slate-500 font-medium leading-relaxed">
                  Continuous Integration and Deployment pipelines allow teams to release faster while maintaining perfect system stability via automated build and rollback mechanisms.
               </p>
               <ul className="space-y-3">
                  {["Automated Build Systems", "Validation Pipelines", "Rollback Mechanisms"].map(t => (
                    <li key={t} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" /> {t}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="lg:col-span-7 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
               {/* Visual Pipeline Flow */}
               {["Build", "Test", "Staging", "Deploy"].map((step, i) => (
                 <React.Fragment key={i}>
                    <div className="text-center">
                       <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-cyan-600 mb-4 border border-cyan-50">
                          {i === 0 && <Cpu size={24} />}
                          {i === 1 && <ShieldCheck size={24} />}
                          {i === 2 && <Globe size={24} />}
                          {i === 3 && <Rocket size={24} />}
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{step}</span>
                    </div>
                    {i < 3 && <ArrowRight className="hidden md:block text-slate-200" />}
                 </React.Fragment>
               ))}
            </div>
          </div>

          {/* Cloud Infrastructure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
             {[
               { title: "Cloud Management", desc: "Expert management across AWS and Google Cloud Platform.", icon: <Cloud /> },
               { title: "Containerization", desc: "Application orchestration using Docker and Kubernetes.", icon: <HardDrive /> },
               { title: "Performance Sync", desc: "Real-time visibility into infrastructure health and errors.", icon: <Activity /> }
             ].map((box, i) => (
               <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-cyan-500/20 hover:shadow-xl transition-all group">
                  <div className="text-cyan-600 mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    {box.icon}
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-4">{box.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{box.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 4. AI-ASSISTED OPTIMIZATION --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto p-12 lg:p-24 bg-cyan-950 rounded-[4rem] text-white relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-700">
               <Bot size={300} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                    AI-Driven <br /><span className="text-cyan-400">Optimization.</span>
                  </h2>
                  <p className="text-lg text-slate-300 font-medium max-w-md leading-relaxed">
                    We leverage AI to identify performance anomalies, predict infrastructure scaling needs, and automate deployment insights before issues arise.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Usage Analysis", "Anomaly Detection", 
                    "Scaling Recommendations", "Auto-Remediation"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                       <Zap size={16} className="text-cyan-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. TECH STACK: The Control Center --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900">Control Center.</h3>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] font-mono mt-4">// Tech_Stack_v2.0</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
               {[
                 { cat: "Cloud Platforms", tools: ["AWS", "Google Cloud"] },
                 { cat: "Containerization", tools: ["Docker", "Kubernetes"] },
                 { cat: "CI/CD Systems", tools: ["Github Actions", "Jenkins"] },
                 { cat: "Security", tools: ["Zero-Trust", "CloudFlare"] }
               ].map((group, i) => (
                 <div key={i} className="space-y-6">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 font-mono">{group.cat}</h5>
                    <div className="space-y-2">
                       {group.tools.map((tool, idx) => (
                         <p key={idx} className="text-2xl font-black tracking-tighter opacity-60 hover:opacity-100 transition-opacity cursor-default">{tool}</p>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto bg-cyan-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
                Zero-Downtime <br /> <span className="italic">Excellence.</span>
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200">
                 Secure Your Product
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default DevOpsPage;