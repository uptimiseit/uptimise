"use client";

import Link from 'next/link';
import { 
  Linkedin, Github, Bot, ShieldCheck, Cpu, 
  MapPin, Mail, ArrowUpRight, Twitter, Globe 
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFDFF] border-t border-slate-100 font-sans pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 1. BRAND BLOCK */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <Image src="/logo.png" alt="Uptimise IT" height={32} width={130} className="brightness-0" />
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-sm font-medium">
                The AI-Native Software Factory. We build high-stakes digital products 
                with mathematical precision and 100x engineering velocity.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a href="mailto:sales@uptimiseit.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Mail size={14} className="text-slate-400 group-hover:text-blue-600" />
                </div>
                <span className="text-xs font-black font-mono tracking-tight">sales@uptimiseit.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <MapPin size={14} className="text-slate-400" />
                </div>
                <span className="text-xs font-bold leading-tight">Jaipur, Rajasthan 302029, India</span>
              </div>
            </div>

            <div className="flex gap-2">
              {[<Linkedin size={16}/>, <Twitter size={16}/>, <Github size={16}/>, <Globe size={16}/>].map((icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm transition-all">
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 2. LINKS MATRIX */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
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
                  <li key={item.name} className="hover:text-blue-600 hover:translate-x-1 transition-all">
                    <Link href={item.href} className="block w-full">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
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
                  <li key={item.name} className="hover:text-blue-600 hover:translate-x-1 transition-all">
                    <Link href={item.href} className="block w-full">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
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
                  <li key={item.name} className="hover:text-blue-600 hover:translate-x-1 transition-all">
                    <Link href={item.href} className="block w-full">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 3. SUBSCRIBE */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-slate-200 pl-3">
                Subscribe
              </h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-slate-300"
                />
                <button className="absolute right-2 top-2 p-1 text-slate-400 hover:text-blue-600 transition-colors">
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 font-medium px-1 leading-relaxed">
                Receive monthly engineering insights. No spam.
              </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <ShieldCheck size={14} />, label: "ENTERPRISE_STD" },
              { icon: <Bot size={14} />, label: "AI_NATIVE" },
              { icon: <Cpu size={14} />, label: "GLOBAL_DEPLOY" }
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-400 font-mono tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <span className="text-blue-600">{trust.icon}</span>
                {trust.label}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-[11px] font-bold text-slate-600">
              <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-600">Terms</Link>
              <Link href="/cookies" className="hover:text-blue-600">Cookie</Link>
              <span className="opacity-30 cursor-default">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;