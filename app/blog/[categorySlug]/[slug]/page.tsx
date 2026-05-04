"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { 
  Calendar, Twitter, Linkedin, 
  ArrowRight, ArrowUpRight, 
  Bookmark, Loader2, User, AlertCircle,
  ImageIcon, ChevronLeft
} from "lucide-react";

export default function BlogDetailPage() {
  const { categorySlug, slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        
        // 1. Fetch Categories to handle breadcrumbs and display names
        const catRes = await fetch("https://uptimiseit-admin.vercel.app/api/categories");
        const catJson = await catRes.json();
        const currentCategory = catJson.data.find((c: any) => c.slug === categorySlug);

        // 2. Fetch Blogs
        const res = await fetch("https://uptimiseit-admin.vercel.app/api/blogs", {
          cache: 'no-store'
        });
        const json = await res.json();

        if (json.success) {
          const currentPost = json.data.find((p: any) => p.slug === slug);
          
          if (currentPost) {
            setPost({ ...currentPost, categoryDisplayName: currentCategory?.name });

            // --- RELATED LOGIC ---
            let selectedRelatedIds: string[] = [];
            try {
              selectedRelatedIds = currentPost.relatedBlogs ? JSON.parse(currentPost.relatedBlogs) : [];
            } catch (e) {
              console.error("Failed to parse related blogs JSON");
            }

            // Map IDs or fallback to Category-based filtering
            const related = json.data.filter((p: any) => 
              selectedRelatedIds.includes(p.id.toString()) && p.slug !== slug
            );

            if (related.length === 0) {
              const fallback = json.data
                .filter((p: any) => Number(p.categoryId) === Number(currentPost.categoryId) && p.slug !== slug)
                .slice(0, 3);
              setRelatedPosts(fallback);
            } else {
              setRelatedPosts(related);
            }
          } else {
            setError(true);
          }
        }
      } catch (err) {
        console.error("Error fetching blog detail:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchPostData();
  }, [slug, categorySlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFF]">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFDFF] p-6 text-center">
        <AlertCircle className="w-16 h-16 text-slate-300 mb-4" />
        <h1 className="text-3xl font-black text-slate-900">Archive Node Not Found</h1>
        <Link href="/blog" className="mt-8 px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">
          Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-20 selection:bg-indigo-100">
      
      <article className="pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-12">
          {/* Breadcrumb back to the Category Listing Page */}
          <Link href={`/blog/${categorySlug}`} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black tracking-widest uppercase hover:bg-indigo-100 transition-colors">
            <ChevronLeft size={12} /> {post.categoryDisplayName || 'Back to Sector'}
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[0.95]">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-100 w-max mx-auto px-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <User size={14} />
              </div>
              <span className="text-slate-900 font-black text-xs uppercase tracking-tight">{post.author}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase font-mono">
              <Calendar size={14} /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] bg-slate-100 relative overflow-hidden shadow-2xl shadow-indigo-900/5">
            {post.featuredImage ? (
              <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-200 bg-slate-50">
                    <ImageIcon size={64} />
                </div>
            )}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-indigo-600 prose-a:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50/50 prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:px-6
            prose-img:rounded-[2rem] prose-img:shadow-xl
            prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4">
            
            <div 
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(post.content) 
              }} 
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 mt-16 border-y border-slate-100">
            <div className="flex flex-wrap gap-2">
              {post.tags?.split(',').map((tag: string) => (
                <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100">
                  #{tag.trim()}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button aria-label="Share on LinkedIn" className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all border border-slate-100"><Linkedin size={14}/></button>
              <button aria-label="Share on Twitter" className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-all border border-slate-100"><Twitter size={14}/></button>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-slate-50/50 py-24 border-y border-slate-100 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-[10px] font-black text-indigo-600 mb-2 uppercase tracking-[0.4em]">Connected_Nodes</h3>
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Related Strategic Insights</h2>
              </div>
              <Link href={`/blog/${categorySlug}`} className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2">
                View Category Archive <ArrowUpRight size={14}/>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related, i) => (
                <Link key={i} href={`/blog/${categorySlug}/${related.slug}`} className="bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                  <div className="w-full h-56 bg-slate-100 relative overflow-hidden">
                    {related.featuredImage ? (
                      <img 
                        src={related.featuredImage} 
                        alt={related.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <ImageIcon size={40}  />
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-6 font-medium leading-relaxed">
                      {related.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                            <User size={10} />
                         </div>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Access_Protocol</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-indigo-600 transition-all shadow-lg group-hover:shadow-indigo-200">
                         <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Ready to build?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}