// "use client";

// import React, { useState, useRef, useMemo } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import {
//   Mail,
//   MapPin,
//   MessageSquare,
//   Globe,
//   Github,
//   Linkedin,
//   Twitter,
//   Zap,
//   ShieldCheck,
//   Terminal,
//   Loader2,
//   CheckCircle2,
//   AlertCircle,
//   Phone,
//   Paperclip,
//   FileText,
//   X,
//   ChevronDown,
//   UploadCloud,
// } from "lucide-react";
// import FAQSection from "../components/HomePage/FAQSection";
// import { countryCodes } from "@/app/constants/countries";

// // const fadeInUp: Variants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, ease: "easeOut" }
// //   }
// // };

// // const staggerContainer: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.15 }
// //   }
// // };

// // const countryCodes = [
// //   { code: "+91", label: "IN", flag: "🇮🇳" },
// //   { code: "+1", label: "US", flag: "🇺🇸" },
// //   { code: "+44", label: "UK", flag: "🇬🇧" },
// //   { code: "+971", label: "AE", flag: "🇦🇪" },
// //   { code: "+61", label: "AU", flag: "🇦🇺" },
// //   { code: "+65", label: "SG", flag: "🇸🇬" },
// // ];

// const departments = [
//   "Software Development",
//   "AI & Machine Learning",
//   "Mobile App Development (React Native/Flutter)",
//   "Blockchain & Web3 Engineering",
//   "Cloud Architecture & DevOps",
//   "UI/UX Technical Design",
//   "Cybersecurity Audit",
//   "Dedicated Squad Augmentation",
// ];

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "", // Changed to match validation logic or vice versa
//     email: "",
//     mobileNumber: "",
//     countryCode: "+91",
//     department: "Software Development",
//     message: "",
//     documentFile: null as File | null,
//   });

//   const validate = () => {
//     const newErrors: Record<string, string> = {};

//     // 1. Name Validation
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
//       newErrors.name = "Name must contain only alphabets";
//     }

//     // Rejects commas, spaces, and special chars like !#$%
//     const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,}$/;

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email =
//         "Invalid format. Use only letters, numbers, and underscores.";
//     }

//     // 3. Mobile Validation (10 digits)
//     if (!formData.mobileNumber) {
//       newErrors.mobileNumber = "Mobile number is required";
//     } else if (formData.mobileNumber.length < 10) {
//       newErrors.mobileNumber = "Number must be exactly 10 digits";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//     const [isSubmitting, setIsSubmitting] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Filter countries based on search input
//   const filteredCountries = useMemo(() => {
//     return countryCodes.filter(
//       (c) =>
//         c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         c.code.includes(searchQuery),
//     );
//   }, [searchQuery]);

//   // Find current selected country for the display
//   // const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0];

//   const selectedCountry = useMemo(() => {
//     return (
//       countryCodes.find((c) => c.code === formData.countryCode) ||
//       countryCodes[0]
//     );
//   }, [formData.countryCode]);

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setStatus('idle');

//   //   // Use FormData for file upload compatibility
//   //   const data = new FormData();
//   //   data.append('name', formData.name);
//   //   data.append('email', formData.email);
//   //   data.append('mobileNumber', formData.mobileNumber);
//   //   data.append('countryCode', formData.countryCode);
//   //   data.append('department', formData.department);
//   //   data.append('message', formData.message);
//   //   if (formData.documentFile) {
//   //     data.append('documentFile', formData.documentFile);
//   //   }

//   //   try {
//   //     const response = await fetch('https://uptimiseit-admin.vercel.app/api/brief', {
//   //       method: 'POST',
//   //       body: data, // Fetch handles boundary automatically for FormData
//   //     });

//   //     if (response.ok) {
//   //       setStatus('success');
//   //       setFormData({
//   //         name: '', email: '', mobileNumber: '', countryCode: '+91',
//   //         department: 'Software Development', message: '', documentFile: null
//   //       });
//   //       setTimeout(() => setStatus('idle'), 5000);
//   //     } else {
//   //       setStatus('error');
//   //     }
//   //   } catch (error) {
//   //     console.error("Transmission Error:", error);
//   //     setStatus('error');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // 1. Remove non-digits
//     // 2. Limit to 10 characters (Max)
//     const value = e.target.value.replace(/\D/g, "").slice(0, 10);
//     setFormData({ ...formData, mobileNumber: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setLoading(true);
//     setStatus("idle");

//     if (!validate()) {
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       let finalDocumentUrl = "";

//       // --- STEP 1: AWS S3 UPLOAD (If file exists) ---
//       if (formData.documentFile) {
//         const file = formData.documentFile;

//         // 1. Get the Signed URL from your API
//         const ticketRes = await fetch(
//           `/api/upload-url?file=${encodeURIComponent(file.name)}&type=${encodeURIComponent(file.type)}`,
//         );

//         if (!ticketRes.ok) throw new Error("Failed to fetch upload ticket");
//         const { signedUrl, cdnUrl } = await ticketRes.json();

//         // 2. PUT the file directly to S3
//         const s3Upload = await fetch(signedUrl, {
//           method: "PUT",
//           body: file,
//           headers: { "Content-Type": file.type },
//         });

//         if (!s3Upload.ok) throw new Error("S3 Upload Failed");

//         // Store the CloudFront URL to save in our database
//         finalDocumentUrl = cdnUrl;
//       }

//       // --- STEP 2: SAVE TO DATABASE ---
//       const response = await fetch(
//         "https://uptimiseit-admin.vercel.app/api/brief",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             mobileNumber: formData.mobileNumber,
//             countryCode: formData.countryCode,
//             department: formData.department,
//             message: formData.message,
//             documentUrl: finalDocumentUrl, // Save the AWS link here
//           }),
//         },
//       );

//       if (response.ok) {
//         setStatus("success");
//         setFormData({
//           name: "",
//           email: "",
//           mobileNumber: "",
//           countryCode: "+91",
//           department: "Software Development",
//           message: "",
//           documentFile: null,
//         });
//         setTimeout(() => setStatus("idle"), 5000);
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       console.error("Transmission Failure:", error);
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
//       {/* --- HERO HEADER --- */}
//       <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
//           className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"
//         />
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           //  variants={staggerContainer}
//           className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12"
//         >
//           <div className="space-y-6">
//             <motion.div
//               //  variants={fadeInUp}
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
//             >
//               <Terminal size={12} className="text-blue-400" />
//               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
//                 Communication_Protocol::v2.0
//               </span>
//             </motion.div>
//             <motion.h1
//               //  variants={fadeInUp}
//               className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase"
//             >
//               Deploy <br />{" "}
//               <motion.span
//                 animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="text-blue-500 italic"
//               >
//                 Vision.
//               </motion.span>
//             </motion.h1>
//           </div>
//           <motion.p
//             //  variants={fadeInUp}
//             className="text-slate-400 text-lg max-w-sm font-medium border-l border-white/10 pl-8 pb-4 leading-relaxed"
//           >
//             Submit your technical brief. Our engineering leads review all
//             intakes within 12 hours.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* --- CONTACT MATRIX --- */}
//       <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
//         {/* LEFT: Info */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           // variants={staggerContainer}
//           className="lg:col-span-4 space-y-16"
//         >
//           <div className="space-y-8">
//             <motion.h4
//               //  variants={fadeInUp}
//               className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"
//             >
//               # Direct_Gateway
//             </motion.h4>
//             <div className="space-y-8">
//               {[
//                 {
//                   label: "Engineering Intake",
//                   value: "sales@uptimiseit.com",
//                   icon: <Mail />,
//                 },
//                 {
//                   label: "Rapid Response",
//                   value: "+91 97622 29023",
//                   icon: <MessageSquare />,
//                 },
//               ].map((channel, idx) => (
//                 <motion.div
//                   key={idx}
//                   // variants={fadeInUp}
//                   whileHover={{ x: 10 }}
//                   className="group flex gap-6 items-start cursor-pointer"
//                 >
//                   <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
//                     {channel.icon}
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
//                       {channel.label}
//                     </p>
//                     <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
//                       {channel.value}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//           <motion.div
//             //  variants={fadeInUp}

//             className="pt-12 border-t border-slate-100 flex gap-4"
//           >
//             {[
//               <Linkedin key="l" />,
//               <Twitter key="t" />,
//               <Github key="g" />,
//               <Globe key="gl" />,
//             ].map((icon, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -5, color: "#2563eb" }}
//                 className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 cursor-pointer transition-all"
//               >
//                 {icon}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* RIGHT: INTAKE FORM */}
//         <div className="lg:col-span-8">
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-10 lg:p-14 space-y-10 relative"
//           >
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
//                     Identity
//                   </label>
//                   <input
//                     required
//                     type="text"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none"
//                   />
//                 </div>
//                 {/* <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
//                   <input required type="email" placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
//                 </div> */}

//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
//                     Email Node
//                   </label>
//                   <input
//                     required
//                     type="email"
//                     placeholder="name@company.com"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className={`w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 transition-all outline-none ${errors.email ? "ring-2 ring-red-500" : "focus:ring-blue-600"}`}
//                   />
//                   {errors.email && (
//                     <p className="text-[9px] text-red-500 font-bold mt-1 uppercase ml-1">
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Number</label>
//                   <div className="flex gap-2">
//                     <div className="relative flex items-center bg-slate-50 px-3 rounded-2xl border-none">
//                       <select value={formData.countryCode} onChange={(e) => setFormData({...formData, countryCode: e.target.value})} className="bg-transparent text-xs font-black outline-none appearance-none pr-4 z-10 cursor-pointer">
//                         {countryCodes.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
//                       </select>
//                       <ChevronDown size={12} className="absolute right-2 text-slate-400" />
//                     </div>
//                     <input required type="tel" placeholder="98765 43210" value={formData.mobileNumber} onChange={(e) => setFormData({...formData, mobileNumber: e.target.value.replace(/\D/g,'')})} className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
//                   </div>
//                 </div> */}

//                 <div className="relative group">
//                   <div className="flex items-center gap-4 border-b-2 border-slate-100 focus-within:border-blue-600 transition-all">
//                     {/* --- CUSTOM SEARCHABLE SELECT --- */}
//                     <div className="relative mb-2">
//                       <button
//                         type="button"
//                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                         className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors min-w-[100px]"
//                       >
//                         <span className="text-lg">{selectedCountry.flag}</span>
//                         <span className="text-xs font-black text-slate-950">
//                           {selectedCountry.code}
//                         </span>
//                         <ChevronDown
//                           size={12}
//                           className={`text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
//                         />
//                       </button>

//                       {/* DROPDOWN MENU */}
//                       <AnimatePresence>
//                         {isDropdownOpen && (
//                           <>
//                             {/* Backdrop to close dropdown */}
//                             <div
//                               className="fixed inset-0 z-20"
//                               onClick={() => setIsDropdownOpen(false)}
//                             />

//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: 10 }}
//                               className="absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl z-30 overflow-hidden"
//                             >
//                               {/* SEARCH INPUT */}
//                               <div className="p-3 border-b border-slate-50">
//                                 <input
//                                   type="text"
//                                   autoFocus
//                                   placeholder="Search country..."
//                                   value={searchQuery}
//                                   onChange={(e) =>
//                                     setSearchQuery(e.target.value)
//                                   }
//                                   className="w-full bg-slate-50 px-3 py-2 text-xs font-bold rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20"
//                                 />
//                               </div>

//                               {/* COUNTRY LIST */}
//                               <div className="max-h-60 overflow-y-auto custom-scrollbar">
//                                 {filteredCountries.length > 0 ? (
//                                   filteredCountries.map((c) => (
//                                     <button
//                                       key={c.code + c.label}
//                                       type="button"
//                                       onClick={() => {
//                                         setFormData({
//                                           ...formData,
//                                           countryCode: c.code,
//                                         });
//                                         setIsDropdownOpen(false);
//                                         setSearchQuery("");
//                                       }}
//                                       className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left"
//                                     >
//                                       <span className="text-lg">{c.flag}</span>
//                                       <div className="flex flex-col">
//                                         <span className="text-[11px] font-black text-slate-950 uppercase">
//                                           {c.name}
//                                         </span>
//                                         <span className="text-[10px] text-slate-400 font-bold">
//                                           {c.code}
//                                         </span>
//                                       </div>
//                                     </button>
//                                   ))
//                                 ) : (
//                                   <div className="p-4 text-[10px] font-bold text-slate-400 uppercase text-center">
//                                     No matching country
//                                   </div>
//                                 )}
//                               </div>
//                             </motion.div>
//                           </>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* --- MOBILE INPUT --- */}
//                     <input
//                       type="tel"
//                       required
//                       value={formData.mobileNumber}
//                       onChange={handleMobileChange}
//                       className="w-full bg-transparent py-3 text-sm font-bold focus:outline-none placeholder-transparent"
//                       placeholder="Mobile"
//                     />
//                   </div>

//                   <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
//                     Mobile Number *
//                   </label>
//                   <div className="absolute right-0 top-3 text-slate-300">
//                     <Phone size={16} />
//                   </div>
//                   {errors.mobileNumber && (
//                     <p className="text-[9px] text-red-500 font-bold mt-1 uppercase">
//                       {errors.mobileNumber}
//                     </p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
//                     Department
//                   </label>
//                   <div className="relative flex items-center">
//                     <select
//                       value={formData.department}
//                       onChange={(e) =>
//                         setFormData({ ...formData, department: e.target.value })
//                       }
//                       className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer outline-none"
//                     >
//                       {departments.map((dept) => (
//                         <option key={dept}>{dept}</option>
//                       ))}
//                     </select>
//                     <ChevronDown
//                       size={14}
//                       className="absolute right-6 text-slate-400 pointer-events-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Document File Dropzone */}
//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
//                   Technical Brief / SRS (Optional)
//                 </label>
//                 <div
//                   onClick={() => fileInputRef.current?.click()}
//                   className={`group relative border-2 border-dashed rounded-[2rem] p-8 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${formData.documentFile ? "border-blue-600 bg-blue-50/30" : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"}`}
//                 >
//                   <input
//                     type="file"
//                     ref={fileInputRef}
//                     className="hidden"
//                     accept=".pdf,.doc,.docx"
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         documentFile: e.target.files?.[0] || null,
//                       })
//                     }
//                   />

//                   <AnimatePresence mode="wait">
//                     {formData.documentFile ? (
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="flex items-center gap-4 w-full px-4"
//                       >
//                         <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg">
//                           <FileText size={20} />
//                         </div>
//                         <div className="flex-1 overflow-hidden">
//                           <p className="text-sm font-bold text-slate-900 truncate">
//                             {formData.documentFile.name}
//                           </p>
//                           <p className="text-[10px] text-slate-400 font-mono">
//                             {(formData.documentFile.size / 1024).toFixed(1)} KB
//                           </p>
//                         </div>
//                         <button
//                           aria-label="Uptimiseit"
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setFormData({ ...formData, documentFile: null });
//                           }}
//                           className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-red-500 transition-colors"
//                         >
//                           <X size={16} />
//                         </button>
//                       </motion.div>
//                     ) : (
//                       <div className="text-center space-y-1">
//                         <div className="flex justify-center text-slate-300 group-hover:text-blue-500 transition-colors mb-2">
//                           <UploadCloud size={32} />
//                         </div>
//                         <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
//                           Click to attach documentation
//                         </p>
//                         <p className="text-[9px] text-slate-400 font-medium">
//                           PDF, DOCX up to 10MB
//                         </p>
//                       </div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
//                   Mission Briefing
//                 </label>
//                 <textarea
//                   required
//                   placeholder="Outline your vision and core challenges..."
//                   rows={4}
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none outline-none"
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                   disabled={isSubmitting}

//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.99 }}
//                 className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-xl ${status === "success" ? "bg-emerald-500 text-white" : status === "error" ? "bg-red-600 text-white" : "bg-slate-950 text-white hover:bg-blue-600"}`}
//               >
//                 {loading ? (
//                   <Loader2 size={18} className="animate-spin" />
//                 ) : status === "success" ? (
//                   <>
//                     Transmission Successful <CheckCircle2 size={18} />
//                   </>
//                 ) : status === "error" ? (
//                   <>
//                     Retry Transmission <AlertCircle size={18} />
//                   </>
//                 ) : (
//                   <>
//                     Initialize Transmission{" "}
//                     <Zap size={16} fill="currentColor" />
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       <FAQSection />
//     </main>
//   );
// };

// export default ContactPage;


"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Terminal,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  FileText,
  X,
  ChevronDown,
  UploadCloud,
} from "lucide-react";
import FAQSection from "../components/HomePage/FAQSection";
import { countryCodes } from "@/app/constants/countries";

const departments = [
  "Software Development",
  "AI & Machine Learning",
  "Mobile App Development (React Native/Flutter)",
  "Blockchain & Web3 Engineering",
  "Cloud Architecture & DevOps",
  "UI/UX Technical Design",
  "Cybersecurity Audit",
  "Dedicated Squad Augmentation",
];

const ContactPage = () => {
  // 1. Initial State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    countryCode: "+91",
    department: "Software Development",
    message: "",
    documentFile: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 2. Memoized Logic (Calculated after state is defined)
  const filteredCountries = useMemo(() => {
    return countryCodes.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.includes(searchQuery)
    );
  }, [searchQuery]);

  const selectedCountry = useMemo(() => {
    return (
      countryCodes.find((c) => c.code === formData.countryCode) ||
      countryCodes[0]
    );
  }, [formData.countryCode]);

  // 3. Validation and Handlers
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets";
    }

    // Strict Email Regex: letters, numbers, underscores, dots, @ ONLY
    const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid format. Use letters, numbers, and underscores only.";
    }

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (formData.mobileNumber.length < 10) {
      newErrors.mobileNumber = "Number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, mobileNumber: value });
  };

  const sanitizeFileName = (fileName: string) => {
    return fileName.replace(/[/\\]/g, "").replace(/[^a-zA-Z0-9.-]/g, "_");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus("idle");

    try {
      let finalDocumentUrl = "";

      if (formData.documentFile) {
        const file = formData.documentFile;
        const cleanName = sanitizeFileName(file.name);

        const ticketRes = await fetch(
          `/api/upload-url?file=${encodeURIComponent(cleanName)}&type=${encodeURIComponent(file.type)}`
        );

        if (!ticketRes.ok) throw new Error("Upload ticket failed");
        const { signedUrl, cdnUrl } = await ticketRes.json();

        const s3Upload = await fetch(signedUrl, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": file.type },
        });

        if (!s3Upload.ok) throw new Error("S3 Upload Failed");
        finalDocumentUrl = cdnUrl;
      }

      const response = await fetch("https://uptimiseit-admin.vercel.app/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          documentUrl: finalDocumentUrl,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          mobileNumber: "",
          countryCode: "+91",
          department: "Software Development",
          message: "",
          documentFile: null,
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Failure:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      {/* --- HERO HEADER --- */}
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Terminal size={12} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">Communication_Protocol::v2.0</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
              Deploy <br /> <motion.span animate={{ color: ["#3b82f6", "#60a5fa", "#3b82f6"] }} transition={{ duration: 4, repeat: Infinity }} className="text-blue-500 italic">Vision.</motion.span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-sm font-medium border-l border-white/10 pl-8 pb-4 leading-relaxed">
            Submit your technical brief. Our engineering leads review all intakes within 12 hours.
          </p>
        </div>
      </section>

      {/* --- CONTACT MATRIX --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT: Info */}
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-8">
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"># Direct_Gateway</h4>
            <div className="space-y-8">
              {[
                { label: "Engineering Intake", value: "sales@uptimiseit.com", icon: <Mail /> },
                { label: "Rapid Response", value: "+91 97622 29023", icon: <MessageSquare /> }
              ].map((channel, idx) => (
                <motion.div key={idx} whileHover={{ x: 10 }} className="group flex gap-6 items-start cursor-pointer">
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
          <div className="pt-12 border-t border-slate-100 flex gap-4">
            {[<Linkedin key="l" />, <Twitter key="t" />, <Github key="g" />, <Globe key="gl" />].map((icon, i) => (
              <motion.div key={i} whileHover={{ y: -5, color: "#2563eb" }} className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 cursor-pointer transition-all">
                {icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: INTAKE FORM */}
        <div className="lg:col-span-8">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-10 lg:p-14 space-y-10 relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identity</label>
                  <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 transition-all outline-none ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-blue-600'}`} />
                  {errors.name && <p className="text-[9px] text-red-500 font-bold mt-1 uppercase ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
                  <input required type="email" placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 transition-all outline-none ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-blue-600'}`} />
                  {errors.email && <p className="text-[9px] text-red-500 font-bold mt-1 uppercase ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <div className="flex items-center gap-4 border-b-2 border-slate-100 focus-within:border-blue-600 transition-all">
                    <div className="relative mb-2">
                      <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors min-w-[100px]">
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="text-xs font-black text-slate-950">{selectedCountry.code}</span>
                        <ChevronDown size={12} className={`text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <>
                            <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)} />
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl z-30 overflow-hidden">
                              <div className="p-3 border-b border-slate-50">
                                <input type="text" autoFocus placeholder="Search country..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-50 px-3 py-2 text-xs font-bold rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20" />
                              </div>
                              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                {filteredCountries.length > 0 ? (
                                  filteredCountries.map((c) => (
                                    <button key={c.code + c.label} type="button" onClick={() => { setFormData({ ...formData, countryCode: c.code }); setIsDropdownOpen(false); setSearchQuery(""); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left">
                                      <span className="text-lg">{c.flag}</span>
                                      <div className="flex flex-col">
                                        <span className="text-[11px] font-black text-slate-950 uppercase">{c.name}</span>
                                        <span className="text-[10px] text-slate-400 font-bold">{c.code}</span>
                                      </div>
                                    </button>
                                  ))
                                ) : (
                                  <div className="p-4 text-[10px] font-bold text-slate-400 uppercase text-center">No matching country</div>
                                )}
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                    <input type="tel" required value={formData.mobileNumber} onChange={handleMobileChange} className="w-full bg-transparent py-3 text-sm font-bold focus:outline-none placeholder-transparent" placeholder="Mobile" />
                  </div>
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Number *</label>
                  <div className="absolute right-0 top-3 text-slate-300"><Phone size={16} /></div>
                  {errors.mobileNumber && <p className="text-[9px] text-red-500 font-bold mt-1 uppercase">{errors.mobileNumber}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
                  <div className="relative flex items-center">
                    <select value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer outline-none">
                      {departments.map((dept) => <option key={dept}>{dept}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-6 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Technical Brief / SRS (Optional)</label>
                <div onClick={() => fileInputRef.current?.click()} className={`group relative border-2 border-dashed rounded-[2rem] p-8 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 ${formData.documentFile ? "border-blue-600 bg-blue-50/30" : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"}`}>
                  <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setFormData({ ...formData, documentFile: e.target.files?.[0] || null })} />
                  <AnimatePresence mode="wait">
                    {formData.documentFile ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 w-full px-4">
                        <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg"><FileText size={20} /></div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-sm font-bold text-slate-900 truncate">{formData.documentFile.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{(formData.documentFile.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button type="button" onClick={(e) => { e.stopPropagation(); setFormData({ ...formData, documentFile: null }); }} className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-red-500 transition-colors"><X size={16} /></button>
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
                <textarea required placeholder="Outline your vision and core challenges..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none outline-none" />
              </div>

              <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-xl ${status === "success" ? "bg-emerald-500 text-white" : status === "error" ? "bg-red-600 text-white" : "bg-slate-950 text-white hover:bg-blue-600"}`}>
                {loading ? <Loader2 size={18} className="animate-spin" /> : status === "success" ? <>Transmission Successful <CheckCircle2 size={18} /></> : status === "error" ? <>Retry Transmission <AlertCircle size={18} /></> : <>Initialize Transmission <Zap size={16} fill="currentColor" /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};

export default ContactPage;