// 'use client';

// import React, { useState, useEffect } from 'react'; // Added useEffect
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   BookOpen, ArrowRight, Clock, Cpu, 
//   Layers, Rocket, Loader2, CheckCircle2 
// } from 'lucide-react';
// import Link from 'next/link';

// const categories = [
//   {
//     title: "AI Engineering",
//     desc: "Automation workflows and Generative AI apps.",
//     icon: <Cpu size={20} />,
//     color: "text-blue-600",
//     bg: "bg-blue-50"
//   },
//   {
//     title: "Software Architecture",
//     desc: "Scalable backend systems and modern patterns.",
//     icon: <Layers size={20} />,
//     color: "text-purple-600",
//     bg: "bg-purple-50"
//   },
//   {
//     title: "Product Development",
//     desc: "SaaS platforms and startup MVP insights.",
//     icon: <Rocket size={20} />,
//     color: "text-emerald-600",
//     bg: "bg-emerald-50"
//   }
// ];

// const NewBlogs = () => {
//   // --- State for Live Blogs ---
//   const [blogData, setBlogData] = useState([]);
//   const [blogsLoading, setBlogsLoading] = useState(true);

//   // --- Newsletter State ---
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

//   // --- Fetch Live Blogs ---
// useEffect(() => {
//   const fetchBlogs = async () => {
//     try {
//       // Added category and isHome query parameters to the URL
//       const res = await fetch(
//         "https://uptimiseit-admin.vercel.app/api/blogs?limit=2&category=Engineering%20Blogs&isHome=true"
//       );
      
//       const json = await res.json();
      
//       if (json.success) {
//         setBlogData(json.data);
//       }
//     } catch (err) {
//       console.error("Failed to load blogs", err);
//     } finally {
//       setBlogsLoading(false);
//     }
//   };
  
//   fetchBlogs();
// }, []);

//   const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!email) return;
//     setStatus("loading");
//     setMessage("");
//     try {
//       const res = await fetch("https://uptimiseit-admin.vercel.app/api/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: email.toLowerCase() }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setStatus("success");
//         setEmail("");
//         setMessage("Welcome to the inner circle.");
//       } else {
//         setStatus("error");
//         setMessage(data.message || "Subscription failed.");
//       }
//     } catch (err) {
//       setStatus("error");
//       setMessage("Network error. Try again.");
//     }
//   };

//   return (
//     <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 text-center lg:text-left"
//         >
//           <div className="max-w-2xl space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
//               <BookOpen className="text-blue-600 animate-pulse" size={14} />
//               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
//                 Knowledge_Hub::Archive
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-50 leading-[0.85] uppercase">
//               Insights & <br />
//               <span className="text-blue-300 italic">Engineering.</span>
//             </h2>
//           </div>
          
//           <Link href="/blog/engineeringBlogs">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-full font-bold transition-all hover:bg-blue-600 shadow-2xl"
//             >
//               View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </Link>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* Left: Category Sidebar */}
//           <motion.div className="lg:col-span-4 space-y-4">
//             <h4 className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.3em] mb-6 px-4"># Browse by Domain</h4>
//             {categories.map((cat, i) => (
//               <div key={i} className="group p-6 rounded-[2.5rem] bg-slate-50/5 border border-transparent hover:border-blue-500/20 hover:bg-slate-800 transition-all duration-500 cursor-pointer">
//                 <div className="flex items-start gap-5">
//                   <div className={`p-3 rounded-2xl ${cat.bg} ${cat.color}`}>
//                     {cat.icon}
//                   </div>
//                   <div className="space-y-1">
//                     <h5 className="font-bold text-slate-50 uppercase text-sm tracking-tight">{cat.title}</h5>
//                     <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Right: Featured Articles Grid (FETCHED FROM API) */}
//           <motion.div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {blogsLoading ? (
//                [1,2].map(n => <div key={n} className="h-64 rounded-[3.5rem] bg-slate-800 animate-pulse" />)
//             ) : (
//               blogData.map((post: any, i) => (
//                 <Link href={`/blog/${post.slug}`} key={post.id}>
//                   <motion.div whileHover={{ y: -10 }} className="relative p-10 h-full rounded-[3.5rem] bg-white border border-slate-100 flex flex-col justify-between group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
//                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
//                     <div className="space-y-8 relative z-10">
//                       <div className="flex justify-between items-center">
//                         <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
//                           {post.subCategory || "Engineering"}
//                         </span>
//                         <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
//                           <Clock size={12} /> {new Date(post.createdAt).toLocaleDateString()}
//                         </div>
//                       </div>
//                       <div className="space-y-4">
//                         <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest italic">{post.category}</p>
//                         <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
//                           {post.title}
//                         </h3>
//                       </div>
//                     </div>
//                     <div className="mt-10 flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
//                       Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </motion.div>
//                 </Link>
//               ))
//             )}

//             {/* Newsletter Mini-Card */}
//             <motion.div className="md:col-span-2 p-10 rounded-[3.5rem] bg-neutral-950 border border-slate-700 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
//                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb15_0%,transparent_100%)] pointer-events-none" />
//                <div className="relative z-10 text-center lg:text-left">
//                  <h4 className="text-2xl font-black tracking-tight uppercase leading-tight">Stay synchronized with <br /> our engineering.</h4>
//                  <p className="text-xs text-slate-400 font-mono mt-2 font-bold uppercase tracking-widest">Join 2,000+ founders and tech leads.</p>
//                </div>
               
//                <form onSubmit={handleSubscribe} className="relative z-10 flex flex-col w-full lg:w-auto">
//                  <div className="flex w-full lg:w-auto gap-3">
//                    <motion.input 
//                     whileFocus={{ scale: 1.02 }}
//                     type="email" required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     disabled={status === "loading" || status === "success"}
//                     placeholder={status === "success" ? "Subscribed!" : "name@company.com"} 
//                     className={`bg-white/5 border ${status === "error" ? "border-rose-500" : "border-white/10"} rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 w-full lg:w-64 transition-all disabled:opacity-50`}
//                    />
//                    <motion.button 
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     disabled={status === "loading" || status === "success"}
//                     className="bg-blue-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shrink-0 flex items-center justify-center min-w-[100px] disabled:bg-slate-800"
//                    >
//                     {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : 
//                      status === "success" ? <CheckCircle2 size={18} /> : "Join"}
//                    </motion.button>
//                  </div>
//                  <AnimatePresence>
//                    {message && (
//                      <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
//                        className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${status === "success" ? "text-emerald-400" : "text-rose-500"}`}>
//                        {message}
//                      </motion.p>
//                    )}
//                  </AnimatePresence>
//                </form>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewBlogs;

'use client';

import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo for performance
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ArrowRight, Clock, Loader2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import { DynamicIcon } from '@/app/components/Navbar/DynamicIcon';

const NewBlogs = () => {
  // --- Data States ---
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [blogData, setBlogData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Newsletter State ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch Categories first
        const catRes = await fetch("https://uptimiseit-admin.vercel.app/api/categories");
        const catJson = await catRes.json();
        
        // 2. Fetch Blogs
        const blogRes = await fetch("https://uptimiseit-admin.vercel.app/api/blogs");
        const blogJson = await blogRes.json();

        if (catJson.success) {
          setAllCategories(catJson.data);
          // Auto-select the first category found
          if (catJson.data.length > 0) {
            setActiveCategory(catJson.data[0]);
          }
        }

        if (blogJson.success) {
          setBlogData(blogJson.data);
        }
      } catch (err) {
        console.error("Critical: Sync failed", err);
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, []);

  // --- FIXED FILTERING LOGIC ---
  // We use categoryId (Number) instead of category (String) to match your DB schema
  const displayBlogs = useMemo(() => {
    if (!activeCategory || !blogData.length) return [];
    
    return blogData
      .filter((post) => Number(post.categoryId) === Number(activeCategory.id))
      .slice(0, 2);
  }, [activeCategory, blogData]);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://uptimiseit-admin.vercel.app/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("Node synchronized. Welcome.");
      } else {
        setStatus("error");
        setMessage("Authentication failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network timeout.");
    }
  };

  return (
    <section className="relative bg-[#020617] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10">
              <BookOpen className="text-blue-500" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">Stream_Protocol::v1.0</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase">
              Insights & <br /> <span className="text-blue-500 italic">Engineering.</span>
            </h2>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory?.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <Link href={`/blog/${activeCategory?.slug || ''}`}>
                <button className="group flex items-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-xs">
                  Explore {activeCategory?.name} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Sector Selection */}
          <div className="lg:col-span-4 space-y-4">
           <p className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-[0.4em] mb-8 px-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" /> Select_Node
  </p>
            {loading ? (
              [1,2,3].map(i => <div key={i} className="h-24 rounded-[2.5rem] bg-white/5 animate-pulse" />)
            ) : (
              allCategories.map((cat) => (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left group p-6 rounded-[2.5rem] border transition-all duration-500 ${
                    activeCategory?.id === cat.id 
                    ? "bg-blue-600 border-blue-400 shadow-2xl shadow-blue-900/40 translate-x-2" 
                    : "bg-white/[0.03] border-transparent hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${activeCategory?.id === cat.id ? "bg-white text-blue-600 scale-110" : "bg-slate-900 text-slate-400"}`}>
                      <DynamicIcon name={cat.icon} />
                    </div>
                    <div className="space-y-1">
                 <h3 className={`font-black uppercase text-[13px] tracking-tight ${activeCategory?.id === cat.id ? "text-white" : "text-slate-200"}`}>
            {cat.name}
          </h3>
                      <p className={`text-[10px] font-medium leading-relaxed line-clamp-1 ${activeCategory?.id === cat.id ? "text-blue-100" : "text-slate-500"}`}>{cat.description || "Operational intelligence."}</p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>

          {/* RIGHT: Processed Logs */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {loading ? (
                [1,2].map(n => <div key={n} className="h-96 rounded-[3.5rem] bg-white/5 animate-pulse" />)
              ) : displayBlogs.length > 0 ? (
                <AnimatePresence mode="wait">
                  {displayBlogs.map((post: any) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link href={`/blog/${activeCategory?.slug}/${post.slug}`}>
                        <div className="group relative p-12 h-full rounded-[4rem] bg-white flex flex-col justify-between overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-700">
                          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/[0.02] rounded-full blur-3xl group-hover:bg-blue-500/5 transition-colors" />
                          
                          <div className="space-y-10 relative z-10">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                                {post.subCategory || "CORE"}
                              </span>
                              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 font-mono">
                                <Clock size={12} /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Log::{activeCategory?.name}</p>
                              <h3 className="text-3xl font-black text-slate-950 leading-[1.1] group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                                {post.title}
                              </h3>
                            </div>
                          </div>

                          <div className="mt-12 flex items-center gap-3 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
                            Initialize_Entry <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                <div className="md:col-span-2 p-24 text-center border-2 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
                    <Loader2 size={24} />
                  </div>
                  <p className="text-slate-600 font-mono text-xs uppercase tracking-[0.3em]">Sector_Empty :: Waiting for deployment</p>
                </div>
              )}
            </div>

            {/* SYNC Newsletter */}
            <motion.div className="p-12 rounded-[4rem] bg-[#0f172a] border border-white/5 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#2563eb10_0%,transparent_100%)] pointer-events-none" />
              <div className="relative z-10 text-center lg:text-left space-y-2">
              <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">Stay_Synchronized.</h3>
                <p className="text-xs text-slate-400 font-mono font-bold uppercase tracking-[0.2em]">Archiving logic for 2,000+ tech leaders.</p>
              </div>
              
              <form onSubmit={handleSubscribe} className="relative z-10 flex flex-col w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                  <input 
                    type="email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    placeholder="ENTER_WORK_EMAIL" 
                    className="bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 text-xs font-mono font-bold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 w-full lg:w-80 transition-all uppercase tracking-widest placeholder:text-slate-700"
                  />
                  <button 
                    disabled={status === "loading" || status === "success"}
                    className="bg-blue-600 px-10 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-all disabled:bg-slate-800 shadow-xl shadow-blue-600/20"
                  >
                    {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : 
                     status === "success" ? <CheckCircle2 size={18} /> : "Initialize_Sync"}
                  </button>
                </div>
                {message && <p className="text-[10px] mt-4 font-black uppercase text-emerald-400 tracking-widest text-center lg:text-left">{message}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlogs;