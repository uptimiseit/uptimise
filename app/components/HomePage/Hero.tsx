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
    <section className="relative w-full min-h-screen  overflow-hidden flex items-center py-32 bg-white">
      {mounted && (
        <>
          {isDesktop ? (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <BackgroundGrid />
              <HeroBackground />
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
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
            <AnimatePresence>
              {mounted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Central Hub */}
                  <motion.div 
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 p-10 bg-white border border-slate-200 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-blue-50/50 rounded-[3rem] animate-pulse" />
                    <Bot size={80} className="text-blue-600 relative z-10" strokeWidth={1.5} />
                  </motion.div>

                  {/* Floating Tech Nodes */}
                  <FactoryNode icon={<Cpu size={24}/>} label="Neural" x={-160} y={-100} delay={0} />
                  <FactoryNode icon={<Box size={24}/>} label="Factory" x={180} y={-60} delay={0.2} />
                  <FactoryNode icon={<Zap size={24}/>} label="Fast" x={140} y={140} delay={0.4} />
                  <FactoryNode icon={<Fingerprint size={24}/>} label="Unique" x={-140} y={150} delay={0.6} />

                  {/* Decorative Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <circle cx="50%" cy="50%" r="180" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="8 8" />
                    <circle cx="50%" cy="50%" r="120" fill="none" stroke="#94a3b8" strokeWidth="1" />
                  </svg>
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
          className="mt-20 lg:mt-32 pt-12 border-t border-slate-100"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <p className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
              Validated Systems
            </p>
            <div className="w-full overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <LogoMarquee />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for Right Side Factory Nodes
function FactoryNode({ icon, label, x, y, delay }:{ icon: React.ReactNode; label: string; x: number; y: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ 
        delay, 
        duration: 0.8,
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className="absolute bg-white/80 backdrop-blur-md border border-slate-200 p-5 rounded-3xl shadow-xl flex flex-col items-center gap-2 group hover:border-blue-500 hover:shadow-blue-500/10 transition-all cursor-default"
    >
      <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
    </motion.div>
  );
}