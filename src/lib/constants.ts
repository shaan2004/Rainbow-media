export const ANNOUNCEMENT_TEXT = "Limited Time: 20% Off — Get Early Access →";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reports", href: "#reports" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_WORDS = ["Try It Now", "Go Paperless", "Scale Faster"];

export const FEATURES = [
  {
    iconName: "FileText",
    title: "Go Paperless",
    description: "Streamline billing, eliminate paperwork entirely and reduce operational overhead.",
  },
  {
    iconName: "Smartphone",
    title: "Mobile Accessibility",
    description: "Access and create invoices on the go, anywhere, anytime with our responsive app.",
  },
  {
    iconName: "Users",
    title: "Instant Customer Integration",
    description: "Seamlessly synchronize profiles and track customer billing histories automatically.",
  },
  {
    iconName: "TrendingUp",
    title: "Staff Sales Tracking",
    description: "Monitor and evaluate employee sales performances and commission outputs effortlessly.",
  },
  {
    iconName: "Package",
    title: "Inventory Management",
    description: "Real-time stock tracking with actionable insights to prevent stockouts.",
  },
  {
    iconName: "BarChart3",
    title: "Advanced Reports",
    description: "Get detailed day, month, staff, and transaction level custom invoice analytics.",
  },
];

export const BENEFITS = [
  "User Friendly Interface",
  "Mobile Accessibility",
  "Paperless Billing",
  "Effortless Invoicing",
  "Inventory Management",
  "Customer Integration",
  "Sales & Expense Reports",
  "Staff Sales Tracking",
];

export const REPORTS_TABS = [
  {
    id: "summary",
    label: "Invoice Summary",
    title: "Consolidated Invoice Summaries",
    description: "Get a bird's-eye view of all incoming transactions, tax summaries, payment methods, and pending dues in one streamlined dashboard designed for fast business analysis.",
    mockupType: "summary",
  },
  {
    id: "detail",
    label: "Invoice Detail",
    title: "Deep-Dive Transaction Metrics",
    description: "Analyze individual invoice items, tax breakdowns, shipping rates, and customer comments. Filter transactions instantly by payment methods, tags, or invoice numbers.",
    mockupType: "detail",
  },
  {
    id: "staff",
    label: "Staff Report",
    title: "Employee Sales Performance",
    description: "Track precise daily transactions logged by each staff member. Evaluate sales metrics, commission totals, operational shifts, and individual register values.",
    mockupType: "staff",
  },
  {
    id: "day",
    label: "Daywise Report",
    title: "Real-time Daily Performance",
    description: "Compare total sales volume, refund values, cash in drawer, and daily gross revenues against previous weeks to recognize immediate operating patterns.",
    mockupType: "day",
  },
  {
    id: "month",
    label: "Monthwise Report",
    title: "Monthly Financial Statements",
    description: "Export accurate income statements, product growth margins, tax sheets, and recurring customer breakdowns to feed directly into accounting ledgers.",
    mockupType: "month",
  },
];

export const STATS = [
  { value: 500, label: "Businesses", suffix: "+" },
  { value: 10000, label: "Invoices", suffix: "+" },
  { value: 99.9, label: "Uptime", suffix: "%" },
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    price: { inr: 14999, usd: 155 },
    renewal: { inr: 5999, usd: 65 },
    description: "Perfect for single-register shops starting out their digital billing journey.",
    features: [
      { text: "Paperless Digital Invoices", included: true },
      { text: "Mobile Billing Access", included: true },
      { text: "Customer Profiles & Billing Logs", included: true },
      { text: "Staff Sales Tracking (Up to 2 staff)", included: true },
      { text: "Basic Real-time Inventory", included: false },
      { text: "Advanced Day & Month Reports", included: false },
      { text: "Custom Invoice Branding", included: false },
    ],
    recommended: false,
  },
  {
    name: "Standard",
    price: { inr: 17999, usd: 180 },
    renewal: { inr: 6999, usd: 75 },
    description: "Our most popular plan designed for growing retail and wholesale outlets.",
    features: [
      { text: "Paperless Digital Invoices", included: true },
      { text: "Mobile Billing Access", included: true },
      { text: "Customer Profiles & Billing Logs", included: true },
      { text: "Staff Sales Tracking (Up to 10 staff)", included: true },
      { text: "Basic Real-time Inventory", included: true },
      { text: "Advanced Day & Month Reports", included: true },
      { text: "Custom Invoice Branding", included: false },
    ],
    recommended: true,
  },
  {
    name: "Advance",
    price: { inr: 24999, usd: 240 },
    renewal: { inr: 7999, usd: 85 },
    description: "The ultimate power package for large businesses and multi-store operations.",
    features: [
      { text: "Paperless Digital Invoices", included: true },
      { text: "Mobile Billing Access", included: true },
      { text: "Customer Profiles & Billing Logs", included: true },
      { text: "Staff Sales Tracking (Unlimited)", included: true },
      { text: "Basic Real-time Inventory", included: true },
      { text: "Advanced Day & Month Reports", included: true },
      { text: "Custom Invoice Branding", included: true },
    ],
    recommended: false,
  },
];

export const FAQS = [
  {
    question: "What is BillIT NOW?",
    answer: "BillIT NOW is a premium SaaS billing and invoicing software built specifically for Indian businesses. It handles digital invoicing, inventory levels, sales reporting, and staff tracking in a fast, beautiful interface that works on both mobile and desktop.",
  },
  {
    question: "How does paperless digital billing work?",
    answer: "Whenever you generate an invoice, BillIT NOW lets you send standard, professional digital invoices directly to customers via WhatsApp or Email. This reduces thermal paper printing, eliminates physical record clutter, and saves paper expenses.",
  },
  {
    question: "Is there a limit to the number of staff members I can track?",
    answer: "The limit depends on your active tier. The Basic plan supports up to 2 staff members, standard supports up to 10, and the Advance tier lets you add and track an unlimited number of staff and employee transactions simultaneously.",
  },
  {
    question: "Can I use BillIT NOW on multiple mobile devices?",
    answer: "Yes! BillIT NOW features fully responsive cloud accessibility. You and your billing staff can load, inspect, edit, and create invoices from any modern smartphone, tablet, or PC, with instant background cloud syncing.",
  },
  {
    question: "How does the annual renewal pricing structure work?",
    answer: "Our pricing is transparent and highly affordable. For example, our Standard tier costs ₹17,999 for the first year (which includes full onboarding, support, and initial license setup), and renewals are only ₹6,999 per year thereafter.",
  },
  {
    question: "Does the software support instant inventory tracking?",
    answer: "Yes, our Standard and Advance plans feature real-time inventory management. Every time you log an item on an invoice, your stock counts automatically decrement and will flag warning alerts when stock falls below set thresholds.",
  },
  {
    question: "Can I import my existing customer lists?",
    answer: "Absolutely! You can easily upload bulk lists of your active customer records using standard spreadsheets (CSV format), or integrate customer databases immediately using our secure CRM module.",
  },
  {
    question: "What setup support and assistance do you provide?",
    answer: "Rainbow Media offers exhaustive onboarding support. Every new account is assigned a dedicated success agent to help you set up catalog inventory, load existing customers, configure business details, and train store employees.",
  },
];

export const OFFICE_CONTACT = {
  address: "Old No.83, New No.112, 2nd Floor, Anna Salai, Guindy, Chennai – 600032",
  phone: "+91 73058 21333",
  email: "rainbowmedia1123@gmail.com",
};
