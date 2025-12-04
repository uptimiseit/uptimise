"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]">
      
      {/* This creates a radial mask to fade the edges */}
      <div className="absolute inset-0 bg-white mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]" />

      {/* Animated Beams (Optional - adds movement) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 blur-[60px] rounded-full"
      />
      
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/20 blur-[60px] rounded-full"
      />
    </div>
  );
}