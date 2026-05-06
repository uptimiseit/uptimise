"use client";

import { motion } from "framer-motion";

export default function TechStackSection({ data }: { data: string[] }) {
  // Filter out any empty strings and duplicates
  const tags = Array.from(new Set(data.filter((tag) => tag && tag.trim() !== "")));

  if (tags.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden relative border-y border-slate-50">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          
          {/* Section Label */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Integrated_Technology_Graph
            </span>
            <div className="h-[1px] w-12 bg-slate-200" />
          </motion.div>

          {/* Tech Grid */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-5xl">
            {tags.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative px-8 py-3 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 transition-all duration-300 group-hover:border-blue-600 group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)]">
                  {/* Small Tech Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors animate-pulse" />
                  
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Protocol String */}
          <div className="mt-4 text-[9px] font-mono text-slate-300 uppercase tracking-widest">
            // Full_Stack_Interoperability_Verified
          </div>
        </div>
      </div>
    </section>
  );
}