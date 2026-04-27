"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Bot,
  Cpu,
  Zap,
  ChevronRight,
  Linkedin,
  Command,
  Globe,
  Check,
  Sparkles,
  Loader2,
  Phone,
  Paperclip,
  FileText,
  X,
  ChevronDown,
} from "lucide-react";

const BookingPage = () => {
  const countryCodes = [
    { code: "+91", label: "IN", flag: "🇮🇳" },
    { code: "+1", label: "US", flag: "🇺🇸" },
    { code: "+44", label: "UK", flag: "🇬🇧" },
    { code: "+971", label: "AE", flag: "🇦🇪" },
    { code: "+61", label: "AU", flag: "🇦🇺" },
    { code: "+65", label: "SG", flag: "🇸🇬" },
    { code: "+49", label: "DE", flag: "🇩🇪" },
    { code: "+33", label: "FR", flag: "🇫🇷" },
    { code: "+81", label: "JP", flag: "🇯🇵" },
    { code: "+86", label: "CN", flag: "🇨🇳" },
    { code: "+7", label: "RU", flag: "🇷🇺" },
    { code: "+1", label: "CA", flag: "🇨🇦" },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Name Validation: Only characters and spaces allowed
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Name must contain only alphabets";
    }

    // Mobile Validation: Only numbers, minimum 10 digits
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (formData.mobileNumber.length < 10) {
      newErrors.mobileNumber = "Number must be exactly 10 digits";
    }

    // LinkedIn Validation: Must start with https and contain linkedin.com
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (formData.linkedinUrl && !linkedInRegex.test(formData.linkedinUrl)) {
      newErrors.linkedinUrl = "URL must start with https://linkedin.com";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, fullName: value });
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Remove non-digits
    // 2. Limit to 10 characters (Max)
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, mobileNumber: value });
  };

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    mobileNumber: "", // Added field
    countryCode: "+91",
    companyStage: "Revenue: Seed / Pre-revenue",
    linkedinUrl: "",
    projectContext: "",
    documentFile: null as File | null, // Added field
  });



  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault(); // 1. Start Submission State
  //   setIsSubmitting(true);
  //   setStatus("idle"); // 2. Run Validation Logic

  //   if (!validate()) {
  //     setIsSubmitting(false);
  //     console.error("Validation failed", errors);
  //     return;
  //   } // 3. Construct FormData (Matches the 'form-data' tab in Postman)

  //   const data = new FormData(); // Text Fields
  //   data.append("fullName", formData.fullName);
  //   data.append("workEmail", formData.workEmail);
  //   data.append("mobileNumber", formData.mobileNumber);
  //   data.append("countryCode", formData.countryCode);
  //   data.append("companyName", formData.companyName || "");
  //   data.append("companyStage", formData.companyStage);
  //   data.append("linkedinUrl", formData.linkedinUrl || "");
  //   data.append("projectContext", formData.projectContext); // File Field (Must match the key used in Postman)

  //   if (formData.documentFile) {
  //     data.append("documentFile", formData.documentFile);
  //   }

  //   try {
  //     // 4. Execute Network Request
  //     const response = await fetch(
  //       "https://uptimiseit-admin.vercel.app/api/intake",
  //       {
  //         method: "POST", // IMPORTANT: Do NOT set 'Content-Type' header.
  //         // The browser will set it automatically with the boundary.
  //         body: data,
  //       },
  //     ); // 5. Handle Response

  //     if (response.ok) {
  //       setStatus("success"); // Reset form after successful transmission
  //       setFormData({
  //         fullName: "",
  //         workEmail: "",
  //         companyName: "",
  //         mobileNumber: "",
  //         countryCode: "+91",
  //         companyStage: "Revenue: Seed / Pre-revenue",
  //         linkedinUrl: "",
  //         projectContext: "",
  //         documentFile: null,
  //       });

  //       // Clear any previous errors
  //       setErrors({});
  //     } else {
  //       const errorResult = await response.json();
  //       console.error("Server Error:", errorResult);
  //       setStatus("error");
  //     }
  //   } catch (error) {
  //     console.error("Transmission Network Error:", error);
  //     setStatus("error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    if (!validate()) {
      setIsSubmitting(false);
      return;
    }

    try {
      let finalDocumentUrl = "";

      // --- STEP 1: AWS S3 UPLOAD (Direct from Browser) ---
      if (formData.documentFile) {
        const file = formData.documentFile;

        // A. Request the Presigned URL
        const ticketRes = await fetch(
          `/api/upload-url?file=${encodeURIComponent(file.name)}&type=${encodeURIComponent(file.type)}`
        );
        
        if (!ticketRes.ok) throw new Error("Failed to get upload credentials");
        const { signedUrl, cdnUrl } = await ticketRes.json();

        // B. PUT the file to S3
        const s3Upload = await fetch(signedUrl, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": file.type },
        });

        if (!s3Upload.ok) throw new Error("S3 Upload Failed");

        // Set the CloudFront link for the database
        finalDocumentUrl = cdnUrl;
      }

      // --- STEP 2: SAVE DATA TO INTAKE API ---
      // Switching to JSON payload for better reliability with the CDN URL
      const response = await fetch(
        "https://uptimiseit-admin.vercel.app/api/intake",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            workEmail: formData.workEmail,
            mobileNumber: formData.mobileNumber,
            countryCode: formData.countryCode,
            companyName: formData.companyName || "",
            companyStage: formData.companyStage,
            linkedinUrl: formData.linkedinUrl || "",
            projectContext: formData.projectContext,
            documentUrl: finalDocumentUrl, // The AWS CDN Link
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          workEmail: "",
          companyName: "",
          mobileNumber: "",
          countryCode: "+91",
          companyStage: "Revenue: Seed / Pre-revenue",
          linkedinUrl: "",
          projectContext: "",
          documentFile: null,
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  
  return (
    <main className="min-h-screen bg-[#FDFDFF] font-sans pt-20 selection:bg-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32 relative z-10">
        {/* --- LEFT: Technical Value Stage --- */}
        <motion.div
          // variants={containerVars}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 text-center lg:text-left space-y-16 py-12"
        >
          <div className="space-y-6">
            <motion.div
              // variants={itemVars}
              className="p-3 bg-blue-50 rounded-2xl w-fit text-blue-600"
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.h1
              // variants={itemVars}
              className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] uppercase"
            >
              Elite <br />
              <span className="text-blue-600 italic">Access.</span>
            </motion.h1>
            <motion.p
              // variants={itemVars}
              className="text-xl text-slate-500 font-body leading-relaxed max-w-sm font-medium"
            >
              Architecting the future of scalable systems. Upload your specs for
              a precision audit.
            </motion.p>
          </div>

          <div className="space-y-10">
            {[
              {
                icon: <Cpu size={20} />,
                title: "System Stress Test",
                desc: "We identify architectural bottlenecks in your current plan.",
              },
              {
                icon: <Bot size={20} />,
                title: "AI Feasibility",
                desc: "Determine which agents can automate your core operations.",
              },
              {
                icon: <ShieldCheck size={20} />,
                title: "NDA Protocol",
                desc: "Every consultation is legally bounded and IP-secure.",
              },
            ].map((item, i) => (
              <motion.div
                // variants={itemVars}
                key={i}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div className="space-y-1 text-left">
                  <h5 className="font-black text-slate-950 uppercase tracking-tight text-sm">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT: The Engineering Intake Form --- */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="bg-white border border-slate-100 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <div className="p-12 border-b border-slate-50 bg-[#FDFDFF] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-950">
                <Command size={160} />
              </div>
              <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">
                PROJECT_INTAKE_v1.1
              </h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                <Globe size={14} className="text-blue-500" /> Secure Engineering
                Gateway
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-12 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  {/* <input 
                    type="text" required 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent" 
                    placeholder="Name" 
                  /> */}

                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleNameChange} // Use the custom handler here
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent"
                    placeholder="Name"
                  />
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:font-bold peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-blue-600">
                    Full Name *
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent"
                    placeholder="Email"
                  />
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:font-bold peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-blue-600">
                    Work Email *
                  </label>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-4 border-b-2 border-slate-100 focus-within:border-blue-600 transition-all">
                  <div className="relative flex items-center bg-slate-50/50 px-3 py-1 rounded-xl mb-2 group-hover:bg-slate-100 transition-colors">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryCode: e.target.value,
                        })
                      }
                      className="bg-transparent text-xs font-black text-slate-950 outline-none cursor-pointer appearance-none pr-6 z-10"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code + c.label} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={12}
                      className="absolute right-2 text-slate-400"
                    />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={handleMobileChange}
                    className="w-full bg-transparent py-3 text-sm font-bold focus:outline-none placeholder-transparent"
                    placeholder="Mobile"
                  />
                </div>
                <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Mobile Number *
                </label>
                <div className="absolute right-0 top-3 text-slate-300">
                  <Phone size={16} />
                </div>
                {errors.mobileNumber && (
                  <p className="text-[9px] text-red-500 font-bold mt-1 uppercase">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <select
                    value={formData.companyStage}
                    onChange={(e) =>
                      setFormData({ ...formData, companyStage: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                  >
                    <option>Revenue: Seed / Pre-revenue</option>
                    <option>Rs 1M - Rs 10M</option>
                    <option>Rs 10M - Rs 50M</option>
                    <option>Rs 50M+</option>
                    <option>None of these </option>
                  </select>
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-blue-600">
                    Company Stage
                  </label>
                </div>
                <div className="relative group">
                  <div className="absolute right-0 top-3 text-blue-600">
                    <Linkedin size={18} />
                  </div>
                  <input
                    type="text"
                    value={formData.linkedinUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, linkedinUrl: e.target.value })
                    }
                    // Toggle red border if there is a LinkedIn error
                    className={`peer w-full bg-transparent border-b-2 py-3 text-sm font-bold focus:outline-none transition-all placeholder-transparent ${
                      errors.linkedinUrl
                        ? "border-red-500"
                        : "border-slate-100 focus:border-blue-600"
                    }`}
                    placeholder="LinkedIn"
                  />
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    LinkedIn Profile URL
                  </label>

                  {/* Error Message Display */}
                  <AnimatePresence>
                    {errors.linkedinUrl && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-red-500 font-bold mt-1 uppercase"
                      >
                        {errors.linkedinUrl}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Document Upload Field */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Technical Brief / SRS (PDF/DOCX)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`group relative w-full border-2 border-dashed rounded-3xl p-8 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-3 ${
                    formData.documentFile
                      ? "border-blue-600 bg-blue-50/30"
                      : "border-slate-100 hover:border-blue-400 bg-slate-50/50"
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        documentFile: e.target.files?.[0] || null,
                      })
                    }
                  />

                  {formData.documentFile ? (
                    <div className="flex items-center gap-4 w-full">
                      <div className="p-3 bg-blue-600 rounded-xl text-white">
                        <FileText size={20} />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-bold text-slate-900 truncate">
                          {formData.documentFile.name}
                        </p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          {(formData.documentFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData({ ...formData, documentFile: null });
                        }}
                        aria-label="Remove document"
                        className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Paperclip
                          size={24}
                          className="text-slate-400 group-hover:text-blue-600"
                        />
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Attach System Requirements
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Brief Project Context
                  </label>
                  <span className="text-[9px] font-mono font-bold text-slate-300">
                    {formData.projectContext.length}/300
                  </span>
                </div>
                <textarea
                  maxLength={300}
                  value={formData.projectContext}
                  onChange={(e) =>
                    setFormData({ ...formData, projectContext: e.target.value })
                  }
                  placeholder="Describe your current tech stack and core engineering challenges..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-600 transition-all min-h-[120px] resize-none"
                />
              </div>

              <div className="pt-6">
                <button
                  aria-label="Submit booking request"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-20 rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50 ${
                    status === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-950 text-white hover:bg-blue-600 shadow-blue-900/10"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Initializing_Audit...</span>
                    </div>
                  ) : status === "success" ? (
                    <span>Transmission_Secure</span>
                  ) : (
                    <>
                      Request Strategy Consultation
                      <ChevronRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center mt-4 font-mono">
                    Critical_Error: Transmission_Failed
                  </p>
                )}
              </div>
            </form>

            <div className="px-12 py-6 bg-slate-50/50 border-t border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <Check size={14} className="text-emerald-500" />
                <span className="text-[9px] font-black tracking-widest font-mono">
                  SOC2_COMPLIANT
                </span>
              </div>
              <div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <Check size={14} className="text-blue-500" />
                <span className="text-[9px] font-black tracking-widest font-mono">
                  ENCRYPTED_INTAKE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
