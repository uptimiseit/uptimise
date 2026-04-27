import React from "react";
import Link from "next/link";
import { 
  Calendar, Clock, Share2, Twitter, Linkedin, 
  Facebook, ArrowLeft, ArrowRight, ArrowUpRight, 
  Mail, CheckCircle2, Bookmark
} from "lucide-react";

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-20 selection:bg-indigo-200">
      
      {/* 1. ARTICLE HEADER & HERO */}
      <article className="pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-12">
          {/* Category Pill */}
          <Link href="/blog?category=ai" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide uppercase hover:bg-indigo-100 transition-colors">
            <Bookmark size={14} /> AI & Software Development
          </Link>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">AI-Native</span> Software Development
          </h1>
          
          {/* Excerpt/Subtitle */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Artificial intelligence is transforming how digital products are designed, built, and deployed. Modern engineering teams are adopting AI-assisted workflows that accelerate development without compromising quality.
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm font-medium text-slate-500 border-t border-slate-200 w-max mx-auto px-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center border border-slate-300">
                <span className="font-bold text-slate-500 text-xs">UI</span>
              </div>
              <span className="text-slate-700 font-bold">Uptimise Engineering</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <span className="flex items-center gap-1.5"><Calendar size={16} /> March 24, 2026</span>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <span className="flex items-center gap-1.5"><Clock size={16} /> 8 min read</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] bg-gradient-to-br from-indigo-900 to-violet-900 relative overflow-hidden shadow-2xl shadow-indigo-900/20 flex items-center justify-center">
            {/* Abstract AI Architecture Graphic built with CSS */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 w-full max-w-3xl mx-auto px-8 grid grid-cols-3 gap-4 items-center">
              <div className="h-32 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md animate-pulse"></div>
              <div className="flex justify-between items-center px-4">
                <div className="w-full h-0.5 bg-indigo-400/50 relative"><div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/3 h-1 bg-indigo-400 rounded-full animate-ping"></div></div>
              </div>
              <div className="h-48 bg-indigo-500/20 border border-indigo-400/30 rounded-2xl backdrop-blur-md shadow-[0_0_50px_rgba(99,102,241,0.3)]"></div>
            </div>
          </div>
        </div>

        {/* 2. ARTICLE CONTENT */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-indigo-600 prose-img:rounded-2xl">
            
            <p className="lead text-2xl text-slate-600 font-medium leading-relaxed mb-10">
              Software development has evolved significantly over the past decade. Traditional development workflows relied heavily on large engineering teams performing sequential, manual tasks. Today, we are entering a new paradigm.
            </p>

            <h2 className="text-3xl text-slate-900 mt-12 mb-6">What Is AI-Native Engineering?</h2>
            <p>
              AI-native engineering refers to development workflows where artificial intelligence is integrated deeply into the software development lifecycle (SDLC). Instead of replacing engineers, AI tools act as cognitive assistants.
            </p>
            <p>
              By deploying intelligent agents, teams can automate the generation of boilerplate code, scaffold complex cloud infrastructure, and execute comprehensive security audits in real-time. This allows senior engineers to focus purely on complex system design, business logic, and product innovation.
            </p>

            <h3 className="text-2xl text-slate-900 mt-10 mb-4">How AI Improves Development Workflows</h3>
            <p>
              The integration of Large Language Models (LLMs) and specialized coding agents significantly improves productivity across the entire engineering pipeline:
            </p>
            <ul className="space-y-4 my-8 list-none pl-0">
              {[
                { title: "Development Scaffolding", desc: "AI can generate initial API structures, frontend components, and database schemas instantly based on plain-text requirements." },
                { title: "Testing Automation", desc: "Autonomous agents write thousands of unit and integration test cases, identifying edge cases human developers might miss." },
                { title: "Instant Documentation", desc: "AI reads the final codebase and generates perfectly structured, always-up-to-date API documentation." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <CheckCircle2 className="text-indigo-600 shrink-0 w-6 h-6 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-1">{item.title}</strong>
                    <span className="text-slate-600 text-base leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-10 text-2xl font-medium italic text-slate-800 bg-indigo-50/50 rounded-r-2xl">
              "Engineering teams that successfully combine human expertise with intelligent automation will be able to build digital platforms 40% faster."
            </blockquote>

            <h2 className="text-3xl text-slate-900 mt-12 mb-6">Challenges of AI in Software Development</h2>
            <p>
              Despite its massive advantages, AI-assisted development is not a magic bullet. It requires incredibly strict architectural oversight. Engineering teams must rigorously enforce:
            </p>
            <ul>
              <li>Strict code quality and formatting standards.</li>
              <li>Zero-Trust security practices to prevent AI-generated vulnerabilities.</li>
              <li>Scalable, decoupled system architecture.</li>
            </ul>
            <p>
              Human engineers remain ultimately responsible for validating, testing, and refining all AI-generated outputs before they reach production servers.
            </p>

            <h2 className="text-3xl text-slate-900 mt-12 mb-6">The Future of Product Engineering</h2>
            <p>
              As AI technology evolves, software development workflows will continue to change at a blistering pace. Companies that adopt AI-native engineering models today will gain significant competitive advantages in time-to-market, cost efficiency, and product stability over those stuck in traditional paradigms.
            </p>

          </div>

          {/* 3. TAGS & SHARING */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 mt-12 border-y border-slate-200">
            <div className="flex flex-wrap gap-2">
              {["AI Engineering", "Software Development", "Automation", "Trends"].map(tag => (
                <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  #{tag}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-500 flex items-center gap-2"><Share2 size={16}/> Share:</span>
              <button     aria-label="Uptimiseit" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-colors"><Linkedin size={14}/></button>
              <button     aria-label="Uptimiseit" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-colors"><Twitter size={14}/></button>
              <button     aria-label="Uptimiseit" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-colors"><Facebook size={14}/></button>
            </div>
          </div>

          {/* 4. AUTHOR BIO */}
          <div className="py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="w-20 h-20 rounded-2xl bg-indigo-100 flex items-center justify-center border-2 border-indigo-200 shrink-0">
              <span className="text-2xl font-black text-indigo-700">UI</span>
            </div>
            <div>
              <h3 className="text-sm font-black tracking-widest uppercase text-slate-400 mb-1">About the Author</h3>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Uptimise Engineering Team</h4>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                The Uptimise IT engineering team shares insights about modern software development, AI-native workflows, and scalable digital product architecture. We build systems that handle millions of users.
              </p>
            </div>
          </div>

        </div>
      </article>

      {/* 5. NEWSLETTER SUBSCRIPTION (Inline) */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <div className="flex-1 relative z-10 text-center md:text-left">
            <Mail className="text-indigo-400 w-8 h-8 mb-4 mx-auto md:mx-0" />
            <h3 className="text-2xl font-extrabold text-white mb-2">Stay Updated with Engineering Insights</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to receive our latest articles on AI engineering, software architecture, and digital product development.
            </p>
          </div>
          <div className="w-full md:w-auto relative z-10">
            <form className="flex flex-col gap-3 w-full md:w-80">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
                required
              />
              <button type="submit" aria-label="Subscribe to newsletter" className="w-full bg-indigo-600 text-white font-bold rounded-xl py-3 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. RELATED ARTICLES */}
      <section className="bg-slate-50 py-24 border-y border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-10">Read Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How AI Agents Are Changing Software Development", category: "AI & Automation", time: "6 min read", color: "from-blue-500 to-cyan-500" },
              { title: "Best Architecture for Multi-Tenant SaaS Platforms", category: "Software Development", time: "12 min read", color: "from-sky-500 to-indigo-500" },
              { title: "DevOps Best Practices for Scalable Systems", category: "Cloud & DevOps", time: "8 min read", color: "from-fuchsia-500 to-rose-500" }
            ].map((post, i) => (
              <Link key={i} href="#" className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all group flex flex-col">
                <div className={`w-full h-40 bg-gradient-to-br ${post.color} relative`}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-indigo-600">{post.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1"><Clock size={12}/> {post.time}</span>
                    <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Building a Digital Product?</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          If you're planning to build a digital platform or scale an existing system, Uptimise IT can help. We combine AI-native workflows with scalable infrastructure to deliver elite software.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Book a Strategy Call <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}