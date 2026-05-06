"use client";

import { motion } from "framer-motion";

export const HeroVisuals = ({ slug, color, secondary }: any) => {
  
  // Animation 1: Floating Tech Orbits (For SaaS/Cloud)
  const SaaSAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 border-2 border-dashed border-slate-200 rounded-full"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ backgroundColor: color }}
        className="w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center relative z-10"
      >
        <div className="w-12 h-1 bg-white/20 rounded-full" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-16 h-16 bg-slate-100 rounded-2xl border border-slate-200 shadow-xl" 
      />
    </div>
  );

  // Animation 2: Binary Code Rain (For AI/Workflow Automation)
  const AIAnimation = () => (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center font-mono text-[10px] opacity-20">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100 }}
          animate={{ y: 600 }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "linear" }}
          style={{ color: color, left: `${i * 10}%` }}
          className="absolute"
        >
          {Math.random() > 0.5 ? "101101" : "011010"} <br/> 1101
        </motion.div>
      ))}
      <div className="relative z-10 text-4xl font-black uppercase tracking-tighter" style={{ color: color }}>
        AI_Native
      </div>
    </div>
  );

  // SWITCH LOGIC
  switch (slug) {
    case "saas-development":
    case "cloud-infrastructure":
      return <SaaSAnimation />;
    case "ai-factory":
    case "workflow-automation":
      return <AIAnimation />;
    default:
      return (
        <motion.div 
          animate={{ borderRadius: ["30%", "50%", "30%"], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ background: `linear-gradient(45deg, ${color}, ${secondary})` }}
          className="w-64 h-64 blur-3xl opacity-20"
        />
      );
  }
};