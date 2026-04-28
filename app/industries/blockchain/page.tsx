'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Hexagon, ShieldAlert, Coins, Link2Off, 
  ArrowRight, CheckCircle2, Network, Code2, 
  Database, Zap, ArrowUpRight, Blocks, 
  Wallet, ShieldCheck, Cpu, LineChart, 
  Globe, Fingerprint, Building
} from "lucide-react";

// --- Animation Variants ---
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

// const blockPulse: Variants = {
//   initial: { scale: 1, opacity: 0.8 },
//   animate: { 
//     scale: [1, 1.05, 1],
//     opacity: [0.8, 1, 0.8],
//     transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
//   }
// };

export default function BlockchainIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-orange-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Soft Amber Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-50 blur-[120px] rounded-full -z-10 pointer-events-none"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-6"
        >
          <motion.div 
          // variants={fadeInUp}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Hexagon size={16} className="animate-spin-slow" /> Web3 & Blockchain Engineering
          </motion.div>
          
          <motion.h1
          //  variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Architecting the <br className="hidden md:block" />
            <motion.span 
              animate={{ color: ["#ea580c", "#f59e0b", "#ea580c"] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500"
            >
              Decentralized Future
            </motion.span>
          </motion.h1>
          
          <motion.p 
          // variants={fadeInUp}
           className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We engineer secure, high-performance Web3 platforms. From audited smart contracts to scalable dApps and tokenized enterprise ecosystems, we build infrastructure for the next generation of finance.
          </motion.p>
          
          <motion.div
          //  variants={fadeInUp} 
           className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all text-lg block uppercase tracking-wider">
                Build Your dApp
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Talk to a Web3 Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. BLOCKCHAIN CHALLENGES */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">The High Stakes of Web3</h2>
            <p className="text-lg text-slate-500 font-medium">In Web3, a bug means a permanently drained liquidity pool. Security is the product.</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Smart Contract Exploits", desc: "Reentrancy attacks drain billions from DeFi protocols yearly due to poorly written Solidity code.", icon: <ShieldAlert className="text-orange-600 w-8 h-8" /> },
              { title: "Crippling Gas Fees", desc: "Unoptimized logic makes user transaction fees astronomically high, destroying network adoption.", icon: <Coins className="text-orange-600 w-8 h-8" /> },
              { title: "Web3 UX Friction", desc: "Forcing users through complicated wallet setups stops mainstream consumer adoption dead.", icon: <Link2Off className="text-orange-600 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
              
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tighter">{challenge.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BLOCKCHAIN ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-orange-600 font-bold tracking-widest uppercase text-xs font-mono">// Our_Architecture_Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Gas-Optimized & <br /> Mathematically Secure
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We write smart contracts assuming they are always under attack. We utilize rigorous TDD and OpenZeppelin standards to ensure safety.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Layer 2 scaling (Arbitrum, Base) for sub-cent gas.",
                "Strict adherence to OpenZeppelin ERC standards.",
                "Account Abstraction (ERC-4337) for seedless UX.",
                "Off-chain indexing (The Graph) for high-speed UI."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-600 font-semibold text-lg"
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
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden"
          >
             <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10 flex items-center gap-3 font-mono text-sm uppercase tracking-widest">
               <Network className="text-orange-500" /> dApp_Infrastructure
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               <motion.div 
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="w-full flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm"
               >
                 <div className="flex items-center gap-2 text-slate-900 font-bold"><Globe className="text-blue-500" /> Learner_Interface_UI</div>
                 <div className="text-[10px] font-mono bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">Ethers.js</div>
               </motion.div>
               
               <div className="flex justify-between w-3/4 mx-auto text-slate-300">
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="rotate-90 w-5" /></motion.div>
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}><ArrowRight className="rotate-90 w-5" /></motion.div>
               </div>

               <motion.div 
                // variants={blockPulse}
                initial="initial"
                animate="animate"
                className="bg-orange-50 border border-orange-200 p-6 rounded-2xl text-center w-full shadow-sm relative"
               >
                 <Blocks className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                 <p className="text-slate-900 font-bold font-mono text-xs uppercase tracking-tighter">L2_Smart_Contracts</p>
                 <p className="text-slate-400 text-[10px] mt-1 font-mono">Arbitrum / Polygon_ZkEVM</p>
               </motion.div>

               <div className="flex justify-center w-full text-slate-300">
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}><ArrowRight className="rotate-90 w-5" /></motion.div>
               </div>

               <motion.div 
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                className="w-full flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-80"
               >
                 <Database className="text-slate-400" />
                 <div>
                   <p className="text-slate-900 font-bold text-xs uppercase font-mono">L1_Settlement_Finality</p>
                   <p className="text-[10px] text-slate-500 font-mono">Ethereum_Mainnet::ID_812</p>
                 </div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WEB3 PLATFORMS WE BUILD */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Web3 Build Ecosystem</h2>
            <p className="text-lg text-slate-500 font-medium">From DeFi protocols to institutional RWA tokenization.</p>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "DeFi Protocols", icon: <LineChart size={28} />, desc: "AMMs, staking pools, and decentralized lending platforms." },
              { title: "RWA Tokenization", desc: "Smart contracts for bringing Real Estate onto the chain.", icon: <Building size={28} /> },
              { title: "NFT Marketplaces", icon: <Globe size={28} />, desc: "Custom ecosystems with zero-gas minting and bridging." },
              { title: "Web3 Auth", icon: <Wallet size={28} />, desc: "Account Abstraction for email signup without seed phrases." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                // variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-400 transition-all group"
              >
                <div className="text-orange-600 mb-6 bg-orange-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors border border-orange-100">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tighter uppercase leading-none">{prod.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3.5rem] p-8 md:p-16 shadow-xl flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Web3 Stack</h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We leverage battle-tested frameworks to ensure smart contracts compile flawlessly.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Solidity", "Rust", "Foundry", "Hardhat", "Ethers.js", "The Graph", "IPFS", "Next.js"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-orange-400 transition-colors cursor-default font-mono uppercase tracking-widest">
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
             <motion.div 
            //  variants={fadeInUp} 
             className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm"><h4 className="text-orange-600 font-bold mb-1 text-sm font-mono uppercase tracking-widest">Contracts</h4><p className="text-slate-500 text-xs">Solidity, Rust, Yul</p></motion.div>
             <motion.div 
            //  variants={fadeInUp}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm"><h4 className="text-orange-600 font-bold mb-1 text-sm font-mono uppercase tracking-widest">Networks</h4><p className="text-slate-500 text-xs">Eth, Solana, L2s</p></motion.div>
             <motion.div 
             
            //  variants={fadeInUp} 
             className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm"><h4 className="text-orange-600 font-bold mb-1 text-sm font-mono uppercase tracking-widest">Frontend</h4><p className="text-slate-500 text-xs">Next.js, Wagmi</p></motion.div>
             <motion.div 
            //  variants={fadeInUp}
             className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center shadow-sm"><h4 className="text-orange-600 font-bold mb-1 text-sm font-mono uppercase tracking-widest">DevOps</h4><p className="text-slate-500 text-xs">Foundry, Slither</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900 text-white rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 p-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[10px] font-black tracking-[0.2em] uppercase font-mono">
              <ShieldCheck size={14} /> AI_Assisted_Security
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase tracking-tighter">
              Pre-Audited by the <br /><span className="text-orange-500 italic">AI Factory</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              We use autonomous AI agents fine-tuned on thousands of vulnerabilities to analyze our code in real-time.
            </p>
            <ul className="space-y-4 pt-4">
              {["Real-time analysis for Reentrancy bugs.", "Automated gas-optimization suggestions.", "Reduced time for final external audits."].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-300 font-medium italic">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-slate-800 border border-slate-700 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center min-h-[300px]"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">AI_Code_Scanner</span>
               <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● PASSING_v3.2</span>
             </div>
             <div className="font-mono text-[10px] space-y-1 bg-slate-950 p-6 rounded-xl border border-slate-700 overflow-hidden relative">
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="space-y-1"
                >
                  <div className="text-slate-500">// AI_Agent verified balance logic</div>
                  <div className="text-blue-300">function <span className="text-yellow-200">withdraw</span>() <span className="text-blue-300">public</span> {"{"}</div>
                  <div className="pl-4 text-emerald-300 border-l-2 border-emerald-500 bg-emerald-900/10 py-2">
                    uint amount = balances[msg.sender];<br/>
                    balances[msg.sender] = 0; <span className="text-slate-500 ml-2">// CEI Pattern</span>
                  </div>
                  <div className="text-blue-300">{"}"}</div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Web3 Delivery Protocol</h2>
          <p className="text-lg text-slate-500 font-medium italic">// Immutable_Logic_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Tokenomics", desc: "Designing utility, inflation, and burning mechanics." },
            { step: "02", title: "Contracts", desc: "TDD Solidity code on local Foundry nodes." },
            { step: "03", title: "Indexing", desc: "Setting up The Graph sync and L2 deployment." },
            { step: "04", title: "Security", desc: "Internal AI audit followed by external certifiers." },
            { step: "05", title: "Mainnet", desc: "Immutable deployment and Etherscan verification." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              // variants={fadeInUp}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-orange-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-[10px] font-black text-orange-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className=" px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Deploy <br /><span className="text-orange-600 italic">Without Fear.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            In Web3, code is law. Partner with a team that understands the precision required to build secure decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-10 py-5 bg-orange-600 text-white font-black rounded-xl shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all uppercase tracking-[0.2em] text-xs block">
                Discuss Your Web3 Build
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-xl hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs block">
                Speak with an Architect
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}