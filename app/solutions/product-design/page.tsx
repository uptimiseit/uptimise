'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  PenTool, EyeOff, TrendingDown, UserX, 
  Layers, Smartphone, LayoutTemplate, MousePointerClick, 
  ArrowRight, Palette, Figma, CheckCircle2, 
  LineChart, SplitSquareHorizontal, ArrowUpRight,
  MonitorSmartphone, Heart, Zap, Sparkles
} from "lucide-react";

// --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12
//     }
//   }
// };

// const hoverCard: Variants = {
//   hover: { 
//     y: -8, 
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function ProductDesignPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-fuchsia-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Creative Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-50 blur-[120px] rounded-full -z-10"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 border border-fuchsia-100 text-fuchsia-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles size={16} className="animate-pulse" /> Experience Engineering
          </motion.div>
          
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Designing Digital Products <br className="hidden md:block" />
            <motion.span 
              animate={{ color: ["#c026d3", "#f43f5e", "#c026d3"] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-500 italic"
            >
              People Love to Use
            </motion.span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We bridge the gap between human psychology and digital interfaces. Uptimise IT crafts scalable design systems and high-converting user experiences that drive retention.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-fuchsia-600 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-600/20 hover:bg-fuchsia-700 transition-all text-lg block">
                Redesign Your Product
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Request UX Audit <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. UX PROBLEMS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">Why Great Products Fail</h2>
            <p className="text-lg text-slate-600 font-medium">Confusing interfaces cause users to abandon even the most advanced software in seconds.</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "High Churn Rates", desc: "Overwhelming onboarding flows that lack clear direction cause users to leave immediately.", icon: <UserX /> },
              { title: "Conversion Drops", desc: "Clunky checkouts and poor mobile responsiveness destroying your acquisition ROI.", icon: <TrendingDown /> },
              { title: "Feature Obscurity", desc: "Powerful features remain hidden because the navigation architecture is broken.", icon: <EyeOff /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover="hover"
                // variants={hoverCard}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-rose-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. DESIGN STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-fuchsia-600 font-bold tracking-widest uppercase text-sm font-mono">// Strategic_Design</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Behavioral Science Meets Aesthetics
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Our strategy is rooted in user psychology. We build systems that reduce cognitive load and guide users effortlessly to their "Aha!" moment.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Data-driven UX research and journey mapping.",
                "Cognitive load reduction for complex tasks.",
                "Atomic Design principles for scalable UI.",
                "Full Accessibility (WCAG) compliance."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold"
                >
                  <CheckCircle2 className="text-fuchsia-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3 font-mono tracking-tighter">
               <Layers className="text-fuchsia-400" /> Wireframe_to_Reality
             </h3>
             <div className="relative z-10 flex gap-6 h-64">
               {/* Wireframe Side */}
               <motion.div 
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex-1 border-2 border-dashed border-slate-700 rounded-2xl p-4 flex flex-col gap-4"
               >
                 <div className="w-1/2 h-3 bg-slate-800 rounded"></div>
                 <div className="w-full h-20 bg-slate-800 rounded-xl"></div>
                 <div className="w-1/3 h-6 bg-slate-700 rounded-lg mt-auto"></div>
               </motion.div>
               <div className="flex flex-col justify-center">
                 <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                   <ArrowRight className="text-fuchsia-500" />
                 </motion.div>
               </div>
               {/* High Fidelity Side */}
               <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-[0_0_40px_rgba(217,70,239,0.3)] border border-fuchsia-200"
               >
                 <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                 <div className="w-full h-20 bg-gradient-to-br from-fuchsia-100 to-rose-50 rounded-xl border border-fuchsia-100"></div>
                 <div className="w-full h-6 bg-fuchsia-600 rounded-lg mt-auto shadow-md"></div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. DESIGN SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Design Capabilities</h2>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "UX/UI Design", desc: "Intuitive flows and stunning visual interfaces for all device types.", icon: <MonitorSmartphone /> },
              { title: "Design Systems", desc: "Atomic component libraries that scale with your engineering team.", icon: <LayoutTemplate /> },
              { title: "UX Audits", desc: "Deep-dives to identify friction points and UI inconsistencies.", icon: <EyeOff /> },
              { title: "Rapid Prototyping", desc: "High-fidelity interactive models for investor and user testing.", icon: <MousePointerClick /> }
            ].map((srv, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -5 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{srv.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-16 font-medium">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. DESIGN TOOLS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">The Modern Stack</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              We use industry-leading tools that integrate with engineering workflows to ensure zero friction during handoff.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {["Figma Pro", "Framer", "Spline 3D", "Storybook"].map((sec, idx) => (
                 <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                   <Palette className="text-fuchsia-400 shrink-0 w-4 h-4" />
                   <span className="text-xs font-black uppercase text-slate-200 font-mono">{sec}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          <motion.div  initial="hidden" whileInView="visible" className="grid grid-cols-2 gap-4">
            <motion.div  whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <Figma className="text-fuchsia-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold text-xs uppercase font-mono">Figma_Core</h4>
            </motion.div>
            <motion.div  whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <Smartphone className="text-rose-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold text-xs uppercase font-mono">Proto_Pie</h4>
            </motion.div>
            <motion.div  whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <LineChart className="text-fuchsia-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold text-xs uppercase font-mono">Analytics</h4>
            </motion.div>
            <motion.div  whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <LayoutTemplate className="text-rose-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold text-xs uppercase font-mono">Design_Ops</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. CRO SECTION */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-widest font-mono">
              <SplitSquareHorizontal size={16} /> Conversion_Design
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none uppercase">Design That <br /><span className="text-rose-500 italic">Drives Revenue.</span></h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Beautiful design is useless if it doesn't convert. We specialize in redesigning checkout flows and onboarding to maximize your metrics.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full bg-slate-800 border border-slate-700 p-8 rounded-[2rem] shadow-2xl relative"
          >
             <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Conversion_Funnel</span>
               <span className="text-emerald-400 text-xs font-black flex items-center gap-1 tracking-tighter">+24% LIFT <Zap size={12} fill="currentColor"/></span>
             </div>
             <div className="space-y-3">
               {[
                 { l: "Landing Page", u: "10,000 users", w: "100%", c: "bg-slate-700" },
                 { l: "Sign Up Flow", u: "4,200 users", w: "80%", c: "bg-fuchsia-900/40 border border-fuchsia-500/30" },
                 { l: "Onboarding", u: "3,100 users", w: "65%", c: "bg-rose-900/40 border border-rose-500/30" },
                 { l: "Activation", u: "2,850 users", w: "50%", c: "bg-emerald-900/40 border border-emerald-500/30" }
               ].map((step, i) => (
                 <div key={i} className="space-y-1">
                   <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: step.w }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`${step.c} h-12 rounded-xl flex items-center justify-between px-4 overflow-hidden whitespace-nowrap`}
                   >
                     <span className="text-[10px] font-black uppercase text-white">{step.l}</span>
                     <span className="text-[9px] text-white/60 font-mono">{step.u}</span>
                   </motion.div>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 8. BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-fuchsia-50 text-fuchsia-600 rounded-full flex items-center justify-center mb-6"><Heart size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Brand Loyalty</h3>
            <p className="text-slate-600 text-sm font-medium">Intuitive products create loyal advocates who refer others.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6"><TrendingDown size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Lower Support</h3>
            <p className="text-slate-600 text-sm font-medium">Clear UI reduces support tickets and operational overhead.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Engineering Speed</h3>
            <p className="text-slate-600 text-sm font-medium">Reusable design systems allow developers to build faster.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Design for <br /><span className="text-fuchsia-600 italic">Humans.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
            Don't let bad UX kill your product. Let's craft an experience your users will love and your metrics will reflect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl">
                <Link href="/contact">Discuss Your Design Needs</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}