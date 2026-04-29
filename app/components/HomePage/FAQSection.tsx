"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, Rocket, Sparkles, ChevronDown } from 'lucide-react';
import { AiFillOpenAI, AiFillThunderbolt } from "react-icons/ai";

// Define the shape of our FAQ data
interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "How does AI make development faster?",
    answer: "AI automates high-volume, repetitive tasks such as documentation generation, boilerplate scaffolding, and unit testing. This eliminates the 'manual labor' of coding, allowing our engineers to dedicate 100% of their bandwidth to system design and solving complex business logic.",
    icon: <Zap size={20} className="text-blue-400" />
  },
  {
    question: "Does AI reduce code quality?",
    answer: "On the contrary, it enhances it. AI acts as a first-pass auditor, catching syntax errors and pattern inconsistencies instantly. However, all final architecture decisions, peer code reviews, and quality gate-checks are handled by our elite human engineers to ensure enterprise-grade integrity.",
    icon: <ShieldCheck size={20} className="text-emerald-400" />
  },
  {
    question: "What type of projects do you work on?",
    answer: "We specialize in high-complexity digital products including AI-native SaaS platforms, cross-platform mobile applications, blockchain ecosystems, and enterprise-level automation systems designed for global scale.",
    icon: <Rocket size={20} className="text-purple-400" />
  },
  {
    question: "How do you ensure security?",
    answer: "Security is baked into our 'AI-Native' DNA. We implement OWASP-aligned security practices, continuous infrastructure monitoring, and strict cloud security policies. Our AI agents also perform real-time vulnerability scanning throughout the CI/CD lifecycle.",
    icon: <Sparkles size={20} className="text-orange-400" />
  }
];

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, toggle }) => {
  return (
    <div 
      className={`border-b border-slate-800 last:border-0 transition-all duration-300 ${
        isOpen ? 'bg-slate-800/40' : 'hover:bg-slate-800/20'
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-700 shadow-inner group-hover:border-slate-500 transition-colors">
            {faq.icon}
          </div>
          <span className="text-lg font-medium text-slate-100">{faq.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
        >
          <ChevronDown className="text-slate-500" size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[72px] text-slate-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-slate-950 min-h-screen relative overflow-hidden">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* 2. Top-Right Decorative Orb */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-600/10 rounded-full blur-[60px]" />

      {/* 3. Floating AI Icon (Top Left Corner area) */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className='absolute top-10 left-10 z-10 text-slate-700 text-4xl hidden lg:block'
      >
        <AiFillOpenAI size={60} />
      </motion.div>

         <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className='absolute bottom-10 right-10 z-10 text-slate-700 text-4xl hidden lg:block'
      >
        <AiFillOpenAI size={60} />
      </motion.div>


        <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className='absolute bottom-40 left-10 z-10 text-slate-700 text-4xl hidden lg:block'
      >
        <AiFillThunderbolt size={60} />
      </motion.div>


   <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className='absolute top-40 right-10 z-10 text-slate-700 text-4xl hidden lg:block'
      >
        <AiFillThunderbolt size={90} />
      </motion.div>


      {/* <AiFillThunderbolt /> */}

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full"
          >
            Help Center
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg font-light">
            Everything you need to know about our AI-driven process.
          </p>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-slate-900/40 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Still have questions?{" "}
            <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30">
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}