"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "../Navbar/DynamicIcon";

export default function ChallengesSection({ data }: { data: any[] }) {
  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Logic */}
        <div className="mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="w-12 h-[2px] bg-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
              Critical_Barriers
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Why Startups <span className="text-blue-600 italic font-serif lowercase">stall</span>
          </h2>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Animated Border/Glow Layer */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-slate-200 to-transparent rounded-[2.5rem] group-hover:from-blue-600 transition-all duration-500" />
              
              <div className="relative h-full p-10 bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-hidden">
                
                {/* Step Numbering */}
                <span className="absolute top-8 right-10 text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none">
                  0{idx + 1}
                </span>

                {/* Icon Treatment */}
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-200 transition-all duration-500 transform group-hover:rotate-6">
                  <DynamicIcon name={item.icon} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="w-8 h-[2px] bg-slate-100 group-hover:w-full group-hover:bg-blue-100 transition-all duration-500 mb-6" />
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Registry String */}
        <div className="mt-20 flex justify-center">
            <p className="text-[9px] font-mono text-slate-300 uppercase tracking-[0.5em] animate-pulse">
              // Systematic_Barrier_Analysis_Complete
            </p>
        </div>
      </div>
    </section>
  );
}