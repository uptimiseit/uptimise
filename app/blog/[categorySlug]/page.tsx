"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, LayoutGrid, List as ListIcon, 
  ArrowRight, TrendingUp, Terminal, Loader2,
  ImageIcon, ChevronLeft
} from "lucide-react";
import { DynamicIcon } from "@/app/components/Navbar/DynamicIcon"; // Path to your icon component

export default function DynamicCategoryBlogPage() {
  const { categorySlug } = useParams();
  
  // UI State
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  // Data State
  const [categoryInfo, setCategoryInfo] = useState<any>(null);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // 1. Fetch Categories to find the real Name and Icon for this slug
        const catRes = await fetch("https://uptimiseit-admin.vercel.app/api/categories");
        const catJson = await catRes.json();
        
        const currentCat = catJson.data.find((c: any) => c.slug === categorySlug);
        
        if (!currentCat) throw new Error("Category Not Found");
        setCategoryInfo(currentCat);

        // 2. Fetch all blogs and filter by the Category Name found above
        const blogRes = await fetch("https://uptimiseit-admin.vercel.app/api/blogs", {
          cache: 'no-store'
        });
        const blogJson = await blogRes.json();

        if (blogJson.success) {
          const filteredByCat = blogJson.data.filter(
            (post: any) => post.category === currentCat.name
          );

          setAllPosts(filteredByCat);

          // 3. Extract Unique Sub-Categories for filters
          const uniqueSubCats = Array.from(
            new Set(
              filteredByCat
                .map((post: any) => post.subCategory)
                .filter((sub: any) => sub && sub !== "")
            )
          ) as string[];

          setSubCategories(["All", ...uniqueSubCats]);
        }
      } catch (err) {
        console.error("Error building dynamic archive:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (categorySlug) fetchData();
  }, [categorySlug]);

  // Client-side Filtering (Search + SubCategory)
  const filteredPosts = allPosts.filter(post => {
    const matchesSub = activeSubCategory === "All" || post.subCategory === activeSubCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  const popularPosts = allPosts.slice(0, 4);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFF]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Mapping_Archive...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-20">
      
      {/* 1. DYNAMIC HEADER */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-center space-y-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors mb-4">
          <ChevronLeft size={14} /> Back to Insights
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
             <DynamicIcon name={categoryInfo?.icon} className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
            {categoryInfo?.name}.
          </h1>
          <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm md:text-base">
            {categoryInfo?.description || `Strategizing and building the future of ${categoryInfo?.name}.`}
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. FILTER BAR */}
        <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md py-4 border-b border-slate-100 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder={`Search in ${categoryInfo?.name}...`} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
             <div className="flex bg-slate-100 p-1 rounded-xl mr-4">
                {["grid", "list"].map((mode) => (
                  <button 
                    key={mode}
                    onClick={() => setViewMode(mode as any)}
                    className={`p-2 rounded-lg transition-all ${viewMode === mode ? "bg-white shadow-sm text-blue-600" : "text-slate-400"}`}
                  >
                    {mode === "grid" ? <LayoutGrid size={18} /> : <ListIcon size={18} />}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* 3. SUB-CATEGORY PILLS */}
        <div className="flex flex-wrap gap-2 mb-12">
          {subCategories.map(subCat => (
            <button
              key={subCat}
              onClick={() => setActiveSubCategory(subCat)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                activeSubCategory === subCat 
                ? "bg-slate-900 text-white shadow-lg" 
                : "bg-white border border-slate-200 text-slate-500 hover:border-blue-400"
              }`}
            >
              {subCat}
            </button>
          ))}
        </div>

        {/* 4. MAIN CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {filteredPosts.length === 0 ? (
                <div className="p-20 text-center border-2 border-dashed rounded-[3rem] text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                    No entries found in this Node.
                </div>
            ) : (
                <motion.div layout className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "flex flex-col gap-8"}>
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map(post => (
                      <motion.div key={post.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Link href={`/blog/${post.slug}`}>
                          <div className={`bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group ${viewMode === "list" ? "md:flex h-full" : ""}`}>
                            <div className={`${viewMode === "list" ? "w-full md:w-2/5 h-64 md:h-auto" : "w-full h-56"} bg-slate-100 relative overflow-hidden`}>
                              {post.featuredImage ? (
                                  <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              ) : (
                                  <div className="w-full h-full flex items-center justify-center text-slate-300"><ImageIcon size={40} /></div>
                              )}
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">{post.subCategory || "General"}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Authored_By {post.author}</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all">
                                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
                </motion.div>
            )}
          </div>

          {/* SIDEBAR: Trending */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm sticky top-[150px]">
              <h3 className="text-[10px] font-black text-slate-950 mb-8 flex items-center gap-2 uppercase tracking-[0.3em]">
                <TrendingUp size={14} className="text-blue-600" /> Top_Insights
              </h3>
              <div className="space-y-8">
                {popularPosts.map((post, idx) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-4 group cursor-pointer">
                    <span className="text-2xl font-black text-slate-100 group-hover:text-blue-100 transition-colors font-mono">0{idx + 1}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[13px] group-hover:text-blue-600 transition-colors leading-tight mb-1 line-clamp-2">{post.title}</h4>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{post.subCategory || "STRATEGY"}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}