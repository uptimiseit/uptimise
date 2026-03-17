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
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-orange-500/30 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Decentralized Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-amber-400/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <Hexagon size={16} /> Web3 & Blockchain Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
          Architecting the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Decentralized Future</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We engineer secure, high-performance Web3 platforms. From audited smart contracts on Layer 1 blockchains to scalable dApps and tokenized enterprise ecosystems, we build infrastructure that handles millions in Total Value Locked (TVL).
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-105 transition-all text-lg">
            Build Your dApp
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all text-lg flex items-center justify-center gap-2">
            Talk to a Web3 Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. BLOCKCHAIN CHALLENGES */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">The High Stakes of Web3</h2>
            <p className="text-lg text-slate-400">In traditional software, a bug requires a quick patch. In Web3, a bug means a permanently drained liquidity pool. Security and architecture cannot be an afterthought.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Smart Contract Exploits", desc: "Reentrancy attacks and flash loan exploits drain billions from DeFi protocols every year due to unaudited, poorly written Solidity code.", icon: <ShieldAlert className="text-red-400 w-8 h-8" /> },
              { title: "Crippling Gas Fees", desc: "Unoptimized logic in your smart contracts can make user transaction fees astronomically high, destroying network adoption.", icon: <Coins className="text-red-400 w-8 h-8" /> },
              { title: "Web3 UX Friction", desc: "Forcing users through complicated wallet setups and confusing seed phrase management stops mainstream consumer adoption dead in its tracks.", icon: <Link2Off className="text-red-400 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm hover:border-red-900/50 transition-colors">
                <div className="mb-6 bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-red-500/20">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-slate-400 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCKCHAIN ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm">Our Architecture Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Gas-Optimized & Mathematically Secure
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We write smart contracts assuming they are always under attack. We utilize rigorous test-driven development, open-zeppelin security standards, and Layer 2 scaling solutions to ensure your dApp is both safe and cheap to use.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Layer 2 scaling (Polygon, Arbitrum) for sub-cent gas fees.",
                "Strict adherence to OpenZeppelin ERC token standards.",
                "Account Abstraction (ERC-4337) for seedless, gasless UX.",
                "Off-chain indexing (The Graph) for lightning-fast frontends."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium text-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
             {/* Abstract Web3 Node CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Network className="text-amber-400" /> dApp Architecture
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               
               {/* Frontend */}
               <div className="w-full flex items-center justify-between bg-slate-950 border border-slate-700 p-4 rounded-xl">
                 <div className="flex items-center gap-2 text-white font-bold"><Globe className="text-blue-400" /> React / Next.js Client</div>
                 <div className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-500/30">Ethers.js</div>
               </div>
               
               <div className="flex justify-between w-3/4 mx-auto px-4 py-1">
                 <ArrowRight className="text-slate-500 rotate-90" />
                 <ArrowRight className="text-slate-500 rotate-90" />
               </div>

               {/* Smart Contract / L2 Layer */}
               <div className="bg-orange-900/20 border border-orange-500/50 p-6 rounded-2xl text-center w-full shadow-[0_0_30px_rgba(249,115,22,0.1)] relative">
                 <div className="absolute -left-1 -top-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                 <Blocks className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                 <p className="text-white font-bold">Layer 2 Smart Contracts</p>
                 <p className="text-slate-400 text-xs mt-1">Solidity • Arbitrum / Polygon</p>
               </div>

               <div className="flex justify-center w-full px-4 py-1">
                 <ArrowRight className="text-slate-500 rotate-90" />
               </div>

               {/* Layer 1 Settlement */}
               <div className="w-full flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-700 opacity-80">
                 <Database className="text-slate-400" />
                 <div>
                   <p className="text-white font-bold text-sm">Layer 1 Settlement</p>
                   <p className="text-xs text-slate-500">Ethereum Mainnet (Immutability)</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. WEB3 PLATFORMS WE BUILD */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">Web3 Systems We Engineer</h2>
            <p className="text-lg text-slate-400">From institutional DeFi protocols to consumer-facing NFT ecosystems, we build across the entire decentralized landscape.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "DeFi Protocols", icon: <LineChart size={28} />, desc: "Automated Market Makers (AMMs), staking pools, and decentralized lending platforms." },
              { title: "RWA Tokenization", desc: "Smart contracts for bringing Real World Assets (real estate, private equity) onto the blockchain securely.", icon: <Building size={28} /> },
              { title: "NFT Marketplaces", icon: <Globe size={28} />, desc: "Custom ERC-721/1155 marketplaces with zero-gas lazy minting and cross-chain bridging." },
              { title: "Web3 Wallets & Auth", icon: <Wallet size={28} />, desc: "Integrating Account Abstraction to allow users to sign up with email/socials without needing a seed phrase." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-orange-500 transition-colors group">
                <div className="text-orange-400 mb-6 bg-orange-950/50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform border border-orange-900">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{prod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">The Web3 Engineering Stack</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We leverage battle-tested frameworks to ensure your smart contracts compile flawlessly, and we use blazing-fast indexers to keep your frontend perfectly synced with the blockchain.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js", "Wagmi", "The Graph", "IPFS", "Next.js"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-950 text-amber-300 font-bold rounded-lg text-sm border border-orange-900/50 hover:bg-orange-900 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-orange-400 font-bold mb-2">Smart Contracts</h4><p className="text-slate-500 text-sm">Solidity, Rust, Yul</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-orange-400 font-bold mb-2">L1 / L2 Networks</h4><p className="text-slate-500 text-sm">Ethereum, Solana, Polygon, Base</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-orange-400 font-bold mb-2">Web3 Frontend</h4><p className="text-slate-500 text-sm">Next.js, Wagmi, WalletConnect</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-orange-400 font-bold mb-2">Testing & DevOps</h4><p className="text-slate-500 text-sm">Foundry, Hardhat, Slither</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (Smart Contract Auditing) */}
      <section className="py-24 px-6 relative overflow-hidden border-y border-slate-800/50 bg-[#020617]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-bold tracking-wide uppercase">
              <ShieldCheck size={16} /> AI-Assisted Security
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Pre-Audited by the <span className="text-orange-500">AI Factory</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Smart contract audits are incredibly expensive and take months. Uptimise IT utilizes autonomous AI agents fine-tuned on thousands of known Web3 vulnerabilities to analyze our Solidity code in real-time as we write it.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Real-time static analysis for Reentrancy and Overflow bugs.",
                "Automated gas-optimization suggestions during compilation.",
                "Drastically reduced time and cost for final third-party audits."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(249,115,22,0.1)] flex flex-col justify-center min-h-[300px] relative">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold flex items-center gap-2"><Code2 className="text-orange-400"/> AI Code Scanner</span>
               <span className="text-emerald-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Passing</span>
             </div>
             
             <div className="font-mono text-sm space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-700">
                <div className="text-slate-500">// Withdrawal function</div>
                <div className="text-blue-300">function <span className="text-yellow-200">withdraw</span>() <span className="text-blue-300">public</span> {"{"}</div>
                <div className="pl-4 text-emerald-300 border-l-2 border-emerald-500 bg-emerald-900/20 py-1">
                   require(balances[msg.sender] {'>'} 0);<br/>
                   uint amount = balances[msg.sender];<br/>
                   balances[msg.sender] = 0; <span className="text-slate-500 ml-2">// CEI Pattern Enforced</span>
                </div>
                <div className="pl-4 text-slate-300">
                   (bool success, ) = msg.sender.call{"{value: amount}"}("");<br/>
                   require(success);
                </div>
                <div className="text-blue-300">{"}"}</div>
             </div>
             <div className="mt-4 bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-xl flex items-center gap-3">
               <ShieldCheck className="text-emerald-400" />
               <p className="text-emerald-100 text-xs font-bold">AI Agent: Checks-Effects-Interactions pattern verified. Zero reentrancy detected.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">Web3 Delivery Protocol</h2>
          <p className="text-lg text-slate-400">A rigorous, mathematically proven delivery pipeline designed to ensure funds are never put at risk.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Tokenomics", desc: "Designing mathematical models for token utility, inflation, and burning mechanics." },
            { step: "02", title: "Smart Contracts", desc: "Writing test-driven Solidity/Rust code on local Hardhat/Foundry nodes." },
            { step: "03", title: "Testnet & Indexing", desc: "Deploying to Goerli/Sepolia and setting up The Graph for frontend sync." },
            { step: "04", title: "Security Audit", desc: "Internal AI audit followed by handoff to external certifiers (e.g., CertiK)." },
            { step: "05", title: "Mainnet Launch", desc: "Deploying immutable contracts and verifying source code on Etherscan." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-orange-500 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
               <p className="text-sm text-slate-400 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-orange-900/30 text-orange-400 rounded-full flex items-center justify-center mb-6 border border-orange-500/30"><Fingerprint size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Absolute Immutability</h3>
            <p className="text-slate-400">Data recorded on Layer 1 blockchains cannot be altered, forged, or deleted, providing unparalleled transparency for users and investors.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-amber-900/30 text-amber-400 rounded-full flex items-center justify-center mb-6 border border-amber-500/30"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Trustless Execution</h3>
            <p className="text-slate-400">Smart contracts execute automatically when conditions are met, eliminating the need for expensive third-party escrow or legal intermediaries.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center mb-6 border border-blue-500/30"><Globe size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Global Liquidity</h3>
            <p className="text-slate-400">By tokenizing assets, you instantly open your platform to a global pool of 24/7 Web3 liquidity without regional banking restrictions.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Web3 Engineering Success</h2>
            <p className="text-slate-400 text-lg">See how we have architected secure smart contracts and scalable dApps for Web3 pioneers.</p>
          </div>
          <Link href="/case-studies" className="text-orange-400 font-bold hover:text-orange-300 flex items-center gap-2">
            View Web3 Portfolio <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Real Estate Tokenization (RWA)", desc: "Architected a Polygon-based platform that fractionalizes commercial real estate into ERC-20 tokens, featuring automated dividend payouts via USDC stablecoins.", tags: ["Solidity", "Polygon", "Next.js"] },
            { title: "DeFi Yield Aggregator", desc: "Engineered complex smart contracts that automatically route user liquidity to the highest-yielding pools across Ethereum and Arbitrum securely.", tags: ["Arbitrum", "DeFi", "The Graph"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 hover:border-orange-500/50 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-orange-300 bg-orange-900/30 px-3 py-1 rounded-full border border-orange-500/30">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">{study.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-orange-400 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Deploy Without Fear.</h2>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          In Web3, code is law. Partner with a technical team that understands the severe mathematical precision required to build secure decentralized applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-105 transition-all text-lg">
            Discuss Your Web3 Build
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all text-lg">
            Speak with a Smart Contract Dev
          </Link>
        </div>
      </section>

    </div>
  );
}