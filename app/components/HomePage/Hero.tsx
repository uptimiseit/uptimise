// "use client";

// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import LogoMarquee from "./LogoMarquee";
// import { useEffect, useState } from "react";

// // Import Three.js Background with SSR disabled
// const HeroBackground = dynamic(() => import("../../components/Hero/HeroBackground"), {
//   ssr: false,
// });

// const BackgroundGrid = dynamic(() => import("../HomePageAminations/BackgroundGrid"), {
//   ssr: false,
// });

// export default function Hero() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [mounted, setMounted] = useState(false); // 🔥 Added to track mount status

//   useEffect(() => {
//     setMounted(true); // 🔥 Component is now on the client
//     const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
//     checkSize();
//     window.addEventListener("resize", checkSize);
//     return () => window.removeEventListener("resize", checkSize);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-16 lg:py-28 bg-white">
   
//       {mounted && (
//         <>
//           {isDesktop ? (
//             <div className="absolute inset-0 z-0 pointer-events-none">
//               <BackgroundGrid />
//               <HeroBackground /> 
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//                 transition={{ duration: 10, repeat: Infinity }}
//                 className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]"
//               />
//             </div>
//           ) : (
//             <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
//           )}
//         </>
//       )}

//       <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 w-full pt-12 lg:pt-0">
//         {/* ... Rest of your content ... */}
//         <div className="flex flex-col gap-8 text-center">
//             {/* Tip: If your buttons are also throwing errors, 
//                 ensure you aren't putting a <button> inside another <a> or <button>.
//             */}
//           <div className="space-y-6 flex flex-col items-center">
//             <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur-sm">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//               </span>
//               <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500 font-mono">
//                 Software Evolution 2026
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.05]">
//               AI-Native <br />
//               <span className="italic text-blue-600">Software Factory.</span>
//             </h1>
//           </div>

//           <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal mx-auto">
//             Uptimise IT combines orchestrated AI agents and elite engineers to build products with 
//             <span className="text-slate-900 font-medium ml-1">mathematical precision</span>.
//           </p>

//           <div className="mt-6 flex flex-col   sm:flex-row items-center justify-center gap-4">
//             <Link href="/contact" className="w-full sm:w-auto">
//               <button aria-label="Start Project" className="w-full cursor-pointer sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase text-[10px] tracking-widest shadow-lg hover:bg-blue-500 transition-all active:scale-95">
//                 Start your project
//               </button>
//             </Link>

//             <Link href="/Explore100x" className="w-full sm:w-auto">
//               <button aria-label="Explore" className="w-full sm:w-auto cursor-pointer px-10 py-4 border border-blue-600/20 text-blue-800 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-blue-50 transition-all active:scale-95">
//                 Explore 100x Engineering
//               </button>
//             </Link>
//           </div>
//         </div>

//         <motion.div
//           initial={mounted && isDesktop ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="mt-16 lg:mt-28 pt-12 border-t border-slate-100"
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
//             <p className="whitespace-nowrap text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.3em] text-slate-400">
//               Trusted by Innovators
//             </p>
//             <div className="w-full overflow-hidden">
//               <LogoMarquee />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoMarquee from "./LogoMarquee";
import { useEffect, useState } from "react";
import { Bot, Cpu, Box, Zap, Fingerprint } from "lucide-react";

const HeroBackground = dynamic(() => import("../../components/Hero/HeroBackground"), { ssr: false });
const BackgroundGrid = dynamic(() => import("../HomePageAminations/BackgroundGrid"), { ssr: false });

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <section className="relative w-full min-h-screen  overflow-hidden flex items-center py-28 bg-white">
      {mounted && (
        <>
          {isDesktop ? (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <BackgroundGrid />
              {/* <HeroBackground /> */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]"
              />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          )}
        </>
      )}

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 w-full pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-left items-start"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                  Software Evolution 2026
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] sm:leading-[0.9]">
                AI-Native <br />
            

                <span className="italic text-blue-600">Software Factory.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal">
              Uptimise IT combines orchestrated AI agents and elite engineers to build products with 
              <span className="text-slate-900 font-bold ml-1 italic underline decoration-blue-500/30">mathematical precision</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <button aria-label="Start Project" className="w-full cursor-pointer sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-blue-600 transition-all active:scale-95">
                  Start your project
                </button>
              </Link>

              <Link href="/Explore100x" className="w-full sm:w-auto">
                <button aria-label="Explore" className="w-full sm:w-auto cursor-pointer px-10 py-5 border border-slate-200 text-slate-900 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-all">
                  100x Engineering
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Software Factory Animation */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
  <AnimatePresence>
    {mounted && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Animated Connecting Flux Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Orbital Paths */}
          <circle cx="50%" cy="50%" r="140" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="#e2e8f0" strokeWidth="1" className="opacity-20" />

          {/* Animated Data Particles on Paths */}
          {[140, 200].map((radius, i) => (
            <motion.circle
              key={i}
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="20 180"
              animate={{ rotate: 360 }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>

        {/* Central Brain Hub */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 group"
        >
          {/* Glassmorphism Core */}
          <div className="relative p-12 bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center">
            
            {/* Inner "Scanning" Radar Effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-t-2 border-blue-500/30 rounded-[3.5rem] pointer-events-none"
            />
            
            <div className="relative z-10 flex flex-col items-center gap-3">
              <Bot size={70} className="text-blue-600 drop-shadow-2xl" strokeWidth={1.5} />
              <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Core_AI</span>
            </div>
          </div>

          {/* Outer Pulse Rings */}
          {[1, 1.2, 1.4].map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: s + 0.2, opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
              className="absolute inset-0 border border-blue-400/30 rounded-[4rem] -z-10"
            />
          ))}
        </motion.div>

        {/* Floating Peripheral Systems (Nodes) */}
        <FactoryNode 
            icon={<Cpu size={22}/>} 
            label="Neural_Logic" 
            sub="Processing" 
            x={-190} y={-120} 
            delay={0} 
        />
        <FactoryNode 
            icon={<Box size={22}/>} 
            label="SaaS_Factory" 
            sub="Assembly" 
            x={210} y={-40} 
            delay={0.2} 
        />
        <FactoryNode 
            icon={<Zap size={22}/>} 
            label="Ultra_Speed" 
            sub="Velocity" 
            x={160} y={160} 
            delay={0.4} 
        />
        <FactoryNode 
            icon={<Fingerprint size={22}/>} 
            label="Identity_Auth" 
            sub="Precision" 
            x={-180} y={140} 
            delay={0.6} 
        />
      </motion.div>
    )}
  </AnimatePresence>
</div>
        </div>

        {/* TRUSTED BY MARQUEE */}
        <motion.div
          initial={mounted && isDesktop ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" pt-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <p className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
              Validated Systems
            </p>
            <div className="w-full overflow-hidden  opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <LogoMarquee />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for Right Side Factory Nodes
function FactoryNode({ icon, label, sub, x, y, delay }:{ icon: React.ReactNode; label: string; sub: string; x: number; y: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ 
        delay, 
        duration: 0.8,
        y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
      className="absolute group cursor-default"
    >
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200 p-5 rounded-[2rem] shadow-xl flex items-center gap-4 group-hover:border-blue-500 transition-all duration-500">
        <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
          {icon}
        </div>
        <div className="flex flex-col pr-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-none mb-1">
            {label}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-widest text-blue-500/60 leading-none">
            {sub}
          </span>
        </div>
      </div>
    </motion.div>
  );
}