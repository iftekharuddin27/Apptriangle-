"use client";

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
    <div ref={ref} style={{ textAlign: "center" }}>
      <div className="stat-num">
        {val}
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ApptrianglePage() {
  const scrolled = useScrollNav();
  useFadeUp();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      setTheme(current);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <>
      {/* ── NAV ── */}
      <nav className={scrolled ? "scrolled" : "top"}>
        <a href="#" className="nav-logo">
          <img 
            src={apptriangleLogo.src} 
            alt="Apptriangle Logo" 
            style={{ height: "70px", width: "auto", objectFit: "contain" }} 
          />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Schedule a Call
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === "light" ? "#1e293b" : "#f1f5f9",
            color: theme === "light" ? "#f8fafc" : "#1e293b",
          }}
        >
          <span className="toggle-icon" aria-hidden="true">
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "black" }}>
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
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "black" }}>
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
          <span className="toggle-label">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero mesh-bg">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            7+ Years of Technology Excellence
          </div>
          <h1 className="sui">
            Technology
            <br />
            <span>on Demand</span>
          </h1>
          <p>
            We are a global technology service provider dedicated to empowering
            businesses with cutting-edge solutions. Our expert team is
            available 24/7 to attend to your needs.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">
              Explore Our Services →
            </a>
            <a href="#contact" className="btn-outline">
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Background grid decoration */}
        <div className="hero-visual">
          <div className="hero-grid">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="hero-grid-cell"
                style={{ animationDelay: `${(i * 0.07) % 2}s` }}
              />
            ))}
          </div>
        </div>

      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {STATS.map(stat => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="container">
          <div className="fade-up">
            <h2 className="section-title sui">Our Services</h2>
            <p className="section-sub">
              Reliable and innovative services designed for your business
              success, delivered by experts who care.
            </p>
          </div>
          <div className="services-grid fade-up">
            {SERVICES.map(service => (
              <div key={service.title} className="service-card">
                <div 
                  className="service-icon"
                  style={{
                    backgroundColor: "#f8fafc",
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}
                >
                  {service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact" className="service-link">
                  Learn more <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="fade-up">
              <h2 className="section-title sui">About Apptriangle</h2>
              <p className="section-sub">
                We are a global leading technology service provider dedicated
                to empowering businesses with cutting-edge solutions. With a
                dynamic team of industry experts and a passion for innovation.
              </p>
              <ul className="about-list">
                <li>
                  <span className="check">✦</span> Professional Services with
                  certified experts
                </li>
                <li>
                  <span className="check">✦</span> Affordable pricing with
                  transparent models
                </li>
                <li>
                  <span className="check">✦</span> Quality solutions built to
                  scale with you
                </li>
                <li>
                  <span className="check">✦</span> 24/7 support across time
                  zones globally
                </li>
              </ul>
              <a href="#contact" className="btn-primary">
                Get in Touch →
              </a>
            </div>
            <div className="about-visual fade-up">
              <div
                className="about-ring"
                style={{
                  width: 400,
                  height: 400,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              <div
                className="about-ring"
                style={{
                  width: 300,
                  height: 300,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  animationDirection: "reverse",
                  animationDuration: "15s",
                }}
              />
              <div className="about-triangle-big">
                <div className="about-triangle-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section id="partners" className="partners-section">
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title sui" style={{ margin: "0 auto" }}>
              Our Partners
            </h2>
          </div>
        </div>
        <div className="partners-track fade-up">
          <div className="partners-inner">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div 
                key={i} 
                className="partner-badge" 
                style={{ 
                  backgroundColor: "#1e293b", 
                  padding: "12px", 
                  borderRadius: "8px", 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}
              >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                style={{ 
                  height: partner.name === "Sectigo" ? "70px" : (partner.name === "AnyDesk" ? "60px" : "40px"),
                  width: "auto", 
                  objectFit: "contain" 
                }}
              />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="section-title sui">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="testimonial-card fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="stars">{"★".repeat(testimonial.stars)}</div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name[0]}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section">
        <div className="container">
          <h2 className="sui">Ready to Transform Your Business?</h2>
          <p>
            Let's build something extraordinary together. Our team is ready
            when you are.
          </p>
          <div className="cta-btns">
            <a href="#contact" className="btn-primary">
              Contact Us Today →
            </a>
            <a
              href="https://outlook.office.com/book/MeetwithApptriangle@apptriangle.com/"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title sui">Let's Work Together</h2>
              <p
                style={{
                  color: "var(--grey)",
                  lineHeight: 1.7,
                  marginBottom: 40,
                }}
              >
                Have a project in mind? We'd love to hear about it. Reach out
                and we'll get back to you within 24 hours.
              </p>
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Bangladesh Office</div>
                  <div className="contact-info-value">
                    House 54, Road 8, Block D, Niketan, Gulshan-1, Dhaka-1212
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Australia Office</div>
                  <div className="contact-info-value">
                    2-10 Mount Street, North Sydney, NSW 2060
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">+880 1717 888 388</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">info@apptriangle.com</div>
                </div>
              </div>
            </div>
            <div className="contact-form fade-up">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={event =>
                      setForm({ ...form, name: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={event =>
                      setForm({ ...form, company: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Number *</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={event =>
                      setForm({ ...form, phone: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={event =>
                      setForm({ ...form, email: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={event =>
                    setForm({ ...form, message: event.target.value })
                  }
                />
              </div>
              <button className="btn-submit">Send Message →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img 
              src={apptriangleLogo.src} 
              alt="Apptriangle Logo" 
              style={{ height: "60px", width: "auto", objectFit: "contain" }} 
              />
              <span
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
              </span>
            </div>
            <p>
              Technology on Demand — empowering businesses worldwide with
              innovative, reliable technology services.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {[
                "Staff Augmentation",
                "Managed IT",
                "App Development",
                "Power Platform",
                "AI & ML",
              ].map(service => (
                <li key={service}>
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {[
                "About Us",
                "Partners",
                "Career",
                "News & Events",
                "Blogs",
              ].map(item => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@apptriangle.com">info@apptriangle.com</a>
              </li>
              <li>
                <a href="tel:+8801717888388">+880 1717 888 388</a>
              </li>
              <li>
                <a href="tel:+61427927466">+61 427 927 466</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Apptriangle Limited. All rights reserved.</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            Bangladesh · Australia
          </span>
        </div>
      </footer>
    </>
  );
}
