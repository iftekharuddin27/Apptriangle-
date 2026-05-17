export type ResourceItem = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export type ResourceContent = {
  slug: string;
  title: string;
  tagline: string;
  hero: string;
  intro: string;
  items: ResourceItem[];
};

export const RESOURCES: ResourceContent[] = [
  {
    slug: "case-studies",
    title: "Case Studies",
    tagline: "Real outcomes from real clients.",
    hero: "Proof, Not Promises.",
    intro:
      "Explore how we've helped organizations across fintech, retail, logistics, healthcare, and the public sector ship faster, cut costs, and outperform their competition.",
    items: [
      {
        title: "Fintech: 60% Faster Loan Origination",
        category: "Fintech",
        excerpt:
          "Replaced a legacy COBOL workflow with a Next.js + Power Automate pipeline, cutting loan origination from 9 days to under 4.",
        date: "March 2026",
        readTime: "6 min read",
      },
      {
        title: "Retail: 300% Conversion Lift on D2C Storefront",
        category: "E-Commerce",
        excerpt:
          "Rebuilt a Magento storefront on Next.js with a Shopify back-end and personalized recommendations powered by an in-house ML model.",
        date: "February 2026",
        readTime: "5 min read",
      },
      {
        title: "Healthcare: HIPAA-Compliant Telehealth Platform",
        category: "Healthcare",
        excerpt:
          "Designed and shipped a multi-tenant telehealth platform supporting 12k+ daily consults across three countries.",
        date: "January 2026",
        readTime: "8 min read",
      },
      {
        title: "Logistics: 40% Reduction in Support Tickets",
        category: "Logistics",
        excerpt:
          "Deployed an LLM-powered support copilot that deflects tier-1 tickets and surfaces the right answers from 2,000+ SOPs.",
        date: "December 2025",
        readTime: "4 min read",
      },
      {
        title: "Manufacturing: RPA That Saved 11,000 Hours/Year",
        category: "Manufacturing",
        excerpt:
          "Automated invoice ingestion, three-way matching, and SAP posting using UiPath bots integrated with vendor portals.",
        date: "November 2025",
        readTime: "5 min read",
      },
      {
        title: "Public Sector: Citizen Services Portal at Scale",
        category: "Government",
        excerpt:
          "Migrated 22 legacy citizen services into a unified Power Apps portal serving 1.4M residents.",
        date: "October 2025",
        readTime: "7 min read",
      },
    ],
  },
  {
    slug: "partners",
    title: "Our Partners",
    tagline: "World-class technology partners. Better outcomes for you.",
    hero: "Built on the World's Best Technology.",
    intro:
      "Apptriangle holds active partnerships with leading platform vendors — meaning preferred pricing, certified specialists, and direct escalation paths for our clients.",
    items: [
      { title: "Microsoft Partner", category: "Cloud & Productivity", excerpt: "Solutions Partner across Modern Work, Azure, and Business Applications.", date: "Tier 1", readTime: "Certified" },
      { title: "DigiCert Authorized Partner", category: "PKI & Trust", excerpt: "Authorized issuance for SSL/TLS, code signing, and document signing.", date: "Authorized", readTime: "Tier-1 CA" },
      { title: "Sectigo Platinum Partner", category: "Digital Trust", excerpt: "Platinum-tier reseller of Sectigo SSL, S/MIME, and IoT certificates.", date: "Platinum", readTime: "Reseller" },
      { title: "Trend Micro Partner", category: "Cybersecurity", excerpt: "Endpoint, server, and cloud workload protection for hybrid estates.", date: "Authorized", readTime: "Reseller" },
      { title: "ZOHO Authorized Partner", category: "Business Suite", excerpt: "Implementation and licensing across the full ZOHO One product family.", date: "Authorized", readTime: "Partner" },
      { title: "Adobe Reseller", category: "Creative & Documents", excerpt: "Creative Cloud, Document Cloud, and Sign for teams and enterprise.", date: "Authorized", readTime: "Reseller" },
      { title: "UiPath Silver Partner", category: "Automation", excerpt: "Certified RPA developers and architects for enterprise automation.", date: "Silver", readTime: "Partner" },
      { title: "Fortinet Partner", category: "Network Security", excerpt: "Firewall, SD-WAN, and SASE deployments across hybrid networks.", date: "Authorized", readTime: "Reseller" },
      { title: "ManageEngine Partner", category: "IT Operations", excerpt: "ITSM, endpoint management, and observability across hybrid stacks.", date: "Authorized", readTime: "Partner" },
      { title: "AnyDesk Partner", category: "Remote Access", excerpt: "Secure remote support and access licensing for managed services.", date: "Authorized", readTime: "Reseller" },
      { title: "IFS Partner", category: "Enterprise ERP", excerpt: "Implementation services for IFS Cloud across asset-intensive industries.", date: "Implementation", readTime: "Partner" },
    ],
  },
  {
    slug: "news-events",
    title: "News & Events",
    tagline: "Announcements, milestones, and where to meet us.",
    hero: "What's Happening at Apptriangle.",
    intro:
      "Catch up on company news, product updates, partnership announcements, and the conferences where you can meet our team.",
    items: [
      {
        title: "Apptriangle Featured on News24 TV",
        category: "Media",
        excerpt: "Our directors discussed the future of managed IT in South Asia in a primetime interview on News24.",
        date: "April 2026",
        readTime: "Press",
      },
      {
        title: "New Cybersecurity Services Launch",
        category: "Announcement",
        excerpt: "We've expanded our security practice with 24/7 MDR, IR retainers, and a new SOC in Sydney.",
        date: "March 2026",
        readTime: "Press release",
      },
      {
        title: "Apptriangle Wins Best IT Services Award",
        category: "Award",
        excerpt: "Recognized as the Best Cross-Border IT Services Provider at the 2026 Asia-Pacific Tech Awards.",
        date: "February 2026",
        readTime: "Award",
      },
      {
        title: "Sponsoring Sydney CTO Summit 2026",
        category: "Event",
        excerpt: "Join us at the Sydney CTO Summit on June 12 — booth 21, plus a keynote on AI rollout governance.",
        date: "June 12, 2026",
        readTime: "Conference",
      },
      {
        title: "Power Platform Roadshow — Dhaka & Singapore",
        category: "Event",
        excerpt: "A two-city, hands-on workshop series with Microsoft Power Platform leadership.",
        date: "May 2026",
        readTime: "Workshop",
      },
      {
        title: "Microsoft Solutions Partner — Renewed",
        category: "Partnership",
        excerpt: "Renewed Solutions Partner designations across Modern Work, Azure, and Business Applications.",
        date: "January 2026",
        readTime: "Update",
      },
    ],
  },
  {
    slug: "blogs",
    title: "Blogs",
    tagline: "Field notes from our practice.",
    hero: "Insights from the Trenches.",
    intro:
      "Practical writing from the engineers, architects, and consultants doing the work — covering modern architecture, AI rollouts, security, and delivery practices.",
    items: [
      {
        title: "Why Most Enterprise AI Pilots Fail (and How to Fix Yours)",
        category: "AI / Strategy",
        excerpt:
          "Five recurring failure modes we see in enterprise AI rollouts — and the practices that help projects ship to production instead.",
        date: "April 2026",
        readTime: "8 min read",
      },
      {
        title: "Power Platform Governance: A Pragmatic Playbook",
        category: "Power Platform",
        excerpt: "How to set up environments, DLP, and the CoE Starter Kit before your tenant is overrun by shadow apps.",
        date: "March 2026",
        readTime: "10 min read",
      },
      {
        title: "Choosing Between RAG, Fine-Tuning, and Prompting",
        category: "AI / Engineering",
        excerpt: "A decision framework for picking the right LLM customization technique for your use case and budget.",
        date: "March 2026",
        readTime: "7 min read",
      },
      {
        title: "Modern Auth in Next.js 16 with Supabase",
        category: "Engineering",
        excerpt: "Production-ready patterns for sessions, RLS, and middleware in the App Router.",
        date: "February 2026",
        readTime: "6 min read",
      },
      {
        title: "The Hidden Cost of Cheap SSL",
        category: "Security",
        excerpt: "Why some certificate purchases end up costing more than they save — and how to avoid the traps.",
        date: "January 2026",
        readTime: "5 min read",
      },
      {
        title: "Migrating 1,000 Users to Microsoft 365 Without Drama",
        category: "Modern Work",
        excerpt: "A field-tested runbook for mid-market mailbox migrations with zero data loss.",
        date: "January 2026",
        readTime: "9 min read",
      },
    ],
  },
];

export const getResourceBySlug = (slug: string) => RESOURCES.find(r => r.slug === slug);
