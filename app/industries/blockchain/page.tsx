import React from "react";
import Link from "next/link";
import { 
  Hexagon, ShieldAlert, Coins, Link2Off, 
  ArrowRight, CheckCircle2, Network, Code2, 
  Database, Zap, ArrowUpRight, Blocks, 
  Wallet, ShieldCheck, Cpu, LineChart, 
  Globe, Fingerprint,
  Building
} from "lucide-react";

export default function BlockchainIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-orange-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Soft Amber Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-50 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
          <Hexagon size={16} /> Web3 & Blockchain Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Decentralized Future</span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          We engineer secure, high-performance Web3 platforms. From audited smart contracts to scalable dApps and tokenized enterprise ecosystems, we build infrastructure for the next generation of finance.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-700 hover:scale-105 transition-all text-lg">
            Build Your dApp
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Talk to a Web3 Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. BLOCKCHAIN CHALLENGES */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The High Stakes of Web3</h2>
            <p className="text-lg text-slate-500">In Web3, a bug means a permanently drained liquidity pool. Security and architecture cannot be an afterthought.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Smart Contract Exploits", desc: "Reentrancy attacks drain billions from DeFi protocols yearly due to poorly written Solidity code.", icon: <ShieldAlert className="text-orange-600 w-8 h-8" /> },
              { title: "Crippling Gas Fees", desc: "Unoptimized logic makes user transaction fees astronomically high, destroying network adoption.", icon: <Coins className="text-orange-600 w-8 h-8" /> },
              { title: "Web3 UX Friction", desc: "Forcing users through complicated wallet setups stops mainstream consumer adoption dead.", icon: <Link2Off className="text-orange-600 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-200 transition-colors">
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-500 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCKCHAIN ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-orange-600 font-bold tracking-widest uppercase text-sm">Our Architecture Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Gas-Optimized & Mathematically Secure
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We write smart contracts assuming they are always under attack. We utilize rigorous TDD and OpenZeppelin standards to ensure your dApp is safe and cheap to use.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Layer 2 scaling (Polygon, Arbitrum) for sub-cent gas fees.",
                "Strict adherence to OpenZeppelin ERC token standards.",
                "Account Abstraction (ERC-4337) for seedless UX.",
                "Off-chain indexing (The Graph) for lightning-fast frontends."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-600 font-medium text-lg">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden">
             <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10 flex items-center gap-3">
               <Network className="text-orange-500" /> dApp Architecture
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               <div className="w-full flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                 <div className="flex items-center gap-2 text-slate-900 font-bold"><Globe className="text-blue-500" /> React / Next.js Client</div>
                 <div className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">Ethers.js</div>
               </div>
               
               <div className="flex justify-between w-3/4 mx-auto px-4 py-1 text-slate-300"><ArrowRight className="rotate-90" /><ArrowRight className="rotate-90" /></div>

               <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl text-center w-full shadow-sm relative">
                 <Blocks className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                 <p className="text-slate-900 font-bold">Layer 2 Smart Contracts</p>
                 <p className="text-slate-500 text-xs mt-1">Solidity • Arbitrum / Base</p>
               </div>

               <div className="flex justify-center w-full px-4 py-1 text-slate-300"><ArrowRight className="rotate-90" /></div>

               <div className="w-full flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-80">
                 <Database className="text-slate-400" />
                 <div>
                   <p className="text-slate-900 font-bold text-sm">Layer 1 Settlement</p>
                   <p className="text-xs text-slate-500">Ethereum Mainnet</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. WEB3 PLATFORMS WE BUILD */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Web3 Systems We Engineer</h2>
            <p className="text-lg text-slate-500">From institutional DeFi protocols to consumer-facing NFT ecosystems.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "DeFi Protocols", icon: <LineChart size={28} />, desc: "AMMs, staking pools, and decentralized lending platforms." },
              { title: "RWA Tokenization", desc: "Smart contracts for bringing Real Estate and Private Equity onto the chain.", icon: <Building size={28} /> },
              { title: "NFT Marketplaces", icon: <Globe size={28} />, desc: "Custom marketplaces with zero-gas lazy minting and cross-chain bridging." },
              { title: "Web3 Auth", icon: <Wallet size={28} />, desc: "Integrating Account Abstraction for email/social signup without seed phrases." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-orange-400 transition-all group shadow-sm">
                <div className="text-orange-600 mb-6 bg-orange-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform border border-orange-100">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-sm flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Web3 Engineering Stack</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We leverage battle-tested frameworks to ensure smart contracts compile flawlessly and remain perfectly synced.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js", "The Graph", "IPFS", "Next.js"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-700 font-bold rounded-lg text-sm border border-slate-200 hover:bg-orange-50 hover:text-orange-700 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center"><h4 className="text-orange-600 font-bold mb-2">Contracts</h4><p className="text-slate-500 text-sm">Solidity, Rust, Yul</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center"><h4 className="text-orange-600 font-bold mb-2">Networks</h4><p className="text-slate-500 text-sm">Eth, Solana, Polygon</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center"><h4 className="text-orange-600 font-bold mb-2">Frontend</h4><p className="text-slate-500 text-sm">Next.js, Wagmi</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center"><h4 className="text-orange-600 font-bold mb-2">DevOps</h4><p className="text-slate-500 text-sm">Foundry, Slither</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (Smart Contract Auditing) */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900 text-white rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 p-8">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-bold tracking-wide uppercase">
              <ShieldCheck size={16} /> AI-Assisted Security
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Pre-Audited by the <span className="text-orange-500">AI Factory</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              We use autonomous AI agents fine-tuned on thousands of vulnerabilities to analyze our Solidity code in real-time as we write it.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Real-time static analysis for Reentrancy bugs.",
                "Automated gas-optimization suggestions.",
                "Drastically reduced time for final external audits."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-800 border border-slate-700 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center min-h-[300px]">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold flex items-center gap-2"><Code2 className="text-orange-400"/> AI Code Scanner</span>
               <span className="text-emerald-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Passing</span>
             </div>
             <div className="font-mono text-xs space-y-1 bg-slate-950 p-4 rounded-xl border border-slate-700">
                <div className="text-slate-500">// AI Agent verified withdrawal</div>
                <div className="text-blue-300">function <span className="text-yellow-200">withdraw</span>() <span className="text-blue-300">public</span> {"{"}</div>
                <div className="pl-4 text-emerald-300 border-l-2 border-emerald-500 bg-emerald-900/10 py-1">
                   uint amount = balances[msg.sender];<br/>
                   balances[msg.sender] = 0; <span className="text-slate-500 ml-2">// CEI Pattern</span>
                </div>
                <div className="text-blue-300">{"}"}</div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Web3 Delivery Protocol</h2>
          <p className="text-lg text-slate-500">A rigorous pipeline designed to ensure funds are never put at risk.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Tokenomics", desc: "Designing utility, inflation, and burning mechanics." },
            { step: "02", title: "Contracts", desc: "TDD Solidity code on local Foundry nodes." },
            { step: "03", title: "Indexing", desc: "Deploying to Sepolia and setting up The Graph sync." },
            { step: "04", title: "Audit", desc: "Internal AI audit followed by external certifiers." },
            { step: "05", title: "Mainnet", desc: "Immutable deployment and Etherscan verification." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500 transition-colors shadow-sm group">
               <div className="text-sm font-black text-orange-600 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-500 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 border border-orange-100"><Fingerprint size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Absolute Immutability</h3>
            <p className="text-slate-500">Data on L1 blockchains cannot be forged, providing transparency for users and investors.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6 border border-amber-100"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Trustless Execution</h3>
            <p className="text-slate-500">Smart contracts execute automatically, eliminating expensive legal intermediaries.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100"><Globe size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Liquidity</h3>
            <p className="text-slate-500">Tokenize assets to open a global pool of 24/7 liquidity without regional banking blocks.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Web3 Engineering Success</h2>
            <p className="text-slate-500 text-lg">See our secure smart contracts and scalable dApps in action.</p>
          </div>
          <Link href="/case-studies" className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2">
            View Web3 Portfolio <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Real Estate Tokenization", desc: "Fractionalized commercial real estate into ERC-20 tokens with automated dividend payouts.", tags: ["Solidity", "Polygon", "Next.js"] },
            { title: "DeFi Yield Aggregator", desc: "Engineered contracts that route liquidity across Ethereum and Arbitrum securely.", tags: ["Arbitrum", "DeFi", "The Graph"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 hover:border-orange-300 transition-all group cursor-pointer shadow-sm">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">{study.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-orange-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-10 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Deploy Without Fear.</h2>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          In Web3, code is law. Partner with a team that understands the severe precision required to build secure decentralized applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all text-lg">
            Discuss Your Web3 Build
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg">
            Speak with a Developer
          </Link>
        </div>
      </section>

    </div>
  );
}