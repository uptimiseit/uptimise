import React from "react";
import Link from "next/link";
import { 
  GraduationCap, ServerCrash, UserMinus, 
  VideoOff, ArrowRight, Layout, Database, 
  Zap, CheckCircle2, Building2, Users, Globe,
  ArrowUpRight, PlayCircle, BrainCircuit, 
  MonitorPlay, MessageSquare, BookOpen, Trophy
} from "lucide-react";

export default function EdtechIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Knowledge/Learning Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-amber-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-sm font-bold tracking-wide uppercase mb-4">
          <GraduationCap size={16} /> EdTech Platform Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Digital Learning</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We build high-concurrency, interactive e-learning ecosystems. From global language apps to enterprise Learning Management Systems (LMS), we engineer platforms that drive engagement and scale effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Build Your Learning Platform
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Consult an EdTech Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. EDTECH CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Friction in E-Learning</h2>
            <p className="text-lg text-slate-600">Off-the-shelf LMS tools are rigid, boring, and expensive to scale. To build a profitable EdTech business, you must overcome these core technical hurdles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Low Completion Rates", desc: "Clunky UX and lack of interactive features cause students to lose focus, resulting in dismal course completion rates and high churn.", icon: <UserMinus className="text-red-500 w-8 h-8" /> },
              { title: "Concurrent User Crashes", desc: "Live classes and synchronous exams create massive traffic spikes that instantly crash poorly architected monolithic servers.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Crippling Video Costs", desc: "Relying on unoptimized video hosting or third-party APIs destroys your profit margins as your student base scales globally.", icon: <VideoOff className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDTECH ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Our Architecture Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Headless LMS & Scalable Media
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We decouple the learning interface from the backend database. This "Headless" approach allows us to build highly gamified, lightning-fast student dashboards while maintaining a rock-solid, scalable backend for video streaming and analytics.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "WebRTC & HLS for ultra-low latency live video streaming.",
                "Event-driven architecture to handle thousands of concurrent exams.",
                "SCORM & xAPI compliance for seamless content portability.",
                "Global Edge Caching to serve heavy media files instantly."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-indigo-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#0A0F24] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-indigo-900/50">
             {/* Abstract EdTech Architecture CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <MonitorPlay className="text-amber-400" /> Media & Data Flow
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Student Interface */}
               <div className="flex items-center justify-between bg-indigo-500/20 border border-indigo-400/50 p-4 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.15)] relative">
                 <div className="flex items-center gap-3 text-indigo-300 font-bold"><Layout size={18} /> React/Next.js Learner Portal</div>
                 <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                 </div>
               </div>
               
               <div className="flex justify-between w-3/4 mx-auto px-4 py-1">
                 <ArrowRight className="text-slate-500 rotate-90" />
                 <ArrowRight className="text-slate-500 rotate-90" />
               </div>

               {/* Backend Services */}
               <div className="grid grid-cols-2 gap-3 w-full">
                 <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center flex flex-col items-center">
                   <PlayCircle className="w-6 h-6 text-amber-400 mb-2" />
                   <p className="text-white font-bold text-[11px] uppercase">Video Delivery Network</p>
                   <p className="text-slate-400 text-[10px] mt-1">HLS / WebRTC</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center flex flex-col items-center">
                   <Database className="w-6 h-6 text-emerald-400 mb-2" />
                   <p className="text-white font-bold text-[11px] uppercase">LMS Core API</p>
                   <p className="text-slate-400 text-[10px] mt-1">Progress & Analytics</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Learning Systems We Build</h2>
            <p className="text-lg text-slate-600">From K-12 institutional software to modern creator-led cohort platforms, we build the exact architecture your educational model requires.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom LMS & LXP", icon: <BookOpen size={28} />, desc: "Bespoke Learning Management Systems tailored for universities or massive open online courses (MOOCs)." },
              { title: "Corporate Training", icon: <Building2 size={28} />, desc: "Secure internal portals for employee onboarding, compliance training, and skill development." },
              { title: "Cohort-Based Platforms", icon: <Users size={28} />, desc: "Interactive community-driven platforms featuring live streaming, group chats, and peer grading." },
              { title: "Language & Micro-Learning", icon: <Globe size={28} />, desc: "Highly gamified mobile applications focused on daily streaks, audio processing, and quick retention." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-500 transition-colors group">
                <div className="text-indigo-600 mb-6 bg-indigo-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Modern EdTech Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We utilize a specialized stack designed to handle heavy video streaming, real-time socket connections for chat, and highly relational data for complex grading rubrics.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React Native", "Node.js", "Python", "AWS MediaLive", "Mux", "WebRTC", "PostgreSQL", "Socket.io"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-indigo-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-700 font-bold mb-2">Learner Interfaces</h4><p className="text-slate-600 text-sm">React, Next.js, Flutter</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-700 font-bold mb-2">Video & Streaming</h4><p className="text-slate-600 text-sm">AWS IVS, WebRTC, Mux</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-700 font-bold mb-2">Core API & Logic</h4><p className="text-slate-600 text-sm">Node.js, Python (Django)</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-700 font-bold mb-2">Real-Time Chat</h4><p className="text-slate-600 text-sm">Socket.io, Redis Pub/Sub</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (Adaptive Learning) */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold tracking-wide uppercase">
              <BrainCircuit size={16} /> AI Software Factory
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Accelerated Build & <span className="text-amber-400">Adaptive Learning</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our AI Factory builds your core LMS architecture 40% faster. But we don't stop there. We integrate AI directly into the student experience, creating adaptive learning paths that adjust dynamically based on a student's performance.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "LLM-powered AI Tutors for 24/7 student support.",
                "Automated transcription and translation of video lectures.",
                "Generative quiz creation based on course transcripts.",
                "Dynamic curriculum adjustments based on weak spots."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(251,191,36,0.1)]">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold flex items-center gap-2"><BrainCircuit className="text-indigo-400"/> Adaptive Path Logic</span>
             </div>
             <div className="space-y-4">
               {/* Module 1 */}
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div><p className="text-white font-bold text-sm">Module 1 Quiz</p><p className="text-slate-400 text-xs">Score: 45% (Failed)</p></div>
                 <div className="text-right"><p className="text-red-400 font-bold text-sm">AI Trigger</p><p className="text-slate-500 text-xs">Analyze weak spots</p></div>
               </div>
               
               <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>
               
               {/* AI Action */}
               <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/50 flex justify-between items-center shadow-inner">
                 <div><p className="text-indigo-100 font-bold text-sm">Dynamic Remediation</p><p className="text-indigo-300/70 text-xs">Generating custom practice set...</p></div>
                 <MessageSquare className="text-indigo-400" />
               </div>

               <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>

               {/* Module 2 */}
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center opacity-50">
                 <div><p className="text-white font-bold text-sm">Module 2 (Locked)</p><p className="text-slate-400 text-xs">Awaiting prerequisite</p></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">EdTech Delivery Protocol</h2>
          <p className="text-lg text-slate-600">A structured engineering process designed to map complex curriculums into scalable database architecture.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Curriculum Map", desc: "Translating your educational model into database schemas (courses, modules, lessons)." },
            { step: "02", title: "UX/UI Gamification", desc: "Designing engaging learner interfaces with progress tracking and rewards." },
            { step: "03", title: "Core Build", desc: "Engineering the headless LMS, payment gateways, and video delivery network." },
            { step: "04", title: "Concurrency Test", desc: "Simulating 10,000+ simultaneous exam takers to ensure server resilience." },
            { step: "05", title: "Launch", desc: "Deploying to scalable cloud infrastructure with real-time video monitoring." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-indigo-400 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-indigo-600 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6"><Trophy size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Higher Completion Rates</h3>
            <p className="text-slate-600">Gamified UI and ultra-fast, stutter-free video playback keep students engaged, drastically reducing course drop-off rates.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Server Resilience</h3>
            <p className="text-slate-600">Event-driven backend architecture ensures your platform stays online even when thousands of students log in simultaneously for a live cohort.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><Database size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Optimized Video Costs</h3>
            <p className="text-slate-600">By utilizing modern HLS streaming and edge-caching architectures, we drastically reduce your cloud hosting and bandwidth bills.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">EdTech Engineering Success</h2>
            <p className="text-slate-600 text-lg">See how we have engineered scalable digital learning environments for modern educators.</p>
          </div>
          <Link href="/case-studies" className="text-indigo-700 font-bold hover:text-indigo-800 flex items-center gap-2">
            View All EdTech Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Global Language Learning App", desc: "Built a highly gamified React Native mobile app featuring real-time audio processing and AI pronunciation scoring, scaling to 2M+ active users.", tags: ["React Native", "Python AI", "Gamification"] },
            { title: "Enterprise Cohort Platform", desc: "Engineered a headless LMS for a corporate training company, integrating live WebRTC video, interactive whiteboards, and robust SCORM analytics.", tags: ["Next.js", "WebRTC", "Node.js"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-indigo-700 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-indigo-700 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Scale Your Learning Platform.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Partner with an engineering team that understands how to build engaging, interactive, and highly concurrent educational technology at scale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Discuss Your EdTech Build
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Speak with an Architect
          </Link>
        </div>
      </section>

    </div>
  );
}