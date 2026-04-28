// "use client";

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Cpu, Rocket, Code2, ShieldCheck, Workflow, Binary } from 'lucide-react';



// const AIOSFactory = () => {
//   return (
//     <section className="relative bg-linear-to-br from-white to-green-50 py-16 px-6 overflow-hidden">
//       {/* Background Decor: The Factory Blueprint */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      
//       <motion.div 
//         className="max-w-7xl mx-auto relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         // variants={staggerContainer}
//       >
//         <motion.div className="text-center max-w-3xl mx-auto mb-16 space-y-6"
//         //  variants={fadeInUp}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
//             <Workflow className="text-blue-600 size-4" />
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">
//               Operational Framework 01
//             </span>
//           </div>
          
//           <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.9]">
//             The AI-Native <br />
//             <span className="text-blue-600">Software Factory.</span>
//           </h2>
          
//           <p className="text-sm text-slate-500 font-body leading-relaxed">
//             A hybrid ecosystem where elite human ingenuity meets autonomous intelligence 
//             to accelerate the entire product lifecycle.
//           </p>
//         </motion.div>

//         {/* The Factory Flow Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Column 1: Planning & Architecture */}
//           <div className="space-y-8">
//             <motion.div 
//               // variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-slate-50/50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
//             >
//               <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <Binary className="text-blue-600" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-950 mb-4 font-header">Intelligent Planning</h3>
//               <p className="text-slate-500 text-sm leading-relaxed font-body">
//                 AI agents convert product vision into structured roadmaps and technical 
//                 requirements instantly, eliminating the "planning gap."
//               </p>
//             </motion.div>

//             <motion.div 
//               // variants={fadeInUp}
//               className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-500/20 transition-all"
//             >
//                <div className="flex items-center gap-4 mb-6">
//                   <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
//                   <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">System Architecture</span>
//                </div>
//                <p className="text-slate-900 font-bold mb-2">Automated Schema Design</p>
//                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                   <motion.div 
//                     // variants={barAnimation}
//                     className="h-full bg-blue-600 relative overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-shimmer" />
//                   </motion.div>
//                </div>
//             </motion.div>
//           </div>

//           {/* Column 2: The Core (Visual Highlight) */}
//           <motion.div 
//             // variants={fadeInUp}
//             whileHover={{ scale: 1.01 }}
//             className="relative h-full min-h-[400px] lg:min-h-0 bg-slate-950 rounded-[3rem] p-10 overflow-hidden flex flex-col justify-end group shadow-2xl"
//           >
//             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
//             <motion.div 
//               animate={{ 
//                 scale: [1, 1.2, 1],
//                 opacity: [0.2, 0.4, 0.2]
//               }}
//               transition={{ duration: 8, repeat: Infinity }}
//               className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" 
//             />
            
//             <div className="relative z-10 space-y-6">
//               <motion.div 
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="p-4 bg-white/10 backdrop-blur-md rounded-3xl w-fit"
//               >
//                 <Cpu className="text-blue-400" size={40} />
//               </motion.div>
//               <h3 className="text-4xl font-black text-white font-header tracking-tight">
//                 AI Coding <br />Orchestrator.
//               </h3>
//               <p className="text-slate-400 text-sm font-body leading-relaxed">
//                 Our proprietary AI Coding Agent generates backend APIs, frontend components, 
//                 and infrastructure scaffolding with mathematical precision.
//               </p>
//               <div className="pt-4 border-t border-white/10 flex justify-between items-center text-blue-400 font-mono text-[10px] font-bold tracking-widest">
//                 <span>STATUS: OPTIMIZED</span>
//                 <span>EFFICIENCY: +340%</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Column 3: Quality & Deployment */}
//           <div className="space-y-8 lg:mt-12">
//             <motion.div 
//               // variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group p-8 bg-slate-50/50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all"
//             >
//               <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
//                 <ShieldCheck className="text-emerald-500" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-950 mb-4 font-header">Autonomous QA</h3>
//               <p className="text-slate-500 text-sm leading-relaxed font-body">
//                 AI-driven testing pipelines detect bugs and security vulnerabilities 
//                 before they ever reach production. Zero-compromise quality.
//               </p>
//             </motion.div>

//             <motion.div 
//               // variants={fadeInUp}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="group p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 cursor-pointer overflow-hidden relative"
//             >
//               <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-6">
//                   <Rocket size={32} />
//                   <div className="text-[10px] font-mono bg-white/20 px-3 py-1 rounded-full">CD/CI ACTIVE</div>
//                 </div>
//                 <h3 className="text-2xl font-bold font-header mb-2 tracking-tight text-white">Rapid Deployment</h3>
//                 <p className="text-blue-100 text-xs font-body leading-relaxed">
//                   Pushing world-class code at market-leading speed.
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//         </div>

//         {/* Bottom Proof Section */}
//         <motion.div 
//           // variants={fadeInUp}
//           className="mt-20 p-1 bg-slate-100 rounded-full max-w-2xl mx-auto flex items-center justify-between px-6 py-4"
//         >
//            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">The Result:</span>
//            <div className="flex gap-12 pr-6">
//               <div className="flex flex-col"><span className="text-slate-950 font-bold">2x</span><span className="text-[8px] text-slate-400 uppercase">Faster Build</span></div>
//               <div className="flex flex-col"><span className="text-slate-950 font-bold">0%</span><span className="text-[8px] text-slate-400 uppercase">Manual Debt</span></div>
//               <div className="flex flex-col"><span className="text-slate-950 font-bold">100%</span><span className="text-[8px] text-slate-400 uppercase">Scalable</span></div>
//            </div>
//         </motion.div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 2.5s infinite linear;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AIOSFactory;



'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cpu, Rocket, Code2, ShieldCheck, Workflow, Binary } from 'lucide-react';

const AIOSFactoryDark = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 to-slate-900 py-16 px-6 overflow-hidden">
      {/* Background Decor: The Factory Blueprint */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        // variants={staggerContainer}
      >
        <motion.div className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        //  variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm">
            <Workflow className="text-blue-400 size-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
              Operational Framework 01
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-white leading-[0.9]">
            The AI-Native <br />
            <span className="text-blue-500">Software Factory.</span>
          </h2>
          
          <p className="text-sm text-slate-100 font-body leading-relaxed">
            A hybrid ecosystem where elite human ingenuity meets autonomous intelligence 
            to accelerate the entire product lifecycle.
          </p>
        </motion.div>

        {/* The Factory Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Planning & Architecture */}
          <div className="space-y-8">
            <motion.div 
              // variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-slate-700 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Binary className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-header">Intelligent Planning</h3>
              <p className="text-slate-100 text-sm leading-relaxed font-body">
                AI agents convert product vision into structured roadmaps and technical 
                requirements instantly, eliminating the "planning gap."
              </p>
            </motion.div>

            <motion.div 
              // variants={fadeInUp}
              className="group p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-sm hover:border-blue-500/30 transition-all"
            >
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">System Architecture</span>
               </div>
               <p className="text-white font-bold mb-2">Automated Schema Design</p>
               <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    // variants={barAnimation}
                    className="h-full bg-blue-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-shimmer" />
                  </motion.div>
               </div>
            </motion.div>
          </div>

          {/* Column 2: The Core (Visual Highlight) */}
          <motion.div 
            // variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            className="relative h-full min-h-[400px] lg:min-h-0 bg-slate-950 border border-slate-800/50 rounded-[3rem] p-10 overflow-hidden flex flex-col justify-end group shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/30 blur-[100px] rounded-full" 
            />
            
            <div className="relative z-10 space-y-6">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl w-fit"
              >
                <Cpu className="text-blue-400" size={40} />
              </motion.div>
              <h3 className="text-4xl font-black text-white font-header tracking-tight">
                AI Coding <br />Orchestrator.
              </h3>
              <p className="text-slate-100 text-sm font-body leading-relaxed">
                Our proprietary AI Coding Agent generates backend APIs, frontend components, 
                and infrastructure scaffolding with mathematical precision.
              </p>
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-blue-400 font-mono text-[10px] font-bold tracking-widest">
                <span>STATUS: OPTIMIZED</span>
                <span>EFFICIENCY: +340%</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Quality & Deployment */}
          <div className="space-y-8 lg:mt-12">
            <motion.div 
              // variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] hover:bg-slate-800 hover:shadow-2xl hover:border-slate-700 transition-all"
            >
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <ShieldCheck className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-header">Autonomous QA</h3>
              <p className="text-slate-100 text-sm leading-relaxed font-body">
                AI-driven testing pipelines detect bugs and security vulnerabilities 
                before they ever reach production. Zero-compromise quality.
              </p>
            </motion.div>

            <motion.div 
              // variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-900/40 cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <Rocket size={32} />
                  <div className="text-[10px] font-mono bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">CD/CI ACTIVE</div>
                </div>
                <h3 className="text-2xl font-bold font-header mb-2 tracking-tight text-white">Rapid Deployment</h3>
                <p className="text-blue-100 text-xs font-body leading-relaxed">
                  Pushing world-class code at market-leading speed.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Proof Section */}
        <motion.div 
          // variants={fadeInUp}
          className="mt-20 p-1 bg-slate-900 border border-slate-800 rounded-full max-w-2xl mx-auto flex items-center justify-between px-6 py-4 shadow-lg"
        >
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-4">The Result:</span>
           <div className="flex gap-12 pr-6">
              <div className="flex flex-col"><span className="text-white font-bold">2x</span><span className="text-[8px] text-slate-500 uppercase">Faster Build</span></div>
              <div className="flex flex-col"><span className="text-white font-bold">0%</span><span className="text-[8px] text-slate-500 uppercase">Manual Debt</span></div>
              <div className="flex flex-col"><span className="text-white font-bold">100%</span><span className="text-[8px] text-slate-500 uppercase">Scalable</span></div>
           </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default AIOSFactoryDark;