'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  BarChart3, Cpu, Smartphone, 
  Database, Boxes, Activity, 
  ChevronRight, ExternalLink 
} from 'lucide-react';

const projects = [
  {
    title: "Omni-Channel SaaS",
    vertical: "FinTech // E-commerce",
    tech: "Next.js + Go // AWS Lambda",
    metric: "340",
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "Efficiency Boost",
    desc: "AI-integrated customer relationship management and automated billing.",
    icon: <BarChart3 size={24} />,
    featured: true
  },
  {
    title: "AI Compliance Squad",
    vertical: "Healthcare // EdTech",
    tech: "LLM Agents // Python // Docker",
    metric: "0",
    metricSuffix: "% Manual Debt",
    metricLabel: "Audit Pass Rate",
    desc: "Autonomous documentation auditing and regulatory analysis.",
    icon: <Cpu size={24} />
  },
  {
    title: "Web3 Wallet Connect",
    vertical: "Blockchain // Finance",
    tech: "Rust + React Native // Kubernetes",
    metric: "INSTANT",
    metricLabel: "Transaction Finality",
    desc: "Non-custodial mobile wallet with cross-chain atomic swaps.",
    icon: <Database size={24} />
  },
  {
    title: "Native Booking App",
    vertical: "Services // Mobile",
    tech: "Swift + Kotlin // Node.js",
    metric: "125",
    metricSuffix: "k+",
    metricLabel: "Active Installs",
    desc: "Real-time resource scheduling and geo-location tracking.",
    icon: <Smartphone size={24} />
  }
];


const ProjectsLedger = () => {
  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
      {/* Background Decor: The Blueprint Matrix */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" /> */}

        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" />  */}



      <div className="max-w-7xl bg-slate-950 mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 text-left"
        >
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
              <Boxes className="text-blue-600 animate-spin-slow" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                Project_Ledger::2026
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-50 leading-[0.85] uppercase">
              Proven <br />
              <motion.span 
                animate={{ color: ["#eadeda", "#d90368", "#606c38"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-blue-100 italic"
              >
                Deployments.
              </motion.span>
            </h2>
          </div>
          <p className="text-lg text-slate-100 font-body max-w-sm lg:text-right font-medium leading-relaxed">
            A small, high-impact selection of the world-class products we've engineered.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              // variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 group relative flex flex-col justify-between overflow-hidden cursor-default ${
                project.featured 
                ? 'bg-slate-950 border-slate-800 text-white lg:col-span-2 shadow-2xl' 
                : 'bg-white border-slate-100 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-200/20'
              }`}
            >
              {/* Active Background Glow for Featured Card */}
              {project.featured && (
                <motion.div 
                  animate={{ opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-600 blur-[120px] rounded-full pointer-events-none" 
                />
              )}

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Category & Status Bar */}
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-mono font-black tracking-widest uppercase ${
                      project.featured ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {project.vertical}
                    </span>
                    <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest uppercase ${
                      project.featured ? 'bg-white/10 border-white/20 text-blue-400' : 'bg-slate-50 border-slate-100 text-slate-400'
                    }`}>
                      System_Live
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-4 rounded-2xl w-fit transition-all duration-300 shadow-sm ${
                        project.featured ? 'bg-blue-600 text-white' : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className={`font-header font-black tracking-tighter ${
                      project.featured ? 'text-5xl' : 'text-3xl'
                    } leading-none uppercase ${project.featured ? 'text-white' : 'text-slate-950'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-base font-body font-medium leading-relaxed max-w-sm ${
                      project.featured ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Stack & Metric */}
                <div className={`mt-12 flex justify-between items-end gap-6 border-t pt-8 transition-colors ${
                  project.featured ? 'border-white/10' : 'border-slate-100'
                }`}>
                   <span className={`text-[10px] font-mono font-black tracking-widest uppercase max-w-[120px] ${
                      project.featured ? 'text-blue-300/40' : 'text-slate-300'
                   }`}>
                      {project.tech}
                   </span>
                   
                   <div className="text-right">
                      <motion.p 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className={`text-4xl lg:text-5xl font-black font-header tracking-tighter leading-none ${
                          project.featured ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      >
                         {project.featured && project.metricPrefix}{project.metric}{project.metricSuffix}
                      </motion.p>
                      <p className={`text-[10px] font-mono font-black tracking-widest uppercase mt-2 ${
                         project.featured ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                         {project.metricLabel}
                      </p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* "Continuous Delivery" Card */}
          <motion.div 
            // variants={cardVariants}
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-sky-700/45 border border-blue-800 flex flex-col justify-center items-center text-center space-y-6 group transition-all duration-500 hover:bg-blue-700 hover:shadow-2xl"
          >
             <div className="relative">
                <div className="w-4 h-4 rounded-full bg-blue-200 animate-ping absolute inset-0" />
                <div className="w-4 h-4 rounded-full bg-blue-200 relative" />
             </div>
             <h4 className="font-header font-black text-blue-200 text-2xl tracking-tighter leading-none uppercase">
               Next Case Study <br /> <span className="text-blue-300 italic">In_Queue</span>
             </h4>
             <p className="text-xs font-body font-bold text-blue-100 leading-relaxed max-w-[200px] uppercase tracking-wider">
               Our AI software factory is engineering 14 new products for global innovators.
             </p>
             <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[10px] font-black font-mono  text-blue-200 uppercase cursor-pointer"
             >
               View Full Ledger <ChevronRight size={14} />
             </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsLedger;