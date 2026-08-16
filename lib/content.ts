// ─────────────────────────────────────────────────────────────
// All editable portfolio content lives here. Swap placeholders
// for real data without touching component/animation code.
// ─────────────────────────────────────────────────────────────

export const owner = {
  name: "Kawsar Ahmad",
  roles: [
    "Professional WordPress Developer",
    "Professional Shopify Developer",
    "Website SEO Expert",
    "YouTube SEO Expert",
  ],
  email: "kahmad9966@gmail.com",
  phones: ["+8801975340495", "+8801326852099"],
  whatsapp: "+8801975340495",
  telegram: "https://t.me/kawsar_ahmad_999",
  facebook: "https://www.facebook.com/mhmdkwthr.ahmd.177996",
  linkedin: "https://www.linkedin.com/in/kawser-miah-91928234b/",
};

export const aboutParagraphs = [
  "I build and optimize websites that businesses actually rely on — from WordPress builds that stay fast and maintainable, to Shopify stores tuned for conversion, to search visibility that compounds over time.",
  "My process stays disciplined: clear requirements, clean architecture, and constant communication, so there are no surprises between a kickoff call and a live launch.",
  "Beyond delivery, I stay involved — monitoring performance, fixing issues quickly, and keeping every project healthy long after handoff.",
];

export type Skill = {
  id: string;
  title: string;
  overview: string;
  level: string;
  projects: number;
  services: string[];
  strengths: string[];
};

export const skills: Skill[] = [
  {
    id: "wordpress",
    title: "WordPress Development",
    overview:
      "Custom themes, plugin architecture, and CMS builds engineered for editors and end users alike.",
    level: "Expert · 6+ years",
    projects: 140,
    services: ["Custom theme builds", "Plugin development", "CMS structuring"],
    strengths: ["Clean PHP", "Editor-friendly UX", "Long-term maintainability"],
  },
  {
    id: "elementor",
    title: "Elementor Website Design",
    overview:
      "Pixel-accurate, fast-loading pages built with Elementor for teams who need to self-edit content.",
    level: "Expert · 5+ years",
    projects: 110,
    services: ["Landing pages", "Global style systems", "Widget customization"],
    strengths: ["Design fidelity", "Speed-conscious builds", "Reusable templates"],
  },
  {
    id: "woocommerce",
    title: "WooCommerce",
    overview:
      "End-to-end WooCommerce stores — catalog structure, payments, shipping logic, and checkout optimization.",
    level: "Advanced · 5+ years",
    projects: 65,
    services: ["Store setup", "Payment gateways", "Checkout optimization"],
    strengths: ["Conversion-focused UX", "Inventory logic", "Secure payments"],
  },
  {
    id: "shopify",
    title: "Shopify Store Development",
    overview:
      "Custom Shopify themes and app integrations built to convert and scale with inventory growth.",
    level: "Expert · 5+ years",
    projects: 90,
    services: ["Custom themes", "App integration", "Store migration"],
    strengths: ["Liquid templating", "Conversion design", "Fast storefronts"],
  },
  {
    id: "website-seo",
    title: "Website SEO",
    overview:
      "Technical and on-page SEO that raises organic visibility without compromising design or speed.",
    level: "Expert · 6+ years",
    projects: 200,
    services: ["Technical audits", "On-page optimization", "Keyword strategy"],
    strengths: ["Core Web Vitals", "Structured data", "Content strategy"],
  },
  {
    id: "youtube-seo",
    title: "YouTube SEO",
    overview:
      "Channel and video optimization strategy that improves discoverability and watch-time retention.",
    level: "Advanced · 4+ years",
    projects: 75,
    services: ["Video metadata", "Channel structure", "Growth strategy"],
    strengths: ["Search intent mapping", "Retention tactics", "Analytics-driven"],
  },
  {
    id: "speed",
    title: "Website Speed Optimization",
    overview:
      "Diagnosing and eliminating performance bottlenecks for consistently fast Core Web Vitals.",
    level: "Expert · 5+ years",
    projects: 130,
    services: ["Performance audits", "Asset optimization", "Caching strategy"],
    strengths: ["Lighthouse tuning", "Image pipelines", "Render-blocking fixes"],
  },
  {
    id: "responsive",
    title: "Responsive Website Design",
    overview:
      "Interfaces that hold their design integrity from ultrawide monitors down to small phones.",
    level: "Expert · 6+ years",
    projects: 150,
    services: ["Mobile-first builds", "Cross-device QA", "Adaptive layouts"],
    strengths: ["Fluid grids", "Touch-first interaction", "Device testing"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Website Development",
    overview:
      "Full commerce builds across WordPress and Shopify — catalog to checkout, tuned for revenue.",
    level: "Expert · 5+ years",
    projects: 85,
    services: ["Store architecture", "Payment integration", "Conversion tuning"],
    strengths: ["Funnel thinking", "Platform-agnostic", "Scalable structure"],
  },
  {
    id: "maintenance",
    title: "Bug Fixing & Maintenance",
    overview:
      "Fast, precise fixes for broken sites — from plugin conflicts to critical checkout failures.",
    level: "Expert · 6+ years",
    projects: 300,
    services: ["Emergency fixes", "Version upgrades", "Security patching"],
    strengths: ["Root-cause debugging", "Fast turnaround", "Clear reporting"],
  },
  {
    id: "migration",
    title: "Website Migration",
    overview:
      "Zero-downtime migrations between hosts, platforms, and domains with SEO equity preserved.",
    level: "Advanced · 5+ years",
    projects: 60,
    services: ["Host migration", "Platform migration", "Domain transitions"],
    strengths: ["Redirect mapping", "Data integrity", "SEO preservation"],
  },
  {
    id: "landing",
    title: "Landing Page Design",
    overview:
      "Focused, high-conversion landing pages built around a single clear call to action.",
    level: "Expert · 5+ years",
    projects: 120,
    services: ["Campaign pages", "A/B test variants", "Copy-led layout"],
    strengths: ["Conversion copywriting", "Fast load times", "Clear hierarchy"],
  },
  {
    id: "support",
    title: "Technical Support",
    overview:
      "Ongoing, responsive support so client websites never sit broken for long.",
    level: "Expert · 6+ years",
    projects: 250,
    services: ["Priority support", "Monitoring", "Incident response"],
    strengths: ["Fast response time", "Clear communication", "Proactive fixes"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    overview:
      "System-level tuning across hosting, caching, and code to keep sites consistently fast.",
    level: "Expert · 5+ years",
    projects: 130,
    services: ["Server tuning", "Caching layers", "Code-level profiling"],
    strengths: ["Holistic diagnostics", "Measurable results", "Stability"],
  },
  {
    id: "communication",
    title: "Client Communication",
    overview:
      "Clear, proactive updates that keep every project predictable from kickoff to delivery.",
    level: "Expert",
    projects: 400,
    services: ["Project scoping", "Status reporting", "Post-launch support"],
    strengths: ["Transparency", "Responsiveness", "Expectation setting"],
  },
];

export const workflowSteps = [
  { id: "01", title: "Requirement Discussion", desc: "Understanding goals, scope, and constraints before anything is designed." },
  { id: "02", title: "Research & Planning", desc: "Mapping the technical approach, timeline, and success metrics." },
  { id: "03", title: "UI / UX Design", desc: "Structuring layout and interaction around real user behavior." },
  { id: "04", title: "Development", desc: "Building with clean, maintainable, production-grade code." },
  { id: "05", title: "Testing & Optimization", desc: "Cross-device QA, performance tuning, and edge-case handling." },
  { id: "06", title: "Project Delivery", desc: "Launch, documentation handoff, and walkthrough." },
  { id: "07", title: "Support & Maintenance", desc: "Ongoing monitoring and fast response after launch." },
];

export const experiences = [
  { id: "wp-dev", title: "WordPress Development", years: "6+ Years", detail: "140+ custom builds across agencies, startups, and direct clients." },
  { id: "shopify-dev", title: "Shopify Development", years: "5+ Years", detail: "90+ storefronts launched with custom theming and app integration." },
  { id: "seo", title: "Website SEO", years: "6+ Years", detail: "200+ sites optimized for organic search visibility." },
  { id: "yt-seo", title: "YouTube SEO", years: "4+ Years", detail: "75+ channels optimized for discoverability and retention." },
  { id: "ecom", title: "E-commerce Development", years: "5+ Years", detail: "85+ full commerce builds from catalog to checkout." },
  { id: "speed", title: "Website Speed Optimization", years: "5+ Years", detail: "130+ sites tuned for Core Web Vitals and load time." },
  { id: "responsive", title: "Responsive Website Design", years: "6+ Years", detail: "150+ layouts built mobile-first and device-tested." },
  { id: "maintenance", title: "Website Maintenance", years: "6+ Years", detail: "300+ fixes delivered with fast turnaround." },
  { id: "consult", title: "Technical Consultation", years: "5+ Years", detail: "Ongoing advisory for teams scaling their web presence." },
];

export type Project = {
  id: string;
  number: string;
  category: "wordpress" | "shopify";
  title: string;
  description: string;
  services: string[];
  tech: string[];
  image: string;
  liveUrl: string;
  overview: string;
  challenges: string;
  solutions: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: "aurora-clinic",
    number: "01",
    category: "wordpress",
    title: "Aurora Clinic",
    description: "A conversion-focused WordPress site for a multi-location medical clinic.",
    services: ["Custom Theme", "SEO", "Speed Optimization"],
    tech: ["WordPress", "Elementor", "ACF"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    liveUrl: "#",
    overview: "A full rebuild of a clinic network's web presence, prioritizing appointment conversion and mobile speed.",
    challenges: "The prior site loaded slowly on mobile and buried the booking flow three clicks deep.",
    solutions: "Rebuilt on a lightweight custom theme with a persistent booking CTA and aggressive image optimization.",
    features: ["Location-aware booking", "Sub-2s mobile load", "Structured data for local SEO"],
  },
  {
    id: "northwind-realty",
    number: "02",
    category: "wordpress",
    title: "Northwind Realty",
    description: "A listings-heavy real estate platform with custom search and filtering.",
    services: ["Custom Development", "WooCommerce", "Migration"],
    tech: ["WordPress", "Custom PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    liveUrl: "#",
    overview: "Migrated a legacy listings site into a modern, fast-searching WordPress platform.",
    challenges: "Thousands of legacy listings needed to migrate without breaking existing SEO rankings.",
    solutions: "Built a redirect-mapped migration pipeline and custom search index for instant filtering.",
    features: ["Instant listing search", "Zero ranking loss on migration", "Custom map integration"],
  },
  {
    id: "verdant-goods",
    number: "03",
    category: "shopify",
    title: "Verdant Goods",
    description: "A sustainable lifestyle brand's Shopify storefront, built for high-volume traffic.",
    services: ["Custom Theme", "App Integration", "CRO"],
    tech: ["Shopify", "Liquid", "JavaScript"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    liveUrl: "#",
    overview: "A custom Shopify theme designed to hold up under seasonal traffic spikes without losing conversion rate.",
    challenges: "Flash-sale traffic spikes were crashing checkout conversion due to slow product pages.",
    solutions: "Rebuilt product templates with lazy-loaded media and streamlined checkout integrations.",
    features: ["Sub-second product pages", "Bundle & subscription support", "Custom filtering"],
  },
  {
    id: "forge-athletics",
    number: "04",
    category: "shopify",
    title: "Forge Athletics",
    description: "A performance apparel brand's Shopify relaunch with a custom size-fit tool.",
    services: ["Shopify Development", "UX Design", "SEO"],
    tech: ["Shopify", "Liquid", "Metafields"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    liveUrl: "#",
    overview: "A ground-up Shopify relaunch focused on reducing size-related returns.",
    challenges: "High return rates were traced back to sizing uncertainty at checkout.",
    solutions: "Built a custom metafield-driven size-fit widget integrated directly into the product page.",
    features: ["Custom size-fit tool", "Reduced return rate", "Clean, brand-led design system"],
  },
];

export const achievements = [
  { label: "Completed Projects", value: 400, suffix: "+" },
  { label: "Satisfied Clients", value: 350, suffix: "+" },
  { label: "Years of Experience", value: 6, suffix: "+" },
  { label: "Countries Served", value: 24, suffix: "" },
  { label: "Avg. Response Time", value: 2, suffix: "h" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "SEO Campaigns", value: 200, suffix: "+" },
  { label: "Performance Gains", value: 65, suffix: "%" },
];

export type Testimonial = {
  id: string;
  name: string;
  country: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    country: "United States",
    company: "Aurora Clinic",
    review: "Kawsar rebuilt our site and bookings went up within the first month. Communication was clear the entire way through.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "t2",
    name: "James Whitfield",
    country: "United Kingdom",
    company: "Northwind Realty",
    review: "The migration was seamless — no ranking loss, and the new search is genuinely faster than anything we had before.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "t3",
    name: "Elena Novak",
    country: "Germany",
    company: "Verdant Goods",
    review: "Our checkout conversion improved noticeably after the rebuild. Kawsar understood exactly what we needed.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
  },
  {
    id: "t4",
    name: "Daniel Reyes",
    country: "Canada",
    company: "Forge Athletics",
    review: "Returns dropped noticeably after the size-fit tool launched. Meticulous work and fast turnaround.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export const serviceOptions = [
  "WordPress Development",
  "Shopify Development",
  "Website SEO",
  "YouTube SEO",
  "Website Speed Optimization",
  "Website Maintenance",
  "Bug Fix",
  "Technical Consultation",
  "Other",
] as const;
