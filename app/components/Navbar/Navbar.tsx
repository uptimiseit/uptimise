// "use client";

// import Link from "next/link";
// import { Sun, Moon, ChevronDown, Phone } from "lucide-react";
// import { useTheme } from "next-themes";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { RainbowButton } from "@/components/ui/rainbow-button";

// // --- 1. DATA DEFINITIONS ---

// const serviceCards = [
//   {
//     title: "Design.",
//     desc: "Handcraft the user experience.",
//     bg: "bg-pink-100",
//     href: "/services/design",
//   },
//   {
//     title: "Technology.",
//     desc: "Modern frameworks for scalable web solutions.",
//     bg: "bg-blue-100",
//     href: "/services/technology",
//   },
//   {
//     title: "Marketing.",
//     desc: "Creative strategies for brands.",
//     bg: "bg-purple-100",
//     href: "/services/marketing",
//   },
//   {
//     title: "Server.",
//     desc: "High-performance backend and cloud architecture.",
//     bg: "bg-green-100",
//     href: "/services/server",
//   },
// ];

// const aboutCards = [
//   {
//     title: "About Us.",
//     desc: "We are super-efficient yet humble to serve you!",
//     bg: "bg-pink-100", // Light Pink
//     href: "/about",
//   },
//   {
//     title: "Team.",
//     desc: "We are proud of our experienced and accomplished team!",
//     bg: "bg-indigo-100", // Light Purple/Indigo
//     href: "/about/team",
//   },
//   {
//     title: "Career.",
//     desc: "Can you offer such experience?",
//     bg: "bg-purple-100", // Light Purple
//     href: "/about/career",
//   },
// ];

// const Navbar = () => {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // --- 2. STATE CHANGE ---
//   // Instead of boolean, we track WHICH dropdown is active ('Services' | 'About' | null)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Helper to determine which cards to show based on state
//   const currentCards =
//     activeDropdown === "Services"
//       ? serviceCards
//       : activeDropdown === "About"
//         ? aboutCards
//         : [];

//   // Helper to determine grid columns (Services = 4 cols, About = 3 cols)
//   const gridCols =
//     activeDropdown === "Services" ? "md:grid-cols-4" : "md:grid-cols-3";

//   return (
//     <header
//       className="w-full bg-white font-sans relative z-50"
//       onMouseLeave={() => setActiveDropdown(null)}
//     >
//       <div
//         className={`w-full transition-colors duration-200 ${
//           activeDropdown
//             ? "border-b border-transparent"
//             : "shadow shadow-neutral-300"
//         }`}
//       >
//         <div className="mx-auto  h-16 container flex items-center justify-between px-20">
//           {/* --- Logo --- */}
//           <Link href={"/"}>
//             <div className="flex items-center gap-3 font-semibold text-xl">
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 height={40}
//                 width={150}
//                 className="object-contain"
//               />
//             </div>
//           </Link>

//           {/* --- Navigation --- */}

//           <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600 h-full">
//             {["Work", "Services", "Clients", "About", "Knowledge"].map(
//               (item) => {
//                 // Check if this item has a dropdown
//                 const hasDropdown = item === "Services" || item === "About";
//                 const isActive = activeDropdown === item;

//                 return (
//                   <div
//                     key={item}
//                     className="h-full flex items-center relative group"
//                     // Trigger dropdown only if it's one of the dropdown items
//                     onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
//                   >
//                     <Link
//                       href={`/${item.toLowerCase()}`}
//                       className={`flex items-center gap-1 transition-colors ${
//                         isActive ? "text-red-500" : "hover:text-red-500"
//                       }`}
//                     >
//                       {item}

//                       {/* --- 3. THE DOT TO CHEVRON ANIMATION --- */}
//                       {hasDropdown && (
//                         <div className="relative w-4 h-4 flex items-center justify-center ml-1">
//                           {/* The Dot (Visible when NOT active) */}
//                           <span
//                             className={`absolute transition-all duration-300 transform bg-black rounded-full w-1 h-1
//                               ${isActive ? "opacity-0 scale-0" : "opacity-100 scale-100"}
//                             `}
//                           />

//                           {/* The Chevron (Visible when ACTIVE) */}
//                           <ChevronDown
//                             size={16}
//                             className={`absolute transition-all duration-300 transform text-red-500
//                               ${isActive ? "opacity-100 rotate-180 scale-100" : "opacity-0 rotate-0 scale-50"}
//                             `}
//                           />
//                         </div>
//                       )}
//                     </Link>
//                   </div>
//                 );
//               },
//             )}
//           </nav>

//           {/* --- Right Side --- */}
//           <div className="flex items-center gap-6">
//             {/* {mounted && (
//               <button
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 {theme === "dark" ? (
//                   <Moon size={20} className="text-black" />
//                 ) : (
//                   <Sun size={20} className="text-black" />
//                 )}
//               </button>
//             )} */}
//             <Link href="/contact" className="">
//               {/* Contact */}
//               {/* <RainbowButton className="">Contact</RainbowButton> */}
//               {/* <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
//                 <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-800">
//                   Contact Us
//                 </button>
//               </div> */}

//               <button className="group relative h-10 overflow-hidden rounded-md bg-black px-6 text-neutral-50 transition hover:bg-blue-600"><span className="relative">Contact Us</span><div className="animate-shine-infinite absolute inset-0 -top-5 flex h-[calc(100%+40px)] w-full justify-center blur-md"><div className="relative h-full w-8 bg-white/30"></div></div></button>
//             </Link>

//    <button className="group relative inline-flex h-12 w-12 items-center justify-start overflow-hidden rounded-full bg-neutral-950 transition-all duration-500 ease-in-out hover:w-52">
//   <div className="flex w-full items-center">

//     {/* Icon Container - Forced to exactly h-12 w-12 to maintain the circle look */}
//     <div className="flex h-10 w-12 flex-none items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-200">
//         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
//         <polyline points="7 10 12 15 17 10" />
//         <line x1="12" y1="15" x2="12" y2="3" />
//       </svg>
//     </div>

//     {/* Text - Using opacity and negative margin for a smoother entrance */}
//     <span className="whitespace-nowrap pr-6 text-xs font-medium tracking-widest text-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//       Download Brochure
//     </span>

//   </div>
// </button>
//           </div>
//         </div>
//       </div>

//       {/* --- 4. DYNAMIC MEGA MENU --- */}
//       <div
//         className={`
//           absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-sm
//           overflow-hidden transition-all duration-300 ease-in-out
//           ${activeDropdown ? "max-h-[300px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}
//         `}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           {/* Dynamic Grid Column Class based on which menu is open */}
//           <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
//             {currentCards.map((card) => (
//               <Link
//                 key={card.title}
//                 href={card.href}
//                 className={`${card.bg} p-8 rounded-lg group hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-40`}
//               >
//                 <div>
//                   <h3 className="text-2xl font-extrabold text-black mb-2 tracking-tight">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-800 text-sm font-medium leading-relaxed max-w-[80%]">
//                     {card.desc}
//                   </p>
//                 </div>
//                 <div className="flex justify-end">
//                   <IoIosArrowRoundForward className="text-black w-10 h-8 group-hover:translate-x-3 transition-transform duration-300" />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";

// --- DATA DEFINITIONS ---
const serviceCards = [
  { title: "Design.", desc: "Handcraft the user experience.", bg: "bg-pink-50", href: "/services/design" },
  { title: "Technology.", desc: "Modern frameworks for scalable web solutions.", bg: "bg-blue-50", href: "/services/technology" },
  { title: "Marketing.", desc: "Creative strategies for brands.", bg: "bg-purple-50", href: "/services/marketing" },
  { title: "Server.", desc: "High-performance backend and cloud architecture.", bg: "bg-green-50", href: "/services/server" },
];

const aboutCards = [
  { title: "About Us.", desc: "We are super-efficient yet humble to serve you!", bg: "bg-pink-50", href: "/about" },
  { title: "Team.", desc: "We are proud of our experienced and accomplished team!", bg: "bg-indigo-50", href: "/about/team" },
  { title: "Career.", desc: "Can you offer such experience?", bg: "bg-purple-50", href: "/about/career" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentCards = activeDropdown === "Services" ? serviceCards : activeDropdown === "About" ? aboutCards : [];
  const gridCols = activeDropdown === "Services" ? "md:grid-cols-4" : "md:grid-cols-3";

  if (!mounted) return null;

  return (
    <>
      <div className="h-[70px] w-full" /> {/* Matching header height exactly */}

      <header
        className="fixed top-0 left-0 z-50 w-full bg-white font-sans transition-all duration-300"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className={`w-full transition-all duration-200 ${activeDropdown ? "border-b-transparent" : "shadow-sm border-b border-neutral-100"}`}>
          <div className="container mx-auto flex h-[70px] items-center justify-between px-6 lg:px-12">
            
            {/* --- Logo --- */}
            <Link href="/" className="shrink-0">
              <Image src="/logo.png" alt="Logo" height={40} width={140} className="object-contain" priority />
            </Link>

            {/* --- Navigation --- */}
            <nav className="hidden h-full items-center gap-10 font-medium text-gray-700 md:flex">
              {["Work", "Services", "Partners", "About", "Knowledge"].map((item) => {
                const hasDropdown = item === "Services" || item === "About";
                const isActive = activeDropdown === item;

                return (
                  <div
                    key={item}
                    className="relative flex h-full items-center cursor-pointer"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className={`flex items-center gap-1.5 transition-colors ${isActive ? "text-red-500" : "hover:text-red-500"}`}
                    >
                      {item}
                      {hasDropdown && (
                        <span className={`transition-transform duration-300 mt-1 ${isActive ? "  rotate-180 text-red-500" : "text-gray-400"}`}>
                          <ChevronDown size={14} strokeWidth={2.5} />
                        </span>
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* --- Action Buttons --- */}
            <div className="flex items-center gap-3">
              <RainbowButton variant="outline" className="flex items-center gap-2 px-4 py-2 text-sm">
                <MdLocalPhone size={18} /> Contact Us
              </RainbowButton>
              <RainbowButton variant="outline" className="flex items-center gap-2 px-4 py-2 text-sm">
                <MdOutlineFileDownload size={18} /> Brochure
              </RainbowButton>
            </div>
          </div>
        </div>

        {/* --- Dropdown Panel --- */}
        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-gray-100 bg-white shadow-2xl transition-all duration-500 ease-in-out ${
            activeDropdown ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-7xl px-8 py-12">
            <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
              {currentCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`${card.bg} group flex h-48 flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
                >
                  <div>
                    <h3 className="mb-3 text-2xl font-black tracking-tight text-neutral-900">{card.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">{card.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-full bg-white p-2 shadow-sm transition-transform duration-300 group-hover:translate-x-2">
                      <IoIosArrowRoundForward className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;