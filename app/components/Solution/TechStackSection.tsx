export default function TechStackSection({ data }: { data: string[] }) {
  // Filter out any empty strings from your admin input
  const tags = data.filter(tag => tag.trim() !== "");

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mr-4">
          // Tech_Stack:
        </span>
        {tags.map((tech, idx) => (
          <div key={idx} className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-widest transition-all hover:border-blue-600 hover:text-blue-600">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}