"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Layers, Server, Code2, HelpCircle } from "lucide-react";

// Data for the comparison, adapted for IT services based on the structure of image_0.png
const COMPARISON_DATA = [
  {
    layer: "Frontend & UX (App/Web)",
    uptimiseit: {
      price: "₹45,000",
      strike: "₹80,000",
      features: ["Modern Frameworks (Next.js/React)", "Responsive & SEO Optimized", "Flat Project Fee"],
      icon: <Code2 className="w-6 h-6 text-emerald-600" />,
    },
    competitor: {
      price: "₹80,000+",
      features: ["Outdated Templates/WebView", "Poor UX & Performance", "Hidden Design Fees", "Hourly Billing Uncertainty"],
      icon: <Code2 className="w-6 h-6 text-red-500 opacity-50" />,
    },
  },
  {
    layer: "Backend & Logic (API)",
    uptimiseit: {
      price: "₹25,000",
      strike: "₹40,000",
      features: ["Scalable Node.js/Go", "Clean, Maintainable Code", "Secure Architecture"],
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
    },
    competitor: {
      price: "₹40,000+",
      features: ["Legacy PHP/Spaghetti Code", "Security Vulnerabilities", "Expensive Maintenance Contracts", "Vendor Lock-in"],
      icon: <Layers className="w-6 h-6 text-red-500 opacity-50" />,
    },
  },
  {
    layer: "Infrastructure & DevOps",
    uptimiseit: {
      price: "₹10,000/yr",
      strike: null, // No strikethrough for this one
      features: ["Auto-Scaling Cloud (AWS/Vercel)", "Automated CI/CD Pipelines", "24/7 Monitoring Included"],
      icon: <Server className="w-6 h-6 text-emerald-600" />,
    },
    competitor: {
      price: "₹?? (Variable)",
      features: ["Unreliable Shared Hosting", "Manual Deployments & Downtime", "Unexpected Surge Costs", "No Uptime Guarantee"],
      icon: <Server className="w-6 h-6 text-red-500 opacity-50" />,
    },
  },
];

const FeatureList = ({ features, isGood }: { features: string[]; isGood: boolean }) => (
  <ul className="mt-2 space-y-1.5">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 font-medium">
        {isGood ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        ) : (
          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
        )}
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const StackLayer = ({ data, layerName, isGood }: { data: any; layerName: string; isGood: boolean }) => {
  return (
    <div className="relative flex items-center py-8 border-b border-slate-100 last:border-0">
      {/* Price & Features Section */}
      <div className={`flex-1 ${isGood ? "text-left pr-8" : "text-right pl-8 order-2"}`}>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{layerName}</h4>
        <div className="flex items-baseline gap-2 mb-1">
          <span className={`text-3xl md:text-4xl font-extrabold ${isGood ? "text-slate-800" : "text-slate-700"}`}>
            {data.price}
          </span>
        </div>
        {data.strike && (
          <span className="text-sm text-slate-400 line-through font-semibold block mb-2">
            {data.strike}
          </span>
        )}
        <FeatureList features={data.features} isGood={isGood} />
      </div>

      {/* Visual Stack Representation (Server Rack Metaphor) */}
      <div className={`relative z-10 ${isGood ? "order-2" : "order-1"}`}>
        {/* Connecting Line */}
        <div
          className={`absolute top-1/2 h-px w-8 bg-current ${
            isGood ? "right-full text-emerald-300" : "left-full text-red-300"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 w-2 h-2 rounded-full bg-current transform -translate-y-1/2 ${
            isGood ? "right-full -translate-x-1 text-emerald-500" : "left-full translate-x-1 text-red-500"
          }`}
        ></div>

        {/* The Stack "Block" */}
        <div
          className={`w-24 h-32 md:w-32 md:h-40 rounded-lg border-2 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 ${
            isGood
              ? "bg-emerald-50 border-emerald-200"
              : "bg-red-50 border-red-200 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"
          }`}
        >
          <div className="p-3 bg-white rounded-full shadow-sm mb-2">{data.icon}</div>
          {/* Internal "server slots" visual */}
          <div className="flex flex-col gap-1.5 w-3/5 opacity-40">
            <div className={`h-1.5 rounded-full ${isGood ? "bg-emerald-300" : "bg-red-300"}`}></div>
            <div className={`h-1.5 rounded-full ${isGood ? "bg-emerald-300" : "bg-red-300"}`}></div>
            <div className={`h-1.5 rounded-full ${isGood ? "bg-emerald-300" : "bg-red-300"}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProfessionalComparison() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            We Are Your <span className="text-emerald-600">Tech Saviours!</span>
          </h2>
          <div className="inline-block bg-yellow-100 border border-yellow-300 rounded-full px-6 py-2">
            <p className="text-sm md:text-base font-semibold text-yellow-800 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              We save you from hidden fees & technical debt.
            </p>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Uptimiseit Card (Good) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border-t-4 border-emerald-500 overflow-hidden relative z-10"
          >
            <div className="p-6 bg-emerald-50/50 border-b border-emerald-100 text-center">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                Uptimiseit
              </h3>
            </div>
            <div className="p-6 md:p-10">
              {COMPARISON_DATA.map((item, index) => (
                <StackLayer key={index} data={item.uptimiseit} layerName={item.layer} isGood={true} />
              ))}
            </div>
          </motion.div>

          {/* Competitor Card (Bad) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border-t-4 border-red-400 overflow-hidden relative opacity-95"
          >
            <div className="p-6 bg-red-50/50 border-b border-red-100 text-center">
              <h3 className="text-2xl font-bold text-slate-700 flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                Typical Agency
              </h3>
            </div>
            <div className="p-6 md:p-10 relative">
              {/* Subtle messy pattern overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 pointer-events-none"></div>
              {COMPARISON_DATA.map((item, index) => (
                <StackLayer key={index} data={item.competitor} layerName={item.layer} isGood={false} />
              ))}
            </div>
          </motion.div>
        </div>
        <p className="text-right text-xs text-slate-500 mt-4 font-medium">*taxes extra, as applicable</p>
      </div>
    </section>
  );
}