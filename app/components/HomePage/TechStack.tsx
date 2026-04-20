'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Code2, Server, Smartphone, 
  BrainCircuit, CloudIcon, ChevronRight 
} from 'lucide-react';

const techData = [
  {
    id: "ai",
    category: "AI & Intelligence",
    icon: <BrainCircuit size={24} />,
    techs: ["LLMs", "AI Agents", "PyTorch", "Automation Systems"],
    details: "Proprietary agentic frameworks for 100x velocity.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "frontend",
    category: "Frontend Architecture",
    icon: <Code2 size={24} />,
    techs: ["Next.js", "React", "Astro", "Tailwind"],
    details: "Sub-second load times with modern rendering patterns.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  },
  {
    id: "backend",
    category: "Backend Systems",
    icon: <Server size={24} />,
    techs: ["Node.js", "Java", "Python", "Go"],
    details: "High-concurrency systems engineered for stability.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  },
  {
    id: "mobile",
    category: "Mobile Excellence",
    icon: <Smartphone size={24} />,
    techs: ["Kotlin", "Swift", "Flutter", "React Native"],
    details: "Unified experiences across iOS and Android.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  },
  {
    id: "cloud",
    category: "Cloud Infrastructure",
    icon: <CloudIcon size={24} />,
    techs: ["AWS", "GCP", "Docker", "Kubernetes"],
    details: "Zero-trust security with automated CI/CD.",
    color: "text-slate-900",
    bg: "bg-slate-900/5"
  }
];

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//   }
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.5, ease: "easeOut" } 
//   }
// };

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(techData[0]);

  return (
    <section className="relative bg-gradient-to-br from-white to-orange-50 py-24 px-6 overflow-hidden">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 flex justify-around opacity-[0.03] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-slate-900" />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        // variants={containerVariants}
      >
        
        {/* Header - Engineering Spec Style */}
        <motion.div 
        // variants={itemVariants}
         className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-b border-slate-100 pb-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                className="h-px bg-blue-600" 
              />
              Stack_Manifest_2026
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 uppercase leading-none">
              Tech <span className="text-blue-600 italic">DNA.</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 font-body text-sm leading-relaxed text-center md:text-right">
            A precision-engineered selection of technologies designed for the AI-Native era.
          </p>
        </motion.div>

        {/* --- THE HARDWARE RACK LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Left Side: Navigation Slots */}
          <motion.div 
          // variants={itemVariants}
           className="lg:w-1/2 flex flex-col gap-3">
            {techData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item)}
                onClick={() => setActiveTab(item)}
                className={`relative flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left group overflow-hidden ${
                  activeTab.id === item.id 
                  ? 'bg-slate-950 text-white shadow-2xl shadow-blue-900/20' 
                  : 'bg-white border border-slate-100 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${
                    activeTab.id === item.id ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:text-blue-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-xl font-bold font-header tracking-tight uppercase">
                    {item.category}
                  </span>
                </div>
                
                <ChevronRight className={`transition-all duration-500 ${
                  activeTab.id === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`} />

                {/* Shared Layout Active Indicator */}
                {activeTab.id === item.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Right Side: The Content Blade */}
          <motion.div 
            // variants={itemVariants}
            className="lg:w-1/2 min-h-[550px] relative rounded-[2.5rem] overflow-hidden bg-slate-950 flex flex-col justify-center items-center p-12 shadow-inner"
          >
            {/* Background Texture for the "Blade" */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full text-center"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="mb-10 inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                   <span className="text-[10px] font-black font-mono uppercase tracking-widest text-blue-400">
                     System_Status::Optimized
                   </span>
                </motion.div>

                <h3 className="text-5xl md:text-7xl font-black font-header tracking-tighter text-white mb-6 uppercase leading-none">
                  {activeTab.category.split(' ')[0]} <br />
                  <span className="text-blue-600 italic">{activeTab.category.split(' ').slice(1).join(' ')}</span>
                </h3>

                <p className="text-slate-400 font-body text-lg mb-12 max-w-sm mx-auto leading-relaxed">
                  {activeTab.details}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {activeTab.techs.map((t, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest hover:bg-blue-600 hover:border-blue-600 transition-all cursor-default shadow-xl"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Large background watermark icon */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-white scale-[3] pointer-events-none">
               {activeTab.icon}
            </div>
          </motion.div>
        </div>

        {/* Global Tech Footer */}
        <motion.div 
          // variants={itemVariants}
          className="mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black font-mono text-slate-300 uppercase tracking-[0.4em] gap-4"
        >
           <span>High_Concurrency_Safety</span>
           <div className="hidden md:block w-px h-4 bg-slate-200" />
           <span>Scalable_Microservices</span>
           <div className="hidden md:block w-px h-4 bg-slate-200" />
           <span>Continuous_AI_Deployment</span>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TechStack;