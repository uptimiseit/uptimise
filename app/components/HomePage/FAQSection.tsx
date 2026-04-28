'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Plus, Minus, HelpCircle, 
  MessageCircle, Sparkles, 
  ShieldCheck, Rocket, Zap 
} from 'lucide-react';

const faqs = [
  {
    question: "How does AI make development faster?",
    answer: "AI automates high-volume, repetitive tasks such as documentation generation, boilerplate scaffolding, and unit testing. This eliminates the 'manual labor' of coding, allowing our engineers to dedicate 100% of their bandwidth to system design and solving complex business logic.",
    icon: <Zap size={18} className="text-blue-600" />
  },
  {
    question: "Does AI reduce code quality?",
    answer: "On the contrary, it enhances it. AI acts as a first-pass auditor, catching syntax errors and pattern inconsistencies instantly. However, all final architecture decisions, peer code reviews, and quality gate-checks are handled by our elite human engineers to ensure enterprise-grade integrity.",
    icon: <ShieldCheck size={18} className="text-emerald-600" />
  },
  {
    question: "What type of projects do you work on?",
    answer: "We specialize in high-complexity digital products including AI-native SaaS platforms, cross-platform mobile applications, blockchain ecosystems, and enterprise-level automation systems designed for global scale.",
    icon: <Rocket size={18} className="text-purple-600" />
  },
  {
    question: "How do you ensure security?",
    answer: "Security is baked into our 'AI-Native' DNA. We implement OWASP-aligned security practices, continuous infrastructure monitoring, and strict cloud security policies. Our AI agents also perform real-time vulnerability scanning throughout the CI/CD lifecycle.",
    icon: <Sparkles size={18} className="text-orange-600" />
  }
];

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//   }
// };

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

// const accordionVariants: Variants = {
//   hidden: { opacity: 0, x: 20 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.5, ease: "easeOut" } 
//   }
// };

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-slate-900 py-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // variants={containerVariants}
        >
          
          {/* LEFT: Header Stage */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
            // variants={fadeInUp} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <HelpCircle className="text-blue-600 animate-pulse" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
                Support_Registry::v1.0
              </span>
            </motion.div>
            
            <motion.h2 
            // variants={fadeInUp}
             
            className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-50 leading-[0.85] uppercase">
              Common <br />
              <motion.span 
                animate={{ color: ["#2563eb", "#6366f1", "#2563eb"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-blue-200 italic"
              >
                Queries.
              </motion.span>
            </motion.h2>
            
            <motion.p 
            // variants={fadeInUp}
             className="text-lg text-slate-200 font-medium leading-relaxed max-w-sm">
              Everything you need to know about our AI-Native Software Factory and engineering philosophy.
            </motion.p>

            <motion.div 
            // variants={fadeInUp}
             className="pt-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full transition-all group-hover:bg-blue-600/40" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Still have questions?</h4>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-blue-400 font-mono text-xs font-black tracking-widest uppercase hover:text-white transition-colors relative z-10"
                >
                  <MessageCircle size={18} /> Open Support Ticket
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                // variants={accordionVariants}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  activeIdx === i 
                  ? 'bg-slate-50 border-blue-200 shadow-xl shadow-blue-100/20' 
                  : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <button 
                    aria-label="Uptimiseit"
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      animate={activeIdx === i ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      className={`p-3 rounded-xl transition-colors ${activeIdx === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-400'}`}
                    >
                      {faq.icon}
                    </motion.div>
                    <span className={`text-xl font-bold font-header tracking-tight transition-colors ${activeIdx === i ? 'text-slate-950' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div 
                    animate={{ rotate: activeIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "anticipate" }}
                  >
                    {activeIdx === i ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-300" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-10 pl-24 text-slate-500 font-body leading-relaxed text-lg font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;