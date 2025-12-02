'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'vision',
    label: 'Vision',
    color: '#FF6B6B', // Red
    text: "To be the world's best and most trusted human experience design company"
  },
  {
    id: 'mission',
    label: 'Mission',
    color: '#4D4DFF', // Blue
    text: "To enhance and elevate human interaction"
  },
  {
    id: 'values',
    label: 'Values',
    color: '#22c55e', // Green
    text: "Integrity, Innovation, and Inclusivity are at the core of everything we build."
  }
];

const VisionMissionScroll = () => {
  const [activeSection, setActiveSection] = useState('vision');

  // We use this function to handle the intersection logic
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger exactly when the item is in the middle of the screen
      threshold: 0,
    });

    // Observe all text sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* --- LEFT SIDE: Sticky Navigation --- */}
        <div className="w-full md:w-1/3">
          <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-start gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="text-3xl md:text-5xl font-bold transition-colors duration-300 text-left"
                style={{
                  color: activeSection === section.id ? section.color : '#E5E7EB', // Active color vs Gray
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: Scrollable Content --- */}
        <div className="w-full md:w-2/3 flex flex-col gap-32 pb-32 pt-10">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: "-20%" }}
              className="min-h-[50vh] flex items-center"
            >
              <h2 className="text-3xl md:text-6xl font-bold text-black leading-tight">
                {section.text}
              </h2>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionMissionScroll;