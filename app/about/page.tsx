

// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import HistoryTimeline from '../components/About/HistoryTimeline';
// import VisionMissionScroll from '../components/About/VisionMissionScroll';
// import { ArrowRight } from 'lucide-react';
// import { FaDebian } from 'react-icons/fa6';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// // function AboutSection() {

// // --- 2. ANIMATION HELPERS ---
// const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6, delay }}
//     className={className}
//   >
//     {children}
//   </motion.div>
// );

// export default function AboutPage() {
//     const [isExpanded, setIsExpanded] = useState(false);
//     return (

//         <>
//     {/* // Section Container: Keeps 'relative' so absolute children stay inside */}
//     <section className="w-full bg-white py-10 relative overflow-hidden font-sans">
      
//       {/* ================= TEXT CONTENT ================= */}
//       {/* z-10 ensures text is clickable and on top of images */}
//       <div className="max-w-[90%] md:max-w-4xl mx-auto text-center relative z-10 px-4">
        
//         <h6 className="text-[#ff3366] font-bold uppercase tracking-wider mb-8 text-sm md:text-base">
//           About Us
//         </h6>
        
//         <h2 className="text-xl md:text-3xl md:max-w-3xl mx-auto font-extrabold text-black leading-snug">
//           We, at Uptimiseit, apply neuromarketing and behavioral science to design, digitize and grow your business.
//         </h2>
//       </div>

//       {/* ================= LEFT IMAGE ================= */}
//       {/* CHANGED: 'relative' -> 'absolute' so it sticks to the corner */}
//       <div className="hidden lg:block relative top-10 bottom-0 left-0 z-0 select-none pointer-events-none">
//         <Image
//           src="/about-left.svg" 
//           alt="Desk setup illustration"
//           width={500} 
//           height={500}
//           className="w-auto h-auto max-w-[300px] xl:max-w-[500px]"
//         />
//       </div>

//       {/* ================= RIGHT IMAGE ================= */}
//       {/* CHANGED: 'relative' -> 'absolute' so it sticks to the corner */}
//       <div className="hidden lg:block absolute bottom-0 right-0 z-0 select-none pointer-events-none">
//         <Image
//           src="/about-right.png" 
//           alt="Person working illustration"
//           width={800} 
//           height={800}
//           className="w-auto h-[300px]"
//         />
//       </div>

//     </section>


//     <section className="w-full bg-white py-20 px-6 md:px-12 font-sans">
//       <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
//         {/* Blue Label */}
//         <h3 className="text-[#4F46E5] font-bold text-lg mb-8 tracking-wide">
//           About Us
//         </h3>

//         {/* Main Headline */}
//         <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-norma">
//           At Uptimise IT, we bridge the gap between complex technology and business growth, creating digital solutions geared toward your long-term success.
//         </p>

//         {/* Visible Description */}
//         <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-normal">
//           Since our inception, we have established ourselves as leaders in IT excellence. Our services range from full-stack web development, blockchain integration, and mobile applications to strategic UI/UX design and data-driven digital marketing.
//         </p>

//         {/* 3. The Expandable/Hidden Content */}
//         <div 
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${
//             isExpanded ? 'max-h-[1000px] opacity-100 mb-12' : 'max-h-0 opacity-0 mb-0'
//           }`}
//         >
//           <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal">
//             We specialize in creating custom software that scales with your vision. Whether you are a startup looking for an MVP or an enterprise seeking digital transformation, our team of expert developers and creative strategists work tirelessly to ensure your project is delivered on time, within budget, and beyond expectations. We don't just build software; we build the foundation for your future.
//           </p>
//         </div>

//         {/* 4. The Toggle Button */}
//         <button 
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-[#FF3366]  cursor-pointer font-bold text-lg border-b-2 border-dotted border-[#FF3366] pb-1 hover:text-red-600 hover:border-red-600 transition-colors outline-none"
//         >
//           {isExpanded ? "Less" : "More"}
//         </button>

//       </div>
//     </section>

//     {/* <HistoryTimeline /> */}
//     <VisionMissionScroll />


//      <section className="bg-white py-20">
//             <div className="max-w-5xl mx-auto px-6">
//               <FadeIn className="text-center mb-12">
//                 <h3 className="text-pink-500 font-bold tracking-widest text-sm uppercase">More About Us</h3>
//               </FadeIn>
    
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
//                 {/* CARD 1: About Us */}
//                 <Link href="/about">
//                   <FadeIn delay={0.1} className="h-full">
//                     <div className="bg-pink-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-pink-100 transition-colors duration-300">
//                       <div>
//                         <h3 className="text-3xl font-bold mb-4 text-black">About Us</h3>
//                         <p className="text-gray-600 text-sm">We are super-efficient yet humble to serve you!</p>
//                       </div>
//                       <div className="flex justify-end ">
//                         <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
//                       </div>
//                     </div>
//                   </FadeIn>
//                 </Link>
    
//                 {/* CARD 2: Team */}
//                 <Link href="/team">
//                   <FadeIn delay={0.2} className="h-full">
//                     <div className="bg-purple-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-purple-100 transition-colors duration-300">
//                       <div>
//                         <h3 className="text-3xl font-bold mb-4 text-black">Team</h3>
//                         <p className="text-gray-600 text-sm">We are proud of our experienced and accomplished team!</p>
//                       </div>
//                       <div className="flex justify-end ">
//                         <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
//                       </div>
//                     </div>
//                   </FadeIn>
//                 </Link>
    
//               </div>
//             </div>
//           </section>

//     </>
//   );
// }

// // export default AboutSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, Lightbulb, ShieldCheck, 
  Cpu, Zap, Fingerprint, Network, ArrowRight,
  Code2, Globe, Database, Milestone, Bot, 
  Layers, Search, ShieldAlert, Rocket,
  Palette,
  CheckCircle2
} from 'lucide-react';

const ecosystemNodes = [
  { 
    title: "Product Design", 
    desc: "UX Research, UI Systems, and Interactive Prototyping.", 
    icon: <Palette size={20} className="text-blue-500" /> 
  },
  { 
    title: "Software Development", 
    desc: "Scalable Web, Mobile, and SaaS Systems via Modern Stacks.", 
    icon: <Code2 size={20} className="text-purple-500" /> 
  },
  { 
    title: "Cloud Infrastructure", 
    desc: "Automated CI/CD, Containerization, and Reliable Ops.", 
    icon: <Network size={20} className="text-cyan-500" /> 
  },
  { 
    title: "Digital Growth", 
    desc: "SEO, Performance Marketing, and Data-Driven Strategies.", 
    icon: <Zap size={20} className="text-emerald-500" /> 
  }
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* --- 1. HERO: The Identity Protocol --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-slate-950">
        {/* Background Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Fingerprint size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
                System_Identity::Uptimise_IT
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
              Future <br />
              <span className="text-blue-600 italic">Engineered.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Uptimise IT is an AI-Native Software Factory. We bridge the gap between human creativity and autonomous execution to build digital platforms that scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE VISION: Architecture of Tomorrow --- */}
      <section className="lg:py-32 py-10 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter  leading-tight uppercase">
              A Shift in <br /> <span className="text-blue-600">Perspective.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
              <p>
                The future of development belongs to teams that combine <span className="text-slate-950 font-bold">intelligent automation</span> with <span className="text-slate-950 font-bold">elite human engineering.</span>
              </p>
              <p className="font-bold text-slate-950 border-l-4 border-blue-600 pl-6">
                Our vision is to operate as the world's most efficient software factory—where complexity is managed by machines, and value is driven by human expertise.
              </p>
              <p>
                We believe in a unified ecosystem. Design, Development, Infrastructure, and Growth are not separate services; they are nodes of a single product lifecycle.
              </p>
            </div>
          </div>

          <div className="relative p-10 bg-slate-50 rounded-[4rem] border border-slate-100 overflow-hidden group">
             <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="relative z-10 grid lg:grid-cols-2  gap-4">
                {ecosystemNodes.map((node, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-500 transition-all group/node">
                        <div className="mb-4 group-hover/node:scale-110 transition-transform">{node.icon}</div>
                        <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{node.title}</h4>
                        <p className="text-[11px] font-bold text-slate-950 leading-tight">{node.desc}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE ECOSYSTEM: AI-Augmented Engineering --- */}
      <section className="lg:py-32 py-20 px-6 bg-slate-950 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
            <Bot size={400} />
         </div>
         <div className="max-w-7xl mx-auto relative z-10 space-y-16">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
                <h4 className="text-blue-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] italic">// Core_Differentiator</h4>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">AI-Assisted <br /> Human-Led.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Documentation", desc: "Automated tech-spec generation." },
                 { title: "Scaffolding", desc: "Rapid module generation via AI agents." },
                 { title: "QA Audit", desc: "Predictive bug detection and testing." },
                 { title: "Infrastructure", desc: "Self-healing cloud environments." }
               ].map((item, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="text-blue-500 font-black text-xl font-mono mb-4 italic">0{i+1}</div>
                    <h5 className="text-lg font-black mb-2 uppercase tracking-tight">{item.title}</h5>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 4. WHO WE WORK WITH: Industry Reach --- */}
      <section className="lg:py-32 py-10  px-6">
        <div className="max-w-7xlmx-auto space-y-20">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end items-center gap-8 border-b border-slate-100 lg:pb-12 pb-6">
              <div className="space-y-4">
                <h2 className="text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">Who we <br /> <span className="text-blue-600">Support.</span></h2>
              </div>
              <p className="text-slate-500 max-w-sm font-medium text-center lg:text-left leading-relaxed italic">
                From early-stage founders to enterprise digital transformation teams.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: "Startups", desc: "Launching MVPs with maximum engineering velocity.", icon: <Rocket /> },
                { title: "FinTech", desc: "Building secure, high-stakes finance ecosystems.", icon: <ShieldCheck /> },
                { title: "AI Systems", desc: "Integrating intelligent agents into core products.", icon: <Bot /> },
                { title: "Enterprise", desc: "Modernizing legacy platforms for cloud scale.", icon: <Globe /> }
            ].map((client, i) => (
                <div key={i} className="space-y-4 group">
                    <div className="p-4 bg-slate-50 rounded-2xl w-fit text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {client.icon}
                    </div>
                    <h5 className="text-xl font-black text-slate-950 uppercase tracking-tight">{client.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{client.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. STANDARDS: Technology That Scales --- */}
      <section className="lg:py-24 py-10 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto border border-slate-100 rounded-[3.5rem] p-12 lg:p-20 bg-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-blue-600" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-6">
                    <h3 className="text-3xl font-black uppercase tracking-tight">Engineering Standards.</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        We don't build software that simply works. We build technology that lasts. Every platform follows our rigorous SOC2-ready standards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        "Scalable Architecture", "Clean Maintainable Code",
                        "Secure Infra Design", "CI/CD Automation"
                    ].map((std, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                            <CheckCircle2 className="text-blue-600" size={16} /> {std}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="lg:py-32 py-10 px-6 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 leading-none uppercase">
              Build the <span className="text-blue-600">Future</span> <br /> With Us.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
                 Start Your Project
              </button>
              <button className="px-12 py-6 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-50 transition-all">
                 Book Strategy Call
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default AboutPage;