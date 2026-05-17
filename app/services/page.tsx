import Link from "next/link";
import { SERVICES } from "../../lib/services-data";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Services · Apptriangle",
  description: "Explore Apptriangle's full catalog of technology services — from staff augmentation to AI/ML and cybersecurity.",
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-[#040b18] text-white">
      <SiteNav />

      <section className="relative overflow-hidden px-[5vw] pb-24 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-20 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(208,239,255,0.4) 0%, rgba(208,239,255,0.12) 35%, rgba(0,34,66,0) 70%)",
            filter: "blur(20px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D0EFFF]/30 bg-[#D0EFFF]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D0EFFF]">
            Services
          </div>
          <h1
            className="mb-5 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Innovating Tomorrow. <span className="text-[#D0EFFF]">Building Today.</span>
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            Empowering businesses with next-gen technology solutions — from custom software to AI-driven platforms, we engineer your digital success.
          </p>
        </div>
      </section>

      <section className="px-[5vw] pb-32">
        <div className="mx-auto grid max-w-[72rem] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 p-7 transition hover:-translate-y-1 hover:border-[#D0EFFF]/40 ${
                i % 5 === 1 ? "bg-[#002242] shadow-[0_0_50px_rgba(208,239,255,0.12)]" : "bg-[#0C2242]/50"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D0EFFF]/10 text-[#D0EFFF]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span className="text-white/30 transition group-hover:text-[#D0EFFF]">↗</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
