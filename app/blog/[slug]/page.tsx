"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { 
  Calendar, Clock, Share2, Twitter, Linkedin, 
  Facebook, ArrowRight, ArrowUpRight, 
  Mail, Bookmark, Loader2, User, AlertCircle
} from "lucide-react";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        // Fetching from your Vercel Admin API
        const res = await fetch("https://uptimiseit-admin.vercel.app/api/blogs", {
          cache: 'no-store'
        });
        const json = await res.json();

        if (json.success) {
          // Find the specific post by matching the URL slug
          const currentPost = json.data.find((p: any) => p.slug === slug);
          
          if (currentPost) {
            setPost(currentPost);
            // Filter related posts (same category, excluding the current one)
            const related = json.data
              .filter((p: any) => p.category === currentPost.category && p.slug !== slug)
              .slice(0, 3);
            setRelatedPosts(related);
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
  }, [slug]);

  // --- UI STATES ---

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
        <h1 className="text-3xl font-black text-slate-900">Post Not Found</h1>
        <p className="text-slate-500 mt-2 mb-8">The engineering log you're looking for has been moved or archived.</p>
        <Link href="/blog" className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200">
          Back to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-20 selection:bg-indigo-100">
      
      {/* 1. ARTICLE HEADER */}
      <article className="pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-12">
          <Link href={`/blog?category=${post.category}`} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black tracking-widest uppercase hover:bg-indigo-100 transition-colors">
            <Bookmark size={14} /> {post.category} {post.subCategory && `// ${post.subCategory}`}
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
              <span className="text-slate-900 font-black text-xs uppercase tracking-tight">{post.author || "Uptimise Team"}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase font-mono">
              <Calendar size={14} /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase font-mono">
              <Clock size={14} /> 8 min read
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] bg-slate-100 relative overflow-hidden shadow-2xl shadow-indigo-900/5">
            {post.featuredImage ? (
              <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center">
                <h2 className="text-white/10 font-black text-8xl italic uppercase tracking-tighter">Uptimise</h2>
              </div>
            )}
          </div>
        </div>

        {/* 2. DYNAMIC CONTENT AREA */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-a:text-indigo-600 prose-a:font-bold
            prose-blockquote:border-l-indigo-500 prose-blockquote:bg-indigo-50/50 prose-blockquote:rounded-r-2xl prose-blockquote:py-1
            prose-img:rounded-[2rem] prose-img:shadow-xl">
            
            {/* Renders the content saved in the database as Markdown */}
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* 3. TAGS & SHARING */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 mt-16 border-y border-slate-100">
            <div className="flex flex-wrap gap-2">
              {post.tags?.split(',').map((tag: string) => (
                <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100 transition-all cursor-default">
                  #{tag.trim()}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Share2 size={14}/> Share_Log:</span>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all border border-slate-100"><Linkedin size={14}/></button>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-all border border-slate-100"><Twitter size={14}/></button>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all border border-slate-100"><Facebook size={14}/></button>
            </div>
          </div>
        </div>
      </article>

      {/* 4. RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50/50 py-24 border-y border-slate-100 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xs font-black text-slate-900 mb-10 uppercase tracking-[0.3em]">Read_Next_Nodes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related, i) => (
                <Link key={i} href={`/blog/${related.slug}`} className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                  <div className="w-full h-44 bg-slate-100 relative">
                    {related.featuredImage ? (
                      <img src={related.featuredImage} alt={related.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20" />
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-black text-indigo-600 mb-2 uppercase tracking-widest">{related.category}</span>
                    <h4 className="text-lg font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                      {related.title}
                    </h4>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">8 min read</span>
                      <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. BOTTOM CTA */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Ready to build?</h2>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          If you're planning a digital platform or scaling your infrastructure, let's sync.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all text-lg tracking-tight">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 tracking-tight">
            Strategy Call <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}