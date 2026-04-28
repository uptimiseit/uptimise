'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, ServerCrash, UserMinus, 
  VideoOff, ArrowRight, Layout, Database, 
  Zap, CheckCircle2, Building2, Users, Globe,
  ArrowUpRight, PlayCircle, BrainCircuit, 
  MonitorPlay, MessageSquare, BookOpen, Trophy
} from "lucide-react";



export default function EdtechIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Knowledge/Learning Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10"
        />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-amber-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          
          className="space-y-8"
        >
          <motion.div  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-sm font-bold tracking-wide uppercase mb-4">
            <GraduationCap size={16} className="animate-bounce" /> EdTech Platform Engineering
          </motion.div>
          
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Architecting the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Digital Learning</span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We build high-concurrency, interactive e-learning ecosystems. From global language apps to enterprise Learning Management Systems (LMS), we engineer platforms that drive engagement and scale effortlessly.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg block">
                Build Your Learning Platform
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Consult an EdTech Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. EDTECH CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Friction in E-Learning</h2>
            <p className="text-lg text-slate-600">Off-the-shelf LMS tools are rigid, boring, and expensive to scale. To build a profitable EdTech business, you must overcome these core technical hurdles.</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Low Completion Rates", desc: "Clunky UX and lack of interactive features cause students to lose focus, resulting in dismal course completion rates and high churn.", icon: <UserMinus className="text-red-500 w-8 h-8" /> },
              { title: "Concurrent User Crashes", desc: "Live classes and synchronous exams create massive traffic spikes that instantly crash poorly architected monolithic servers.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Crippling Video Costs", desc: "Relying on unoptimized video hosting or third-party APIs destroys your profit margins as your student base scales globally.", icon: <VideoOff className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. EDTECH ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm font-mono">// Our_Architecture_Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Headless LMS & Scalable Media
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We decouple the learning interface from the backend database. This "Headless" approach allows us to build highly gamified, lightning-fast student dashboards while maintaining a rock-solid backend.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "WebRTC & HLS for ultra-low latency live video streaming.",
                "Event-driven architecture to handle thousands of concurrent exams.",
                "SCORM & xAPI compliance for seamless content portability.",
                "Global Edge Caching to serve heavy media files instantly."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-indigo-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A0F24] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-indigo-900/50"
          >
             {/* Abstract EdTech Architecture CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <MonitorPlay className="text-amber-400" /> Media & Data Flow
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Student Interface */}
               <motion.div 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="flex items-center justify-between bg-indigo-500/20 border border-indigo-400/50 p-4 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.15)] relative"
               >
                 <div className="flex items-center gap-3 text-indigo-300 font-bold font-mono text-xs uppercase tracking-widest"><Layout size={18} /> Learner_Portal_v2.0</div>
                 <div className="flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-amber-400"></motion.div>
                 </div>
               </motion.div>
               
               <div className="flex justify-between w-3/4 mx-auto">
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="text-slate-500 rotate-90" /></motion.div>
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}><ArrowRight className="text-slate-500 rotate-90" /></motion.div>
               </div>

               {/* Backend Services */}
               <div className="grid grid-cols-2 gap-3 w-full">
                 <motion.div whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center flex flex-col items-center shadow-sm">
                   <PlayCircle className="w-6 h-6 text-amber-400 mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase tracking-tighter">Video Delivery</p>
                   <p className="text-slate-400 text-[9px] mt-1 font-mono">HLS_CDN</p>
                 </motion.div>
                 <motion.div whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center flex flex-col items-center shadow-sm">
                   <Database className="w-6 h-6 text-emerald-400 mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase tracking-tighter">LMS Core API</p>
                   <p className="text-slate-400 text-[9px] mt-1 font-mono">POSTGRES_SQL</p>
                 </motion.div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Learning Systems We Build</h2>
            <p className="text-lg text-slate-600 font-medium">Bespoke architectures tailored for your specific educational model.</p>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Custom LMS & LXP", icon: <BookOpen size={28} />, desc: "Bespoke systems tailored for universities or massive online courses (MOOCs)." },
              { title: "Corporate Training", icon: <Building2 size={28} />, desc: "Secure internal portals for employee onboarding and compliance training." },
              { title: "Cohort Platforms", icon: <Users size={28} />, desc: "Interactive community platforms featuring live streaming and peer grading." },
              { title: "Micro-Learning", icon: <Globe size={28} />, desc: "Highly gamified mobile applications focused on audio processing and quick retention." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-500 transition-all duration-300 group"
              >
                <div className="text-indigo-600 mb-6 bg-indigo-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-tighter leading-none">{prod.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Modern EdTech Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We utilize a specialized stack designed to handle heavy video streaming, real-time chat, and relational data for complex grading rubrics.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React Native", "Node.js", "Python", "AWS MediaLive", "Mux", "WebRTC", "PostgreSQL", "Socket.io"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-indigo-400 transition-colors cursor-default font-mono uppercase tracking-widest">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"><h4 className="text-indigo-700 font-bold mb-2 text-sm">Learner Interfaces</h4><p className="text-slate-600 text-xs font-medium">React, Next.js, Flutter</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"><h4 className="text-indigo-700 font-bold mb-2 text-sm">Video & Streaming</h4><p className="text-slate-600 text-xs font-medium">AWS IVS, WebRTC, Mux</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"><h4 className="text-indigo-700 font-bold mb-2 text-sm">Core API & Logic</h4><p className="text-slate-600 text-xs font-medium">Node.js, Python (Django)</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"><h4 className="text-indigo-700 font-bold mb-2 text-sm">Real-Time Chat</h4><p className="text-slate-600 text-xs font-medium">Socket.io, Redis</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (Adaptive Learning) */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold tracking-wide uppercase font-mono">
              <BrainCircuit size={16} /> AI_Software_Factory
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase tracking-tighter">
              Build Velocity & <br /><span className="text-amber-400 italic">Adaptive Learning</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Our AI Factory builds your core LMS architecture 40% faster. We integrate AI directly into the student experience, creating adaptive learning paths that adjust dynamically.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "LLM-powered AI Tutors for 24/7 support.",
                "Automated transcription and translation.",
                "Generative quiz creation based on content.",
                "Dynamic curriculum adjustments."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-300 font-medium italic"
                >
                  <CheckCircle2 className="text-amber-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Adaptive_Path_Logic</span>
               <span className="text-indigo-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● Active_Sync</span>
             </div>
             <div className="space-y-3">
               {/* Module 1 */}
               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div><p className="text-white font-bold text-[10px]">Module 1 Quiz</p><p className="text-[8px] text-slate-500 font-mono">Score: 45% (Failed)</p></div>
                 <div className="text-right font-black text-[10px] uppercase tracking-tighter text-red-400"><p>AI_Trigger</p></div>
               </motion.div>
               
               <div className="flex justify-center">
                 <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight className="text-slate-600 rotate-90 w-4" /></motion.div>
               </div>
               
               {/* AI Action */}
               <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/50 flex justify-between items-center shadow-inner"
               >
                 <div><p className="text-indigo-100 font-bold text-[10px]">Dynamic Remediation</p><p className="text-[8px] text-indigo-300/70 font-mono">Generating practice set...</p></div>
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}><MessageSquare className="text-indigo-400 w-4 h-4" /></motion.div>
               </motion.div>

               <div className="flex justify-center">
                 <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}><ArrowRight className="text-slate-600 rotate-90 w-4" /></motion.div>
               </div>

               {/* Module 2 */}
               <motion.div initial={{ opacity: 0.3 }} whileInView={{ opacity: 0.5 }} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div><p className="text-white font-bold text-[10px]">Module 2 (Locked)</p></div>
                 <div className="text-right font-black text-[10px] uppercase tracking-tighter text-slate-500"><p>Waiting</p></div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">EdTech Delivery Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Curriculum_Architecture_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Curriculum Map", desc: "Translating educational models into database schemas." },
            { step: "02", title: "Gamification", desc: "Designing learner interfaces with progress tracking and rewards." },
            { step: "03", title: "Core Build", desc: "Engineering headless LMS, payments, and video delivery." },
            { step: "04", title: "Concurrency Test", desc: "Simulating 10,000+ simultaneous exam takers for resilience." },
            { step: "05", title: "Launch", desc: "Cloud deployment with real-time video monitoring." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-indigo-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6 border border-amber-100"><Trophy size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Completion Lift</h3>
            <p className="text-slate-600 text-sm font-medium">Gamified UI and ultra-fast video playback keep students engaged, reducing drop-off rates.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 border border-indigo-100"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Server Resilience</h3>
            <p className="text-slate-600 text-sm font-medium">Event-driven architecture ensures stability during high-volume live exam spikes.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 border border-emerald-100"><Database size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Optimized Media</h3>
            <p className="text-slate-600 text-sm font-medium">Utilizing HLS and edge-caching to drastically reduce bandwidth and storage bills.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-tighter leading-none">Engineering Success</h2>
              <p className="text-slate-400 text-lg font-medium">See our engineered learning environments for modern educators.</p>
            </div>
            <Link href="/case-studies" className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2 text-sm uppercase tracking-widest">
              View All EdTech Work <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Global Language App", desc: "Built a gamified React Native app with real-time audio processing and AI pronunciation, scaling to 2M+ users.", tags: ["React Native", "Python AI", "Gamification"] },
              { title: "Enterprise Cohort Platform", desc: "Engineered a headless LMS for corporate training, integrating live WebRTC and SCORM analytics.", tags: ["Next.js", "WebRTC", "Node.js"] },
            ].map((study, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-700 hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="flex gap-2 mb-6">
                  {study.tags.map(tag => <span key={tag} className="text-[10px] font-black font-mono text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">{study.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">{study.desc}</p>
                <span className="text-indigo-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-xs uppercase tracking-widest">
                  Read Technical Study <ArrowRight size={16} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="pt-10 px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">Scale Your <br /><span className="text-indigo-600 italic">Learning.</span></h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mt-6">
            Partner with an engineering team that understands how to build engaging, interactive, and concurrent educational technology at speed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-black rounded-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-xs uppercase tracking-[0.2em]">
              Discuss Your Project
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-black rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-xs uppercase tracking-[0.2em]">
              Speak with an Architect
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}