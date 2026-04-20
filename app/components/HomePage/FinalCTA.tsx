'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, ArrowRight, Zap, ShieldCheck, Cpu } from 'lucide-react';

// // --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2
//     }
//   }
// };

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

// const pulseVariants: Variants = {
//   animate: {
//     scale: [1, 1.1, 1],
//     opacity: [0.15, 0.3, 0.15],
//     transition: {
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

const FinalCTA = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* The Main Action Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[4rem] bg-slate-950 overflow-hidden p-12 md:p-24 text-center group shadow-2xl"
        >
          
          {/* Background Philosophy Watermark */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
            <span className="text-[20vw] font-black font-header tracking-tighter leading-none uppercase">
              SYSTEM
            </span>
          </div>

          {/* Interactive Orbs - Animated */}
          <motion.div 
            // variants={pulseVariants}
            animate="animate"
            className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] pointer-events-none" 
          />
          <motion.div 
            // variants={pulseVariants}
            animate="animate"
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full blur-[120px] pointer-events-none" 
          />

          {/* Content Stack */}
          <motion.div 
            // variants={containerVariants}
            className="relative z-10 max-w-4xl mx-auto space-y-12"
          >
            
            {/* The "Vision" Badge */}
            <motion.div 
              // variants={fadeInUp}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Zap size={14} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100 font-mono">
                Now Entering Execution Phase
              </span>
            </motion.div>

            <motion.h2 
              // variants={fadeInUp}
              className="text-4xl md:text-7xl font-black font-header tracking-tighter text-white leading-[0.85] uppercase"
            >
              Build Your Next <br />
              <motion.span 
                animate={{ color: ["#3b82f6", "#a855f7", "#3b82f6"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-blue-500 italic"
              >
                Digital Product
              </motion.span> <br />
              With Uptimise IT.
            </motion.h2>

            <motion.p 
              // variants={fadeInUp}
              className="text-xl text-slate-400 font-body max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Stop settling for traditional agency cycles. Deploy your vision through 
              an AI-native ecosystem engineered for speed, scale, and precision.
            </motion.p>

            {/* The "Execution" Button */}
            <motion.div 
              // variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="h-20 px-14 bg-blue-600 text-white rounded-full font-black text-xl flex items-center gap-4 transition-all uppercase tracking-tight relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                <Calendar size={24} className="relative z-10" />
                <span className="relative z-10">Schedule a Strategy Call</span>
                <ArrowRight size={24} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Credibility Footer */}
            <motion.div 
              // variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10"
            >
              {[
                { icon: <ShieldCheck size={16} />, text: "IP Ownership Guaranteed" },
                { icon: <Cpu size={16} />, text: "AI-Native Framework" },
                { icon: <ArrowRight size={16} />, text: "Zero-Debt Delivery" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  className="flex items-center justify-center gap-3 text-slate-500 font-mono text-[10px] font-bold tracking-widest uppercase cursor-default transition-colors"
                >
                  <span className="text-blue-500">{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;