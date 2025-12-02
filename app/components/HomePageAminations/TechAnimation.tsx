'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const TechCircuitAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // --- Setup Initial States ---
      gsap.set('.circuit-path-static', { strokeDasharray: 1200, strokeDashoffset: 1200, opacity: 0 });
      gsap.set('.circuit-node-static', { scale: 0, opacity: 0 });
      gsap.set('.energy-bolt', { strokeDasharray: '30 600', strokeDashoffset: 630, opacity: 0 });
      gsap.set('.core-ring', { scale: 0.8, opacity: 0, transformOrigin: 'center' });


      // --- The Build Sequence Timeline ---
      tl.to('.circuit-path-static', {
        strokeDashoffset: 0,
        opacity: 0.3,
        duration: 2.5,
        ease: 'power3.inOut',
        stagger: 0.1,
      })
      .to(['.circuit-node-static', '.core-ring'], {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(2)',
        stagger: 0.05,
      }, '-=1.5');


      // --- Continuous Ambient Animations ---

      // Rings
      gsap.to('.core-ring-inner', { rotation: 360, duration: 20, repeat: -1, ease: 'none', transformOrigin: 'center' });
      gsap.to('.core-ring-mid', { rotation: -360, duration: 30, repeat: -1, ease: 'none', transformOrigin: 'center' });
      gsap.to('.core-ring-outer', { rotation: 360, duration: 45, repeat: -1, ease: 'none', transformOrigin: 'center' });

      // Heartbeat
      gsap.to('.core-heart', {
        scale: 1.2,
        opacity: 1,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        transformOrigin: 'center',
      });

      // Energy Bolts
      gsap.to('.energy-bolt', {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 4, 
        ease: 'power2.inOut', 
        repeat: -1,
        stagger: {
          each: 0.8,
          from: 'random',
        },
      });

      // Background Dust
      gsap.to('.bg-particle', {
        y: 'random(-30, 30)',
        x: 'random(-30, 30)',
        opacity: 'random(0.1, 0.3)',
        duration: 'random(5, 10)',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[600px] overflow-visible"
      >
        <defs>
          <linearGradient id="active-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feComposite in="coloredBlur" in2="SourceGraphic" operator="over" result="softGlow" />
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* GROUP 1: Background Particles */}
        <g className="fill-foreground/10">
           {[...Array(12)].map((_, i) => (
             <circle key={i} cx={Math.random() * 600} cy={Math.random() * 600} r={Math.random() * 3 + 1} className="bg-particle" />
           ))}
        </g>

        {/* GROUP 2: Static Circuit Structure */}
        <g className="stroke-foreground/20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path className="circuit-path-static" d="M300 300 L300 150 L150 150 L150 100" />
          <path className="circuit-path-static" d="M300 300 L450 300 L450 450 L500 450" />
          <path className="circuit-path-static" d="M300 300 L150 300 L150 450 L100 450" />
          <path className="circuit-path-static" d="M300 300 L300 450 L450 150 L500 150" />
          
          <circle cx="150" cy="150" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
          <circle cx="450" cy="300" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
          <circle cx="150" cy="450" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
          <circle cx="450" cy="150" r="4" className="circuit-node-static fill-background stroke-foreground/40" />
          
          <rect x="80" y="80" width="30" height="30" rx="4" className="circuit-node-static fill-background stroke-foreground/30" />
          <rect x="480" y="480" width="30" height="30" rx="4" className="circuit-node-static fill-background stroke-foreground/30" />
        </g>

        {/* GROUP 3: Active Energy Bolts */}
        <g stroke="url(#active-gradient)" strokeWidth="3" strokeLinecap="round" filter="url(#strong-glow)" fill="none">
           <path className="energy-bolt" d="M300 300 L300 150 L150 150 L150 100" />
           <path className="energy-bolt" d="M300 300 L450 300 L450 450 L500 450" />
           <path className="energy-bolt" d="M300 300 L150 300 L150 450 L100 450" />
           <path className="energy-bolt" d="M300 300 L300 450 L450 150 L500 150" />
        </g>

        {/* GROUP 4: The Advanced Core */}
        {/* FIX 1: Used style prop for transformOrigin */}
        <g style={{ transformOrigin: '300px 300px' }}>
           <circle cx="300" cy="300" r="50" className="core-ring core-ring-inner stroke-foreground/30" strokeWidth="1" strokeDasharray="10 10" fill="none" />
           <circle cx="300" cy="300" r="70" className="core-ring core-ring-mid stroke-foreground/20" strokeWidth="1" strokeDasharray="20 15" fill="none" />
           <circle cx="300" cy="300" r="90" className="core-ring core-ring-outer stroke-foreground/10" strokeWidth="2" strokeDasharray="50 20" fill="none" />

           {/* FIX 2: Fixed nested quotes and separated stroke attribute */}
           <path 
             d="M300 260 L335 280 V320 L300 340 L265 320 V280 Z" 
             className="circuit-node-static fill-background"
             stroke="url(#active-gradient)"
             strokeWidth="2"
           />
           
           <circle cx="300" cy="300" r="12" className="core-heart fill-cyan-500" filter="url(#strong-glow)" opacity="0.8" />
           <circle cx="300" cy="300" r="6" className="fill-white" />
        </g>

      </svg>
    </div>
  );
};

export default TechCircuitAnimation;