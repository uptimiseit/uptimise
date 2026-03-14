

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
  Cpu, Zap, Fingerprint, Network, ArrowRight 
} from 'lucide-react';
import FAQSection from '../components/HomePage/FAQSection';

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* --- Section 1: The Manifesto (Hero) --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Fingerprint size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
                Identity_Protocol::Uptimise_IT
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
              Engineering <br />
              <span className="text-blue-600 italic">Evolution.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              We didn't build another agency. We built a system. Uptimise IT is the intersection of elite human ingenuity and autonomous intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Our Philosophy (The 100x Engineer) --- */}
      <section className="py-32 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight">
              The 100x <br /> Engineer <span className="text-blue-600">DNA.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                In a traditional agency, a developer spends 70% of their time on boilerplate, documentation, and repetitive testing. 
              </p>
              <p className="font-bold text-slate-950 border-l-4 border-blue-600 pl-6">
                At Uptimise IT, our engineers use orchestrated AI agents to handle the "noise," allowing them to focus 100% on high-level architecture, complex logic, and product quality.
              </p>
              <p>
                This isn't just "using AI"—it's a fundamental shift in how software is birthed. We call this the **100x Philosophy**.
              </p>
            </div>
          </div>

          {/* Visual Diagram Placeholder */}
          <div className="relative p-12 bg-slate-50 rounded-[4rem] border border-slate-100 overflow-hidden group">
             <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                    { label: "HUMAN", val: "STRATEGY", icon: <Users /> },
                    { label: "AI", val: "VELOCITY", icon: <Zap /> },
                    { label: "SYSTEM", val: "PRECISION", icon: <ShieldCheck /> },
                    { label: "CODE", val: "SCALABILITY", icon: <Cpu /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-500 transition-all">
                        <div className="text-blue-600 mb-4">{stat.icon}</div>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-xl font-black text-slate-950 uppercase italic">{stat.val}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Core Mission & Vision --- */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="p-12 bg-white rounded-[3rem] border border-slate-100 space-y-6 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
               <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                  <Target size={24} />
               </div>
               <h3 className="text-3xl font-black text-slate-950 tracking-tight">Our Mission</h3>
               <p className="text-slate-500 leading-relaxed font-medium">
                  To democratize elite-level engineering for startups and enterprises by leveraging the AI-Native Software Factory model. We aim to reduce the "time-to-market" for revolutionary ideas from months to weeks.
               </p>
            </div>

            {/* Vision */}
            <div className="p-12 bg-slate-950 rounded-[3rem] text-white space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Network size={140} />
               </div>
               <div className="w-12 h-12 rounded-2xl bg-white text-slate-950 flex items-center justify-center relative z-10">
                  <Lightbulb size={24} />
               </div>
               <h3 className="text-3xl font-black tracking-tight relative z-10">Our Vision</h3>
               <p className="text-slate-400 leading-relaxed font-medium relative z-10">
                  To become the global standard for AI-assisted product engineering. We envision a world where system complexity is managed by machines, while human creativity drives digital transformation.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 4: Our Squad Values --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] font-mono italic">// The_Code_Of_Conduct</h4>
            <h2 className="text-5xl font-black text-slate-950 tracking-tighter">Operating Standards.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { title: "Radical Transparency", desc: "No black boxes. Every sprint, every line of code, and every architecture decision is visible to the client in real-time." },
                { title: "AI-First, Not AI-Only", desc: "We leverage AI for velocity, but human architects handle the nuance, security, and final validation." },
                { title: "Scalability by Default", desc: "We don't build MVPs that break. Every system is architected for millions of concurrent users from Day 1." }
            ].map((value, i) => (
                <div key={i} className="space-y-4">
                    <div className="text-blue-600 font-mono text-xl font-black italic">0{i+1}.</div>
                    <h5 className="text-2xl font-black text-slate-950 tracking-tight">{value.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* --- Section 5: CTA --- */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto p-12 md:p-24 bg-blue-600 rounded-[4rem] text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none relative z-10">
                Ready to build the <br /> future of your industry?
            </h2>
            <button className="relative z-10 px-10 py-5 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all flex items-center gap-3">
                Start the Mission <ArrowRight size={18} />
            </button>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;