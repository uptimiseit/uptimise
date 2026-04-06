'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    metric: "+340%",
    metricLabel: "Efficiency Boost",
    desc: "AI-integrated customer relationship management and automated billing.",
    icon: <BarChart3 className="text-blue-600" />,
    featured: true
  },
  {
    title: "AI Compliance Squad",
    vertical: "Healthcare // EdTech",
    tech: "LLM Agents // Python // Docker",
    metric: "0% Manual Debt",
    metricLabel: "Audit Pass Rate",
    desc: "Autonomous documentation auditing and regulatory analysis.",
    icon: <Cpu className="text-emerald-600" />
  },
  {
    title: "Web3 Wallet Connect",
    vertical: "Blockchain // Finance",
    tech: "Rust + React Native // Kubernetes",
    metric: "Instant",
    metricLabel: "Transaction Finality",
    desc: "Non-custodial mobile wallet with cross-chain atomic swaps.",
    icon: <Database className="text-purple-600" />
  },
  {
    title: "Native Booking App",
    vertical: "Services // Mobile",
    tech: "Swift + Kotlin // Node.js",
    metric: "125k+",
    metricLabel: "Active Installs",
    desc: "Real-time resource scheduling and geo-location tracking.",
    icon: <Smartphone className="text-orange-600" />
  }
];

const ProjectsLedger = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-lime-50 py-10 px-6 overflow-hidden">
      {/* Background Decor: The Blueprint Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between  items-center lg:items-end mb-10 gap-8 text-left">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              <Boxes className="text-blue-600" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                Project_Ledger::2026
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl  font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Proven <br />
              <span className="text-blue-600 italic">Deployments.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-body max-w-sm lg:text-right pb-4 leading-relaxed">
            A small, high-impact selection of the world-class products we've engineered.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 group relative flex flex-col justify-between overflow-hidden ${
                project.featured 
                ? 'bg-slate-950 border-slate-800 text-white lg:col-span-2' 
                : 'bg-white border-slate-100 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-100/30'
              }`}
            >
              {/* Active Background Glow for Featured Card */}
              {project.featured && (
                <div className="absolute inset-0 bg-blue-600/5 blur-[120px] group-hover:bg-blue-600/10 transition-all rounded-full" />
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
                    <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest ${
                      project.featured ? 'bg-white/10 border-white/20 text-blue-400' : 'bg-slate-50 border-slate-100 text-slate-400'
                    }`}>
                      DEPLOYED
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className={`p-4 rounded-2xl w-fit transition-all duration-300 ${
                      project.featured ? 'bg-blue-600 text-white' : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      {project.icon}
                    </div>
                    <h3 className={`font-header font-black tracking-tight ${
                      project.featured ? 'text-5xl' : 'text-3xl'
                    } leading-none ${project.featured ? 'text-white' : 'text-slate-950'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-base font-body leading-relaxed max-w-sm ${
                      project.featured ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Stack & Key Metric - FIXED TEMPLATE LITERALS */}
                <div className={`mt-12 flex justify-between items-end gap-6 border-t pt-8 transition-colors ${
                  project.featured ? 'border-white/10' : 'border-slate-100'
                }`}>
                   <span className={`text-[10px] font-mono font-bold tracking-wider ${
                      project.featured ? 'text-blue-300/60' : 'text-slate-400'
                    }`}>
                      // {project.tech}
                   </span>
                   
                   <div className="text-right">
                      <p className={`text-4xl font-black font-header tracking-tighter leading-none ${
                         project.featured ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                         {project.metric}
                      </p>
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
          <div className="p-10 rounded-[3rem] bg-blue-50 border border-blue-100 flex flex-col justify-center items-center text-center space-y-4 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50">
             <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
             <h4 className="font-header font-black text-blue-950 text-xl tracking-tight leading-none uppercase">
               Next Case Study <br /> In_Queue
             </h4>
             <p className="text-xs font-body text-blue-700/60 leading-relaxed max-w-[200px]">
               Our AI software factory is currently engineering world-class products for global innovators.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsLedger;