"use client";

import { motion } from "framer-motion";
// import TechCircuitAnimation from "../HomePageAminations/TechAnimation";
import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
import LogoMarquee from "./LogoMarquee";
import { MovingBorderButton } from "../MovingBorderButton";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Hero() {


// const TechCircuitAnimation = dynamic(() => import("../HomePageAminations/TechAnimation"), { 
//   ssr: false,
//   loading: () => <div className="w-full h-full bg-slate-50/50 animate-pulse rounded-full" /> 
// });

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center bg-[#FDFDFF] py-16 lg:py-24">
      {/* Background Layer - Subtle Grid */}
      <BackgroundGrid />
      
      {/* Decorative Gradient Blobs with subtle movement */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 w-full pt-8 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* LEFT: Technical Visual Stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-2 lg:order-1 flex items-center justify-center w-full"
          >
            <motion.div 
              // variants={floatingAnimation}
              initial="initial"
              animate="animate"
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] aspect-square flex items-center justify-center"
            >
              {/* Glow effect behind the animation */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full animate-pulse" />
              {/* <TechCircuitAnimation /> */}
              <Image src="/home-img.png" alt="Tech Animation Placeholder" width={800} height={800} className="relative w-full h-full object-contain" />
            </motion.div>
          </motion.div>

          
         {/* RIGHT: High-Impact Copy */}
<div className="order-1 lg:order-2 flex flex-col gap-8 text-center lg:text-left">
  <div className="space-y-6 flex flex-col items-center lg:items-start">
    
    {/* Badge: Keep motion here, it's small and not the LCP element */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
      </span>
      <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500 font-mono">
        Software Evolution 2026
      </span>
    </motion.div>

    {/* FIXED LCP: Standard H1 with CSS-based animation */}
    {/* Using 'animate-in' from tailwind-animate or standard CSS transitions */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] transition-opacity duration-1000 ease-out">
      AI-Native <br />
      <span className="italic text-blue-600">
        Software Factory.
      </span>
    </h1>
  </div>

  {/* FIXED LCP: Standard P tag instead of motion.p */}
  <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal mx-auto lg:mx-0">
    Uptimise IT combines orchestrated AI agents and elite engineers 
    to build digital products with <span className="text-slate-900 font-medium">mathematical precision</span> and 
    unmatched velocity.
  </p>

  {/* CTA Group: You can keep motion on buttons as they aren't LCP */}
  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4 w-full">
     {/* ... your buttons ... */}
  </div>
</div>
        </div>

        {/* Client Logos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }} // Animates when it comes into view
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 lg:mt-32 pt-12 border-t border-slate-100"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              transition={{ delay: 1 }}
              className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400"
            >
              Trusted by Innovators
            </motion.p>
            <div className="w-full overflow-hidden">
              <LogoMarquee />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}