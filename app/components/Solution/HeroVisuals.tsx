// components/solutions/HeroVisuals.tsx
"use client";

import { motion } from "framer-motion";

export const HeroVisuals = ({ slug, themeColor }: { slug: string, themeColor: string }) => {
  
  // 1. MVP Animation: Floating UI Nodes
  const MVPVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 border border-dashed border-slate-200 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-10 w-40 h-52 bg-white rounded-3xl shadow-2xl border border-slate-100 p-4"
      >
        <div style={{ backgroundColor: themeColor }} className="w-full h-1/2 rounded-xl opacity-20 mb-4" />
        <div className="w-3/4 h-2 bg-slate-100 rounded mb-2" />
        <div className="w-1/2 h-2 bg-slate-100 rounded" />
      </motion.div>
    </div>
  );

  // 2. AI Animation: Neural Pulse
  const AIVisual = () => (
    <div className="relative flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i }}
          style={{ borderColor: themeColor }}
          className="absolute w-40 h-40 border-2 rounded-full"
        />
      ))}
      <div style={{ backgroundColor: themeColor }} className="w-10 h-10 rounded-full shadow-[0_0_50px] shadow-current" />
    </div>
  );

  // SWITCH LOGIC
  switch (slug) {
    case 'mvp-development': return <MVPVisual />;
    case 'ai-products': return <AIVisual />;
    default: return (
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="w-64 h-64 bg-slate-50 rounded-[4rem] blur-3xl"
      />
    );
  }
};