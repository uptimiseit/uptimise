export default function HeroSection({ data }: { data: any }) {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-6 max-w-4xl">
        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
          {data.badge}
        </span>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
          {data.heading} <br />
          <span className="text-blue-600 italic">{data.accent}</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
  );
}