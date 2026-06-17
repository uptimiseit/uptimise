"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Layers, Monitor, Users, Trophy } from "lucide-react";

interface GalleryAsset {
  src: string;
  alt: string;
  category: string;
}

export default function WorkspaceGallery() {
  const [assets, setAssets] = useState<GalleryAsset[]>([]);
  const [filteredAssets, setFilteredAssets] = useState<GalleryAsset[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "all", name: "All Matrix", icon: Layers },
    { id: "studio", name: "Studio Spaces", icon: Monitor },
    { id: "team", name: "Core Team", icon: Users },
    { id: "events", name: "Breakthroughs", icon: Trophy },
  ];

  // --- 🛰️ SMART SYNC PIPELINE ---
  useEffect(() => {
    const fetchGalleryAssets = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/gallerys");

        if (!response.ok) throw new Error("Proxy response error.");
        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          // 🧠 INTELLIGENT ROUTING MATRIX: Parsed on your actual assets paths
          const structuredData = data.data.map((item: any) => {
            const fileString = (item.src || "").toLowerCase();
            const altString = (item.alt || "").toLowerCase();
            
            // Default bucket category classification
            let dynamicCategory = "studio"; 

            // A. Check if asset belongs in the Core Team category tab
            if (
              fileString.includes("shared-image") || 
              altString.includes("shared") || 
              fileString.includes("team")
            ) {
              dynamicCategory = "team";
            } 
            // B. Check if asset belongs in Breakthroughs / Events category tab
            else if (
              fileString.includes("ahmedabad") || 
              altString.includes("city") || 
              fileString.includes("event")
            ) {
              dynamicCategory = "events";
            }
            // C. Otherwise, defaults to Studio Spaces (office-gallery, gallery-wall, etc.)

            return {
              src: item.src,
              alt: item.alt.replace(/[-_]/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()), // Cleans messy hash titles cleanly for user view
              category: dynamicCategory,
            };
          });

          setAssets(structuredData);
          setFilteredAssets(structuredData);
        }
      } catch (err) {
        console.error("Failed executing categorized layout sync:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryAssets();
  }, []);

  // --- 🎛️ CLIENT SIDE LAYOUT FILTER SWITCHER ---
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredAssets(assets);
    } else {
      const updates = assets.filter((asset) => asset.category === activeCategory);
      setFilteredAssets(updates);
    }
  }, [activeCategory, assets]);

  if (isLoading) {
    return (
      <section className="relative bg-[#0A0D14] py-32 px-6 flex flex-col items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center justify-center space-y-3 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
          <Loader2 size={24} className="animate-spin text-[#4F8CFF]" />
          <span>Syncing workspace graphics database maps...</span>
        </div>
      </section>
    );
  }

  if (assets.length === 0) return null;

  return (
    <section className="relative bg-[#0A0D14] py-24 px-6 overflow-hidden min-h-screen">
      
      {/* 🌌 Ambient Matrix High-Tech Glow meshes */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4F8CFF]/10 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#7BDFF2]/5 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      {/* --- Central Header Typography --- */}
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-20 mb-12">
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4F8CFF]/10 text-[#7BDFF2] border border-[#4F8CFF]/20"
        >
          <Sparkles className="w-3.5 h-3.5" /> Premium Studio Clusters
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Inside Our Studio, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] via-[#7BDFF2] to-[#B4F1FF]">
              Where Ideas Take Shape
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            Filter through the engineering labs, creative hubs, and dynamic team workspaces driving our workflows.
          </p>
        </motion.div>
      </div>

      {/* --- Part 2: Interactive Glassmorphic Control Pills --- */}
      <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto mb-16 relative z-20">
        <div className="p-1.5 bg-slate-900/60 border border-slate-800/80 rounded-full backdrop-blur-xl flex flex-wrap gap-1 items-center shadow-2xl">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group ${
                  isSelected ? "text-[#0A0D14]" : "text-slate-400 hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#7BDFF2] rounded-full z-0 shadow-lg shadow-[#4F8CFF]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <IconComponent className="w-3.5 h-3.5" />
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Part 3: Premium Bento Fluid Layout Grid --- */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAssets.map((item, idx) => {
              // Staggers aspect dimension properties cleanly across array iterations
              const isLargeCard = idx === 0 || idx === 4;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={item.src}
                  className={`relative rounded-3xl overflow-hidden border border-slate-800/60 bg-slate-900/30 backdrop-blur-md shadow-2xl group ${
                    isLargeCard ? "md:col-span-2 aspect-[16/10]" : "md:col-span-1 aspect-[4/5]"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100 contrast-[1.01]"
                    loading="lazy"
                  />

                  {/* Glassmorphic Shadow Border Mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/90 via-[#0A0D14]/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Data Content Taxonomy Overlays */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest bg-slate-950/80 text-[#7BDFF2] border border-slate-800/80 uppercase mb-2">
                      // {item.category}
                    </span>
                    <h3 className="text-sm md:text-base font-semibold text-white truncate drop-shadow-md">
                      {item.alt}
                    </h3>
                  </div>

                  {/* Clean Interactive Lighting Vector Line */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent duration-500" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Missing Content Layout Protection Guard */}
        {filteredAssets.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full py-20 text-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/10 backdrop-blur-sm">
            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">
              No active workspace nodes found inside this category tier.
            </p>
          </motion.div>
        )}
      </div>

    </section>
  );
}