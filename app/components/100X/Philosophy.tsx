'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap } from 'lucide-react';

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

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

// const statsVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     transition: { type: "spring", stiffness: 200, damping: 15 } 
//   }
// };

export const PhilosophyHero = () => {
  return (
    <section className="relative bg-slate-950 py-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decor: The 100x Animated Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.15,
          backgroundPosition: ['0px 0px', '30px 30px'] 
        }}
        transition={{ 
          opacity: { duration: 2 },
          backgroundPosition: { duration: 10, repeat: Infinity, ease: "linear" } 
        }}
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />
      
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 text-center"
      >
        {/* Badge */}
        <motion.div 
          // variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm"
        >
          <Zap size={14} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
            Engineering Manifesto // 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          // variants={fadeInUp}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] mb-12 uppercase"
        >
          The <motion.span 
            animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-blue-500"
          >
            100×
          </motion.span> <br /> 
          Engineer.
        </motion.h1>

        {/* Description */}
        <motion.p 
          // variants={fadeInUp}
          className="text-xl md:text-2xl text-slate-400 font-body max-w-3xl mx-auto leading-relaxed font-medium"
        >
          The future of software development isn&apos;t about larger teams. <br />
          It&apos;s about <span className="text-white italic">AI-Augmented Engineering.</span>
        </motion.p>

        {/* Stats Multiplier Bar */}
        <motion.div 
          // variants={containerVariants}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-16"
        >
           {[
             { label: "Velocity", value: "100×" },
             { label: "Team Size", value: "Elite" },
             { label: "Manual Debt", value: "Zero" },
             { label: "Focus", value: "Product" }
           ].map((stat, i) => (
             <motion.div 
              key={i} 
              // variants={statsVariants}
              whileHover={{ y: -5 }}
              className="text-center group cursor-default"
             >
               <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl lg:text-5xl font-black text-white font-header mb-2 transition-colors group-hover:text-blue-400"
               >
                {stat.value}
               </motion.div>
               <div className="text-[10px] font-mono font-black text-blue-500 uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                {stat.label}
               </div>
             </motion.div>
           ))}
        </motion.div>
      </motion.div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-[-100px] right-[-100px] opacity-10 pointer-events-none">
        <Zap size={400} className="text-blue-600 rotate-12" />
      </div>
    </section>
  );
};