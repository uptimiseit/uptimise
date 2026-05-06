import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function CTASection({ data }: { data: any }) {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]">
          {data.heading} <br />
          <span className="text-blue-600">{data.accent}</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link href="/contact" className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-200 flex items-center gap-3">
            Initialize_Project <HiOutlineArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}