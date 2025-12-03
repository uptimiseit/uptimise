"use client"; // <--- Essential for useEffect

import { useEffect } from "react";
// import TAOS from 'taos';
// import LionAnimation from "../HomePageAminations/LionAnimation"; 
import TechCircuitAnimation from "../HomePageAminations/TechAnimation";

export default function Hero() {
useEffect(() => {
  const initTaos = async () => {
    // 1. Import the specific browser script (Side effect import)
    // Note: The path might vary slightly depending on the version, 
    // but usually it is 'taos/dist/taos'
    // await import('taos/dist/taos'); 
    
    // 2. Access the global object it creates
    // @ts-ignore
    if (window.TAOS) {
      // @ts-ignore
      window.TAOS.init();
    }
  };

  initTaos();
}, []);

  return (
    // Added overflow-x-hidden to prevent scrollbars during animation
    <section className="container mx-auto w-full bg-background text-foreground flex flex-col justify-center pt-12 pb-12 px-6 transition-colors duration-300 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto w-full h-full">
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 1. Left Side: The Animation */}
          <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-start">
             {/* <LionAnimation /> */}
             <TechCircuitAnimation />
          </div>

          {/* 2. Right Side: The Text */}
          <div className="flex flex-col justify-center text-left space-y-4">
            
            {/* Top Label - Animates first */}
            <p 
              className="text-base font-medium delay-200 duration-600 taos:translate-y-[20px] taos:opacity-0" 
              data-taos-offset="10"
            >
              Your Trusted UI UX Design Agency.
            </p>

            {/* Main Headline - Animates second (delayed) */}
            <h1 
              className="text-[90px] font-bold tracking-tighter leading-[1.1] delay-400 duration-600 taos:translate-x-[-50px] taos:opacity-0"
              data-taos-offset="10"
            >
              Design<br />
              Transform<br />
              Accelerate
            </h1>

            {/* Subheadline - Animates last */}
            <p 
              className="text-2xl max-w-lg leading-relaxed delay-600 duration-600 taos:translate-y-[20px] taos:opacity-0"
              data-taos-offset="10"
            >
              Redefining user experiences through <br className="hidden md:block" />
              Behavioural Science & AI
            </p>
          </div>
        </div>

        {/* --- Bottom Section: Client Logos --- */}
        <div className="mt-16 dark:border-gray-800 pt-10">
          
          {/* Logos Container */}
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