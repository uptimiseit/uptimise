// "use client"; // <--- Required for animations

// import { motion } from "framer-motion"; // Import the library
// import LionAnimation from "../HomePageAminations/LionAnimation";
// import TechCircuitAnimation from "../HomePageAminations/TechAnimation";

// export default function Hero() {

//   // This defines the animation behavior
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 }, // Start: invisible and 60px down
//     visible: { opacity: 1, y: 0 }  // End: visible and at original position
//   };

//   return (
//     <section className="container mx-auto w-full bg-linear-to-b to-purple-50 from-orasnge-50 text-foreground flex flex-col justify-center pt-12 pb-12 px-6 transition-colors duration-300 overflow-hidden">

//       <div className="max-w-7xl mx-auto w-full h-full">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* 1. Left Side: Animation */}
//           <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-start">
//              {/* <LionAnimation /> */}
//              <TechCircuitAnimation />
//           </div>

//           {/* 2. Right Side: The Text (Now Animated) */}
//           <div className="flex flex-col justify-center text-left space-y-4">

//             {/* Top Label */}
//             <motion.p
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false }} // <--- 'false' means it animates EVERY time you scroll here
//               transition={{ duration: 0.8, delay: 0.2 }} // Slow duration (0.8s)
//               className="text-base font-medium"
//             >
//               Your Trusted UI UX Design Agency.
//             </motion.p>

//             {/* Main Headline */}
//             <motion.h1
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false }}
//               transition={{ duration: 0.8, delay: 0.4 }} // Delayed by 0.2s
//               className="text-[90px] font-bold tracking-tighter leading-[1.1]"
//             >
//               Design<br />
//               Transform<br />
//               Accelerate
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false }}
//               transition={{ duration: 0.8, delay: 0.6 }} // Delayed by 0.4s
//               className="text-2xl max-w-lg leading-relaxed"
//             >
//               Redefining user experiences through <br className="hidden md:block" />
//               Behavioural Science & AI
//             </motion.p>
//           </div>
//         </div>

//         {/* --- Bottom Section: Client Logos --- */}
//         <div className="mt-16 dark:border-gray-800 pt-10">
//           <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
//             <span className="font-bold text-xl">FAB</span>
//             <span className="font-bold text-xl">KPIT</span>
//             <span className="font-bold text-xl">TATA</span>
//             <span className="font-bold text-xl">BMW</span>
//             <span className="font-bold text-xl">SONY</span>
//             <span className="font-bold text-xl">HUGGIES</span>
//             <span className="font-bold text-xl">ETON</span>
//             <span className="font-bold text-xl">P&G</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import TechCircuitAnimation from "../HomePageAminations/TechAnimation";
// import { AuroraText } from "@/components/ui/aurora-text";
// import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
// import LogoMarquee from "./LogoMarquee";
// import {  MovingBorderButton } from "../MovingBorderButton";

// export default function Hero() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     // Section is now full width, transparent, and relative for background positioning
//     // <section className="relative w-full  min-h-screen overflow-hidden flex flex-col justify-center pt-6 pb-12 transition-colors duration-300">
//     // <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center pt-6 pb-12">
//     <section className="relative w-full min-h-[calc(100vh-70px)] overflow-hidden flex items-center">
//       {/* Background elements positioned absolutely */}
//       <BackgroundGrid />
//       {/* <BackgroundGradient /> */}

//       {/* Content wrapper gets the container class and higher z-index  uhuhu*/}
//       <div className=" px-6 relative z-10 h-full w-full">
//         <div className="w-full gap-12 flex items-center ">
//           <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-start">
//             <TechCircuitAnimation />
//             {/* <Image src="/hero.png" alt="Tech Circuit Animation" width={400} height={400} /> */}
//           </div>

//           <div className="flex flex-col gap-6 justify-center  w-full text-left space-y-4">
//             <motion.p
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-4xl  leading-14 font-serif"
//             >
//               {/* A robust service provider with deep technical expertise. */}
//               AI-Native Software Factory <br /> for Modern Digital Products
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-base text-neutral-600  leading-7 max-w-md font-serif"
//             >
//               {/* A robust service provider with deep technical expertise. */}
//               Uptimise IT combines AI agents, automation systems, and elite
//               engineers to design, build, and scale digital platforms
//               significantly faster than traditional development teams.
//             </motion.p>


//     {/* <GradientBorderButton >Start Your Project</GradientBorderButton> */}
//     <div className="flex items-center gap-3">
//    <MovingBorderButton>
//          Start Your Project  </MovingBorderButton>

//           <MovingBorderButton>
//               Schedule Strategy Call  </MovingBorderButton>
//     </div>
 
    

        
       
//           </div>
//         </div>

//         {/* Client Logos - Added 'border-t' to make the border visible */}
//         <div className="mt-16   pt-5">
//           <LogoMarquee />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import TechCircuitAnimation from "../HomePageAminations/TechAnimation";
import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
import LogoMarquee from "./LogoMarquee";
import { MovingBorderButton } from "../MovingBorderButton";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // min-h-[100dvh] handles mobile browser UI bars better than min-h-screen
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex items-center bg-[#FDFDFF] py-20 lg:py-0">
      {/* Background Layer */}
      <BackgroundGrid />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Technical Visual Stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1 flex items-center justify-center lg:justify-start w-full"
          >
            {/* Added max-w-[320px] for mobile, scaling up to 480px on desktop */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] lg:blur-[120px] rounded-full" />
              <TechCircuitAnimation />
            </div>
          </motion.div>

          {/* RIGHT: High-Impact Copy */}
          <div className="order-1 lg:order-2 flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-5 flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-blue-700 font-mono">
                  Software Evolution 2026
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
                // Smoother font scaling across breakpoints
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15] lg:leading-[1.1]"
              >
                AI-Native <br className="hidden sm:block" />
                <span className="text-blue-600 italic font-medium">Software Factory.</span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal mx-auto lg:mx-0"
            >
              Uptimise IT combines orchestrated AI agents and elite engineers 
              to build digital products with mathematical precision and 
              unmatched velocity.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto"
            >
              <MovingBorderButton className="w-full sm:w-auto h-12 px-10 text-sm font-semibold tracking-wide">
                Start Your Project
              </MovingBorderButton>
              
              <button className="w-full sm:w-auto h-12 px-8 text-sm font-semibold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
                Schedule Strategy Call
              </button>
            </motion.div>
          </div>
        </div>

        {/* Client Logos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 lg:mt-24 pt-10 border-t border-slate-100"
        >
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 mb-8 sm:mb-10 text-center lg:text-left opacity-80">
            Trusted by Global Innovators
          </p>
          <LogoMarquee />
        </motion.div>
      </div>
    </section>
  );
}