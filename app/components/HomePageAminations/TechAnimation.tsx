// 'use client';

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// const TechCircuitAnimation = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline();

//       // --- Setup Initial States ---
//       gsap.set('.circuit-path-static', { strokeDasharray: 1200, strokeDashoffset: 1200, opacity: 0 });
//       gsap.set('.circuit-node-static', { scale: 0, opacity: 0 });
//       gsap.set('.energy-bolt', { strokeDasharray: '30 600', strokeDashoffset: 630, opacity: 0 });
//       gsap.set('.core-ring', { scale: 0.8, opacity: 0, transformOrigin: 'center' });


//       // --- The Build Sequence Timeline ---
//       tl.to('.circuit-path-static', {
//         strokeDashoffset: 0,
//         opacity: 0.3,
//         duration: 2.5,
//         ease: 'power3.inOut',
//         stagger: 0.1,
//       })
//       .to(['.circuit-node-static', '.core-ring'], {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         ease: 'back.out(2)',
//         stagger: 0.05,
//       }, '-=1.5');


//       // --- Continuous Ambient Animations ---

//       // Rings
//       gsap.to('.core-ring-inner', { rotation: 360, duration: 20, repeat: -1, ease: 'none', transformOrigin: 'center' });
//       gsap.to('.core-ring-mid', { rotation: -360, duration: 30, repeat: -1, ease: 'none', transformOrigin: 'center' });
//       gsap.to('.core-ring-outer', { rotation: 360, duration: 45, repeat: -1, ease: 'none', transformOrigin: 'center' });

//       // Heartbeat
//       gsap.to('.core-heart', {
//         scale: 1.2,
//         opacity: 1,
//         duration: 2,
//         yoyo: true,
//         repeat: -1,
//         ease: 'sine.inOut',
//         transformOrigin: 'center',
//       });

//       // Energy Bolts
//       gsap.to('.energy-bolt', {
//         strokeDashoffset: 0,
//         opacity: 1,
//         duration: 4, 
//         ease: 'power2.inOut', 
//         repeat: -1,
//         stagger: {
//           each: 0.8,
//           from: 'random',
//         },
//       });

//       // Background Dust
//       gsap.to('.bg-particle', {
//         y: 'random(-30, 30)',
//         x: 'random(-30, 30)',
//         opacity: 'random(0.1, 0.3)',
//         duration: 'random(5, 10)',
//         ease: 'sine.inOut',
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.1,
//       });
//     },
//     { scope: containerRef }
//   );

//   return (
//     <div ref={containerRef} className="relative w-full h-full flex items-center justify-center pointer-events-none">
//       <svg
//         viewBox="0 0 600 600"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full max-w-[600px] overflow-visible"
//       >
//         <defs>
//           <linearGradient id="active-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#06b6d4" />
//             <stop offset="50%" stopColor="#3b82f6" />
//             <stop offset="100%" stopColor="#a855f7" />
//           </linearGradient>
          
//           <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//             <feComposite in="coloredBlur" in2="SourceGraphic" operator="over" result="softGlow" />
//             <feMerge>
//               <feMergeNode in="softGlow" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* GROUP 1: Background Particles */}
//         <g className="fill-foreground/10">
//            {[...Array(12)].map((_, i) => (
//              <circle key={i} cx={Math.random() * 600} cy={Math.random() * 600} r={Math.random() * 3 + 1} className="bg-particle" />
//            ))}
//         </g>

//         {/* GROUP 2: Static Circuit Structure */}
//         <g className="stroke-foreground/20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//           <path className="circuit-path-static" d="M300 300 L300 150 L150 150 L150 100" />
//           <path className="circuit-path-static" d="M300 300 L450 300 L450 450 L500 450" />
//           <path className="circuit-path-static" d="M300 300 L150 300 L150 450 L100 450" />
//           <path className="circuit-path-static" d="M300 300 L300 450 L450 150 L500 150" />
          
//           <circle cx="150" cy="150" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
//           <circle cx="450" cy="300" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
//           <circle cx="150" cy="450" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
//           <circle cx="450" cy="150" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
          
//           <rect x="80" y="80" width="30" height="30" rx="4" className="circuit-node-static fill-background stroke-foreground/30" />
//           <rect x="480" y="480" width="30" height="30" rx="4" className="circuit-node-static fill-background stroke-foreground/30" />
//         </g>

//         {/* GROUP 3: Active Energy Bolts */}
//         <g stroke="url(#active-gradient)" strokeWidth="3" strokeLinecap="round" filter="url(#strong-glow)" fill="none">
//            <path className="energy-bolt" d="M300 300 L300 150 L150 150 L150 100" />
//            <path className="energy-bolt" d="M300 300 L450 300 L450 450 L500 450" />
//            <path className="energy-bolt" d="M300 300 L150 300 L150 450 L100 450" />
//            <path className="energy-bolt" d="M300 300 L300 450 L450 150 L500 150" />
//         </g>

//         {/* GROUP 4: The Advanced Core */}
//         {/* FIX 1: Used style prop for transformOrigin */}
//         <g style={{ transformOrigin: '300px 300px' }}>
//            <circle cx="300" cy="300" r="50" className="core-ring core-ring-inner stroke-foreground/30" strokeWidth="1" strokeDasharray="10 10" fill="none" />
//            <circle cx="300" cy="300" r="70" className="core-ring core-ring-mid stroke-foreground/20" strokeWidth="1" strokeDasharray="20 15" fill="none" />
//            <circle cx="300" cy="300" r="90" className="core-ring core-ring-outer stroke-foreground/10" strokeWidth="2" strokeDasharray="50 20" fill="none" />

//            {/* FIX 2: Fixed nested quotes and separated stroke attribute */}
//            <path 
//              d="M300 260 L335 280 V320 L300 340 L265 320 V280 Z" 
//              className="circuit-node-static fill-background"
//              stroke="url(#active-gradient)"
//              strokeWidth="2"
//            />
           
//            <circle cx="300" cy="300" r="12" className="core-heart fill-cyan-500" filter="url(#strong-glow)" opacity="0.8" />
//            <circle cx="300" cy="300" r="6" className="fill-white" />
//         </g>

//       </svg>
//     </div>
//   );
// };

// export default TechCircuitAnimation;


// 'use client';

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// const SwastikCircuit = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline();

//       // --- Setup Initial States ---
//       gsap.set('.circuit-path-static', { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });
//       gsap.set('.circuit-node-static', { scale: 0, opacity: 0 });
//       gsap.set('.energy-bolt', { strokeDasharray: '40 400', strokeDashoffset: 440, opacity: 0 });
//       gsap.set('.core-ring', { scale: 0.8, opacity: 0, transformOrigin: 'center' });

//       // --- The Build Sequence ---
//       tl.to('.circuit-path-static', {
//         strokeDashoffset: 0,
//         opacity: 0.4,
//         duration: 2,
//         ease: 'power2.inOut',
//         stagger: 0.2,
//       })
//       .to(['.circuit-node-static', '.core-ring'], {
//         scale: 1,
//         opacity: 1,
//         duration: 0.8,
//         ease: 'back.out(1.7)',
//         stagger: 0.05,
//       }, '-=1');

//       // --- Continuous Ambient Animations ---
//       gsap.to('.core-ring-inner', { rotation: 360, duration: 15, repeat: -1, ease: 'none', transformOrigin: 'center' });
//       gsap.to('.core-ring-outer', { rotation: -360, duration: 25, repeat: -1, ease: 'none', transformOrigin: 'center' });

//       // Core Heartbeat
//       gsap.to('.core-heart', {
//         scale: 1.3,
//         opacity: 1,
//         duration: 1.5,
//         yoyo: true,
//         repeat: -1,
//         ease: 'sine.inOut',
//         transformOrigin: 'center',
//       });

//       // Energy Bolts (Flowing through the Swastika arms)
//       gsap.to('.energy-bolt', {
//         strokeDashoffset: 0,
//         opacity: 1,
//         duration: 3,
//         ease: 'linear',
//         repeat: -1,
//         stagger: {
//           each: 0.6,
//         },
//       });

//       // Floating Particles
//       gsap.to('.bg-particle', {
//         y: 'random(-40, 40)',
//         x: 'random(-40, 40)',
//         opacity: 'random(0.1, 0.4)',
//         duration: 'random(4, 8)',
//         ease: 'sine.inOut',
//         repeat: -1,
//         yoyo: true,
//       });
//     },
//     { scope: containerRef }
//   );

//   // Path definitions for a clockwise Swastika
//   // M 300 300 (Center) -> Arm -> Hook
//   const arms = [
//     "M 300 300 L 300 150 L 400 150", // Top Arm
//     "M 300 300 L 450 300 L 450 400", // Right Arm
//     "M 300 300 L 300 450 L 200 450", // Bottom Arm
//     "M 300 300 L 150 300 L 150 200", // Left Arm
//   ];

//   return (
//     <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-transparent pointer-events-none">
//       <svg
//         viewBox="0 0 600 600"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full max-w-[500px] overflow-visible"
//       >
//         <defs>
//           <linearGradient id="swastik-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#f59e0b" /> {/* Amber */}
//             <stop offset="50%" stopColor="#ef4444" /> {/* Red */}
//             <stop offset="100%" stopColor="#7c3aed" /> {/* Violet */}
//           </linearGradient>
          
//           <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
//             <feGaussianBlur stdDeviation="5" result="blur" />
//             <feComposite in="blur" in2="SourceGraphic" operator="over" />
//           </filter>
//         </defs>

//         {/* Background Particles */}
//         <g fill="currentColor" className="text-orange-500/20">
//           {[...Array(15)].map((_, i) => (
//             <circle key={i} cx={Math.random() * 600} cy={Math.random() * 600} r={Math.random() * 2 + 1} className="bg-particle" />
//           ))}
//         </g>

//         {/* Static Structure */}
//         <g stroke="currentColor" className="text-gray-500/20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           {arms.map((d, i) => (
//             <path key={i} className="circuit-path-static" d={d} />
//           ))}
          
//           {/* Nodes at the Hooks */}
//           <circle cx="400" cy="150" r="4" className="circuit-node-static fill-black stroke-orange-500/40" />
//           <circle cx="450" cy="400" r="4" className="circuit-node-static fill-black stroke-orange-500/40" />
//           <circle cx="200" cy="450" r="4" className="circuit-node-static fill-black stroke-orange-500/40" />
//           <circle cx="150" cy="200" r="4" className="circuit-node-static fill-black stroke-orange-500/40" />
//         </g>

//         {/* Energy Bolts */}
//         <g stroke="url(#swastik-grad)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" fill="none">
//           {arms.map((d, i) => (
//             <path key={i} className="energy-bolt" d={d} />
//           ))}
//         </g>

//         {/* Central Core */}
//         <g style={{ transformOrigin: '300px 300px' }}>
//           <circle cx="300" cy="300" r="60" className="core-ring core-ring-outer stroke-orange-500/10" strokeWidth="1" strokeDasharray="10 5" fill="none" />
//           <circle cx="300" cy="300" r="40" className="core-ring core-ring-inner stroke-red-500/20" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          
//           {/* Center Shape */}
//           <rect 
//             x="285" y="285" width="30" height="30" rx="4" 
//             transform="rotate(45 300 300)"
//             className="circuit-node-static fill-black stroke-red-500" 
//             strokeWidth="2"
//           />
          
//           <circle cx="300" cy="300" r="10" className="core-heart fill-orange-500" filter="url(#glow)" />
//           <circle cx="300" cy="300" r="4" fill="white" />
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default SwastikCircuit;

'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const QuantumSwastik = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Sophisticated Reveal
      tl.from('.glass-base', { opacity: 0, scale: 0.8, duration: 1.5, ease: 'expo.out' })
        .from('.trace-line', {
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          duration: 2,
          stagger: 0.15,
          ease: 'power4.inOut'
        }, "-=1")
        .from('.node-point', { scale: 0, opacity: 0, stagger: 0.1, ease: 'back.out(2)' }, "-=0.5");

      // 2. The "Photon" Flow (Light traveling through the lines)
      gsap.to('.photon-flow', {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: 'power2.inOut',
        stagger: 0.6,
      });

      // 3. Floating Orbitals (Circular energy movement)
      gsap.to('.orbital', {
        rotation: 360,
        transformOrigin: '300px 300px',
        duration: 10,
        repeat: -1,
        ease: 'none'
      });
    },
    { scope: containerRef }
  );

  // Geometric, high-tech paths
  const arms = [
    "M 300 300 V 180 H 420 V 100", 
    "M 300 300 H 420 V 420 H 500", 
    "M 300 300 V 420 H 180 V 500", 
    "M 300 300 H 180 V 180 H 100", 
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-white p-8">
      <svg
        viewBox="0 0 600 600"
        className="w-full max-w-[500px] overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Professional Tech Gradient: Deep Ocean to Electric Blue */}
          <linearGradient id="quantum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" /> 
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Frosted Glow Filter */}
          <filter id="glass-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* Decorative Radar Rings */}
        <g fill="none" stroke="#E2E8F0" strokeWidth="0.5">
          <circle cx="300" cy="300" r="280" strokeDasharray="5 10" />
          <circle cx="300" cy="300" r="200" strokeDasharray="2 5" />
        </g>

        {/* The "Orbitals" - Tiny floating tech nodes */}
        <g className="orbital">
          <circle cx="300" cy="20" r="3" fill="#3B82F6" className="opacity-40" />
          <circle cx="300" cy="580" r="3" fill="#3B82F6" className="opacity-40" />
        </g>

        {/* Shadow Path (The "Circuit Trace") */}
        <g fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round">
          {arms.map((d, i) => <path key={`trace-${i}`} d={d} />)}
        </g>

        {/* Thin Structural Lines */}
        <g fill="none" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round">
          {arms.map((d, i) => <path key={`struct-${i}`} d={d} className="trace-line" />)}
        </g>

        {/* High-Intensity Energy Flow */}
        <g fill="none" stroke="url(#quantum-grad)" strokeWidth="4" strokeLinecap="round" filter="url(#glass-glow)">
          {arms.map((d, i) => (
            <path 
              key={`flow-${i}`} 
              d={d} 
              className="photon-flow" 
              strokeDasharray="60 400" 
              strokeDashoffset="460"
            />
          ))}
        </g>

        {/* Data Intersection Points (Terminal Nodes) */}
        <g fill="white" stroke="#3B82F6" strokeWidth="2">
          <circle cx="420" cy="100" r="6" className="node-point" />
          <circle cx="500" cy="420" r="6" className="node-point" />
          <circle cx="180" cy="500" r="6" className="node-point" />
          <circle cx="100" cy="180" r="6" className="node-point" />
        </g>

        {/* Central Quantum Core */}
        <g className="node-point">
          {/* Outer Ring */}
          <circle cx="300" cy="300" r="40" fill="white" fillOpacity="0.5" stroke="#E2E8F0" strokeWidth="1" className="glass-base" />
          {/* Active Core */}
          <rect x="280" y="280" width="40" height="40" rx="8" fill="url(#quantum-grad)" className="drop-shadow-lg" />
          {/* Center Light */}
          <circle cx="300" cy="300" r="5" fill="white" />
        </g>
      </svg>
    </div>
  );
};

export default QuantumSwastik;