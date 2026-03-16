
// "use client";

// import Link from 'next/link';
// import { Facebook, Linkedin, Instagram, Globe, X, MapPin } from 'lucide-react'; // Added MapPin
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const Footer = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       },
//       { 
//         threshold: 0.2 
//       } 
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <footer className="w-full relative z-10 bg-white">
      
//       {/* --- Part 1: Animated Purple CTA Section --- */}
//       <div 
//         ref={sectionRef} 
//         className="relative w-full py-28 px-6 overflow-hidden"
//       >
//         <div 
//           className={`
//             absolute top-0 left-0 w-full bg-linear-to-b from-[#5c0096] to-[#8A0B92]
//             transition-[height] duration-1000 ease-in-out
//             ${isVisible ? 'h-full' : 'h-0'}
//           `}
//         ></div>

//         <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl font-bold mb-10 max-w-4xl leading-tight text-white">
//             Let’s create a measurable <br /> impact on your business.
//           </h2>
//           <button className="bg-white hover:bg-black text-black hover:text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg">
//             Design A Quote
//           </button>
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-linear-to-b from-transparent to-black/20"></div>
//         </div>
//       </div>

//       {/* --- Part 2: Company Info & Address (Added Section) --- */}
//       <div className="border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
          
//           {/* Left: Description & Badges */}
//           <div className="lg:w-2/3 space-y-8">
//             <div className="flex flex-col sm:flex-row gap-6">
//               {/* Logo Placeholder */}
//               <div className="shrink-0">
//                  {/* REPLACE WITH YOUR LOGO */}
//                  <div className="w-20  h-20 rounded-lg flex items-center justify-center text-white font-bold text-xs">
//                   <Image src="/logo.png" alt="image" height={100} width={100} />
//                  </div>
//               </div>
              
//               <p className="text-gray-600 text-sm leading-relaxed text-justify ">
//                 As a Custom Software Development Company, Decipher Zone&apos;s work revolves around developing web apps with technologies such as Blockchain, Crypto, Java, JavaScript, and other in-demand technologies. Want to take advantage of stupendous services? Collaborate with us NOW!
//               </p>
//             </div>

//             {/* Badges Row */}
//             <div className="flex flex-wrap items-center gap-4   transition-all duration-300">
//                 {/* REPLACE THESE WITH YOUR ACTUAL BADGE IMAGES */}
//                 <img src="/footer/f1.jpg" alt="Top Developers" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f2.jpg" alt="AppFutura" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f3.jpg" alt="Expertise" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f4.jpg" alt="GoodFirms" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f5.jpg" alt="SoftwareWorld" className="h-16 w-auto object-contain" />
//             </div>
//           </div>

//           {/* Right: Jaipur Office Address */}
//           <div className="lg:w-1/3">
//              <h3 className="text-xl font-bold text-gray-900 mb-6">Jaipur Office</h3>
//              <div className="flex items-start gap-4">
//                 <div className="bg-gray-500 rounded-full p-2 mt-1">
//                     <MapPin className="text-white w-5 h-5" />
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
//                     C-29 Q Block, Mansarovar Extension, Narayan Vihar,<br />
//                     Jaipur, Rajasthan 302029
//                 </p>
//              </div>
//           </div>

//         </div>
//       </div>

//       {/* --- Part 3: Links Section --- */}
//       <div className="pt-12 pb-8 px-6 md:px-12">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
//             {/* Brand */}
//             <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Uptimise IT</h3>
//                 <div className="flex gap-4 mb-6 font-light">
//                   <Facebook size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <Linkedin size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <Instagram size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <Globe size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <X size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                 </div>
//               </div>
//               <div className="text-xs space-y-1">
//                 <p>© uptimiseit.</p>
//                 <p>All rights reserved 2025</p>
//               </div>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="font-bold mb-6">Services</h4>
//               <ul className="space-y-3 text-sm font-light font-mono">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Design</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Technology</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Neuromarketing</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Digital Marketing</li>
//               </ul>
//             </div>

//             {/* About */}
//             <div>
//               <h4 className="font-bold mb-6">About</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">About Us</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Team</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Career</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Clients</li>
//               </ul>
//             </div>

//             {/* Quick Links 1 */}
//             <div>
//               <h4 className="font-bold mb-6">Quick Links</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Work</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Blog</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Reach Us</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Site Map</li>
//               </ul>
//             </div>

//              {/* Quick Links 2 */}
//              <div>
//               <h4 className="font-bold mb-6">Legal</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Privacy Policy</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Terms of use</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Refund Policy</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Copyrights Policy</li>
//               </ul>
//             </div>
//           </div>

//           <div className="w-full h-px bg-gray-200 mb-8"></div>

//           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//             <p className="text-center text-sm max-w-2xl text-gray-500">
//               We’re a UI/UX design agency that has helped businesses scale by transforming complex challenges into intuitive digital experiences.
//             </p>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import Link from 'next/link';
import { 
  Linkedin, Github, Bot, ShieldCheck, Cpu, 
  MapPin, Mail, ArrowUpRight, Twitter, Globe, GithubIcon
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFDFF] border-t border-slate-100 font-sans pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 1. BRAND BLOCK: Left-aligned and weighted */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <Image src="/logo.png" alt="Uptimise IT" height={32} width={130} className="brightness-0" />
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-sm font-medium">
                The AI-Native Software Factory. We build high-stakes digital products 
                with mathematical precision and 100x engineering velocity.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a href="mailto:hello@uptimise.it" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Mail size={14} className="text-slate-400 group-hover:text-blue-600" />
                </div>
                <span className="text-xs font-black font-mono tracking-tight">hello@uptimise.it</span>
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

          {/* 2. LINKS MATRIX: Better spacing and heavier headers */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-blue-600 pl-3">
                Solutions
              </h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                {["AI Factory", "Blockchain", "Cloud Ops", "UX Arch"].map(item => (
                  <li key={item} className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-slate-200 pl-3">
                Philosophy
              </h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                {["100x Engineer", "Our Process", "Case Studies", "Blog"].map(item => (
                  <li key={item} className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6 font-mono border-l-2 border-slate-200 pl-3">
                Company
              </h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                {["About Us", "Careers", "Contact", "Partners"].map(item => (
                  <li key={item} className="hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 3. SUBSCRIBE: Visual highlight */}
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

        {/* --- BOTTOM BAR: Fixed Alignment --- */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <ShieldCheck size={14} />, label: "ENTERPRISE_STD" },
              { icon: <Bot size={14} />, label: "AI_NATIVE" },
              { icon: <Cpu size={14} />, label: "GLOBAL_DEPLOY" }
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-400 font-mono tracking-widest opacity-60 hover:opacity-100 transition-opacity">
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
              <span className="opacity-30">© 2026</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;