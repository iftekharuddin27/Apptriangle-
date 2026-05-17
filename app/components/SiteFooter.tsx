import Link from "next/link";
import Image from "next/image";
import apptriangleLogo from "../../logo/Apptriengle logo.png";
import { SERVICES } from "../../lib/services-data";
import { RESOURCES } from "../../lib/resources-data";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 bg-[#07152e] px-[5vw] pb-8 pt-16 text-white/60">
      <div className="mx-auto mb-12 grid max-w-[72rem] gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image src={apptriangleLogo} alt="Apptriangle Logo" className="h-14 w-auto" sizes="120px" />
          <p className="mt-4 text-sm leading-[1.8]">
            Technology on Demand — empowering businesses worldwide with innovative, reliable technology services.
          </p>
        </div>
        <div>
          <h4 className="mb-5 text-[15px] font-semibold text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map(s => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/55 transition hover:text-[#D0EFFF]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-[15px] font-semibold text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            {RESOURCES.map(r => (
              <li key={r.slug}>
                <Link href={`/resources/${r.slug}`} className="text-white/55 transition hover:text-[#D0EFFF]">
                  {r.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about-us" className="text-white/55 transition hover:text-[#D0EFFF]">About Us</Link>
            </li>
            <li>
              <Link href="/career" className="text-white/55 transition hover:text-[#D0EFFF]">Career</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-[15px] font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:info@apptriangle.com" className="text-white/55 transition hover:text-[#D0EFFF]">info@apptriangle.com</a></li>
            <li><a href="tel:+8801717888388" className="text-white/55 transition hover:text-[#D0EFFF]">+880 1717 888 388</a></li>
            <li><a href="tel:+61427927466" className="text-white/55 transition hover:text-[#D0EFFF]">+61 427 927 466</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[72rem] flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-[13px]">
        <span>© 2026 Apptriangle Limited. All rights reserved.</span>
        <span className="text-xs text-white/30">Bangladesh · Australia</span>
      </div>
    </footer>
  );
}
