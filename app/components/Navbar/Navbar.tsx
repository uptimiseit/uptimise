"use client";

import Link from "next/link";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";

// --- 1. DATA DEFINITIONS ---

const serviceCards = [
  {
    title: "Design.",
    desc: "Handcraft the user experience.",
    bg: "bg-pink-100",
    href: "/services/design",
  },
  {
    title: "Technology.",
    desc: "Modern frameworks for scalable web solutions.",
    bg: "bg-blue-100",
    href: "/services/technology",
  },
  {
    title: "Marketing.",
    desc: "Creative strategies for brands.",
    bg: "bg-purple-100",
    href: "/services/marketing",
  },
  {
    title: "Server.",
    desc: "High-performance backend and cloud architecture.",
    bg: "bg-green-100",
    href: "/services/server",
  },
];

const aboutCards = [
  {
    title: "About Us.",
    desc: "We are super-efficient yet humble to serve you!",
    bg: "bg-pink-100", // Light Pink
    href: "/about",
  },
  {
    title: "Team.",
    desc: "We are proud of our experienced and accomplished team!",
    bg: "bg-indigo-100", // Light Purple/Indigo
    href: "/about/team",
  },
  {
    title: "Career.",
    desc: "Can you offer such experience?",
    bg: "bg-purple-100", // Light Purple
    href: "/about/career",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // --- 2. STATE CHANGE ---
  // Instead of boolean, we track WHICH dropdown is active ('Services' | 'About' | null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper to determine which cards to show based on state
  const currentCards = activeDropdown === "Services" ? serviceCards : activeDropdown === "About" ? aboutCards : [];
  
  // Helper to determine grid columns (Services = 4 cols, About = 3 cols)
  const gridCols = activeDropdown === "Services" ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <header
      className="w-full bg-white font-sans relative z-50"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div
        className={`w-full transition-colors duration-200 ${
          activeDropdown
            ? "border-b border-transparent"
            : "border-b border-neutral-900"
        }`}
      >
        <div className="mx-auto max-w-5xl h-16 container flex items-center justify-around">
          {/* --- Logo --- */}
          <Link href={"/"}>
            <div className="flex items-center gap-3 font-semibold text-xl">
               <Image src="/logo.png" alt="Logo" height={40} width={150} className="object-contain" />
            </div>
          </Link>

          {/* --- Navigation --- */}
          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600 h-full">
              {["Work", "Services", "Clients", "About", "Knowledge"].map((item) => {
                // Check if this item has a dropdown
                const hasDropdown = item === "Services" || item === "About";
                const isActive = activeDropdown === item;

                return (
                  <div
                    key={item}
                    className="h-full flex items-center relative group"
                    // Trigger dropdown only if it's one of the dropdown items
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className={`flex items-center gap-1 transition-colors ${
                        isActive ? "text-red-500" : "hover:text-red-500"
                      }`}
                    >
                      {item}

                      {/* --- 3. THE DOT TO CHEVRON ANIMATION --- */}
                      {hasDropdown && (
                        <div className="relative w-4 h-4 flex items-center justify-center ml-1">
                          {/* The Dot (Visible when NOT active) */}
                          <span 
                            className={`absolute transition-all duration-300 transform bg-black rounded-full w-1 h-1
                              ${isActive ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                            `} 
                          />
                          
                          {/* The Chevron (Visible when ACTIVE) */}
                          <ChevronDown
                            size={16}
                            className={`absolute transition-all duration-300 transform text-red-500
                              ${isActive ? "opacity-100 rotate-180 scale-100" : "opacity-0 rotate-0 scale-50"}
                            `}
                          />
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* --- Right Side --- */}
            <div className="flex items-center gap-6">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {theme === "dark" ? <Moon size={20} className="text-black" /> : <Sun size={20} className="text-black" />}
                </button>
              )}
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-sm font-bold text-sm tracking-wide hover:bg-gray-800 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. DYNAMIC MEGA MENU --- */}
      <div
        className={`
          absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-sm
          overflow-hidden transition-all duration-300 ease-in-out
          ${activeDropdown ? "max-h-[300px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Dynamic Grid Column Class based on which menu is open */}
          <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
            {currentCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`${card.bg} p-8 rounded-lg group hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-40`}
              >
                <div>
                  <h3 className="text-2xl font-extrabold text-black mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 text-sm font-medium leading-relaxed max-w-[80%]">
                    {card.desc}
                  </p>
                </div>
                <div className="flex justify-end">
                  <IoIosArrowRoundForward className="text-black w-10 h-8 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;