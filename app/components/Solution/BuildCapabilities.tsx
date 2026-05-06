"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "../Navbar/DynamicIcon";

export default function BuildCapabilities({ data }: { data: any[] }) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Protocol Styling */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
              Capabilities_Manifest
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            What_We_<span className="text-blue-600">Initialize</span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Inner Glow/Shadow effect */}
              <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-10 bg-white border border-slate-100 rounded-[2.5rem] group-hover:border-blue-600 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-100/50">
                
                {/* Decorative Tech Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 group-hover:bg-blue-600 transition-colors duration-500 rounded-bl-[2.5rem] flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-white animate-pulse" />
                </div>

                {/* Icon logic */}
                <div className="text-slate-400 group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-110 mb-8">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50">
                    <DynamicIcon name={item.icon} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-blue-400/60 transition-colors">
                      // Registry_ID: {idx.toString().padStart(3, '0')}
                    </p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                      Core_System_Module
                    </p>
                  </div>
                </div>

                {/* Bottom Scanning Line Animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-700" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Footer */}
        <div className="mt-20 border-t border-slate-100 pt-8 flex justify-between items-center opacity-40">
           <span className="text-[9px] font-mono font-bold uppercase tracking-widest">Initialization_Protocol_Ready</span>
           <span className="text-[9px] font-mono font-bold uppercase tracking-widest">© 2026_Uptimise_IT</span>
        </div>
      </div>
    </section>
  );
}