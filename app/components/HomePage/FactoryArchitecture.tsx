'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Search, ClipboardCheck, 
  Box, Code2, ShieldCheck, 
  Terminal, Rocket, ChevronRight,
  Bot, Activity, Zap, Users, Shield
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

// // --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//   }
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.8, y: 20 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     y: 0, 
//     transition: { type: "spring", stiffness: 260, damping: 20 } 
//   }
// };

// const lineVariants: Variants = {
//   hidden: { scaleX: 0 },
//   visible: { 
//     scaleX: 1, 
//     transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } 
//   }
// };

const FactoryArchitecture = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-white to-indigo-50 py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <Bot className="text-blue-600 animate-pulse" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
              System_Architecture_v1.0
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.9] uppercase">
            Inside the AI <br />
            <span className="text-blue-600 italic">Software Factory.</span>
          </h2>
        </motion.div>

        {/* Pipeline Logic */}
        <div className="relative pt-12 pb-12">
          {/* Animated connection line */}
          <motion.div 
            // variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-[138px] left-0 right-0 h-[2px] bg-blue-100 hidden lg:block origin-left" 
          />

          <motion.div 
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-0"
          >
            {architectureSteps.map((step) => (
              <motion.div 
                key={step.id} 
                // variants={itemVariants}
                className="relative flex flex-col items-center lg:w-full group"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="mb-6 flex flex-col items-center relative">
                  <span className="text-[10px] font-black font-mono text-slate-300 uppercase tracking-widest mb-4">
                    {step.subtitle}
                  </span>
                  
                  {/* Icon Container */}
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 z-20 cursor-pointer shadow-sm ${
                      hoveredStep === step.id 
                      ? 'bg-blue-600 text-white shadow-blue-200 scale-110' 
                      : 'bg-white border border-slate-100 text-slate-400 group-hover:border-blue-500/50'
                    }`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Active Indicator Pulse */}
                  {hoveredStep === step.id && (
                    <motion.div 
                      layoutId="pulse"
                      className="absolute inset-0 bg-blue-400/20 rounded-2xl -z-10"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  )}
                </div>

                <div className="text-center px-4">
                  <h4 className="text-xs font-black font-header text-slate-950 uppercase tracking-widest mb-2 transition-colors group-hover:text-blue-600">
                    {step.title}
                  </h4>
                  <div className={`w-1.5 h-1.5 rounded-full mx-auto transition-all duration-300 ${hoveredStep === step.id ? 'bg-blue-600 scale-150 shadow-[0_0_8px_#2563eb]' : 'bg-slate-200'}`} />
                </div>

                {/* Desktop Detail Popover */}
                <AnimatePresence>
                  {hoveredStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-44 z-40 w-72 p-6 bg-slate-950 rounded-[2.5rem] text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                          <Bot size={14} className="text-blue-400 animate-pulse" />
                          <span className="text-[10px] font-black font-mono tracking-[0.2em] text-blue-400 uppercase">{step.agent}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-body leading-relaxed">{step.desc}</p>
                        <div className="space-y-3">
                          <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Deployment_Artifacts:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.details.map((detail, idx) => (
                              <span key={idx} className="text-[9px] font-bold font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-200 uppercase">
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- BENEFITS CARDS --- */}
        <motion.div 
          className="mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              // variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col justify-between overflow-hidden group cursor-default transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-200/20"
            >
              {/* Background Decor Index */}
              <div className="absolute -top-6 -right-4 text-[8rem] font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:translate-y-4 font-mono">
                {benefit.num}
              </div>

              {/* Top Progress Line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-700 group-hover:w-full" />

              <div className="space-y-6 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-slate-50 rounded-xl w-fit text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"
                >
                  {benefit.icon}
                </motion.div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-mono group-hover:text-blue-600 transition-colors">
                      {benefit.label}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 font-header tracking-tight leading-tight uppercase">
                    {benefit.value}
                  </h4>
                </div>
              </div>

              {/* Card Footer Meta */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase italic">
                  Status::Verified
                </span>
                <ChevronRight className="text-blue-600 group-hover:translate-x-1 transition-transform" size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FactoryArchitecture;