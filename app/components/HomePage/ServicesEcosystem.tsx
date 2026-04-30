// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { 
//   Cpu, Code2, Database, Radio, 
//   Cloud, Palette, TrendingUp, ArrowUpRight, 
//   ArrowRight,
  
// } from 'lucide-react';
// import Link from 'next/link';

// const serviceGroups = [
//   {
//     title: "AI Product Development",
//     icon: Cpu,
//     color: "from-blue-500/10 to-blue-600/5",
//     accent: "text-blue-600",
//     items: ["SaaS Platforms", "AI Applications", "Automation Systems"],
//     link: "/solutions/ai-products"
//   },
//   {
//     title: "Software Engineering",
//     icon: Code2,
//     color: "from-slate-500/10 to-slate-600/5",
//     accent: "text-slate-600",
//     items: ["Web Applications", "Mobile Apps", "Enterprise Platforms"],
//     link: "/services/software-engineering"
//   },
//   {
//     title: "Blockchain Engineering",
//     icon: Database,
//     color: "from-purple-500/10 to-purple-600/5",
//     accent: "text-purple-600",
//     items: ["Smart Contracts", "Web3 Applications", "Crypto Wallets"],
//     link: "/services/blockchain-engineering"
//   },
//   {
//     title: "IoT & Embedded",
//     icon: Radio,
//     color: "from-emerald-500/10 to-emerald-600/5",
//     accent: "text-emerald-600",
//     items: ["Embedded Firmware", "Sensor Integration", "IoT Platforms"],
//     link: "/services/iot"
//   },
//   {
//     title: "Cloud & DevOps",
//     icon: Cloud,
//     color: "from-cyan-500/10 to-cyan-600/5",
//     accent: "text-cyan-600",
//     items: ["AWS / Google Cloud", "Docker & Kubernetes", "CI/CD Pipelines"],
//     link: "/services/cloud-devops"
//   },
//   {
//     title: "Product Design & UX",
//     icon: Palette,
//     color: "from-pink-500/10 to-pink-600/5",
//     accent: "text-pink-600",
//     items: ["UX Research", "UI Design", "Design Systems"],
//     link: "/services/product-design-ux"
//   },
//   {
//     title: "Digital Growth",
//     icon: TrendingUp,
//     color: "from-orange-500/10 to-orange-600/5",
//     accent: "text-orange-600",
//     items: ["AI-Powered Marketing", "SEO / SMO", "Analytics Dashboards"],
//     link: "/solutions/digital-growth"
//   }
// ];

// // --- Animation Variants ---
// // const containerVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.1,
// //       delayChildren: 0.2,
// //     },
// //   },
// // };

// // const cardVariants: Variants = {
// //   hidden: { opacity: 0, y: 20, scale: 0.98 },
// //   visible: { 
// //     opacity: 1, 
// //     y: 0, 
// //     scale: 1,
// //     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
// //   },
// // };

// const ServicesEcosystem = () => {
//   return (
//     <section className="relative bg-white py-20 px-6 overflow-hidden">
//       {/* Background Engineering Pattern */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex items-center gap-4 justify-between flex-col lg:flex-row mb-16 space-y-6"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
//               Expertise Matrix v2.0
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] text-center lg:text-right">
//             Service <br />
//             <span className="text-blue-600 italic">Ecosystem.</span>
//           </h2>
//         </motion.div>

//         {/* Bento Grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
//           // variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {serviceGroups.map((group, i) => (
//             <Link href={group.link} key={i} className="w-full">
//             <motion.div
//               key={i}
//               // variants={cardVariants}
//               whileHover={{ 
//                 y: -8,
//                 transition: { duration: 0.3 }
//               }}
//               className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${group.color} border border-slate-100 flex flex-col justify-between group transition-shadow duration-500 hover:shadow-2xl cursor-pointer hover:shadow-blue-200/30 overflow-hidden ${i === 0 ? 'lg:col-span-2' : ''}`}
//             >
//               {/* Animated Background Icon */}
//               <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-15 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
//                  {React.createElement(group.icon, { size: 140 })}
//               </div>

//               <div className="space-y-8 relative z-10">
//                 <motion.div 
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                   className={`p-4 bg-white rounded-2xl w-fit shadow-sm ${group.accent}`}
//                 >
//                   {React.createElement(group.icon, { size: 24 })}
//                 </motion.div>

//                 <div className="space-y-4">
//                   <h3 className="text-2xl font-bold font-header text-slate-950 tracking-tight leading-none uppercase">
//                     {group.title}
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {group.items.map((item, idx) => (
//                       <span key={idx} className="text-[10px] font-mono font-bold text-slate-500 bg-white/60 px-2 py-1 rounded-md border border-white/80 backdrop-blur-sm">
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-12 flex justify-end relative z-10">
//                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300 shadow-sm">
//                     <ArrowUpRight size={20} />
//                  </div>
//               </div>
//             </motion.div>
//             </Link>
//           ))}
//         </motion.div>

//         {/* Contact "Bridge" Card */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="p-8 md:p-12 mt-8 rounded-[3.5rem] bg-[#020617] flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer relative overflow-hidden border border-white/5 shadow-2xl"
//         >
//           {/* Background Glow */}
//           <div className="absolute inset-0 bg-blue-600/5 blur-[100px] group-hover:bg-blue-600/10 transition-all duration-700" />
          
//           <div className="absolute right-[-40px] top-[-40px] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none group-hover:rotate-[25deg] group-hover:scale-110">
//             <Cpu size={320} className="text-white" strokeWidth={1} />
//           </div>

//           {/* LEFT SIDE: Copy */}
//           <div className="relative z-10 space-y-4 text-left max-w-xl">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
//               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
//                 Active_Squad_Deployment
//               </span>
//             </div>
            
//             <div className="space-y-2">
//               <h4 className="text-3xl md:text-5xl font-black font-header text-white tracking-tighter leading-[1.1]">
//                 Need a custom <br /> 
//                 <span className="text-blue-500 italic">engineering squad?</span>
//               </h4>
//               <p className="text-slate-400 text-base font-medium max-w-md leading-relaxed">
//                 Scale your technical DNA with an elite AI-augmented team. 
//                 Engineered for speed, deployed in 48 hours.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Action Button */}
//           <div className="relative z-10 shrink-0 w-full md:w-auto">
//             <motion.button 
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="relative w-full md:w-auto px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] group/btn overflow-hidden"
//             >
//               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform duration-1000" />
              
//               <span className="relative flex items-center justify-center gap-3">
//                 Consult Our Lead Engineers
//                 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
//               </span>
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServicesEcosystem;

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Cpu, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  MonitorSmartphone 
} from 'lucide-react';

// 1. Data Structure for Services
const serviceGroups = [
  {
    title: "Software Engineering",
    link: "/services/software-engineering",
    icon: Code2,
    color: "from-blue-50 to-indigo-50",
    accent: "text-blue-600",
    items: ["Custom SaaS", "Web Ecosystems", "System Migration"]
  },
  {
    title: "AI & Automation",
    link: "/services/ai-automation",
    icon: Cpu,
    color: "from-purple-50 to-fuchsia-50",
    accent: "text-purple-600",
    items: ["Agentic Loops", "LLM Integration", "RAG Systems"]
  },
  {
    title: "UI/UX Architecture",
    link: "/services/product-design",
    icon: MonitorSmartphone,
    color: "from-rose-50 to-orange-50",
    accent: "text-rose-600",
    items: ["Experience Design", "Visual Systems", "Prototyping"]
  },
  {
    title: "QA & Reliability",
    link: "/services/ai-qa",
    icon: ShieldCheck,
    color: "from-emerald-50 to-teal-50",
    accent: "text-emerald-600",
    items: ["Autonomous QA", "Edge Case Detection", "Security"]
  }
];



export default function ServiceEcosystem() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Background Engineering Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 justify-between flex-col lg:flex-row mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
              Expertise Matrix v2.0
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[0.85] text-center lg:text-right uppercase">
            Service <br />
            <span className="text-blue-600 italic">Ecosystem.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceGroups.map((group, i) => (
            <Link href={group.link} key={i} className={`w-full group ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <motion.div
                // variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`relative h-full p-8 rounded-[2.5rem] bg-gradient-to-br ${group.color} border border-slate-100 flex flex-col justify-between transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-200/30 overflow-hidden`}
              >
                {/* Background Icon Watermark */}
                <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                   {React.createElement(group.icon, { size: 140 })}
                </div>

                <div className="space-y-8 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-white rounded-2xl w-fit shadow-sm ${group.accent}`}
                  >
                    {React.createElement(group.icon, { size: 24 })}
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-none uppercase">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, idx) => (
                        <span key={idx} className="text-[9px] font-mono font-bold text-slate-500 bg-white/60 px-2 py-1 rounded-md border border-white/80 backdrop-blur-sm uppercase">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-end relative z-10">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300 shadow-sm border border-slate-100">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Contact "Bridge" Card */}
        <Link href="/contact">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="p-8 md:p-12 mt-8 rounded-[3.5rem] bg-[#020617] flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer relative overflow-hidden border border-white/5 shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/5 blur-[100px] group-hover:bg-blue-600/10 transition-all duration-700" />
            
            <div className="absolute right-[-40px] top-[-40px] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none group-hover:rotate-[25deg] group-hover:scale-110">
              <Cpu size={320} className="text-white" strokeWidth={1} />
            </div>

            <div className="relative z-10 space-y-4 text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
                  Active_Squad_Deployment
                </span>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                  Need a custom <br /> 
                  <span className="text-blue-500 italic">engineering squad?</span>
                </h4>
                <p className="text-slate-400 text-base font-medium max-w-md leading-relaxed">
                  Scale your technical DNA with an elite AI-augmented team. 
                  Engineered for speed, deployed in 48 hours.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full md:w-auto px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-xl group/btn overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-center gap-3">
                  Consult Our Lead Engineers
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </Link>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}