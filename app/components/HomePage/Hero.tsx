// "use client";

// import { motion } from "framer-motion";
// import TechCircuitAnimation from "../HomePageAminations/TechAnimation";
// import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
// import LogoMarquee from "./LogoMarquee";
// import { MovingBorderButton } from "../MovingBorderButton";

// export default function Hero() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 15 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     // min-h-[100dvh] handles mobile browser UI bars better than min-h-screen
//     <section className="relative w-full min-h-[100dvh] overflow-hidden flex items-center bg-[#FDFDFF] py-20 lg:py-0">
//       {/* Background Layer */}
//       <BackgroundGrid />
      
//       {/* Content Container */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* LEFT: Technical Visual Stage */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="order-2 lg:order-1 flex items-center justify-center lg:justify-start w-full"
//           >
//             {/* Added max-w-[320px] for mobile, scaling up to 480px on desktop */}
//             <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-square flex items-center justify-center">
//               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] lg:blur-[120px] rounded-full" />
//               <TechCircuitAnimation />
//             </div>
//           </motion.div>

//           {/* RIGHT: High-Impact Copy */}
//           <div className="order-1 lg:order-2 flex flex-col gap-6 text-center lg:text-left">
//             <div className="space-y-5 flex flex-col items-center lg:items-start">
//               <motion.div
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100"
//               >
//                 <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
//                 <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-blue-700 font-mono">
//                   Software Evolution 2026
//                 </span>
//               </motion.div>

//               <motion.h1
//                 variants={fadeInUp}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 // Smoother font scaling across breakpoints
//                 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15] lg:leading-[1.1]"
//               >
//                 AI-Native <br className="hidden sm:block" />
//                 <span className="text-blue-600 italic font-medium">Software Factory.</span>
//               </motion.h1>
//             </div>

//             <motion.p
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal mx-auto lg:mx-0"
//             >
//               Uptimise IT combines orchestrated AI agents and elite engineers 
//               to build digital products with mathematical precision and 
//               unmatched velocity.
//             </motion.p>

//             {/* CTA Group */}
//             <motion.div 
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto"
//             >
//               <MovingBorderButton className="w-full sm:w-auto h-12 px-10 text-sm font-semibold tracking-wide">
//                 Start Your Project
//               </MovingBorderButton>
              
//               <button className="w-full sm:w-auto h-12 px-8 text-sm font-semibold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
//                 Schedule Strategy Call
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Client Logos Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="mt-16 lg:mt-24 pt-10 border-t border-slate-100"
//         >
//           <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 mb-8 sm:mb-10 text-center lg:text-left opacity-80">
//             Trusted by Global Innovators
//           </p>
//           <LogoMarquee />
//         </motion.div>
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center bg-[#FDFDFF] py-16 lg:py-24">
      {/* Background Layer - Subtle Grid */}
      <BackgroundGrid />
      
      {/* Decorative Gradient Blobs to fill empty space */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 w-full pt-8 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* LEFT: Technical Visual Stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1 flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] aspect-square flex items-center justify-center">
              {/* Glow effect behind the animation */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full animate-pulse" />
              <TechCircuitAnimation />
            </div>
          </motion.div>

          {/* RIGHT: High-Impact Copy */}
          <div className="order-1 lg:order-2 flex flex-col gap-8 text-center lg:text-left">
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]"
              >
                AI-Native <br />
                <span className="italic text-blue-600">Software Factory.</span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal mx-auto lg:mx-0"
            >
              Uptimise IT combines orchestrated AI agents and elite engineers 
              to build digital products with <span className="text-slate-900 font-medium">mathematical precision</span> and 
              unmatched velocity.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4 w-full"
            >
              <MovingBorderButton className="w-full sm:w-auto h-14 px-12 text-base font-semibold">
                Start Your Project
              </MovingBorderButton>
              
              <button className="w-full sm:w-auto h-14 px-10 text-base font-semibold text-slate-700 border border-slate-200 rounded-full hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                Schedule Strategy Call
              </button>
            </motion.div>
          </div>
        </div>

        {/* Client Logos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 lg:mt-32 pt-12 border-t border-slate-100"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
            <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 opacity-80">
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