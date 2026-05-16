"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import apptriangleLogo from "../../logo/Apptriengle logo.png";
import assetManagementImage from "../../Product-images/Asset-Management-300x300.webp";
import carMovementImage from "../../Product-images/Car-Movement-On-Map-240x300.webp";
import ecommerceImage from "../../Product-images/Ecommerce-300x300.webp";
import expenseTrackerImage from "../../Product-images/Expense-Tracker-240x300.webp";
import helpDeskImage from "../../Product-images/HelpDesk-300x300.webp";
import hrmImage from "../../Product-images/HRM-300x300.webp";
import inventoryProImage from "../../Product-images/Inventory-Pro-300x300.webp";
import qrBarImage from "../../Product-images/QRBar-240x300.png";
import ricoRideImage from "../../Product-images/RideShare-240x300.png";
import schoolManagementImage from "../../Product-images/School-management-300x300.webp";
import taskManagementImage from "../../Product-images/Task-Management-300x300.webp";
import trealImage from "../../Product-images/Treal-300x300.webp";

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

const PRODUCTS = [
	{ name: "Expense Tracker", image: expenseTrackerImage },
	{ name: "E-commerce", image: ecommerceImage },
	{ name: "Rico Ride", image: ricoRideImage },
	{ name: "Asset Management", image: assetManagementImage },
	{ name: "Inventory Pro", image: inventoryProImage },
	{ name: "QR Bar Generator", image: qrBarImage },
	{ name: "Task Management", image: taskManagementImage },
	{ name: "School Management System", image: schoolManagementImage },
	{ name: "Treal", image: trealImage },
	{ name: "Car Movement on Map", image: carMovementImage },
	{ name: "HRM", image: hrmImage },
	{ name: "Help Desk", image: helpDeskImage },
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

export default function ProductsPage() {
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

			<section className="min-h-screen bg-[radial-gradient(circle_at_top,#0d1c2a_0%,#070e18_45%,#050b16_100%)] px-[5vw] pb-20 pt-32 text-white">
				<div className="mx-auto max-w-290">
					<div className="mb-12 text-center">
						<h1
							className="text-[clamp(32px,4vw,52px)] font-semibold"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Our Products
						</h1>
						<p className="mt-3 text-sm text-white/60">
							Smart, secure, and scalable digital solutions for modern
							organizations.
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{PRODUCTS.map(product => (
							<div
								key={product.name}
								className="rounded-2xl border border-white/10 bg-[#0c2230] px-6 py-6 shadow-[0_12px_30px_rgba(5,10,20,0.35)] transition hover:-translate-y-1"
							>
								<div className="flex h-40 items-center justify-center">
									<Image
										src={product.image}
										alt={product.name}
										className="h-full w-auto object-contain"
										sizes="(max-width: 1024px) 40vw, 220px"
									/>
								</div>
								<div className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-white/80">
									{product.name}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
