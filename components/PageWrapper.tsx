'use client';

import { motion, Variants } from 'framer-motion';

// Define standard transitions for all pages
const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "elite" feel
      staggerChildren: 0.1 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.4 } 
  }
};

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};