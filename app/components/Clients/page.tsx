// 'use client';

// import React from "react";
// import { motion, Variants } from "framer-motion";



// export default function TestimonialsPage() {
//   const testimonials = [
//     {
//       industry: "SaaS Platform Development",
//       quote: "Uptimise IT helped us build a scalable SaaS platform that supports our growing user base. Their engineering team designed a strong architecture and maintained clear communication throughout the development process.",
//       role: "Technology Startup Founder",
//     },
//     {
//       industry: "Mobile Application Platform",
//       quote: "Working with Uptimise IT was a smooth experience. Their team understood our requirements quickly and delivered a high-quality mobile application integrated with our backend systems.",
//       role: "Product Manager, Digital Platform",
//     },
//     {
//       industry: "AI Automation System",
//       quote: "The Uptimise team demonstrated strong technical knowledge while building our automation platform. Their structured development approach helped us launch our product efficiently.",
//       role: "Operations Director",
//     },
//     {
//       industry: "Marketplace Platform",
//       quote: "Our marketplace platform required complex integrations and scalable infrastructure. Uptimise IT provided the technical expertise needed to build a reliable system.",
//       role: "E-commerce Platform Founder",
//     },
//     {
//       industry: "Enterprise Software Development",
//       quote: "Uptimise IT worked closely with our internal teams to develop an enterprise workflow system that streamlined our operations. Their engineers were highly collaborative and solution-oriented.",
//       role: "Enterprise Technology Lead",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
//       {/* 1. Hero Section */}
//       <section className="py-24 px-6 max-w-7xl mx-auto text-center space-y-6">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           // variants={staggerContainer}
//         >
//           <motion.h3 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
//             Client Testimonials
//           </motion.h3>
//           <motion.h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 max-w-4xl mx-auto leading-none uppercase">
//             Built on <span className="text-blue-600 italic">Trust.</span>
//           </motion.h1>
//           <motion.p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mt-6">
//             At Uptimise IT, we build long-term partnerships with companies that rely on technology to power their growth and operations.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* 2. Trust Indicators Banner */}
//       <section className="border-y border-slate-100 bg-slate-50 py-12 px-6">
//         <div className="max-w-7xl mx-auto text-center space-y-8">
//           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-mono">
//             // Industry_Focus_2026
//           </p>
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             // variants={staggerContainer}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {["SaaS Platforms", "AI Products", "FinTech Systems", "E-commerce Platforms", "Enterprise Software"].map((item) => (
//               <motion.span 
//                 key={item} 
//                 // variants={fadeInUp}
//                 whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
//                 className="px-6 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-bold text-xs uppercase tracking-wider shadow-sm cursor-default"
//               >
//                 {item}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* 3. Testimonials Grid */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           // variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index} 
//               // variants={fadeInUp}
//               whileHover="hover"
//               className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 flex flex-col justify-between space-y-8 group"
//             >
//               <div className="space-y-6">
//                 <motion.div
//                   animate={{ y: [0, -5, 0] }}
//                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
//                 >
//                   <svg className="w-10 h-10 text-blue-600/10 group-hover:text-blue-600/20 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                   </svg>
//                 </motion.div>
//                 <p className="text-slate-700 leading-relaxed text-lg font-medium italic">
//                   "{testimonial.quote}"
//                 </p>
//               </div>
//               <div className="pt-8 border-t border-slate-50">
//                 <p className="font-bold text-slate-950 uppercase tracking-tight">{testimonial.role}</p>
//                 <p className="text-xs font-mono font-black text-blue-600 uppercase tracking-widest mt-2">{testimonial.industry}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* 4. Value Propositions */}
//       <section className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
//         {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb10_0%,transparent_100%)] pointer-events-none" /> */}
//             <motion.div 
//                 className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]"
//                 animate={{ 
//                   backgroundPosition: ["0px 0px", "24px 24px"] 
//                 }}
//                 transition={{ 
//                   repeat: Infinity, 
//                   duration: 3, 
//                   ease: "linear" 
//                 }}
//               />
        
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
          
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Why Partners <br /><span className="text-blue-500">Choose Us.</span></h2>
//             <p className="text-slate-400 leading-relaxed text-lg font-medium">
//               We focus on building reliable digital products while maintaining elite-level communication through the factory lifecycle.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Modern technology expertise",
//                 "Scalable system architecture",
//                 "AI-assisted development workflows",
//                 "Transparent development processes",
//                 "Long-term product support"
//               ].map((benefit, i) => (
//                 <motion.li 
//                   key={i} 
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-center text-slate-200 font-bold uppercase text-xs tracking-widest"
//                 >
//                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-4" />
//                   {benefit}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8 bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl"
//           >
//             <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">The Support <br /><span className="text-blue-500 italic">Continuum.</span></h2>
//             <p className="text-slate-400 leading-relaxed text-lg font-medium">
//               Our goal is to help companies build technology platforms that evolve. We provide constant momentum through:
//             </p>
//             <div className="grid grid-cols-1 gap-4">
//               {[
//                 "Ongoing product development",
//                 "Infrastructure optimization",
//                 "Feature expansion",
//                 "Digital growth strategies"
//               ].map((service, i) => (
//                 <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
//                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                   <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-100">{service}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* 5. CTA Section */}
//       <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase leading-none">
//             Ready to <br /><span className="text-blue-600 italic">Deploy?</span>
//           </h2>
//           <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
//             We combine AI-native engineering workflows and modern infrastructure to deliver reliable digital solutions for global innovators.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
//             <motion.button 
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }}
//               className="px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl"
//             >
//               Start Your Project
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }}
//               className="px-12 py-6 bg-white border-2 border-slate-200 text-slate-800 font-black uppercase tracking-[0.2em] text-xs rounded-full"
//             >
//               Book Strategy Call
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//     </div>
//   );
// }

'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket, Target } from "lucide-react";

const testimonials = [
  {
    industry: "SaaS Platform Development",
    quote: "Uptimise IT helped us build a scalable SaaS platform that supports our growing user base. Their engineering team designed a strong architecture.",
    role: "Startup Founder",
    initials: "SF"
  },
  {
    industry: "Mobile Application",
    quote: "Working with Uptimise IT was a smooth experience. Their team delivered a high-quality mobile application integrated with our backend systems.",
    role: "Product Manager",
    initials: "PM"
  },
  {
    industry: "AI Automation",
    quote: "The team demonstrated strong technical knowledge. Their structured development approach helped us launch our product efficiently.",
    role: "Operations Director",
    initials: "OD"
  },
  {
    industry: "Marketplace Platform",
    quote: "Our platform required complex integrations. Uptimise IT provided the technical expertise needed to build a reliable system.",
    role: "E-commerce Founder",
    initials: "EF"
  },
  {
    industry: "Enterprise Software",
    quote: "They worked closely with our teams to develop a workflow system that streamlined our operations. Solution-oriented engineers.",
    role: "Technology Lead",
    initials: "TL"
  },
];

// Double the array for seamless infinite scroll
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* 1. Hero Section - More Impactful Typography */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f608_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-8 inline-block border border-blue-100">
            Social Proof
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.9] uppercase mb-8">
            The World’s <br /> 
            <span className="text-blue-600 inline-block relative">
              Innovators
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none"><path d="M3 9C118.957 4.47226 238.497 3.53508 355 3" stroke="#2563EB" strokeWidth="5" strokeLinecap="round"/></svg>
            </span> Trust Us.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            We don't just write code; we architect success stories. Explore how we've empowered global teams.
          </p>
        </motion.div>
      </section>

      {/* 2. The Sliding Testimonial Section */}
      <section className="py-10 space-y-10">
        {/* Row 1: Moving Right to Left */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            className="flex flex-nowrap gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {scrollingTestimonials.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left to Right */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            className="flex flex-nowrap gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {scrollingTestimonials.map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Industry Trust Section - Reimagined as "Metrics" */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
            <div className="space-y-2">
                <h4 className="text-4xl font-black text-slate-950">98%</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Client Retention</p>
                <p className="text-slate-500 text-sm">Long-term partnerships are our core metric.</p>
            </div>
            <div className="space-y-2">
                <h4 className="text-4xl font-black text-slate-950">24/7</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Engineering Support</p>
                <p className="text-slate-500 text-sm">Global coverage for critical systems.</p>
            </div>
            <div className="space-y-2">
                <h4 className="text-4xl font-black text-slate-950">150+</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Deployments</p>
                <p className="text-slate-500 text-sm">Successful launches in SaaS & Enterprise.</p>
            </div>
        </div>
      </section>

      {/* 4. CTA Section - Enhanced Background */}
   <section className="pb-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5"
      >
        {/* Animated Background Pulse */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
              Final_Protocol::Active
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Your Vision. <br /> Our <span className="text-blue-500 italic">Execution.</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic">
            Whether you are launching a new digital product or scaling a platform, we build the technology systems designed for the future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            {/* Redirect to Vision Page */}
            <Link href="/vision" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full transition-all shadow-xl shadow-blue-900/40"
              >
                <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Explore Our Vision
              </motion.button>
            </Link>

            {/* Redirect to Mission Page */}
            <Link href="/mission" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-white/10 text-white border border-white/20 font-black uppercase tracking-widest text-[11px] rounded-full transition-all backdrop-blur-md"
              >
                <Target size={18} className="group-hover:scale-110 transition-transform" />
                See Our Mission
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      </motion.div>
    </section>

    </div>
  );
}

// Sub-component for the card to keep it clean
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="w-[350px] md:w-[450px] shrink-0 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white text-xs font-black">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-black text-slate-950 uppercase text-xs tracking-tight">{testimonial.role}</p>
          <p className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">{testimonial.industry}</p>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm font-medium italic italic relative">
        <span className="text-4xl w-96 text-blue-100 absolute -top-4 -left-2 font-serif">“</span>
        {testimonial.quote}
      </p>
    </div>
  );
}