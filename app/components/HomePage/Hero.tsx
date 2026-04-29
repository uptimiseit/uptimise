"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoMarquee from "./LogoMarquee";
import { useEffect, useState } from "react";

// Import Three.js Background with SSR disabled
const HeroBackground = dynamic(() => import("../../components/Hero/HeroBackground"), {
  ssr: false,
});

const BackgroundGrid = dynamic(() => import("../HomePageAminations/BackgroundGrid"), {
  ssr: false,
});

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false); // 🔥 Added to track mount status

  useEffect(() => {
    setMounted(true); // 🔥 Component is now on the client
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-16 lg:py-28 bg-white">
      
      {/* We only render the conditional background AFTER mounting. 
         This ensures the Server HTML matches the first Client HTML pass.
      */}
      {mounted && (
        <>
          {isDesktop ? (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <BackgroundGrid />
              <HeroBackground /> 
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]"
              />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          )}
        </>
      )}

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 w-full pt-12 lg:pt-0">
        {/* ... Rest of your content ... */}
        <div className="flex flex-col gap-8 text-center">
            {/* Tip: If your buttons are also throwing errors, 
                ensure you aren't putting a <button> inside another <a> or <button>.
            */}
          <div className="space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                Software Evolution 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.05]">
              AI-Native <br />
              <span className="italic text-blue-600">Software Factory.</span>
            </h1>
          </div>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal mx-auto">
            Uptimise IT combines orchestrated AI agents and elite engineers to build products with 
            <span className="text-slate-900 font-medium ml-1">mathematical precision</span>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button aria-label="Start Project" className="w-full cursor-pointer sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase text-[10px] tracking-widest shadow-lg hover:bg-blue-500 transition-all active:scale-95">
                Start your project
              </button>
            </Link>

            <Link href="/Explore100x" className="w-full sm:w-auto">
              <button aria-label="Explore" className="w-full sm:w-auto cursor-pointer px-10 py-4 border border-blue-600/20 text-blue-800 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-blue-50 transition-all active:scale-95">
                Explore 100x Engineering
              </button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={mounted && isDesktop ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 lg:mt-28 pt-12 border-t border-slate-100"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <p className="whitespace-nowrap text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Trusted by Innovators
            </p>
            <div className="w-full overflow-hidden">
              <LogoMarquee />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}