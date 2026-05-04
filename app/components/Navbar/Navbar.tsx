// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { 
//   ChevronDown, Download, Bot, Zap, Layout, 
//   Cpu, Globe, Rocket, Terminal, HeartPulse, ShoppingBag, Landmark,
//   Database, BarChart3,
//   Users, Info, Mail, ChevronRight, TrendingUp,
//   Server, MinusSquare, Cloud, GraduationCap,
//   Hexagon, Building, Menu, X
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";



// const menuData = {
//   Solutions: [
//     { title: "MVP Development", desc: "Rapid prototyping and market validation.", icon: <Rocket className="text-orange-500" />, href: "/solutions/mvp-development" },
//     { title: "SaaS Platform Development", desc: "Secure, scalable multi-tenant architectures.", icon: <Cloud className="text-blue-500" />, href: "/solutions/saas-development" },
//     { title: "AI Product Development", desc: "Generative AI and agentic systems.", icon: <Zap className="text-purple-600" />, href: "/solutions/ai-products" },
//     { title: "Digital Platform Development", desc: "High-performance digital ecosystems.", icon: <Globe className="text-emerald-500" />, href: "/solutions/digital-platforms" },
//     { title: "Enterprise Modernization", desc: "Upgrading legacy systems for scale.", icon: <Server className="text-slate-600" />, href: "/solutions/enterprise-modernization" },
//     { title: "Workflow Automation", desc: "Streamlining complex business operations.", icon: <Terminal className="text-cyan-600" />, href: "/solutions/workflow-automation" },
//     { title: "Cloud & Migration", desc: "Zero-trust automated cloud deployments.", icon: <Database className="text-indigo-500" />, href: "/solutions/cloud-infrastructure" },
//     { title: "Product Scaling", desc: "Performance tuning for high-growth.", icon: <TrendingUp className="text-green-600" />, href: "/solutions/product-scaling" },
//     { title: "AI Software Factory", desc: "Our core AI-native delivery engine.", icon: <Bot className="text-blue-600" />, href: "/solutions/ai-factory" },
//     { title: "Design & UX", desc: "High-fidelity, user-centric interfaces.", icon: <Layout className="text-pink-500" />, href: "/solutions/product-design" },
//     { title: "Digital Growth", desc: "Data-driven marketing and scaling.", icon: <BarChart3 className="text-orange-600" />, href: "/solutions/digital-growth" },
//     { title: "AI Business Automation", desc: "Intelligent operations and task automation.", icon: <Cpu className="text-purple-500" />, href: "/solutions/ai-business-automation" },
//   ],
//   Industries: [
//     { title: "FinTech Software Development", desc: "Secure digital finance ecosystems.", icon: <Landmark className="text-blue-600" />, href: "/industries/fintech" },
//     { title: "Healthcare Software Development", desc: "Compliant health-tech & telemedicine.", icon: <HeartPulse className="text-red-600" />, href: "/industries/healthcare" },
//     { title: "E-commerce Platform Development", desc: "High-conversion digital retail engines.", icon: <ShoppingBag className="text-emerald-600" />, href: "/industries/ecommerce" },
//     { title: "SaaS Development", desc: "Scalable multi-tenant subscription platforms.", icon: <Cloud className="text-sky-500" />, href: "/industries/saas" },
//     { title: "EdTech Platform Development", desc: "Interactive, high-load learning management systems.", icon: <GraduationCap className="text-indigo-500" />, href: "/industries/edtech" },
//     { title: "AI Startup Development", desc: "Rapid MVPs and generative AI products.", icon: <Bot className="text-purple-600" />, href: "/industries/ai-startup" },
//     { title: "Blockchain / Web3 Platforms", desc: "Smart contracts and decentralized apps.", icon: <Hexagon className="text-orange-500" />, href: "/industries/blockchain" },
//     { title: "Enterprise Software Systems", desc: "Secure portals and legacy modernization.", icon: <Building className="text-slate-600" />, href: "/industries/enterprise" },
//   ],
//   Services: [
//     { title: "Design", desc: "High-fidelity UX systems and scalable design languages.", icon: <Layout className="text-blue-600" />, href: "/services/design" },
//     { title: "Technology", desc: "AI-native engineering and full-stack system orchestration.", icon: <Cpu className="text-purple-600" />, href: "/services/technology" },
//     { title: "Marketing", desc: "Data-driven growth systems and automated digital reach.", icon: <BarChart3 className="text-emerald-600" />, href: "/services/marketing" },
//     { title: "Server", desc: "Zero-trust infrastructure and automated cloud deployments.", icon: <Server className="text-orange-600" />, href: "/services/server" },
//   ],
//   Insights: [
//     { title: "Engineering Blog", desc: "Deep dives into modern code.", icon: <Terminal className="text-slate-600" />, href: "/blog/engineeringBlogs" },
//     { title: "Tech Trends", desc: "Analysis of the future of tech.", icon: <TrendingUp className="text-blue-600" />, href: "/insights/trends" },
//     { title: "Guides", desc: "Strategic product building playbooks.", icon: <BarChart3 className="text-emerald-600" />, href: "/insights/guides" },
//   ],
//   Company: [
//     { title: "About Us", desc: "Our mission and our history.", icon: <Info className="text-blue-600" />, href: "/about" },
//     { title: "Our Vision", desc: "Where we are taking engineering.", icon: <MinusSquare className="text-yellow-600" />, href: "/vision" },
//     { title: "Our Mission", desc: "Where we are taking engineering.", icon: <Globe className="text-emerald-600" />, href: "/mission" },
//     { title: "Careers", desc: "Join our elite engineering squad.", icon: <Users className="text-orange-600" />, href: "/career" },
//     { title: "Contact", desc: "Talk to our technical architects.", icon: <Mail className="text-purple-600" />, href: "/contact" },
//   ],
// };

// const MegaNavbar = () => {
//   // Desktop Hover State
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
//   // Mobile States
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

//   useEffect(() => {
//     // Prevent scrolling when mobile menu is open
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isMobileMenuOpen]);

//   const currentMenuItems = activeMenu && menuData[activeMenu as keyof typeof menuData] ? menuData[activeMenu as keyof typeof menuData] : [];
//   const isLargeMenu = currentMenuItems.length > 6;

//   // Toggle accordion for mobile
//   const toggleMobileMenu = (menu: string) => {
//     if (mobileExpandedMenu === menu) {
//       setMobileExpandedMenu(null);
//     } else {
//       setMobileExpandedMenu(menu);
//     }
//   };

//   return (
//     <nav 
//       className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 transition-all duration-300"
//       onMouseLeave={() => setActiveMenu(null)}
//     >
//       <div className="max-w-[1440px] mx-auto h-[80px] px-6 lg:px-8 flex items-center justify-between bg-white relative z-50">
        
//         {/* --- Logo (FIXED FOR LCP) --- */}
//         <Link href="/" className="shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
//           <Image 
//             src="/logo.png" 
//             alt="Uptimise IT" 
//             width={150} 
//             height={45} 
//             priority 
//             fetchPriority="high" /* 🔥 Forces browser to download this instantly */
//           />
//         </Link>

//         {/* --- Desktop Navigation Links --- */}
//         <div className="hidden lg:flex items-center gap-2 h-full">
//           {Object.keys(menuData).map((menu) => {
//             const isClickableLink = menu === "Services" || menu === "Industries" || menu === "Solutions";
            
//             return (
//               <div 
//                 key={menu} 
//                 className="h-full flex items-center"
//                 onMouseEnter={() => setActiveMenu(menu)}
//               >
//                 {isClickableLink ? (
//                   <Link 
//                     href={`/${menu.toLowerCase()}`} 
//                     className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
//                       activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'
//                     }`}
//                   >
//                     {menu}
//                     <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
//                   </Link>
//                 ) : (
//                   <button      aria-label="Uptimiseit" className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
//                     activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'
//                   }`}>
//                     {menu}
//                     <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
//                   </button>
//                 )}
//               </div>
//             );
//           })}

//           {/* Desktop "Why Uptimise" */}
//           <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu(null)}>
//             <Link 
//               href="/why-uptimiseit" 
//               className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all duration-200"
//             >
//               Why Uptimise
//             </Link>
//           </div>
//         </div>

//         {/* --- Desktop Action Buttons --- */}
//         <div className="hidden lg:flex items-center gap-3">
//           <Link href={"/booking"}>
//             <button      aria-label="Uptimiseit" className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
//              Book Strategy Call
//             </button>
//           </Link>
//            <button     aria-label="Uptimiseit" className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-200 group">
//             <Download size={18} className="group-hover:scale-110 transition-transform" />
//           </button>
//         </div>

//         {/* --- Mobile Hamburger Toggle --- */}
//         <div className="lg:hidden flex items-center gap-4">
//           <button 
//               aria-label="Uptimiseit"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* --- DESKTOP MEGA DROPDOWN PANEL --- */}
//       <div className="hidden lg:block">
//         <AnimatePresence>
//           {activeMenu && activeMenu !== "Why Uptimise" && (
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 15 }}
//               transition={{ duration: 0.2, ease: "easeOut" }}
//               className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] py-10 px-8 overflow-hidden z-40"
//             >
//               <div className="max-w-7xl mx-auto flex gap-12">
                
//                 {/* Portrait CTA Box */}
//                 <div className="w-[240px] shrink-0 bg-[#020617] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group/cta cursor-pointer border border-white/5">
//                   <div className="absolute bottom-10 -right-10 opacity-5 group-hover/cta:opacity-10 transition-opacity">
//                     <Zap size={240} strokeWidth={1} className="text-white" />
//                   </div>
//                   <div className="relative z-10">
//                     <h3 className="text-4xl font-black font-header text-white leading-[1.1] tracking-tighter mb-4">
//                       Ready to <br /> Engineer?
//                     </h3>
//                     <p className="text-[10px] font-mono font-black text-blue-500 uppercase tracking-[0.4em]">
//                       Our AI Factory is Live.
//                     </p>
//                   </div>
//                   <button     aria-label="Uptimiseit" className="relative z-10 flex items-center gap-3 text-sm font-bold text-white group-hover/cta:text-blue-400 transition-colors">
//                     Start Here <ChevronRight size={18} className="group-hover/cta:translate-x-1 transition-transform" />
//                   </button>
//                 </div>

//                 {/* Dynamic Grid */}
//                 <div className={`flex-grow grid ${isLargeMenu ? "grid-cols-3 gap-x-4 gap-y-1" : "grid-cols-2 gap-x-8 gap-y-2"} py-4`}>
//                   {currentMenuItems.map((item, idx) => (
//                     <Link 
//                       key={idx} 
//                       href={item.href}
//                       className={`flex items-start ${isLargeMenu ? "gap-3 p-3 rounded-2xl" : "gap-5 p-5 rounded-3xl"} hover:bg-slate-50 transition-all group`}
//                     >
//                       <div className={`bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:border-blue-100 transition-all duration-300 ${isLargeMenu ? "p-3 rounded-xl" : "p-4 rounded-2xl"}`}>
//                         {item.icon}
//                       </div>
//                       <div className="space-y-1">
//                         <h4 className={`font-black text-slate-950 uppercase tracking-tight group-hover:text-blue-600 transition-colors ${isLargeMenu ? "text-[12px]" : "text-[13px]"}`}>
//                           {item.title}
//                         </h4>
//                         <p className={`text-slate-400 font-medium leading-relaxed max-w-[200px] ${isLargeMenu ? "text-[10px]" : "text-[11px]"}`}>
//                           {item.desc}
//                         </p>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>

//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* --- MOBILE FULL-SCREEN MENU OVERLAY --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="lg:hidden fixed top-[80px] left-0 w-full bg-white z-40 overflow-y-auto border-t border-slate-100"
//           >
//             <div className="flex flex-col p-6 pb-24 gap-2">
              
//               {/* Mobile Accordions */}
//               {Object.keys(menuData).map((menu) => (
//                 <div key={menu} className="border-b border-slate-100 last:border-none">
//                   <button 
//                       aria-label="Uptimiseit"
//                     onClick={() => toggleMobileMenu(menu)}
//                     className="w-full flex items-center justify-between py-4 text-left"
//                   >
//                     <span className={`text-lg font-bold ${mobileExpandedMenu === menu ? 'text-blue-600' : 'text-slate-800'}`}>
//                       {menu}
//                     </span>
//                     <ChevronDown 
//                       size={20} 
//                       className={`text-slate-400 transition-transform duration-300 ${mobileExpandedMenu === menu ? 'rotate-180 text-blue-600' : ''}`} 
//                     />
//                   </button>
                  
//                   {/* Mobile Submenu Items */}
//                   <AnimatePresence>
//                     {mobileExpandedMenu === menu && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="flex flex-col gap-3 pb-6 pt-2 pl-4 border-l-2 border-slate-100 ml-2">
//                           {menuData[menu as keyof typeof menuData].map((item, idx) => (
//                             <Link 
//                               key={idx} 
//                               href={item.href}
//                               onClick={() => setIsMobileMenuOpen(false)}
//                               className="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors"
//                             >
//                               <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 shrink-0">
//                                 {React.cloneElement(item.icon as React.ReactElement, { className: "w-[18px] h-[18px]" } as any)}
//                               </div>
//                               <div>
//                                 <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
//                                 <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
//                               </div>
//                             </Link>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}

//               {/* Mobile Standalone Links */}
//               <div className="py-4 border-b border-slate-100">
//                 <Link 
//                   href="/why-uptimiseit" 
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-lg font-bold text-slate-800"
//                 >
//                   Why Uptimise
//                 </Link>
//               </div>

//               {/* Mobile CTAs */}
//               <div className="flex flex-col gap-4 mt-8">
//                 <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
//                   <button     aria-label="Uptimiseit"  className="w-full py-4 bg-slate-950 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-md">
//                     Book Strategy Call
//                   </button>
//                 </Link>
//                 <button     aria-label="Uptimiseit" className="w-full py-4 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold border border-slate-200 flex items-center justify-center gap-2">
//                   <Download size={18} /> Download Profile
//                 </button>
//               </div>

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default MegaNavbar;


"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as FaIcons from "react-icons/fa"; // 🔥 Import all FontAwesome icons
import { 
  ChevronDown, Download, Bot, Zap, Layout, 
  Cpu, Globe, Rocket, Terminal, HeartPulse, ShoppingBag, Landmark,
  Database, BarChart3,
  Users, Info, Mail, ChevronRight, TrendingUp,
  Server, MinusSquare, Cloud, GraduationCap,
  Hexagon, Building, Menu, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Static Menu Data ---
const initialMenuData = {
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
  Insights: [], // 🔥 Will be populated dynamically
  Company: [
    { title: "About Us", desc: "Our mission and our history.", icon: <Info className="text-blue-600" />, href: "/about" },
    { title: "Our Vision", desc: "Where we are taking engineering.", icon: <MinusSquare className="text-yellow-600" />, href: "/vision" },
    { title: "Our Mission", desc: "Where we are taking engineering.", icon: <Globe className="text-emerald-600" />, href: "/mission" },
    { title: "Careers", desc: "Join our elite engineering squad.", icon: <Users className="text-orange-600" />, href: "/career" },
    { title: "Contact", desc: "Talk to our technical architects.", icon: <Mail className="text-purple-600" />, href: "/contact" },
  ],
};

const MegaNavbar = () => {
  const [menuData, setMenuData] = useState(initialMenuData);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  // 🔥 Helper to render the string icon name from your API
  const renderDynamicIcon = (iconName: string) => {
    const IconComponent = (FaIcons as any)[iconName];
    return IconComponent ? <IconComponent className="text-blue-600" /> : <Terminal className="text-slate-600" />;
  };

  useEffect(() => {
    // 🔥 Fetch dynamic categories for Insights
    const fetchInsights = async () => {
      try {
        const response = await fetch("https://uptimiseit-admin.vercel.app/api/categories");
        const result = await response.json();

        if (result.success) {
          const dynamicInsights = result.data.map((cat: any) => ({
            title: cat.name,
            desc: cat.description || `Explore our latest ${cat.name} articles.`,
            icon: renderDynamicIcon(cat.icon),
            href: `/blog/${cat.slug}`,
          }));

          setMenuData((prev) => ({
            ...prev,
            Insights: dynamicInsights,
          }));
        }
      } catch (error) {
        console.error("Error fetching navigation categories:", error);
      }
    };

    fetchInsights();
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const currentMenuItems = activeMenu && menuData[activeMenu as keyof typeof menuData] ? menuData[activeMenu as keyof typeof menuData] : [];
  const isLargeMenu = currentMenuItems.length > 6;

  const toggleMobileMenu = (menu: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu);
  };

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 transition-all duration-300"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1440px] mx-auto h-[80px] px-6 lg:px-8 flex items-center justify-between bg-white relative z-50">
        
        <Link href="/" className="shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <Image 
            src="/logo.png" 
            alt="Uptimise IT" 
            width={150} 
            height={45} 
            priority 
          />
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          {Object.keys(menuData).map((menu) => (
            <div 
              key={menu} 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMenu(menu)}
            >
              <button aria-label="Uptimiseit" className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'
              }`}>
                {menu}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ))}

          <Link href="/why-uptimiseit" className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            Why Uptimise
          </Link>
        </div>

        {/* --- Action Buttons --- */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/booking">
            <button aria-label="Uptimiseit" className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
               Book Strategy Call
            </button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button aria-label="Uptimiseit" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Desktop Mega Dropdown --- */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-100 shadow-xl py-10 px-8 z-40"
          >
            <div className="max-w-7xl mx-auto flex gap-12">
              <div className="w-[240px] shrink-0 bg-[#020617] rounded-[2.5rem] p-10 flex flex-col justify-between border border-white/5">
                 <h3 className="text-4xl font-black text-white leading-[1.1] tracking-tighter">Ready to <br /> Engineer?</h3>
                 <Link href="/contact" className="text-white text-sm font-bold flex items-center gap-2 hover:text-blue-400">
                    Start Here <ChevronRight size={18} />
                 </Link>
              </div>

              <div className={`flex-grow grid ${isLargeMenu ? "grid-cols-3 gap-4" : "grid-cols-2 gap-8"} py-4`}>
                {currentMenuItems.map((item, idx) => (
                  <Link key={idx} href={item.href} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 group">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl group-hover:scale-105 transition-transform shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-950 uppercase tracking-tight text-[12px] group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 font-medium leading-relaxed text-[10px] max-w-[200px]">
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
    </nav>
  );
};

export default MegaNavbar;