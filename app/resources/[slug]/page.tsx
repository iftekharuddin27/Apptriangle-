import { notFound } from "next/navigation";
import Link from "next/link";
import { RESOURCES, getResourceBySlug } from "../../../lib/resources-data";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCES.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Resource not found · Apptriangle" };
  return { title: `${resource.title} · Apptriangle`, description: resource.intro };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const others = RESOURCES.filter(r => r.slug !== resource.slug);

  return (
    <div className="min-h-screen bg-[#040b18] text-white">
      <SiteNav />

      <section className="relative overflow-hidden px-[5vw] pb-28 pt-40">
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
            {resource.title}
          </div>
          <h1
            className="mb-5 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {resource.hero}
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            {resource.intro}
          </p>
        </div>
      </section>

      <section className="px-[5vw] pb-24">
        <div className="mx-auto grid max-w-[72rem] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resource.items.map((item, i) => (
            <article
              key={item.title}
              className={`group flex flex-col rounded-2xl border border-white/10 p-7 transition hover:-translate-y-1 hover:border-[#D0EFFF]/40 ${
                i % 5 === 1 ? "bg-[#002242] shadow-[0_0_50px_rgba(208,239,255,0.12)]" : "bg-[#0C2242]/50"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-[#D0EFFF]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#D0EFFF]">
                  {item.category}
                </span>
                <span className="text-white/30 transition group-hover:text-[#D0EFFF]">↗</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-white">{item.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/65">{item.excerpt}</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#002242] px-[5vw] py-20">
        <div className="mx-auto max-w-[72rem]">
          <h2
            className="mb-10 text-center text-balance text-3xl font-semibold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore other resources
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map(r => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#D0EFFF]/50 hover:bg-white/[0.06]"
              >
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#D0EFFF]">Resource</div>
                <h3 className="mb-2 text-xl font-semibold text-white">{r.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/65">{r.tagline}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#D0EFFF]">
                  Browse <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5vw] py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2
            className="mb-4 text-balance text-3xl font-semibold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have a project in mind?
          </h2>
          <p className="mb-8 text-white/70 leading-relaxed">
            Let&apos;s build something extraordinary together. Our team is ready when you are.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-md bg-[#D0EFFF] px-7 py-3 text-sm font-semibold text-[#002242] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
