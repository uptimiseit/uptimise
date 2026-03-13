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


'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const TechMachineryAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Initial Reveal
    const tl = gsap.timeline();
    tl.from('.engine-part', { opacity: 0, scale: 0.9, duration: 1.5, stagger: 0.1, ease: 'expo.out' })
      .from('.data-stream', { strokeDashoffset: 400, opacity: 0, duration: 2, ease: 'power2.inOut' }, '-=1');

    // 2. Mechanical Rotations (Gears & Rims)
    gsap.to('.gear-outer', { rotation: 360, duration: 40, repeat: -1, ease: 'none', transformOrigin: 'center' });
    gsap.to('.gear-inner', { rotation: -360, duration: 25, repeat: -1, ease: 'none', transformOrigin: 'center' });
    gsap.to('.data-ring', { rotation: 360, duration: 15, repeat: -1, ease: 'none', transformOrigin: 'center' });

    // 3. The "Pulse" (Engine Heartbeat)
    gsap.to('.engine-core', {
      scale: 1.05,
      filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // 4. Processing Bits (Small squares flying through pipelines)
    gsap.to('.processing-bit', {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 3,
      repeat: -1,
      ease: 'none',
      stagger: { each: 0.5, repeat: -1 }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 600 600" className="w-full max-w-[550px] overflow-visible drop-shadow-2xl">
        <defs>
          <linearGradient id="engine-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
          
          <filter id="engine-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- MECHANICAL BACKGROUND (GEARS) --- */}
        <g className="gear-outer opacity-10" stroke="#94A3B8" strokeWidth="1">
          <circle cx="300" cy="300" r="250" strokeDasharray="10 20" />
          {[...Array(24)].map((_, i) => (
            <rect key={i} x="295" y="40" width="10" height="20" rx="2" transform={`rotate(${i * 15} 300 300)`} fill="#94A3B8" />
          ))}
        </g>

        <g className="gear-inner opacity-20" stroke="#64748B" strokeWidth="0.5">
          <circle cx="300" cy="300" r="180" strokeDasharray="5 15" />
          {[...Array(12)].map((_, i) => (
            <path key={i} d="M300 120 L310 140 H290 Z" transform={`rotate(${i * 30} 300 300)`} fill="#64748B" />
          ))}
        </g>

        {/* --- DATA PIPELINES (The "Conveyor Belts") --- */}
        <g fill="none" stroke="#E2E8F0" strokeWidth="1" className="opacity-40">
           <circle cx="300" cy="300" r="210" />
           <path d="M300 90 V20" />
           <path d="M300 510 V580" />
           <path d="M90 300 H20" />
           <path d="M510 300 H580" />
        </g>

        {/* --- DATA STREAMS (Moving Bits) --- */}
        <g fill="none" stroke="url(#engine-grad)" strokeWidth="3" filter="url(#engine-glow)">
          <circle cx="300" cy="300" r="210" className="processing-bit" strokeDasharray="20 400" strokeDashoffset="420" />
          <path d="M300 90 V20" className="processing-bit" strokeDasharray="10 100" strokeDashoffset="110" />
          <path d="M90 300 H20" className="processing-bit" strokeDasharray="10 100" strokeDashoffset="110" />
        </g>

        {/* --- PERIPHERAL NODES (Specialized Machinery) --- */}
        {[
          { x: 100, y: 100, label: "AI_PM" },
          { x: 500, y: 100, label: "CODE" },
          { x: 100, y: 500, label: "QA" },
          { x: 500, y: 500, label: "DEVOPS" }
        ].map((node, i) => (
          <g key={i} className="engine-part">
            <rect x={node.x - 30} y={node.y - 30} width="60" height="60" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx={node.x} cy={node.y} r="15" fill="#F8FAFC" stroke="#3B82F6" strokeWidth="0.5" />
            <text x={node.x} y={node.y + 45} textAnchor="middle" fontSize="10" fontWeight="900" fill="#94A3B8" className="font-mono">
              {node.label}
            </text>
          </g>
        ))}

        {/* --- THE QUANTUM CORE (Orchestrator) --- */}
        <g className="engine-core" filter="url(#engine-glow)">
          {/* Inner Spinning Data Ring */}
          <circle cx="300" cy="300" r="80" stroke="url(#engine-grad)" strokeWidth="1" strokeDasharray="5 10" className="data-ring" fill="none" />
          
          {/* Core Shield */}
          <circle cx="300" cy="300" r="60" fill="white" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Active CPU Chip */}
          <rect x="275" y="275" width="50" height="50" rx="8" fill="url(#engine-grad)" />
          <rect x="285" y="285" width="30" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
          
          {/* Pulse Indicator */}
          <circle cx="300" cy="300" r="6" fill="white" />
        </g>
      </svg>
    </div>
  );
};

export default TechMachineryAnimation;

// 'use client';

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// const EliteOrchestrator = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // 1. Core "Breathing" & Rotation
//     gsap.to('.core-hub', { rotation: 360, duration: 60, repeat: -1, ease: 'none', transformOrigin: 'center' });
//     gsap.to('.mid-hub', { rotation: -360, duration: 40, repeat: -1, ease: 'none', transformOrigin: 'center' });
    
//     // 2. Data Packet Flow (Moving from Core to Nodes)
//     gsap.to('.data-packet', {
//       strokeDashoffset: 0,
//       opacity: 1,
//       duration: 2.5,
//       repeat: -1,
//       ease: 'power1.inOut',
//       stagger: { each: 0.6, repeat: -1 }
//     });

//     // 3. Hex-Node "Scanning" (Subtle scale and glow)
//     gsap.to('.hex-node', {
//       scale: 1.05,
//       filter: 'brightness(1.1)',
//       duration: 2,
//       stagger: { each: 0.3, yoyo: true, repeat: -1 },
//       ease: 'sine.inOut'
//     });

//     // 4. Central Pulse (The AI "Thought" wave)
//     gsap.to('.core-pulse', {
//       r: 80,
//       opacity: 0,
//       duration: 2,
//       repeat: -1,
//       ease: 'expo.out'
//     });
//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className="relative w-full h-full flex items-center justify-center p-8">
//       <svg viewBox="0 0 600 600" className="w-full max-w-[550px] overflow-visible">
//         <defs>
//           <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#3B82F6" />
//             <stop offset="100%" stopColor="#8B5CF6" />
//           </linearGradient>
          
//           <filter id="hyper-glow">
//             <feGaussianBlur stdDeviation="5" result="blur" />
//             <feComposite in="SourceGraphic" in2="blur" operator="over" />
//           </filter>
//         </defs>

//         {/* --- THE BACKGROUND MATRIX --- */}
//         <g opacity="0.05" stroke="#64748B" strokeWidth="0.5">
//           {[...Array(10)].map((_, i) => (
//             <line key={`v-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="600" />
//           ))}
//           {[...Array(10)].map((_, i) => (
//             <line key={`h-${i}`} x1="0" y1={i * 60} x2="600" y2={i * 60} />
//           ))}
//         </g>

//         {/* --- SYNAPSE PATHWAYS --- */}
//         <g fill="none" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4">
//           <path d="M 300 300 L 120 120" />
//           <path d="M 300 300 L 480 120" />
//           <path d="M 300 300 L 120 480" />
//           <path d="M 300 300 L 480 480" />
//         </g>

//         {/* --- ACTIVE DATA FLOWS --- */}
//         <g fill="none" stroke="url(#ai-gradient)" strokeWidth="3" filter="url(#hyper-glow)">
//           <path d="M 300 300 L 120 120" className="data-packet" strokeDasharray="30 300" strokeDashoffset="330" />
//           <path d="M 300 300 L 480 120" className="data-packet" strokeDasharray="30 300" strokeDashoffset="330" />
//           <path d="M 300 300 L 120 480" className="data-packet" strokeDasharray="30 300" strokeDashoffset="330" />
//           <path d="M 300 300 L 480 480" className="data-packet" strokeDasharray="30 300" strokeDashoffset="330" />
//         </g>

//         {/* --- OUTER HEX-NODES (The Factory Agents) --- */}
//         {[
//           { x: 120, y: 120, label: "AI_PM" },
//           { x: 480, y: 120, label: "CODE_GEN" },
//           { x: 120, y: 480, label: "QA_AUTO" },
//           { x: 480, y: 480, label: "DEVOPS" }
//         ].map((node, i) => (
//           <g key={i} className="hex-node" style={{ transformOrigin: `${node.x}px ${node.y}px` }}>
//             {/* Hexagon Shape */}
//             <path 
//               d={`M ${node.x} ${node.y-35} L ${node.x+30} ${node.y-17} V ${node.y+17} L ${node.x} ${node.y+35} L ${node.x-30} ${node.y+17} V ${node.y-17} Z`} 
//               fill="white" stroke="#E2E8F0" strokeWidth="1" 
//             />
//             <circle cx={node.x} cy={node.y} r="8" fill="url(#ai-gradient)" />
//             <text x={node.x} y={node.y + 55} textAnchor="middle" fontSize="10" fontWeight="900" fill="#94A3B8" className="font-mono">
//               {node.label}
//             </text>
//           </g>
//         ))}

//         {/* --- THE CORE ENGINE (The Orchestrator) --- */}
//         <g className="core-hub" transform="translate(300, 300)">
//           {/* Pulsing Energy Wave */}
//           <circle r="40" fill="url(#ai-gradient)" opacity="0.1" className="core-pulse" />
          
//           {/* Multi-layered Rims */}
//           <circle r="70" fill="none" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="10 5" />
//           <circle r="55" fill="none" stroke="url(#ai-gradient)" strokeWidth="1" strokeDasharray="2 4" className="mid-hub" />
          
//           {/* Main Core Body */}
//           <circle r="45" fill="white" stroke="#E2E8F0" strokeWidth="1" shadow-xl="true" />
          
//           {/* Central Processing Chip */}
//           <rect x="-20" y="-20" width="40" height="40" rx="6" fill="url(#ai-gradient)" filter="url(#hyper-glow)" />
//           <rect x="-12" y="-12" width="24" height="24" rx="2" fill="rgba(255,255,255,0.2)" />
          
//           {/* Tiny Circuits on the chip */}
//           <g stroke="white" strokeWidth="1" opacity="0.6">
//              <line x1="-8" y1="0" x2="8" y2="0" />
//              <line x1="0" y1="-8" x2="0" y2="8" />
//           </g>
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default EliteOrchestrator;