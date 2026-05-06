// import { DynamicIcon } from "../navigation/DynamicIcon";

import { HiOutlineCheckBadge } from "react-icons/hi2";
import { DynamicIcon } from "../Navbar/DynamicIcon";

export default function SuccessBenefits({ data }: { data: any[] }) {
  return (
    <section className="py-24 bg-slate-950 text-white rounded-[3rem] my-10 mx-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <HiOutlineCheckBadge size={400} />
      </div>
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-16">
          Engineered_for_Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.map((benefit, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400">
                <DynamicIcon name={benefit.icon} />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight">{benefit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}