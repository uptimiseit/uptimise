"use client";

import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { 
  Linkedin, Github, Bot, ShieldCheck, Cpu, 
  MapPin, Mail, ArrowUpRight, Twitter, Globe, 
  Loader2,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.5, ease: "easeOut" } 
//   }
// };

const Footer = () => {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

 const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("https://uptimiseit-admin.vercel.app/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.toLowerCase() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("Welcome to the inner circle.");
      } else {
        setStatus("error");
        // Handling the 409 Conflict (Already Subscribed) or 400 Bad Request
        setMessage(data.message || "Subscription failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  };
  return (
    <footer className="w-full bg-[#FDFDFF] border-t border-slate-100 font-sans pt-16 pb-10 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        // variants={containerVariants}
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 1. BRAND BLOCK */}
          <motion.div
          //  variants={fadeInUp}
            className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }} className="w-fit">
                <Image src="/logo.png" alt="Uptimise IT" height={32} width={130} className="brightness-0" />
              </motion.div>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-sm font-medium">
                The AI-Native Software Factory. We build high-stakes digital products 
                with mathematical precision and 100x engineering velocity.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <motion.a 
                whileHover={{ x: 5 }}
                href="mailto:sales@uptimiseit.com" 
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Mail size={14} className="text-slate-400 group-hover:text-blue-600" />
                </div>
                <span className="text-xs font-black font-mono tracking-tight">sales@uptimiseit.com</span>
              </motion.a>
              <div className="flex items-start gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <MapPin size={14} className="text-slate-400" />
                </div>
                <span className="text-xs font-bold leading-tight">Jaipur, Rajasthan 302029, India</span>
              </div>
            </div>

            <div className="flex gap-2">
              {[
                { icon: <Linkedin size={16}/>, key: 'in' }, 
                { icon: <Twitter size={16}/>, key: 'tw' }, 
                { icon: <Github size={16}/>, key: 'gh' }, 
                { icon: <Globe size={16}/>, key: 'gl' }
              ].map((item) => (
                <motion.div
                  key={item.key}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="#" className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all">
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2. LINKS MATRIX */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
            //  variants={fadeInUp}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-blue-600 pl-3">
                Solutions
              </h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                {[
                  { name: "AI Factory", href: "/solutions/ai-factory" },
                  { name: "Blockchain", href: "/industries/blockchain" },
                  { name: "Cloud Ops", href: "/solutions/cloud-infrastructure" },
                  { name: "UX Arch", href: "/solutions/product-design" }
                ].map(item => (
                  <motion.li key={item.name} whileHover={{ x: 5 }} className="hover:text-blue-600 transition-all">
                    <Link href={item.href} className="block w-full">{item.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
            //  variants={fadeInUp}
             >
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-slate-200 pl-3">
                Philosophy
              </h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                {[
                  { name: "100x Engineer", href: "/Explore100x" },
                  { name: "Our Process", href: "/process" },
                  { name: "Case Studies", href: "/case-studies" },
                  { name: "Blog", href: "/blog" }
                ].map(item => (
                  <motion.li key={item.name} whileHover={{ x: 5 }} className="hover:text-blue-600 transition-all">
                    <Link href={item.href} className="block w-full">{item.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
            // variants={fadeInUp}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-slate-200 pl-3">
                Company
              </h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Careers", href: "/career" },
                  { name: "Contact", href: "/contact" },
                  { name: "Partners", href: "/partners" }
                ].map(item => (
                  <motion.li key={item.name} whileHover={{ x: 5 }} className="hover:text-blue-600 transition-all">
                    <Link href={item.href} className="block w-full">{item.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* 3. SUBSCRIBE */}
        <motion.div className="col-span-2 md:col-span-1">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-slate-200 pl-3">
        Subscribe
      </h4>
      
      <form onSubmit={handleSubscribe} className="relative group">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          placeholder={status === "success" ? "Subscribed!" : "Enter email"}
          className={`w-full bg-white border ${
            status === "error" ? "border-red-200" : "border-slate-200"
          } rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-slate-300 shadow-sm disabled:bg-slate-50 disabled:cursor-not-allowed`}
        />
        
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="absolute right-2 top-2 p-1 text-slate-400 hover:text-blue-600 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 size={18} className="animate-spin text-blue-600" />
          ) : status === "success" ? (
            <CheckCircle2 size={18} className="text-emerald-500" />
          ) : (
            <ArrowUpRight size={18} />
          )}
        </button>
      </form>

      {/* FEEDBACK MESSAGE */}
      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-[9px] mt-2 font-bold px-1 uppercase tracking-tight ${
              status === "success" ? "text-emerald-600" : "text-rose-500"
            }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      {!message && (
        <p className="text-[9px] text-slate-400 mt-3 font-medium px-1 leading-relaxed">
          Receive monthly engineering insights. No spam.
        </p>
      )}
    </motion.div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div 
          // variants={fadeInUp}
          className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <ShieldCheck size={14} />, label: "ENTERPRISE_STD" },
              { icon: <Bot size={14} />, label: "AI_NATIVE" },
              { icon: <Cpu size={14} />, label: "GLOBAL_DEPLOY" }
            ].map((trust, i) => (
              <motion.div 
                key={i} 
                whileHover={{ opacity: 1 }}
                className="flex items-center gap-2 text-[10px] font-black text-slate-400 font-mono tracking-widest opacity-60 transition-opacity cursor-default"
              >
                <span className="text-blue-600">{trust.icon}</span>
                {trust.label}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-[11px] font-bold text-slate-600">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-blue-600 transition-colors">Cookie</Link>
              <span className="opacity-30 cursor-default">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;