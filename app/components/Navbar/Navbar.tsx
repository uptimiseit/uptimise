
// "use client";

// import Link from "next/link";
// import { ChevronDown, ChevronUp, Download, DownloadIcon, Phone } from "lucide-react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { useEffect, useState } from "react";
// import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
// import Image from "next/image";
// import { RainbowButton } from "@/components/ui/rainbow-button";

// // --- DATA DEFINITIONS ---
// const serviceCards = [
//   { title: "Design.", desc: "Handcraft the user experience.", bg: "bg-pink-50", href: "/services/design" },
//   { title: "Technology.", desc: "Modern frameworks for scalable web solutions.", bg: "bg-blue-50", href: "/services/technology" },
//   { title: "Marketing.", desc: "Creative strategies for brands.", bg: "bg-purple-50", href: "/services/marketing" },
//   { title: "Server.", desc: "High-performance backend and cloud architecture.", bg: "bg-green-50", href: "/services/server" },
// ];

// const aboutCards = [
//   { title: "About Us.", desc: "We are super-efficient yet humble to serve you!", bg: "bg-pink-50", href: "/about" },
//   { title: "Team.", desc: "We are proud of our experienced and accomplished team!", bg: "bg-indigo-50", href: "/about/team" },
//   { title: "Career.", desc: "Can you offer such experience?", bg: "bg-purple-50", href: "/about/career" },
// ];

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const currentCards = activeDropdown === "Services" ? serviceCards : activeDropdown === "About" ? aboutCards : [];
//   const gridCols = activeDropdown === "Services" ? "md:grid-cols-4" : "md:grid-cols-3";

//   if (!mounted) return null;

//   return (
//     <>
//       <div className="h-[70px] w-full" /> {/* Matching header height exactly */}

//       <header
//         className="fixed top-0 left-0 z-50 w-full bg-white font-sans transition-all duration-300"
//         onMouseLeave={() => setActiveDropdown(null)}
//       >
//         <div className={`w-full transition-all duration-200 ${activeDropdown ? "border-b-transparent" : "shadow-sm border-b border-neutral-100"}`}>
//           <div className="container mx-auto flex h-[70px] items-center justify-between px-6 lg:px-12">
            
//             {/* --- Logo --- */}
//             <Link href="/" className="shrink-0">
//               <Image src="/logo.png" alt="Logo" height={40} width={140} className="object-contain" priority />
//             </Link>

//             {/* --- Navigation --- */}
//             <nav className="hidden h-full items-center gap-10 font-medium text-gray-700 md:flex">
//               {["Work", "Services", "Partners", "About", "Knowledge"].map((item) => {
//                 const hasDropdown = item === "Services" || item === "About";
//                 const isActive = activeDropdown === item;

//                 return (
//                   <div
//                     key={item}
//                     className="relative flex h-full items-center cursor-pointer"
//                     onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
//                   >
//                     <Link
//                       href={`/${item.toLowerCase()}`}
//                       className={`flex items-center gap-1.5 transition-colors ${isActive ? "text-red-500" : "hover:text-red-500"}`}
//                     >
//                       {item}
//                       {hasDropdown && (
//                         <span className={`transition-transform duration-300 mt-1 ${isActive ? "  rotate-180 text-red-500" : "text-gray-400"}`}>
//                           <ChevronDown size={14} strokeWidth={2.5} />
//                         </span>
//                       )}
//                     </Link>
//                   </div>
//                 );
//               })}
//             </nav>

//             {/* --- Action Buttons --- */}
//             <div className="flex items-center gap-3">
//               {/* <RainbowButton variant="outline" className="flex items-center gap-2 px-4 py-2 text-sm">
//                 <MdLocalPhone size={18} /> Contact Us
//               </RainbowButton> */}
//               {/* <RainbowButton variant="outline" className="flex items-center gap-2 px-4 py-2 text-sm">
//                 <MdOutlineFileDownload size={18} /> Brochure
//               </RainbowButton> */}

//                  <button>
//                   <a
//                     href="#_"
//                     className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
//                   >
//                     {/* <div className=" absolute h-1 w-1 rounded-full bg-pink-400  animate-bounce left-3 top-2"></div>
//                     <div className=" absolute h-1 w-1 rounded-full bg-yellow-800/40 right-3 top-0 animate-blob"></div>
//                     <div className=" absolute h-1 w-1 rounded-full bg-blue-500/40 right-5 top-7 animate-blob"></div>


//                     <div className=" absolute h-1 w-1 rounded-full bg-lime-800/40  animate-bounce left-10 top-8">
                
//                       <div className=" absolute h-1 w-1 rounded-full bg-lime-500  animate-blob ">
//                         {" "}
//                       </div>
//                     </div> */}
//                     <span className="w-48 h-48 rounded rotate-[-50deg] bg-purple-200 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                     <span className="relative w-full flex gap-2   items-center justify-center text-left text-black transition-colors duration-300 ease-in-out">
//                      Contact Us
//                     </span>
//                   </a>
//                 </button>

//                   {/* <button>
//                   <a
//                     href="#_"
//                     className="relative inline-flex items-center bg-lime-200 justify-start px-5 py-2 overflow-hidden font-medium transition-all rounded hover:bg-white group"
//                   >
//                     <div className=" absolute h-1 w-1 rounded-full bg-pink-400  animate-bounce left-3 top-2"></div>
//                     <div className=" absolute h-1 w-1rounded-full bg-yellow-800/40 right-3 top-0 animate-blob"></div>

//                     <div className=" absolute h-1 w-1 rounded-full bg-lime-500  animate-bounce left-32 top-4"></div>

//                     <div className=" absolute h-1 w-1 rounded-full bg-purple-800/40  animate-bounce left-10 top-12">
//                       <div className=" absolute h-1 w-1 rounded-full bg-orange-800/50  animate-bounce left-12 top-6">
//                         {" "}
//                       </div>
//                       <div className=" absolute h-1 w-1 rounded-full bg-orange-500  animate-blob ">
//                         {" "}
//                       </div> 
//                       <div className=" absolute h-1 w-1 rounded-full bg-orange-500  animate-blob ">
//                         {" "}
//                       </div> 
//                      </div>
//                     <span className="w-48 h-48 rounded rotate-[-50deg] bg-lime-200 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                     <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out ">
//                       <DownloadIcon className="inline-block mr-1" size={16} />
//                       Download
//                     </span>
//                   </a>
//                 </button> */}


//                 <button className="bg-black
//                   p-2 rounded-full ">
//                   <Download color="white" size={16}/>
//                 </button>

//                 {/* <button className="group relative">
//   <Link
//     href="#_"
//     className="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-medium transition-all bg-pink-100 rounded hover:bg-white "
//   >


//   <span className="w-48 h-48 rounded rotate-[-50deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

//     <span className="relative z-20 flex items-center text-black transition-colors duration-300">
//       <MdOutlineFileDownload className="mr-2" size={14} />
//       <span className="tracking-wide">Download </span>
//     </span>
//   </Link>
// </button> */}
//             </div>
//           </div>
//         </div>

//         {/* --- Dropdown Panel --- */}
//         <div
//           className={`absolute left-0 top-full w-full overflow-hidden border-b border-gray-100 bg-white shadow-2xl transition-all duration-500 ease-in-out ${
//             activeDropdown ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
//           }`}
//         >
//           <div className="mx-auto max-w-7xl px-8 py-12">
//             <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
//               {currentCards.map((card) => (
//                 <Link
//                   key={card.title}
//                   href={card.href}
//                   className={`${card.bg} group flex h-48 flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
//                 >
//                   <div>
//                     <h3 className="mb-3 text-2xl font-black tracking-tight text-neutral-900">{card.title}</h3>
//                     <p className="text-sm font-medium leading-relaxed text-neutral-600">{card.desc}</p>
//                   </div>
//                   <div className="flex justify-end">
//                     <div className="rounded-full bg-white p-2 shadow-sm transition-transform duration-300 group-hover:translate-x-2">
//                       <IoIosArrowRoundForward className="h-6 w-6 text-black" />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;


// "use client";

// import Link from "next/link";
// import { ChevronDown, Download, Bot, Cpu, Zap, Globe, Layout, ShieldCheck } from "lucide-react";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// // --- UPDATED DATA DEFINITIONS FOR UPTIMISE IT ---
// const solutionsItems = [
//   { title: "AI Software Factory", desc: "Our core AI-native delivery engine.", href: "/solutions/ai-factory", icon: <Bot size={18} className="text-blue-600" /> },
//   { title: "AI Product Development", desc: "Generative AI and agentic systems.", href: "/solutions/ai-products", icon: <Zap size={18} className="text-purple-600" /> },
//   { title: "Software Engineering", desc: "Elite full-stack scalable web apps.", href: "/solutions/engineering", icon: <Layout size={18} className="text-emerald-600" /> },
//   { title: "Blockchain Engineering", desc: "Smart contracts & Web3 infrastructure.", href: "/solutions/blockchain", icon: <ShieldCheck size={18} className="text-orange-600" /> },
// ];

// const howWeBuildItems = [
//   { title: "Architecture", desc: "The AI Software Factory blueprint.", href: "/how-we-build/architecture", icon: <Cpu size={18} className="text-blue-600" /> },
//   { title: "100x Philosophy", desc: "The future of augmented engineering.", href: "/how-we-build/100x-engineer", icon: <Zap size={18} className="text-blue-600" /> },
//   { title: "The Process", desc: "Our 6-stage rapid delivery protocol.", href: "/how-we-build/process", icon: <Globe size={18} className="text-blue-600" /> },
// ];

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => { setMounted(true); }, []);

//   const currentItems = activeDropdown === "Solutions" ? solutionsItems : activeDropdown === "How We Build" ? howWeBuildItems : [];

//   if (!mounted) return null;

//   return (
//     <>
//       <div className="h-[70px] w-full" /> 
//       <header className="fixed top-0 left-0 z-50 w-full bg-white transition-all duration-300 border-b border-gray-100 shadow-sm" onMouseLeave={() => setActiveDropdown(null)}>
//         <div className="container mx-auto flex h-[70px] items-center justify-between px-6 lg:px-12">
          
//           <Link href="/" className="shrink-0">
//             <Image src="/logo.png" alt="Uptimise IT" height={40} width={140} className="object-contain" priority />
//           </Link>

//           <nav className="hidden h-full items-center gap-8 font-bold text-[13px] uppercase tracking-widest text-slate-600 md:flex">
//             {["Work", "Solutions", "How We Build", "Knowledge", "Company"].map((item) => {
//               const hasDropdown = item === "Solutions" || item === "How We Build";
//               const isActive = activeDropdown === item;

//               return (
//                 <div key={item} className="relative flex h-full items-center cursor-pointer" onMouseEnter={() => hasDropdown && setActiveDropdown(item)}>
//                   <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className={`flex items-center gap-1.5 transition-colors ${isActive ? "text-blue-600" : "hover:text-blue-600"}`}>
//                     {item}
//                     {hasDropdown && <ChevronDown size={12} className={`transition-transform ${isActive ? "rotate-180" : ""}`} />}
//                   </Link>
//                 </div>
//               );
//             })}
//           </nav>

//           <div className="flex items-center gap-4">
//             <button className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
//                Book Strategy Call
//             </button>
//           </div>
//         </div>

//         {/* --- MEGA DROPDOWN PANEL --- */}
//         <div className={`absolute left-0 top-full w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ${activeDropdown ? "max-h-[500px] opacity-100 py-12" : "max-h-0 opacity-0 pointer-events-none"}`}>
//           <div className="mx-auto max-w-7xl px-8">
//             <div className={`grid grid-cols-1 gap-6 md:grid-cols-3`}>
//               {currentItems.map((card) => (
//                 <Link key={card.title} href={card.href} className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-all">
//                   <div className="mt-1 p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
//                     {card.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-black text-slate-950 uppercase tracking-tight">{card.title}</h3>
//                     <p className="text-[11px] font-medium leading-relaxed text-slate-400 mt-1">{card.desc}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, Download, Bot, Zap, Layout, 
  ShieldCheck, Cpu, Globe, Rocket, Terminal,
  Lightbulb, HeartPulse, ShoppingBag, Landmark,
  Code2, Database, ShieldAlert, BarChart3,
  Users, Info, Mail, ChevronRight, TrendingUp,
  Server, MinusSquare, Cloud, GraduationCap,
  Hexagon, Building, Menu, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- MEGAMENU DATA ---
const menuData = {
  Solutions: [
    { title: "MVP Development", desc: "Rapid prototyping and market validation.", icon: <Rocket className="text-orange-500" />, href: "/solutions/mvp-development" },
    { title: "SaaS Platform Development", desc: "Secure, scalable multi-tenant architectures.", icon: <Cloud className="text-blue-500" />, href: "/solutions/saas-development" },
    { title: "AI Product Development", desc: "Generative AI and agentic systems.", icon: <Zap className="text-purple-600" />, href: "/solutions/ai-products" },
    { title: "Digital Platform Development", desc: "High-performance digital ecosystems.", icon: <Globe className="text-emerald-500" />, href: "/solutions/digital-platforms" },
    { title: "Enterprise Modernization", desc: "Upgrading legacy systems for scale.", icon: <Server className="text-slate-600" />, href: "/solutions/enterprise-modernization" },
    { title: "Workflow Automation", desc: "Streamlining complex business operations.", icon: <Terminal className="text-cyan-600" />, href: "/solutions/workflow-automation" },
    { title: "Cloud & Migration", desc: "Zero-trust automated cloud deployments.", icon: <Database className="text-indigo-500" />, href: "/solutions/cloud-infrastructure" },
    { title: "Product Scaling", desc: "Performance tuning for high-growth.", icon: <TrendingUp className="text-green-600" />, href: "/solutions/product-scaling" },
    { title: "AI Software Factory", desc: "Our core AI-native delivery engine.", icon: <Bot className="text-blue-600" />, href: "/solutions/ai-factory" },
    { title: "Design & UX", desc: "High-fidelity, user-centric interfaces.", icon: <Layout className="text-pink-500" />, href: "/solutions/product-design" },
    { title: "Digital Growth", desc: "Data-driven marketing and scaling.", icon: <BarChart3 className="text-orange-600" />, href: "/solutions/digital-growth" },
    { title: "AI Business Automation", desc: "Intelligent operations and task automation.", icon: <Cpu className="text-purple-500" />, href: "/solutions/ai-business-automation" },
  ],
  Industries: [
    { title: "FinTech Software Development", desc: "Secure digital finance ecosystems.", icon: <Landmark className="text-blue-600" />, href: "/industries/fintech" },
    { title: "Healthcare Software Development", desc: "Compliant health-tech & telemedicine.", icon: <HeartPulse className="text-red-600" />, href: "/industries/healthcare" },
    { title: "E-commerce Platform Development", desc: "High-conversion digital retail engines.", icon: <ShoppingBag className="text-emerald-600" />, href: "/industries/ecommerce" },
    { title: "SaaS Development", desc: "Scalable multi-tenant subscription platforms.", icon: <Cloud className="text-sky-500" />, href: "/industries/saas" },
    { title: "EdTech Platform Development", desc: "Interactive, high-load learning management systems.", icon: <GraduationCap className="text-indigo-500" />, href: "/industries/edtech" },
    { title: "AI Startup Development", desc: "Rapid MVPs and generative AI products.", icon: <Bot className="text-purple-600" />, href: "/industries/ai-startup" },
    { title: "Blockchain / Web3 Platforms", desc: "Smart contracts and decentralized apps.", icon: <Hexagon className="text-orange-500" />, href: "/industries/blockchain" },
    { title: "Enterprise Software Systems", desc: "Secure portals and legacy modernization.", icon: <Building className="text-slate-600" />, href: "/industries/enterprise" },
  ],
  Services: [
    { title: "Design", desc: "High-fidelity UX systems and scalable design languages.", icon: <Layout className="text-blue-600" />, href: "/services/design" },
    { title: "Technology", desc: "AI-native engineering and full-stack system orchestration.", icon: <Cpu className="text-purple-600" />, href: "/services/technology" },
    { title: "Marketing", desc: "Data-driven growth systems and automated digital reach.", icon: <BarChart3 className="text-emerald-600" />, href: "/services/marketing" },
    { title: "Server", desc: "Zero-trust infrastructure and automated cloud deployments.", icon: <Server className="text-orange-600" />, href: "/services/server" },
  ],
  Insights: [
    { title: "Engineering Blog", desc: "Deep dives into modern code.", icon: <Terminal className="text-slate-600" />, href: "/blog/engineeringBlogs" },
    { title: "Tech Trends", desc: "Analysis of the future of tech.", icon: <TrendingUp className="text-blue-600" />, href: "/insights/trends" },
    { title: "Guides", desc: "Strategic product building playbooks.", icon: <BarChart3 className="text-emerald-600" />, href: "/insights/guides" },
  ],
  Company: [
    { title: "About Us", desc: "Our mission and our history.", icon: <Info className="text-blue-600" />, href: "/about" },
    { title: "Our Vision", desc: "Where we are taking engineering.", icon: <MinusSquare className="text-yellow-600" />, href: "/vision" },
    { title: "Our Mission", desc: "Where we are taking engineering.", icon: <Globe className="text-emerald-600" />, href: "/mission" },
    { title: "Careers", desc: "Join our elite engineering squad.", icon: <Users className="text-orange-600" />, href: "/career" },
    { title: "Contact", desc: "Talk to our technical architects.", icon: <Mail className="text-purple-600" />, href: "/contact" },
  ],
};

const MegaNavbar = () => {
  // Desktop Hover State
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Mobile States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  if (!mounted) return null;

  const currentMenuItems = activeMenu && menuData[activeMenu as keyof typeof menuData] ? menuData[activeMenu as keyof typeof menuData] : [];
  const isLargeMenu = currentMenuItems.length > 6;

  // Toggle accordion for mobile
  const toggleMobileMenu = (menu: string) => {
    if (mobileExpandedMenu === menu) {
      setMobileExpandedMenu(null);
    } else {
      setMobileExpandedMenu(menu);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 transition-all duration-300"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1440px] mx-auto h-[80px] px-6 lg:px-8 flex items-center justify-between bg-white relative z-50">
        
        {/* --- Logo --- */}
        <Link href="/" className="shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/logo.png" alt="Uptimise IT" width={150} height={45} priority />
        </Link>

        {/* --- Desktop Navigation Links --- */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          {Object.keys(menuData).map((menu) => {
            const isClickableLink = menu === "Services" || menu === "Industries" || menu === "Solutions";
            
            return (
              <div 
                key={menu} 
                className="h-full flex items-center"
                onMouseEnter={() => setActiveMenu(menu)}
              >
                {isClickableLink ? (
                  <Link 
                    href={`/${menu.toLowerCase()}`} 
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                      activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {menu}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
                  </Link>
                ) : (
                  <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                    {menu}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
            );
          })}

          {/* Desktop "Why Uptimise" */}
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu(null)}>
            <Link 
              href="/why-uptimiseit" 
              className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all duration-200"
            >
              Why Uptimise
            </Link>
          </div>
        </div>

        {/* --- Desktop Action Buttons --- */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href={"/booking"}>
            <button className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
             Book Strategy Call
            </button>
          </Link>
           <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-200 group">
            <Download size={18} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* --- Mobile Hamburger Toggle --- */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- DESKTOP MEGA DROPDOWN PANEL --- */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {activeMenu && activeMenu !== "Why Uptimise" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] py-10 px-8 overflow-hidden z-40"
            >
              <div className="max-w-7xl mx-auto flex gap-12">
                
                {/* Portrait CTA Box */}
                <div className="w-[240px] shrink-0 bg-[#020617] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group/cta cursor-pointer border border-white/5">
                  <div className="absolute bottom-10 -right-10 opacity-5 group-hover/cta:opacity-10 transition-opacity">
                    <Zap size={240} strokeWidth={1} className="text-white" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-black font-header text-white leading-[1.1] tracking-tighter mb-4">
                      Ready to <br /> Engineer?
                    </h3>
                    <p className="text-[10px] font-mono font-black text-blue-500 uppercase tracking-[0.4em]">
                      Our AI Factory is Live.
                    </p>
                  </div>
                  <button className="relative z-10 flex items-center gap-3 text-sm font-bold text-white group-hover/cta:text-blue-400 transition-colors">
                    Start Here <ChevronRight size={18} className="group-hover/cta:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Dynamic Grid */}
                <div className={`flex-grow grid ${isLargeMenu ? "grid-cols-3 gap-x-4 gap-y-1" : "grid-cols-2 gap-x-8 gap-y-2"} py-4`}>
                  {currentMenuItems.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href}
                      className={`flex items-start ${isLargeMenu ? "gap-3 p-3 rounded-2xl" : "gap-5 p-5 rounded-3xl"} hover:bg-slate-50 transition-all group`}
                    >
                      <div className={`bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:border-blue-100 transition-all duration-300 ${isLargeMenu ? "p-3 rounded-xl" : "p-4 rounded-2xl"}`}>
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className={`font-black text-slate-950 uppercase tracking-tight group-hover:text-blue-600 transition-colors ${isLargeMenu ? "text-[12px]" : "text-[13px]"}`}>
                          {item.title}
                        </h4>
                        <p className={`text-slate-400 font-medium leading-relaxed max-w-[200px] ${isLargeMenu ? "text-[10px]" : "text-[11px]"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- MOBILE FULL-SCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-[80px] left-0 w-full bg-white z-40 overflow-y-auto border-t border-slate-100"
          >
            <div className="flex flex-col p-6 pb-24 gap-2">
              
              {/* Mobile Accordions */}
              {Object.keys(menuData).map((menu) => (
                <div key={menu} className="border-b border-slate-100 last:border-none">
                  <button 
                    onClick={() => toggleMobileMenu(menu)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className={`text-lg font-bold ${mobileExpandedMenu === menu ? 'text-blue-600' : 'text-slate-800'}`}>
                      {menu}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-slate-400 transition-transform duration-300 ${mobileExpandedMenu === menu ? 'rotate-180 text-blue-600' : ''}`} 
                    />
                  </button>
                  
                  {/* Mobile Submenu Items */}
                  <AnimatePresence>
                    {mobileExpandedMenu === menu && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pb-6 pt-2 pl-4 border-l-2 border-slate-100 ml-2">
                          {menuData[menu as keyof typeof menuData].map((item, idx) => (
                            <Link 
                              key={idx} 
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 shrink-0">
                                {React.cloneElement(item.icon as React.ReactElement, { className: "w-[18px] h-[18px]" } as any)}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                                <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Standalone Links */}
              <div className="py-4 border-b border-slate-100">
                <Link 
                  href="/why-uptimiseit" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-800"
                >
                  Why Uptimise
                </Link>
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                  <button className="w-full py-4 bg-slate-950 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-md">
                    Book Strategy Call
                  </button>
                </Link>
                <button className="w-full py-4 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold border border-slate-200 flex items-center justify-center gap-2">
                  <Download size={18} /> Download Profile
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MegaNavbar;