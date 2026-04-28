// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { MoveRight, Cpu, Zap, Activity, Target } from 'lucide-react';
// import Link from 'next/link';

// const PhilosophySectionDark = () => {
//   // Animation Variants (Left commented out as in your original code)
//   // const containerVariants = { ... };
//   // const fadeInUp = { ... };
//   // const cardVariants = { ... };

//   return (
//     <section className="relative text-white py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center">
      
//       {/* --- MODERN BLOCK BACKGROUND DESIGN --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
//         {/* Engineering Grid - Adapted for Dark Mode */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
//         {/* Decorative Floating "Data Blocks" with Motion */}
//         <motion.div 
//           animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 left-10 w-32 h-32 bg-blue-900/20 border border-blue-800/50 rounded-xl backdrop-blur-sm" 
//         />
//         <motion.div 
//           animate={{ y: [0, 20, 0], rotate: [-6, -10, -6] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-40 right-20 w-24 h-24 bg-slate-800/30 border border-slate-700/50 rounded-lg backdrop-blur-sm" 
//         />
        
//         {/* Radial Gradient to fade edges into darkness */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Block */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="justify-between flex flex-col md:flex-row items-start md:items-center mb-16 space-y-4"
//         >
//           <span className="text-blue-400 font-mono tracking-widest text-sm uppercase font-bold">
//             # Engineering Philosophy
//           </span>
//           <h2 className="text-3xl md:text-5xl text-left md:text-right font-bold tracking-tight text-white leading-[0.9]">
//             The 100× Engineer <br />
//             <span className="text-slate-500">Philosophy.</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Content Column */}
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-8 font-body text-lg text-slate-400 leading-relaxed"
//           >
//             <motion.p className="text-white text-2xl font-semibold leading-snug">
//               The Future of Software Development Is <span className="text-blue-400">AI-Augmented Engineering.</span>
//             </motion.p>
            
//             <motion.p>
//               For decades, building digital products required large engineering teams working 
//               through long development cycles. Projects often moved slowly due to 
//               complex coordination, manual workflows, and fragmented processes.
//             </motion.p>

//             {/* Dark mode divider */}
//             <motion.div className="h-px bg-slate-800 w-full" />

//             <motion.p>
//               Today, a new model is emerging. Advances in artificial intelligence, 
//               automation systems, and modern engineering tools are enabling a new class 
//               of developers — engineers who can build and ship products 
//               significantly faster than traditional teams.
//             </motion.p>

//             <motion.div>
//               <Link href={"/Explore100x"}>
//                 <button aria-label="Uptimiseit" className="flex items-center gap-4 text-white group cursor-pointer pt-4 hover:text-blue-400 transition-all duration-300">
//                   <span className="font-bold text-xl uppercase tracking-tighter">
//                     Explore the 100× Workflow
//                   </span>
//                   <div className="p-2 rounded-full border border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
//                     <MoveRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                   </div>
//                 </button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Bento Grid Visual Column */}
//           <div className="relative">
//             {/* Darker Glow background */}
//             <motion.div 
//               animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
//               transition={{ duration: 10, repeat: Infinity }}
//               className="absolute -inset-20 bg-blue-600/20 blur-[100px] rounded-full" 
//             />
            
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="relative z-10 border border-slate-800 rounded-3xl bg-slate-900/40 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
//             >
//               <div className="grid grid-cols-2 gap-4">
                
//                 {/* Feature Cards */}
//                 <motion.div 
//                   whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                   className="p-6 bg-slate-900 border h-60 border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition-all"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
//                     <Cpu className="text-blue-400 size-5" />
//                   </div>
//                   <h4 className="text-white font-bold">AI-Augmented</h4>
//                   <p className="text-xs text-slate-400 font-medium">Multiply productivity through orchestrated agents.</p>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-slate-900 border h-60 border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition-all"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
//                     <Zap className="text-purple-400 size-5" />
//                   </div>
//                   <h4 className="text-white font-bold">Rapid Velocity</h4>
//                   <p className="text-xs text-slate-400 font-medium">Zero friction from idea to production-ready code.</p>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 h-60 shadow-lg hover:border-slate-700 transition-all"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
//                     <Activity className="text-emerald-400 size-5" />
//                   </div>
//                   <h4 className="text-white font-bold">Elite Density</h4>
//                   <p className="text-xs text-slate-400 font-medium">Small teams outperforming large agencies.</p>
//                 </motion.div>

//                 <motion.div 
//                   whileHover={{ y: -5 }}
//                   className="p-6 bg-slate-900 border h-60 border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition-all"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
//                     <Target className="text-orange-400 size-5" />
//                   </div>
//                   <h4 className="text-white font-bold">Product-First</h4>
//                   <p className="text-xs text-slate-400 font-medium font-body">
//                     Building digital ecosystems, not just software.
//                   </p>
//                 </motion.div>

//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default PhilosophySectionDark;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Cpu, Zap, Activity, Target } from 'lucide-react';
import Link from 'next/link';

const PhilosophySectionDark = () => {
  // Animation Variants (Left commented out as in your original code)
  // const containerVariants = { ... };
  // const fadeInUp = { ... };
  // const cardVariants = { ... };

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center">
      
      {/* --- MODERN BLOCK BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        {/* Engineering Grid - Adapted for Dark Mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Decorative Floating "Data Blocks" with Motion */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-900/20 border border-blue-800/50 rounded-xl backdrop-blur-sm" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [-6, -10, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-24 h-24 bg-slate-800/30 border border-slate-700/50 rounded-lg backdrop-blur-sm" 
        />
        
        {/* Radial Gradient to fade edges into darkness */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="justify-between flex flex-col md:flex-row items-start md:items-center mb-16 space-y-4"
        >
          <span className="text-blue-400 font-mono tracking-widest text-sm uppercase font-bold">
            # Engineering Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl text-left md:text-right font-bold tracking-tight text-white leading-[0.9]">
            The 100× Engineer <br />
            <span className="text-slate-500">Philosophy.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 font-body text-lg text-slate-400 leading-relaxed"
          >
            <motion.p className="text-white text-2xl font-semibold leading-snug">
              The Future of Software Development Is <span className="text-blue-400">AI-Augmented Engineering.</span>
            </motion.p>
            
            <motion.p>
              For decades, building digital products required large engineering teams working 
              through long development cycles. Projects often moved slowly due to 
              complex coordination, manual workflows, and fragmented processes.
            </motion.p>

            {/* Dark mode divider */}
            <motion.div className="h-px bg-slate-800 w-full" />

            <motion.p>
              Today, a new model is emerging. Advances in artificial intelligence, 
              automation systems, and modern engineering tools are enabling a new class 
              of developers — engineers who can build and ship products 
              significantly faster than traditional teams.
            </motion.p>

            <motion.div>
              <Link href={"/Explore100x"}>
                <button aria-label="Uptimiseit" className="flex items-center gap-4 text-white group cursor-pointer pt-4 hover:text-blue-400 transition-all duration-300">
                  <span className="font-bold text-xl uppercase tracking-tighter">
                    Explore the 100× Workflow
                  </span>
                  <div className="p-2 rounded-full border border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <MoveRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Bento Grid Visual Column */}
          <div className="relative">
            {/* Darker Glow background */}
            <motion.div 
              animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -inset-20 bg-blue-600/20 blur-[100px] rounded-full" 
            />
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 border border-slate-800 rounded-3xl bg-slate-900/40 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            >
              <div className="grid grid-cols-2 gap-4">
                
                {/* Feature Cards - Updated to Vibrant Contrast Colors */}
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 border h-60 border-blue-400/50 rounded-2xl space-y-3 shadow-xl hover:shadow-blue-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <Cpu className="text-white size-5" />
                  </div>
                  <h4 className="text-white font-bold">AI-Augmented</h4>
                  <p className="text-xs text-blue-100 font-medium">Multiply productivity through orchestrated agents.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 border h-60 border-purple-400/50 rounded-2xl space-y-3 shadow-xl hover:shadow-purple-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <Zap className="text-white size-5" />
                  </div>
                  <h4 className="text-white font-bold">Rapid Velocity</h4>
                  <p className="text-xs text-purple-100 font-medium">Zero friction from idea to production-ready code.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 border border-emerald-400/50 rounded-2xl space-y-3 h-60 shadow-xl hover:shadow-emerald-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <Activity className="text-white size-5" />
                  </div>
                  <h4 className="text-white font-bold">Elite Density</h4>
                  <p className="text-xs text-emerald-100 font-medium">Small teams outperforming large agencies.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 border h-60 border-orange-400/50 rounded-2xl space-y-3 shadow-xl hover:shadow-orange-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <Target className="text-white size-5" />
                  </div>
                  <h4 className="text-white font-bold">Product-First</h4>
                  <p className="text-xs text-orange-100 font-medium font-body">
                    Building digital ecosystems, not just software.
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySectionDark;