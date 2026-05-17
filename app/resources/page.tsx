import Link from "next/link";
import { RESOURCES } from "../../lib/resources-data";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Resources · Apptriangle",
  description: "Case studies, partners, news & events, and engineering blogs from the Apptriangle team.",
};

export default function ResourcesIndexPage() {
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
            Resources
          </div>
          <h1
            className="mb-5 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Knowledge from the <span className="text-[#D0EFFF]">Apptriangle</span> team.
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            Case studies, partner updates, announcements, and engineering field notes — refreshed regularly.
          </p>
        </div>
      </section>

      <section className="px-[5vw] pb-32">
        <div className="mx-auto grid max-w-[72rem] gap-5 md:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 p-9 transition hover:-translate-y-1 hover:border-[#D0EFFF]/40 ${
                i === 1 ? "bg-[#002242] shadow-[0_0_50px_rgba(208,239,255,0.12)]" : "bg-[#0C2242]/50"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D0EFFF]">{r.title}</span>
                <span className="text-white/30 transition group-hover:text-[#D0EFFF]">↗</span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{r.hero}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/65">{r.intro}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#D0EFFF]">
                Browse {r.title.toLowerCase()} <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
