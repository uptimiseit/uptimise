const PhilosophyComparison = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <h2 className="text-5xl font-black font-header tracking-tight text-slate-950">
              Why Traditional <br /> Models Struggle.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Large teams introduce **Coordination Overhead**. When you have separate layers for QA, DevOps, and Backend, the "Tax of Communication" slows development to a crawl.
            </p>
            
            <div className="space-y-4">
              {['Fragmented Workflows', 'Sequential Coordination', 'High Operational Complexity'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400 line-through font-mono text-sm uppercase font-bold">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 rounded-[3rem] bg-blue-600 text-white shadow-2xl shadow-blue-200">
             <h3 className="text-3xl font-black mb-6">The 100× Multiplier</h3>
             <div className="space-y-6">
                {[
                  { title: "Product-Focused", desc: "Engineers focus on solving problems, not writing boilerplate." },
                  { title: "AI-Augmented", desc: "Agents handle documentation, scaffolding, and deployment." },
                  { title: "Small Elite Squads", desc: "Radically reduced overhead and faster iteration cycles." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{point.title}</h4>
                      <p className="text-blue-100 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophyComparison;