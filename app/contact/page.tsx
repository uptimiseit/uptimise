// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { 
//   Mail, MapPin, MessageSquare, 
//   ArrowUpRight, Globe, Github, Linkedin, 
//   Twitter, Zap, ShieldCheck, Terminal, Loader2, CheckCircle2, AlertCircle
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
//     transition: { staggerChildren: 0.15 }
//   }
// };

// const ContactPage = () => {
//   // 1. Form State Management
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     department: 'Software Development',
//     message: ''
//   });

//   // 2. API Submission Handler
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus('idle');

//     try {
//       const response = await fetch('https://uptimiseit-admin.vercel.app/api/brief', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           department: formData.department,
//           message: formData.message,
//         }),
//       });

//       if (response.ok) {
//         setStatus('success');
//         // Reset form on success
//         setFormData({ name: '', email: '', department: 'Software Development', message: '' });
//         // Reset button state after 5 seconds
//         setTimeout(() => setStatus('idle'), 5000);
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error("Transmission Error:", error);
//       setStatus('error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
//       {/* --- SECTION 1: HERO HEADER --- */}
//       <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
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
//             <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
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
//             Whether you&apos;re looking to scale an existing platform or architect something entirely new, our squad is ready to deploy.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* --- SECTION 2: CONTACT MATRIX --- */}
//       <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
//         {/* LEFT: Channel Info */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="lg:col-span-5 space-y-16"
//         >
//           <div className="space-y-8">
//             <motion.h4 variants={fadeInUp} className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"># Direct_Lines</motion.h4>
//             <div className="space-y-8">
//               {[
//                 { label: "Send a Message", value: "sales@uptimiseit.com", icon: <Mail /> },
//                 { label: "WhatsApp Chat", value: "+91 97622 29023", icon: <MessageSquare /> }
//               ].map((channel, idx) => (
//                 <motion.div key={idx} variants={fadeInUp} whileHover={{ x: 10 }} className="group flex gap-6 items-start cursor-pointer">
//                   <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
//                     {channel.icon}
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{channel.label}</p>
//                     <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">{channel.value}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <motion.div variants={fadeInUp} className="pt-12 border-t border-slate-100 flex gap-4">
//             {[<Linkedin key="l" />, <Twitter key="t" />, <Github key="g" />, <Globe key="gl" />].map((icon, i) => (
//               <motion.div key={i} whileHover={{ y: -5, color: "#2563eb" }} className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 cursor-pointer transition-all">
//                 {icon}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* RIGHT: THE INTAKE FORM */}
//         <div className="lg:col-span-7">
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-12 lg:p-16 space-y-12 relative"
//           >
//             <div className="space-y-2">
//               <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">Send a Brief</h3>
//               <p className="text-slate-400 text-sm font-medium">Explain your vision, and we&apos;ll route it to the right department.</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Identity</label>
//                   <input 
//                     required
//                     type="text" 
//                     placeholder="Full Name" 
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
//                   <input 
//                     required
//                     type="email" 
//                     placeholder="name@company.com" 
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
//                 <select 
//                   value={formData.department}
//                   onChange={(e) => setFormData({...formData, department: e.target.value})}
//                   className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer outline-none"
//                 >
//                   <option>Software Development</option>
//                   <option>AI & Automation</option>
//                   <option>Blockchain / Web3</option>
//                   <option>Cloud Infrastructure</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Briefing</label>
//                 <textarea 
//                   required
//                   placeholder="Describe your technical requirements..." 
//                   rows={5} 
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                   className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none outline-none" 
//                 />
//               </div>

//               <motion.button 
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.99 }}
//                 className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-xl ${
//                   status === 'success' 
//                   ? 'bg-emerald-500 text-white' 
//                   : status === 'error' 
//                   ? 'bg-red-600 text-white' 
//                   : 'bg-slate-950 text-white hover:bg-blue-600 shadow-blue-100'
//                 }`}
//               >
//                 {loading ? (
//                   <Loader2 size={18} className="animate-spin" />
//                 ) : status === 'success' ? (
//                   <>Transmission Successful <CheckCircle2 size={18} /></>
//                 ) : status === 'error' ? (
//                   <>Retry Transmission <AlertCircle size={18} /></>
//                 ) : (
//                   <>Initialize Transmission <Zap size={16} fill="currentColor" /></>
//                 )}
//               </motion.button>
//             </form>

//             <div className="pt-10 border-t border-slate-50 flex items-center justify-center gap-12 text-slate-400">
//                <div className="flex items-center gap-2">
//                   <ShieldCheck size={14} />
//                   <span className="text-[9px] font-black tracking-widest uppercase">NDA_READY</span>
//                </div>
//                <div className="flex items-center gap-2">
//                   <Globe size={14} />
//                   <span className="text-[9px] font-black tracking-widest uppercase">GLOBAL_OPS</span>
//                </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactPage;


'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Mail, MapPin, MessageSquare, 
  Globe, Github, Linkedin, 
  Twitter, Zap, ShieldCheck, Terminal, Loader2, CheckCircle2, AlertCircle,
  Phone, Paperclip, FileText, X, ChevronDown, UploadCloud
} from 'lucide-react';

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
//     transition: { staggerChildren: 0.15 }
//   }
// };

const countryCodes = [
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+971", label: "AE", flag: "🇦🇪" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+65", label: "SG", flag: "🇸🇬" },
];

const departments = [
  "Software Development",
  "AI & Machine Learning",
  "Mobile App Development (React Native/Flutter)",
  "Blockchain & Web3 Engineering",
  "Cloud Architecture & DevOps",
  "UI/UX Technical Design",
  "Cybersecurity Audit",
  "Dedicated Squad Augmentation"
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    countryCode: '+91',
    department: 'Software Development',
    message: '',
    documentFile: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Use FormData for file upload compatibility
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('countryCode', formData.countryCode);
    data.append('department', formData.department);
    data.append('message', formData.message);
    if (formData.documentFile) {
      data.append('documentFile', formData.documentFile);
    }

    try {
      const response = await fetch('https://uptimiseit-admin.vercel.app/api/brief', {
        method: 'POST',
        body: data, // Fetch handles boundary automatically for FormData
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ 
          name: '', email: '', mobileNumber: '', countryCode: '+91', 
          department: 'Software Development', message: '', documentFile: null 
        });
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
      
      {/* --- HERO HEADER --- */}
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div initial="hidden" animate="visible"
        //  variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <motion.div
            //  variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Terminal size={12} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">Communication_Protocol::v2.0</span>
            </motion.div>
            <motion.h1
            //  variants={fadeInUp}
              className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
              Deploy <br /> <motion.span animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }} transition={{ duration: 4, repeat: Infinity }} className="text-blue-500 italic">Vision.</motion.span>
            </motion.h1>
          </div>
          <motion.p
          //  variants={fadeInUp} 
           className="text-slate-400 text-lg max-w-sm font-medium border-l border-white/10 pl-8 pb-4 leading-relaxed">
            Submit your technical brief. Our engineering leads review all intakes within 12 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* --- CONTACT MATRIX --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: Info */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} 
        // variants={staggerContainer}
         className="lg:col-span-4 space-y-16">
          <div className="space-y-8">
            <motion.h4
            //  variants={fadeInUp}
              className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"># Direct_Gateway</motion.h4>
            <div className="space-y-8">
              {[
                { label: "Engineering Intake", value: "sales@uptimiseit.com", icon: <Mail /> },
                { label: "Rapid Response", value: "+91 97622 29023", icon: <MessageSquare /> }
              ].map((channel, idx) => (
                <motion.div key={idx} 
                // variants={fadeInUp}
                 whileHover={{ x: 10 }} className="group flex gap-6 items-start cursor-pointer">
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
          <motion.div 
          //  variants={fadeInUp}
           
           className="pt-12 border-t border-slate-100 flex gap-4">
            {[<Linkedin key="l" />, <Twitter key="t" />, <Github key="g" />, <Globe key="gl" />].map((icon, i) => (
              <motion.div key={i} whileHover={{ y: -5, color: "#2563eb" }} className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 cursor-pointer transition-all">
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: INTAKE FORM */}
        <div className="lg:col-span-8">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-10 lg:p-14 space-y-10 relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identity</label>
                  <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
                  <input required type="email" placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Number</label>
                  <div className="flex gap-2">
                    <div className="relative flex items-center bg-slate-50 px-3 rounded-2xl border-none">
                      <select value={formData.countryCode} onChange={(e) => setFormData({...formData, countryCode: e.target.value})} className="bg-transparent text-xs font-black outline-none appearance-none pr-4 z-10 cursor-pointer">
                        {countryCodes.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                      </select>
                      <ChevronDown size={12} className="absolute right-2 text-slate-400" />
                    </div>
                    <input required type="tel" placeholder="98765 43210" value={formData.mobileNumber} onChange={(e) => setFormData({...formData, mobileNumber: e.target.value.replace(/\D/g,'')})} className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
                  <div className="relative flex items-center">
                    <select value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer outline-none">
                      {departments.map(dept => <option key={dept}>{dept}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-6 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Document File Dropzone */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Technical Brief / SRS (Optional)</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`group relative border-2 border-dashed rounded-[2rem] p-8 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${formData.documentFile ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'}`}
                >
                  <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setFormData({...formData, documentFile: e.target.files?.[0] || null})} />
                  
                  <AnimatePresence mode="wait">
                    {formData.documentFile ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 w-full px-4">
                        <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg"><FileText size={20} /></div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-sm font-bold text-slate-900 truncate">{formData.documentFile.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{(formData.documentFile.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button type="button" onClick={(e) => { e.stopPropagation(); setFormData({...formData, documentFile: null}); }} className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-red-500 transition-colors"><X size={16} /></button>
                      </motion.div>
                    ) : (
                      <div className="text-center space-y-1">
                        <div className="flex justify-center text-slate-300 group-hover:text-blue-500 transition-colors mb-2"><UploadCloud size={32} /></div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Click to attach documentation</p>
                        <p className="text-[9px] text-slate-400 font-medium">PDF, DOCX up to 10MB</p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mission Briefing</label>
                <textarea required placeholder="Outline your vision and core challenges..." rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none outline-none" />
              </div>

              <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-xl ${status === 'success' ? 'bg-emerald-500 text-white' : status === 'error' ? 'bg-red-600 text-white' : 'bg-slate-950 text-white hover:bg-blue-600'}`}>
                {loading ? <Loader2 size={18} className="animate-spin" /> : status === 'success' ? <>Transmission Successful <CheckCircle2 size={18} /></> : status === 'error' ? <>Retry Transmission <AlertCircle size={18} /></> : <>Initialize Transmission <Zap size={16} fill="currentColor" /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;