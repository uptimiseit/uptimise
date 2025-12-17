"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { 
  LayoutDashboard, 
  PenTool, 
  Code2, 
  CreditCard, 
  BarChart3, 
  SearchCheck
} from "lucide-react";

// --- Configuration Data ---
const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    description: "We start by capturing your exact business needs to ensure a personalized development roadmap.",
    icon: <SearchCheck className="w-6 h-6 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=300", 
  },
  {
    title: "UI/UX Design & Approval",
    description: "Streamline design approvals with interactive prototypes before writing a single line of code.",
    icon: <PenTool className="w-6 h-6 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600&h=300",
  },
  {
    title: "Agile Development",
    description: "Watch your product come to life with clean, scalable code. Bi-weekly sprints keep you in the loop.",
    icon: <Code2 className="w-6 h-6 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=300",
  },
  {
    title: "Transparent Billing",
    description: "Get clear, precise cost breakdowns. No hidden hours, no surprise invoices.",
    icon: <CreditCard className="w-6 h-6 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=300",
  },
  {
    title: "Deployment & Monitoring",
    description: "We launch your app to the cloud and set up real-time monitoring to ensure 99.9% uptime.",
    icon: <BarChart3 className="w-6 h-6 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=300",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-20">
          <div className="w-12 h-12 border border-yellow-500/30 bg-yellow-50 rounded-lg flex items-center justify-center mb-6">
            <LayoutDashboard className="w-6 h-6 text-yellow-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-gray-900">
            Ensuring transparency <br />
            <span className="text-gray-400">through Technology.</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">
            Just like you track a construction project, track your App & Website development in real-time.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          
          {/* --- The Vertical Timeline Line --- */}
          {/* 1. The Gray Background Line (Lighter gray for white theme) */}
          <div className="absolute left-[27px] md:left-[27px] top-0 bottom-0 w-px bg-gray-200" />
          
          {/* 2. The Gold Progress Line (Animates on Scroll) */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[27px] md:left-[27px] top-0 h-full w-px bg-yellow-500 origin-top z-10"
          />

          {/* --- Timeline Items --- */}
          <div className="space-y-12 md:space-y-24 pb-24">
            {PROCESS_STEPS.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Sub-Component for Individual Steps ---
const TimelineItem = ({ step, index }: { step: any, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col md:flex-row gap-8 md:gap-16 pl-20 md:pl-24"
    >
      {/* Icon Marker (Absolute Positioned on the line) */}
      <div className="absolute left-0 top-0 z-20">
        <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center relative group transition-colors shadow-sm hover:border-yellow-500/50">
          {/* Subtle colored background on hover instead of glow */}
          <div className="absolute inset-0 bg-yellow-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          {step.icon}
        </div>
      </div>

      {/* Content Card - Light Theme Style */}
      <div className="flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group shadow-sm">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Text Section */}
          <div className="p-8 md:p-10 flex flex-col justify-center flex-1 bg-white">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Image/Preview Section */}
          <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden border-t md:border-t-0 md:border-l border-gray-100">
             {/* Overlay gradient to blend image into white theme */}
             <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent opacity-80 z-10" />
             <img 
               src={step.image} 
               alt={step.title}
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
             />
             
             {/* "UI Mockup" decoration inside image area */}
             <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 text-xs font-mono text-yellow-600 shadow-sm">
               Status: Active
             </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};