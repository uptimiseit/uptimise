'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Phone, MessageSquare, 
  ArrowUpRight, Globe, Github, Linkedin, 
  Twitter, Zap, ShieldCheck, Terminal
} from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Terminal size={12} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
                Communication_Protocol::v1.0
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
              Get in <br />
              <span className="text-blue-500 italic">Touch.</span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-sm font-medium border-l border-white/10 pl-8 pb-4 leading-relaxed">
            Whether you're looking to scale an existing platform or architect something entirely new, our squad is ready to deploy.
          </p>
        </div>
      </section>

      {/* --- Section 2: Contact Matrix --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: Direct Channels */}
        <div className="lg:col-span-5 space-y-16">
          
          {/* Channel 1: Engineering Hub */}
          <div className="space-y-8">
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-center lg:text-left text-slate-400 font-mono italic"># Direct_Lines</h4>
            
            <div className="space-y-8">
              <div className="group flex gap-6 items-start cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Send a Message</p>
                  <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">sales@uptimiseit.com</p>
                </div>
              </div>

              <div className="group flex gap-6 items-start cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Chat</p>
                  <p className="text-xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">+91 97622 29023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Channel 2: HQ Location */}
          <div className="space-y-8">
            <h4 className="text-[12px] text-center lg:text-left font-black uppercase tracking-[0.3em] text-slate-400 font-mono italic"># Global_Presence</h4>
            <div className="group flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest"> Office Address: </p>
                <p className="text-lg font-bold text-slate-600 leading-snug">
                  office no. 4 , k-11 ,<br />
                  Narendra nagar, Jaipur 302019, <br />
                  Rajasthan, India
                </p>
                <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:gap-3 transition-all pt-2 uppercase tracking-widest">
                  Open in Maps <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Channel 3: Social Sync */}
          <div className="pt-12 border-t  border-slate-50 flex items-center justify-center lg:justify-start gap-4">
            {[<Linkedin size={20}/>, <Twitter size={20}/>, <Github size={20}/>, <Globe size={20}/>].map((icon, i) => (
              <div key={i} className="w-12  h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-300 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: High-End Contact Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-12 lg:p-16 space-y-12"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase">Send a Brief</h3>
              <p className="text-slate-400 text-sm font-medium">Explain your vision, and we'll route it to the right department.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Identity</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
                  <input type="email" placeholder="name@company.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer">
                  <option>Software Development</option>
                  <option>AI & Automation</option>
                  <option>Blockchain / Web3</option>
                  <option>Cloud Infrastructure</option>
                  <option>Product Strategy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Briefing</label>
                <textarea placeholder="Describe your technical requirements..." rows={5} className="w-full bg-slate-50 border-none rounded-4xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-blue-600 transition-all resize-none" />
              </div>

              <button className="group w-full py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all duration-500 flex items-center justify-center gap-4">
                Initialize Transmission
                <Zap size={16} className="group-hover:scale-125 transition-transform" />
              </button>
            </form>

            <div className="pt-10 border-t border-slate-50 flex items-center justify-center gap-12">
               <div className="flex items-center gap-2 opacity-30">
                  <ShieldCheck size={14} />
                  <span className="text-[9px] font-black tracking-widest uppercase">NDA_READY</span>
               </div>
               <div className="flex items-center gap-2 opacity-30">
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