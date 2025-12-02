'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import React from 'react';
import market from "@/public/json/marketing.json"
import tech from "@/public/json/TEchnology.json"
import design from "@/public/json/design.json"


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


// --- DATA CONFIGURATION ---
const services = [
  {
    id: "01",
    title: "Design",
    color: "#FF4D4D", // Red
    subItems: ["UI Design", "UX Design", "UX Consultancy", "Design System", "Animation", "Illustrations"],
  },
  {
    id: "02",
    title: "Technology",
    color: "#4D4DFF", // Blue
    subItems: ["Web Development", "Softwares", "Mobile Apps", "Front-End", "Back-End", "Cloud Services"],
  },
  {
    id: "03",
    title: "Marketing",
    color: "#1F1F1F", // Black
    subItems: ["Branding", "Brand Name", "Brand Guidelines", "Strategy", "Digital Marketing", "S.E.O."],
  }
];

// --- CUSTOM ART COMPONENTS (The "Same Design" you asked for) ---

// 1. DESIGN ART: Pen Tool & Vector Paths
const DesignArt = () => (
  // <svg viewBox="0 0 400 300" className="w-full h-full p-4 overflow-visible">
  //   {/* Floating Palette */}
  //   <motion.g 
  //     initial={{ y: 10, opacity: 0 }} 
  //     whileInView={{ y: 0, opacity: 1 }} 
  //     transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
  //   >
  //     <rect x="50" y="50" width="80" height="100" rx="8" fill="white" stroke="#FF4D4D" strokeWidth="2" />
  //     <circle cx="90" cy="80" r="15" fill="#FF4D4D" opacity="0.2" />
  //     <circle cx="90" cy="120" r="15" fill="#FF4D4D" opacity="0.5" />
  //   </motion.g>

  //   {/* The Pen Tool Vector Path */}
  //   <motion.path
  //     d="M150 150 C 200 100, 300 100, 350 200"
  //     fill="none"
  //     stroke="#FF4D4D"
  //     strokeWidth="3"
  //     strokeLinecap="round"
  //     initial={{ pathLength: 0 }}
  //     whileInView={{ pathLength: 1 }}
  //     transition={{ duration: 2, ease: "easeInOut" }}
  //   />
    
  //   {/* Bezier Handles (The "Nodes") */}
  //   <motion.circle cx="150" cy="150" r="6" fill="white" stroke="#FF4D4D" strokeWidth="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
  //   <motion.circle cx="350" cy="200" r="6" fill="white" stroke="#FF4D4D" strokeWidth="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
    
  //   {/* Dotted Lines */}
  //   <line x1="150" y1="150" x2="200" y2="100" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
  //   <line x1="350" y1="200" x2="300" y2="100" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
  // </svg>
    <Lottie
                          animationData={design}
                          loop={true}
                          className="w-full h-full" // Use Tailwind to control size
                      />
);

// 2. TECHNOLOGY ART: Cloud & Server Connections
const TechArt = () => (
  // <svg viewBox="0 0 400 300" className="w-full h-full p-4 overflow-visible">
  //   {/* Central Cloud Icon */}
  //   <motion.path
  //     d="M140 160 C 140 140, 160 120, 190 125 C 200 105, 230 100, 250 120 C 270 120, 280 140, 280 160"
  //     fill="none"
  //     stroke="#4D4DFF"
  //     strokeWidth="3"
  //     strokeLinecap="round"
  //     initial={{ y: 10 }}
  //     whileInView={{ y: -10 }}
  //     transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
  //   />
  //   <motion.path d="M140 160 H 280" stroke="#4D4DFF" strokeWidth="3" strokeLinecap="round" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />

  //   {/* Connected Nodes */}
  //   <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
  //     <line x1="210" y1="160" x2="210" y2="220" stroke="#4D4DFF" strokeWidth="2" />
  //     <line x1="210" y1="220" x2="150" y2="250" stroke="#4D4DFF" strokeWidth="2" />
  //     <line x1="210" y1="220" x2="270" y2="250" stroke="#4D4DFF" strokeWidth="2" />
      
  //     {/* Server Boxes */}
  //     <rect x="130" y="240" width="40" height="30" rx="4" fill="white" stroke="#4D4DFF" strokeWidth="2" />
  //     <rect x="250" y="240" width="40" height="30" rx="4" fill="white" stroke="#4D4DFF" strokeWidth="2" />
      
  //     {/* Moving Data Packet */}
  //     <motion.circle 
  //       cx="210" cy="180" r="4" fill="#4D4DFF"
  //       animate={{ cy: [160, 220, 250], cx: [210, 210, 150] }}
  //       transition={{ duration: 2, repeat: Infinity }}
  //     />
  //   </motion.g>
  // </svg>

    <Lottie
                          animationData={tech}
                          loop={true}
                          className="w-full h-full" // Use Tailwind to control size
                      />
);

// 3. MARKETING ART: Analytics Graph & Target
const MarketingArt = () => (
  // <svg viewBox="0 0 400 300" className="w-full h-full p-4 overflow-visible">
  //   {/* Browser Window Frame */}
  //   <rect x="50" y="80" width="300" height="180" rx="8" fill="white" stroke="#1F1F1F" strokeWidth="2" />
  //   <line x1="50" y1="110" x2="350" y2="110" stroke="#1F1F1F" strokeWidth="1" />
  //   <circle cx="70" cy="95" r="3" fill="#1F1F1F" />
  //   <circle cx="85" cy="95" r="3" fill="#1F1F1F" opacity="0.5" />

  //   {/* Rising Graph Bars */}
  //   <g transform="translate(80, 230) scale(1, -1)">
  //     <motion.rect x="0" y="0" width="30" height="0" fill="#1F1F1F" opacity="0.3" whileInView={{ height: 40 }} transition={{ duration: 0.5 }} />
  //     <motion.rect x="50" y="0" width="30" height="0" fill="#1F1F1F" opacity="0.6" whileInView={{ height: 70 }} transition={{ duration: 0.5, delay: 0.2 }} />
  //     <motion.rect x="100" y="0" width="30" height="0" fill="#1F1F1F" opacity="0.9" whileInView={{ height: 110 }} transition={{ duration: 0.5, delay: 0.4 }} />
  //   </g>

  //   {/* "Like" Notification Bubble */}
  //   <motion.g 
  //     initial={{ scale: 0, x: 200, y: 100 }} 
  //     whileInView={{ scale: 1 }} 
  //     transition={{ type: "spring", delay: 1 }}
  //   >
  //     <rect x="280" y="60" width="60" height="40" rx="20" fill="#1F1F1F" />
  //     <text x="310" y="85" fill="white" fontSize="20" textAnchor="middle" alignmentBaseline="middle">♥</text>
  //   </motion.g>
  // </svg>

  <Lottie
                          animationData={market}
                          loop={true}
                          className="w-full h-full" // Use Tailwind to control size
                      />
);


// --- MAIN COMPONENTS ---

const TechCardBorder = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div className="relative w-full h-full p-8 md:p-12 flex items-center justify-center">
    {/* Main Border */}
    {/* <div className="absolute inset-0 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm"></div> */}
    
    {/* Tech Nodes (The little squares on the border) */}
    {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-white border border-gray-200 flex justify-between px-1">
        <div className="w-1 h-full bg-gray-300"></div><div className="w-1 h-full bg-gray-300"></div>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-1 bg-white border border-gray-200 flex justify-between px-1">
        <div className="w-1 h-full bg-gray-300"></div><div className="w-1 h-full bg-gray-300"></div>
    </div>
    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-1 bg-white border border-gray-200 flex flex-col justify-between py-1">
        <div className="h-1 w-full bg-gray-300"></div><div className="h-1 w-full bg-gray-300"></div>
    </div>
    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-12 w-1 bg-white border border-gray-200 flex flex-col justify-between py-1">
        <div className="h-1 w-full bg-gray-300"></div><div className="h-1 w-full bg-gray-300"></div>
    </div> */}

    {/* The Content */}
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  
  // Choose the correct Art based on the Service Title
  const renderArt = () => {
    switch(service.title) {
      case "Design": return <DesignArt />;
      case "Technology": return <TechArt />;
      case "Marketing": return <MarketingArt />;
      default: return null;
    }
  };

  return (
    <div className="sticky top-0 min-h-screen flex items-center justify-center bg-white overflow-hidden ">
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
        
        {/* --- Left Side: Text --- */}
        <div className="flex flex-col justify-center h-full order-2 lg:order-1">
          <div className="flex items-center gap-6 mb-8">
            {/* The Dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0 shadow-lg"
              style={{ backgroundColor: service.color }}
            />
            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
              {service.title}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="pl-14 md:pl-16"
          >
            <ul className="space-y-3">
              {service.subItems.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-lg md:text-2xl text-gray-500 font-medium hover:text-black cursor-pointer transition-colors flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- Right Side: Custom Tech Illustration --- */}
        <div className="order-1 lg:order-2 h-[400px] md:h-[600px] w-full p-4">
          <TechCardBorder color={service.color}>
             {renderArt()}
          </TechCardBorder>
        </div>

      </div>
    </div>
  );
};

const ServicesScroll = () => {
  return (
    <section className="w-full relative bg-white">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
};

export default ServicesScroll;