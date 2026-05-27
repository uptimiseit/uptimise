// components/HeroAnimationWrapper.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WrapperProps {
  children: React.ReactNode;
}

export default function HeroAnimationWrapper({ children }: WrapperProps) {
  // Container variants that control the orchestrating timeline
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, // The delay interval between each child fading in
        delayChildren: 0.1     // Initial micro-delay before execution kicks off
      }
    }
  };

  // Content block animation rules using standard cubic-bezier easing vectors
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        // cast ease to any to satisfy framer-motion TypeScript types for cubic-bezier arrays
        ease: [0.16, 1, 0.3, 1] as any // Custom easeOutExponential curve for a sleek presentation
      } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="space-y-8 relative z-10"
    >
      {/* 
        This block dynamically loops through each immediate child element,
        wrapping them smoothly inside an animated motion layer so you don't 
        have to duplicate <motion.div> code all over your core structure.
      */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div variants={itemVariants}>
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
}