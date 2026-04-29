// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { 
//   ClipboardList, Layers, Code2, 
//   ShieldCheck, Terminal, Cpu, 
//   ChevronRight, Activity, 
// } from 'lucide-react';
// import Link from 'next/link';

// const agents = [
//   {
//     title: "AI Product Manager",
//     desc: "Transforms vision into high-fidelity roadmaps and sprint plans.",
//     icon: ClipboardList,
//     color: "blue",
//     size: "col-span-12 lg:col-span-4",
//     link: "/solutions/product-scaling"
//   },
//   {
//     title: "AI Coding Agent",
//     desc: "Generates enterprise-grade scaffolding and production modules with 100x velocity.",
//     icon: Code2,
//     color: "blue",
//     size: "col-span-12 lg:col-span-8",
//     featured: true,
//     link: "/industries/ai-startup"
//   },
//   {
//     title: "AI Architecture",
//     desc: "Designs scalable system topologies and database schemas.",
//     icon: Layers,
//     color: "slate",
//     size: "col-span-12 lg:col-span-4",
//     link: "/industries/ai-native"
//   },
//   {
//     title: "AI QA Agent",
//     desc: "Autonomous testing pipelines with 99.9% edge-case detection.",
//     icon: ShieldCheck,
//     color: "slate",
//     size: "col-span-12 lg:col-span-4",
//     link: "/solutions/ai-business-automation"
//   },
//   {
//     title: "AI DevOps",
//     desc: "Zero-touch CI/CD and cloud infrastructure provisioning.",
//     icon: Terminal,
//     color: "slate",
//     size: "col-span-12 lg:col-span-4",
//     link: "/solutions/mvp-development"
//   }
// ];

// const EcosystemSectionDark = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-6 overflow-hidden">
//       {/* Background Engineering Grid - Adapted for Dark Mode */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
//       {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" /> 


//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Block */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 space-y-4 flex items-center flex-col lg:flex-row justify-between text-center lg:text-left"
//         >
//           <h2 className="text-4xl md:text-5xl font-black font-header tracking-tighter text-white leading-[0.85]">
//             The Engineering <br />
//             <span className="text-blue-500 italic">Ecosystem.</span>
//           </h2>

//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm mt-4 lg:mt-0">
//             <Cpu className="text-blue-400 animate-pulse" size={14} />
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
//               Agentic Workforce v4.0
//             </span>
//           </div>
//         </motion.div>

//         {/* Bento Grid */}
//         <motion.div 
//           className="grid grid-cols-12 gap-4 auto-rows-min"
//           // variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {agents.map((agent, i) => (
//             <Link href={agent.link} key={i} className={agent.size}>
//             <motion.div
//               key={i}
//               // variants={cardVariants}
//               whileHover={{ 
//                 y: -8,
//                 transition: { duration: 0.3 }
//               }}
//               className={`relative group ${agent.size} rounded-[2.5rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-slate-700 hover:bg-slate-800/80`}
//             >
//               {/* Interactive Background Glow */}
//               <div className="absolute -inset-20 bg-blue-500/0 group-hover:bg-blue-500/10 blur-[100px] rounded-full transition-all duration-700 pointer-events-none" />

//               <div className="relative z-10 h-full flex flex-col justify-between gap-12">
//                 <div className="flex justify-between items-start">
//                   <motion.div 
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className={`p-4 rounded-2xl border ${agent.featured ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' : 'bg-slate-800 border-slate-700 text-blue-400'}`}
//                   >
//                     {React.createElement(agent.icon, { size: 28 })}
//                   </motion.div>
                  
//                   {agent.featured && (
//                     <motion.div 
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="flex items-center gap-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20"
//                     >
//                       <Activity size={12} className="text-blue-400 animate-pulse" />
//                       <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">Core_Engine</span>
//                     </motion.div>
//                   )}
//                 </div>

//                 <div className="space-y-4">
//                   <h3 className={`font-header font-black tracking-tight ${agent.featured ? 'text-4xl lg:text-5xl' : 'text-2xl'} text-white`}>
//                     {agent.title}
//                   </h3>
//                   <p className="text-slate-400 font-body leading-relaxed max-w-sm text-sm">
//                     {agent.desc}
//                   </p>
                  
//                   <Link href={agent.link} >
//                   <motion.div 
//                     initial={{ opacity: 0, x: -10 }}
//                     whileHover={{ opacity: 1, x: 0 }}
//                     className="flex items-center gap-2 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer opacity-70 group-hover:opacity-100 transition-all"
//                   >
//                     Initialize Protocol <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                   </motion.div>
//                   </Link>
//                 </div>
//               </div>

//               {/* Decorative Vector Lines (Bottom Right) */}
//               <div className="absolute bottom-[-20px] right-[-20px] opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-500 text-blue-400">
//                  <svg width="160" height="160" viewBox="0 0 120 120">
//                     <motion.circle 
//                       cx="120" cy="120" r="100" 
//                       fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" 
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                     />
//                     <circle cx="120" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
//                  </svg>
//               </div>
//             </motion.div>
//             </Link>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default EcosystemSectionDark;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, Layers, Code2, 
  ShieldCheck, Terminal, Cpu, 
  ChevronRight, Activity, 
} from 'lucide-react';
import Link from 'next/link';

const agents = [
  {
    title: "AI Product Manager",
    desc: "Transforms vision into high-fidelity roadmaps and sprint plans.",
    icon: ClipboardList,
    size: "col-span-12 lg:col-span-4",
    link: "/solutions/product-scaling"
  },
  {
    title: "AI Coding Agent",
    desc: "Generates enterprise-grade scaffolding and production modules with 100x velocity.",
    icon: Code2,
    size: "col-span-12 lg:col-span-8",
    featured: true,
    link: "/industries/ai-startup"
  },
  {
    title: "AI Architecture",
    desc: "Designs scalable system topologies and database schemas.",
    icon: Layers,
    size: "col-span-12 lg:col-span-4",
    link: "/industries/ai-native"
  },
  {
    title: "AI QA Agent",
    desc: "Autonomous testing pipelines with 99.9% edge-case detection.",
    icon: ShieldCheck,
    size: "col-span-12 lg:col-span-4",
    link: "/solutions/ai-business-automation"
  },
  {
    title: "AI DevOps",
    desc: "Zero-touch CI/CD and cloud infrastructure provisioning.",
    icon: Terminal,
    size: "col-span-12 lg:col-span-4",
    link: "/solutions/mvp-development"
  }
];

const EcosystemSectionDark = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 to-slate-900 py-24 px-6 overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" /> 

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 flex flex-col lg:flex-row items-center lg:items-end justify-between text-center lg:text-left"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase">
              The Engineering <br />
              <span className="text-blue-500 italic">Ecosystem.</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-xl mt-6 lg:mt-0">
            <Cpu className="text-blue-400 animate-pulse" size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 font-mono">
              Agentic Workforce v4.0
            </span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {agents.map((agent, i) => (
            <Link 
              href={agent.link} 
              key={i} 
              className={`${agent.size} group relative`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full relative rounded-[3rem] border border-slate-800 bg-slate-900/40 backdrop-blur-md p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/30 hover:border-blue-500/30 hover:bg-slate-800/60 flex flex-col justify-between min-h-[320px]"
              >
                {/* Interactive Background Glow */}
                <div className="absolute -inset-20 bg-blue-500/0 group-hover:bg-blue-600/10 blur-[120px] rounded-full transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className={`p-5 rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      agent.featured 
                        ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/20' 
                        : 'bg-slate-800 border-slate-700 text-blue-400'
                    }`}>
                      {React.createElement(agent.icon, { size: 32 })}
                    </div>
                    
                    {agent.featured && (
                      <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-1.5 rounded-full border border-blue-400/30">
                        <Activity size={12} className="text-blue-400 animate-pulse" />
                        <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest font-mono">Core_Engine</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className={`font-black tracking-tight uppercase ${
                      agent.featured ? 'text-4xl lg:text-5xl' : 'text-2xl'
                    } text-white`}>
                      {agent.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed max-w-sm text-sm font-medium">
                      {agent.desc}
                    </p>
                  </div>
                </div>

                {/* Internal Protocol Link (Now just a visual Div) */}
                <div className="relative z-10 pt-8 mt-auto">
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Initialize Protocol 
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Vector Lines */}
                <div className="absolute bottom-[-30px] right-[-30px] opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 text-blue-400 rotate-12">
                   <svg width="200" height="200" viewBox="0 0 120 120">
                      <motion.circle 
                        cx="120" cy="120" r="100" 
                        fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      <circle cx="120" cy="120" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" />
                   </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSectionDark;