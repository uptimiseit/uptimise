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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ArrowRight, Clock, Loader2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import { DynamicIcon } from '@/app/components/Navbar/DynamicIcon'; // Adjust path if needed

const NewBlogs = () => {
  // --- Data States ---
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Newsletter State ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // 1. Fetch Categories and Initial Blogs
  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        // Fetch Categories
        const catRes = await fetch("https://uptimiseit-admin.vercel.app/api/categories");
        const catJson = await catRes.json();
        
        if (catJson.success) {
          setAllCategories(catJson.data);
          // Set the first category as active by default
          if (catJson.data.length > 0) {
            setActiveCategory(catJson.data[0]);
          }
        }

        // Fetch Initial Blogs (All)
        const blogRes = await fetch("https://uptimiseit-admin.vercel.app/api/blogs");
        const blogJson = await blogRes.json();
        if (blogJson.success) {
          setBlogData(blogJson.data);
        }
      } catch (err) {
        console.error("Initial load failed", err);
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, []);

  // 2. Filter blogs based on the selected Category Name
  // We take the top 2 from the filtered list
  const displayBlogs = blogData
    .filter((post: any) => post.category === activeCategory?.name)
    .slice(0, 2);

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
        setMessage("Welcome to the inner circle.");
      } else {
        setStatus("error");
        setMessage("Subscription failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error.");
    }
  };

  return (
    <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <BookOpen className="text-blue-500" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono">Archive_Stream::v1</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-50 leading-[0.85] uppercase">
              Insights & <br /> <span className="text-blue-400 italic">Engineering.</span>
            </h2>
          </div>
          <Link href={`/blog/${activeCategory?.slug || ''}`}>
            <button className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all">
              Explore {activeCategory?.name} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Category Sidebar (Dynamic) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-[0.3em] mb-6 px-4"># Select_Sector</h4>
            {loading ? (
              [1,2,3].map(i => <div key={i} className="h-20 rounded-3xl bg-white/5 animate-pulse" />)
            ) : (
              allCategories.map((cat) => (
                <div 
                  key={cat.id} 
                  onClick={() => setActiveCategory(cat)}
                  className={`group p-5 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                    activeCategory?.id === cat.id 
                    ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-900/20" 
                    : "bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-2xl transition-colors ${activeCategory?.id === cat.id ? "bg-white text-blue-600" : "bg-slate-800 text-blue-400"}`}>
                      <DynamicIcon name={cat.icon} />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className={`font-bold uppercase text-xs tracking-tight ${activeCategory?.id === cat.id ? "text-white" : "text-slate-100"}`}>{cat.name}</h5>
                      <p className={`text-[10px] leading-relaxed line-clamp-1 ${activeCategory?.id === cat.id ? "text-blue-100" : "text-slate-500"}`}>{cat.description || "Technical deep dives."}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT: Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                [1,2].map(n => <div key={n} className="h-80 rounded-[3rem] bg-white/5 animate-pulse" />)
              ) : displayBlogs.length > 0 ? (
                <AnimatePresence mode="wait">
                  {displayBlogs.map((post: any) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link href={`/blog/${activeCategory?.slug}/${post.slug}`}>
                        <div className="group relative p-10 h-full rounded-[3.5rem] bg-white flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500">
                          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                          <div className="space-y-8 relative z-10">
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                                {post.subCategory || "SYSTEM"}
                              </span>
                              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                                <Clock size={12} /> {new Date(post.createdAt).toLocaleDateString()}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest mb-2">Process_Log::{activeCategory?.name}</p>
                              <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                                {post.title}
                              </h3>
                            </div>
                          </div>
                          <div className="mt-10 flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
                            Initialize_Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                <div className="md:col-span-2 p-20 text-center border-2 border-dashed border-white/10 rounded-[3.5rem]">
                  <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">No nodes found in this sector.</p>
                </div>
              )}
            </div>

            {/* Newsletter */}
            <motion.div className="p-10 rounded-[3.5rem] bg-neutral-950 border border-white/10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb10_0%,transparent_100%)] pointer-events-none" />
              <div className="relative z-10 text-center lg:text-left">
                <h4 className="text-2xl font-black tracking-tight uppercase">Stay Synchronized.</h4>
                <p className="text-xs text-slate-400 font-mono mt-1 font-bold uppercase tracking-widest">Join 2,000+ tech leads.</p>
              </div>
              
              <form onSubmit={handleSubscribe} className="relative z-10 flex flex-col w-full lg:w-auto">
                <div className="flex w-full lg:w-auto gap-3">
                  <input 
                    type="email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    placeholder="name@company.com" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 w-full lg:w-64 transition-all"
                  />
                  <button 
                    disabled={status === "loading" || status === "success"}
                    className="bg-blue-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all disabled:bg-slate-800"
                  >
                    {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : 
                     status === "success" ? <CheckCircle2 size={18} /> : "Join"}
                  </button>
                </div>
                {message && <p className="text-[10px] mt-2 font-bold uppercase text-emerald-400">{message}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlogs;