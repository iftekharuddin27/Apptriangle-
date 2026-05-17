export type ServiceContent = {
  slug: string;
  title: string;
  tagline: string;
  hero: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  offerings: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServiceContent[] = [
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    tagline: "Scale your team with elite tech talent.",
    hero: "Extend Your Team. Accelerate Delivery.",
    intro:
      "Apptriangle's Staff Augmentation service plugs vetted developers, engineers, and IT specialists directly into your team — so you ship faster without the overhead of full-time hiring.",
    highlights: [
      { title: "Vetted Talent", desc: "Top 5% engineers selected through a rigorous multi-stage technical screen." },
      { title: "Rapid Onboarding", desc: "Most engagements start within 7–10 business days of requirement signoff." },
      { title: "Full Integration", desc: "Our resources work in your stack, your stand-ups, and your delivery cadence." },
    ],
    offerings: [
      { title: "Frontend & Backend Engineers", desc: "React, Next.js, Node, .NET, Python, Java, PHP, and more." },
      { title: "Mobile Developers", desc: "iOS, Android, Flutter, and React Native specialists." },
      { title: "Cloud & DevOps", desc: "AWS, Azure, GCP, Kubernetes, CI/CD, and SRE expertise." },
      { title: "Data & AI Engineers", desc: "ML pipelines, data warehousing, analytics, and LLM ops." },
      { title: "QA & Test Automation", desc: "Manual, automation, performance, and security testing." },
      { title: "Project & Product Leads", desc: "Scrum masters, BAs, and technical PMs to keep delivery on track." },
    ],
    process: [
      { step: "01", title: "Discover", desc: "We map your skill gaps, stack, and timeline in a 30-minute scoping call." },
      { step: "02", title: "Match", desc: "Receive 2–3 pre-vetted candidate profiles within 5 business days." },
      { step: "03", title: "Interview", desc: "You interview, you decide. We coordinate logistics end-to-end." },
      { step: "04", title: "Onboard", desc: "Resource embeds with your team and starts delivering from week one." },
    ],
    benefits: [
      "Flexible monthly contracts — scale up or down on demand",
      "Cost savings of 40–60% versus local full-time hires",
      "No recruitment fees, no payroll overhead",
      "Dedicated account manager for the lifetime of the engagement",
    ],
    faqs: [
      {
        q: "How quickly can a resource start?",
        a: "For common stacks (React, Node, .NET) we typically place a resource within 7–10 business days. Niche skills may take 2–3 weeks.",
      },
      {
        q: "Can I scale the team up or down?",
        a: "Yes. Our contracts are monthly, with a 30-day notice period to add or release resources.",
      },
      {
        q: "Who manages the resource day-to-day?",
        a: "You do. The engineer reports into your delivery lead. We provide a dedicated account manager for any escalations.",
      },
    ],
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    tagline: "Predictable IT operations, 24/7.",
    hero: "Your IT, Always On.",
    intro:
      "We take ownership of your IT operations — from helpdesk and infrastructure to security and compliance — so your teams can focus on the business.",
    highlights: [
      { title: "24/7 Monitoring", desc: "Round-the-clock NOC coverage across all your critical systems." },
      { title: "Predictable Pricing", desc: "Flat monthly fees with no surprise charges or hidden hourly rates." },
      { title: "Proactive Maintenance", desc: "We catch and resolve 80% of issues before users notice." },
    ],
    offerings: [
      { title: "End-User Helpdesk", desc: "L1/L2/L3 support across email, chat, phone, and ticketing." },
      { title: "Server & Network Management", desc: "Patching, monitoring, backups, and capacity planning." },
      { title: "Cloud Infrastructure", desc: "AWS, Azure, and Microsoft 365 administration and optimization." },
      { title: "Endpoint Security", desc: "Antivirus, EDR, MDM, and zero-trust access control." },
      { title: "Backup & DR", desc: "Automated, tested backups with documented recovery objectives." },
      { title: "Vendor Management", desc: "Single point of accountability across your tech vendors." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Full discovery of your current environment, gaps, and risks." },
      { step: "02", title: "Stabilize", desc: "Quick wins: monitoring, backups, and security hardening in 30 days." },
      { step: "03", title: "Optimize", desc: "Cost reduction, automation, and lifecycle planning." },
      { step: "04", title: "Innovate", desc: "Quarterly business reviews focused on enabling growth." },
    ],
    benefits: [
      "Reduce IT operational costs by up to 30%",
      "99.9% infrastructure uptime SLA",
      "Documented runbooks for every critical system",
      "Compliance-ready (ISO 27001, SOC 2, HIPAA)",
    ],
    faqs: [
      { q: "Do you replace our internal IT team?", a: "We can fully manage IT, or co-manage alongside your internal team — whichever fits your operating model." },
      { q: "What's your response time SLA?", a: "Critical incidents: 15 minutes. High: 1 hour. Medium: 4 hours. Low: next business day." },
      { q: "Can we keep our existing tools?", a: "Yes. We work with your existing stack and only recommend changes when there's a clear business case." },
    ],
  },
  {
    slug: "process-automation",
    title: "Business Process Automation",
    tagline: "Eliminate repetitive work. Reclaim your time.",
    hero: "Automate the Mundane. Amplify the Meaningful.",
    intro:
      "We design and deploy automation across your operations — RPA bots, workflow engines, and AI-assisted processes — to remove repetitive work and reduce error rates.",
    highlights: [
      { title: "ROI in 90 Days", desc: "Most automation projects pay for themselves within a single quarter." },
      { title: "End-to-End Delivery", desc: "From process discovery to production support, all under one roof." },
      { title: "Tooling-Agnostic", desc: "UiPath, Power Automate, Zapier, n8n, and custom Python — we pick what fits." },
    ],
    offerings: [
      { title: "RPA Bot Development", desc: "Attended and unattended bots for back-office workflows." },
      { title: "Workflow Orchestration", desc: "Power Automate and Zapier flows that connect your SaaS stack." },
      { title: "Document Automation", desc: "OCR, intelligent extraction, and AI-powered data capture." },
      { title: "AI-Assisted Workflows", desc: "LLM-powered triage, classification, and decision support." },
      { title: "Process Mining", desc: "Data-driven discovery of automation opportunities." },
      { title: "Bot Management", desc: "Monitoring, error handling, and continuous improvement." },
    ],
    process: [
      { step: "01", title: "Discover", desc: "Workshop to identify and prioritize automation candidates by ROI." },
      { step: "02", title: "Design", desc: "Process redesign and automation blueprints reviewed with stakeholders." },
      { step: "03", title: "Build", desc: "Iterative bot development with weekly demos." },
      { step: "04", title: "Operate", desc: "Production deployment with monitoring and continuous improvement." },
    ],
    benefits: [
      "Cut manual processing time by 60–80%",
      "Near-zero error rates on data entry tasks",
      "Free up FTEs for higher-value strategic work",
      "Audit-ready logs of every automated transaction",
    ],
    faqs: [
      { q: "Which tasks are best to automate first?", a: "Rule-based, high-volume, low-exception processes — invoice processing, report generation, and data reconciliation are common starting points." },
      { q: "Will automation replace our staff?", a: "Our clients typically redeploy staff to higher-value work rather than reducing headcount." },
      { q: "How do you handle exceptions?", a: "Bots route exceptions to human reviewers via your ticketing system, with full audit trails." },
    ],
  },
  {
    slug: "app-development",
    title: "Web & Mobile App Development",
    tagline: "From MVP to enterprise — we build apps that scale.",
    hero: "Build Software People Love.",
    intro:
      "We design, build, and ship web and mobile applications across industries — from B2B SaaS and fintech to logistics and healthcare. Modern stacks, clean architecture, real outcomes.",
    highlights: [
      { title: "Product Mindset", desc: "We obsess over user outcomes, not just feature checklists." },
      { title: "Modern Stack", desc: "React, Next.js, Node, .NET, Flutter, React Native, and more." },
      { title: "Ship in Weeks", desc: "MVPs delivered in 8–12 weeks with a battle-tested playbook." },
    ],
    offerings: [
      { title: "Web Applications", desc: "React, Next.js, and Vue SPAs and SSR apps with Tailwind UI systems." },
      { title: "Mobile Applications", desc: "iOS, Android, Flutter, and React Native cross-platform builds." },
      { title: "API & Backend", desc: "REST and GraphQL APIs on Node, .NET, Python, and Go." },
      { title: "Progressive Web Apps", desc: "Installable, offline-ready PWAs that feel native." },
      { title: "Modernization", desc: "Legacy app rebuilds and incremental migrations." },
      { title: "DevOps & CI/CD", desc: "Containerization, GitHub Actions, and zero-downtime deployments." },
    ],
    process: [
      { step: "01", title: "Discover", desc: "Product and technical discovery to define scope, users, and success metrics." },
      { step: "02", title: "Design", desc: "UX flows, wireframes, and high-fidelity UI in your brand system." },
      { step: "03", title: "Build", desc: "Two-week sprints with demoable increments every iteration." },
      { step: "04", title: "Launch", desc: "Production deploy, App Store submission, and post-launch support." },
    ],
    benefits: [
      "Fixed-price MVPs from $25k",
      "Dedicated full-stack squads of 3–7 engineers",
      "Source code, IP, and infra fully owned by you",
      "Optional 90-day post-launch warranty included",
    ],
    faqs: [
      { q: "Do you build native or cross-platform mobile?", a: "Both. We default to React Native or Flutter for time-to-market, and recommend native (Swift/Kotlin) when performance demands it." },
      { q: "Can you take over an existing codebase?", a: "Yes — we routinely run code audits and take ownership of legacy projects with a clear stabilization plan." },
      { q: "Who owns the IP?", a: "You do, fully. All code, designs, and assets transfer on delivery and are escrowed in your repos throughout the project." },
    ],
  },
  {
    slug: "power-platform",
    title: "Microsoft Power Platform",
    tagline: "Low-code apps, automation, and analytics — done right.",
    hero: "Solve Business Problems at the Speed of Power Platform.",
    intro:
      "We design and ship enterprise-grade solutions on Power Apps, Power Automate, Power BI, and Copilot Studio — fully governed, securely integrated, and built to last.",
    highlights: [
      { title: "Certified Experts", desc: "Microsoft-certified Power Platform consultants with proven enterprise deployments." },
      { title: "Governance First", desc: "ALM, environments, and DLP policies set up correctly from day one." },
      { title: "Real Integration", desc: "Connected to Dynamics 365, SAP, Salesforce, and your line-of-business systems." },
    ],
    offerings: [
      { title: "Power Apps", desc: "Canvas and model-driven apps for line-of-business workflows." },
      { title: "Power Automate", desc: "Cloud and desktop flows, RPA, and process automation." },
      { title: "Power BI", desc: "Dashboards, semantic models, and embedded analytics." },
      { title: "Copilot Studio", desc: "AI copilots and chatbots integrated with your data." },
      { title: "Dataverse Modeling", desc: "Scalable data models, security roles, and business logic." },
      { title: "Center of Excellence", desc: "CoE Starter Kit, governance, and citizen-developer enablement." },
    ],
    process: [
      { step: "01", title: "Assess", desc: "Power Platform readiness, licensing, and architecture review." },
      { step: "02", title: "Pilot", desc: "Build a single high-impact app to prove value and patterns." },
      { step: "03", title: "Scale", desc: "Roll out CoE, governance, and templates across the enterprise." },
      { step: "04", title: "Sustain", desc: "Ongoing managed support, training, and continuous delivery." },
    ],
    benefits: [
      "10x faster delivery vs. traditional custom development",
      "Reuse Microsoft 365 licensing you already own",
      "Native security via Entra ID and Dataverse",
      "AI-ready foundation for Copilot rollouts",
    ],
    faqs: [
      { q: "Is Power Platform secure for enterprise?", a: "Yes — when configured with proper environment strategy, DLP policies, and Dataverse security roles, it meets enterprise compliance bars including ISO 27001 and SOC 2." },
      { q: "Power Apps or custom development?", a: "Power Apps wins for internal LOB apps and process automation. Custom is better for customer-facing, high-scale, or highly differentiated products." },
      { q: "Can you integrate with non-Microsoft systems?", a: "Yes. Power Platform has 1000+ connectors plus custom connectors for any REST API." },
    ],
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    tagline: "Strategy and roadmaps that ship.",
    hero: "Technology Strategy, Grounded in Delivery.",
    intro:
      "We help technology and business leaders make better decisions — through architecture reviews, modernization roadmaps, and pragmatic delivery plans built by people who've shipped at scale.",
    highlights: [
      { title: "Senior Practitioners", desc: "Every engagement led by consultants with 12+ years of delivery experience." },
      { title: "Outcome-Oriented", desc: "We measure success by business impact, not slide decks." },
      { title: "Vendor-Agnostic", desc: "Honest recommendations — we have no resale incentives." },
    ],
    offerings: [
      { title: "Digital Transformation", desc: "Multi-year roadmaps aligned to business strategy." },
      { title: "Architecture Review", desc: "Independent assessment of your stack, scalability, and risks." },
      { title: "Cloud Migration Strategy", desc: "Lift-and-shift, refactor, or rebuild — costed and sequenced." },
      { title: "Technology Due Diligence", desc: "M&A and investment-grade tech assessments." },
      { title: "CTO-as-a-Service", desc: "Fractional senior leadership for scaling tech orgs." },
      { title: "Vendor Selection", desc: "RFP, evaluation, and negotiation support." },
    ],
    process: [
      { step: "01", title: "Listen", desc: "Stakeholder interviews and document review across the org." },
      { step: "02", title: "Analyze", desc: "Current state, gaps, risks, and opportunity sizing." },
      { step: "03", title: "Recommend", desc: "Prioritized roadmap with options, costs, and trade-offs." },
      { step: "04", title: "Execute", desc: "Optional delivery support to operationalize the plan." },
    ],
    benefits: [
      "Independent, vendor-neutral perspective",
      "Reusable artifacts: architecture diagrams, roadmaps, RACI",
      "Board-ready presentations and business cases",
      "Optional execution muscle when you need it",
    ],
    faqs: [
      { q: "How long is a typical engagement?", a: "Strategy engagements run 4–12 weeks. Ongoing CTO-as-a-Service is monthly." },
      { q: "Do you bring delivery teams too?", a: "Yes. We can transition from advisory into hands-on delivery seamlessly." },
      { q: "Will you put it in writing?", a: "Every engagement ends with a written report, board deck, and executable roadmap." },
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    tagline: "From idea to live product in 8–12 weeks.",
    hero: "Validate Faster. Ship Smarter.",
    intro:
      "We help founders and product teams turn ideas into shippable products in weeks, not months — with battle-tested templates, modern stacks, and an obsessive focus on the riskiest assumptions.",
    highlights: [
      { title: "Fixed Timeline", desc: "8–12 week roadmap, agreed upfront, with weekly demos." },
      { title: "Founder Partnership", desc: "Daily collaboration with your team, not arms-length delivery." },
      { title: "Production-Ready", desc: "Real auth, real payments, real analytics — not throwaway code." },
    ],
    offerings: [
      { title: "Product Discovery", desc: "Hypothesis mapping, user flows, and scope-cutting." },
      { title: "UX & UI Design", desc: "End-to-end Figma designs in your brand system." },
      { title: "Full-Stack Build", desc: "Web + mobile + API in a unified Next.js or React Native stack." },
      { title: "Auth, Billing, Analytics", desc: "Supabase or Auth.js, Stripe, and PostHog wired in from day one." },
      { title: "Launch Support", desc: "App Store, Play Store, and production deploy." },
      { title: "Iteration Sprints", desc: "Optional ongoing squads to iterate after launch." },
    ],
    process: [
      { step: "01", title: "Sprint Zero", desc: "One-week intensive: scope, design, and architecture locked in." },
      { step: "02", title: "Build", desc: "Weekly demos, daily Slack, transparent GitHub access." },
      { step: "03", title: "Beta", desc: "TestFlight / closed beta with your earliest users." },
      { step: "04", title: "Launch", desc: "Public launch with analytics, monitoring, and warranty." },
    ],
    benefits: [
      "Fixed-price packages from $25k",
      "Full IP ownership and source code from day one",
      "Battle-tested starter templates accelerate time-to-market",
      "Optional ongoing engineering retainer post-launch",
    ],
    faqs: [
      { q: "What stack do you use for MVPs?", a: "Next.js + TypeScript + Tailwind + Supabase or Postgres on the backend. React Native for mobile. We adjust to fit the product." },
      { q: "Can the MVP scale post-launch?", a: "Yes. We architect for the next 100k users, not for throwaway demos." },
      { q: "Do you do non-disclosure agreements?", a: "Mutual NDAs are standard before discovery." },
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & Machine Learning",
    tagline: "AI that ships, not science projects.",
    hero: "Production AI for Real Businesses.",
    intro:
      "We design, build, and operate AI and ML systems — from LLM-powered applications and copilots to forecasting models and computer vision pipelines — with a focus on reliability and ROI.",
    highlights: [
      { title: "From POC to Production", desc: "We bridge the gap most AI projects fail to cross." },
      { title: "Responsible AI", desc: "Evals, guardrails, and observability built in from day one." },
      { title: "Stack Flexibility", desc: "OpenAI, Anthropic, open-source, on-prem — your data, your call." },
    ],
    offerings: [
      { title: "LLM Applications", desc: "RAG systems, agents, and copilots powered by GPT-4, Claude, and Gemini." },
      { title: "Custom Model Training", desc: "Fine-tuning and LoRA for domain-specific tasks." },
      { title: "Computer Vision", desc: "Detection, classification, OCR, and document understanding." },
      { title: "Forecasting & Optimization", desc: "Demand, pricing, and operational ML models." },
      { title: "MLOps Platforms", desc: "Model registries, evaluation suites, and CI/CD for ML." },
      { title: "Data Pipelines", desc: "Feature stores, vector databases, and streaming ingestion." },
    ],
    process: [
      { step: "01", title: "Use Case Selection", desc: "ROI-ranked use cases mapped to your data readiness." },
      { step: "02", title: "Prototype", desc: "Working prototype in 4–6 weeks with measurable evals." },
      { step: "03", title: "Productionize", desc: "Hardening, scaling, monitoring, and red-team testing." },
      { step: "04", title: "Operate", desc: "Continuous evaluation, drift monitoring, and improvement." },
    ],
    benefits: [
      "Eval-driven development — every change measured before deploy",
      "Hybrid and on-prem deployments for data-sensitive industries",
      "Cost-optimized inference with caching and routing",
      "Compliance-ready audit trails for regulated sectors",
    ],
    faqs: [
      { q: "Do you build with open-source or commercial models?", a: "Both. We pick based on accuracy, cost, latency, and data sensitivity. We're model-agnostic." },
      { q: "Can our data stay private?", a: "Yes — we deploy on your VPC, on-prem, or via private model endpoints. No training on your data unless explicit." },
      { q: "How do you measure AI quality?", a: "Every project ships with an evaluation harness — golden datasets, automated grading, and regression tests." },
    ],
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    tagline: "From data chaos to decision clarity.",
    hero: "Make Every Decision Data-Backed.",
    intro:
      "We design data platforms, dashboards, and analytical models that give your leadership team a single source of truth — and the agility to act on it.",
    highlights: [
      { title: "Modern Data Stack", desc: "Snowflake, BigQuery, dbt, Fivetran, and Power BI — done right." },
      { title: "Self-Serve Culture", desc: "Empower business users to answer their own questions." },
      { title: "Trusted Numbers", desc: "Tested data models with documented lineage and SLAs." },
    ],
    offerings: [
      { title: "Data Warehousing", desc: "Snowflake, BigQuery, and Redshift implementations." },
      { title: "ETL / ELT Pipelines", desc: "Fivetran, Airbyte, and custom connectors." },
      { title: "Dimensional Modeling", desc: "dbt-driven semantic layers with versioned tests." },
      { title: "BI Dashboards", desc: "Power BI, Tableau, Looker, and Metabase deployments." },
      { title: "Embedded Analytics", desc: "Customer-facing dashboards inside your products." },
      { title: "Data Governance", desc: "Catalogs, lineage, and access control frameworks." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Map data sources, quality, and stakeholder reporting needs." },
      { step: "02", title: "Architect", desc: "Reference architecture and tooling selection." },
      { step: "03", title: "Build", desc: "Iterative pipeline and dashboard delivery." },
      { step: "04", title: "Adopt", desc: "Training, enablement, and analyst hand-over." },
    ],
    benefits: [
      "Single source of truth for the entire business",
      "Self-service BI reduces ad-hoc data requests by 70%",
      "Data quality tests catch issues before they hit dashboards",
      "Cloud-native architectures scale with your growth",
    ],
    faqs: [
      { q: "Power BI or Tableau?", a: "Power BI for Microsoft-heavy shops and tighter Excel integration. Tableau for advanced visual analytics. We help you decide based on your stack." },
      { q: "Do we need a data warehouse?", a: "Once you have 3+ source systems and recurring reports, yes — a warehouse pays for itself within months." },
      { q: "How long until first dashboard?", a: "With our accelerators, 4–6 weeks from kickoff to first production dashboard." },
    ],
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    tagline: "AI assistants that handle real work.",
    hero: "Conversational AI Built for Outcomes.",
    intro:
      "We build production chatbots and AI assistants — for customer support, internal helpdesk, sales, and operations — grounded in your data and integrated with your systems.",
    highlights: [
      { title: "RAG-Grounded", desc: "Bots cite your docs, not hallucinate from public training data." },
      { title: "System Integrated", desc: "CRMs, ticketing, ERPs — bots take real actions, not just chat." },
      { title: "Multi-Channel", desc: "Web, WhatsApp, MS Teams, Slack, and voice from a single brain." },
    ],
    offerings: [
      { title: "Customer Support Bots", desc: "Tier-1 deflection with seamless human handoff." },
      { title: "Internal Helpdesk Bots", desc: "HR, IT, and policy assistants for your employees." },
      { title: "Sales & Lead Qualification", desc: "Conversational lead capture and routing." },
      { title: "Voice Assistants", desc: "Phone IVR and voice-first agents." },
      { title: "WhatsApp & Teams Bots", desc: "Native deployments inside your messaging stack." },
      { title: "Custom Copilots", desc: "Embedded copilots inside your SaaS or internal tools." },
    ],
    process: [
      { step: "01", title: "Use Cases", desc: "Identify high-volume conversations worth automating." },
      { step: "02", title: "Knowledge", desc: "Ingest, chunk, and index your knowledge base." },
      { step: "03", title: "Build", desc: "Build, evaluate, and refine the agent with golden test sets." },
      { step: "04", title: "Deploy", desc: "Roll out with analytics, escalation paths, and continuous tuning." },
    ],
    benefits: [
      "Deflect 40–60% of tier-1 support tickets",
      "24/7 coverage in any language",
      "Reduce average handle time for live agents",
      "Full conversation analytics and continuous improvement loops",
    ],
    faqs: [
      { q: "Will the bot hallucinate?", a: "Our RAG architecture and guardrails dramatically reduce hallucinations. Every answer can be traced to a source document." },
      { q: "Which LLM do you use?", a: "GPT-4, Claude, Gemini, or open-source models like Llama. We pick based on cost, latency, and accuracy for your use case." },
      { q: "How do we measure success?", a: "Deflection rate, CSAT, conversation analytics, and escalation accuracy — all instrumented from day one." },
    ],
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    tagline: "Protect what you've built.",
    hero: "Security That Scales With Your Business.",
    intro:
      "We help organizations harden their systems, satisfy compliance, and respond fast when incidents happen — through assessments, managed security, and incident response.",
    highlights: [
      { title: "Certified Experts", desc: "CISSP, OSCP, and CEH-certified consultants on every engagement." },
      { title: "Defense in Depth", desc: "Endpoint, network, identity, and application layers covered." },
      { title: "Compliance-Ready", desc: "ISO 27001, SOC 2, PCI DSS, and GDPR programs delivered end-to-end." },
    ],
    offerings: [
      { title: "Security Assessments", desc: "Risk assessments, vulnerability scans, and gap analyses." },
      { title: "Penetration Testing", desc: "Web app, mobile app, network, and red-team engagements." },
      { title: "Managed Detection & Response", desc: "24/7 SOC monitoring with rapid containment." },
      { title: "Identity & Access", desc: "Entra ID, Okta, MFA, and zero-trust deployments." },
      { title: "Endpoint Security", desc: "EDR, MDM, and DLP across all your endpoints." },
      { title: "Incident Response", desc: "Forensics, containment, and post-incident reviews." },
    ],
    process: [
      { step: "01", title: "Assess", desc: "Threat model your environment and prioritize risk." },
      { step: "02", title: "Remediate", desc: "Close gaps with prioritized, costed remediation plans." },
      { step: "03", title: "Operate", desc: "Continuous monitoring and threat detection." },
      { step: "04", title: "Improve", desc: "Tabletop exercises, red teaming, and quarterly reviews." },
    ],
    benefits: [
      "Reduce mean-time-to-detect to under 15 minutes",
      "Pass audits the first time with documented controls",
      "Cyber insurance premium reductions through demonstrable controls",
      "Board-ready security posture reporting",
    ],
    faqs: [
      { q: "We're small — do we need this?", a: "SMBs are the most-targeted segment for ransomware. Even a basic assessment + EDR + MFA reduces risk dramatically." },
      { q: "Can you help with cyber insurance?", a: "Yes. We map controls to common insurer questionnaires and remediate gaps before renewal." },
      { q: "Do you do incident response?", a: "Yes — 24/7 IR retainers available, with breach response within 1 hour of activation." },
    ],
  },
  {
    slug: "email-collaboration",
    title: "Email & Collaboration",
    tagline: "Microsoft 365 and Google Workspace, done right.",
    hero: "Collaborate Securely. Anywhere.",
    intro:
      "We deploy, secure, and manage Microsoft 365 and Google Workspace — so your teams collaborate seamlessly across email, documents, video, and chat.",
    highlights: [
      { title: "Licensing Optimized", desc: "We right-size SKUs and recover spend from underused licenses." },
      { title: "Migrations Without Drama", desc: "Hundreds of mailboxes migrated with zero data loss." },
      { title: "Secure by Default", desc: "MFA, conditional access, and DLP configured from day one." },
    ],
    offerings: [
      { title: "Microsoft 365 Deployment", desc: "Tenant setup, licensing, and policy configuration." },
      { title: "Google Workspace Migration", desc: "M365 ↔ Google migrations with full fidelity." },
      { title: "Email Security", desc: "Anti-phishing, ATP, and DMARC/DKIM/SPF hardening." },
      { title: "Teams & SharePoint", desc: "Governance, intranet, and collaboration platforms." },
      { title: "Backup & Archiving", desc: "Third-party backup and retention for M365 and Google data." },
      { title: "Managed Administration", desc: "Day-to-day tenant administration and user support." },
    ],
    process: [
      { step: "01", title: "Discover", desc: "Audit your current setup, licensing, and usage." },
      { step: "02", title: "Migrate", desc: "Phased migration with pilot users, validation, and cutover." },
      { step: "03", title: "Secure", desc: "Layer in security policies, MFA, and DLP." },
      { step: "04", title: "Optimize", desc: "Adoption training and ongoing license rightsizing." },
    ],
    benefits: [
      "Up to 25% savings on Microsoft 365 licensing through right-sizing",
      "Zero-downtime mailbox migrations",
      "Phishing simulation programs to harden your human layer",
      "Single point of accountability for your collaboration stack",
    ],
    faqs: [
      { q: "Do you resell licenses?", a: "We can, but we'll always recommend the cheapest path — including direct purchase if it benefits you." },
      { q: "How long do migrations take?", a: "Small (< 50 users): 2–4 weeks. Mid-market (50–500): 6–10 weeks. Enterprise: 3–6 months." },
      { q: "Can you back up M365?", a: "Yes — Microsoft's native retention is not a backup. We deploy proven third-party tools like Veeam or Datto." },
    ],
  },
  {
    slug: "ssl-certificates",
    title: "SSL Certificates",
    tagline: "Trusted SSL/TLS — managed end-to-end.",
    hero: "Encrypt Everything. Trust Everywhere.",
    intro:
      "We help organizations procure, deploy, and manage SSL/TLS certificates from the world's most trusted CAs — DigiCert, Sectigo, GlobalSign, and more — across websites, APIs, devices, and code signing.",
    highlights: [
      { title: "Multi-CA Partner", desc: "Authorized partner of DigiCert, Sectigo, and other tier-1 CAs." },
      { title: "Lifecycle Managed", desc: "Discovery, issuance, renewal, and revocation under one roof." },
      { title: "Automated Renewals", desc: "Never miss a renewal with monitored, alerted lifecycle management." },
    ],
    offerings: [
      { title: "DV / OV / EV SSL", desc: "Domain, Organization, and Extended Validation certificates." },
      { title: "Wildcard & Multi-Domain", desc: "SAN, wildcard, and multi-domain certificates." },
      { title: "Code Signing", desc: "EV code signing for Windows, drivers, and app distribution." },
      { title: "Document Signing", desc: "Adobe-trusted document signing certificates." },
      { title: "Email Signing (S/MIME)", desc: "S/MIME certificates for signed and encrypted email." },
      { title: "Certificate Lifecycle Management", desc: "Discovery, monitoring, and automated renewal platforms." },
    ],
    process: [
      { step: "01", title: "Inventory", desc: "Discover every certificate across your estate — even shadow IT." },
      { step: "02", title: "Issue", desc: "Procure the right type from the right CA at the best price." },
      { step: "03", title: "Deploy", desc: "Install on servers, load balancers, devices, and CI/CD." },
      { step: "04", title: "Renew", desc: "Automated monitoring with 60/30/7-day expiry alerts." },
    ],
    benefits: [
      "Authorized reseller pricing on top-tier CAs",
      "Zero-outage renewals with lifecycle automation",
      "EV validation handled by our compliance team",
      "Single-pane visibility into every cert you own",
    ],
    faqs: [
      { q: "DV, OV, or EV?", a: "DV for non-customer-facing services. OV for B2B portals. EV for finance, e-commerce, and high-trust sites that benefit from extended validation." },
      { q: "Wildcard or SAN?", a: "Wildcard for many subdomains under one parent domain. SAN/multi-domain when you have unrelated domains to cover." },
      { q: "What about Let's Encrypt?", a: "Great for many sites — but commercial CAs add liability protection, OV/EV validation, and longer warranty coverage important for regulated industries." },
    ],
  },
  {
    slug: "document-management",
    title: "Document Management",
    tagline: "Find, control, and collaborate on every document.",
    hero: "Documents Under Control.",
    intro:
      "We design and deploy document management systems on SharePoint, M-Files, and modern DMS platforms — with versioning, retention, and workflow built in.",
    highlights: [
      { title: "Findable", desc: "Full-text search and metadata-driven retrieval across millions of documents." },
      { title: "Compliant", desc: "Retention, legal hold, and audit trails for regulated industries." },
      { title: "Workflow-Ready", desc: "Approvals, signatures, and reviews orchestrated end-to-end." },
    ],
    offerings: [
      { title: "SharePoint Information Architecture", desc: "Sites, libraries, and metadata schemas designed for scale." },
      { title: "M-Files Implementation", desc: "Metadata-driven DMS with intelligent classification." },
      { title: "Records Management", desc: "Retention, legal hold, and disposal workflows." },
      { title: "E-Signature Integration", desc: "DocuSign, Adobe Sign, and native Office signing." },
      { title: "OCR & Intelligent Capture", desc: "Convert paper and PDFs into searchable, structured data." },
      { title: "Migration & Cleanup", desc: "From file shares, legacy DMS, or shared drives — cleanly migrated." },
    ],
    process: [
      { step: "01", title: "Inventory", desc: "Audit existing repositories, taxonomies, and pain points." },
      { step: "02", title: "Design", desc: "Information architecture, metadata, and security model." },
      { step: "03", title: "Migrate", desc: "Tools-driven migration with cleanup and deduplication." },
      { step: "04", title: "Adopt", desc: "Training, change management, and continuous improvement." },
    ],
    benefits: [
      "Reduce time spent searching for documents by 50%+",
      "Audit-ready retention and disposal records",
      "Eliminate duplicate file storage costs",
      "Workflow automation cuts approval cycle times in half",
    ],
    faqs: [
      { q: "SharePoint or M-Files?", a: "SharePoint if you're invested in M365 and want strong collaboration. M-Files when metadata-driven classification and complex retention are paramount." },
      { q: "Can you migrate from network shares?", a: "Yes. We use proven migration tools that preserve permissions, timestamps, and metadata." },
      { q: "Do you handle records management?", a: "Yes — including ISO 15489 and industry-specific retention schedules." },
    ],
  },
  {
    slug: "software-licensing",
    title: "Software Licensing",
    tagline: "Buy smarter. Manage tighter. Save more.",
    hero: "Licensing Without the Headaches.",
    intro:
      "We help organizations procure, optimize, and manage software licensing — across Microsoft, Adobe, Autodesk, ZOHO, and 100+ other vendors — with transparent pricing and no lock-in.",
    highlights: [
      { title: "Transparent Pricing", desc: "Authorized reseller pricing, openly compared to direct." },
      { title: "Right-Sized SKUs", desc: "We audit usage and recover spend on under-utilized licenses." },
      { title: "Single Bill", desc: "Consolidate dozens of vendor invoices into one clean monthly statement." },
    ],
    offerings: [
      { title: "Microsoft Licensing", desc: "M365, Azure, EA, CSP, and Open Value Subscription." },
      { title: "Adobe Creative Cloud", desc: "VIP, ETLA, and team licensing." },
      { title: "Autodesk", desc: "AEC and product design collections, named-user licensing." },
      { title: "ZOHO Suite", desc: "ZOHO One and individual product licensing." },
      { title: "Security & DevTools", desc: "GitHub, Atlassian, JetBrains, and security vendor licensing." },
      { title: "License Optimization", desc: "Usage audits to identify and recover wasted spend." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Inventory of every license, owner, and utilization rate." },
      { step: "02", title: "Optimize", desc: "Right-size SKUs, consolidate vendors, and renegotiate." },
      { step: "03", title: "Procure", desc: "Single point of purchase across all vendors." },
      { step: "04", title: "Manage", desc: "Ongoing renewal calendar and quarterly true-ups." },
    ],
    benefits: [
      "Typical savings of 15–25% within the first year",
      "Single consolidated invoice across all vendors",
      "Renewal calendar with proactive reminders",
      "Vendor escalation handled by us, not you",
    ],
    faqs: [
      { q: "Why buy through you instead of direct?", a: "We typically match or beat direct pricing — and add license optimization, consolidated billing, and a single point of accountability." },
      { q: "Can you take over our existing licenses?", a: "Yes. Most agreements can be transferred or assigned to us at renewal." },
      { q: "Do you support EAs and large enterprise agreements?", a: "Yes. We support the full spectrum from SMB CSP up to enterprise EA negotiations." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find(s => s.slug === slug);
