'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

// Import your JSON files
import market from "@/public/json/marketing.json"
import tech from "@/public/json/TEchnology.json"
import design from "@/public/json/design.json"
// Assuming you have a server.json, if not, it will use tech as a fallback
import serverAnim from "@/public/json/TEchnology.json" 

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// --- DATA ---
const services = [
  {
    id: "01",
    title: "Design",
    description: "Crafting intuitive and beautiful interfaces.",
    color: "#FF4D4D",
    bg: "bg-[#FFF5F5]",
    subItems: ["UI Design", "UX Design", "UX Consultancy", "Design System", "Animation", "Illustrations"],
    animation: design
  },
  {
    id: "02",
    title: "Technology",
    description: "Building robust and scalable solutions.",
    color: "#4D4DFF",
    bg: "bg-[#F5F5FF]",
    subItems: ["Web Development", "Softwares", "Mobile Apps", "Front-End", "Back-End", "Cloud Services"],
    animation: tech
  },
  {
    id: "03",
    title: "Marketing",
    description: "Strategizing for maximum brand impact.",
    color: "#1F1F1F",
    bg: "bg-[#F9F9F9]",
    subItems: ["Branding", "Brand Name", "Brand Guidelines", "Strategy", "Digital Marketing", "S.E.O."],
    animation: market
  },
  {
    id: "04",
    title: "Server",
    description: "High-performance backend and cloud architecture.",
    color: "#10b981", // Emerald Green
    bg: "bg-[#F0FDF4]",
    subItems: ["Cloud Hosting", "DevOps", "Database Design", "API Security", "Serverless", "Scalability"],
    animation: serverAnim
  }
];

// --- COMPONENTS ---

const Card = ({ i, service, progress, range, targetScale }: { i: number; service: typeof services[0]; progress: MotionValue<number>; range: [number, number]; targetScale: number; }) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${i * 30}px)` }} 
        className={`relative flex flex-col w-full max-w-7xl mx-auto h-[75vh] rounded-[3rem] border border-gray-200 shadow-2xl overflow-hidden origin-top ${service.bg}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* --- LEFT: Text Content --- */}
          <div className="p-8 md:p-16 flex flex-col justify-between h-full relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ backgroundColor: service.color }}>
                  {service.id}
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Services</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[0.9]">{service.title}</h2>
              <p className="text-xl text-gray-600 font-medium max-w-sm">{service.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-8">
              {service.subItems.map((item, idx) => (
                <div key={idx} className="group flex items-center gap-3 cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:scale-150 transition-transform duration-300" /> 
                  <span className="text-lg text-gray-500 font-medium group-hover:text-gray-900 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: Visuals --- */}
          <div className="relative h-full w-full bg-white/50 border-l border-gray-100 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `linear-gradient(${service.color} 1px, transparent 1px), linear-gradient(90deg, ${service.color} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
             <div className="w-3/4 h-3/4 relative">
                <Lottie animationData={service.animation} loop={true} className="w-full h-full object-contain drop-shadow-2xl" />
             </div>
             <div className="absolute bottom-8 right-8 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                render_{service.title.toLowerCase()}.js
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="w-full relative bg-white pb-20">
      
      {/* STICKY HEADER: This stays fixed while cards scroll */}
      <div className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur-sm">
        <div className="w-full py-12 text-center">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Capabilities</h3>
          <p className="text-4xl font-black text-gray-900">What we do best</p>
        </div>
      </div>

      <div className="px-4 md:px-12 relative">
        {services.map((service, i) => {
          // targetScale adjusted for 4 cards (0.04 step instead of 0.05)
          const targetScale = 1 - ((services.length - i) * 0.04); 
          const rangeStart = i * 0.2; // Adjusted range for 4 cards
          const rangeEnd = 1;

          return (
            <Card 
              key={service.id} 
              i={i} 
              service={service}
              progress={scrollYProgress}
              range={[rangeStart, rangeEnd]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}