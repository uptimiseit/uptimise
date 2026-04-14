'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const iconFloating: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const TransparencySection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-yellow-50 py-24 px-6 overflow-hidden">
      {/* Background Decor: The "Pulse" Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between lg:items-end items-center mb-16 gap-8 text-left"
        >
          <div className="max-w-2xl space-y-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm"
            >
              <Eye className="text-emerald-600 animate-pulse" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 font-mono">
                Visibility Protocol :: Active
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Full Spectrum <br />
              <motion.span 
                animate={{ color: ["#059669", "#10b981", "#059669"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-emerald-600 italic"
              >
                Transparency.
              </motion.span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-body max-w-sm lg:text-right font-medium leading-relaxed">
            No black boxes. No hidden cycles. Just pure engineering visibility from discovery to deployment.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {transparencyPoints.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-[3rem] border transition-all duration-500 group relative flex flex-col justify-between overflow-hidden cursor-default ${
                item.featured 
                ? 'bg-slate-950 border-slate-800 text-white shadow-2xl' 
                : 'bg-white border-slate-100 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-200/20'
              } ${item.size}`}
            >
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center">
                  <motion.div 
                    variants={iconFloating}
                    animate="animate"
                    className={`p-4 rounded-2xl ${item.featured ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-50 text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors'}`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest uppercase ${
                    item.featured ? 'bg-white/10 border-white/20 text-emerald-400' : 'bg-white border-slate-100 text-slate-400'
                  }`}>
                    {item.status}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-2xl font-black font-header tracking-tight uppercase ${item.featured ? 'text-white' : 'text-slate-950'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-base font-body leading-relaxed max-w-md font-medium ${item.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Decorative "Scanning" Line (Animated on Group Hover) */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 flex justify-end mt-8">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 0 }}
                  className={`flex items-center gap-2 text-[10px] font-black font-mono tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all ${item.featured ? 'text-emerald-400' : 'text-emerald-600'}`}
                >
                  VIEW PROTOCOL <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The "Trust" Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex flex-wrap justify-center gap-12 items-center grayscale"
        >
          {[
            { icon: <ShieldCheck className="text-emerald-600" />, text: "IP_PROTECTION" },
            { icon: <Github />, text: "TOTAL_OWNERSHIP" },
            { icon: <Radio className="text-blue-500" />, text: "LIVE_MONITORING" }
          ].map((trust, idx) => (
            <React.Fragment key={trust.text}>
              <motion.div 
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="flex items-center gap-3 text-slate-900 font-black tracking-tighter text-2xl cursor-default"
              >
                {trust.icon}
                {trust.text}
              </motion.div>
              {idx < 2 && <div className="h-4 w-px bg-slate-300 hidden md:block" />}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TransparencySection;