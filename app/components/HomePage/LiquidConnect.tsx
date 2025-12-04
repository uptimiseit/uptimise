// 'use client';

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// const LiquidConnect = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       // 1. Floating Animation
//       gsap.to('.float-group', {
//         y: 15,
//         duration: 3,
//         ease: 'sine.inOut',
//         yoyo: true,
//         repeat: -1,
//         stagger: { each: 0.5, from: 'center' },
//       });

//       // 2. Liquid Wave Animation
//       // Note: We move x by -400 because the wave pattern repeats every 400 units in the new path
//       gsap.to('.liquid-wave', {
//         x: -400, 
//         duration: 4,
//         ease: 'none',
//         repeat: -1,
//       });
      
//       gsap.to('.liquid-wave-back', {
//         x: -400,
//         duration: 7, // Slower for parallax effect
//         ease: 'none',
//         repeat: -1,
//       });
//     },
//     { scope: containerRef }
//   );

//   return (
//     <section ref={containerRef} className="w-full py-10  flex flex-col items-center justify-center">
      
//       <div className="max-w-3xl text-center mb-16 px-6">
//         <h2 className="text-3xl md:text-5xl font-bold  leading-tight">
//           We are a global creative agency that combines design expertise with technology and intelligence.
//         </h2>
//       </div>

//       <div className="relative w-full max-w-[800px] h-[300px] flex items-center justify-center">
//         <svg
//           viewBox="0 0 800 300"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full overflow-visible"
//         >
//           <defs>
//             {/* Mask for the Center Circle */}
//             <clipPath id="center-circle-mask">
//               <circle cx="400" cy="150" r="80" />
//             </clipPath>
//           </defs>

//           {/* --- Connecting Line --- */}
//           <line x1="200" y1="150" x2="600" y2="150" stroke="black" strokeWidth="2" opacity="0.2" />

//           {/* --- LEFT CIRCLE (Red) --- */}
//           <g className="float-group">
//             <circle cx="205" cy="155" r="50" fill="black" />
//             <circle cx="200" cy="150" r="50" fill="white" stroke="black" strokeWidth="2" />
//             <circle cx="200" cy="150" r="30" fill="#FF4D4D" />
//           </g>

//           {/* --- RIGHT CIRCLE (Blue) --- */}
//           <g className="float-group">
//             <circle cx="605" cy="155" r="50" fill="black" />
//             <circle cx="600" cy="150" r="50" fill="white" stroke="black" strokeWidth="2" />
//             <circle cx="600" cy="150" r="30" fill="#4D4DFF" />
//           </g>

//           {/* --- CENTER CIRCLE (Mixing) --- */}
//           <g className="float-group">
//             <circle cx="410" cy="160" r="80" fill="black" />
//             <circle cx="400" cy="150" r="80" fill="white" stroke="black" strokeWidth="2" />

//             {/* THE LIQUID CONTENTS */}
//             <g clipPath="url(#center-circle-mask)">
              
//               {/* Updated Wave Logic:
//                  1. Starts higher (translate y=110 instead of 140)
//                  2. Bigger Curve (Q-50 40 instead of 20)
//                  3. mix-blend-multiply allows colors to mix properly
//               */}

//               {/* Back Wave (Blue) - Slightly higher */}
//               <g transform="translate(0, 115)" className="liquid-wave-back" style={{ mixBlendMode: 'multiply' }}>
//                  <path 
//                    d="M-400 0 Q-300 35 -200 0 T0 0 T200 0 T400 0 T600 0 V200 H-400 Z" 
//                    fill="#4D4DFF" 
//                    opacity="0.6"
//                  />
//               </g>

//               {/* Front Wave (Red) - Slightly lower */}
//               <g transform="translate(0, 125)" className="liquid-wave" style={{ mixBlendMode: 'multiply' }}>
//                  <path 
//                    d="M-400 0 Q-300 -35 -200 0 T0 0 T200 0 T400 0 T600 0 V200 H-400 Z" 
//                    fill="#FF4D4D" 
//                    opacity="0.8" 
//                  />
//               </g>
//             </g>
//           </g>

//           {/* --- BOTTOM DOTS --- */}
//           <circle cx="200" cy="250" r="8" fill="#a855f7" className="float-group" />
//           <circle cx="400" cy="250" r="8" fill="#FF4D4D" className="float-group" />
//           <circle cx="600" cy="250" r="8" fill="#4D4DFF" className="float-group" />

//         </svg>
//       </div>
//     </section>
//   );
// };

// export default LiquidConnect;


'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(useGSAP);

export default function LiquidConnect() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- GSAP ANIMATION FOR SVG (LIQUID) ---
  useGSAP(
    () => {
      // 1. Floating Animation (The circles bobbing up and down)
      gsap.to('.float-group', {
        y: 10,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.2, from: 'center' },
      });

      // 2. Liquid Wave Animation
      gsap.to('.liquid-wave', {
        x: -400,
        duration: 3,
        ease: 'none',
        repeat: -1,
      });

      gsap.to('.liquid-wave-back', {
        x: -400,
        duration: 5, 
        ease: 'none',
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  // --- FRAMER MOTION VARIANTS FOR TEXT ---
// --- FRAMER MOTION VARIANTS FOR TEXT ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // 👇 Add 'as const' here to satisfy TypeScript
        ease: "easeOut" as const 
      }
    }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. Background Grid Pattern (Design Update) */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Text Section with Framer Motion */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl text-center mb-16 px-6"
      >
        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-500 text-sm font-semibold tracking-wide mb-6">
          OUR PHILOSOPHY
        </motion.span>
        
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
          Where <span className="text-rose-500">Creativity</span> meets <br className="hidden md:block" />
          <span className="text-indigo-600">Intelligence</span>
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-lg text-gray-500 max-w-2xl mx-auto">
          We are a global agency combining human design expertise with the scalable power of modern technology.
        </motion.p>
      </motion.div>


      {/* 3. The Animation Container */}
      <div className="relative w-full max-w-[800px] aspect-800/350 flex items-center justify-center">
        
        {/* SVG Component */}
        <svg
          viewBox="0 0 800 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible drop-shadow-xl"
        >
          <defs>
            <clipPath id="center-circle-mask">
              <circle cx="400" cy="150" r="80" />
            </clipPath>
            {/* Gradients for a more modern look */}
            <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF4D4D" />
            </linearGradient>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4D4DFF" />
              <stop offset="100%" stopColor="#3B3BCC" />
            </linearGradient>
          </defs>

          {/* Connecting Line */}
          <line x1="200" y1="150" x2="600" y2="150" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="8 8" />

          {/* --- LEFT CIRCLE (Design/Red) --- */}
          <g className="float-group">
            {/* Shadow/Outer Ring */}
            <circle cx="205" cy="155" r="50" fill="black" opacity="0.05" />
            <circle cx="200" cy="150" r="50" fill="white" stroke="#f3f4f6" strokeWidth="4" />
            {/* Inner Color */}
            <circle cx="200" cy="150" r="30" fill="url(#grad-red)" />
          </g>

          {/* --- RIGHT CIRCLE (Tech/Blue) --- */}
          <g className="float-group">
             {/* Shadow/Outer Ring */}
            <circle cx="605" cy="155" r="50" fill="black" opacity="0.05" />
            <circle cx="600" cy="150" r="50" fill="white" stroke="#f3f4f6" strokeWidth="4" />
            {/* Inner Color */}
            <circle cx="600" cy="150" r="30" fill="url(#grad-blue)" />
          </g>

          {/* --- CENTER CIRCLE (Synergy/Mix) --- */}
          <g className="float-group">
            <circle cx="410" cy="160" r="80" fill="black" opacity="0.1" />
            <circle cx="400" cy="150" r="80" fill="white" stroke="#e5e7eb" strokeWidth="1" />

            {/* THE LIQUID CONTENTS */}
            <g clipPath="url(#center-circle-mask)">
              {/* Back Wave (Blue) */}
              <g transform="translate(0, 115)" className="liquid-wave-back" style={{ mixBlendMode: 'multiply' }}>
                 <path 
                   d="M-400 0 Q-300 35 -200 0 T0 0 T200 0 T400 0 T600 0 V200 H-400 Z" 
                   fill="#6366f1" // Indigo-500
                   opacity="0.5"
                 />
              </g>

              {/* Front Wave (Red) */}
              <g transform="translate(0, 125)" className="liquid-wave" style={{ mixBlendMode: 'multiply' }}>
                 <path 
                   d="M-400 0 Q-300 -35 -200 0 T0 0 T200 0 T400 0 T600 0 V200 H-400 Z" 
                   fill="#f43f5e" // Rose-500
                   opacity="0.7" 
                 />
              </g>
            </g>
          </g>

          {/* --- LABELS (New Addition for Context) --- */}
          <g className="font-sans text-sm font-bold uppercase tracking-wider text-gray-400">
             <text x="200" y="240" textAnchor="middle" fill="#FF4D4D" className="float-group">Design</text>
             <text x="600" y="240" textAnchor="middle" fill="#4D4DFF" className="float-group">Tech</text>
             <text x="400" y="270" textAnchor="middle" fill="#374151" className="float-group opacity-60">Impact</text>
          </g>

        </svg>
      </div>

    </section>
  );
};