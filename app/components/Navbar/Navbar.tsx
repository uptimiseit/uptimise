// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// // Individual Lucide imports for cohesive and accessible UI orchestration
// import { 
//   ChevronDown, Download, Bot, Zap, Layout, 
//   Cpu, Globe, Rocket, Terminal, HeartPulse, ShoppingBag, Landmark,
//   Database, BarChart3, Users, Info, Mail, ChevronRight, TrendingUp,
//   Server, MinusSquare, Cloud, GraduationCap, Hexagon, Building, Menu, X 
// } from "lucide-react";
// import { title } from "process";

// // Pool 1: 7 raw component references with structural styling fields for Solutions
// const solutionIconsPool = [
//   { component: Rocket, color: "text-orange-500" },
//   { component: Cloud, color: "text-blue-500" },
//   { component: Zap, color: "text-purple-600" },
//   { component: Globe, color: "text-emerald-500" },
//   { component: Server, color: "text-slate-600" },
//   { component: Terminal, color: "text-cyan-600" },
//   { component: Database, color: "text-indigo-500" },
// ];

// const industriesIconsPool = [
//   { component: Rocket, color: "text-orange-500" },
//   { component: Cloud, color: "text-blue-500" },
//   { component: Zap, color: "text-purple-600" },
//   { component: Globe, color: "text-emerald-500" },
//   { component: Server, color: "text-slate-600" },
//   { component: Terminal, color: "text-cyan-600" },
//   { component: Database, color: "text-indigo-500" },
// ];

// // Pool 2: Curated editorial component configurations specialized for the Insights submenu
// const insightsIconsPool = [
//   { component: Terminal, color: "text-slate-700" },
//   { component: TrendingUp, color: "text-blue-600" },
//   { component: BarChart3, color: "text-emerald-600" },
//   { component: Zap, color: "text-purple-600" },
//   { component: Globe, color: "text-sky-500" },
// ];

// const initialMenuData = {
//   Solutions: [], // Dynamically populated via index rotation loop
//   // Industries: [
//   //   { title: "FinTech Software Development", desc: "Secure digital finance ecosystems.", icon: Landmark, iconColor: "text-blue-600", href: "/industries/fintech" },
//   //   { title: "Healthcare Software Development", desc: "Compliant health-tech & telemedicine.", icon: HeartPulse, iconColor: "text-red-600", href: "/industries/healthcare" },
//   //   { title: "E-commerce Platform Development", desc: "High-conversion digital retail engines.", icon: ShoppingBag, iconColor: "text-emerald-600", href: "/industries/ecommerce" },
//   //   { title: "SaaS Development", desc: "Scalable multi-tenant subscription platforms.", icon: Cloud, iconColor: "text-sky-500", href: "/industries/saas" },
//   //   { title: "EdTech Platform Development", desc: "Interactive, high-load learning systems.", icon: GraduationCap, iconColor: "text-indigo-500", href: "/industries/edtech" },
//   //   { title: "AI Startup Development", desc: "Rapid MVPs and generative AI products.", icon: Bot, iconColor: "text-purple-600", href: "/industries/ai-startup" },
//   //   { title: "Blockchain / Web3 Platforms", desc: "Smart contracts and decentralized apps.", icon: Hexagon, iconColor: "text-orange-500", href: "/industries/blockchain" }, //  Fixed missing href string element
//   //   { title: "Enterprise Software Systems", desc: "Secure portals and legacy modernization.", icon: Building, iconColor: "text-slate-600", href: "/industries/enterprise" },
//   // ],
//   Industries: [], // Dynamically populated via index rotation loop
//   Services: [],
//     // { title: "Design", desc: "High-fidelity UX systems.", icon: Layout, iconColor: "text-blue-600", href: "/services/design" },
//     // { title: "Technology", desc: "AI-native engineering.", icon: Cpu, iconColor: "text-purple-600", href: "/services/technology" },
//     // { title: "Marketing", desc: "Data-driven growth systems.", icon: BarChart3, iconColor: "text-emerald-600", href: "/services/marketing" },
//     // { title: "Server", desc: "Zero-trust cloud deployments.", icon: Server, iconColor: "text-orange-600", href: "/services/server" },
//     // {title: "Growth Engineering", desc: "Full-stack growth sprints.", icon: TrendingUp, iconColor: "text-sky-500", href: "/services/growth-engineering" }, //
//     // {title: "Cloud Infrastructure", desc: "Scalable, secure cloud architecture.", icon: Cloud, iconColor: "text-indigo-500", href: "/services/cloud-infrastructure" }, 

//     // cloud-infrastructure
  
//   Insights: [], // Dynamically populated via index rotation loop
//   Company: [
//     { title: "About Us", desc: "Our mission and our history.", icon: Info, iconColor: "text-blue-600", href: "/about" },
//     { title: "Our Vision", desc: "Where we are taking engineering.", icon: MinusSquare, iconColor: "text-yellow-600", href: "/vision" },
//     { title: "Our Mission", desc: "Where we are taking engineering.", icon: Globe, iconColor: "text-emerald-600", href: "/mission" },
//     { title: "Careers", desc: "Join our elite engineering squad.", icon: Users, iconColor: "text-orange-600", href: "/career" },
//     { title: "Contact", desc: "Talk to our technical architects.", icon: Mail, iconColor: "text-purple-600", href: "/contact" },
//   ],
// };

// const MegaNavbar = () => {
//   const [menuData, setMenuData] = useState(initialMenuData);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

//   // Helper utility to completely collapse any active menu overlays on route switch
//   const closeAllMenus = () => {
//     setActiveMenu(null);
//     setIsMobileMenuOpen(false);
//     setMobileExpandedMenu(null);
//   };

// useEffect(() => {
//   let isMounted = true;
//   const fetchNavigationData = async () => {
//     try {
//       const [solRes, indRes, serRes, catRes] = await Promise.all([
//         fetch("https://admin.uptimiseit.com/api/solutions/menu", { cache: 'no-store' }),
//         fetch("https://admin.uptimiseit.com/api/industries/menu", { cache: 'no-store' }),
//         fetch("https://admin.uptimiseit.com/api/services/menu", { cache: 'no-store' }),
//         fetch("https://uptimiseit-admin.vercel.app/api/categories", { cache: 'no-store' })
//       ]);

//       // 🟢 Safe Parsing Guard: Only parse if the server replies with a valid 200 OK JSON status
//       const solResult = solRes.ok ? await solRes.json() : { success: false, data: [] };
//       const indResult = indRes.ok ? await indRes.json() : { success: false, data: [] };

//       const serResult = serRes.ok ? await serRes.json() : { success: false, data: [] };
//       const catResult = catRes.ok ? await catRes.json() : { success: false, data: [] };

//       if (isMounted) {
//         // Dynamic Solutions Mapping
//         const dynamicSolutions = solResult.success ? solResult.data.map((sol: any, idx: number) => {
//           const config = solutionIconsPool[idx % solutionIconsPool.length];
//           return {
//             title: sol.title,
//             desc: sol.description,
//             icon: config.component,
//             iconColor: config.color,
//             href: `/solutions/${sol.slug}`,
//           };
//         }) : [];

//         // Dynamic Industries Mapping (Will safely fall back to an empty array if the URL throws a 404)
//         const dynamicIndustries = indResult.success ? indResult.data.map((ind: any, idx: number) => {
//           const config = industriesIconsPool[idx % industriesIconsPool.length];
//           return {
//             title: ind.title,
//             desc: ind.description,
//             icon: config.component,
//             iconColor: config.color,
//             href: `/industries/${ind.slug}`,
//           };
//         }) : [];


//         //  dynamic services mapping

//    const dynamicServices = serResult.success ? serResult.data.map((ser: any, idx: number) => {
//           const config = solutionIconsPool[idx % solutionIconsPool.length]; // Reusing the solution icons pool for services for simplicity
//           return {
//             title: ser.title,
//             desc: ser.description,
//             icon: config.component,
//             iconColor: config.color,
//             href: `/services/${ser.slug}`,
//           };
//         }) : [];



//         // Dynamic Insights Mapping
//         const dynamicInsights = catResult.success ? catResult.data.map((cat: any, idx: number) => {
//           const config = insightsIconsPool[idx % insightsIconsPool.length];
//           return {
//             title: cat.name,
//             desc: cat.description || `Explore our latest ${cat.name} articles.`,
//             icon: config.component,
//             iconColor: config.color,
//             href: `/blog/${cat.slug}`,
//           };
//         }) : [];

//         setMenuData(prev => ({ 
//           ...prev, 
//           Solutions: dynamicSolutions, 
//           Industries: dynamicIndustries,
//           Services: dynamicServices,
//           Insights: dynamicInsights 
//         }));
//       }
//     } catch (error) {
//       console.error("Navigation Sync Failed safely:", error);
//     }
//   };
//   fetchNavigationData();
//   return () => { isMounted = false; };
// }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
//   }, [isMobileMenuOpen]);

//   const currentMenuItems = activeMenu ? menuData[activeMenu as keyof typeof menuData] : [];
//   const isLargeMenu = currentMenuItems.length > 6;

//   return (
//     <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 selection:bg-blue-100" onMouseLeave={() => setActiveMenu(null)}>
//       <div className="max-w-[1440px] mx-auto h-[80px] px-6 lg:px-8 flex items-center justify-between bg-white relative z-50">
        
//         {/* Logo */}
//         <Link href="/" className="shrink-0" onClick={closeAllMenus}>
//           <Image src="/logo.png" alt="Uptimise IT" width={150} height={45} priority />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-2 h-full">
//           {Object.keys(menuData).map((menu) => (
//             <div key={menu} className="h-full flex items-center" onMouseEnter={() => setActiveMenu(menu)}>
//               <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>
//                 {menu}
//                 <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
//               </button>
//             </div>
//           ))}
//           <Link href="/why-uptimiseit" className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all" onClick={closeAllMenus} onMouseEnter={() => setActiveMenu(null)}>
//             Why Uptimise
//           </Link>
//         </div>

//         {/* Desktop Actions */}
//         <div className="hidden lg:flex items-center gap-3">
//           <Link href="/booking" onClick={closeAllMenus}>
//             <button className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
//               Book Strategy Call
//             </button>
//           </Link>
//           <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-200 group">
//             <Download size={18} className="group-hover:scale-110 transition-transform" />
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mega Dropdown */}
//       <AnimatePresence>
//         {activeMenu && (
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-100 shadow-2xl py-10 px-8 z-40 overflow-hidden"
//           >
//             <div className="max-w-7xl mx-auto flex gap-12">
//               <div className="w-[260px] shrink-0 bg-[#020617] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden">
//                 <div className="absolute bottom-10 -right-10 opacity-5"><Zap size={240} className="text-white" /></div>
//                 <h3 className="text-4xl font-black text-white leading-tight relative z-10 uppercase tracking-tighter italic">Ready_to<br /> Engineer?</h3>
//                 <Link href="/contact" onClick={closeAllMenus} className="relative z-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-blue-400">
//                   Initialize_Contact <ChevronRight size={18} />
//                 </Link>
//               </div>

//               <div className={`flex-grow grid ${isLargeMenu ? "grid-cols-3 gap-4" : "grid-cols-2 gap-8"} py-4`}>
//                 {currentMenuItems.map((item: any, idx: number) => {
//                   const IconComponent = item.icon;
//                   return (
//                     <Link 
//                       key={idx} 
//                       href={item.href || "#"} // Safely defaults to fallback hash if data format is incomplete
//                       onClick={closeAllMenus}
//                       className="flex items-start gap-4 p-5 rounded-3xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
//                     >
//                       {/* Standard structural icon design frame */}
//                       <div className="shrink-0 w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
//                         {IconComponent && <IconComponent className={item.iconColor || "text-blue-600"} size={24} />}
//                       </div>

//                       <div className="flex flex-col gap-1">
//                         <h4 className="font-black text-slate-900 uppercase text-[12px] tracking-tight group-hover:text-blue-600 transition-colors">
//                           {item.title}
//                         </h4>
//                         <p className="text-slate-400 text-[10px] line-clamp-2 leading-relaxed font-medium uppercase tracking-wide opacity-70">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Menu Overlay Layout */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden fixed top-[80px] left-0 w-full bg-white z-40 overflow-y-auto border-t border-slate-100"
//           >
//             <div className="flex flex-col p-6 pb-24 gap-2">
//               {Object.keys(menuData).map((menu) => (
//                 <div key={menu} className="border-b border-slate-100">
//                   <button onClick={() => setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu)} className="w-full flex items-center justify-between py-5">
//                     <span className={`text-lg font-black uppercase tracking-tight ${mobileExpandedMenu === menu ? 'text-blue-600' : 'text-slate-800'}`}>{menu}</span>
//                     <ChevronDown size={20} className={`transition-transform ${mobileExpandedMenu === menu ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpandedMenu === menu && (
//                       <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
//                         <div className="flex flex-col gap-3 pb-8 pl-4 border-l-2 border-slate-100 ml-2">
//                           {menuData[menu as keyof typeof menuData].map((item: any, idx: number) => {
//                             const MobileIconComponent = item.icon;
//                             return (
//                               <Link key={idx} href={item.href || "#"} onClick={closeAllMenus} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50">
//                                 <div className="shrink-0 flex items-center justify-center w-6 h-6">
//                                   {MobileIconComponent && <MobileIconComponent className={item.iconColor || "text-blue-600"} size={18} />}
//                                 </div>
//                                 <div>
//                                   <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">{item.title}</h4>
//                                   <p className="text-[10px] text-slate-500 line-clamp-1 uppercase tracking-wide">{item.desc}</p>
//                                 </div>
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//               <Link href="/why-uptimiseit" onClick={closeAllMenus} className="py-5 border-b border-slate-100 text-lg font-black uppercase tracking-tight text-slate-800">
//                 Why_Uptimise
//               </Link>
//               <div className="flex flex-col gap-4 mt-10">
//                 <Link href="/booking" onClick={closeAllMenus}>
//                   <button className="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">Book_Strategy_Call</button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default MegaNavbar;.

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 🟢 FIX: Exchanged 'Layout' for 'LayoutDashboard' to resolve the HMR Turbopack crash
import { 
  ChevronDown, Download, Bot, Zap, LayoutDashboard, 
  Cpu, Globe, Rocket, Terminal, HeartPulse, ShoppingBag, Landmark,
  Database, BarChart3, Users, Info, Mail, ChevronRight, TrendingUp,
  Server, MinusSquare, Cloud, GraduationCap, Hexagon, Building, Menu, X 
} from "lucide-react";

// Pool 1: 7 raw component references with structural styling fields for Solutions & Services
const solutionIconsPool = [
  { component: Rocket, color: "text-orange-500" },
  { component: Cloud, color: "text-blue-500" },
  { component: Zap, color: "text-purple-600" },
  { component: Globe, color: "text-emerald-500" },
  { component: Server, color: "text-slate-600" },
  { component: Terminal, color: "text-cyan-600" },
  { component: Database, color: "text-indigo-500" },
];

const industriesIconsPool = [
  { component: Landmark, color: "text-blue-600" },
  { component: HeartPulse, color: "text-red-600" },
  { component: ShoppingBag, color: "text-emerald-600" },
  { component: Cloud, color: "text-sky-500" },
  { component: GraduationCap, color: "text-indigo-500" },
  { component: Bot, color: "text-purple-600" },
  { component: Hexagon, color: "text-orange-500" },
  { component: Building, color: "text-slate-600" }
];

const insightsIconsPool = [
  { component: Terminal, color: "text-slate-700" },
  { component: TrendingUp, color: "text-blue-600" },
  { component: BarChart3, color: "text-emerald-600" },
  { component: Zap, color: "text-purple-600" },
  { component: Globe, color: "text-sky-500" },
];

// 🟢 FIX: Explicitly declared empty arrays for tracking nodes inside the static map iterator loop
const initialMenuData = {
  Solutions: [] as any[],
  Industries: [] as any[],
  Services: [] as any[],
  Insights: [] as any[],
  Company: [
    { title: "About Us", desc: "Our mission and our history.", icon: Info, iconColor: "text-blue-600", href: "/about" },
    { title: "Our Vision", desc: "Where we are taking engineering.", icon: MinusSquare, iconColor: "text-yellow-600", href: "/vision" },
    { title: "Our Mission", desc: "Where we are taking engineering.", icon: Globe, iconColor: "text-emerald-600", href: "/mission" },
    { title: "Careers", desc: "Join our elite engineering squad.", icon: Users, iconColor: "text-orange-600", href: "/career" },
    { title: "Contact", desc: "Talk to our technical architects.", icon: Mail, iconColor: "text-purple-600", href: "/contact" },
  ],
};

export default function MegaNavbar() {
  const [menuData, setMenuData] = useState(initialMenuData);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setMobileExpandedMenu(null);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchNavigationData = async () => {
      try {
        const [solRes, indRes, serRes, catRes] = await Promise.all([
          fetch("https://admin.uptimiseit.com/api/solutions/menu", { cache: 'no-store' }),
          fetch("https://admin.uptimiseit.com/api/industries/menu", { cache: 'no-store' }),
          fetch("https://admin.uptimiseit.com/api/services/menu", { cache: 'no-store' }),
          fetch("https://uptimiseit-admin.vercel.app/api/categories", { cache: 'no-store' })
        ]);

        const solResult = solRes.ok ? await solRes.json() : { success: false, data: [] };
        const indResult = indRes.ok ? await indRes.json() : { success: false, data: [] };
        const serResult = serRes.ok ? await serRes.json() : { success: false, data: [] };
        const catResult = catRes.ok ? await catRes.json() : { success: false, data: [] };

        if (isMounted) {
          const dynamicSolutions = solResult.success ? solResult.data.map((sol: any, idx: number) => {
            const config = solutionIconsPool[idx % solutionIconsPool.length];
            return {
              title: sol.title,
              desc: sol.description,
              icon: config.component,
              iconColor: config.color,
              href: `/solutions/${sol.slug}`,
            };
          }) : [];

          const dynamicIndustries = indResult.success ? indResult.data.map((ind: any, idx: number) => {
            const config = industriesIconsPool[idx % industriesIconsPool.length];
            return {
              title: ind.title,
              desc: ind.description,
              icon: config.component,
              iconColor: config.color,
              href: `/industries/${ind.slug}`,
            };
          }) : [];

          const dynamicServices = serResult.success ? serResult.data.map((ser: any, idx: number) => {
            // Using LayoutDashboard fallback dynamically if backend match drops off config tracks
            let currentIcon = solutionIconsPool[idx % solutionIconsPool.length].component;
            if (ser.slug === "design") currentIcon = LayoutDashboard;
            if (ser.slug === "technology") currentIcon = Cpu;
            if (ser.slug === "marketing") currentIcon = BarChart3;

            return {
              title: ser.title,
              desc: ser.description,
              icon: currentIcon,
              iconColor: solutionIconsPool[idx % solutionIconsPool.length].color,
              href: `/services/${ser.slug}`,
            };
          }) : [];

          const dynamicInsights = catResult.success ? catResult.data.map((cat: any, idx: number) => {
            const config = insightsIconsPool[idx % insightsIconsPool.length];
            return {
              title: cat.name,
              desc: cat.description || `Explore our latest ${cat.name} articles.`,
              icon: config.component,
              iconColor: config.color,
              href: `/blog/${cat.slug}`,
            };
          }) : [];

          setMenuData({
            Solutions: dynamicSolutions,
            Industries: dynamicIndustries,
            Services: dynamicServices,
            Insights: dynamicInsights,
            Company: initialMenuData.Company
          });
        }
      } catch (error) {
        console.error("Navigation Sync Failed safely:", error);
      }
    };
    
    fetchNavigationData();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const currentMenuItems = activeMenu ? menuData[activeMenu as keyof typeof menuData] : [];
  const isLargeMenu = currentMenuItems.length > 6;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 selection:bg-blue-100" onMouseLeave={() => setActiveMenu(null)}>
      <div className="max-w-[1440px] mx-auto h-[80px] px-6 lg:px-8 flex items-center justify-between bg-white relative z-50">
        
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={closeAllMenus}>
          <Image src="/logo.png" alt="Uptimise IT" width={150} height={45} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          {Object.keys(menuData).map((menu) => (
            <div key={menu} className="h-full flex items-center" onMouseEnter={() => setActiveMenu(menu)}>
              <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeMenu === menu ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>
                {menu}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ))}
          <Link href="/why-uptimiseit" className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all" onClick={closeAllMenus} onMouseEnter={() => setActiveMenu(null)}>
            Why Uptimise
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/booking" onClick={closeAllMenus}>
            <button className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
              Book Strategy Call
            </button>
          </Link>
          <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-200 group">
            <Download size={18} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mega Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-100 shadow-2xl py-10 px-8 z-40 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex gap-12">
              <div className="w-[260px] shrink-0 bg-[#020617] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute bottom-10 -right-10 opacity-5"><Zap size={240} className="text-white" /></div>
                <h3 className="text-4xl font-black text-white leading-tight relative z-10 uppercase tracking-tighter italic">Ready_to<br /> Engineer?</h3>
                <Link href="/contact" onClick={closeAllMenus} className="relative z-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-blue-400">
                  Initialize_Contact <ChevronRight size={18} />
                </Link>
              </div>

              <div className={`flex-grow grid ${isLargeMenu ? "grid-cols-3 gap-4" : "grid-cols-2 gap-8"} py-4`}>
                {currentMenuItems.map((item: any, idx: number) => {
                  const IconComponent = item.icon;
                  return (
                    <Link 
                      key={idx} 
                      href={item.href || "#"} 
                      onClick={closeAllMenus}
                      className="flex items-start gap-4 p-5 rounded-3xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
                    >
                      <div className="shrink-0 w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                        {IconComponent && <IconComponent className={item.iconColor || "text-blue-600"} size={24} />}
                      </div>

                      <div className="flex flex-col gap-1">
                        <h4 className="font-black text-slate-900 uppercase text-[12px] tracking-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-[10px] line-clamp-2 leading-relaxed font-medium uppercase tracking-wide opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay Layout */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[80px] left-0 w-full bg-white z-40 overflow-y-auto border-t border-slate-100"
          >
            <div className="flex flex-col p-6 pb-24 gap-2">
              {Object.keys(menuData).map((menu) => (
                <div key={menu} className="border-b border-slate-100">
                  <button onClick={() => setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu)} className="w-full flex items-center justify-between py-5">
                    <span className={`text-lg font-black uppercase tracking-tight ${mobileExpandedMenu === menu ? 'text-blue-600' : 'text-slate-800'}`}>{menu}</span>
                    <ChevronDown size={20} className={`transition-transform ${mobileExpandedMenu === menu ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpandedMenu === menu && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="flex flex-col gap-3 pb-8 pl-4 border-l-2 border-slate-100 ml-2">
                          {menuData[menu as keyof typeof menuData].map((item: any, idx: number) => {
                            const MobileIconComponent = item.icon;
                            return (
                              <Link key={idx} href={item.href || "#"} onClick={closeAllMenus} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50">
                                <div className="shrink-0 flex items-center justify-center w-6 h-6">
                                  {MobileIconComponent && <MobileIconComponent className={item.iconColor || "text-blue-600"} size={18} />}
                                </div>
                                <div>
                                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">{item.title}</h4>
                                  <p className="text-[10px] text-slate-500 line-clamp-1 uppercase tracking-wide">{item.desc}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link href="/why-uptimiseit" onClick={closeAllMenus} className="py-5 border-b border-slate-100 text-lg font-black uppercase tracking-tight text-slate-800">
                Why_Uptimise
              </Link>
              <div className="flex flex-col gap-4 mt-10">
                <Link href="/booking" onClick={closeAllMenus}>
                  <button className="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">Book_Strategy_Call</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}