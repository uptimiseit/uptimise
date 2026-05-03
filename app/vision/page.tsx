'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Cpu, Zap, Fingerprint, Network, 
  Code2, Rocket, Terminal, Binary, Microscope,
  Lightbulb, Workflow, Boxes, ChevronRight,
  Sparkles,
  Link
} from 'lucide-react';
import FAQSection from '../components/HomePage/FAQSection';

const VisionPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
<section className="relative pt-40 pb-32 px-6 overflow-hidden bg-slate-950">
      {/* Animated Background Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-3xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <Fingerprint size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
                Strategic_Vision::2026
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase"
            >
              Building the <br />
              <span className="text-blue-600 italic">AI-Native Future.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 font-medium leading-relaxed"
            >
              At Uptimise IT, our vision is to shape the transformation of digital products by building an ecosystem where intelligent systems and elite engineers co-create the platforms of tomorrow.
            </motion.p>
          </div>

          {/* Right Side: Orbital Neural Animation */}
          <div className="relative flex items-center justify-center h-[500px]">
            {/* Background Glows */}
            <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
            
            {/* Center Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: 360 
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="relative z-20 w-32 h-32 bg-slate-900 border border-blue-500/30 rounded-3xl flex items-center justify-center shadow-[0_0_50px_-12px_rgba(37,99,235,0.5)]"
            >
              <Bot size={48} className="text-blue-500" />
              
              {/* Spinning Pulse Rings */}
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border border-blue-400 rounded-3xl"
              />
            </motion.div>

            {/* Orbiting Nodes */}
            <OrbitalNode icon={<Cpu size={20} />} label="Infra" delay={0} radius={140} duration={15} />
            <OrbitalNode icon={<Network size={20} />} label="Dev" delay={2} radius={180} duration={25} />
            <OrbitalNode icon={<Sparkles size={20} />} label="Design" delay={4} radius={120} duration={10} />
            
            {/* SVG Connection Lines (Static/Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <circle cx="50%" cy="50%" r="120" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="180" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="8 8" />
            </svg>
          </div>

        </div>
      </div>
    </section>

      {/* --- 2. THE PROBLEM: Breaking Traditional Chains --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
              Beyond Traditional <br /> <span className="text-blue-600">Limitations.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              For decades, sequential processes have built successful products, but they introduce friction that modern companies can no longer afford.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Slow Development Cycles", "Complex Coordination",
                "Fragmented Workflows", "Increasing Costs"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-black uppercase tracking-tight text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-xl" />
            <motion.div 
              whileInView={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-8">
                <Terminal size={18} className="text-blue-500" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System_Overload::Traditional_Model</span>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-3/4 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} className="h-full bg-red-500/50" />
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "0%" }} whileInView={{ width: "90%" }} transition={{ delay: 0.2 }} className="h-full bg-red-500/50" />
                </div>
                <div className="h-2 w-1/2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ delay: 0.4 }} className="h-full bg-red-500/50" />
                </div>
              </div>
              <div className="mt-12 text-center italic font-serif text-slate-400">"Inefficiency is the enemy of innovation."</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. THE SOLUTION: AI Software Factory --- */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-20">
          <div className="text-center space-y-4">
            <h4 className="text-blue-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] italic">// The_New_Paradigm</h4>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">The AI Software Factory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Intelligent Workflows", desc: "AI-assisted engineering across the entire lifecycle.", icon: <Workflow /> },
              { title: "Modern Infra", desc: "Self-healing and automated deployment systems.", icon: <Cpu /> },
              { title: "Expert Engineering", desc: "Focus on design, innovation, and optimization.", icon: <Code2 /> },
              { title: "Scalable Cloud", desc: "Reliable environments designed for rapid growth.", icon: <Network /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all border-b-4 border-b-blue-600"
              >
                <div className="text-blue-500 mb-6">{item.icon}</div>
                <h5 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h5>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. THE ECOSYSTEM: A Unified Lifecycle --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-12">
            <h2 className="text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">
              A Unified <br /> <span className="text-blue-600 italic">Ecosystem.</span>
            </h2>
            <p className="text-slate-500 max-w-sm font-medium italic">
              Our vision extends beyond development into a total lifecycle support system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Product Design", items: ["UX Research", "Interface Design", "Design Systems"], icon: <Boxes /> },
              { title: "Software Engineering", items: ["Web Platforms", "Mobile Apps", "Enterprise SaaS"], icon: <Binary /> },
              { title: "DevOps & Cloud", items: ["Scalable Infra", "Automated CI/CD", "Reliable Ops"], icon: <Network /> },
              { title: "Digital Growth", items: ["SEO Strategies", "Social Media", "Data-Driven Marketing"], icon: <TrendingUp /> }
            ].map((node, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">{node.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tight">{node.title}</h4>
                <ul className="space-y-3">
                  {node.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500 font-bold">
                      <ChevronRight size={14} className="text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. THE PEOPLE: Empowering Engineers --- */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-3xl animate-pulse" />
            <div className="relative p-12 bg-white rounded-[3.5rem] border border-slate-200 shadow-xl overflow-hidden">
              <Bot size={300} className="absolute -right-20 -bottom-20 opacity-5 text-blue-600" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">The Engineer of <br /> the Future.</h3>
              <p className="text-slate-500 font-medium italic leading-relaxed mb-8">
                "The engineers of the future will not only write code — they will design intelligent systems and automate workflows."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                  <CheckCircle2 size={16} /> Human Creativity
                </div>
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                  <CheckCircle2 size={16} /> Intelligent Automation
                </div>
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600">
                  <CheckCircle2 size={16} /> Engineering Expertise
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-tight">
              Shaping the <br /> <span className="text-blue-600">Culture.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We are building a culture where engineers learn to work alongside AI tools, shifting their focus to high-value architecture and product innovation.
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. FINAL CTA: Help Organizations Build the Future --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h4 className="text-blue-600 font-mono text-[10px] font-black uppercase tracking-[0.4em]">// Long_Term_Goal</h4>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-950 leading-none uppercase">
            Build the <br /> <span className="text-blue-600 italic text-stroke">Future</span> With Us.
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto italic">
            Whether you are launching a new product or scaling a platform, we are ready to build the technology systems of tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
            <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
              Start Your Project
            </button>
            </Link>
            <Link href="/contact">
            <button className="px-12 py-6 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-50 transition-all">
              Book Strategy Call
            </button>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};

// Simple icon and layout helper components
const CheckCircle2 = ({ size, className }:{ size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const TrendingUp = ({ size }:{ size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const OrbitalNode = ({ icon, label, radius, duration, delay }:{ icon: React.ReactNode; label: string; radius: number; duration: number; delay: number }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay: -delay }}
    className="absolute flex items-center justify-center"
    style={{ width: radius * 2, height: radius * 2 }}
  >
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay: -delay }}
      className="absolute top-0 bg-slate-900 border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-1 shadow-xl backdrop-blur-md"
    >
      <div className="text-blue-400">{icon}</div>
      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
    </motion.div>
  </motion.div>
);

export default VisionPage;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { 
//   Code2, Bot, Smartphone, ShoppingCart, 
//   Settings, ArrowRight, Layers, Cpu, 
//   Globe, CheckCircle2, Terminal, ExternalLink,
//   Plus, Minus, Database, Cloud
// } from 'lucide-react';

// // --- Animation Variants ---
// // const fadeInUp: Variants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { 
// //     opacity: 1, 
// //     y: 0, 
// //     transition: { duration: 0.6, ease: "easeOut" } 
// //   }
// // };

// // const staggerContainer: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.15
// //     }
// //   }
// // };

// const projects = [
//   {
//     id: "saas-platform",
//     category: "SaaS & Cloud",
//     title: "Multi-Tenant SaaS Engine",
//     problem: "A startup needed a scalable platform to support multiple organizations with secure data separation and rapid feature expansion.",
//     solution: "Designed a multi-tenant architecture with isolated database schemas, modular frontend components, and automated AWS deployment pipelines.",
//     tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
//     impact: "Stable performance across 50+ organizations with 3x faster rollout.",
//     icon: <Layers className="text-blue-600" />,
//     status: "LIVE_DEPLOYMENT"
//   },
//   {
//     id: "ai-automation",
//     category: "AI & Intelligence",
//     title: "Workflow Intelligence Hub",
//     problem: "Inefficient manual workflows stalling decision-making for a mid-sized enterprise.",
//     solution: "Developed an AI-agent cluster that analyzes data streams and triggers automated business logic via LLM-orchestration.",
//     tech: ["Python", "OpenAI API", "Node.js", "LangChain", "GCP"],
//     impact: "60% reduction in processing time and 99% accuracy.",
//     icon: <Bot className="text-purple-600" />,
//     status: "SYSTEM_OPTIMIZED"
//   },
//   {
//     id: "mobile-platform",
//     category: "Mobile Systems",
//     title: "FinTech Mobile Interface",
//     problem: "Requirement for a high-security mobile entry point with real-time data sync.",
//     solution: "Architected a native-first mobile system using Swift and Kotlin, supported by a Go microservices backend.",
//     tech: ["Kotlin", "Swift", "Go", "Redis", "Cloud Infra"],
//     impact: "Zero-latency updates and 4.9/5 star rating.",
//     icon: <Smartphone className="text-emerald-600" />,
//     status: "SCALING_ACTIVE"
//   },
//   {
//     id: "marketplace",
//     category: "E-commerce",
//     title: "Global Vendor Marketplace",
//     problem: "Complex vendor management and payment routing bottlenecks.",
//     solution: "Built a distributed marketplace with automated payment splits and real-time sync engine.",
//     tech: ["Next.js", "MongoDB", "Stripe", "ElasticSearch"],
//     impact: "Supporting 5k+ vendors with sub-second search.",
//     icon: <ShoppingCart className="text-orange-600" />,
//     status: "MARKET_READY"
//   }
// ];

// const CaseStudiesPage = () => {
//   const [expandedId, setExpandedId] = useState<string | null>(null);

//   return (
//     <main className="min-h-screen bg-[#FDFDFF] font-sans pt-32 pb-20 overflow-hidden">
      
//       {/* --- 1. HERO: The Proof Section --- */}
//       <section className="px-6 mb-24 relative">
//         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           // variants={staggerContainer}
//           className="max-w-7xl mx-auto relative z-10 text-center space-y-8"
//         >
//           <motion.div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
//             <Terminal size={12} className="text-blue-400" />
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white font-mono">Proof_Of_Execution_v1.0</span>
//           </motion.div>
          
//           <motion.h1  className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
//             Engineering <br />
//             <span className="text-blue-600 italic">Benchmarks.</span>
//           </motion.h1>
          
//           <motion.p  className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
//             Real technology solutions built by Uptimise IT. From startup MVPs to mission-critical enterprise systems.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* --- 2. THE GALLERY: Project Matrix --- */}
//       <section className="px-6 mb-32">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           // variants={staggerContainer}
//           className="max-w-7xl mx-auto grid grid-cols-1 gap-6"
//         >
//           {projects.map((project) => (
//             <motion.div 
//               key={project.id}
//               layout
//               // variants={fadeInUp}
//               className={`group relative rounded-[3rem] border transition-all duration-500 overflow-hidden ${
//                 expandedId === project.id ? 'bg-white border-blue-600 shadow-2xl scale-[1.02]' : 'bg-white border-slate-100 hover:border-slate-300'
//               }`}
//             >
//               <div 
//                 className="p-10 flex flex-col lg:flex-row justify-between items-center gap-8 cursor-pointer"
//                 onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
//               >
//                 <div className="flex items-center gap-8 w-full lg:w-auto">
//                   <motion.div 
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${
//                     expandedId === project.id ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'
//                   }`}>
//                     {project.icon}
//                   </motion.div>
//                   <div>
//                     <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 font-mono mb-1 block">
//                       {project.category}
//                     </span>
//                     <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter uppercase">
//                       {project.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
//                     <div className="flex items-center gap-3">
//                       <div className="flex -space-x-2">
//                         {project.tech.slice(0, 3).map((t, i) => (
//                            <motion.div 
//                              key={i} 
//                              whileHover={{ y: -5 }}
//                              className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-black font-mono text-slate-400 uppercase"
//                            >
//                              {t[0]}
//                            </motion.div>
//                         ))}
//                       </div>
//                       <span className="text-[10px] font-bold text-slate-300 uppercase font-mono">+{project.tech.length - 3} Stack</span>
//                     </div>
//                     <motion.div 
//                       animate={{ rotate: expandedId === project.id ? 180 : 0 }}
//                       className="p-3 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all"
//                     >
//                        {expandedId === project.id ? <Minus size={20} /> : <Plus size={20} />}
//                     </motion.div>
//                 </div>
//               </div>

//               <AnimatePresence>
//                 {expandedId === project.id && (
//                   <motion.div 
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                     className="overflow-hidden border-t border-slate-50"
//                   >
//                     <div className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
//                       <div className="lg:col-span-7 space-y-10">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                            <div className="space-y-3">
//                               <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono italic">// The_Challenge</h5>
//                               <p className="text-sm text-slate-600 leading-relaxed font-medium">{project.problem}</p>
//                            </div>
//                            <div className="space-y-3">
//                               <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-600 font-mono italic">// Our_Solution</h5>
//                               <p className="text-sm text-slate-600 leading-relaxed font-medium">{project.solution}</p>
//                            </div>
//                         </div>
                        
//                         <motion.div 
//                           initial={{ x: -20, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           className="p-8 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-between group/impact"
//                         >
//                            <div className="space-y-1">
//                               <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 font-mono">Measured_Impact</p>
//                               <p className="text-xl font-black text-slate-950 italic">{project.impact}</p>
//                            </div>
//                            <CheckCircle2 className="text-blue-600" />
//                         </motion.div>
//                       </div>

//                       <div className="lg:col-span-5 space-y-8 bg-slate-50 rounded-3xl p-8 border border-slate-100">
//                          <div className="space-y-4">
//                             <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical_Stack</h5>
//                             <div className="flex flex-wrap gap-2">
//                                {project.tech.map((t, i) => (
//                                   <motion.span 
//                                     key={i} 
//                                     whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
//                                     className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold font-mono text-slate-600"
//                                   >
//                                     {t}
//                                   </motion.span>
//                                ))}
//                             </div>
//                          </div>
//                          <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
//                             <div>
//                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Instance_Status</p>
//                                <p className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 mt-1">
//                                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//                                   {project.status}
//                                 </p>
//                             </div>
//                             <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:gap-3 transition-all uppercase tracking-widest">
//                                Explore Architecture <ArrowRight size={14} />
//                             </button>
//                          </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* --- 3. APPROACH --- */}
//       <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
//           <motion.div 
//             animate={{ 
//               rotate: 360,
//               opacity: [0.03, 0.05, 0.03]
//             }}
//             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//             className="absolute top-0 right-0 p-24 pointer-events-none"
//           >
//             <Settings size={400} />
//           </motion.div>
//           <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="space-y-8 text-center lg:text-left"
//             >
//                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
//                  Our Engineering <br /><span className="text-blue-500 italic">Philosophy.</span>
//                </h2>
//                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {["Clean & Maintainable Code", "Automated Pipelines", "Scalable Topology", "AI-Native Sprints"].map((text, i) => (
//                     <div key={i} className="flex items-center gap-3">
//                         <CheckCircle2 className="text-blue-400" size={18} />
//                         <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{text}</span>
//                     </div>
//                   ))}
//                </div>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               className="p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl"
//             >
//                <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-blue-400 italic">// Sector_Reach</h4>
//                <div className="flex flex-wrap gap-4">
//                   {["Startups", "FinTech", "HealthTech", "E-commerce", "AI SaaS", "Enterprise"].map((ind, i) => (
//                     <motion.span 
//                       key={i} 
//                       whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
//                       className="px-5 py-2.5 bg-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors cursor-default"
//                     >
//                       {ind}
//                     </motion.span>
//                   ))}
//                </div>
//             </motion.div>
//           </div>
//       </section>

//       {/* --- 4. FINAL CTA --- */}
//       <section className="lg:py-32 py-10 px-6">
//          <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden"
//          >
//             <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
//                 Build Your Success <br /> Story with <span className="italic">Uptimise IT.</span>
//             </h2>
//             <motion.div whileHover={{ scale: 1.05 }} className="relative z-10">
//               <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl">
//                  Start Your Project
//               </button>
//             </motion.div>
//          </motion.div>
//       </section>
//     </main>
//   );
// };

// export default CaseStudiesPage;