// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   BookOpen, 
//   ArrowRight, 
//   Clock, 
//   Cpu, 
//   Layers, 
//   Rocket,
//   Loader2,
//   CheckCircle2
// } from 'lucide-react';

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

// const featuredPosts = [
//   {
//     category: "Technology Trends",
//     title: "The Shift to AI-Native Development: Why 2026 is the Year of the Agent.",
//     time: "12 min read",
//     tag: "Trending"
//   },
//   {
//     category: "Cloud & DevOps",
//     title: "Zero-Touch CI/CD: How We Automate Deployment for Global Scale.",
//     time: "8 min read",
//     tag: "Engineering"
//   }
// ];

// const NewBlogs = () => {
//   // --- Subscription Logic ---
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

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
//             <p className="text-lg text-slate-200 font-medium leading-relaxed max-w-xl">
//               Knowledge sharing is essential to building strong ecosystems. We publish deep-dives for founders and tech leaders.
//             </p>
//           </div>
          
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-full font-bold transition-all hover:bg-blue-600 shadow-2xl"
//           >
//             View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//           </motion.button>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* Left: Category Sidebar */}
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-4 space-y-4">
//             <h4 className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.3em] mb-6 px-4">
//               # Browse by Domain
//             </h4>
//             {categories.map((cat, i) => (
//               <motion.div 
//                 key={i} 
//                 whileHover={{ x: 10 }}
//                 className="group p-6 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-500/20 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
//               >
//                 <div className="flex items-start gap-5">
//                   <div className={`p-3 rounded-2xl ${cat.bg} ${cat.color} group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm`}>
//                     {cat.icon}
//                   </div>
//                   <div className="space-y-1">
//                     <h5 className="font-bold text-slate-950 group-hover:text-blue-600 transition-colors uppercase text-sm tracking-tight">{cat.title}</h5>
//                     <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right: Featured Articles Grid */}
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {featuredPosts.map((post, i) => (
//               <motion.div key={i} whileHover={{ y: -10 }} className="relative p-10 rounded-[3.5rem] bg-white border border-slate-100 flex flex-col justify-between group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
//                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
//                 <div className="space-y-8 relative z-10">
//                   <div className="flex justify-between items-center">
//                     <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
//                       {post.tag}
//                     </span>
//                     <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
//                       <Clock size={12} /> {post.time}
//                     </div>
//                   </div>
//                   <div className="space-y-4">
//                     <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest italic">{post.category}</p>
//                     <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
//                       {post.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="mt-10 flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
//                   Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </motion.div>
//             ))}

//             {/* Newsletter Mini-Card with logic applied */}
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
//                     type="email" 
//                     required
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
//                     className="bg-blue-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shrink-0 flex items-center justify-center min-w-[100px] disabled:bg-slate-800 disabled:text-slate-400"
//                    >
//                     {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : 
//                      status === "success" ? <CheckCircle2 size={18} className="text-white" /> : "Join"}
//                    </motion.button>
//                  </div>
                 
//                  <AnimatePresence>
//                    {message && (
//                      <motion.p 
//                        initial={{ opacity: 0, y: 5 }}
//                        animate={{ opacity: 1, y: 0 }}
//                        className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${status === "success" ? "text-emerald-400" : "text-rose-500"}`}
//                      >
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

import React, { useState, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ArrowRight, Clock, Cpu, 
  Layers, Rocket, Loader2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

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

const NewBlogs = () => {
  // --- State for Live Blogs ---
  const [blogData, setBlogData] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  // --- Newsletter State ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // --- Fetch Live Blogs ---
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://uptimiseit-admin.vercel.app/api/blogs?limit=5");
        const json = await res.json();
        if (json.success) {
          setBlogData(json.data);
        }
      } catch (err) {
        console.error("Failed to load blogs", err);
      } finally {
        setBlogsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("https://uptimiseit-admin.vercel.app/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("Welcome to the inner circle.");
      } else {
        setStatus("error");
        setMessage(data.message || "Subscription failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  };

  return (
    <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
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
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-50 leading-[0.85] uppercase">
              Insights & <br />
              <span className="text-blue-300 italic">Engineering.</span>
            </h2>
          </div>
          
          <Link href="/blogs">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-full font-bold transition-all hover:bg-blue-600 shadow-2xl"
            >
              View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Category Sidebar */}
          <motion.div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.3em] mb-6 px-4"># Browse by Domain</h4>
            {categories.map((cat, i) => (
              <div key={i} className="group p-6 rounded-[2.5rem] bg-slate-50/5 border border-transparent hover:border-blue-500/20 hover:bg-slate-800 transition-all duration-500 cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-2xl ${cat.bg} ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-50 uppercase text-sm tracking-tight">{cat.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Featured Articles Grid (FETCHED FROM API) */}
          <motion.div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogsLoading ? (
               [1,2].map(n => <div key={n} className="h-64 rounded-[3.5rem] bg-slate-800 animate-pulse" />)
            ) : (
              blogData.map((post: any, i) => (
                <Link href={`/blogs/${post.slug}`} key={post.id}>
                  <motion.div whileHover={{ y: -10 }} className="relative p-10 h-full rounded-[3.5rem] bg-white border border-slate-100 flex flex-col justify-between group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="space-y-8 relative z-10">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                          {post.subCategory || "Engineering"}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                          <Clock size={12} /> {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest italic">{post.category}</p>
                        <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-10 flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-all uppercase tracking-widest">
                      Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              ))
            )}

            {/* Newsletter Mini-Card */}
            <motion.div className="md:col-span-2 p-10 rounded-[3.5rem] bg-neutral-950 border border-slate-700 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb15_0%,transparent_100%)] pointer-events-none" />
               <div className="relative z-10 text-center lg:text-left">
                 <h4 className="text-2xl font-black tracking-tight uppercase leading-tight">Stay synchronized with <br /> our engineering.</h4>
                 <p className="text-xs text-slate-400 font-mono mt-2 font-bold uppercase tracking-widest">Join 2,000+ founders and tech leads.</p>
               </div>
               
               <form onSubmit={handleSubscribe} className="relative z-10 flex flex-col w-full lg:w-auto">
                 <div className="flex w-full lg:w-auto gap-3">
                   <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    placeholder={status === "success" ? "Subscribed!" : "name@company.com"} 
                    className={`bg-white/5 border ${status === "error" ? "border-rose-500" : "border-white/10"} rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 w-full lg:w-64 transition-all disabled:opacity-50`}
                   />
                   <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={status === "loading" || status === "success"}
                    className="bg-blue-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shrink-0 flex items-center justify-center min-w-[100px] disabled:bg-slate-800"
                   >
                    {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : 
                     status === "success" ? <CheckCircle2 size={18} /> : "Join"}
                   </motion.button>
                 </div>
                 <AnimatePresence>
                   {message && (
                     <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                       className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${status === "success" ? "text-emerald-400" : "text-rose-500"}`}>
                       {message}
                     </motion.p>
                   )}
                 </AnimatePresence>
               </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewBlogs;