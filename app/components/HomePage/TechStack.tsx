"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a standard utils file, otherwise remove cn
import { 
  FaReact, FaAngular, FaJs, FaCss3Alt, FaNodeJs, FaPython, FaAws, FaDocker, FaFigma, FaSketch 
} from "react-icons/fa";
import { 
  SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, 
  SiGoogleanalytics, SiHubspot, SiMailchimp 
} from "react-icons/si";

// 1. Data Configuration
const categories = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Javascript", icon: FaJs, color: "#F7DF1E" },
      { name: "CSS 3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
  },
  {
    id: "design",
    label: "Designing Tools",
    items: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing Tools",
    items: [
      { name: "Analytics", icon: SiGoogleanalytics, color: "#E37400" },
      { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B" },
      { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeContent = categories.find((cat) => cat.id === activeTab);

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies and Platforms We Use
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We leverage the latest and most reliable tools to build your digital solution.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "relative pb-4 text-lg font-medium transition-colors duration-300",
                activeTab === category.id ? "text-blue-600" : "text-gray-500 hover:text-gray-800"
              )}
            >
              {category.label}
              
              {/* Animated Underline */}
              {activeTab === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 w-full max-w-5xl"
            >
             {/* Replace the icon rendering part inside activeContent.items.map */}
{activeContent?.items.map((tech) => (
  <div 
    key={tech.name} 
    className="flex flex-col items-center justify-center group cursor-pointer"
  >
    {/* Removed text-gray-400 class and applied tech.color directly */}
    <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
      <tech.icon 
        style={{ color: tech.color }} // 🟢 Applies brand color by default
      />
    </div>
    <span className="text-lg font-medium text-gray-700">
      {tech.name}
    </span>
  </div>
))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}