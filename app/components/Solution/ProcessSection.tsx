export default function ProcessSection({ data }: { data: any[] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        {data.map((step, idx) => (
          <div key={idx} className="relative p-10 border border-slate-100 group hover:bg-slate-900 transition-colors">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest font-mono group-hover:text-blue-400">
              {step.step}
            </span>
            <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 mt-4 group-hover:text-white">
              {step.title}
            </h3>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed group-hover:text-slate-400">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}