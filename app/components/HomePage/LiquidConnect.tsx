'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const LiquidConnect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Floating Animation
      gsap.to('.float-group', {
        y: 15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.5, from: 'center' },
      });

      // 2. Liquid Wave Animation
      // Note: We move x by -400 because the wave pattern repeats every 400 units in the new path
      gsap.to('.liquid-wave', {
        x: -400, 
        duration: 4,
        ease: 'none',
        repeat: -1,
      });
      
      gsap.to('.liquid-wave-back', {
        x: -400,
        duration: 7, // Slower for parallax effect
        ease: 'none',
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full py-10  flex flex-col items-center justify-center">
      
      <div className="max-w-3xl text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold  leading-tight">
          We are a global creative agency that combines design expertise with technology and intelligence.
        </h2>
      </div>

      <div className="relative w-full max-w-[800px] h-[300px] flex items-center justify-center">
        <svg
          viewBox="0 0 800 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Mask for the Center Circle */}
            <clipPath id="center-circle-mask">
              <circle cx="400" cy="150" r="80" />
            </clipPath>
          </defs>

          {/* --- Connecting Line --- */}
          <line x1="200" y1="150" x2="600" y2="150" stroke="black" strokeWidth="2" opacity="0.2" />

          {/* --- LEFT CIRCLE (Red) --- */}
          <g className="float-group">
            <circle cx="205" cy="155" r="50" fill="black" />
            <circle cx="200" cy="150" r="50" fill="white" stroke="black" strokeWidth="2" />
            <circle cx="200" cy="150" r="30" fill="#FF4D4D" />
          </g>

          {/* --- RIGHT CIRCLE (Blue) --- */}
          <g className="float-group">
            <circle cx="605" cy="155" r="50" fill="black" />
            <circle cx="600" cy="150" r="50" fill="white" stroke="black" strokeWidth="2" />
            <circle cx="600" cy="150" r="30" fill="#4D4DFF" />
          </g>

          {/* --- CENTER CIRCLE (Mixing) --- */}
          <g className="float-group">
            <circle cx="410" cy="160" r="80" fill="black" />
            <circle cx="400" cy="150" r="80" fill="white" stroke="black" strokeWidth="2" />

            {/* THE LIQUID CONTENTS */}
            <g clipPath="url(#center-circle-mask)">
              
              {/* Updated Wave Logic:
                 1. Starts higher (translate y=110 instead of 140)
                 2. Bigger Curve (Q-50 40 instead of 20)
                 3. mix-blend-multiply allows colors to mix properly
              */}

              {/* Back Wave (Blue) - Slightly higher */}
              <g transform="translate(0, 115)" className="liquid-wave-back" style={{ mixBlendMode: 'multiply' }}>
                 <path 
                   d="M-400 0 Q-300 35 -200 0 T0 0 T200 0 T400 0 T600 0 V200 H-400 Z" 
                   fill="#4D4DFF" 
                   opacity="0.6"
                 />
              </g>

              {/* Front Wave (Red) - Slightly lower */}
              <g transform="translate(0, 125)" className="liquid-wave" style={{ mixBlendMode: 'multiply' }}>
                 <path 
                   d="M-400 0 Q-300 -35 -200 0 T0 0 T200 0 T400 0 T600 0 V200 H-400 Z" 
                   fill="#FF4D4D" 
                   opacity="0.8" 
                 />
              </g>
            </g>
          </g>

          {/* --- BOTTOM DOTS --- */}
          <circle cx="200" cy="250" r="8" fill="#a855f7" className="float-group" />
          <circle cx="400" cy="250" r="8" fill="#FF4D4D" className="float-group" />
          <circle cx="600" cy="250" r="8" fill="#4D4DFF" className="float-group" />

        </svg>
      </div>
    </section>
  );
};

export default LiquidConnect;