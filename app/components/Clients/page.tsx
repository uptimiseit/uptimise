// 'use client';

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, Rocket, Target } from "lucide-react";

// const testimonials = [
//   {
//     industry: "SaaS Platform Development",
//     quote: "Uptimise IT helped us build a scalable SaaS platform that supports our growing user base. Their engineering team designed a strong architecture.",
//     role: "Startup Founder",
//     initials: "SF"
//   },
//   {
//     industry: "Mobile Application",
//     quote: "Working with Uptimise IT was a smooth experience. Their team delivered a high-quality mobile application integrated with our backend systems.",
//     role: "Product Manager",
//     initials: "PM"
//   },
//   {
//     industry: "AI Automation",
//     quote: "The team demonstrated strong technical knowledge. Their structured development approach helped us launch our product efficiently.",
//     role: "Operations Director",
//     initials: "OD"
//   },
//   {
//     industry: "Marketplace Platform",
//     quote: "Our platform required complex integrations. Uptimise IT provided the technical expertise needed to build a reliable system.",
//     role: "E-commerce Founder",
//     initials: "EF"
//   },
//   {
//     industry: "Enterprise Software",
//     quote: "They worked closely with our teams to develop a workflow system that streamlined our operations. Solution-oriented engineers.",
//     role: "Technology Lead",
//     initials: "TL"
//   },
// ];

// // Double the array for seamless infinite scroll
// const scrollingTestimonials = [...testimonials, ...testimonials];

// export default function TestimonialsPage() {
//   return (
//     <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
//       {/* 1. Hero Section - More Impactful Typography */}
//       <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f608_0%,transparent_70%)] pointer-events-none" />
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-8 inline-block border border-blue-100">
//             Social Proof
//           </span>
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.9] uppercase mb-8">
//             The World’s <br /> 
//             <span className="text-blue-600 inline-block relative">
//               Innovators
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none"><path d="M3 9C118.957 4.47226 238.497 3.53508 355 3" stroke="#2563EB" strokeWidth="5" strokeLinecap="round"/></svg>
//             </span> Trust Us.
//           </h1>
//           <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
//             We don't just write code; we architect success stories. Explore how we've empowered global teams.
//           </p>
//         </motion.div>
//       </section>

//       {/* 2. The Sliding Testimonial Section */}
//       <section className="py-10 space-y-10">
//         {/* Row 1: Moving Right to Left */}
//         <div className="flex overflow-hidden select-none">
//           <motion.div 
//             className="flex flex-nowrap gap-6"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           >
//             {scrollingTestimonials.map((t, i) => (
//               <TestimonialCard key={`row1-${i}`} testimonial={t} />
//             ))}
//           </motion.div>
//         </div>

//         {/* Row 2: Moving Left to Right */}
//         <div className="flex overflow-hidden select-none">
//           <motion.div 
//             className="flex flex-nowrap gap-6"
//             animate={{ x: ["-50%", "0%"] }}
//             transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//           >
//             {scrollingTestimonials.map((t, i) => (
//               <TestimonialCard key={`row2-${i}`} testimonial={t} />
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* 3. Industry Trust Section - Reimagined as "Metrics" */}
//       <section className="max-w-7xl mx-auto py-32 px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
//             <div className="space-y-2">
//                 <h4 className="text-4xl font-black text-slate-950">98%</h4>
//                 <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Client Retention</p>
//                 <p className="text-slate-500 text-sm">Long-term partnerships are our core metric.</p>
//             </div>
//             <div className="space-y-2">
//                 <h4 className="text-4xl font-black text-slate-950">24/7</h4>
//                 <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Engineering Support</p>
//                 <p className="text-slate-500 text-sm">Global coverage for critical systems.</p>
//             </div>
//             <div className="space-y-2">
//                 <h4 className="text-4xl font-black text-slate-950">150+</h4>
//                 <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Deployments</p>
//                 <p className="text-slate-500 text-sm">Successful launches in SaaS & Enterprise.</p>
//             </div>
//         </div>
//       </section>

//       {/* 4. CTA Section - Enhanced Background */}
//    <section className="pb-32 px-6">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5"
//       >
//         {/* Animated Background Pulse */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />

//         <div className="relative z-10 space-y-10">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
//           >
//             <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
//               Final_Protocol::Active
//             </span>
//           </motion.div>

//           <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
//             Your Vision. <br /> Our <span className="text-blue-500 italic">Execution.</span>
//           </h2>

//           <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic">
//             Whether you are launching a new digital product or scaling a platform, we build the technology systems designed for the future.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
//             {/* Redirect to Vision Page */}
//             <Link href="/vision" className="w-full sm:w-auto">
//               <motion.button 
//                 whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full transition-all shadow-xl shadow-blue-900/40"
//               >
//                 <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
//                 Explore Our Vision
//               </motion.button>
//             </Link>

//             {/* Redirect to Mission Page */}
//             <Link href="/mission" className="w-full sm:w-auto">
//               <motion.button 
//                 whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-white/10 text-white border border-white/20 font-black uppercase tracking-widest text-[11px] rounded-full transition-all backdrop-blur-md"
//               >
//                 <Target size={18} className="group-hover:scale-110 transition-transform" />
//                 See Our Mission
//                 <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
//               </motion.button>
//             </Link>
//           </div>
//         </div>

//         {/* Decorative Grid Overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
//       </motion.div>
//     </section>

//     </div>
//   );
// }

// // Sub-component for the card to keep it clean
// function TestimonialCard({ testimonial }: { testimonial: any }) {
//   return (
//     <div className="w-[350px] md:w-[450px] shrink-0 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white text-xs font-black">
//           {testimonial.initials}
//         </div>
//         <div>
//           <p className="font-black text-slate-950 uppercase text-xs tracking-tight">{testimonial.role}</p>
//           <p className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">{testimonial.industry}</p>
//         </div>
//       </div>
//       <p className="text-slate-600 leading-relaxed text-sm font-medium italic italic relative">
//         <span className="text-4xl w-96 text-blue-100 absolute -top-4 -left-2 font-serif">“</span>
//         {testimonial.quote}
//       </p>
//     </div>
//   );
// }


'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket, Target, Quote, ShieldCheck, Star } from "lucide-react";

const testimonials = [
  {
    industry: "SaaS Platform Development",
    quote: "Uptimise IT helped us build a scalable SaaS platform that supports our growing user base. Their engineering team designed a strong architecture.",
    role: "Startup Founder",
    initials: "SF",
    project: "CloudScale Pro"
  },
  {
    industry: "Mobile Application",
    quote: "Working with Uptimise IT was a smooth experience. Their team delivered a high-quality mobile application integrated with our backend systems.",
    role: "Product Manager",
    initials: "PM",
    project: "SwiftPay Mobile"
  },
  {
    industry: "AI Automation",
    quote: "The team demonstrated strong technical knowledge. Their structured development approach helped us launch our product efficiently.",
    role: "Operations Director",
    initials: "OD",
    project: "NeuralOps AI"
  },
  {
    industry: "Marketplace Platform",
    quote: "Our platform required complex integrations. Uptimise IT provided the technical expertise needed to build a reliable system.",
    role: "E-commerce Founder",
    initials: "EF",
    project: "GlobalTrade Hub"
  },
  {
    industry: "Enterprise Software",
    quote: "They worked closely with our teams to develop a workflow system that streamlined our operations. Solution-oriented engineers.",
    role: "Technology Lead",
    initials: "TL",
    project: "Nexus ERP"
  },
];

const scrollingTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#2563eb0a_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-8 border border-blue-100 shadow-sm">
            <ShieldCheck size={14} />
            Verified Case Studies
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.85] uppercase mb-8">
            The World’s <br /> 
            <span className="text-blue-600 inline-block relative">
              Innovators
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 358 12" 
                fill="none"
              >
                <path d="M3 9C118.957 4.47226 238.497 3.53508 355 3" stroke="#2563EB" strokeWidth="5" strokeLinecap="round"/>
              </motion.svg>
            </span> Trust Us.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            We architect high-performance digital ecosystems for teams that refuse to settle for average.
          </p>
        </motion.div>
      </section>

      {/* 2. Enhanced Infinite Slider */}
      <section className="py-10 relative">
        {/* Gradient Fades for Slider edge */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFDFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFDFF] to-transparent z-10 pointer-events-none" />

        <div className="space-y-12">
          {/* Row 1 */}
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex flex-nowrap gap-8"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              whileHover={{ transition: { duration: 60 } }} // Slow down on hover
            >
              {scrollingTestimonials.map((t, i) => (
                <TestimonialCard key={`row1-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Inverse */}
          {/* <div className="flex overflow-hidden group">
            <motion.div 
              className="flex flex-nowrap gap-8"
              animate={{ x: ["-33.33%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              whileHover={{ transition: { duration: 70 } }}
            >
              {scrollingTestimonials.map((t, i) => (
                <TestimonialCard key={`row2-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div> */}
        </div>
      </section>

      {/* 3. Metrics Section */}
  {/* 3. Metrics Section */}
<section className="max-w-7xl mx-auto py-32 px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
      {[
        { val: "98%", label: "Retention Rate", desc: "Long-term engineering partnerships." },
        { val: "24/7", label: "Global Uptime", desc: "Critical system monitoring and support." },
        { val: "150+", label: "Deployments", desc: "Successful product launches since 2024." }
      ].map((m, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -5 }}
          className="space-y-2 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all"
        >
            {/* CHANGE h4 TO h3 HERE */}
            <h3 className="text-5xl font-black text-slate-950 tracking-tighter">{m.val}</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">{m.label}</p>
            <p className="text-slate-500 text-sm font-medium">{m.desc}</p>
        </motion.div>
      ))}
  </div>
</section>

      {/* 4. CTA Section */}
      <section className="pb-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              Your Vision. <br /> Our <span className="text-blue-500 italic">Execution.</span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
              <Link href="/vision" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-blue-500 transition-all">
                  <Rocket size={18} />
                  Explore Our Vision
                </button>
              </Link>
              <Link href="/mission" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                  <Target size={18} />
                  See Our Mission
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="w-[380px] md:w-[500px] shrink-0 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:border-blue-400/30 transition-all duration-500 group relative">
      <div className="absolute top-8 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        <Quote size={80} />
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-blue-900/10">
          {testimonial.initials}
        </div>
        <div>
          <div className="flex gap-0.5 mb-1 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <p className="font-black text-slate-950 uppercase text-xs tracking-tight">{testimonial.role}</p>
          <p className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">{testimonial.project}</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed text-lg font-medium italic">
          "{testimonial.quote}"
        </p>
        
        <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Sector: {testimonial.industry}
          </span>
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}