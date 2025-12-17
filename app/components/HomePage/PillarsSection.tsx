"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock } from "lucide-react";

export default function PillarsSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden py-24">
      
      {/* 1. Background Grid & Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] opacity-40 pointer-events-none" />
      {/* Central Warm Glow (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 2. The Floating Shield Icon */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            animate={{ y: [0, -10, 0] }}
            // @ts-ignore
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mb-8"
          >
            <div className="relative w-24 h-24 bg-white border border-slate-100 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(234,179,8,0.3)]">
               {/* Inner Glow */}
               <div className="absolute inset-0 bg-yellow-50 rounded-3xl opacity-50" />
               <ShieldCheck className="w-10 h-10 text-yellow-500 relative z-10" />
            </div>
          </motion.div>

          {/* 3. Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100"
          >
            Our Core Philosophy
          </motion.span>

          {/* 4. Main Headline */}
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // Darker Gold Gradient for White Background
              className="inline-block bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-amber-500 to-pink-600 drop-shadow-sm"
            >
              Transparency
            </motion.span>
            <br className="md:hidden" />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-4 text-blue-300 font-serif italic"
            >
              &
            </motion.span>
            <br className="md:hidden" />
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-amber-500 to-pink-600 drop-shadow-sm"
            >
              Trust.
            </motion.span>
          </h2>

          {/* 5. Subline with Animated Underline */}
          <div className="relative inline-block mt-2 mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-slate-500 font-light"
            >
              through technology
            </motion.p>
            {/* The SVG Squiggle Line (Darker Gold) */}
            <svg
              className="absolute -bottom-4 left-0 w-full h-4"
              viewBox="0 0 200 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2.00025 6.99997C2.00025 6.99997 53.3659 1.84908 98.914 2.12644C137.986 2.36437 199 5.5 199 5.5"
                stroke="#d97706" // amber-600
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* 6. The Two Pillars (Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            
            {/* Pillar 1: Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:border-yellow-200 transition-all duration-500"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-slate-100 shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-800 mb-3">Total Visibility</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No black boxes. You get access to our code repositories, project boards, and timesheets. Watch your product being built in real-time.
              </p>
            </motion.div>

            {/* Pillar 2: Trust */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:border-yellow-200 transition-all duration-500"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-slate-100 shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-800 mb-3">Security First</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We build with enterprise-grade security standards. Your intellectual property is protected by strict NDAs and secure infrastructure.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}