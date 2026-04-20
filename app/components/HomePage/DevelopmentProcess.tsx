'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Search, Layers, Cpu, ShieldCheck, 
  Rocket, TrendingUp, Workflow 
} from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Product Discovery",
    desc: "Defining product strategy and business goals through deep market analysis.",
    icon: <Search size={20} />,
    color: "bg-blue-600"
  },
  {
    number: "02",
    title: "Architecture Planning",
    desc: "Designing scalable system topologies and enterprise-grade schemas.",
    icon: <Layers size={20} />,
    color: "bg-purple-600"
  },
  {
    number: "03",
    title: "AI-Assisted Development",
    desc: "Accelerated coding through orchestrated AI agents and elite engineers.",
    icon: <Cpu size={20} />,
    color: "bg-emerald-600"
  },
  {
    number: "04",
    title: "Automated Testing & QA",
    desc: "Reliability ensured through automated pipelines and edge-case detection.",
    icon: <ShieldCheck size={20} />,
    color: "bg-orange-600"
  },
  {
    number: "05",
    title: "Deployment & DevOps",
    desc: "CI/CD enabled stable global deployments with zero-downtime architecture.",
    icon: <Rocket size={20} />,
    color: "bg-pink-600"
  },
  {
    number: "06",
    title: "Growth & Optimization",
    desc: "Analytics-driven scaling and product marketing to capture market share.",
    icon: <TrendingUp size={20} />,
    color: "bg-cyan-600"
  }
];

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
//   },
// };

// const lineVariants: Variants = {
//   hidden: { height: 0 },
//   visible: { 
//     height: "100%", 
//     transition: { duration: 2, ease: "easeInOut" } 
//   }
// };

const DevelopmentProcess = () => {
  return (
    <section className="bg-gradient-to-br from-white to-purple-50 py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 flex items-center flex-col lg:flex-row justify-between text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-none">
            Engineering <br /><span className="text-blue-600 italic">Lifecycle.</span>
          </h2>
          <div className="flex flex-col items-center lg:items-end gap-2">
            <span className="text-blue-600 font-mono text-xs font-black tracking-[0.3em] uppercase">
              # The Factory Protocol
            </span>
            <div className="h-px w-24 bg-blue-200 hidden lg:block" />
          </div>
        </motion.div>

        {/* The Stepper Content */}
        <div className="relative">
          {/* Animated Central Vertical Line */}
          <motion.div 
            // variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-6 top-0 w-[2px] bg-slate-200 hidden md:block origin-top" 
          />

          <motion.div 
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                // variants={itemVariants}
                className="relative flex items-start gap-8 group"
              >
                {/* The Dot / Number Indicator */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-xl shadow-blue-100 transition-all duration-300`}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* The Step Card */}
                <div className="flex-grow pb-2">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:border-blue-500/20 cursor-default"
                  >
                    <div className="flex justify-between items-center mb-2">
                       <h3 className="text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-3">
                        <span className="text-xs font-mono text-slate-400 opacity-50">/{step.number}</span>
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-mono font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md">
                        Phase_Active
                      </span>
                    </div>
                    <p className="text-slate-500 font-body text-sm max-w-2xl leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Call to Action micro-interaction */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center md:justify-start md:ml-20"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest group cursor-pointer">
            <Workflow size={16} className="animate-spin-slow" />
            <span>Operationalizing Success</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;