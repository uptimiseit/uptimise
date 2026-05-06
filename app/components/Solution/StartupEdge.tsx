export default function StartupEdge({ data }: { data: any }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            {data.heading}
          </h2>
          <p className="text-blue-100 text-lg font-medium leading-relaxed">
            {data.description}
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.features.map((feature: any, idx: number) => (
            <div key={idx} className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <h4 className="font-black uppercase text-sm tracking-tight">{feature.title}</h4>
              <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-2 leading-relaxed font-bold">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}