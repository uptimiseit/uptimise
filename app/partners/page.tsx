// 'use client';

// import React, { useState } from "react";
// import { 
//   Handshake, Coins, Network, CheckCircle2, Users, Briefcase, 
//   Send, Loader2, AlertCircle, ShieldCheck, Zap, LineChart
// } from "lucide-react";

// export default function PartnerProgramPage() {
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '', 
//     companyName: '',
//     country: '',
//     partnerType: '',
//     message: ''
//   });

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus('idle');

//     // Build the payload to match EXACTLY what your API expects
//     const payload = {
//       fullName: formData.fullName,
//       workEmail: formData.email, // Backend expects 'workEmail'
//       companyName: formData.companyName || "N/A",
//       country: formData.country,
//       partnerType: formData.partnerType,
//       message: formData.message || ""
//     };

//     console.log("Sending Payload:", payload); // Check this in your browser console

//     try {
//       const response = await fetch('https://uptimiseit-admin.vercel.app/api/partners', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setStatus('success');
//         setFormData({ fullName: '', email: '', companyName: '', country: '', partnerType: '', message: '' });
//         setTimeout(() => setStatus('idle'), 5000);
//       } else {
//         // This will show you exactly which field failed validation
//         console.error("Server Error Message:", result.error);
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error("Network Error:", error);
//       setStatus('error');
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/60 blur-[120px] rounded-full -z-10"></div>
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold tracking-wide uppercase mb-4">
//           <Handshake size={16} /> Uptimise IT Partner Program
//         </div>
//         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
//           Earn by Referring <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">Technology Projects</span>
//         </h1>
//         <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//           Introduce companies that need software development or AI solutions and earn a <span className="font-bold text-emerald-600">10% commission</span>.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
//           <a href="#apply" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all text-lg">
//             Apply for Partnership
//           </a>
//           <a href="#how-it-works" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg">
//             See How It Works
//           </a>
//         </div>
//       </section>

//       {/* 2. PARTNER TYPES */}
//       <section className="py-24 px-6 bg-white border-y border-slate-200">
//         <div className="max-w-7xl mx-auto space-y-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Ways to Partner With Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: "Referral Partners", subtitle: "10% Commission", desc: "Introduce us to projects. We close the deal, you get paid.", icon: <Coins className="text-emerald-500 w-8 h-8" />, bg: "bg-emerald-50", border: "border-emerald-200" },
//               { title: "Agency Partners", subtitle: "White-label Squads", desc: "Marketing agencies can white-label our engineers for complex tech builds.", icon: <Users className="text-blue-500 w-8 h-8" />, bg: "bg-blue-50", border: "border-blue-200" },
//               { title: "Technology Partners", subtitle: "Platform Integrations", desc: "For SaaS companies looking to build native integrations or co-market solutions.", icon: <Network className="text-indigo-500 w-8 h-8" />, bg: "bg-indigo-50", border: "border-indigo-200" }
//             ].map((type, idx) => (
//               <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-all">
//                 <div className={`absolute top-0 left-0 w-full h-1 ${type.bg} border-t ${type.border}`}></div>
//                 <div className={`mb-6 ${type.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}>{type.icon}</div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-1">{type.title}</h3>
//                 <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{type.subtitle}</p>
//                 <p className="text-slate-600 leading-relaxed">{type.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. HOW IT WORKS */}
//       <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
//         <h2 className="text-4xl font-bold text-center text-slate-900">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
//           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
//           {[
//             { step: "01", title: "Refer a Client", desc: "Introduce a company needing SaaS, AI, or cloud engineering." },
//             { step: "02", title: "Consultation", desc: "We connect with the client and prepare the technical plan." },
//             { step: "03", title: "Execution", desc: "Our engineering team begins development once approved." },
//             { step: "04", title: "Earn", desc: "Receive 10% commission on all project milestone payments." }
//           ].map((process, idx) => (
//             <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative group hover:border-blue-400 transition-all">
//                <div className="w-10 h-10 bg-blue-100 text-blue-700 font-black rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
//                  {idx + 1}
//                </div>
//                <h4 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h4>
//                <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 4. DASHBOARD PREVIEW */}
//       <section className="py-24 px-6 bg-[#0A1128] text-white border-y border-slate-800">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
//           <div className="flex-1 space-y-8">
//             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Total Transparency. <br/><span className="text-emerald-500">Track Your Earnings.</span></h2>
//             <p className="text-xl text-slate-400">Partners get a dedicated portal to track leads, monitor project status, and view payout history in real-time.</p>
//           </div>
//           <div className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-xl shadow-emerald-500/5">
//              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
//                <div className="flex items-center gap-3"><Briefcase size={16} className="text-blue-500"/><span className="font-bold">Partner Dashboard</span></div>
//                <span className="text-slate-500 text-sm">Demo View</span>
//              </div>
//              <div className="grid grid-cols-2 gap-4 mb-6">
//                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
//                  <p className="text-slate-400 text-xs mb-1 uppercase tracking-widest">Total Earned</p>
//                  <p className="text-2xl font-bold text-emerald-400">$14,250</p>
//                </div>
//                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
//                  <p className="text-slate-400 text-xs mb-1 uppercase tracking-widest">Active Referrals</p>
//                  <p className="text-2xl font-bold text-white">3</p>
//                </div>
//              </div>
//              <div className="space-y-3">
//                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
//                  <div className="text-sm font-bold">Acme Corp Build</div>
//                  <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 rounded text-[10px]">In Development</span>
//                </div>
//                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center opacity-50">
//                  <div className="text-sm font-bold">Logistics ERP</div>
//                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-1 rounded text-[10px]">Payout Pending</span>
//                </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. APPLICATION FORM SECTION */}
//       <section id="apply" className="py-24 px-6 max-w-4xl mx-auto">
//         <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-2xl">
//           <div className="text-center space-y-4 mb-12">
//             <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Become a Partner</h2>
//             <p className="text-lg text-slate-600">Apply below to start your partnership journey with Uptimise IT.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700">Full Name *</label>
//                 <input 
//                   type="text" required value={formData.fullName}
//                   onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" 
//                   placeholder="Simran Kushrestha" 
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700">Work Email *</label>
//                 <input 
//                   type="email" required value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" 
//                   placeholder="simran@uptimiseit.com" 
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700">Company Name</label>
//                 <input 
//                   type="text" value={formData.companyName}
//                   onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" 
//                   placeholder="Uptimise IT" 
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700">Country *</label>
//                 <input 
//                   type="text" required value={formData.country}
//                   onChange={(e) => setFormData({...formData, country: e.target.value})}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" 
//                   placeholder="India" 
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-bold text-slate-700">Partner Type *</label>
//               <select 
//                 required value={formData.partnerType}
//                 onChange={(e) => setFormData({...formData, partnerType: e.target.value})}
//                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer outline-none transition-all"
//               >
//                 <option value="" disabled>Select an option...</option>
//                 <option value="agency">Agency Partner</option>
//                 <option value="consultant">Technology Consultant</option>
//                 <option value="freelancer">Freelancer</option>
//                 <option value="referral">Standard Referral Partner</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-bold text-slate-700">Message / Notes</label>
//               <textarea 
//                 rows={4} value={formData.message}
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 resize-none outline-none transition-all" 
//                 placeholder="Tell us about your network or background..."
//               />
//             </div>

//             <button 
//               type="submit" disabled={loading}
//               className={`w-full text-white font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 transition-all shadow-lg 
//                 ${status === 'success' ? 'bg-emerald-600' : status === 'error' ? 'bg-red-600' : 'bg-blue-700 hover:bg-blue-800'}`}
//             >
//               {loading ? <Loader2 className="animate-spin" /> : 
//                status === 'success' ? <>Application Sent <CheckCircle2 size={18} /></> : 
//                status === 'error' ? <>Error Occurred <AlertCircle size={18} /></> : 
//                <>Submit Application <Send size={18} /></>}
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import React, { useState } from "react";
import { 
  Handshake, Coins, Network, CheckCircle2, Users, Briefcase, 
  Send, Loader2, AlertCircle, ShieldCheck, Zap
} from "lucide-react";

export default function PartnerProgramPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '', 
    companyName: '',
    country: '',
    partnerType: '',
    message: ''
  });


  /**
   * Allows alphabets, numbers, @, _, and .
   * Blocks spaces and special symbols like !, #, $
   */
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/[^a-zA-Z0-9@_.]/g, '');
    setFormData(prev => ({ ...prev, email: cleanValue }));
  };


  const handleAlphabetInput = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, [field]: cleanValue });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final Email Format Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus('idle');

    const payload = {
      fullName: formData.fullName,
      workEmail: formData.email,
      companyName: formData.companyName || "N/A",
      country: formData.country,
      partnerType: formData.partnerType,
      message: formData.message || ""
    };

    try {
      const response = await fetch('https://uptimiseit-admin.vercel.app/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', companyName: '', country: '', partnerType: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/60 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold tracking-wide uppercase mb-4">
          <Handshake size={16} /> Uptimise IT Partner Program
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Earn by Referring <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">Technology Projects</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Collaborate with us and earn a <span className="font-bold text-emerald-600">10% commission</span> for every successful project referral.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a href="#apply" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all text-lg">
            Apply for Partnership
          </a>
          <a href="/about" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg">
            See How It Works
          </a>
        </div>
      </section>

      {/* 2. PARTNER TYPES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Ways to Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Referral Partners", desc: "Introduce us to projects. We close the deal, you get paid.", icon: <Coins className="text-emerald-500 w-8 h-8" />, bg: "bg-emerald-50" },
              { title: "Agency Partners", desc: "White-label our engineering team to expand your agency's delivery capacity.", icon: <Users className="text-blue-500 w-8 h-8" />, bg: "bg-blue-50" },
              { title: "Technology Partners", desc: "Build native integrations or co-market solutions to our enterprise clients.", icon: <Network className="text-indigo-500 w-8 h-8" />, bg: "bg-indigo-50" }
            ].map((type, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-all">
                <div className={`mb-6 ${type.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}>{type.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center text-slate-900">The Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
          {[
            { t: "Refer a Client", d: "Introduce a company needing SaaS, AI, or Web3 solutions." },
            { t: "Consultation", d: "We connect with the client and prepare the technical roadmap." },
            { t: "Execution", d: "Our team begins development following your introduction." },
            { t: "Earn", d: "Receive 10% commission on milestone project payments." }
          ].map((process, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative group">
               <div className="w-10 h-10 bg-blue-100 text-blue-700 font-black rounded-full flex items-center justify-center mb-6">
                 {idx + 1}
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-3">{process.t}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DASHBOARD PREVIEW */}
      <section className="py-24 px-6 bg-[#0A1128] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Track Your Earnings.</h2>
            <p className="text-xl text-slate-400">Partners gain access to a dedicated portal to monitor leads and upcoming payouts in real-time.</p>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-xl">
             <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
               <div className="flex items-center gap-3"><Briefcase size={16} className="text-blue-500"/><span className="font-bold text-sm">Partner Dashboard</span></div>
             </div>
             <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <p className="text-slate-400 text-[10px] uppercase mb-1">Total Earned</p>
                 <p className="text-2xl font-bold text-emerald-400">$14,250</p>
               </div>
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <p className="text-slate-400 text-[10px] uppercase mb-1">Active Deals</p>
                 <p className="text-2xl font-bold text-white">3</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FORM SECTION WITH REAL-TIME VALIDATION */}
      <section id="apply" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-2xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Become a Partner</h2>
            <p className="text-lg text-slate-600">Enter your details to initiate the partnership protocol.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Filtered: Alphabet only */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <input 
                  type="text" required 
                  value={formData.fullName}
                  onChange={(e) => handleAlphabetInput(e, 'fullName')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none" 
                  placeholder="Alphabets only" 
                />
              </div>
              {/* Email Filtered: Letters, numbers, @, _, . */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Work Email *</label>
                <input 
                  type="email" required 
                  value={formData.email}
                  onChange={handleEmailInput}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none" 
                  placeholder="name@company.com" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company Name</label>
                <input 
                  type="text" 
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none" 
                  placeholder="Uptimise IT" 
                />
              </div>
              {/* Country Filtered: Alphabet only */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Country *</label>
                <input 
                  type="text" required 
                  value={formData.country}
                  onChange={(e) => handleAlphabetInput(e, 'country')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none" 
                  placeholder="Alphabets only" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Partner Type *</label>
              <select 
                required value={formData.partnerType}
                onChange={(e) => setFormData({...formData, partnerType: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer outline-none"
              >
                <option value="" disabled>Select an option...</option>
                <option value="agency">Agency Partner</option>
                <option value="consultant">Consultant</option>
                <option value="freelancer">Freelancer</option>
                <option value="referral">Referral Partner</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message / Notes</label>
              <textarea 
                rows={4} value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 resize-none outline-none" 
                placeholder="Tell us about your network..."
              />
            </div>

            <button 
              type="submit" disabled={loading}
              className={`w-full text-white font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 transition-all 
                ${status === 'success' ? 'bg-emerald-600' : status === 'error' ? 'bg-red-600' : 'bg-blue-700 hover:bg-blue-800'}`}
            >
              {loading ? <Loader2 className="animate-spin" /> : 
               status === 'success' ? <>Application Sent <CheckCircle2 size={18} /></> : 
               status === 'error' ? <>Error Occurred <AlertCircle size={18} /></> : 
               <>Submit Application <Send size={18} /></>}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}