import { Cpu, ShieldCheck, TrendingUp } from "lucide-react";

const MultiplierMap = () => {
  return (
    <section className="bg-slate-50 py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-header tracking-tight mb-6">
          AI as an <span className="text-blue-600">Engineering Multiplier.</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          AI doesn't replace developers. It removes the manual labor, allowing engineers to operate at 100× their natural capacity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Cpu />, title: "Code Scaffolding", desc: "Instant generation of API structures and UI components." },
          { icon: <ShieldCheck />, title: "Auto-Testing", desc: "Autonomous regression and edge-case validation." },
          { icon: <TrendingUp />, title: "Infra-DevOps", desc: "Zero-touch CI/CD and container orchestration." }
        ].map((box, i) => (
          <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group">
             <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               {box.icon}
             </div>
             <h4 className="text-2xl font-black mb-4">{box.title}</h4>
             <p className="text-slate-500 text-sm leading-relaxed">{box.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default MultiplierMap;