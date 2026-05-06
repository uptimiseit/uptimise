// import { DynamicIcon } from "../navigation/DynamicIcon";

import { DynamicIcon } from "../Navbar/DynamicIcon";

export default function ChallengesSection({ data }: { data: any[] }) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <DynamicIcon name={item.icon} />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">
              {item.title}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}