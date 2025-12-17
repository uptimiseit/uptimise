"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// =========================================
// DATA DEFINITIONS
// =========================================

const INITIAL_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", alt: "Bedroom White" },
  { id: 2, src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop", alt: "Bedroom Beige" },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=800&auto=format&fit=crop", alt: "Apartment" },
  { id: 4, src: "https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456?w=600&auto=format&fit=crop", alt: "Work Setup" },
  { id: 5, src: "https://images.unsplash.com/photo-1658806312303-6815563cd9d8?w=600&auto=format&fit=crop", alt: "Kitchen" },
  { id: 6, src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop", alt: "Living Room" },
  { id: 7, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", alt: "Corner Decor" },
  { id: 8, src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", alt: "Minimalist Vase" },
];

// ✅ CORRECTED DATA: Using direct .mp4 links (Pexels)
const INITIAL_VIDEOS = [
  { id: "v1", src: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4", alt: "Meeting Boardroom" },
  { id: "v2", src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4", alt: "Phone Apps" },
  { id: "v3", src: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4", alt: "Online Education" },
  { id: "v4", src: "https://videos.pexels.com/video-files/5473806/5473806-uhd_2560_1440_25fps.mp4", alt: "AI Tech" },
  { id: "v5", src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4", alt: "Abstract Interface" },
  { id: "v6", src: "https://videos.pexels.com/video-files/852423/852423-hd_1920_1080_30fps.mp4", alt: "Marketing" },
  { id: "v7", src: "https://videos.pexels.com/video-files/4231575/4231575-uhd_2560_1440_24fps.mp4", alt: "Online Shopping" },
];

// =========================================
// REUSABLE SHUFFLE HOOK
// =========================================
function useShuffler(initialData: any[]) {
  const [data, setData] = useState(initialData);
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const shuffle = useCallback(() => {
    setData((prev) => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, []);

  useEffect(() => {
    if (!isClient || isPaused) return;
    const interval = setInterval(shuffle, 4000); // 4 Seconds
    return () => clearInterval(interval);
  }, [isClient, isPaused, shuffle]);

  return { data, isPaused, setIsPaused, isClient };
}

// =========================================
// MAIN COMPONENT
// =========================================
export default function DualGalleryPage() {
  const { data: images, isPaused: imgPaused, setIsPaused: setImgPaused, isClient } = useShuffler(INITIAL_IMAGES);
  const { data: videos, isPaused: vidPaused, setIsPaused: setVidPaused } = useShuffler(INITIAL_VIDEOS);

  if (!isClient) return null;

  return (
    <main className="min-h-screen  py-8 space-y-32">
      
      {/* ===========================
          SECTION 1: IMAGE GALLERY (Left Focus)
      ============================ */}
      <section className="p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Image Gallery</h2>
          {/* <span className={`text-sm px-3 py-1 rounded-full transition-colors ${imgPaused ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
            {imgPaused ? "⏸️ Paused" : "▶️ Auto-Shuffling"}
          </span> */}
        </div>

        <motion.div 
          layout // Smoothly animates the container size changes
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense"
          onMouseEnter={() => setImgPaused(true)}
          onMouseLeave={() => setImgPaused(false)}
        >
          <AnimatePresence>
            {images.map((img, index) => {
              const isLarge = index === 0;
              // Left Focus Layout
              let spanClasses = isLarge ? "col-span-2 row-span-2" : (index === 1 ? "col-span-1 row-span-2" : "col-span-1 row-span-1");

              return (
                <motion.div
                  key={img.id}
                  layout // MAGIC PROP: Animates the shuffle movement automatically
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={`relative group rounded-xl overflow-hidden cursor-pointer ${spanClasses} ${isLarge ? "p-1" : ""}`}
                >
                  {/* Shining Border */}
                  {isLarge && (
                    <div className="absolute inset-0 bg-linear-to-r from-purple-400 via-pink-500 to-purple-400 animate-shine bg-size-[200%_100%] rounded-xl -z-10" />
                  )}

                  {/* Image Container with Float Animation */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }} // Subtle breathing/float animation
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200 shadow-sm group-hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ===========================
          SECTION 2: VIDEO GALLERY (Right Focus)
      ============================ */}
      <section className="p-8 max-w-7xl mx-auto rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Video Gallery</h2>
          {/* <span className={`text-sm px-3 py-1 rounded-full transition-colors ${vidPaused ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
            {vidPaused ? "⏸️ Paused" : "▶️ Auto-Shuffling"}
          </span> */}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense"
          onMouseEnter={() => setVidPaused(true)}
          onMouseLeave={() => setVidPaused(false)}
        >
          <AnimatePresence>
            {videos.map((vid, index) => {
              const isLarge = index === 0;

              // RIGHT FOCUS LAYOUT
              // Force the first item (Index 0) to start at column 3 (Right side)
              let spanClasses = "";
              if (index === 0) spanClasses = "col-span-2 row-span-2 md:col-start-3";
              else if (index === 1) spanClasses = "col-span-1 row-span-2 md:col-start-1 md:row-start-1";
              else if (index === 2) spanClasses = "col-span-1 row-span-1 md:col-start-2 md:row-start-1";
              else if (index === 3) spanClasses = "col-span-2 row-span-1 md:col-start-1 md:row-start-3";
              else spanClasses = "col-span-1 row-span-1";

              return (
                <motion.div
                  key={vid.id}
                  layout // Handles shuffling movement
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }} // Scroll Reveal
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={`relative group rounded-xl overflow-hidden cursor-pointer ${spanClasses} ${isLarge ? "p-1" : ""}`}
                >
                  {/* Gold Border */}
                  {isLarge && (
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-blue00 to-pink-500 animate-shine bg-size-[200%_100%] rounded-xl -z-10" />
                  )}

                  <motion.div 
                     animate={{ y: [0, -5, 0] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                     className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800 shadow-sm group-hover:shadow-xl transition-shadow"
                  >
                    <video
                      src={vid.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 left-4 text-white font-medium opacity-90 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      {isLarge ? "★ Featured Video" : vid.alt}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}