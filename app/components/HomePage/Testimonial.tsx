"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA CONFIGURATION ---

const founderData = [
  {
    id: 1,
    name: "Jugal Shah",
    role: "Founder, Head of UX",
    bio: "Behavioral science and Neuromarketing expert. Leading the vision for next-gen digital experiences.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Co-Founder, CTO",
    bio: "Expert in scalable architecture and AI integration. ensuring our solutions are as robust as they are beautiful.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Strategy",
    bio: "Former management consultant focused on digital transformation and business growth ROI.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
  },
];

const testimonialData = [
  {
    id: 1,
    name: "Robb Fahrion",
    role: "C.E.O. - FVG",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they've continued to deliver quality over and over again.",
  },
  {
    id: 2,
    name: "Emily Watson",
    role: "Marketing Director - TechFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    quote: "The attention to detail and the understanding of our user base was phenomenal. They didn't just design a website; they crafted a journey for our customers.",
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Founder - StartUp Inc",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "Exceptional delivery speed without compromising on quality. The behavioral insights they applied significantly increased our conversion rates.",
  },
];

const FounderAndTestimonials = () => {
  // --- STATE MANAGEMENT ---
  const [currentFounder, setCurrentFounder] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // --- HANDLERS ---
  const nextFounder = () => {
    setCurrentFounder((prev) => (prev + 1) % founderData.length);
  };

  const prevFounder = () => {
    setCurrentFounder((prev) => (prev === 0 ? founderData.length - 1 : prev - 1));
  };

  // Optional: Auto-play for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 font-sans space-y-12">
      
      {/* --- SECTION 1: MEET THE FOUNDER SLIDER --- */}
      <div className="w-full bg-white border border-gray-300 rounded-xl overflow-hidden flex flex-col md:flex-row h-auto min-h-[400px] md:h-[350px]">
        
        {/* Left: Static Title */}
        <div className="w-full md:w-[35%] p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50">
          <h2 className="text-5xl font-extrabold text-black leading-tight tracking-tighter mb-6">
            Meet<br />The<br />Team
          </h2>
          {/* Founder Navigation Arrows */}
          <div className="flex space-x-4">
            <button onClick={prevFounder} className="p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextFounder} className="p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right: Dynamic Content */}
        <div className="w-full md:w-[65%] relative p-8 md:p-12 overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFounder}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center h-full relative"
            >
              {/* Decorative Dots */}
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5555]"></div>
                <div className="w-3 h-3 rounded-full bg-[#9F45FF]"></div>
                <div className="w-3 h-3 rounded-full bg-[#4F46E5]"></div>
              </div>

              {/* Name & Bio */}
              <div className="z-10 relative max-w-sm">
                <h3 className="text-3xl font-bold text-black mb-2">
                  {founderData[currentFounder].name}
                </h3>
                <p className="text-gray-700 text-sm font-medium leading-relaxed mb-4">
                  {founderData[currentFounder].role}<br />
                  {founderData[currentFounder].bio}
                </p>
                
                <a href={founderData[currentFounder].linkedin} className="inline-block text-blue-600 hover:text-blue-700 mb-6">
                  <Linkedin size={24} fill="currentColor" strokeWidth={0} />
                </a>

                {/* Awards */}
                <div className="flex flex-wrap gap-2 opacity-60 grayscale">
                  <div className="border border-gray-400 rounded px-2 py-1 text-[10px] font-serif text-center">
                    <span className="font-bold">Clutch</span><br/>Top Expert
                  </div>
                  <div className="border border-gray-400 rounded px-2 py-1 text-[10px] font-serif text-center">
                    <span className="font-bold">Awwards</span><br/>Winner
                  </div>
                </div>
              </div>

              {/* Founder Image */}
              <motion.img 
                key={`img-${currentFounder}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                src={founderData[currentFounder].image}
                alt={founderData[currentFounder].name}
                className="absolute bottom-0 right-0 h-[250px] md:h-[110%] object-contain grayscale contrast-110 -mr-4 md:-mr-8 opacity-20 md:opacity-100 pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- SECTION 2: TESTIMONIALS SLIDER --- */}
      <div className="w-full bg-gray-50 rounded-xl p-5 md:p-16 min-h-[400px] relative overflow-hidden">
        
        <AnimatePresence mode="wait">
            <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-12 h-full"
            >
                {/* Left: Reviewer Info */}
                <div className="flex flex-col items-center text-center md:w-1/4 pt-4">
                <img 
                    src={testimonialData[currentTestimonial].image}
                    alt={testimonialData[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover grayscale mb-4 shadow-md"
                />
                <h4 className="font-bold text-black text-lg">{testimonialData[currentTestimonial].name}</h4>
                <p className="text-xs text-black font-medium uppercase tracking-wide">{testimonialData[currentTestimonial].role}</p>
                </div>

                {/* Right: Review Content */}
                <div className="flex-1 flex flex-col justify-center h-full">
                    {/* Header: Quote Icon + Stars */}
                    <div className="mb-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-black mb-4">What Clients Say</h3>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                        <Quote className="text-blue-300 transform rotate-180 -mt-1" size={40} fill="currentColor" stroke="none" />
                        <div className="flex space-x-1 pt-1">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="text-[#6366F1]" fill="currentColor" stroke="none" />
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm md:text-xl text-gray-800 leading-relaxed mb-8 font-medium text-center md:text-left italic">
                        "{testimonialData[currentTestimonial].quote}"
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>

        {/* Pagination Dots (Absolute positioned at bottom) */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center md:justify-start md:pl-[30%] space-x-2">
            {testimonialData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentTestimonial === index 
                        ? "bg-blue-600 w-6" 
                        : "bg-blue-300 hover:bg-blue-500"
                    }`}
                />
            ))}
        </div>

      </div>
    </div>
  );
};

export default FounderAndTestimonials;