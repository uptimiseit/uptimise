"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
import LogoMarquee from "./LogoMarquee";
import Link from "next/link";

// Import Three.js Background with SSR disabled
const HeroBackground = dynamic(() => import("../../components/Hero/HeroBackground"), {
  ssr: false,
});

const BackgroundGrid = dynamic(() => import("../HomePageAminations/BackgroundGrid"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center bg-[#FDFDFF] py-16 lg:py-28">
      {/* BACKGROUND LAYER GROUP */}
      <div className="absolute inset-0 z-0">
        <BackgroundGrid />
        <HeroBackground /> 
        
        {/* Your existing Framer Motion blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 w-full pt-12 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8 text-center"
        >
          <div className="space-y-6 flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                Software Evolution 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              AI-Native <br />
              <span className="italic text-blue-600">Software Factory.</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal mx-auto">
            Uptimise IT combines orchestrated AI agents and elite engineers to build products with 
            <span className="text-slate-900 font-medium ml-1">mathematical precision</span>.
          </p>

          <div className="mt-6 gap-4 flex items-center justify-center">
            <Link href="/contact" >
            <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-blue-500 transition-all active:scale-95">
              Start your project
            </button>
            </Link>

            <Link href={"/Explore100x"}>
            <button className="px-10 py-4 border border-blue-600/20 text-blue-600 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-50 transition-all active:scale-95">
              Explore 100x Engineering
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 lg:mt-32 pt-12 border-t border-slate-100"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <p className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.3em] text-slate-400">
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

// "use client";

// import dynamic from 'next/dynamic';
// import { motion } from "framer-motion";
// import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
// import LogoMarquee from "./LogoMarquee";
// import { MovingBorderButton } from "../MovingBorderButton";

// const HeroCanvas = dynamic(() => import("../../components/Hero/HeroCanvas"), { ssr: false });

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-screen flex items-center bg-[#FDFDFF] overflow-hidden">
//       <BackgroundGrid />

//     <HeroCanvas />
//     </section>
//   );
// }
