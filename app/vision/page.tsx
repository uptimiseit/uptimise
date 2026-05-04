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





