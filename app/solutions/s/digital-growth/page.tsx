'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  TrendingUp, Target, BarChart3, Users, 
  MousePointerClick, Zap, Megaphone, Search, 
  ArrowRight, CheckCircle2, LineChart, ArrowUpRight,
  Filter, Activity, Rocket, PieChart
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

// const barGrowth: Variants = {
//   hidden: { height: 0, opacity: 0 },
//   visible: (custom: string) => ({
//     height: custom,
//     opacity: 1,
//     transition: { duration: 1.2, ease: "circOut", delay: 0.2 }
//   })
// };

export default function DigitalGrowthPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* High-Energy Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-50 blur-[120px] rounded-full -z-10"
        />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-orange-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          
          className="space-y-8"
        >
          <motion.div  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <TrendingUp size={16} className="animate-pulse" /> User Acquisition & Scaling
          </motion.div>
          
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Engineered for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 italic">Hyper-Growth</span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Stop paying for vanity metrics. We engineer data-driven acquisition engines that lower your CAC, maximize Customer Lifetime Value (LTV), and flood your platform with high-intent users.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-all text-lg block">
                Scale Your Revenue
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Get a Growth Audit <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. GROWTH CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">The Leaky Funnel Problem</h2>
            <p className="text-lg text-slate-600 font-medium">Most agencies focus on top-of-funnel clicks, ignoring what happens after the user lands. This results in burned budgets and stagnant revenue.</p>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Unsustainable CAC", desc: "Your ad costs are rising faster than your revenue, making it impossible to scale profitably.", icon: <Activity className="text-red-500" /> },
              { title: "Vanity Metrics", desc: "Impressions and likes that never translate into actual paying customers or qualified leads.", icon: <Filter className="text-red-500" /> },
              { title: "Blind Attribution", desc: "You don't know which campaigns drive sales because analytics tracking is broken or siloed.", icon: <Target className="text-red-500" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. GROWTH STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-rose-600 font-bold tracking-widest uppercase text-sm font-mono">// Our_Strategy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Full-Funnel Revenue Engineering
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We treat marketing as a mathematical system. By analyzing the entire journey, we optimize every touchpoint to maximize your LTV:CAC ratio.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Multi-touch attribution modeling for accurate ROI.",
                "Omnichannel scaling (Search, Social, Programmatic).",
                "A/B testing ad creatives and landing pages relentlessly.",
                "Automated lifecycle marketing to reduce user churn."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-rose-500 w-6 h-6 mr-3 shrink-0" /> {item}
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
               <LineChart className="text-orange-400" /> Revenue_Trajectory
             </h3>
             <div className="relative z-10 h-48 w-full border-b-2 border-l-2 border-slate-700 flex items-end gap-2 pb-1 pl-1">
               {/* Growth Bars */}
               {[
                 { label: "Q1", height: "20%", color: "bg-rose-500/20" },
                 { label: "Q2", height: "35%", color: "bg-rose-500/40" },
                 { label: "Q3", height: "55%", color: "bg-rose-500/60" },
                 { label: "Q4", height: "80%", color: "bg-orange-500/80", bold: true },
                 { label: "Scale", height: "100%", color: "bg-gradient-to-t from-orange-500 to-yellow-400", pulse: true }
               ].map((bar, i) => (
                 <div key={i} className="w-1/6 h-full flex flex-col justify-end items-center relative">
                   <motion.div 
                    //  variants={barGrowth}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     custom={bar.height}
                     className={`${bar.color} w-full rounded-t-sm relative`}
                   >
                     {bar.pulse && (
                       <div className="absolute -top-8 text-[10px] text-yellow-400 w-full text-center font-black animate-pulse">
                         THRUST
                       </div>
                     )}
                   </motion.div>
                   <span className={`absolute -bottom-6 text-[10px] font-bold ${bar.bold ? 'text-orange-400' : 'text-slate-500'}`}>
                     {bar.label}
                   </span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. MARKETING SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Growth Engineering Services</h2>
            <p className="text-lg text-slate-600 font-medium">Building interconnected systems that capture, convert, and retain users.</p>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "Technical SEO & Organic", desc: "Programmatic SEO and deep technical site architecture optimization.", icon: <Search /> },
              { title: "Paid Acquisition (PPC)", desc: "Hyper-targeted campaigns across all major platforms optimized strictly for ROAS.", icon: <Megaphone /> },
              { title: "Conversion Optimization", desc: "A/B testing and removing friction to turn more clicks into actual revenue.", icon: <MousePointerClick /> },
              { title: "Lifecycle Marketing", desc: "Automated email sequences that nurture leads and recover abandoned carts.", icon: <Users /> }
            ].map((srv, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ x: 10 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{srv.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-16 font-medium">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. GROWTH TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Modern Growth Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We configure enterprise-grade analytics to ensure every dollar spent is tracked, measured, and attributed perfectly.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["GA4", "Mixpanel", "Segment", "HubSpot", "Klaviyo", "Ahrefs", "Semrush", "VWO"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-orange-400 transition-colors cursor-default font-mono uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-1 text-sm uppercase">Product Analytics</h4><p className="text-slate-600 text-xs font-medium">Mixpanel & Segment</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-1 text-sm uppercase">Automation</h4><p className="text-slate-600 text-xs font-medium">HubSpot & Klaviyo</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-1 text-sm uppercase">SEO & SEM</h4><p className="text-slate-600 text-xs font-medium">Ahrefs & Ads API</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-1 text-sm uppercase">Testing & CRO</h4><p className="text-slate-600 text-xs font-medium">VWO & Hotjar</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI MARKETING SYSTEMS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold tracking-wide uppercase font-mono">
              <Zap size={16} /> Programmatic_Scaling
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase tracking-tighter">
              AI-Powered <br /><span className="text-orange-500 italic">Marketing Engines</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We leverage machine learning to predict Customer Lifetime Value (LTV), automate ad bidding, and generate thousands of personalized SEO landing pages.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Programmatic SEO generation at massive scale.",
                "Predictive Churn modeling via machine learning.",
                "Dynamic ad creative generation and testing."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-300 font-medium italic"
                >
                  <CheckCircle2 className="text-orange-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Predictive_LTV_Model</span>
               <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● Active_Live_Sync</span>
             </div>
             <div className="space-y-4">
               {[
                 { cohort: "Cohort A", signal: "High Intent Signals", res: "Increase Bids", ltv: "$1,200", color: "text-emerald-400" },
                 { cohort: "Cohort B", signal: "Low Engagement", res: "Halt Spend", ltv: "$45", color: "text-rose-400", dim: true }
               ].map((row, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className={`bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center ${row.dim ? 'opacity-60' : ''}`}
                 >
                   <div><p className="text-white font-bold text-xs uppercase">{row.cohort}</p><p className="text-[10px] text-slate-500 font-mono">{row.signal}</p></div>
                   <div className="text-right"><p className={`${row.color} font-black text-xs uppercase`}>{row.res}</p><p className="text-slate-500 text-[10px] font-mono">LTV_EST: {row.ltv}</p></div>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. GROWTH PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">The Growth Sprint Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// High_Tempo_Testing_Cycles</p>
        </motion.div>
        
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { step: "01", title: "Data Audit", desc: "Establishing baseline metrics and multi-touch attribution." },
            { step: "02", title: "Hypothesis", desc: "Designing tests for ad creatives and landing pages." },
            { step: "03", title: "Execution", desc: "Launching high-tempo A/B tests to find winners." },
            { step: "04", title: "Scale", desc: "Scaling budget into winning channels and killing losers." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-400 transition-all group"
            >
               <div className="text-xs font-black text-orange-500 mb-4 tracking-widest uppercase font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. BUSINESS IMPACT */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6"><Target size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Lower CAC</h3>
            <p className="text-slate-600 text-sm font-medium">Optimizing landing pages and high-intent targeting drives down acquisition costs.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6"><Rocket size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Predictable Scale</h3>
            <p className="text-slate-600 text-sm font-medium">Know exactly how much revenue $1 of ad spend will generate.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><PieChart size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Higher LTV</h3>
            <p className="text-slate-600 text-sm font-medium">Maximize the total value extracted through automated re-engagement flows.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Stop Buying Clicks. <br /><span className="text-rose-600 italic">Buy Customers.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Scale your business with an engineering-first approach to marketing. Let's build an acquisition engine that prints predictable revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-rose-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl">
                <Link href="/contact">Scale Your Growth</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}