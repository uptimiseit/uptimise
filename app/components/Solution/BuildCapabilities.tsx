// import { DynamicIcon } from "../navigation/DynamicIcon";

import { DynamicIcon } from "../Navbar/DynamicIcon";

export default function BuildCapabilities({ data }: { data: any[] }) {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">
            What_We_Initialize
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 hover:border-blue-600 transition-all group">
              <div className="text-slate-400 group-hover:text-blue-600 transition-colors mb-6">
                <DynamicIcon name={item.icon} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-wider opacity-60">
                // System_Module_{idx + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}