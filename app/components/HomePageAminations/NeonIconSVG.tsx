"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NeonIconSVG: React.FC = () => {
  // We specify the type of element the ref will hold.
  // Initialize with null because it's not attached to the DOM yet.
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // In TypeScript, we must check if current exists before using it
    if (!pathRef.current) return;
    
    const path = pathRef.current;

    // 1. Set up the starting state for the draw animation
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      opacity: 0,
    });

    // 2. The Animation Timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to(path, {
      duration: 0.5,
      opacity: 1,
    })
    .to(path, {
      duration: 2.5,
      strokeDashoffset: 0,
    }, "-=0.3")
    .to(path, {
        // The filter property is a string, so no special typing needed here
        filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(255, 0, 255, 0.6))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

  }, []);

  return (
    <div style={{ width: "300px", height: "300px", background: "#0a0a0a" }} className="flex items-center justify-center">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{
            filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 10px rgba(255, 0, 255, 0.4))'
        }}
      >
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e00" />
            <stop offset="30%" stopColor="#ffea00" />
            <stop offset="60%" stopColor="#00ff99" />
            <stop offset="100%" stopColor="#aa00ff" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d="M 40 160 L 70 130 L 90 150 L 130 110 L 130 90 M 130 110 L 170 110 M 130 110 L 170 70 L 130 70 M 60 120 L 80 100 L 100 120 M 80 100 L 100 80 L 120 100"
          fill="none"
          stroke="url(#neonGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default NeonIconSVG;