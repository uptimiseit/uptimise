// "use client";

// import { motion } from "framer-motion";
// import { HiOutlineCheckBadge, HiOutlineShieldCheck } from "react-icons/hi2";
// import { DynamicIcon } from "../Navbar/DynamicIcon";

// export default function SuccessBenefits({ data }: { data: any[] }) {
//   return (
//     <section className="relative py-32 px-6 overflow-hidden">
//       {/* Container: High-Contrast Dark Vault */}
//       <div className="max-w-[1440px] mx-auto bg-[#020617] rounded-[4rem] relative overflow-hidden group">
        
//         {/* --- BACKGROUND DESIGN ELEMENTS --- */}
//         {/* Subtle Grid Pattern Overlay */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//              style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
//         {/* Large Decorative Icon with floating animation */}
//         <motion.div 
//           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[-10%] right-[-5%] text-blue-500/10 pointer-events-none hidden lg:block"
//         >
//           <HiOutlineCheckBadge size={600} />
//         </motion.div>

//         {/* Dynamic Blue Glow Pulse */}
//         <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

//         {/* --- CONTENT --- */}
//         <div className="relative z-10 px-10 md:px-20 py-24 md:py-32">
          
//           <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
//             <div className="flex-1 space-y-6">
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-3 text-blue-400"
//               >
//                 <HiOutlineShieldCheck size={20} className="animate-pulse" />
//                 <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono">
//                   Certification_Verified
//                 </span>
//               </motion.div>
//               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
//                 Engineered_for <br />
//                 <span className="text-blue-500 italic font-serif">Success</span>
//               </h2>
//             </div>
            
//             <p className="flex-1 text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-md pb-2 uppercase tracking-wide">
//               // Our architectural choices ensure your project achieves industrial-grade stability and investor confidence from day one.
//             </p>
//           </div>

//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {data.map((benefit, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="relative p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-500/50 transition-all duration-500 group/card"
//               >
//                 {/* Micro-Glow on hover */}
//                 <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-[2.5rem] opacity-0 group-hover/card:opacity-100 transition-opacity" />

//                 <div className="relative z-10 space-y-6">
//                   {/* Icon Frame */}
//                   <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover/card:bg-blue-600 group-hover/card:text-white group-hover/card:scale-110 transition-all duration-500">
//                     <DynamicIcon name={benefit.icon} />
//                   </div>

//                   <div className="space-y-4">
//                     <h4 className="text-2xl font-black uppercase tracking-tight text-white group-hover/card:text-blue-400 transition-colors">
//                       {benefit.title}
//                     </h4>
//                     <div className="h-[1px] w-12 bg-white/10 group-hover/card:w-full group-hover/card:bg-blue-500/30 transition-all duration-700" />
//                     <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium group-hover/card:text-slate-300">
//                       {benefit.desc || "Standardised outcome protocols verified through iterative testing and quality assurance cycles."}
//                     </p>
//                   </div>

//                   {/* Technical Footer per card */}
//                   <div className="pt-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
//                     <span className="text-[9px] font-mono font-bold text-blue-500/50 uppercase tracking-widest">
//                       // Status: Optimized
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Bottom Protocol String */}
//           <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//              <div className="flex gap-10">
//                 {['Scalability_Check', 'Redundancy_Active', 'Zero_Trust'].map(item => (
//                   <span key={item} className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">{item}</span>
//                 ))}
//              </div>
//              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">// Security_Audit_Passed_2026</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { HiOutlineCheckBadge, HiOutlineShieldCheck } from "react-icons/hi2";
import { DynamicIcon } from "../Navbar/DynamicIcon";

export default function SuccessBenefits({ data }: { data: any[] }) {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Main Container with Glowing Border */}
      <div className="max-w-[1440px] mx-auto bg-[#020617] rounded-[4rem] relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
        
        {/* --- DYNAMIC BACKGROUND LAYERS --- */}
        
        {/* 1. Higher Visibility Grid */}
        <div 
          className="absolute inset-0 opacity-[0.1] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`, 
            backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* 2. Large Decorative Stamp (Visible) */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 text-blue-500 pointer-events-none hidden lg:block"
        >
          <HiOutlineCheckBadge size={700} />
        </motion.div>

        {/* 3. The "Light Source" - Stronger Blue Glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full pointer-events-none" />

        {/* --- CONTENT --- */}
        <div className="relative z-10 px-8 md:px-20 py-24 md:py-32">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono text-blue-400">
                  Protocol_Execution_Verified
                </span>
              </motion.div>

              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                <span className="relative">
                  Engineered
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-blue-600" />
                </span> 
                <br />
                For <span className="text-blue-500 italic font-serif lowercase">Success</span>
              </h2>
            </div>
            
            <div className="flex-1">
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md border-l-2 border-blue-600/30 pl-8">
                // Our architectural choices ensure your project achieves industrial-grade stability and investor confidence from day one.
              </p>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group/card relative p-10 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] hover:border-blue-500/50 transition-all duration-500"
              >
                {/* Internal Card Glow */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover/card:opacity-100 blur-2xl transition-opacity rounded-[3rem]" />

                <div className="relative z-10 space-y-8">
                  {/* Floating Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover/card:border-blue-500 group-hover/card:bg-blue-600 group-hover/card:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-500">
                    <DynamicIcon name={benefit.icon} className="group-hover/card:text-white" />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase tracking-tight text-white group-hover/card:text-blue-400">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {benefit.desc || "Standardised outcome protocols verified through iterative testing and quality assurance cycles."}
                    </p>
                  </div>

                  {/* Micro Technical Tag */}
                  <div className="pt-4 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    <span className="text-[9px] font-mono text-blue-500/50 uppercase tracking-widest font-bold">
                      Module_Status: Optimized
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Footer */}
          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
             <div className="flex gap-10">
                {['Scalability_Check', 'Redundancy_Active', 'Zero_Trust'].map(item => (
                  <span key={item} className="text-[9px] font-mono text-white uppercase tracking-[0.3em]">{item}</span>
                ))}
             </div>
             <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] animate-pulse">
               // Secure_Link_Established_2026
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}