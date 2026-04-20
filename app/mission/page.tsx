'use client';

import React from "react";
import { motion, Variants } from "framer-motion";

// --- 1. STYLED ANIMATION VARIANTS ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const iconHover: Variants = {
//   hover: { 
//     scale: 1.1, 
//     rotate: 5,
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-hidden">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Animated Background Element */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-50 blur-[120px] rounded-full -z-10"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-6"
        >
          <motion.h3 
          // 
           className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
            Our Mission
          </motion.h3>
          <motion.h1 
          // 
           className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Empowering Organizations to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Build and Scale
            </span> Digital Platforms
          </motion.h1>
          <motion.p 
          // 
           className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Uptimise IT, our mission is to help organizations design, build, and scale modern digital products using intelligent engineering systems and modern technology infrastructure.
          </motion.p>
        </motion.div>
      </section>

      {/* --- SECTION 2: CORE STATEMENT --- */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-slate-100"
      >
        <p className="text-2xl font-medium text-slate-800 leading-relaxed italic">
          "We aim to simplify the process of building digital platforms by combining AI-assisted engineering workflows and scalable cloud infrastructure."
        </p>
      </motion.section>

      {/* --- SECTION 3: THE GAP & SOLUTION --- */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Making Technology More Accessible</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Uptimise IT works to bridge the gap by providing the technical expertise and engineering systems required to transform ideas into reliable technology platforms.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Human Expertise + Automation</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              AI tools assist with documentation, scaffolding, and testing. Our teams move faster while maintaining strong architectural and code quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: PRODUCT LIFECYCLE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // 
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Supporting the Entire Product Lifecycle</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission extends beyond software development. Successful products require a combination of design, engineering, and growth.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Product Design",
              desc: "Designing intuitive and user-focused digital experiences.",
              icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            },
            {
              title: "Software Development",
              desc: "Building scalable web platforms, mobile apps, and SaaS products.",
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            },
            {
              title: "DevOps & Cloud",
              desc: "Managing cloud environments and automated deployment systems.",
              icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            },
            {
              title: "Growth Systems",
              desc: "Helping platforms grow through data-driven acquisition strategies.",
              icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx} 
              
              whileHover="hover"
              className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/50 transition-all flex items-start space-x-6 cursor-default"
            >
              <motion.div 
                // variants={iconHover}
                className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 text-indigo-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- SECTION 5: CORE VALUES --- */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            { t: "Scalable Tech", d: "Systems designed with long-term performance and maintainability in mind." },
            { t: "Fostering Innovation", d: "A culture where product thinkers collaborate to solve complex problems." },
            { t: "Visionary Partners", d: "Working with startups and enterprises to shape the future of innovation." }
          ].map((val, i) => (
            <motion.div key={i}  className="space-y-4">
              <div className="w-8 h-1 bg-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold">{val.t}</h3>
              <p className="text-slate-400 leading-relaxed">{val.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- SECTION 6: CALL TO ACTION --- */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-none">
            Build the <span className="text-indigo-600">Future</span> <br /> With Uptimise IT
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Launch a new product or expand an existing platform with a partner focused on reliability and scalability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all text-lg"
            >
              Start Your Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all text-lg"
            >
              Book Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}