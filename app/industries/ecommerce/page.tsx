'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ShoppingCart, TrendingDown, ServerCrash, 
  RefreshCcw, ArrowRight, Layout, Database, 
  Zap, CheckCircle2, Store, Users, Layers,
  ArrowUpRight, Box, CreditCard, ShieldCheck,
  Bot, LineChart, Globe
} from "lucide-react";

// --- Typesafe Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12
//     }
//   }
// };

// const hoverScale: Variants = {
//   hover: { 
//     scale: 1.02, 
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function EcommerceIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* High-Converting Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 blur-[120px] rounded-full -z-10" 
        />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-indigo-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          // variants={staggerContainer} 
          className="space-y-8"
        >
          <motion.div 
          //  
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <ShoppingCart size={16} /> Enterprise Commerce
          </motion.div>
          
          <motion.h1 
          //  
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Architecting High-Conversion <br className="hidden md:block" />
            <motion.span 
               animate={{ color: ["#059669", "#4f46e5", "#059669"] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600"
            >
                Digital Retail Engines
            </motion.span>
          </motion.h1>
          
          <motion.p 
          //  
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We engineer sub-second, headless commerce platforms that turn clicks into revenue. From global D2C brands to complex B2B wholesale portals, we build retail infrastructure designed for massive scale.
          </motion.p>
          
          <motion.div 
          //  
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all text-lg block">
                    Build Your E-commerce Platform
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                    Speak with a Commerce Architect <ArrowUpRight size={18} />
                </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. E-COMMERCE CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">The Revenue Killers</h2>
            <p className="text-lg text-slate-600 font-medium">In digital retail, every millisecond of latency directly destroys your Gross Merchandise Value (GMV).</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Cart Abandonment", desc: "Clunky checkouts and slow-loading product pages cause high-intent buyers to bounce before paying.", icon: <TrendingDown className="text-red-500 w-8 h-8" /> },
              { title: "Traffic Crashes (BFCM)", desc: "Monolithic platforms crashing during Black Friday or viral marketing campaigns, resulting in lost sales.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Inventory De-Sync", desc: "Poor API connections between your storefront and ERP leading to overselling products out of stock.", icon: <RefreshCcw className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover="hover"
                // variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. E-COMMERCE ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-8"
          >
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm font-mono">// Our_Engineering_Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Headless & Composable Commerce
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We separate the frontend user experience (the "head") from the backend commerce engine. This allows us to build lightning-fast, highly customized storefronts using Next.js, while relying on robust platforms like Shopify Plus for secure checkout.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Sub-second page loads via Static Site Generation (SSG).",
                "Omnichannel readiness (Web, Mobile App, POS displays).",
                "Best-in-breed API integrations (Algolia, Stripe, Contentful).",
                "Infinite scalability without backend server lag."
              ].map((item, i) => (
                <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A1128] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-indigo-900/50"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Layers className="text-emerald-400" /> Headless Architecture
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               {/* Frontend Layer */}
               <motion.div 
                initial={{ y: -10 }} 
                animate={{ y: 0 }} 
                className="bg-emerald-500/20 border border-emerald-400/50 p-4 rounded-xl w-full text-center relative shadow-lg shadow-emerald-900/20"
               >
                 <div className="absolute -top-2 -right-2 flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="w-3 h-3 bg-emerald-400 rounded-full" />
                 </div>
                 <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold uppercase tracking-widest font-mono text-sm"><Layout size={18} /> Next.js Frontend</div>
               </motion.div>
               
               <div className="flex justify-between w-1/2">
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="text-indigo-400 rotate-90" /></motion.div>
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}><ArrowRight className="text-indigo-400 rotate-90" /></motion.div>
               </div>

               <div className="bg-indigo-900/50 border border-indigo-500/50 py-2 px-6 rounded-full text-[10px] font-mono text-indigo-300 uppercase tracking-widest">GraphQL / REST API Mesh</div>

               <div className="flex justify-between w-1/2">
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}><ArrowRight className="text-indigo-400 rotate-90" /></motion.div>
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}><ArrowRight className="text-indigo-400 rotate-90" /></motion.div>
               </div>

               {/* Backend Services */}
               <div className="grid grid-cols-3 gap-3 w-full">
                 {[
                    {icon: <ShoppingCart />, title: "Commerce"},
                    {icon: <Box />, title: "CMS"},
                    {icon: <CreditCard />, title: "Payments"}
                 ].map((service, i) => (
                    <motion.div key={i} whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center shadow-sm">
                        <div className="text-slate-400 flex justify-center mb-2">{service.icon}</div>
                        <p className="text-white font-bold text-[8px] uppercase tracking-tighter">{service.title}</p>
                    </motion.div>
                 ))}
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Commerce Systems We Build</h2>
            <p className="text-lg text-slate-600 font-medium">Tailored commerce engines designed for your exact business model.</p>
          </motion.div>
          <motion.div 
            // variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Direct-to-Consumer (D2C)", icon: <Store size={28} />, desc: "Brand-driven, immersive storefronts optimized strictly for high impulse conversions." },
              { title: "B2B Wholesale Portals", icon: <Users size={28} />, desc: "Complex platforms handling pricing tiers, bulk order grids, and automated invoicing." },
              { title: "Multi-Vendor Marketplaces", icon: <Globe size={28} />, desc: "Scalable ecosystems allowing sellers to manage inventory and split payments automatically." },
              { title: "Omnichannel Integrations", icon: <RefreshCcw size={28} />, desc: "Unifying in-store POS data with online inventory for frictionless commerce." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all group"
              >
                <div className="text-emerald-600 mb-6 bg-emerald-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-tighter leading-none">{prod.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Modern Retail Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We abandon rigid legacy monoliths in favor of flexible, API-first composable commerce architectures.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "Shopify Plus", "Saleor", "Medusa.js", "Stripe", "Algolia", "Contentful", "Vercel"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-xs border border-slate-200 hover:border-emerald-400 transition-colors cursor-default font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            // variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2 text-sm">Commerce Engines</h4><p className="text-slate-600 text-xs font-medium">Shopify Plus, Saleor, Medusa</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2 text-sm">Headless Frontend</h4><p className="text-slate-600 text-xs font-medium">Next.js, React, Tailwind CSS</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2 text-sm">Search & Discovery</h4><p className="text-slate-600 text-xs font-medium">Algolia, Meilisearch</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-700 font-bold mb-2 text-sm">Payments & Logic</h4><p className="text-slate-600 text-xs font-medium">Stripe, Node.js Middlewares</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY */}
      <section className="py-24 px-6 bg-[#0A1128] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-bold tracking-wide uppercase font-mono">
              <Bot size={16} /> AI_Software_Factory
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase tracking-tighter">
              Build Velocity & <br /><span className="text-indigo-500 italic">AI Merchandising</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Our AI Factory integrates intelligent agents directly into your store to automate tagging, generate high-converting SEO content, and power predictive recommendations.
            </p>
            <ul className="space-y-4 pt-4">
              {["Automated scaffolding via AI engineering agents.", "Dynamic pricing models based on market data.", "Hyper-personalized recommendation engines."].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-300 font-bold italic">
                  <CheckCircle2 className="text-indigo-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-2xl relative">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Real_Time_Merchandising</span>
               <span className="text-indigo-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● Live_Sync</span>
             </div>
             <div className="space-y-3">
               {[
                 { user: "Returning VIP", view: "Running Shoes", action: "Upsell: Smart Watch", color: "text-indigo-400" },
                 { user: "New Visitor", view: "Social Ad", action: "Offer: 15% Welcome", color: "text-emerald-400" }
               ].map((log, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center"
                 >
                   <div className="flex gap-3 items-center">
                     <div className="w-8 h-8 rounded bg-slate-700"></div>
                     <div><p className="text-white font-bold text-[10px]">{log.user}</p><p className="text-[8px] text-slate-500 font-mono tracking-tighter">{log.view}</p></div>
                   </div>
                   <div className="text-right font-black text-[10px] uppercase tracking-tighter">
                     <p className={log.color}>{log.action}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Commerce Delivery Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Zero_Data_Loss_Migration</p>
        </motion.div>
        
        <motion.div 
            // variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Data Audit", desc: "Mapping products, customers, and order history for secure migration." },
            { step: "02", title: "UX/UI Design", desc: "Designing high-converting checkouts and mobile-first product pages." },
            { step: "03", title: "Headless Build", desc: "Engineering the decoupled Next.js UI and backend API integration." },
            { step: "04", title: "Load Testing", desc: "Simulating BFCM traffic spikes to ensure architecture holds steady." },
            { step: "05", title: "Launch", desc: "DNS flip, 301 redirects, and active real-time transaction monitoring." }
          ].map((process, idx) => (
            <motion.div 
                key={idx} 
                
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-emerald-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
            // variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
            <LineChart className="w-12 h-12 mx-auto text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Conversion Lift</h3>
            <p className="text-slate-600 text-sm font-medium">Every 100ms lag costs 1% sales. Our sub-second headless builds directly increase your platform GMV.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
            <ShieldCheck className="w-12 h-12 mx-auto text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">BFCM Resilience</h3>
            <p className="text-slate-600 text-sm font-medium">Decoupled architecture relies on global CDNs, preventing database crashes during viral traffic spikes.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
            <RefreshCcw className="w-12 h-12 mx-auto text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Omnichannel Agility</h3>
            <p className="text-slate-600 text-sm font-medium">Push products to Web, Apps, and POS systems from a single decoupled commerce engine.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Retail Engineering Success</h2>
            <p className="text-slate-600 text-lg font-medium">See how we have engineered scalable digital retail platforms for fast-growing brands.</p>
          </div>
          <Link href="/case-studies" className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-2 text-sm uppercase tracking-widest">
            View All Work <ArrowRight size={18} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "D2C Brand Headless Migration", desc: "Migrated a monolithic store to Next.js + Shopify Plus, resulting in a 42% decrease in page load time and a 1.8% lift in conversion.", tags: ["Next.js", "Shopify Plus", "Headless"] },
            { title: "B2B Industrial Wholesale Portal", desc: "Engineered a custom B2B portal using Saleor, integrating deep pricing tiers and syncing 50k+ SKUs with legacy SAP ERP in real-time.", tags: ["Saleor", "Node.js", "ERP Sync"] },
          ].map((study, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group cursor-pointer"
            >
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-[10px] font-black font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm font-medium">{study.desc}</p>
              <span className="text-emerald-700 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-xs uppercase tracking-widest">
                Read Technical Study <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className=" px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Stop Losing Sales to <br /><span className="text-emerald-600 italic text-5xl md:text-8xl">Slow Load Times.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Partner with an engineering team that understands how to build lightning-fast, high-converting digital retail platforms at enterprise scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-10 py-5 bg-emerald-600 text-white font-black rounded-xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all uppercase tracking-[0.2em] text-xs block">
                    Discuss Your Project
                </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}