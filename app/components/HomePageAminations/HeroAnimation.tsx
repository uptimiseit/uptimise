'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Initial State Setups (Hidden for animation)
      gsap.set('.hero-text-line', { y: 100, opacity: 0 });
      gsap.set(buttonRef.current, { scale: 0.8, opacity: 0 });
      gsap.set('.tech-shape', { opacity: 0, scale: 0 });

      // 2. Animate Background Shapes (The "Tech" feel)
      tl.to('.tech-shape', {
        opacity: 0.15, // Keep them subtle
        scale: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })
        // 3. Animate Text Reveal
        .to(
          '.hero-text-line',
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
          },
          '-=1' // Overlap with shapes animation
        )
        // 4. Button Pop in
        .to(
          buttonRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
          },
          '-=0.5'
        );

      // 5. Continuous Floating Animation (The "Alive" feel)
      gsap.to('.tech-shape', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: 'random',
        },
      });

      // 6. Interactive Mouse Parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20; // range -10 to 10
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(shapesRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power1.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 text-center text-white"
    >
      {/* --- Background Abstract Shapes (The "IT" Elements) --- */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        {/* Circle Top Left */}
        <div className="tech-shape absolute left-[10%] top-[20%] h-24 w-24 rounded-full border border-cyan-500/30 bg-cyan-500/10 blur-sm md:h-48 md:w-48" />
        
        {/* Square Bottom Right */}
        <div className="tech-shape absolute bottom-[15%] right-[10%] h-32 w-32 rotate-12 rounded-xl border border-purple-500/30 bg-purple-500/10 blur-sm md:h-64 md:w-64" />
        
        {/* Code Bracket style Shape */}
        <div className="tech-shape absolute right-[20%] top-[15%] h-16 w-16 border-r-2 border-t-2 border-blue-400/40" />
        <div className="tech-shape absolute bottom-[25%] left-[20%] h-16 w-16 border-l-2 border-b-2 border-indigo-400/40" />

        {/* Grid Overlay for Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/80"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="z-10 max-w-4xl space-y-6">
        
        {/* Tagline Badge */}
        <div className="hero-text-line mx-auto w-fit rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-cyan-400 backdrop-blur-md">
          Innovating Tomorrow
        </div>

        {/* Main Headline */}
        <h1 ref={headingRef} className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          <span className="hero-text-line block bg-linear-to-br from-white via-white to-slate-400 bg-clip-text text-transparent">
            Digital Solutions
          </span>
          <span className="hero-text-line block bg-linear-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            For The Modern Era
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subHeadingRef}
          className="hero-text-line mx-auto max-w-xl text-lg text-slate-400 md:text-xl"
        >
          We transform complex challenges into elegant software. 
          Scalable architecture, cutting-edge technology, and pixel-perfect design.
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            ref={buttonRef}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 p-0.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]"
          >
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-md bg-slate-950 px-8 py-3 transition-all duration-300 group-hover:bg-opacity-0">
              Start Your Project
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimation;