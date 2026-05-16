"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import apptriangleLogo from "../../logo/Apptriengle logo.png";
import teamWorkshopImage from "../../Career-images/pexels-fauxels-3184360-1024x683.webp";
import teamMeetingImage from "../../Career-images/pexels-fauxels-3184436-1024x683.webp";
import officeDiscussionImage from "../../Career-images/pexels-gustavo-fring-7156100-1024x683.webp";
import presentationImage from "../../Career-images/pexels-mart-production-7550397-1024x683.webp";
import creativeSessionImage from "../../Career-images/pexels-rethaferguson-3810756-1024x683.webp";

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

const JOBS = [
	"Jr. Frontend Developer",
	"React Developer",
	"React.js Developer",
	"IT Specialist",
	"SQA Developer",
	"DevOps Developer",
	"Sr. Frontend Developer",
	"UI/UX Developer",
	"Sr. Python Developer",
];

const VALUES = [
	{
		title: "Growth",
		description: "Continuous learning and career advancement opportunities",
	},
	{
		title: "Collaboration",
		description: "Work with a talented and diverse team",
	},
	{
		title: "Learning",
		description: "Access to learning platforms and mentorships",
	},
	{
		title: "Flexibility",
		description: "Work-life balance with flexible working arrangements",
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

export default function CareerPage() {
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
			if (typeof document === "undefined") return "light";
			return document.documentElement.getAttribute("data-theme") === "dark"
				? "dark"
				: "light";
		},
		() => "light",
	);

	useEffect(() => {
		if (typeof document === "undefined") return;
		const stored = window.localStorage.getItem("theme");
		if (stored && stored !== document.documentElement.getAttribute("data-theme")) {
			document.documentElement.setAttribute("data-theme", stored);
			window.dispatchEvent(new Event("theme-change"));
		}
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", nextTheme);
		window.localStorage.setItem("theme", nextTheme);
		window.dispatchEvent(new Event("theme-change"));
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
				<ul className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
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
					<li>
						<a
							href="/contact-us"
							className="rounded-md bg-(--blue) px-5 py-2 text-sm font-semibold text-(--navy) transition hover:-translate-y-px hover:bg-[#4fc5ff]"
						>
							Schedule a Call
						</a>
					</li>
				</ul>
				<button type="button" className={toggleClassName} onClick={toggleTheme}>
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

			<main className="min-h-screen bg-[radial-gradient(circle_at_top,#0d1c2a_0%,#070e18_45%,#050b16_100%)] px-[5vw] pb-20 pt-32 text-white">
				<section className="mx-auto max-w-290">
					<div className="text-center">
						<h1
							className="text-[clamp(30px,4vw,44px)] font-semibold"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Grow With Apptriangle
						</h1>
						<p className="mt-2 text-sm text-white/60">
							Join a team that values innovation, collaboration, and continuous
							learning
						</p>
					</div>

					<div className="mt-10 grid gap-4 lg:grid-cols-3">
						{JOBS.map(job => (
							<div
								key={job}
								className="rounded-md border border-white/10 bg-white px-6 py-4 text-[#0c2242] shadow-[0_12px_28px_rgba(5,10,20,0.3)]"
							>
								<div className="text-sm font-semibold text-[#c266ff]">
									{job}
								</div>
								<a
									href="/contact-us"
									className="mt-2 inline-flex items-center text-xs font-semibold text-[#3b82f6]"
								>
									More Details -&gt;
								</a>
							</div>
						))}
					</div>
				</section>

				<section className="mx-auto mt-16 max-w-290">
					<div className="text-center">
						<h2 className="text-lg font-semibold">
							Life at <span className="text-(--blue)">Apptriangle</span>
						</h2>
						<p className="mt-1 text-xs text-white/60">
							What makes us a great place to work
						</p>
					</div>

					<div className="mt-8 grid gap-6 lg:grid-cols-4">
						{VALUES.map(value => (
							<div
								key={value.title}
								className="rounded-xl border border-white/10 bg-[#0c2a30] px-6 py-6 text-center"
							>
								<div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm">
									★
								</div>
								<div className="text-sm font-semibold">{value.title}</div>
								<p className="mt-2 text-xs text-white/60">
									{value.description}
								</p>
							</div>
						))}
					</div>

					<div className="mt-10 grid gap-6 lg:grid-cols-3">
						<div className="lg:col-span-2">
							<Image
								src={teamWorkshopImage}
								alt="Team workshop"
								className="h-64 w-full rounded-xl object-cover"
							/>
						</div>
						<div>
							<Image
								src={teamMeetingImage}
								alt="Team meeting"
								className="h-64 w-full rounded-xl object-cover"
							/>
						</div>
						<div>
							<Image
								src={officeDiscussionImage}
								alt="Office discussion"
								className="h-64 w-full rounded-xl object-cover"
							/>
						</div>
						<div>
							<Image
								src={presentationImage}
								alt="Presentation"
								className="h-64 w-full rounded-xl object-cover"
							/>
						</div>
						<div>
							<Image
								src={creativeSessionImage}
								alt="Creative session"
								className="h-64 w-full rounded-xl object-cover"
							/>
						</div>
					</div>

					<div className="mt-8 text-center text-sm text-white/70">
						<a href="/career" className="text-(--blue)">
							Join Us
						</a>{" "}
						in this exciting journey of innovation and excellence!
					</div>
				</section>
			</main>
		</>
	);
}
