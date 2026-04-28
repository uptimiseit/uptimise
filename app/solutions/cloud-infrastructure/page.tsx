'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Cloud, Server, ShieldAlert, Coins, 
  Activity, ArrowRight, Network, Database, 
  Lock, CheckCircle2, Cpu, ArrowUpRight, 
  ServerCrash, GitMerge, Terminal, ShieldCheck,
  Workflow, Layout
} from "lucide-react";


export default function CloudInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Ambient Cloud Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-50 blur-[120px] rounded-full -z-10"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          
          className="space-y-8"
        >
          <motion.div  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-bold tracking-wide uppercase mb-4">
            <Cloud size={16} className="animate-pulse" /> Enterprise Cloud Engineering
          </motion.div>
          
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Scalable, Secure, & Resilient <br className="hidden md:block" />
            <motion.span 
              animate={{ color: ["#0284c7", "#4f46e5", "#0284c7"] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600"
            >
              Cloud Infrastructure
            </motion.span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Migrate, optimize, and automate your cloud environments. Uptimise IT architects zero-trust, high-availability infrastructure that scales elastically while strictly controlling costs.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all text-lg block">
                Audit My Infrastructure
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 transition-all text-lg flex items-center justify-center gap-2 block">
                Speak to a DevOps Engineer <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INFRASTRUCTURE CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">The Cost of Bad Architecture</h2>
            <p className="text-lg text-slate-600 font-medium">Poorly configured environments don't just slow you down—they bleed capital and risk breaches.</p>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Spiraling Costs", desc: "Over-provisioned servers and unoptimized queries leading to massive AWS bills.", icon: <Coins /> },
              { title: "Downtime", desc: "Single points of failure causing crashes exactly when traffic surges.", icon: <ServerCrash /> },
              { title: "Bottlenecks", desc: "Manual server configs and lack of CI/CD causing releases to take days.", icon: <Activity /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover="hover"
                // variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CLOUD ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-sky-600 font-bold tracking-widest uppercase text-sm font-mono">// Strategic_Architecture</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              High Availability & Fault Tolerance
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We design infrastructure assuming servers will eventually fail. By distributing workloads across Multi-AZs and utilizing stateless services, you stay online always.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Multi-AZ and Multi-Region redundancy.",
                "Elastic Load Balancing & Edge CDN Caching.",
                "Stateless design for instant auto-scaling.",
                "Decoupled databases with real-time replicas."
              ].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-sky-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 font-mono tracking-tighter">Multi-AZ_Topology</h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               <motion.div 
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                className="bg-sky-500/20 border border-sky-400/50 p-4 rounded-xl w-full text-center text-sky-300 font-bold font-mono text-sm uppercase tracking-widest"
               >
                 Elastic Load Balancer
               </motion.div>
               
               <div className="flex justify-between w-2/3">
                 <motion.div animate={{ height: [10, 24, 10], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="w-0.5 bg-slate-600 -rotate-45 transform origin-bottom"></motion.div>
                 <motion.div animate={{ height: [10, 24, 10], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-0.5 bg-slate-600 rotate-45 transform origin-bottom"></motion.div>
               </div>

               <div className="grid grid-cols-2 gap-4 w-full">
                 <motion.div whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center">
                   <Server className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-xs uppercase">Zone A</p>
                   <div className="w-full h-1 bg-emerald-500/30 rounded mt-2 overflow-hidden">
                      <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1/3 h-full bg-emerald-400" />
                   </div>
                 </motion.div>
                 <motion.div whileHover={{ y: -5 }} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center">
                   <Server className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-xs uppercase">Zone B</p>
                   <div className="w-full h-1 bg-emerald-500/30 rounded mt-2 overflow-hidden">
                      <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }} className="w-1/3 h-full bg-emerald-400" />
                   </div>
                 </motion.div>
               </div>

               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-0.5 h-6 bg-slate-600"></motion.div>

               <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 bg-indigo-500/10 border border-indigo-500/30 p-4 rounded-xl w-full justify-center">
                 <Database className="text-indigo-400" />
                 <p className="text-indigo-100 font-bold text-xs uppercase tracking-tighter">Managed RDS (Multi-AZ Data)</p>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Cloud Engineering Services</h2>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "Migration & Replatforming", desc: "Seamlessly move legacy on-premise apps to AWS or GCP with zero data loss.", icon: <Cloud /> },
              { title: "FinOps & Cost Audit", desc: "Identify waste and reduce monthly AWS bills by up to 40% via auto-scaling.", icon: <Coins /> },
              { title: "K8s & Containerization", desc: "Dockerize apps and orchestrate via Kubernetes for ultimate portability.", icon: <Cpu /> },
              { title: "Site Reliability (SRE)", desc: "Advanced observability and incident response to ensure strict SLA compliance.", icon: <Activity /> }
            ].map((srv, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -5 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{srv.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-16 font-medium">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">Elite Tech Stack</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              We leverage modern open-source tooling to ensure your infrastructure is secure, performant, and free from strict vendor lock-in.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {["AWS & Google Cloud", "Kubernetes (EKS/GKE)", "Terraform & Pulumi", "Datadog & Grafana"].map((sec, idx) => (
                 <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                   <Server className="text-sky-400 shrink-0 w-4 h-4" />
                   <span className="text-xs font-black uppercase text-slate-200 font-mono tracking-tighter">{sec}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-4"
          >
            {[
              { t: "Providers", items: ["AWS", "GCP", "Azure"] },
              { t: "Orchestration", items: ["Docker", "K8s", "EKS"] },
              { t: "IaC & Config", items: ["Terraform", "Ansible", "CDK"] },
              { t: "Observability", items: ["Datadog", "ELK", "Grafana"] }
            ].map((stack, i) => (
              <motion.div key={i}  className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl text-center hover:bg-slate-800 transition-colors">
                <h4 className="text-sky-400 font-bold mb-3 uppercase tracking-widest text-[10px]">{stack.t}</h4>
                <ul className="space-y-1 text-slate-300 font-bold text-xs font-mono">
                  {stack.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. MIGRATION PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Migration Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Zero_Downtime_Workflow</p>
        </motion.div>
        
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Audit", desc: "Analysis of servers and network architecture." },
            { step: "02", title: "Design", desc: "Architecting target VPCs and security perimeters." },
            { step: "03", title: "Build", desc: "Provisioning infra entirely via Terraform code." },
            { step: "04", title: "Data Sync", desc: "Securely replicating databases to the cloud." },
            { step: "05", title: "Cutover", desc: "Flipping DNS records for a seamless transition." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-400 transition-colors relative group"
            >
               <div className="text-xs font-black text-sky-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 9. SECURITY */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold tracking-widest uppercase font-mono">
              <ShieldCheck size={14} className="text-sky-400" /> Security_First
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">Zero-Trust <br /><span className="text-sky-400 italic">Architecture.</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              We implement strict network isolation, least-privilege IAM, and encrypted data boundaries to protect your enterprise.
            </p>
            <motion.div whileHover={{ x: 10 }}>
                <Link href="/contact" className="inline-flex items-center text-sky-400 font-bold hover:text-sky-300 transition-colors text-sm uppercase tracking-widest">
                Request Assessment <ArrowRight size={18} className="ml-2" />
                </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 p-8 rounded-[2.5rem] relative z-10 shadow-2xl"
          >
             <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-4 font-mono uppercase tracking-widest text-xs">Security_Controls</h3>
             <ul className="space-y-4">
               {[
                 {t: "VPC Isolation", d: "Subnets shielding databases."},
                 {t: "IAM Protocol", d: "Enforced least-privilege access."},
                 {t: "KMS Encryption", d: "AES-256 data-at-rest protection."}
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="text-sky-400 shrink-0 w-5 h-5 mt-0.5" />
                    <div><span className="text-slate-200 font-bold block text-sm uppercase tracking-tight">{item.t}</span><span className="text-slate-400 text-xs font-medium">{item.d}</span></div>
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Stop Managing <br /><span className="text-sky-600 italic">Servers.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
            Let our DevOps engineers architect, automate, and manage the cloud infrastructure that powers your product.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-sky-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl">
                <Link href="/contact">Optimize My Cloud</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}