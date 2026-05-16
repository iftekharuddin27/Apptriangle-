"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import apptriangleLogo from "../../logo/Apptriengle logo.png";
import storyCollageImage from "../../About-us Images/Gray-Minimalist-Line-Simple-A4-Stationery-Paper-Document-3-1024x910.webp.bv (1).webp";
import beginningImage from "../../About-us Images/pexels-dream-3381066-1-1024x768.webp";
import breakthroughImage from "../../About-us Images/pexels-chuck-3109168-1-1024x683.webp";
import horizonsImage from "../../About-us Images/pexels-diva-plavalaguna-6147381-1024x683.jpg.bv.webp";
import leaderAliImage from "../../About-us Images/Annotation-2025-07-15-133358-1.png";
import leaderMoshiurImage from "../../About-us Images/WhatsApp-Image-2025-07-14-at-1.04.10-PM.jpeg";
import leaderRanaImage from "../../About-us Images/WhatsApp-Image-2025-07-14-at-3.09.04-PM-1024x972.jpeg";

const NAV_SERVICES = [
	"Staff Augmentation",
	"Managed IT Services",
	"Process Automation",
	"App Development",
	"Power Platform",
	"Technology Consulting",
	"MVP Development",
	"AI & ML Solutions",
	"Business Analytics",
	"Chatbot Development",
	"Cybersecurity Services",
	"Email & Collaboration",
	"SSL Certificates",
	"Document Management",
	"Software Licensing",
];

const NAV_RESOURCES = ["Case Studies", "Partners", "News & Events", "Blogs"];

const LEADERS = [
	{
		name: "Ali Mortuza Bilash",
		title: "Director",
		description:
			"A tech visionary with over 12 years of experience in software and enterprise solutions, driving innovation and business transformation.",
		image: leaderAliImage,
	},
	{
		name: "Moshiur Rahman Oly",
		title: "Director",
		description:
			"A technology leader with over 12 years of experience in software and enterprise solutions, driving innovation and global growth.",
		image: leaderMoshiurImage,
	},
	{
		name: "Rana Mustafa",
		title: "Director",
		description:
			"An industry expert with over 20 years of experience and a background at AWS, driving growth and strategic operations across Australia.",
		image: leaderRanaImage,
	},
];

function useScrollNav() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);
	return scrolled;
}

export default function AboutUsPage() {
	const scrolled = useScrollNav();
	const theme = useSyncExternalStore(
		onStoreChange => {
			if (typeof document === "undefined") return () => {};
			const observer = new MutationObserver(onStoreChange);
			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ["data-theme"],
			});
			window.addEventListener("storage", onStoreChange);
			window.addEventListener("theme-change", onStoreChange);
			return () => {
				observer.disconnect();
				window.removeEventListener("storage", onStoreChange);
				window.removeEventListener("theme-change", onStoreChange);
			};
		},
		() => {
			if (typeof document === "undefined") return "dark";
			return document.documentElement.getAttribute("data-theme") === "dark"
				? "dark"
				: "light";
		},
		() => "dark",
	);

	useEffect(() => {
		if (typeof document === "undefined") return;
		const stored = window.localStorage.getItem("theme");
		const initialTheme = stored || "dark";
		if (initialTheme !== document.documentElement.getAttribute("data-theme")) {
			document.documentElement.setAttribute("data-theme", initialTheme);
			window.dispatchEvent(new Event("theme-change"));
		}
		if (!stored) window.localStorage.setItem("theme", "dark");
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", nextTheme);
		window.localStorage.setItem("theme", nextTheme);
		window.dispatchEvent(new Event("theme-change"));
	};

	const navClassName = `fixed top-0 left-0 right-0 z-100 grid h-18 grid-cols-[auto_1fr_auto] items-center pl-[3.5vw] pr-[2.6vw] transition-[background,box-shadow] duration-300 ${
		scrolled
			? "bg-[rgba(12,34,66,0.96)] backdrop-blur-md shadow-[0_2px_24px_rgba(41,179,255,0.12)]"
			: "bg-transparent"
	}`;

	const toggleClassName = "inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-white/20 bg-transparent transition hover:-translate-y-px";

	return (
		<>
			<nav className={navClassName}>
				<a href="/" className="flex items-center gap-2">
					<Image
						src={apptriangleLogo}
						alt="Apptriangle Logo"
						className="h-17.5 w-auto"
						priority
						sizes="(max-width: 768px) 140px, 200px"
					/>
				</a>
				<ul className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex lg:justify-self-center">
					<li className="relative group">
						<button
							type="button"
							aria-haspopup="true"
							className="inline-flex cursor-default items-center gap-2 transition-colors hover:text-(--blue)"
						>
							Services
							<span className="text-[10px]">v</span>
						</button>
						<div className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1628] p-2 text-sm text-white/85 opacity-0 shadow-[0_18px_40px_rgba(8,18,34,0.4)] transition group-hover:pointer-events-auto group-hover:opacity-100">
							{NAV_SERVICES.map(item => (
								<a
									key={item}
									href="/services"
									className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white"
								>
									{item}
									<span className="text-xs text-white/40">-&gt;</span>
								</a>
							))}
						</div>
					</li>
					<li>
						<a
							href="/products"
							className="transition-colors hover:text-(--blue)"
						>
							Products
						</a>
					</li>
					<li className="relative group">
						<button
							type="button"
							aria-haspopup="true"
							className="inline-flex cursor-default items-center gap-2 transition-colors hover:text-(--blue)"
						>
							Resources
							<span className="text-[10px]">v</span>
						</button>
						<div className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1628] p-2 text-sm text-white/85 opacity-0 shadow-[0_18px_40px_rgba(8,18,34,0.4)] transition group-hover:pointer-events-auto group-hover:opacity-100">
							{NAV_RESOURCES.map(item => (
								<a
									key={item}
									href="/resources"
									className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white"
								>
									{item}
									<span className="text-xs text-white/40">-&gt;</span>
								</a>
							))}
						</div>
					</li>
					<li>
						<a
							href="/career"
							className="transition-colors hover:text-(--blue)"
						>
							Career
						</a>
					</li>
					<li>
						<a
							href="/about-us"
							className="transition-colors hover:text-(--blue)"
						>
							About Us
						</a>
					</li>
					<li>
						<a
							href="/contact-us"
							className="transition-colors hover:text-(--blue)"
						>
							Contact Us
						</a>
					</li>
				</ul>
				<div className="flex items-center justify-self-end gap-3">
					<button type="button" className={toggleClassName} onClick={toggleTheme} aria-label={theme === "dark" ? "Dark mode" : "Light mode"}>
						<span className={`flex h-7 w-7 items-center justify-center rounded-full ${theme === "dark" ? "bg-white text-[#0f223a]" : "bg-[#0f223a] text-white"}`}>
						{theme !== "dark" ? (
							<svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
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
							<svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
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
					</button>
					<a
						href="/contact-us"
						className="hidden rounded-md bg-(--blue) px-5 py-2 text-sm font-semibold text-(--navy) transition hover:-translate-y-px hover:bg-[#4fc5ff] lg:inline-flex"
					>
						Schedule a Call
					</a>
				</div>
			</nav>

			<main className="min-h-screen bg-[radial-gradient(circle_at_top,#0d1c2a_0%,#070e18_45%,#050b16_100%)] px-[5vw] pb-20 pt-32 text-white">
				<section className="relative mx-auto max-w-290">
					<div className="pointer-events-none absolute -left-36 top-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(92,77,255,0.2)_0%,transparent_70%)] blur-2xl" />
					<div className="pointer-events-none absolute right-6 top-4 hidden h-16 w-16 rotate-12 rounded-[12px] border border-[rgba(92,77,255,0.5)] lg:block" />
					<div className="text-center">
						<h1
							className="text-[clamp(32px,4vw,52px)] font-semibold"
							style={{ fontFamily: "var(--font-display)" }}
						>
							About Apptriangle
						</h1>
						<p className="mx-auto mt-3 max-w-160 text-sm text-white/60">
							We are a global leading technology service provider dedicated to
							empowering businesses and organizations with cutting-edge
							solutions. With a dynamic team of industry experts and a passion
							for innovation, we strive to deliver top-notch services that
							propel our clients towards success.
						</p>
					</div>
				</section>

				<section className="relative mx-auto mt-16 max-w-290">
					<div className="pointer-events-none absolute -left-20 top-16 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(41,179,255,0.2)_0%,transparent_70%)] blur-xl" />
					<div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
						<div className="relative">
							<Image
								src={storyCollageImage}
								alt="Team collage"
								className="w-full rounded-2xl object-cover"
							/>
							<div className="pointer-events-none absolute inset-4 rounded-2xl border border-[rgba(92,77,255,0.35)]" />
						</div>
						<div>
							<h2 className="text-lg font-semibold">
								Our <span className="text-(--blue)">Story</span>
							</h2>
							<p className="mt-4 text-sm text-white/70">
								Every great idea begins with a spark, and for Apptriangle
								Limited, that spark ignited in 2018, when three passionate
								engineers -- Ali Mortuza Bilash, Moshiur Rahman Oly, and another
								like-minded colleague -- shared a common dream: To deliver
								world-class apps and technology services that transform how
								businesses work. All three came from strong engineering
								backgrounds, with years of experience working with multinational
								tech companies serving enterprise clients. But soon, Bilash and
								Moshiur took the bold step of leaving their secure jobs, stepping
								out of their comfort zones to bring the Apptriangle vision to
								life. The third co-founder chose to continue his professional
								journey elsewhere, but his place in the original idea remained
								-- symbolized in the name itself, Apptriangle -- representing
								the three points of innovation that started the journey.
							</p>
						</div>
					</div>
				</section>

				<section className="relative mx-auto mt-16 max-w-290">
					<div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
						<div>
							<h2 className="text-lg font-semibold">
								The <span className="text-(--blue)">Beginning</span>
							</h2>
							<p className="mt-4 text-sm text-white/70">
								Apptriangle's first product, ShopManager, was built to empower
								small retailers with tools for managing inventory, tracking
								sales, and generating automated SMS invoices. They personally
								visited local markets, listened to shop owners, and refined the
								product through real-world feedback -- proving that genuine
								innovation starts with understanding real customer needs. Over
								time, Apptriangle expanded its product portfolio, developing
								several innovative solutions such as TREAL, OMS, GuestPro, and
								GianPro -- each designed to solve real business challenges and
								enhance operational efficiency. And this journey of innovation
								continues.
							</p>
						</div>
						<div className="relative">
							<Image
								src={beginningImage}
								alt="Basketball hoop"
								className="w-full rounded-2xl object-cover"
							/>
						</div>
					</div>
				</section>

				<section className="relative mx-auto mt-16 max-w-290">
					<div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
						<div className="relative">
							<Image
								src={breakthroughImage}
								alt="Magnifying glass on book"
								className="w-full rounded-2xl object-cover"
							/>
						</div>
						<div>
							<h2 className="text-lg font-semibold">
								Global <span className="text-(--blue)">Breakthrough</span>
							</h2>
							<p className="mt-4 text-sm text-white/70">
								In 2020, amid the global pandemic, an opportunity arrived that
								changed everything. Microsoft's global support team reached out
								to Bilash with an offer to provide remote assistance for
								Microsoft 365 customers. With Oly joining in, Apptriangle
								secured its first international contract -- one that continues
								to this day. That moment marked the beginning of Apptriangle's
								global journey. In 2021, the company expanded internationally by
								opening a second office in Australia, strengthening its ability
								to serve customers worldwide. Moshiur began working in the
								global market in 2022, securing its first contract from the USA.
								Since then, they have built a strong international team and
								successfully partnered with clients from Canada, Australia,
								Dubai, Latvia, Brunei, and other regions. Currently, they are
								successfully providing ongoing support to all these global
								clients while maintaining high-quality service and effectively
								managing the entire support system.
							</p>
						</div>
					</div>
				</section>

				<section className="relative mx-auto mt-16 max-w-290">
					<div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
						<div>
							<h2 className="text-lg font-semibold">
								Expanding <span className="text-(--blue)">Horizons</span>
							</h2>
							<p className="mt-4 text-sm text-white/70">
								Today, Apptriangle Limited proudly serves 200+ unique customers
								across Bangladesh, USA, Australia, Canada, UAE, and Brunei --
								providing top-tier AI, BI, Automation, Staff Augmentation,
								Consulting, and Managed IT Services. Apptriangle has also built
								strong partnerships with industry leaders such as Microsoft,
								DigiCert, IronNet, Zoho, and many more -- offering comprehensive
								implementation, software licensing, and subscription services
								that help businesses grow and stay secure. Very soon, Apptriangle
								will open its third office in Canada and fourth in Japan --
								continuing its mission of global expansion. From a small team
								with a big idea into a globally recognized technology partner,
								Apptriangle continues its mission: "Empowering businesses
								through people, apps, and innovation."
							</p>
						</div>
						<div className="relative">
							<Image
								src={horizonsImage}
								alt="Puzzle pieces"
								className="w-full rounded-2xl object-cover"
							/>
						</div>
					</div>
				</section>

				<section className="relative mx-auto mt-18 max-w-290 text-center">
					<div className="pointer-events-none absolute left-1/2 top-6 h-14 w-14 -translate-x-1/2 rounded-full border border-[rgba(92,77,255,0.35)]" />
					<h2 className="text-lg font-semibold">
						Leadership <span className="text-(--blue)">Team</span>
					</h2>
					<p className="mt-2 text-xs text-white/60">
						Meet the people driving our vision forward
					</p>
					<div className="mt-10 grid gap-6 lg:grid-cols-3">
						{LEADERS.map(leader => (
							<div
								key={leader.name}
								className="mx-auto flex w-full max-w-80 flex-col items-center rounded-2xl bg-[#0c2a30] px-6 py-8 text-center shadow-[0_14px_28px_rgba(5,10,20,0.35)]"
							>
								<Image
									src={leader.image}
									alt={leader.name}
									className="h-20 w-20 rounded-full object-cover"
								/>
								<div className="mt-4 text-sm font-semibold text-white">
									{leader.name}
								</div>
								<div className="mt-2 rounded-full border border-white/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80">
									{leader.title}
								</div>
								<p className="mt-4 text-xs text-white/60">
									{leader.description}
								</p>
							</div>
						))}
					</div>
				</section>

				<section className="mx-auto mt-16 max-w-290 text-center">
					<h2 className="text-lg font-semibold">
						Our <span className="text-(--blue)">Team</span>
					</h2>
					<p className="mx-auto mt-3 max-w-175 text-xs text-white/60">
						We're a diverse team of 50+ passionate professionals from around the
						world, united by our commitment to innovation and excellence. Our
						team includes developers, consultants, designers, and business
						strategists working together to deliver exceptional results.
					</p>
					<div className="mt-8 grid gap-8 text-center sm:grid-cols-3">
						<div>
							<div className="text-2xl font-semibold text-(--blue)">50+</div>
							<div className="mt-1 text-[11px] text-white/60">
								Professionals
							</div>
						</div>
						<div>
							<div className="text-2xl font-semibold text-(--blue)">40+</div>
							<div className="mt-1 text-[11px] text-white/60">
								Certified Resources
							</div>
						</div>
						<div>
							<div className="text-2xl font-semibold text-(--blue)">20+</div>
							<div className="mt-1 text-[11px] text-white/60">
								Countries Reached
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto mt-14 max-w-290 text-center">
					<p className="text-sm text-white/70">
						Interested to know more about how Apptriangle can transform your
						business?
					</p>
					<a
						href="/contact-us"
						className="mt-4 inline-flex items-center justify-center rounded-full bg-(--blue) px-6 py-2 text-xs font-semibold text-(--navy)"
					>
						Schedule a Call
					</a>
				</section>

				<footer className="mx-auto mt-12 max-w-290 text-left text-[10px] text-white/40">
					© 2024 Apptriangle Limited. All rights reserved.
				</footer>
			</main>
		</>
	);
}
