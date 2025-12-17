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

"use client";

import { motion } from "framer-motion";
import TechCircuitAnimation from "../HomePageAminations/TechAnimation";
import { AuroraText } from "@/components/ui/aurora-text";
import BackgroundGrid from "../HomePageAminations/BackgroundGrid";
import BackgroundGradient from "../HomePageAminations/BackgroundGradient";

export default function Hero() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // Section is now full width, transparent, and relative for background positioning
    <section className="relative w-full min-h-[700px] overflow-hidden flex flex-col justify-center pt-6 pb-12 transition-colors duration-300">
      
      {/* Background elements positioned absolutely */}
      <BackgroundGrid />
      {/* <BackgroundGradient /> */}

      {/* Content wrapper gets the container class and higher z-index */}
      <div className="container mx-auto px-6 relative z-10 h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
           <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-start">
             <TechCircuitAnimation />
          </div>

          <div className="flex flex-col justify-center text-left space-y-4">
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base font-medium"
            >
              A robust service provider with deep technical expertise.
            </motion.p>

            <motion.h1 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[60px] md:text-[90px] font-bold tracking-tighter leading-[1.1]"
            >
            {/* Corrected 'bg-linear' to 'bg-gradient' for standard Tailwind */}
            <span className="bg-linear-to-br from-slate-600 to-neutral-950 bg-clip-text text-transparent">Digitize</span><br />
            
                <AuroraText> Automate</AuroraText><br />
                <span className="bg-linear-to-bl from-slate-500 to-gray-950 bg-clip-text text-transparent">Accelerate</span> 
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl max-w-lg leading-relaxed"
            >
              Redefining user experiences through <br className="hidden md:block" />
              Behavioural Science & AI
            </motion.p>
          </div>
        </div>

        {/* Client Logos - Added 'border-t' to make the border visible */}
         <div className="mt-16 border-t border-transparent dark:border-gray-800 pt-5">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl">FAB</span>
            <span className="font-bold text-xl">KPIT</span>
            <span className="font-bold text-xl">TATA</span>
            <span className="font-bold text-xl">BMW</span>
            <span className="font-bold text-xl">SONY</span>
            <span className="font-bold text-xl">HUGGIES</span>
            <span className="font-bold text-xl">ETON</span>
            <span className="font-bold text-xl">P&G</span>
          </div>
        </div>

      </div>
    </section>
  );
}