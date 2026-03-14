'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, Search, ClipboardCheck, 
  Box, Code2, ShieldCheck, 
  Terminal, Rocket, ChevronRight,
  UserCheck, Bot, Activity, Zap, Users, Shield
} from 'lucide-react';

const architectureSteps = [
  {
    id: "discovery",
    title: "Discovery",
    subtitle: "Stage 01",
    icon: <Search size={20} />,
    desc: "Understanding business goals and defining product strategy.",
    details: ["Product Roadmap", "Feature Breakdown", "System Scope"],
    agent: "Human-Led Discovery"
  },
  {
    id: "pm",
    title: "AI PM Agent",
    subtitle: "Stage 02",
    icon: <ClipboardCheck size={20} />,
    desc: "Transforming vision into structured development sprints.",
    details: ["Sprint Planning", "PRD Generation", "Feature Priority"],
    agent: "AI Product Manager"
  },
  {
    id: "arch",
    title: "AI Architect",
    subtitle: "Stage 03",
    icon: <Box size={20} />,
    desc: "Designing the technical blueprint and system topology.",
    details: ["Stack Selection", "DB Schema", "Infrastructure"],
    agent: "AI Architecture Agent"
  },
  {
    id: "coding",
    title: "AI Coder",
    subtitle: "Stage 04",
    icon: <Code2 size={20} />,
    desc: "Generating scaffolding and core logic modules.",
    details: ["API Scaffolding", "React Components", "Database Models"],
    agent: "AI Coding Agent"
  },
  {
    id: "qa",
    title: "AI QA Agent",
    subtitle: "Stage 05",
    icon: <ShieldCheck size={20} />,
    desc: "Autonomous testing and edge-case identification.",
    details: ["Unit Testing", "Regression", "Bug Detection"],
    agent: "AI Testing Agent"
  },
  {
    id: "devops",
    title: "AI DevOps",
    subtitle: "Stage 06",
    icon: <Terminal size={20} />,
    desc: "Containerization and CI/CD pipeline automation.",
    details: ["Docker Setup", "CI/CD Config", "Cloud Deploy"],
    agent: "AI DevOps Agent"
  },
  {
    id: "launch",
    title: "Launch",
    subtitle: "Stage 07",
    icon: <Rocket size={20} />,
    desc: "Continuous monitoring and digital growth systems.",
    details: ["Performance Monitoring", "SEO Ops", "Analytics"],
    agent: "Growth Ecosystem"
  }
];

const benefits = [
  { label: "Velocity", value: "3x Faster Delivery", icon: <Zap size={24} />, num: "01" },
  { label: "Efficiency", value: "Automated Workflows", icon: <Activity size={24} />, num: "02" },
  { label: "Team", value: "Elite Hybrid Squads", icon: <Users size={24} />, num: "03" },
  { label: "Quality", value: "Enterprise Scale", icon: <Shield size={24} />, num: "04" }
];

const FactoryArchitecture = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-white to-indigo-50 py-10 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <Bot className="text-blue-600" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
              System_Architecture_v1.0
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-none">
            Inside the AI <br />
            <span className="text-blue-600 italic">Software Factory.</span>
          </h2>
        </div>

        {/* Pipeline Logic (Original code kept) */}
        <div className="relative pt-10 pb-6">
          <div className="absolute top-[138px] left-0 right-0 h-px bg-slate-100 hidden lg:block" />
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-0">
            {architectureSteps.map((step) => (
              <div 
                key={step.id} 
                className="relative flex flex-col items-center lg:w-full group"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="mb-6 flex flex-col items-center">
                  <span className="text-[10px] font-black font-mono text-slate-300 uppercase tracking-widest mb-4">
                    {step.subtitle}
                  </span>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 z-20 ${
                      hoveredStep === step.id 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                      : 'bg-white border border-slate-100 text-slate-400 group-hover:border-blue-500/50'
                    }`}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <div className="text-center px-4">
                  <h4 className="text-sm font-black font-header text-slate-950 uppercase tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <div className={`w-1 h-1 rounded-full mx-auto transition-all ${hoveredStep === step.id ? 'bg-blue-600 scale-150' : 'bg-slate-200'}`} />
                </div>
                <AnimatePresence>
                  {hoveredStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-40 z-30 w-72 p-6 bg-slate-950 rounded-[2rem] text-white shadow-2xl"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                          <Bot size={14} className="text-blue-400" />
                          <span className="text-[10px] font-black font-mono tracking-widest text-blue-400 uppercase">{step.agent}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-body leading-relaxed">{step.desc}</p>
                        <div className="space-y-2">
                          <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Generates:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.details.map((detail, idx) => (
                              <span key={idx} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-slate-200">{detail}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* --- NEW DESIGNED BENEFITS BAR --- */}
        <div className="mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-100/40"
            >
              {/* Background Decor: Big Index Number */}
              <div className="absolute -top-6 -right-4 text-[8rem] font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:translate-y-4">
                {benefit.num}
              </div>

              {/* Progress Line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-700 group-hover:w-full" />

              <div className="space-y-6 relative z-10">
                <div className="p-3 bg-slate-50 rounded-xl w-fit text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] font-mono group-hover:text-blue-600 transition-colors">
                      {benefit.label}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 font-header tracking-tight leading-tight">
                    {benefit.value}
                  </h4>
                </div>
              </div>

              {/* Meta Info Footer */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase italic">
                  Performance_Verified
                </span>
                <ChevronRight className="text-blue-600" size={16} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FactoryArchitecture;