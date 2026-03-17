import React from "react";
import Link from "next/link";
import { 
  ShoppingCart, TrendingDown, ServerCrash, 
  RefreshCcw, ArrowRight, Layout, Database, 
  Zap, CheckCircle2, Store, Users, Layers,
  ArrowUpRight, Box, CreditCard, ShieldCheck,
  Bot, LineChart, Globe
} from "lucide-react";

export default function EcommerceIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* High-Converting Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-indigo-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold tracking-wide uppercase mb-4">
          <ShoppingCart size={16} /> Enterprise Commerce
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting High-Conversion <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">Digital Retail Engines</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We engineer sub-second, headless commerce platforms that turn clicks into revenue. From global D2C brands to complex B2B wholesale portals, we build retail infrastructure designed for massive scale.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all text-lg">
            Build Your E-commerce Platform
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Speak with a Commerce Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. E-COMMERCE CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Revenue Killers</h2>
            <p className="text-lg text-slate-600">In digital retail, every millisecond of latency and every broken API connection directly destroys your Gross Merchandise Value (GMV).</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cart Abandonment", desc: "Clunky, multi-step checkouts and slow-loading product pages cause high-intent buyers to bounce before paying.", icon: <TrendingDown className="text-red-500 w-8 h-8" /> },
              { title: "Traffic Crashes (BFCM)", desc: "Monolithic platforms crashing during Black Friday or viral marketing campaigns, resulting in devastating lost sales.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Inventory De-Sync", desc: "Poor API connections between your storefront and your ERP leading to overselling products you don't actually have in stock.", icon: <RefreshCcw className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. E-COMMERCE ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Engineering Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Headless & Composable Commerce
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We separate the frontend user experience (the "head") from the backend commerce engine. This allows us to build lightning-fast, highly customized storefronts using Next.js, while relying on robust platforms like Shopify Plus or Saleor for secure checkout and inventory.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Sub-second page loads via Static Site Generation (SSG).",
                "Omnichannel readiness (Web, Mobile App, POS displays).",
                "Best-in-breed API integrations (Algolia, Stripe, Contentful).",
                "Infinite scalability without upgrading backend server tiers."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#0A1128] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-indigo-900/50">
             {/* Abstract Headless Commerce CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Layers className="text-emerald-400" /> Headless Architecture
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               {/* Frontend Layer */}
               <div className="bg-emerald-500/20 border border-emerald-400/50 p-4 rounded-xl w-full text-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                 <div className="absolute -top-2 -right-2 flex gap-1">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                 </div>
                 <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold"><Layout size={18} /> Next.js Frontend</div>
                 <p className="text-xs text-emerald-100/70 mt-1">Lightning-fast UI & global CDN caching.</p>
               </div>
               
               {/* GraphQL API Layer */}
               <div className="flex justify-between w-1/2 px-4 py-2">
                 <ArrowRight className="text-indigo-400 rotate-90" />
                 <ArrowRight className="text-indigo-400 rotate-90" />
                 <ArrowRight className="text-indigo-400 rotate-90" />
               </div>
               <div className="bg-indigo-900/50 border border-indigo-500/50 py-2 px-6 rounded-full text-xs font-mono text-indigo-300">GraphQL / REST API Layer</div>
               <div className="flex justify-between w-1/2 px-4 py-2">
                 <ArrowRight className="text-indigo-400 rotate-90" />
                 <ArrowRight className="text-indigo-400 rotate-90" />
                 <ArrowRight className="text-indigo-400 rotate-90" />
               </div>

               {/* Backend Services */}
               <div className="grid grid-cols-3 gap-3 w-full">
                 <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center">
                   <ShoppingCart className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase">Commerce Engine</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center">
                   <Box className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase">Headless CMS</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center">
                   <CreditCard className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase">Payment / PIM</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Commerce Systems We Build</h2>
            <p className="text-lg text-slate-600">From high-volume fashion brands to complex industrial parts distributors, we tailor the commerce engine to your exact business model.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Direct-to-Consumer (D2C)", icon: <Store size={28} />, desc: "Brand-driven, immersive storefronts optimized strictly for impulse conversions and high Average Order Value." },
              { title: "B2B Wholesale Portals", icon: <Users size={28} />, desc: "Complex platforms handling custom pricing tiers, bulk ordering grids, and automated net-30 invoicing." },
              { title: "Multi-Vendor Marketplaces", icon: <Globe size={28} />, desc: "Scalable ecosystems allowing third-party sellers to onboard, manage inventory, and split payments automatically." },
              { title: "Omnichannel Integrations", icon: <RefreshCcw size={28} />, desc: "Unifying in-store POS data with online inventory so customers can 'Buy Online, Pick Up In-Store' flawlessly." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors group">
                <div className="text-emerald-600 mb-6 bg-emerald-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Modern Retail Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We abandon rigid legacy monoliths (like Magento or old WooCommerce) in favor of flexible, API-first composable commerce architectures.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "Shopify Plus", "Saleor", "Medusa.js", "Stripe", "Algolia Search", "Contentful", "Vercel"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-emerald-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2">Commerce Engines</h4><p className="text-slate-600 text-sm">Shopify Plus, Saleor, Medusa</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2">Headless Frontend</h4><p className="text-slate-600 text-sm">Next.js, React, Tailwind CSS</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2">Search & Discovery</h4><p className="text-slate-600 text-sm">Algolia, Meilisearch</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2">Payments & Logic</h4><p className="text-slate-600 text-sm">Stripe, Node.js Middlewares</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (E-commerce Merchandising) */}
      <section className="py-24 px-6 bg-[#0A1128] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold tracking-wide uppercase">
              <Bot size={16} /> AI Software Factory
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Accelerated Build & <span className="text-indigo-500">AI Merchandising</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our AI Software Factory doesn't just build your e-commerce platform 40% faster. We integrate intelligent agents directly into your store to automate product tagging, generate high-converting SEO descriptions, and power predictive product recommendations.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Automated storefront scaffolding via AI engineering agents.",
                "Dynamic pricing models based on real-time market data.",
                "Hyper-personalized product recommendation engines."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-indigo-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(99,102,241,0.1)]">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold">AI Personalization Engine</span>
               <span className="text-indigo-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div> Live</span>
             </div>
             <div className="space-y-4">
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-md"></div>
                    <div><p className="text-white font-bold text-sm">User: Returning VIP</p><p className="text-slate-400 text-xs">Viewed: Running Shoes</p></div>
                 </div>
                 <div className="text-right"><p className="text-indigo-400 font-bold text-sm">Action</p><p className="text-slate-500 text-xs">Upsell: Smart Watch</p></div>
               </div>
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center opacity-70">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-md"></div>
                    <div><p className="text-white font-bold text-sm">User: First Time Visitor</p><p className="text-slate-400 text-xs">Source: Instagram Ad</p></div>
                 </div>
                 <div className="text-right"><p className="text-emerald-400 font-bold text-sm">Action</p><p className="text-slate-500 text-xs">Offer: 15% Welcome Gate</p></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Commerce Delivery Protocol</h2>
          <p className="text-lg text-slate-600">A structured engineering process designed to migrate or build your store with zero data loss and maximum SEO preservation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Data Audit", desc: "Mapping existing products, customers, and order histories for secure migration." },
            { step: "02", title: "UX/UI Design", desc: "Designing high-converting checkout flows and mobile-first product pages." },
            { step: "03", title: "Headless Build", desc: "Engineering the decoupled Next.js frontend and integrating backend APIs." },
            { step: "04", title: "Load Testing", desc: "Simulating BFCM traffic spikes to ensure the architecture holds steady." },
            { step: "05", title: "Launch", desc: "Flipping DNS, executing 301 redirects, and active transaction monitoring." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-emerald-600 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mb-6"><LineChart size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Higher Conversion Rates</h3>
            <p className="text-slate-600">Amazon found that every 100ms of latency costs 1% in sales. Our sub-second headless builds directly increase your checkout conversions.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">BFCM Crash Prevention</h3>
            <p className="text-slate-600">Decoupled architecture means your frontend relies on cached global CDNs, preventing your database from crashing during viral traffic spikes.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><RefreshCcw size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Omnichannel Agility</h3>
            <p className="text-slate-600">Because your backend is decoupled, you can push products to Web, Mobile Apps, Instagram, and smart-mirrors from a single commerce engine.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">E-Commerce Engineering Success</h2>
            <p className="text-slate-600 text-lg">See how we have engineered scalable digital retail platforms for fast-growing brands.</p>
          </div>
          <Link href="/case-studies" className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-2">
            View All Commerce Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "D2C Brand Headless Migration", desc: "Migrated a rigid monolithic store to a Next.js + Shopify Plus headless architecture, resulting in a 42% decrease in page load time and a 1.8% lift in overall conversion rate.", tags: ["Next.js", "Shopify Plus", "Headless"] },
            { title: "B2B Industrial Wholesale Portal", desc: "Engineered a custom B2B commerce portal using Saleor, integrating deep pricing tiers and syncing 50,000+ SKUs with their legacy SAP ERP system in real-time.", tags: ["Saleor", "Node.js", "ERP Integration"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-emerald-700 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Losing Sales to Slow Load Times.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Partner with an engineering team that understands how to build lightning-fast, high-converting digital retail platforms at enterprise scale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all text-lg">
            Discuss Your E-commerce Build
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Speak with a Commerce Architect
          </Link>
        </div>
      </section>

    </div>
  );
}