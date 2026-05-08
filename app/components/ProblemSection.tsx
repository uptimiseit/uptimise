"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Clock,
  Users,
  ArrowRight,
  ShieldAlert,
  ZapOff,
} from "lucide-react";
import Link from "next/link";

const ProblemSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" } as const,
    },
  };

  const alertVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: -2,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12,
        delay: 1, // Appears after the grid
      },
    },
  };

  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Background Tech-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: The "Friction Grid" Visual */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black font-header tracking-normal text-slate-900 leading-tight mb-10"
            >
              Traditional <br />
              Development <br />
              <span className="text-slate-200">Is Obsolete.</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {/* BIG TEAM & HIGH COST */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-4 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <Users className="text-slate-400" size={24} />
                  <span className="text-[10px] font-mono text-red-500 bg-red-50 px-2 py-1 rounded">
                    HIGH COST
                  </span>
                </div>
                <h3 className="font-bold text-slate-900">Big Teams</h3>
                <p className="text-xs text-slate-500 font-body leading-relaxed">
                  Massive overhead with diminishing returns on output.
                </p>
              </motion.div>

              {/* HUMAN ERROR */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/40 space-y-4 mt-8"
              >
                <div className="flex justify-between items-start">
                  <ShieldAlert className="text-orange-500" size={24} />
                  <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <h3 className="font-bold text-slate-900">Human Error</h3>
                <p className="text-xs text-slate-500 font-body leading-relaxed">
                  Manual workflows lead to inconsistent code and security risks.
                </p>
              </motion.div>

              {/* ZERO AGILITY */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-900 rounded-3xl space-y-4 -mt-4 text-white shadow-2xl"
              >
                <ZapOff className="text-blue-400" size={24} />
                <h3 className="font-bold">Zero Agility</h3>
                <p className="text-xs text-slate-400 font-body leading-relaxed">
                  Rigid structures that can't pivot to market demands.
                </p>
              </motion.div>

              {/* SLOW SPEED */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-4 shadow-sm"
              >
                <Clock className="text-slate-400" size={24} />
                <h3 className="font-bold text-slate-900">Slow Speed</h3>
                <p className="text-xs text-slate-500 font-body leading-relaxed">
                  Weeks spent on boilerplate that AI handles in seconds.
                </p>
              </motion.div>
            </div>

            {/* OVERLAY: Timeline Delay Alert */}
            <motion.div
              variants={alertVariants}
              animate={{
                x: ["-50%", "-49.5%", "-50.5%", "-50%"],
                y: ["-50%", "-50.5%", "-49.5%", "-50%"],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] bg-white border-2 border-red-500 p-5 rounded-2xl shadow-[0_20px_50px_rgba(239,68,68,0.3)] z-20"
            >
              <div className="flex items-center gap-3 text-red-600">
                <AlertCircle size={24} className="shrink-0 animate-pulse" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                    Timeline Risk Detected
                  </p>
                  <p className="text-base font-bold">
                    Delivery Delay: +12 Weeks
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: The Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-blue-600 font-mono text-sm font-bold tracking-widest uppercase italic">
                # The Friction Analysis
              </span>
            </div>

            <div className="space-y-6 text-xl text-slate-600 font-body leading-relaxed">
              <p className="text-slate-950 font-bold border-l-4 border-red-500 pl-6">
                Legacy agencies rely on{" "}
                <span className="text-red-600 underline decoration-2 underline-offset-4">
                  Big Teams
                </span>{" "}
                and manual labor, resulting in exponential{" "}
                <span className="text-red-600">Human Error</span>.
              </p>

              <p className="text-lg">
                The industry is plagued by{" "}
                <span className="font-bold text-slate-900">Slow Speed</span> and{" "}
                <span className="font-bold text-slate-900">Zero Agility</span>.
                Complex communication layers and fragmented processes aren't
                just bottlenecks—they are the primary cause of{" "}
                <span className="italic">Timeline Delays</span> and{" "}
                <span className="italic">Delivery Delays</span>.
              </p>
            </div>

            {/* The Pivot to Solution */}
            <Link href={"/solutions/ai-factory"}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                  Transition to Velocity
                </p>
                <div className="flex items-center justify-between gap-6">
                  <h4 className="text-2xl md:text-3xl font-black font-header text-slate-950 tracking-tight leading-tight">
                    Deploy the AI-Native <br />
                    Software Factory.
                  </h4>
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
