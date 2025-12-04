"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Orb 1 - Purple/Blue */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] opacity-50"
      />

      {/* Orb 2 - Blue/Cyan */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[100px] opacity-50"
      />

      {/* Orb 3 - Small Highlight */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-40"
      />
    </div>
  );
}