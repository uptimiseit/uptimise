'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Cpu, Zap, Code2, ShieldCheck, Terminal, 
  Settings, Layers, ArrowRight, CheckCircle2, 
  Activity, Search, Box, Rocket, Network, Database
} from 'lucide-react';

const agents = [
  {
    id: "pm",
    title: "AI Product Manager",
    desc: "Converts vision into structured PRDs and development roadmaps.",
    roles: ["Feature Definition", "Sprint Planning", "Spec Generation"],
    icon: <Search className="text-blue-500" />
  },
  {
    id: "arch",
    title: "AI Architect",
    desc: "Analyzes technical requirements to design scalable system topologies.",
    roles: ["Stack Evaluation", "Schema Planning", "Infra Design"],
    icon: <Box className="text-purple-500" />
  },
  {
    id: "coding",
    title: "AI Coding Agent",
    desc: "Generates scaffolding and core logic modules with mathematical precision.",
    roles: ["API Scaffolding", "Component Gen", "Model Mapping"],
    icon: <Code2 className="text-cyan-500" />
  },
  {
    id: "qa",
    title: "AI QA Agent",
    desc: "Autonomous testing clusters that identify edge cases in milliseconds.",
    roles: ["Test Case Gen", "Regression Audit", "Bug Detection"],
    icon: <ShieldCheck className="text-emerald-500" />
  },
  {
    id: "devops",
    title: "AI DevOps Agent",
    desc: "Automates cloud environments and self-healing deployment pipelines.",
    roles: ["CI/CD Config", "K8s Orchestration", "Traffic Scaling"],
    icon: <Terminal className="text-orange-500" />
  }
];

const FactoryPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* --- 1. HERO: The Factory Blueprint --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-slate-950">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Bot size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
                System_Core::Factory_Active
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
              AI Software <br />
              <span className="text-blue-600 italic">Factory.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Moving beyond traditional agency bottlenecks. A hybrid ecosystem where intelligent agents and elite engineers build products 3x faster.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
                Initialize Project
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative">
            {/* Visual representation of an AI "Node" */}
            <div className="w-full aspect-square border-2 border-dashed border-white/10 rounded-[4rem] flex items-center justify-center p-12 group">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-blue-500/20 rounded-full scale-75" 
                />
                <div className="relative bg-blue-600/10 p-12 rounded-[3rem] border border-blue-500/30 backdrop-blur-3xl text-center space-y-4 group-hover:scale-105 transition-transform duration-700">
                    <Cpu size={64} className="text-blue-500 mx-auto" />
                    <p className="text-[10px] font-mono text-blue-400 font-black tracking-widest">NEURAL_ENGINE_ONLINE</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: Agency vs Factory --- */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase">
                 Traditional <br /> Models are <span className="text-red-500 italic">Broken.</span>
               </h2>
               <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                 Manual workflows, massive teams, and fragmented communication layers result in slow delivery and high project risk.
               </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
               {[
                 { label: "Inefficient Workflows", icon: <Activity className="text-red-400" /> },
                 { label: "Slow Delivery Cycles", icon: <Zap className="text-red-400" /> },
                 { label: "High Coordination Overhead", icon: <Layers className="text-red-400" /> }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl flex items-center gap-6 shadow-sm">
                    {item.icon}
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.label}</span>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* --- 3. AGENT ECOSYSTEM: Inside the Factory --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
             <h2 className="text-5xl font-black tracking-tighter uppercase">Agentic <br /><span className="text-blue-600">Orchestration.</span></h2>
             <p className="text-slate-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] italic">// Autonomous_Worker_Nodes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-500/20 hover:shadow-2xl transition-all group">
                <div className="flex justify-between items-start mb-8">
                   <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-950 group-hover:text-white transition-all duration-500">
                      {agent.icon}
                   </div>
                   <span className="text-[9px] font-black text-slate-300 font-mono tracking-widest group-hover:text-blue-600 transition-colors uppercase">
                      Protocol::{agent.id}
                   </span>
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-4 uppercase tracking-tight">{agent.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-8">{agent.desc}</p>
                <div className="space-y-2">
                   {agent.roles.map((role, idx) => (
                     <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-blue-600" /> {role}
                     </div>
                   ))}
                </div>
              </div>
            ))}
            
            {/* The "You" Card */}
            <div className="p-10 rounded-[3rem] bg-blue-600 text-white flex flex-col justify-between group">
               <div className="space-y-4">
                  <h4 className="text-3xl font-black tracking-tighter italic leading-none uppercase">The Elite Engineer.</h4>
                  <p className="text-sm text-blue-100 font-medium">
                    AI handles the noise. Our humans handle the vision, architecture, and quality assurance.
                  </p>
               </div>
               <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] font-black font-mono tracking-widest uppercase opacity-60">Human_Overwatch</span>
                  <CheckCircle2 size={24} className="text-blue-200" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. THE WORKFLOW: Concept to Launch --- */}
      <section className="py-32 px-6 bg-slate-950 text-white relative">
         <div className="max-w-7xl mx-auto space-y-20">
            <h3 className="text-4xl font-black text-center uppercase tracking-tight">The Factory Pipeline.</h3>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
               {[
                 { step: "Discovery", icon: <Search /> },
                 { step: "Architecture", icon: <Box /> },
                 { step: "AI-Dev", icon: <Code2 /> },
                 { step: "QA-Audit", icon: <ShieldCheck /> },
                 { step: "Deploy", icon: <Rocket /> }
               ].map((item, i) => (
                 <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center space-y-4">
                       <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group hover:bg-blue-600 hover:text-white transition-all">
                          {item.icon}
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest">{item.step}</span>
                    </div>
                    {i < 4 && <ArrowRight className="hidden lg:block opacity-20" />}
                 </React.Fragment>
               ))}
            </div>
         </div>
      </section>

      {/* --- 5. BENEFITS: Why it Wins --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { title: "3x Faster", desc: "AI-native speed across the whole lifecycle." },
                { title: "Elite Precision", desc: "Smaller teams delivering enterprise quality." },
                { title: "Future-Proof", desc: "Architecture built for long-term scalability." },
                { title: "Dynamic", desc: "Products that evolve via continuous AI audit." }
            ].map((benefit, i) => (
                <div key={i} className="space-y-4">
                    <div className="text-blue-600 font-mono text-xl font-black italic">/0{i+1}</div>
                    <h5 className="text-xl font-black text-slate-950 uppercase tracking-tight">{benefit.title}</h5>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative z-10 space-y-4">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                   Enter the <br /> <span className="italic">Factory.</span>
                </h2>
                <p className="text-blue-100 text-lg font-medium max-w-xl mx-auto">Scale your product vision with the next generation of digital engineering.</p>
            </div>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200">
                 Initialize Strategy Call
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default FactoryPage;