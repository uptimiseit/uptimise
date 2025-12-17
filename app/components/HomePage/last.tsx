"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  LayoutDashboard, 
  PenTool, 
  Code2, 
  BarChart3, 
  SearchCheck,
  ArrowRight
} from "lucide-react";

// --- Configuration Data ---
const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    description: "We capture your exact business needs to ensure a personalized development roadmap.",
    icon: <SearchCheck className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800&h=500", 
  },
  {
    title: "UI/UX Design & Approval",
    description: "Streamline design approvals with interactive prototypes before writing a single line of code.",
    icon: <PenTool className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Agile Development",
    description: "Watch your product come to life with clean, scalable code. Bi-weekly sprints keep you in the loop.",
    icon: <Code2 className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Deployment & Monitoring",
    description: "We launch your app to the cloud and set up real-time monitoring to ensure 99.9% uptime.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm font-semibold mb-6"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Our Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Transparency through <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-amber-600">
              Technology & Craft.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Just like you track a construction project, track your App & Website development in real-time. No black boxes, just clear progress.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* --- CENTER SPINE (Desktop) / LEFT SPINE (Mobile) --- */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2">
             {/* The Animated Golden Line */}
             <motion.div 
                style={{ height: heightTransform }}
                className="absolute top-0 left-0 w-full bg-linear-to-b from-yellow-400 via-amber-500 to-yellow-400 origin-top shadow-[0_0_12px_rgba(245,158,11,0.5)]"
             />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-32">
            {PROCESS_STEPS.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ step, index }: { step: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      
      {/* 1. CONTENT HALF */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
        <div className="relative z-10">
            {/* Watermark Number */}
            <span className={`absolute -top-10 text-9xl font-bold text-slate-200/50 select-none -z-10 ${isEven ? '-right-6' : '-left-6'}`}>
                0{index + 1}
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
              {step.description}
            </p>

            <button className={`inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                Learn more <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* 2. CENTER NODE */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-yellow-600 rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center">
             {step.icon}
        </div>
      </div>

      {/* 3. IMAGE HALF */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-20' : 'md:pr-20'}`}>
        <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-64 w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100"
        >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
                src={step.image} 
                alt={step.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phase 0{index + 1}</span>
                </div>
            </div>
        </motion.div>
      </div>

    </motion.div>
  );
};