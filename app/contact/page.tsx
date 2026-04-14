// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { 
//   Mail, MapPin, Phone, MessageSquare, 
//   ArrowUpRight, Globe, Github, Linkedin, 
//   Twitter, Zap, ShieldCheck, Terminal
// } from 'lucide-react';

// // --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

// const hoverScale: Variants = {
//   hover: { 
//     scale: 1.02, 
//     transition: { 
//       type: "spring", // TypeScript now knows this is the literal "spring" type
//       stiffness: 400, 
//       damping: 10 
//     } 
//   }
// };

// const ContactPage = () => {
//   return (
//     <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
//       {/* --- Section 1: Hero Header --- */}
//       <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
//         {/* Animated Engineering Grid */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
//           transition={{ duration: 2 }}
//           className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" 
//         />
        
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12"
//         >
//           <div className="space-y-6">
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
//               <Terminal size={12} className="text-blue-400" />
//               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
//                 Communication_Protocol::v1.0
//               </span>
//             </motion.div>
//             <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
//               Get in <br />
//               <motion.span 
//                 animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="text-blue-500 italic"
//               >
//                 Touch.
//               </motion.span>
//             </motion.h1>
//           </div>
//           <motion.p variants={fadeInUp} className="text-slate-400 text-lg max-w-sm font-medium border-l border-white/10 pl-8 pb-4 leading-relaxed">
//             Whether you're looking to scale an existing platform or architect something entirely new, our squad is ready to deploy.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* --- Section 2: Contact Matrix --- */}
//       <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
//         {/* LEFT: Direct Channels */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="lg:col-span-5 space-y-16"
//         >
          
//           {/* Channel 1: Engineering Hub */}
//           <div className="space-y-8">
//             <motion.h4 variants={fadeInUp} className="text-[12px] font-black uppercase tracking-[0.3em] text-center lg:text-left text-slate-400 font-mono italic"># Direct_Lines</motion.h4>
            
//             <div className="space-y-8">
//               {/* <motion.div variants={fadeInUp} whileHover="hover" variants={hoverScale} className="group flex gap-6 items-start cursor-pointer"> */}
//                <motion.div 
//   variants={hoverScale} // No more red squiggly lines
//   whileHover="hover"    // Matches the key inside your variants object
//  className="group flex gap-6 items-start cursor-pointer"
// >
//                 <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Send a Message</p>
//                   <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">sales@uptimiseit.com</p>
//                 </div>
//               </motion.div>

//               <motion.div whileHover="hover" variants={hoverScale} className="group flex gap-6 items-start cursor-pointer">
//                 <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
//                   <MessageSquare size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Chat</p>
//                   <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">+91 97622 29023</p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Channel 2: HQ Location */}
//           <motion.div variants={fadeInUp} className="space-y-8">
//             <h4 className="text-[12px] text-center lg:text-left font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"># Global_Presence</h4>
//             <div className="group flex gap-6 items-start">
//               <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
//                 <MapPin size={24} />
//               </div>
//               <div className="space-y-2">
//                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest"> Office Address: </p>
//                 <p className="text-lg font-bold text-slate-600 leading-snug">
//                   office no. 4 , k-11 ,<br />
//                   Narendra nagar, Jaipur 302019, <br />
//                   Rajasthan, India
//                 </p>
//                 <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-xs font-black text-blue-600 pt-2 uppercase tracking-widest">
//                   Open in Maps <ArrowUpRight size={14} />
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>

//           {/* Channel 3: Social Sync */}
//           <motion.div variants={fadeInUp} className="pt-12 border-t border-slate-50 flex items-center justify-center lg:justify-start gap-4">
//             {[<Linkedin size={20}/>, <Twitter size={20}/>, <Github size={20}/>, <Globe size={20}/>].map((icon, i) => (
//               <motion.div 
//                 key={i} 
//                 whileHover={{ y: -5, color: "#2563eb", borderColor: "#2563eb" }}
//                 className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 transition-all cursor-pointer"
//               >
//                 {icon}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* RIGHT: High-End Contact Form */}
//         <div className="lg:col-span-7">
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-12 lg:p-16 space-y-12"
//           >
//             <div className="space-y-2">
//               <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">Send a Brief</h3>
//               <p className="text-slate-400 text-sm font-medium">Explain your vision, and we'll route it to the right department.</p>
//             </div>

//             <form className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Identity</label>
//                   <motion.input whileFocus={{ scale: 1.01 }} type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
//                   <motion.input whileFocus={{ scale: 1.01 }} type="email" placeholder="name@company.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
//                 <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer outline-none">
//                   <option>Software Development</option>
//                   <option>AI & Automation</option>
//                   <option>Blockchain / Web3</option>
//                   <option>Cloud Infrastructure</option>
//                   <option>Product Strategy</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Briefing</label>
//                 <motion.textarea whileFocus={{ scale: 1.01 }} placeholder="Describe your technical requirements..." rows={5} className="w-full bg-slate-50 border-none rounded-4xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none outline-none" />
//               </div>

//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group w-full py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all duration-500 flex items-center justify-center gap-4 shadow-xl shadow-blue-100"
//               >
//                 Initialize Transmission
//                 <Zap size={16} className="group-hover:animate-pulse" />
//               </motion.button>
//             </form>

//             <div className="pt-10 border-t border-slate-50 flex items-center justify-center gap-12">
//                <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="flex items-center gap-2">
//                   <ShieldCheck size={14} className="text-slate-400" />
//                   <span className="text-[9px] font-black tracking-widest uppercase text-slate-400">NDA_READY</span>
//                </motion.div>
//                <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="flex items-center gap-2">
//                   <Globe size={14} className="text-slate-400" />
//                   <span className="text-[9px] font-black tracking-widest uppercase text-slate-400">GLOBAL_OPS</span>
//                </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactPage;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Mail, MapPin, MessageSquare, 
  ArrowUpRight, Globe, Github, Linkedin, 
  Twitter, Zap, ShieldCheck, Terminal, Loader2, CheckCircle2, AlertCircle
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const ContactPage = () => {
  // 1. Form State Management
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Software Development',
    message: ''
  });

  // 2. API Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('https://uptimiseit-admin.vercel.app/api/brief', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          department: formData.department,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Reset form on success
        setFormData({ name: '', email: '', department: 'Software Development', message: '' });
        // Reset button state after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* --- SECTION 1: HERO HEADER --- */}
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Terminal size={12} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
                Communication_Protocol::v1.0
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
              Get in <br />
              <motion.span 
                animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-blue-500 italic"
              >
                Touch.
              </motion.span>
            </motion.h1>
          </div>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg max-w-sm font-medium border-l border-white/10 pl-8 pb-4 leading-relaxed">
            Whether you&apos;re looking to scale an existing platform or architect something entirely new, our squad is ready to deploy.
          </motion.p>
        </motion.div>
      </section>

      {/* --- SECTION 2: CONTACT MATRIX --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: Channel Info */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:col-span-5 space-y-16"
        >
          <div className="space-y-8">
            <motion.h4 variants={fadeInUp} className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"># Direct_Lines</motion.h4>
            <div className="space-y-8">
              {[
                { label: "Send a Message", value: "sales@uptimiseit.com", icon: <Mail /> },
                { label: "WhatsApp Chat", value: "+91 97622 29023", icon: <MessageSquare /> }
              ].map((channel, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ x: 10 }} className="group flex gap-6 items-start cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {channel.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{channel.label}</p>
                    <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">{channel.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeInUp} className="pt-12 border-t border-slate-100 flex gap-4">
            {[<Linkedin key="l" />, <Twitter key="t" />, <Github key="g" />, <Globe key="gl" />].map((icon, i) => (
              <motion.div key={i} whileHover={{ y: -5, color: "#2563eb" }} className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 cursor-pointer transition-all">
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: THE INTAKE FORM */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-12 lg:p-16 space-y-12 relative"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">Send a Brief</h3>
              <p className="text-slate-400 text-sm font-medium">Explain your vision, and we&apos;ll route it to the right department.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
                <select 
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer outline-none"
                >
                  <option>Software Development</option>
                  <option>AI & Automation</option>
                  <option>Blockchain / Web3</option>
                  <option>Cloud Infrastructure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Briefing</label>
                <textarea 
                  required
                  placeholder="Describe your technical requirements..." 
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none outline-none" 
                />
              </div>

              <motion.button 
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-xl ${
                  status === 'success' 
                  ? 'bg-emerald-500 text-white' 
                  : status === 'error' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-slate-950 text-white hover:bg-blue-600 shadow-blue-100'
                }`}
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : status === 'success' ? (
                  <>Transmission Successful <CheckCircle2 size={18} /></>
                ) : status === 'error' ? (
                  <>Retry Transmission <AlertCircle size={18} /></>
                ) : (
                  <>Initialize Transmission <Zap size={16} fill="currentColor" /></>
                )}
              </motion.button>
            </form>

            <div className="pt-10 border-t border-slate-50 flex items-center justify-center gap-12 text-slate-400">
               <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span className="text-[9px] font-black tracking-widest uppercase">NDA_READY</span>
               </div>
               <div className="flex items-center gap-2">
                  <Globe size={14} />
                  <span className="text-[9px] font-black tracking-widest uppercase">GLOBAL_OPS</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;