"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import apptriangleLogo from "../logo/Apptriengle logo.png";

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type Stat = {
  num: string;
  suffix: string;
  label: string;
};

type Testimonial = {
  stars: number;
  text: string;
  name: string;
  role: string;
};

type Partner = {
  name: string;
  logo: string;
};

type ContactFormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

// ─── Data ──────────────────────────────────────────────────────────────────
const SERVICES: Service[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Staff Augmentation",
    desc: "Extend your in-house capabilities with skilled developers, engineers, and IT specialists who seamlessly integrate with your team.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    title: "Managed IT Services",
    desc: "Focus on your business while we handle your IT operations. Our services ensure your systems run smoothly, securely, and reliably.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Process Automation",
    desc: "Eliminate repetitive tasks, reduce human error, and improve operational efficiency through advanced Business Process Automation.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Web & Mobile Development",
    desc: "Deliver exceptional digital experiences from responsive web apps to cross-platform mobile solutions built for scale.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Power Platform",
    desc: "Leverage Microsoft Power Platform to create tailored business apps, automate processes, and gain actionable insights.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Technology Consulting",
    desc: "Align your technology initiatives with business objectives through expert insights, strategies, and roadmaps.",
  },
];

const STATS: Stat[] = [
  { num: "200", suffix: "+", label: "Projects Completed" },
  { num: "150", suffix: "+", label: "Happy Customers" },
  { num: "50", suffix: "+", label: "Professionals" },
  { num: "95", suffix: "%", label: "Client Retention" },
  { num: "7", suffix: "+", label: "Years Experience" },
];

const PARTNERS: Partner[] = [
  { name: "Microsoft", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/Microsoft-Logo.wine_-300x75.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "DigiCert", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/DigiCert_logo.svg-300x68.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "Sectigo", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/GI-Sectigo-REG-300x198.png.bv.webp?bv_host=apptriangle.com" },
  { name: "Trend Micro", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/1_Trend-Micro-Logo-white-1024x351-1-300x103.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "ZOHO", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/ZOHO.svg-300x103.png.bv.webp?bv_host=apptriangle.com" },
  { name: "Adobe", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/Adobe_Corporate_logo.svg-300x79.png.bv.webp?bv_host=apptriangle.com" },
  { name: "UiPath", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/01/UiPath_2019_Corporate_Logo-300x106.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "Fortinet", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/fortinet-logo-white-300x34.png.bv.webp?bv_host=apptriangle.com" },
  { name: "ManageEngine", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/manageengine-logo-white-768x135-1-300x53.png.bv.webp?bv_host=apptriangle.com" },
  { name: "AnyDesk", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/Logo_white_AnyDesk-02-2-300x94.webp.bv.webp?bv_host=apptriangle.com" },
  { name: "IFS", logo: "https://apptriangle.com/wp-content/uploads/al_opt_content/IMAGE/apptriangle.com/wp-content/uploads/2025/11/ifs_logo_40-1-300x118.png.bv.webp?bv_host=apptriangle.com" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    text: "Apptriangle transformed our IT infrastructure. Their managed services team is responsive, professional, and genuinely invested in our success.",
    name: "Sarah Mitchell",
    role: "CTO, FinTech Australia",
  },
  {
    stars: 5,
    text: "The staff augmentation service was exactly what we needed. The developers integrated seamlessly and delivered beyond our expectations.",
    name: "Karim Hassan",
    role: "VP Engineering, Dhaka Corp",
  },
  {
    stars: 5,
    text: "Their Power Platform expertise saved us months of development time. We now have automated workflows we never thought possible.",
    name: "James O'Brien",
    role: "Operations Director, Sydney SME",
  },
];

// ─── Hooks ─────────────────────────────────────────────────────────────────
function useScrollNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      start += step;
      if (start >= target) {
        setVal(target);
        clearInterval(t);
      } else {
        setVal(start);
      }
    }, 24);
    return () => clearInterval(t);
  }, [active, target]);
  return val;
}

// ─── Sub-components ────────────────────────────────────────────────────────
function StatItem({ num, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const val = useCounter(Number.parseInt(num, 10), active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl font-bold leading-none text-(--page-text)"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {val}
        <span className="text-(--blue)">{suffix}</span>
      </div>
      <div className="mt-1 text-[13px] font-medium uppercase tracking-wider text-(--muted-text)">
        {label}
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ApptrianglePage() {
  const scrolled = useScrollNav();
  useFadeUp();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    const current = document.documentElement.getAttribute("data-theme");
    return current === "dark" ? "dark" : "light";
  });
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const navClassName = `fixed top-0 left-0 right-0 z-100 flex h-18 items-center justify-between px-[5vw] transition-[background,box-shadow] duration-300 ${
    scrolled
      ? "bg-[rgba(12,34,66,0.96)] backdrop-blur-md shadow-[0_2px_24px_rgba(41,179,255,0.12)]"
      : "bg-transparent"
  }`;

  const toggleClassName = `inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition hover:-translate-y-px ${
    theme === "light"
      ? "bg-[#1e293b] text-[#f8fafc]"
      : "bg-[#f1f5f9] text-[#1e293b]"
  }`;

  const partnerHeight = (name: string) => {
    if (name === "Sectigo") return 70;
    if (name === "AnyDesk") return 60;
    return 40;
  };

  const heroBackground =
    theme === "dark"
      ? "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(41,179,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(12,34,66,0.18) 0%, transparent 60%), #040b18"
      : "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(41,179,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(12,34,66,0.12) 0%, transparent 60%), #0c2242";

  return (
    <>
      {/* ── NAV ── */}
      <nav className={navClassName}>
        <a href="#" className="flex items-center gap-2">
          <Image
            src={apptriangleLogo}
            alt="Apptriangle Logo"
            className="h-17.5 w-auto"
            priority
            sizes="(max-width: 768px) 140px, 200px"
          />
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          <li>
            <a
              href="#services"
              className="transition-colors hover:text-(--blue)"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition-colors hover:text-(--blue)"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#partners"
              className="transition-colors hover:text-(--blue)"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-(--blue)"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-md bg-(--blue) px-5 py-2 text-sm font-semibold text-(--navy) transition hover:-translate-y-px hover:bg-[#4fc5ff]"
            >
              Schedule a Call
            </a>
          </li>
        </ul>
        <button
          type="button"
          className={toggleClassName}
          onClick={toggleTheme}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#f39a1e] shadow-[0_8px_16px_rgba(12,34,66,0.25)]"
            aria-hidden="true"
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 text-black">
                <path
                  d="M15.5 3.5a8 8 0 1 0 5 13.7 7 7 0 1 1-5-13.7Z"
                  fill="currentColor"
                />
                <path
                  d="M6.5 7.5l1.1.3.3 1.1.3-1.1 1.1-.3-1.1-.3-.3-1.1-.3 1.1-1.1.3Z"
                  fill="currentColor"
                />
                <path
                  d="M16.5 9.5l.9.2.2.9.2-.9.9-.2-.9-.2-.2-.9-.2.9-.9.2Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 text-black">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <path
                  d="M12 2.5v3M12 18.5v3M4.5 12h3M16.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          <span className="leading-none">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden px-[5vw] pb-20 pt-30"
        style={{ background: heroBackground }}
      >
        <div className="relative z-10 max-w-160">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(41,179,255,0.3)] bg-[rgba(41,179,255,0.15)] px-4 py-1.5 text-[13px] font-medium text-(--blue)">
            <span className="h-1.5 w-1.5 rounded-full bg-(--blue) animate-[pulse_2s_infinite]" />
            7+ Years of Technology Excellence
          </div>
          <h1
            className="mb-6 text-[clamp(44px,6vw,76px)] font-semibold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technology
            <br />
            <span className="text-(--blue)">on Demand</span>
          </h1>
          <p className="mb-10 max-w-130 text-lg leading-[1.7] text-white/70">
            We are a global technology service provider dedicated to empowering
            businesses with cutting-edge solutions. Our expert team is
            available 24/7 to attend to your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-(--blue) px-8 py-3.5 text-[15px] font-semibold text-(--navy) transition hover:-translate-y-0.5 hover:bg-[#4fc5ff] hover:shadow-[0_8px_24px_rgba(41,179,255,0.4)]"
            >
              Explore Our Services →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-[15px] font-medium text-white transition hover:border-(--blue) hover:bg-[rgba(41,179,255,0.07)] hover:text-(--blue)"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Background grid decoration */}
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden w-[55vw] max-w-175 -translate-y-1/2 opacity-[0.13] lg:block">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm border border-(--blue) animate-[fadeGrid_3s_ease-in-out_infinite_alternate]"
                style={{
                  animationDelay: `${(i * 0.07) % 2}s`,
                  background: i % 3 === 0 ? "rgba(41, 179, 255, 0.15)" : undefined,
                }}
              />
            ))}
          </div>
        </div>

      </section>

      {/* ── STATS ── */}
      <div className="border-y border-(--border) bg-(--surface) px-[5vw] py-12">
        <div className="mx-auto grid max-w-275 grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map(stat => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="px-[5vw] py-24">
        <div className="mx-auto max-w-290">
          <div className="fade-up">
            <h2
              className="mb-4 text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-(--page-text)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Services
            </h2>
            <p className="mb-14 max-w-140 text-[17px] leading-[1.7] text-(--muted-text)">
              Reliable and innovative services designed for your business
              success, delivered by experts who care.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl border border-(--grid-border) bg-(--grid-border) sm:grid-cols-2 lg:grid-cols-3 fade-up">
            {SERVICES.map(service => (
              <div
                key={service.title}
                className="group relative overflow-hidden bg-(--surface) p-9 transition hover:bg-(--sky)"
              >
                <span className="absolute bottom-0 left-0 right-0 h-0.75 origin-left scale-x-0 bg-linear-to-r from-(--blue) to-transparent transition group-hover:scale-x-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--sky),rgba(41,179,255,0.2))] text-[22px] transition group-hover:-rotate-3 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-(--page-text)">
                  {service.title}
                </h3>
                <p className="text-sm leading-[1.7] text-(--muted-text)">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-(--blue) transition group-hover:gap-2.5"
                >
                  Learn more <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative overflow-hidden bg-(--navy) px-[5vw] py-24 text-white">
        <div className="absolute -right-50 -top-50 h-150 w-150 rounded-full bg-[radial-gradient(circle,rgba(41,179,255,0.12)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-290">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="fade-up">
              <h2
                className="mb-4 text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About Apptriangle
              </h2>
              <p className="mb-10 max-w-140 text-[17px] leading-[1.7] text-white/60">
                We are a global leading technology service provider dedicated
                to empowering businesses with cutting-edge solutions. With a
                dynamic team of industry experts and a passion for innovation.
              </p>
              <ul className="mb-10 space-y-3">
                <li className="flex items-center gap-3 border-b border-white/10 py-2 text-[15px] text-white/80 last:border-b-0">
                  <span className="text-lg text-(--blue)">✦</span>
                  Professional Services with certified experts
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 py-2 text-[15px] text-white/80 last:border-b-0">
                  <span className="text-lg text-(--blue)">✦</span>
                  Affordable pricing with transparent models
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 py-2 text-[15px] text-white/80 last:border-b-0">
                  <span className="text-lg text-(--blue)">✦</span>
                  Quality solutions built to scale with you
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 py-2 text-[15px] text-white/80 last:border-b-0">
                  <span className="text-lg text-(--blue)">✦</span>
                  24/7 support across time zones globally
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-(--blue) px-8 py-3.5 text-[15px] font-semibold text-(--navy) transition hover:-translate-y-0.5 hover:bg-[#4fc5ff]"
              >
                Get in Touch →
              </a>
            </div>
            <div className="relative hidden items-center justify-center lg:flex fade-up">
              <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(41,179,255,0.2)] animate-[spinRing_20s_linear_infinite]" />
              <div
                className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(41,179,255,0.2)] animate-[spinRing_15s_linear_infinite]"
                style={{ animationDirection: "reverse" }}
              />
              <div className="relative h-85 w-85 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-[linear-gradient(135deg,rgba(41,179,255,0.15),rgba(12,34,66,0.5))]">
                <div className="absolute left-1/2 top-7.5 h-40 w-40 -translate-x-1/2 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-(--blue) opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section id="partners" className="bg-(--surface-alt) px-[5vw] py-24">
        <div className="mx-auto max-w-290">
          <div className="fade-up text-center mb-12">
            <h2
              className="mx-auto text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-(--page-text)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Partners
            </h2>
          </div>
        </div>
        <div
          className="fade-up overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
          }}
        >
          <div className="flex w-max items-center gap-16 animate-[marquee_30s_linear_infinite]">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center rounded-lg border border-(--border) bg-(--navy) px-3 py-3 shadow-[0_2px_8px_rgba(12,34,66,0.04)]"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={partnerHeight(partner.name)}
                  className="w-auto object-contain"
                  style={{ height: `${partnerHeight(partner.name)}px` }}
                  sizes="(max-width: 768px) 140px, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-(--surface) px-[5vw] py-24">
        <div className="mx-auto max-w-290">
          <div className="fade-up text-center mb-14">
            <h2
              className="text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-(--page-text)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-(--border) bg-(--surface) p-9 fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span
                  className="pointer-events-none absolute right-7 top-5 text-[80px] font-bold leading-none text-(--sky)"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;
                </span>
                <div className="mb-4 text-base text-[#f5a623]">
                  {"★".repeat(testimonial.stars)}
                </div>
                <p className="mb-6 text-[15px] leading-[1.75] text-(--muted-text)">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--blue),var(--navy))] text-base font-semibold text-white">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-(--page-text)">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-(--muted-text)">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--navy)_0%,#1a3a6b_100%)] px-[5vw] py-24 text-center">
        <div className="absolute -left-50 -top-50 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(41,179,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute -bottom-37.5 -right-25 h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(41,179,255,0.1)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-290">
          <h2
            className="mb-4 text-[clamp(28px,3.5vw,48px)] font-semibold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Transform Your Business?
          </h2>
          <p className="mb-10 text-lg text-white/65">
            Let&rsquo;s build something extraordinary together. Our team is ready
            when you are.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-(--blue) px-8 py-3.5 text-[15px] font-semibold text-(--navy) transition hover:-translate-y-0.5 hover:bg-[#4fc5ff]"
            >
              Contact Us Today →
            </a>
            <a
              href="https://outlook.office.com/book/MeetwithApptriangle@apptriangle.com/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-[15px] font-medium text-white transition hover:border-(--blue) hover:bg-[rgba(41,179,255,0.07)] hover:text-(--blue)"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-[5vw] py-24">
        <div className="mx-auto max-w-290">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="fade-up">
              <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-widest text-(--blue)">
                Get in Touch
              </span>
              <h2
                className="mb-4 text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-(--page-text)"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&rsquo;s Work Together
              </h2>
              <p className="mb-10 text-[17px] leading-[1.7] text-(--muted-text)">
                Have a project in mind? We&rsquo;d love to hear about it. Reach out
                and we&rsquo;ll get back to you within 24 hours.
              </p>
              <div className="mb-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2.5 bg-(--sky) text-lg text-(--blue)">
                  📍
                </div>
                <div>
                  <div className="mb-1 text-[13px] uppercase tracking-wider text-(--muted-text)">
                    Bangladesh Office
                  </div>
                  <div className="text-[15px] font-medium text-(--page-text)">
                    House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212
                  </div>
                </div>
              </div>
              <div className="mb-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2.5 bg-(--sky) text-lg text-(--blue)">
                  📍
                </div>
                <div>
                  <div className="mb-1 text-[13px] uppercase tracking-wider text-(--muted-text)">
                    Australia Office
                  </div>
                  <div className="text-[15px] font-medium text-(--page-text)">
                    2-10 Mount Street, North Sydney, NSW 2060
                  </div>
                </div>
              </div>
              <div className="mb-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2.5 bg-(--sky) text-lg text-(--blue)">
                  📞
                </div>
                <div>
                  <div className="mb-1 text-[13px] uppercase tracking-wider text-(--muted-text)">
                    Phone
                  </div>
                  <div className="text-[15px] font-medium text-(--page-text)">
                    +880 1717 888 388
                  </div>
                </div>
              </div>
              <div className="mb-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2.5 bg-(--sky) text-lg text-(--blue)">
                  ✉️
                </div>
                <div>
                  <div className="mb-1 text-[13px] uppercase tracking-wider text-(--muted-text)">
                    Email
                  </div>
                  <div className="text-[15px] font-medium text-(--page-text)">
                    info@apptriangle.com
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-(--surface-alt) p-10 fade-up">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="mb-5">
                  <label className="mb-2 block text-[13px] font-medium text-(--page-text)">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={event =>
                      setForm({ ...form, name: event.target.value })
                    }
                    className="w-full rounded-lg border border-(--input-border) bg-(--input-bg) px-4 py-3 text-sm text-(--page-text) outline-none transition focus:border-(--blue) focus:shadow-[0_0_0_3px_var(--input-focus)]"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-2 block text-[13px] font-medium text-(--page-text)">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={event =>
                      setForm({ ...form, company: event.target.value })
                    }
                    className="w-full rounded-lg border border-(--input-border) bg-(--input-bg) px-4 py-3 text-sm text-(--page-text) outline-none transition focus:border-(--blue) focus:shadow-[0_0_0_3px_var(--input-focus)]"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="mb-5">
                  <label className="mb-2 block text-[13px] font-medium text-(--page-text)">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={event =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    className="w-full rounded-lg border border-(--input-border) bg-(--input-bg) px-4 py-3 text-sm text-(--page-text) outline-none transition focus:border-(--blue) focus:shadow-[0_0_0_3px_var(--input-focus)]"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-2 block text-[13px] font-medium text-(--page-text)">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={event =>
                      setForm({ ...form, email: event.target.value })
                    }
                    className="w-full rounded-lg border border-(--input-border) bg-(--input-bg) px-4 py-3 text-sm text-(--page-text) outline-none transition focus:border-(--blue) focus:shadow-[0_0_0_3px_var(--input-focus)]"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-[13px] font-medium text-(--page-text)">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={event =>
                    setForm({ ...form, message: event.target.value })
                  }
                  className="min-h-30 w-full resize-y rounded-lg border border-(--input-border) bg-(--input-bg) px-4 py-3 text-sm text-(--page-text) outline-none transition focus:border-(--blue) focus:shadow-[0_0_0_3px_var(--input-focus)]"
                />
              </div>
              <button className="w-full rounded-lg bg-(--navy) py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1a3a6b]">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#07152e] px-[5vw] pb-8 pt-16 text-white/60">
        <div className="mx-auto mb-12 grid max-w-290 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={apptriangleLogo}
                alt="Apptriangle Logo"
                className="h-15 w-auto"
                sizes="120px"
              />
            </div>
            <p className="mt-4 text-sm leading-[1.8]">
              Technology on Demand — empowering businesses worldwide with
              innovative, reliable technology services.
            </p>
          </div>
          <div>
            <h4 className="mb-5 text-[15px] font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Staff Augmentation",
                "Managed IT",
                "App Development",
                "Power Platform",
                "AI & ML",
              ].map(service => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/50 transition hover:text-(--blue)"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[15px] font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Partners",
                "Career",
                "News & Events",
                "Blogs",
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 transition hover:text-(--blue)"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[15px] font-semibold text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@apptriangle.com"
                  className="text-white/50 transition hover:text-(--blue)"
                >
                  info@apptriangle.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801717888388"
                  className="text-white/50 transition hover:text-(--blue)"
                >
                  +880 1717 888 388
                </a>
              </li>
              <li>
                <a
                  href="tel:+61427927466"
                  className="text-white/50 transition hover:text-(--blue)"
                >
                  +61 427 927 466
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-290 flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-[13px]">
          <span>© 2026 Apptriangle Limited. All rights reserved.</span>
          <span className="text-xs text-white/30">Bangladesh · Australia</span>
        </div>
      </footer>
    </>
  );
}
