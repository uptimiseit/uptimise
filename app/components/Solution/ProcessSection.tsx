"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function ProcessSection({ data, isDark = false }: { data: any[], isDark?: boolean }) {
  return (
    <section className={`py-32 px-6 overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Technical Metadata */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
              <span className={`text-[10px] font-black uppercase tracking-[0.4em] font-mono ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Operational_Flow_v3.0
              </span>
            </motion.div>
            <h2 className={`text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Delivery_<span className={isDark ? 'text-blue-500 italic font-serif' : 'text-blue-600 italic font-serif'}>Protocol</span>
            </h2>
          </div>
          <p className={`text-[10px] font-mono uppercase tracking-widest max-w-[200px] leading-relaxed hidden md:block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            // Systematically_Engineered_For_High_Performance_Scaling
          </p>
        </div>

        {/* The Stepper Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-4 border ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-12 group transition-all duration-500 hover:z-10 ${
                idx !== data.length - 1 ? (isDark ? 'md:border-r border-slate-800' : 'md:border-r border-slate-100') : ''
              } ${isDark ? 'hover:bg-blue-600' : 'hover:bg-slate-900'}`}
            >
              {/* Sequential Indicator */}
              <div className="flex items-center justify-between mb-12">
                <span className={`text-xs font-black font-mono tracking-widest transition-colors duration-500 ${
                  isDark ? 'text-blue-500 group-hover:text-white' : 'text-blue-600 group-hover:text-blue-400'
                }`}>
                  {item.step}
                </span>
                <HiOutlineArrowLongRight 
                  className={`text-2xl transition-all duration-500 transform -rotate-45 group-hover:rotate-0 ${
                    isDark ? 'text-slate-800 group-hover:text-white' : 'text-slate-100 group-hover:text-white'
                  }`} 
                />
              </div>

              {/* Card Content */}
              <div className="space-y-6">
                <h3 className={`text-3xl font-black uppercase tracking-tighter leading-none transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-slate-900 group-hover:text-white'
                }`}>
                  {item.title}
                </h3>
                <div className={`h-[2px] w-12 transition-all duration-500 group-hover:w-full ${
                  isDark ? 'bg-slate-800 group-hover:bg-blue-400' : 'bg-slate-100 group-hover:bg-blue-600'
                }`} />
                <p className={`text-sm leading-relaxed font-medium transition-colors duration-500 ${
                  isDark ? 'text-slate-400 group-hover:text-blue-50' : 'text-slate-500 group-hover:text-slate-300'
                }`}>
                  {item.desc}
                </p>
              </div>

              {/* Technical Backdrop (Step Number) */}
              <span className={`absolute bottom-4 right-8 text-8xl font-black transition-all duration-700 pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.1] group-hover:-translate-y-4 ${
                isDark ? 'text-white' : 'text-slate-900 group-hover:text-white'
              }`}>
                {idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* System Logs Footer */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
             {['ISO_9001', 'AGILE_SQUAD', 'ZERO_TRUST'].map((tag) => (
               <span key={tag} className={`text-[9px] font-black tracking-[0.2em] px-3 py-1 border rounded ${
                 isDark ? 'text-slate-600 border-slate-800' : 'text-slate-300 border-slate-100'
               }`}>
                 {tag}
               </span>
             ))}
          </div>
          <div className={`text-[10px] font-mono ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>
            // PHASE_{data.length}_ACTIVE_REACHED
          </div>
        </div>
      </div>
    </section>
  );
}