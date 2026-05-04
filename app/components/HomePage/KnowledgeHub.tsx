// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { 
//   BookOpen, ArrowRight, Sparkles, 
//   Binary, Workflow, Rocket, 
//   TrendingUp, Timer, Palette, Radio
// } from 'lucide-react';

// const articles = [
//   {
//     category: "AI Engineering",
//     title: "Orchestrating Agentic Workflows for Enterprise Scale",
//     time: "8 min read",
//     icon: <Sparkles size={18} />,
//     color: "text-blue-600",
//     bg: "bg-blue-50"
//   },
//   {
//     category: "Software Architecture",
//     title: "From Monolith to Micro-Intelligence: The 2026 Shift",
//     time: "12 min read",
//     icon: <Binary size={18} />,
//     color: "text-purple-600",
//     bg: "bg-purple-50"
//   },
//   {
//     category: "Startup Building",
//     title: "The AI-Native MVP: Building for Velocity without Debt",
//     time: "6 min read",
//     icon: <Rocket size={18} />,
//     color: "text-emerald-600",
//     bg: "bg-emerald-50"
//   },
//   {
//     category: "Automation",
//     title: "Zero-Touch DevOps: Automating the Deployment Lifecycle",
//     time: "10 min read",
//     icon: <Workflow size={18} />,
//     color: "text-orange-600",
//     bg: "bg-orange-50"
//   },
//   {
//     category: "Technology Trends",
//     title: "Predictive Engineering: How AI Anticipates System Failures",
//     time: "7 min read",
//     icon: <TrendingUp size={18} />,
//     color: "text-pink-600",
//     bg: "bg-pink-50"
//   },
//   {
//     category: "Product Design",
//     title: "AI-Powered UX: Designing for Intentional Interactions",
//     time: "9 min read",
//     icon: <Palette size={18} />,
//     color: "text-cyan-600",
//     bg: "bg-cyan-50"
//   },
//   {
//     category: "IoT Systems",
//     title: "The Edge Intelligence: Bridging Hardware and AI",
//     time: "11 min read",
//     icon: <Radio size={18} />,
//     color: "text-indigo-600",
//     bg: "bg-indigo-50"
//   }
// ];



// const KnowledgeHub = () => {
//   return (
//     <section className="relative bg-slate-50 py-24 px-6 overflow-hidden">
//       {/* Background Decor: The Digital Blueprint Grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      
//       <motion.div 
//         className="max-w-7xl mx-auto relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         // variants={containerVariants}
//       >
        
//         {/* Header Block */}
//         <motion.div
//         //  variants={itemVariants}
//          className="flex flex-col lg:flex-row justify-between lg:items-end items-center mb-16 gap-8 text-center lg:text-left">
//           <div className="max-w-2xl space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 shadow-xl">
//               <BookOpen className="text-blue-400 animate-pulse" size={14} />
//               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white font-mono">
//                 Knowledge_Base::v1.0
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] uppercase">
//               Intelligence <br />
//               <span className="text-blue-600 italic">Unpacked.</span>
//             </h2>
//           </div>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-950 hover:shadow-xl transition-all"
//           >
//             Browse All Articles
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//           </motion.button>
//         </motion.div>

//         {/* Article Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {/* Main Featured Article */}
//           <motion.div
//             // variants={itemVariants}
//             whileHover={{ y: -8 }}
//             className="lg:col-span-2 p-10 rounded-[3rem] bg-slate-950 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl"
//           >
//             <motion.div 
//               animate={{ 
//                 rotate: 360,
//                 opacity: [0.05, 0.1, 0.05]
//               }}
//               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//               className="absolute top-[-10%] right-[-10%] p-12 text-blue-500"
//             >
//                <Sparkles size={350} />
//             </motion.div>

//             {/* Scanning Line Micro-interaction */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:animate-scan-fast pointer-events-none" />
            
//             <div className="space-y-8 relative z-10">
//               <div className="flex items-center gap-4">
//                 <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black tracking-widest uppercase border border-blue-400">
//                   Featured_Insight
//                 </span>
//                 <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
//                   <Timer size={12} /> 15 MIN READ
//                 </span>
//               </div>
//               <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.95] group-hover:text-blue-400 transition-colors uppercase">
//                 The Future of AI-Native <br /> Software Factories.
//               </h3>
//             </div>

//             <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
//               <p className="text-slate-400 font-body text-base max-w-sm leading-relaxed font-medium">
//                 Deep dive into how we’ve optimized the product lifecycle using autonomous agent orchestration to deliver 100x engineering velocity.
//               </p>
//               <motion.div 
//                 whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#020617" }}
//                 className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg shrink-0"
//               >
//                 <ArrowRight size={24} />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Standard Article Cards */}
//           {articles.map((post, i) => (
//             <motion.div
//               key={i}
//               // variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between group hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 cursor-pointer"
//             >
//               <div className="space-y-8">
//                 <div className="flex justify-between items-start">
//                   <motion.div 
//                     whileHover={{ rotate: 15, scale: 1.1 }}
//                     className={`p-4 rounded-2xl ${post.bg} ${post.color} shadow-sm transition-all`}
//                   >
//                     {post.icon}
//                   </motion.div>
//                   <span className="text-[10px] font-mono font-black text-slate-300 uppercase tracking-widest bg-slate-50 border border-slate-100 px-2 py-1 rounded">
//                     {post.time}
//                   </span>
//                 </div>
                
//                 <div className="space-y-4">
//                   <span className={`text-[10px] font-black uppercase tracking-[0.2em] font-mono ${post.color}`}>
//                     {post.category.replace(' ', '_')}
//                   </span>
//                   <h4 className="text-2xl font-bold tracking-tight leading-tight text-slate-950 uppercase font-header">
//                     {post.title}
//                   </h4>
//                 </div>
//               </div>

//               <div className="mt-10 pt-6 border-t border-slate-50 flex justify-end">
//                 <motion.div 
//                   whileHover={{ x: 5 }}
//                   className="text-slate-300 group-hover:text-blue-600 transition-colors duration-300"
//                 >
//                   <ArrowRight size={24} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes scan {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(200%); }
//         }
//         .animate-scan-fast {
//           animation: scan 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default KnowledgeHub;



'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Timer, TrendingUp, Loader2
} from 'lucide-react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  categoryId: number; // Using ID for strict filtering
  subCategory?: string;
  createdAt: string;
}

const TechTrends = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trends, setTrends] = useState<Blog[]>([]);
  const categorySlug = "tech-trends"; 

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setIsLoading(true);
        // Fetch all blogs
        const res = await fetch("https://uptimiseit-admin.vercel.app/api/blogs", {
           cache: 'no-store'
        });
        const json = await res.json();
        
        if (json.success) {
          // 🔥 STRICT FILTER: categoryId 5 = "Tech Trends"
          const filteredTrends = json.data
            .filter((blog: any) => Number(blog.categoryId) === 5)
            .slice(0, 7);
          
          setTrends(filteredTrends);
        }
      } catch (err) {
        console.error("Failed to load tech trends", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrends();
  }, []);

  return (
    <section className="relative bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-center mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 shadow-xl">
              <TrendingUp className="text-blue-400 animate-pulse" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white font-mono">
                Market_Analysis::v2026
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Technology <br />
              <span className="text-blue-600 italic">Forecasting.</span>
            </h2>
          </div>
          <Link href={`/blog/${categorySlug}`}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-950 hover:shadow-xl transition-all uppercase tracking-widest text-xs"
            >
              Explore Archive
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-20">
            <Loader2 size={40} className="animate-spin text-blue-600" />
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-widest">Syncing_Trends...</p>
          </div>
        ) : trends.length === 0 ? (
          <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-[3rem]">
            <p className="font-mono text-slate-400 text-xs uppercase tracking-widest">No Forecast Nodes Available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Main Featured Trend */}
            {trends[0] && (
              <Link href={`/blog/${categorySlug}/${trends[0].slug}`} className="lg:col-span-2">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-10 h-full rounded-[3rem] bg-slate-950 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl"
                >
                  <motion.div 
                    animate={{ rotate: 360, opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] p-12 text-blue-500 pointer-events-none"
                  >
                     <Sparkles size={350} />
                  </motion.div>

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black tracking-widest uppercase border border-blue-400">
                        Primary_Forecast
                      </span>
                      <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        <Timer size={12} /> {trends[0].subCategory || 'Latest Trend'}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.95] group-hover:text-blue-400 transition-colors uppercase">
                      {trends[0].title}
                    </h3>
                  </div>

                  <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
                    <p className="text-slate-400 font-body text-base max-w-sm leading-relaxed font-medium line-clamp-3">
                      {trends[0].excerpt}
                    </p>
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg shrink-0 group-hover:bg-white group-hover:text-slate-950">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}

            {/* Sub-trends Grid */}
            {trends.slice(1).map((trend) => (
              <Link key={trend.id} href={`/blog/${categorySlug}/${trend.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-8 h-full rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 shadow-sm transition-all group-hover:rotate-12">
                        <TrendingUp size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-black text-slate-800 uppercase tracking-widest bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                        {trend.subCategory || 'Trend'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] font-mono text-blue-600">
                        DECODING_FUTURE
                      </span>
                      <h4 className="text-2xl font-bold tracking-tight leading-tight text-slate-950 uppercase line-clamp-3">
                        {trend.title}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-50 flex justify-end">
                    <div className="text-slate-300 group-hover:text-blue-600 transition-colors duration-300">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechTrends;