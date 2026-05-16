"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import apptriangleLogo from "../../logo/Apptriengle logo.png";
import mapImage from "../../Contact-us Images/Blue-and-White-Simple-The-Future-Of-The-Arctic-Presentation-53-1024x576.webp.bv.webp";

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

function useScrollNav() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);
	return scrolled;
}

export default function ContactUsPage() {
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
				<section className="mx-auto max-w-290 text-center">
					<h1
						className="text-[clamp(32px,4vw,52px)] font-semibold"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Let's Contact
					</h1>
					<p className="mt-2 text-sm text-white/60">
						Have questions or need help? We're here to assist.
					</p>
				</section>

				<section className="mx-auto mt-12 grid max-w-290 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<h2 className="text-lg font-semibold">Get in Touch</h2>
						<p className="mt-3 text-sm text-white/60">
							We'd love to hear from you. Whether you have a question about our
							services, need technical support, or want to discuss a project,
							we're ready to help.
						</p>

						<div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1f2c]">
							<Image
								src={mapImage}
								alt="Global offices map"
								className="h-auto w-full object-cover"
								sizes="(max-width: 1024px) 90vw, 680px"
							/>
						</div>

						<div className="mt-8 grid gap-6 text-sm text-white/70 sm:grid-cols-2">
							<div>
								<div className="text-xs font-semibold uppercase tracking-wider text-white/50">
									Bangladesh Office
								</div>
								<div className="mt-3 flex items-start gap-2">
									<span className="text-(--blue)">📍</span>
									<span>
										House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212,
										Bangladesh.
									</span>
								</div>
								<div className="mt-3 flex items-start gap-2">
									<span className="text-(--blue)">📞</span>
									<span>
										+880 1717 888 388
										<br />
										+880 1712 152 715
									</span>
								</div>
							</div>
							<div>
								<div className="text-xs font-semibold uppercase tracking-wider text-white/50">
									Australia Office
								</div>
								<div className="mt-3 flex items-start gap-2">
									<span className="text-(--blue)">📍</span>
									<span>2-10 Mount Street, North Sydney, NSW, 2060, Australia.</span>
								</div>
								<div className="mt-3 flex items-start gap-2">
									<span className="text-(--blue)">📞</span>
									<span>+61 427 927 466</span>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-white/10 bg-[#0b1522] p-8">
						<form className="space-y-5">
							<div>
								<label className="mb-2 block text-xs font-semibold text-white">
									Full Name <span className="text-red-400">*</span>
								</label>
								<input
									type="text"
									className="w-full rounded-lg border border-white/10 bg-[#0f1d2e] px-4 py-3 text-sm text-white outline-none focus:border-(--blue)"
								/>
							</div>
							<div>
								<label className="mb-2 block text-xs font-semibold text-white">
									Company
								</label>
								<input
									type="text"
									className="w-full rounded-lg border border-white/10 bg-[#0f1d2e] px-4 py-3 text-sm text-white outline-none focus:border-(--blue)"
								/>
							</div>
							<div>
								<label className="mb-2 block text-xs font-semibold text-white">
									Contact Number <span className="text-red-400">*</span>
								</label>
								<input
									type="text"
									className="w-full rounded-lg border border-white/10 bg-[#0f1d2e] px-4 py-3 text-sm text-white outline-none focus:border-(--blue)"
								/>
							</div>
							<div>
								<label className="mb-2 block text-xs font-semibold text-white">
									Email Address <span className="text-red-400">*</span>
								</label>
								<input
									type="email"
									className="w-full rounded-lg border border-white/10 bg-[#0f1d2e] px-4 py-3 text-sm text-white outline-none focus:border-(--blue)"
								/>
							</div>
							<div>
								<label className="mb-2 block text-xs font-semibold text-white">
									Message
								</label>
								<textarea
									className="min-h-32 w-full rounded-lg border border-white/10 bg-[#0f1d2e] px-4 py-3 text-sm text-white outline-none focus:border-(--blue)"
								/>
							</div>
							<div className="rounded-lg border border-white/20 bg-[#0f1d2e] px-4 py-3 text-xs text-white/70">
								[ ] I'm not a robot
							</div>
							<button
								type="submit"
								className="w-full rounded-lg bg-(--blue) py-3 text-sm font-semibold text-white transition hover:bg-[#4fc5ff]"
							>
								Submit
							</button>
						</form>
					</div>
				</section>
			</main>
		</>
	);
}
