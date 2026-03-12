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
import LogoMarquee from "./LogoMarquee";

export default function Hero() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // Section is now full width, transparent, and relative for background positioning
    // <section className="relative w-full  min-h-screen overflow-hidden flex flex-col justify-center pt-6 pb-12 transition-colors duration-300">
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center pt-6 pb-12">
      
      {/* Background elements positioned absolutely */}
      <BackgroundGrid />
      {/* <BackgroundGradient /> */}

      {/* Content wrapper gets the container class and higher z-index */}
      <div className="container mx-auto px-6 relative z-10 h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
           <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-start">
             <TechCircuitAnimation />
             {/* <Image src="/hero.png" alt="Tech Circuit Animation" width={400} height={400} /> */}
          </div>

          <div className="flex flex-col  gap-6 justify-center text-left space-y-4">
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl  leading-14 font-serif"
            >
              {/* A robust service provider with deep technical expertise. */}
              AI-Native Software Factory <br /> for Modern Digital Products
            </motion.p>

 <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-neutral-600  leading-7 max-w-md font-serif"
            >
              {/* A robust service provider with deep technical expertise. */}
           Uptimise IT combines AI agents, automation systems, and elite engineers to design, build, and scale digital platforms significantly faster than traditional development teams.
            </motion.p>


            {/* <motion.h1 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[60px] md:text-[80px] font-bold tracking-tighter leading-[1.1]"
            >
           
            <span className="bg-linear-to-br from-slate-600  to-neutral-950 bg-clip-text font-figtree text-transparent">Digitize</span><br />
            
                <AuroraText> Automate</AuroraText><br />
                <span className="bg-linear-to-bl from-slate-500 font-figtree to-gray-950 bg-clip-text text-transparent">Accelerate</span> 
            </motion.h1> */}

            {/* <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl max-w-lg leading-relaxed"
            >
              Redefining user experiences through <br className="hidden md:block" />
              Behavioural Science & AI
            </motion.p> */}
<div className="flex items-start gap-6">
                <button>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    {/* <div className=" absolute h-1 w-1 rounded-full bg-pink-400  animate-bounce left-3 top-2"></div>
                    <div className=" absolute h-1 w-1 rounded-full bg-yellow-800/40 right-3 top-0 animate-blob"></div>
                    <div className=" absolute h-1 w-1 rounded-full bg-blue-500/40 right-5 top-7 animate-blob"></div>

                    <div className=" absolute h-1 w-1 rounded-full bg-lime-800/40  animate-bounce left-10 top-8">
                   
                      <div className=" absolute h-1 w-1 rounded-full bg-lime-500  animate-blob ">
                        {" "}
                      </div>
                    </div> */}
                    <span className="w-48 h-48 rounded rotate-[-50deg] bg-blue-200 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full flex gap-2  items-center justify-center text-left text-black transition-colors duration-300 ease-in-out">
                  Start Your Project
                    </span>
                  </a>
                </button>

                    <button>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    {/* <div className=" absolute h-1 w-1 rounded-full bg-pink-400  animate-bounce left-3 top-2"></div>
                    <div className=" absolute h-1 w-1 rounded-full bg-yellow-800/40 right-3 top-0 animate-blob"></div>
                    <div className=" absolute h-1 w-1 rounded-full bg-blue-500/40 right-5 top-7 animate-blob"></div>


                    <div className=" absolute h-1 w-1 rounded-full bg-lime-800/40  animate-bounce left-10 top-8">
                  
                      <div className=" absolute h-1 w-1 rounded-full bg-lime-500  animate-blob ">
                        {" "}
                      </div>
                    </div> */}
                    <span className="w-48 h-48 rounded rotate-[-50deg] bg-red-200 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full flex gap-2  items-center justify-center text-left text-black transition-colors duration-300 ease-in-out">
                  
                 
Schedule Strategy Call
                    </span>
                  </a>
                </button>
                </div>
          </div>
        </div>

        {/* Client Logos - Added 'border-t' to make the border visible */}
         <div className="mt-16   pt-5">
     
          <LogoMarquee />
        </div>

      </div>
    </section>
  );
}