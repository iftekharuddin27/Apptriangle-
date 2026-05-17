"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import apptriangleLogo from "../../logo/Apptriengle logo.png";
import { SERVICES } from "../../lib/services-data";
import { RESOURCES } from "../../lib/resources-data";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 grid h-18 grid-cols-[auto_1fr_auto] items-center pl-[3.5vw] pr-[2.6vw] transition-[background,box-shadow] duration-300 ${
    scrolled
      ? "bg-[rgba(0,34,66,0.96)] backdrop-blur-md shadow-[0_2px_24px_rgba(208,239,255,0.08)]"
      : "bg-transparent"
  }`;

  return (
    <nav className={navClass}>
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={apptriangleLogo}
          alt="Apptriangle Logo"
          className="h-14 w-auto"
          priority
          sizes="(max-width: 768px) 140px, 200px"
        />
      </Link>

      <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex lg:justify-self-center">
        <li className="relative group">
          <button
            type="button"
            className="inline-flex cursor-default items-center gap-1.5 transition-colors hover:text-[#D0EFFF]"
          >
            Services
            <span className="text-[10px]">▾</span>
          </button>
          <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 grid w-[34rem] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-[#0C2242]/98 p-3 text-sm text-white/85 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl transition group-hover:pointer-events-auto group-hover:opacity-100">
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-[13px] transition hover:bg-white/5 hover:text-[#D0EFFF]"
              >
                <span>{s.title}</span>
                <span className="text-xs text-white/40 transition group-hover:text-[#D0EFFF]">→</span>
              </Link>
            ))}
          </div>
        </li>

        <li>
          <Link href="/products" className="transition-colors hover:text-[#D0EFFF]">
            Products
          </Link>
        </li>

        <li className="relative group">
          <button
            type="button"
            className="inline-flex cursor-default items-center gap-1.5 transition-colors hover:text-[#D0EFFF]"
          >
            Resources
            <span className="text-[10px]">▾</span>
          </button>
          <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0C2242]/98 p-2 text-sm text-white/85 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl transition group-hover:pointer-events-auto group-hover:opacity-100">
            {RESOURCES.map(r => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-[13px] transition hover:bg-white/5 hover:text-[#D0EFFF]"
              >
                {r.title}
                <span className="text-xs text-white/40">→</span>
              </Link>
            ))}
          </div>
        </li>

        <li>
          <Link href="/career" className="transition-colors hover:text-[#D0EFFF]">
            Career
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="transition-colors hover:text-[#D0EFFF]">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="transition-colors hover:text-[#D0EFFF]">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-self-end gap-3">
        <Link
          href="/contact-us"
          className="hidden rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-[#D0EFFF] hover:text-[#D0EFFF] lg:inline-flex"
        >
          Request A Demo
        </Link>
        <Link
          href="/contact-us"
          className="hidden rounded-md bg-[#D0EFFF] px-5 py-2 text-sm font-semibold text-[#002242] transition hover:-translate-y-px hover:bg-white lg:inline-flex"
        >
          Get Started
        </Link>
        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          onClick={() => setOpenMobile(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{openMobile ? "✕" : "☰"}</span>
        </button>
      </div>

      {openMobile && (
        <div className="absolute left-0 right-0 top-18 z-40 max-h-[80vh] overflow-y-auto border-t border-white/10 bg-[#0C2242] p-6 text-white lg:hidden">
          <div className="mb-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#D0EFFF]">Services</div>
            <div className="grid grid-cols-1 gap-1">
              {SERVICES.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-md px-3 py-2 text-sm hover:bg-white/5">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#D0EFFF]">Resources</div>
            <div className="grid grid-cols-1 gap-1">
              {RESOURCES.map(r => (
                <Link key={r.slug} href={`/resources/${r.slug}`} className="rounded-md px-3 py-2 text-sm hover:bg-white/5">
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-1">
            <Link href="/products" className="rounded-md px-3 py-2 text-sm hover:bg-white/5">Products</Link>
            <Link href="/career" className="rounded-md px-3 py-2 text-sm hover:bg-white/5">Career</Link>
            <Link href="/about-us" className="rounded-md px-3 py-2 text-sm hover:bg-white/5">About Us</Link>
            <Link href="/contact-us" className="rounded-md px-3 py-2 text-sm hover:bg-white/5">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
