"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import team from "@/public/json/team.json"
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// --- 1. THE GEOMETRIC FACE ANIMATION COMPONENT ---
// This replicates the "Lion/Face" constellation effect from the video.
const ConstellationFace = () => {
  // Coordinates for the dots (Approximate "Face" shape)
  // [x, y, color]
  const nodes = [
    // Center Face
    { x: 200, y: 200, color: "#000" }, // Nose
    { x: 170, y: 170, color: "#000" }, // Eye L
    { x: 230, y: 170, color: "#000" }, // Eye R
    { x: 180, y: 240, color: "#000" }, // Mouth L
    { x: 220, y: 240, color: "#000" }, // Mouth R
    { x: 200, y: 260, color: "#000" }, // Chin

    // Inner Ring (Purple/Pink)
    { x: 200, y: 120, color: "#d946ef" }, // Top
    { x: 120, y: 200, color: "#8b5cf6" }, // Left
    { x: 280, y: 200, color: "#8b5cf6" }, // Right
    { x: 140, y: 280, color: "#d946ef" }, // Bottom L
    { x: 260, y: 280, color: "#d946ef" }, // Bottom R

    // Outer Ring (Red/Blue accents)
    { x: 200, y: 60, color: "#ef4444" },
    { x: 60, y: 200, color: "#3b82f6" },
    { x: 340, y: 200, color: "#3b82f6" },
    { x: 100, y: 100, color: "#ef4444" },
    { x: 300, y: 100, color: "#ef4444" },
    { x: 100, y: 300, color: "#3b82f6" },
    { x: 300, y: 300, color: "#3b82f6" },
  ];

  // Connections (Which index connects to which)
  const links = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], // Nose connections
    [1, 6], [2, 6], // Eyes to top
    [1, 7], [3, 7], // Left side
    [2, 8], [4, 8], // Right side
    [5, 9], [3, 9], // Chin to Bottom L
    [5, 10], [4, 10], // Chin to Bottom R
    [6, 11], [6, 13], [6, 14], // Top connections
    [7, 12], [8, 12], // Side outers
    [9, 15], [10, 16] // Bottom outers
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
        {/* Draw Lines First (so they are behind dots) */}
        {links.map(([start, end], i) => (
          <motion.line
            key={`link-${i}`}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="#e5e7eb" // Light gray lines
            strokeWidth="1"
            strokeDasharray="4 4" // Dotted lines like video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}

        {/* Draw Dots */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={i < 6 ? 6 : 4} // Inner face dots are bigger
            fill={node.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: 1,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1, // Stagger effect
              },
              opacity: { duration: 0.5 }
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// --- 2. ANIMATION HELPERS ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- 3. MAIN PAGE ---
export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 selection:text-pink-900">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl py-10 mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT: Typography */}
          <div className="w-full md:w-1/2">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
                Want To Join <br />
                <span className="text-gray-400">The Team ?</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-500 mt-2 font-medium">
                Be our next human <br /> experience designer
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Currently we don't <br /> have any openings.
              </h2>
            </FadeIn>
          </div>

          {/* RIGHT: Constellation Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2  flex justify-center md:justify-end"
          >
            {/* <ConstellationFace /> */}
               <Lottie
                                    animationData={team}
                                    loop={true}
                                    className="w-96 h-96" // Use Tailwind to control size
                                />
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM SECTION: "MORE ABOUT US" --- */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h3 className="text-pink-500 font-bold tracking-widest text-sm uppercase">More About Us</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD 1: About Us */}
            <Link href="/about">
              <FadeIn delay={0.1} className="h-full">
                <div className="bg-pink-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-pink-100 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-black">About Us</h3>
                    <p className="text-gray-600 text-sm">We are super-efficient yet humble to serve you!</p>
                  </div>
                  <div className="flex justify-end ">
                    <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </FadeIn>
            </Link>

            {/* CARD 2: Team */}
            <Link href="/team">
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-purple-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-purple-100 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-black">Team</h3>
                    <p className="text-gray-600 text-sm">We are proud of our experienced and accomplished team!</p>
                  </div>
                  <div className="flex justify-end ">
                    <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </FadeIn>
            </Link>

          </div>
        </div>
      </section>
      
   

    </div>
  );
}