'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Cpu, 
  Layers, 
  Rocket
} from 'lucide-react';

const categories = [
  {
    title: "AI Engineering",
    desc: "Automation workflows and Generative AI apps.",
    icon: <Cpu size={20} />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Software Architecture",
    desc: "Scalable backend systems and modern patterns.",
    icon: <Layers size={20} />,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Product Development",
    desc: "SaaS platforms and startup MVP insights.",
    icon: <Rocket size={20} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  }
];

const featuredPosts = [
  {
    category: "Technology Trends",
    title: "The Shift to AI-Native Development: Why 2026 is the Year of the Agent.",
    time: "12 min read",
    tag: "Trending"
  },
  {
    category: "Cloud & DevOps",
    title: "Zero-Touch CI/CD: How We Automate Deployment for Global Scale.",
    time: "8 min read",
    tag: "Engineering"
  }
];

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2
//     }
//   }
// };

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
//   }
// };

// const sidebarItem: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.5 } 
//   }
// };

const NewBlogs = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Background Decor: Subtle Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 text-center lg:text-left"
        >
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
              <BookOpen className="text-blue-600 animate-pulse" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                Knowledge_Hub::Archive
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Insights & <br />
              <span className="text-blue-600 italic">Engineering.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              Knowledge sharing is essential to building strong ecosystems. We publish deep-dives for founders and tech leaders.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full font-bold transition-all hover:bg-blue-600 shadow-2xl"
          >
            View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Category Sidebar */}
          <motion.div 
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            <h4 className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.3em] mb-6 px-4">
              # Browse by Domain
            </h4>
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                // variants={sidebarItem}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-500/20 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-2xl ${cat.bg} ${cat.color} group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm`}>
                    {cat.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-950 group-hover:text-blue-600 transition-colors uppercase text-sm tracking-tight">{cat.title}</h5>
                    <p className="text-xs text-slate-400 font-body leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Featured Articles Grid */}
          <motion.div 
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredPosts.map((post, i) => (
              <motion.div
                key={i}
                // variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="relative p-10 rounded-[3.5rem] bg-white border border-slate-100 flex flex-col justify-between group overflow-hidden hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 cursor-pointer"
              >
                {/* Visual Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />

                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                      <Clock size={12} /> {post.time}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest italic">{post.category}</p>
                    <h3 className="text-2xl font-black font-header text-slate-950 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
                  Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}

            {/* Newsletter Mini-Card */}
            <motion.div 
              // variants={fadeInUp}
              className="md:col-span-2 p-10 rounded-[3.5rem] bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb15_0%,transparent_100%)] pointer-events-none" />
               <div className="relative z-10 text-center lg:text-left">
                 <h4 className="text-2xl font-black font-header tracking-tight uppercase leading-tight">Stay synchronized with <br /> our engineering.</h4>
                 <p className="text-xs text-slate-400 font-mono mt-2 font-bold uppercase tracking-widest">Join 2,000+ founders and tech leads.</p>
               </div>
               <div className="relative z-10 flex w-full lg:w-auto gap-3">
                 <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 w-full lg:w-64 transition-all"
                 />
                 <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shrink-0"
                 >
                   Join
                 </motion.button>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NewBlogs;