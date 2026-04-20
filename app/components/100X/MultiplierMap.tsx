'use client';

// import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cpu, ShieldCheck, TrendingUp } from "lucide-react";

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2
//     }
//   }
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.9, y: 30 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     y: 0, 
//     transition: { type: "spring", stiffness: 260, damping: 20 } 
//   },
// };

const MultiplierMap = () => {
  return (
    <section className="relative bg-slate-50 py-32 px-6 overflow-hidden">
      {/* Background Decor: Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-50 pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        // variants={containerVariants}
      >
        {/* Header Block */}
        <motion.div  className="text-center mb-24 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-header tracking-tighter uppercase leading-[0.9]"
          >
            AI as an <br />
            <span className="text-blue-600 italic">Engineering Multiplier.</span>
          </motion.h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            AI doesn&apos;t replace developers. It removes the manual labor, allowing engineers to operate at <span className="text-slate-950 font-bold italic">100× their natural capacity.</span>
          </p>
        </motion.div>

        {/* Multiplier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Cpu size={24}/>, title: "Code Scaffolding", desc: "Instant generation of API structures and UI components." },
            { icon: <ShieldCheck size={24}/>, title: "Auto-Testing", desc: "Autonomous regression and edge-case validation." },
            { icon: <TrendingUp size={24}/>, title: "Infra-DevOps", desc: "Zero-touch CI/CD and container orchestration." }
          ].map((box, i) => (
            <motion.div
              key={i}
              // variants={cardVariants}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col justify-between group cursor-default transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/20"
            >
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500"
                >
                  {box.icon}
                </motion.div>
                
                <div className="space-y-3">
                  <h4 className="text-2xl font-black font-header text-slate-950 uppercase tracking-tightleading-tight">
                    {box.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              </div>

              {/* Decorative line animated on hover */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MultiplierMap;