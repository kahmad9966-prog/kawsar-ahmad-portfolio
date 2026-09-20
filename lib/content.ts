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
    id: "istanbul-medical-connect",
    number: "01",
    category: "wordpress",
    title: "Istanbul Medical Connect",
    description: "A trust-building medical tourism site connecting Australian patients with Istanbul healthcare providers.",
    services: ["Custom Design", "SEO", "Lead Generation"],
    tech: ["WordPress", "Elementor"],
    image: "/project9.jpg",
    liveUrl: "#",
    overview: "A premium, trust-focused landing experience guiding international patients through consultation to recovery.",
    challenges: "Medical tourism requires exceptional trust signals to convert hesitant international visitors.",
    solutions: "Built an editorial, reassuring design with clear consultation CTAs and a guided process narrative.",
    features: ["Free consultation flow", "Trust-first editorial design", "Mobile-optimized booking CTA"],
  },
  {
    id: "high-altitude-partners",
    number: "02",
    category: "wordpress",
    title: "High Altitude Partners",
    description: "A retained executive search firm's site built around transparency, flat fees, and measurable results.",
    services: ["Custom Design", "SEO", "Conversion Design"],
    tech: ["WordPress", "Elementor"],
    image: "/project1.jpg",
    liveUrl: "#",
    overview: "A bold, confident recruiting site designed to differentiate on pricing transparency.",
    challenges: "Executive search is a crowded market where firms struggle to communicate pricing clearly.",
    solutions: "Led with fixed-fee messaging and hard proof points (95%+ re-engagement, 98% retention) above the fold.",
    features: ["Stat-driven hero section", "Dual-audience CTAs", "Custom client portal messaging"],
  },
  {
    id: "a-consulting",
    number: "03",
    category: "wordpress",
    title: "A | Consulting",
    description: "A consulting, coaching, and communications firm's site built to establish authority and drive quote requests.",
    services: ["Custom Design", "Copywriting Support", "SEO"],
    tech: ["WordPress", "Elementor"],
    image: "/project2.jpg",
    liveUrl: "#",
    overview: "A polished, dark-themed site positioning the firm as a strategic, high-trust partner.",
    challenges: "The firm offered three distinct services that needed to feel unified, not scattered.",
    solutions: "Organized the offering around four clear pillars with consistent iconography and messaging.",
    features: ["Four-pillar service framework", "Get-a-quote CTA in header", "Editorial photography treatment"],
  },
  {
    id: "imagic-medical",
    number: "04",
    category: "wordpress",
    title: "iMagic Medical",
    description: "A healthcare software product site simplifying how hospitals manage and secure medical imaging data.",
    services: ["Product Site Design", "SEO", "Demo Funnel"],
    tech: ["WordPress", "Custom Theme"],
    image: "/project3.jpg",
    liveUrl: "#",
    overview: "A clean, clinical product site built to drive demo requests from hospital decision-makers.",
    challenges: "Enterprise healthcare buyers needed to quickly grasp compliance and security guarantees.",
    solutions: "Used a clear four-benefit grid (centralized, secure, time-saving, insight-driving) directly below the fold.",
    features: ["Product demo CTA", "Compliance-forward messaging", "Clean clinical visual language"],
  },
  {
    id: "servepoint-capital",
    number: "05",
    category: "wordpress",
    title: "ServePoint Capital",
    description: "A strategic investment advisory site built to convey long-term discipline and quiet confidence.",
    services: ["Custom Design", "SEO", "Brand Positioning"],
    tech: ["WordPress", "Elementor"],
    image: "/project4.jpg",
    liveUrl: "#",
    overview: "A refined, editorial investment site designed to attract long-term capital partners.",
    challenges: "Financial advisory sites often feel generic or overly corporate, undermining trust.",
    solutions: "Used deep navy tones, serif typography, and architectural photography to signal permanence and rigor.",
    features: ["Four-pillar investment philosophy", "Dual CTA strategy", "Editorial typography system"],
  },
  {
    id: "imad-yousef-group",
    number: "06",
    category: "wordpress",
    title: "Imad Yousef Group",
    description: "A UAE and Saudi Arabia-based industrial equipment provider's site built around safety and reliability.",
    services: ["Custom Design", "SEO", "Lead Generation"],
    tech: ["WordPress", "Elementor"],
    image: "/project5.jpg",
    liveUrl: "#",
    overview: "A confident industrial site for a cradle rental and glass lifting equipment provider.",
    challenges: "Industrial B2B buyers needed fast proof of safety standards and equipment reliability.",
    solutions: "Led with real equipment-in-use photography and a four-point trust grid immediately below the fold.",
    features: ["Safety-first messaging", "Direct contact CTA", "Real equipment photography"],
  },
  {
    id: "hikari-kitchen",
    number: "07",
    category: "wordpress",
    title: "Hikari Kitchen",
    description: "A Miami-based Japanese restaurant's site blending traditional aesthetics with modern online ordering.",
    services: ["Custom Design", "Online Ordering Integration", "SEO"],
    tech: ["WordPress", "WooCommerce"],
    image: "/project6.jpg",
    liveUrl: "#",
    overview: "A moody, elegant restaurant site designed to drive both dine-in interest and online orders.",
    challenges: "The restaurant needed to feel premium while keeping ordering friction-free.",
    solutions: "Paired dark, atmospheric food photography with clear dual CTAs for menu browsing and ordering.",
    features: ["Explore menu + order now CTAs", "Premium dark aesthetic", "Local SEO for Miami dining searches"],
  },
   {
    id: "black-shado",
    number: "08",
    category: "wordpress",
    title: "Black Shadô",
    description: "A dual-audience luxury perfume brand website split cleanly between feminine and masculine lines.",
    services: ["Custom Design", "Brand Design", "Multilingual Setup"],
    tech: ["WordPress", "Elementor"],
    image: "/project8.jpg",
    liveUrl: "#",
    overview: "A high-contrast luxury fragrance website split into two distinct product lines.",
    challenges: "Two very different audiences (feminine and masculine fragrance lines) needed equal visual weight.",
    solutions: "Used a symmetrical split-screen layout with matching CTA structure for both product lines.",
    features: ["Split dual-audience layout", "French-language luxury copy", "Consistent scent-line branding"],
  },
    {
    id: "relyfes",
    number: "09",
    category: "wordpress",
    title: "Relyfes",
    description: "A multi-category online marketplace connecting buyers and sellers across electronics, furniture, and more.",
    services: ["Custom Development", "Marketplace Features", "SEO"],
    tech: ["WordPress", "Custom Theme"],
    image: "/project14.png",
    liveUrl: "#",
    overview: "A classifieds-style marketplace site built to help people find listings quickly by category and location.",
    challenges: "The platform needed fast, location-aware search across many unrelated product categories.",
    solutions: "Built a unified search bar with location filtering and a clean category-grid homepage.",
    features: ["Location-based search", "Category browsing grid", "Post-a-listing flow"],
  },
  {
    id: "king-jesus-universal-ministry",
    number: "10",
    category: "wordpress",
    title: "King Jesus Universal Ministry",
    description: "A church website built to welcome visitors, share service times, and encourage community engagement.",
    services: ["Custom Design", "Donation Integration", "SEO"],
    tech: ["WordPress", "Elementor"],
    image: "/project15.png",
    liveUrl: "#",
    overview: "A warm, inviting ministry site designed to draw visitors in and make giving simple.",
    challenges: "The ministry needed a prominent, trustworthy way to accept online donations.",
    solutions: "Placed a clear donate CTA in the header and paired it with authentic worship photography.",
    features: ["Prominent donate CTA", "Service info bar", "Location and contact details"],
  },
  {
    id: "goliath-publishing-network",
    number: "11",
    category: "wordpress",
    title: "Goliath Publishing Network",
    description: "A B2B site for a board game publisher connecting international partners for game localization.",
    services: ["Custom Design", "SEO", "Partner Outreach"],
    tech: ["WordPress", "Elementor"],
    image: "/project16.png",
    liveUrl: "#",
    overview: "A globally-minded B2B site built to attract international publishing partners.",
    challenges: "The brand needed to visually communicate global reach and partnership opportunity.",
    solutions: "Used a world map with connection lines and a direct partner-with-us CTA above the fold.",
    features: ["Global network visualization", "Partner outreach CTA", "Playful brand-consistent icons"],
  },
  {
    id: "promise-venue-wholesale",
    number: "12",
    category: "wordpress",
    title: "Promise Venue Wholesale LLC",
    description: "A B2B wholesale distribution site for stationery, gardening equipment, and general merchandise.",
    services: ["Custom Design", "SEO", "Lead Generation"],
    tech: ["WordPress", "Elementor"],
    image: "/project17.png",
    liveUrl: "#",
    overview: "A straightforward, trust-focused site for a wholesale distributor serving North American retailers.",
    challenges: "B2B buyers needed to quickly understand product categories and how to get in touch.",
    solutions: "Led with real warehouse photography and a single clear contact CTA above the fold.",
    features: ["Real warehouse photography", "Clear contact CTA", "Product category messaging"],
  },
  {
    id: "bluestar-electrical",
    number: "13",
    category: "wordpress",
    title: "Bluestar Electrical LLC",
    description: "A local electrician service site built to drive service requests across Southern New Hampshire.",
    services: ["Custom Design", "Local SEO", "Lead Generation"],
    tech: ["WordPress", "Elementor"],
    image: "/project18.png",
    liveUrl: "#",
    overview: "A trust-driven local service site designed to convert visitors into service requests and calls.",
    challenges: "Local service businesses need fast trust-building and an obvious way to call or request service.",
    solutions: "Paired a direct phone number button with a real technician photo and a clear service area headline.",
    features: ["Click-to-call button", "Service area headline", "Real technician photography"],
  },
    // ───────────── Shopify projects start here ─────────────
  
    {
    id: "ember-and-lore",
    number: "01",
    category: "shopify",
    title: "Ember & Lore",
    description: "A hand-poured candle and coffee brand storefront built for an intimate, ritual-driven shopping experience.",
    services: ["Shopify Development", "Brand Design", "CRO"],
    tech: ["Shopify", "Liquid"],
    image: "/project10.jpg",
    liveUrl: "#",
    overview: "A moody, sensory-driven Shopify storefront for a small-batch candle and coffee brand.",
    challenges: "The brand needed a premium feel without losing the handmade, small-batch authenticity.",
    solutions: "Used warm dark photography and minimal copy to let the product imagery carry the emotional weight.",
    features: ["Dual product-line storefront", "Warm editorial photography", "Simple two-CTA layout"],
  },
  {
    id: "cote-royale",
    number: "02",
    category: "shopify",
    title: "Côte Royale",
    description: "A Mediterranean-inspired home decor brand's storefront built around timeless, artisan craftsmanship.",
    services: ["Shopify Development", "Brand Design", "CRO"],
    tech: ["Shopify", "Liquid"],
    image: "/project7.jpg",
    liveUrl: "#",
    overview: "An editorial-style Shopify storefront for a collectible home decor and textiles brand.",
    challenges: "The brand needed to justify premium pricing through perceived craftsmanship and story.",
    solutions: "Used lifestyle photography and a four-value trust bar to reinforce quality before the shop link.",
    features: ["Lifestyle-led product presentation", "Four-value trust bar", "Discover-the-collection CTA"],
  },
   {
    id: "amoressi",
    number: "03",
    category: "shopify",
    title: "Amoressi",
    description: "A modern jewelry brand storefront built around mix-and-match stacking pieces.",
    services: ["Shopify Development", "Brand Design", "CRO"],
    tech: ["Shopify", "Liquid"],
    image: "/project11.jpg",
    liveUrl: "#",
    overview: "A clean, editorial jewelry storefront designed to make stacking rings and bracelets feel effortless.",
    challenges: "The brand needed a layout that showcased how pieces could be mixed and matched together.",
    solutions: "Used a collage-style hero grid to visually demonstrate stacking combinations in real settings.",
    features: ["Collage-style product hero", "Category mega-menu", "Mobile-first shopping flow"],
  },
  {
    id: "starla-marz",
    number: "04",
    category: "shopify",
    title: "Starla Marz",
    description: "A bohemian jewelry brand storefront built around adventure, spirit, and handcrafted adornments.",
    services: ["Shopify Development", "Brand Design", "Photography Direction"],
    tech: ["Shopify", "Liquid"],
    image: "/project12.jpg",
    liveUrl: "#",
    overview: "An atmospheric, lifestyle-driven storefront designed to capture a free-spirited brand identity.",
    challenges: "The brand's boho identity needed to feel premium rather than casual online.",
    solutions: "Used full-bleed lifestyle photography and elegant serif typography to elevate the aesthetic.",
    features: ["Full-bleed hero photography", "Elegant serif brand typography", "Story-led homepage"],
  },
  {
    id: "jubilore",
    number: "05",
    category: "shopify",
    title: "Jubilore",
    description: "A bible-inspired streetwear brand storefront built around bold graphic storytelling.",
    services: ["Shopify Development", "Brand Design", "CRO"],
    tech: ["Shopify", "Liquid"],
    image: "/project13.jpg",
    liveUrl: "#",
    overview: "A high-contrast streetwear storefront built to let bold graphic artwork carry the brand.",
    challenges: "The brand needed an edgy, gothic aesthetic without sacrificing usability or load speed.",
    solutions: "Used a stark black-and-white palette with a bold display typeface and dual clear CTAs.",
    features: ["Bold gothic typography system", "Dual shop/story CTAs", "High-contrast product photography"],
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
