import React from "react";
import Link from "next/link";
import { 
  Cloud, Server, ShieldAlert, Coins, 
  Activity, ArrowRight, Network, Database, 
  Lock, CheckCircle2, Cpu, ArrowUpRight, 
  ServerCrash, GitMerge, Terminal, ShieldCheck
} from "lucide-react";

export default function CloudInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Cloud Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-bold tracking-wide uppercase mb-4">
          <Cloud size={16} /> Enterprise Cloud Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Scalable, Secure, & Resilient <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Cloud Infrastructure</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Migrate, optimize, and automate your cloud environments. Uptimise IT architects zero-trust, high-availability infrastructure that scales elastically while strictly controlling AWS and GCP compute costs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-600/20 hover:bg-sky-700 hover:scale-105 transition-all text-lg">
            Audit My Infrastructure
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Speak to a DevOps Engineer <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. INFRASTRUCTURE CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Cost of Bad Architecture</h2>
            <p className="text-lg text-slate-600">Poorly configured cloud environments don't just slow down your developers—they bleed venture capital and expose you to catastrophic data breaches.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Spiraling Cloud Costs", desc: "Over-provisioned servers, orphaned volumes, and unoptimized queries leading to massive, unpredictable AWS bills.", icon: <Coins className="text-red-500 w-8 h-8" /> },
              { title: "Downtime & Instability", desc: "Single points of failure and lack of auto-scaling causing your application to crash exactly when you get a surge of traffic.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Deployment Bottlenecks", desc: "Manual server configurations and lack of CI/CD pipelines causing releases to take days instead of minutes.", icon: <Activity className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLOUD ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-sky-600 font-bold tracking-widest uppercase text-sm">Strategic Architecture</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Designing for High Availability & Fault Tolerance
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We design infrastructure assuming that servers will eventually fail. By distributing your workloads across multiple Availability Zones (AZs) and utilizing stateless microservices, your application remains online even during major AWS outages.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Multi-AZ and Multi-Region redundancy.",
                "Elastic Load Balancing & Edge CDN Caching.",
                "Stateless application design for instant auto-scaling.",
                "Decoupled databases with real-time read replicas."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-sky-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             {/* Abstract CSS Architecture Diagram */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Multi-AZ Infrastructure</h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               {/* Load Balancer */}
               <div className="bg-sky-500/20 border border-sky-400/50 p-4 rounded-xl w-full text-center text-sky-300 font-bold">Elastic Load Balancer</div>
               
               {/* Arrows */}
               <div className="flex justify-between w-2/3 px-4">
                 <div className="w-0.5 h-6 bg-slate-600 -rotate-45 transform origin-bottom"></div>
                 <div className="w-0.5 h-6 bg-slate-600 rotate-45 transform origin-bottom"></div>
               </div>

               {/* Availability Zones */}
               <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center">
                   <Server className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-sm">Zone A (Active)</p>
                   <p className="text-slate-400 text-xs mt-1">Web / App Tier</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center">
                   <Server className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-sm">Zone B (Active)</p>
                   <p className="text-slate-400 text-xs mt-1">Web / App Tier</p>
                 </div>
               </div>

               <div className="w-0.5 h-6 bg-slate-600"></div>

               {/* Database Layer */}
               <div className="flex items-center gap-4 bg-slate-800 border border-indigo-500/30 p-4 rounded-xl w-full justify-center">
                 <Database className="text-indigo-400" />
                 <p className="text-white font-bold text-sm">Managed Relational Database (Multi-AZ)</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. INFRASTRUCTURE SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Infrastructure Services</h2>
            <p className="text-lg text-slate-600">Comprehensive cloud engineering covering everything from initial migration to 24/7 proactive monitoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Cloud Migration & Replatforming", desc: "Seamlessly migrate legacy on-premise applications to AWS or GCP with zero data loss and minimal downtime.", icon: <Cloud size={24} /> },
              { title: "FinOps & Cost Optimization", desc: "Audit your current cloud usage to identify waste, implement auto-scaling, and reduce your monthly AWS bill by up to 40%.", icon: <Coins size={24} /> },
              { title: "Containerization & Kubernetes", desc: "Package your applications into Docker containers and orchestrate them via Kubernetes for ultimate portability and scale.", icon: <Cpu size={24} /> },
              { title: "Site Reliability Engineering (SRE)", desc: "Implement advanced observability, logging, and incident response protocols to ensure strict SLA compliance.", icon: <Activity size={24} /> }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{srv.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-16">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOUD PLATFORMS (Tech Stack) */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Elite Technology Stack
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We leverage enterprise-grade cloud providers and modern open-source tooling to ensure your infrastructure is secure, performant, and free from strict vendor lock-in.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               {[
                 "AWS & Google Cloud", 
                 "Kubernetes (EKS/GKE)", 
                 "Terraform & Pulumi", 
                 "Datadog & Prometheus"
               ].map((sec, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                   <Server className="text-sky-400 shrink-0 w-5 h-5" />
                   <span className="text-sm font-semibold text-slate-200">{sec}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <h4 className="text-sky-400 font-bold mb-4 uppercase tracking-wider text-sm">Providers</h4>
              <ul className="space-y-2 text-slate-300 font-medium text-sm">
                <li>Amazon Web Services</li><li>Google Cloud Platform</li><li>Microsoft Azure</li>
              </ul>
            </div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <h4 className="text-sky-400 font-bold mb-4 uppercase tracking-wider text-sm">Orchestration</h4>
              <ul className="space-y-2 text-slate-300 font-medium text-sm">
                <li>Docker</li><li>Kubernetes</li><li>Amazon ECS / EKS</li>
              </ul>
            </div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <h4 className="text-sky-400 font-bold mb-4 uppercase tracking-wider text-sm">IaC & Config</h4>
              <ul className="space-y-2 text-slate-300 font-medium text-sm">
                <li>Terraform</li><li>AWS CloudFormation</li><li>Ansible</li>
              </ul>
            </div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center">
              <h4 className="text-sky-400 font-bold mb-4 uppercase tracking-wider text-sm">Observability</h4>
              <ul className="space-y-2 text-slate-300 font-medium text-sm">
                <li>Datadog</li><li>Grafana</li><li>ELK Stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVOPS AUTOMATION */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-4">
            <GitMerge size={16} /> CI/CD & Automation
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Deploy 50x Faster with DevOps</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Stop relying on manual server deployments. We implement rigorous Continuous Integration and Continuous Deployment (CI/CD) pipelines so your engineers can merge code safely and deploy to production in minutes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["Infrastructure as Code (IaC)", "GitHub Actions", "GitLab CI", "Automated Rollbacks", "Blue/Green Deployments", "Automated Security Scanning (DevSecOps)"].map(tech => (
            <span key={tech} className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-slate-800 font-bold hover:border-indigo-400 hover:text-indigo-700 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 7. MIGRATION PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Zero-Downtime Migration Process</h2>
            <p className="text-lg text-slate-600">A meticulous, highly tested protocol designed to transition your legacy workloads to the cloud without disrupting your users.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Audit", desc: "Deep analysis of existing servers, dependencies, and network architecture." },
              { step: "02", title: "Design", desc: "Architecting the target cloud environment and security perimeters (VPCs)." },
              { step: "03", title: "Build (IaC)", desc: "Provisioning the new infrastructure entirely via Terraform/code." },
              { step: "04", title: "Data Sync", desc: "Securely replicating live databases to the new cloud environment." },
              { step: "05", title: "Cutover", desc: "Flipping DNS records for a seamless, unnoticeable transition." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-400 transition-colors relative overflow-hidden group">
                <div className="text-sm font-black text-sky-600 mb-3 uppercase tracking-wider">{process.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INFRASTRUCTURE BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Impact of Elite Engineering</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Activity className="text-sky-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">99.99% SLA</h4>
             <p className="text-slate-600 text-sm">Eliminate revenue-destroying downtime with highly available, self-healing architecture.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Coins className="text-sky-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Cost Efficiency</h4>
             <p className="text-slate-600 text-sm">Only pay for the compute you actually use through intelligent auto-scaling policies.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Terminal className="text-sky-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Rapid Releases</h4>
             <p className="text-slate-600 text-sm">Empower developers to ship features multiple times a day safely via automated CI/CD.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Network className="text-sky-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Global Reach</h4>
             <p className="text-slate-600 text-sm">Serve users across the globe with ultra-low latency using edge computing and CDNs.</p>
           </div>
        </div>
      </section>

      {/* 9. SECURITY PRACTICES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Zero-Trust Security & Compliance
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We assume the network is inherently hostile. Our cloud architectures implement strict network isolation, least-privilege IAM, and encrypted data boundaries to protect your enterprise from modern cyber threats.
            </p>
            <Link href="/contact" className="inline-flex items-center text-sky-400 font-bold hover:text-sky-300 transition-colors">
              Request Security Assessment <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/20 to-indigo-600/20 blur-3xl rounded-full"></div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative z-10 shadow-2xl backdrop-blur-sm">
               <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 mb-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                 <Lock className="text-sky-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Infrastructure Security Controls</h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3"><ShieldCheck className="text-sky-400 shrink-0 w-5 h-5 mt-0.5" /><div><span className="text-slate-200 font-semibold block">VPC Network Isolation</span><span className="text-slate-400 text-sm">Private subnets and NAT gateways shielding databases from public internet.</span></div></li>
                 <li className="flex items-start gap-3"><ShieldCheck className="text-sky-400 shrink-0 w-5 h-5 mt-0.5" /><div><span className="text-slate-200 font-semibold block">Identity & Access (IAM)</span><span className="text-slate-400 text-sm">Strict least-privilege access enforced via AWS IAM and SSO integrations.</span></div></li>
                 <li className="flex items-start gap-3"><ShieldCheck className="text-sky-400 shrink-0 w-5 h-5 mt-0.5" /><div><span className="text-slate-200 font-semibold block">KMS Encryption</span><span className="text-slate-400 text-sm">Military-grade AES-256 encryption applied to data at rest and in transit.</span></div></li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Managing Servers.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Focus on building your product. Let our DevOps engineers architect, automate, and manage the cloud infrastructure that powers it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-sky-600 text-white font-bold rounded-xl shadow-xl shadow-sky-600/20 hover:bg-sky-700 hover:scale-105 transition-all text-lg">
            Optimize My Cloud
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Discuss Migration
          </Link>
        </div>
      </section>

    </div>
  );
}