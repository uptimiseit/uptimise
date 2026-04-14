'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  TrendingUp, BarChart3, Search, Share2, 
  Target, Video, PieChart, Zap, 
  ArrowRight, CheckCircle2, Bot, Globe,
  Instagram, Linkedin, Twitter, Youtube,
  LineChart, MousePointerClick, Megaphone
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const growthStats = [
  { label: "ROAS", val: "4.2x Avg", icon: <LineChart size={20} /> },
  { label: "Indexing", val: "Technical", icon: <Search size={20} /> },
  { label: "Conversion", val: "Optimized", icon: <MousePointerClick size={20} /> },
  { label: "Analytics", val: "Real-time", icon: <PieChart size={20} /> }
];

const DigitalGrowthPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The Growth Engine --- */}
      <section className="px-6 mb-32 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(#10b98108_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <TrendingUp size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 font-mono">Module::Growth_Systems_v4.0</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.98]">
              Algorithmic <br />
              <motion.span 
                animate={{ color: ["#059669", "#10b981", "#059669"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-emerald-600 italic"
              >
                Growth.
              </motion.span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT engineers data-driven growth engines that combine AI-powered automation with performance marketing to scale user adoption with mathematical precision.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200"
              >
                Scale Your Revenue
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs transition-all"
              >
                Audit My Traffic
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Performance Dashboard Visual */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-slate-950 rounded-[3rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
               <motion.div 
                  animate={{ y: [0, -10, 0], opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-0 right-0 p-8 text-emerald-400"
               >
                  <Megaphone size={200} />
               </motion.div>
               
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center pb-6 border-b border-white/5">
                     <span className="text-[10px] font-black font-mono text-emerald-500 tracking-widest">PERFORMANCE_MATRIX</span>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-bold text-slate-400 font-mono">LIVE_DATA</span>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     {growthStats.map((stat, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ scale: 1.05 }}
                          className="space-y-2 group cursor-default"
                        >
                           <div className="flex items-center gap-2 text-slate-500 group-hover:text-emerald-400 transition-colors">
                              {stat.icon}
                              <span className="text-[9px] font-black uppercase tracking-widest">{stat.label}</span>
                           </div>
                           <p className="text-2xl font-black text-white italic">{stat.val}</p>
                        </motion.div>
                     ))}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                     <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-3">
                        <span>Acquisition_Target</span>
                        <span>88%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: '88%' }} 
                          transition={{ duration: 2, delay: 1.5, ease: "circOut" }} 
                          className="h-full bg-emerald-500" 
                        />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. WHY GROWTH --- */}
      <section className="lg:py-24 py-10 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl text-center lg:text-left font-black text-slate-950 tracking-tighter leading-tight uppercase">
               Beyond <br /><span className="text-emerald-600">Advertising.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Most agencies run ads. We build growth systems. We understand the code, the data, and the user behavior to optimize the entire funnel.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
             {[
               "Algorithmic SEO", "Performance Ad Ops", 
               "Data-Driven Insights", "AI Content Systems"
             ].map((text, i) => (
               <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: "#10b981" }}
                className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm transition-all"
               >
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{text}</span>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE GROWTH PILLARS --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
               <h3 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                  <Search className="text-emerald-600" /> SEO Optimization
               </h3>
               <p className="text-slate-500 font-medium leading-relaxed">
                  We focus on technical SEO and keyword clusters to ensure your product ranks where it matters.
               </p>
               <ul className="grid grid-cols-2 gap-y-3 pt-4">
                  {["Technical SEO", "Keyword Arch", "On-Page Ops", "Content Strategy"].map(t => (
                    <li key={t} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1 h-1 bg-emerald-600 rounded-full" /> {t}
                    </li>
                  ))}
               </ul>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
               {[
                 { label: "01. SMO", title: "Social Growth", desc: "Building brand authority through content storytelling." },
                 { label: "02. PPC", title: "Paid Campaigns", desc: "High-conversion campaigns optimized for maximum ROAS." }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, backgroundColor: "white", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-4 group transition-all"
                 >
                    <div className="text-emerald-600 font-black text-xl italic font-mono">{item.label}</div>
                    <h5 className="font-black text-slate-950 uppercase tracking-tight">{item.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-12 lg:py-12 border-y border-slate-50"
          >
             {[Instagram, Linkedin, Twitter, Youtube, Globe].map((Icon, i) => (
               <motion.div 
                key={i}
                whileHover={{ scale: 1.2, color: "#10b981", rotate: 5 }}
                className="text-slate-300 transition-all cursor-pointer p-2"
               >
                 <Icon size={32} />
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. AI-POWERED AUTOMATION --- */}
      <section className="lg:py-32 px-6">
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto p-12 lg:p-24 bg-emerald-950 rounded-[4rem] text-white relative overflow-hidden group"
         >
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
            >
               <Bot size={400} />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                    AI-Driven <br /><span className="text-emerald-400">Marketing.</span>
                  </h2>
                  <p className="text-lg text-emerald-100/60 font-medium max-w-md leading-relaxed">
                    We use machine learning to identify audience targeting patterns that humans miss.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Campaign Analysis", "Content Orchestration", 
                    "Targeting Insights", "Workflow Automation"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all"
                    >
                       <Zap size={16} className="text-emerald-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
         </motion.div>
      </section>

      {/* --- 5. ANALYTICS & TOOLS --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto space-y-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
               <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">Growth Stack.</h3>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] font-mono mt-4">// Analytics_Toolkit_v1.0</p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
               {[
                 { cat: "Measurement", tools: ["Google Analytics", "Search Console"] },
                 { cat: "SEO Tools", tools: ["SEMrush", "Ahrefs"] },
                 { cat: "Performance", tools: ["Google Ads", "Meta Ads Manager"] },
                 { cat: "Content", tools: ["Adobe Suite", "AI Copywriting"] }
               ].map((group, i) => (
                 <motion.div key={i} variants={fadeInUp} className="space-y-6">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 font-mono">{group.cat}</h5>
                    <div className="space-y-2">
                       {group.tools.map((tool, idx) => (
                         <motion.p 
                          key={idx} 
                          whileHover={{ scale: 1.1, color: "#10b981", opacity: 1 }}
                          className="text-2xl font-black tracking-tighter opacity-40 transition-all cursor-default"
                         >
                           {tool}
                         </motion.p>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="lg:py-20 px-6">
         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden"
         >
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" 
            />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10 uppercase">
                Accelerate Your <br /> <span className="italic">Digital Reach.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl">
                 Scale My Product
              </button>
            </motion.div>
         </motion.div>
      </section>
    </main>
  );
};

export default DigitalGrowthPage;