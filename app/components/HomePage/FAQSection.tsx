'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-10 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Static Header Stage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <HelpCircle className="text-blue-600" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
                Support_Registry::v1.0
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.9]">
              Common <br />
              <span className="text-blue-600 italic">Queries.</span>
            </h2>
            
            <p className="text-lg text-slate-500 italic font-body leading-relaxed max-w-sm">
              Everything you need to know about our AI-Native Software Factory and engineering philosophy.
            </p>

            <div className="pt-8">
              <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full transition-all group-hover:bg-blue-600/40" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Still have questions?</h4>
                <button className="flex items-center gap-3 text-blue-400 font-mono text-xs font-black tracking-widest uppercase hover:text-white transition-colors relative z-10">
                  <MessageCircle size={18} /> Open Support Ticket
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className={`rounded-[2rem] border transition-all duration-500 ${
                  activeIdx === i ? 'bg-slate-50 border-blue-100 shadow-xl shadow-blue-100/20' : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-3 rounded-xl transition-colors ${activeIdx === i ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                      {faq.icon}
                    </div>
                    <span className="text-xl font-bold text-slate-950 font-header tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transition-transform duration-500 ${activeIdx === i ? 'rotate-180' : ''}`}>
                    {activeIdx === i ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-300" />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pl-24 text-slate-500 font-body leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;