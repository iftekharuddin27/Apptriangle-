import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getServiceBySlug } from "../../../lib/services-data";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found · Apptriangle" };
  return {
    title: `${service.title} · Apptriangle`,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#040b18] text-white">
      <SiteNav />

      {/* Hero with glowing arc */}
      <section className="relative overflow-hidden px-[5vw] pb-32 pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 -z-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(208,239,255,0.45) 0%, rgba(208,239,255,0.15) 35%, rgba(0,34,66,0) 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-32 -z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[#D0EFFF]/30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D0EFFF]/30 bg-[#D0EFFF]/10 px-4 py-1.5 text-xs font-medium tracking-widest text-[#D0EFFF] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D0EFFF]" /> {service.tagline}
          </div>
          <h1
            className="mb-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {service.hero}
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            {service.intro}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-md bg-[#D0EFFF] px-7 py-3 text-sm font-semibold text-[#002242] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:border-[#D0EFFF] hover:text-[#D0EFFF]"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 mx-auto mt-20 flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#0C2242]/70 px-6 py-4 text-sm text-white/70 backdrop-blur">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-wider text-[#D0EFFF]">★★★★★ Rated 4.9/5 by</span>
            <span className="text-2xl font-semibold text-white">1,200+</span>
            <span className="text-[11px] text-white/50">customers globally</span>
          </div>
          <div className="hidden h-12 w-px bg-white/10 md:block" />
          <div className="hidden flex-1 items-center justify-around gap-4 text-xs text-white/55 md:flex">
            <span>★ Trustpilot</span>
            <span>◆ Capterra</span>
            <span>● G2</span>
            <span>◆ Clutch</span>
          </div>
        </div>
      </section>

      {/* Highlights bento */}
      <section className="px-[5vw] pb-28">
        <div className="mx-auto max-w-[72rem]">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why teams choose <span className="text-[#D0EFFF]">Apptriangle</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-white/60 leading-relaxed">
              {service.tagline}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {service.highlights.map((h, i) => (
              <div
                key={h.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 p-7 transition ${
                  i === 1 ? "bg-[#002242] shadow-[0_0_60px_rgba(208,239,255,0.12)]" : "bg-[#0C2242]/60"
                } hover:-translate-y-1 hover:border-[#D0EFFF]/40`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D0EFFF]/10 text-[#D0EFFF]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="text-white/30 transition group-hover:text-[#D0EFFF]">↗</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{h.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Offerings grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map(o => (
              <div
                key={o.title}
                className="group rounded-2xl border border-white/10 bg-[#0C2242]/40 p-7 transition hover:-translate-y-1 hover:border-[#D0EFFF]/40 hover:bg-[#0C2242]/70"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D0EFFF]/10 text-[#D0EFFF]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{o.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — purple-style stats band reskinned in brand colors */}
      <section className="bg-[#002242] px-[5vw] py-24">
        <div className="mx-auto max-w-[72rem]">
          <div className="mb-14 text-center">
            <h2
              className="mb-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built on Trust. <span className="text-[#D0EFFF]">Driven by Results.</span>
            </h2>
            <p className="mx-auto max-w-xl text-white/65 leading-relaxed">
              Our delivery process is shaped by years of shipping work that scales — and stays shipped.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map(p => (
              <div
                key={p.step}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-7 transition hover:bg-white/[0.07]"
              >
                <span className="absolute right-5 top-5 text-white/40 transition group-hover:text-[#D0EFFF]">↗</span>
                <div
                  className="mb-6 text-4xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-tight text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-[5vw] py-24">
        <div className="mx-auto grid max-w-[72rem] gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2
              className="mb-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real impact. <span className="text-[#D0EFFF]">Proven results.</span>
            </h2>
            <p className="mb-6 text-white/65 leading-relaxed">
              Outcomes our clients consistently see across {service.title.toLowerCase()} engagements.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-md bg-[#D0EFFF] px-6 py-3 text-sm font-semibold text-[#002242] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Talk to our team →
            </Link>
          </div>
          <ul className="grid gap-3">
            {service.benefits.map(b => (
              <li
                key={b}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#0C2242]/50 p-5 text-sm leading-relaxed text-white/80"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D0EFFF] text-[#002242]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0C2242] px-[5vw] py-24">
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-10 text-center text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map(f => (
              <details
                key={f.q}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition open:border-[#D0EFFF]/40 open:bg-white/[0.06]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-white">
                  {f.q}
                  <span className="text-[#D0EFFF] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-[5vw] py-24">
        <div className="mx-auto max-w-[72rem]">
          <h2
            className="mb-10 text-center text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore related services
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map(r => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group rounded-2xl border border-white/10 bg-[#0C2242]/60 p-7 transition hover:-translate-y-1 hover:border-[#D0EFFF]/50"
              >
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#D0EFFF]">Service</div>
                <h3 className="mb-2 text-xl font-semibold text-white">{r.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/60">{r.tagline}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#D0EFFF]">
                  Learn more <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#002242] px-[5vw] py-24 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(208,239,255,0.4) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2
            className="mb-4 text-balance text-3xl font-semibold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to start with {service.title}?
          </h2>
          <p className="mb-8 text-white/70 leading-relaxed">
            Book a 30-minute call with one of our specialists — no slides, just a conversation about your goals.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-md bg-[#D0EFFF] px-7 py-3 text-sm font-semibold text-[#002242] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Schedule a Call →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
