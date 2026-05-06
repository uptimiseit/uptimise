export default function ProcessSection({ data, isDark = false }: { data: any[], isDark?: boolean }) {
  return (
    <section className={`py-32 px-6 ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-5xl font-black uppercase tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Delivery_Protocol
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-t border-slate-800">
          {data.map((item, idx) => (
            <div key={idx} className="p-10 border-r border-b border-slate-800 hover:bg-blue-600 transition-all group">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] font-mono group-hover:text-white">
                {item.step}
              </span>
              <h3 className={`text-2xl font-black uppercase tracking-tighter mt-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>
              <p className={`text-sm mt-6 leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:text-blue-50`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}