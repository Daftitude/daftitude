

import BrandName from "./BrandName";

export const heroMessages = {
  default: {
    eyebrow: (
      <>
        Digital Clarity <span className="pricing-emphasis-green">Starts Here</span>
      </>
    ),
    title: <BrandName name="DaFTitude" />,
    text: (
      <>
        We use <strong className="pricing-emphasis-blue">Data</strong>, <strong className="pricing-emphasis-red">Analytics</strong>, <strong className="pricing-emphasis-yellow">Finance</strong>, and <strong style={{ color: "var(--green)", fontWeight: 950 }}>Technology</strong> to turn digital confusion into clearer choices.
      </>
    ),
  },
  daftitude: {
    eyebrow: "Business Solutions",
    title: <BrandName name="DaFTitude" />,
    text: (
      <>
        We turn <strong className="pricing-emphasis-blue">tech confusion</strong> into <strong className="pricing-emphasis-green">clear next steps</strong> — organizing <strong className="pricing-emphasis-red">messy tools</strong>, <strong className="pricing-emphasis-yellow">AI ideas</strong>, and <strong className="pricing-emphasis-red">digital problems</strong> into systems you can <strong className="pricing-emphasis-green">actually use</strong>.
      </>
    ),
  },
  askdaft: {
    eyebrow: <span className="pricing-emphasis-green">Tech Services</span>,
    title: <BrandName name="AskDaFT" />,
    text: (
      <>
        Real-life <strong className="pricing-emphasis-blue">tech help</strong> for people <strong className="pricing-emphasis-yellow">tired</strong> of feeling <strong className="pricing-emphasis-red">lost</strong> in it. We <strong className="pricing-emphasis-green">help</strong> you <strong className="pricing-emphasis-blue">set up</strong>, <strong className="pricing-emphasis-yellow">fix</strong>, and <strong className="pricing-emphasis-green">organize</strong> the <strong className="pricing-emphasis-blue">tech</strong> you use <strong className="pricing-emphasis-green">every day</strong> — from <strong className="pricing-emphasis-yellow">smart homes</strong> and <strong className="pricing-emphasis-yellow">AI tools</strong> to <strong className="pricing-emphasis-blue">accounts</strong>, <strong className="pricing-emphasis-yellow">portals</strong>, <strong className="pricing-emphasis-red">apps</strong>, and <strong className="pricing-emphasis-yellow">troubleshooting</strong>.
      </>
    ),
  },
};

export const daftitudeSystems = {
  daftitude: [
    { label: "AI workflows", to: "/ai" },
    { label: "Automation", to: "/ai" },
    { label: "Data & analytics", to: "/tech" },
    { label: "Privacy awareness", to: "/privacy" },
    { label: "Cybersecurity education", to: "/cybersecurity" },
    { label: "Crypto education", to: "/crypto" },
    { label: "Business systems", to: "/contact" },
    { label: "Creator systems", to: "/tech" },
    { label: "Software planning", to: "/tech" },
    { label: "Research & learning", to: "/mission" },
  ],
  askdaft: [
    { label: "AI tool help", to: "/ai" },
    { label: "Make repetitive tasks easier", to: "/ai" },
    { label: "Understand your data", to: "/tech" },
    { label: "Protect your privacy", to: "/privacy" },
    { label: "Avoid scams and hackers", to: "/cybersecurity" },
    { label: "Learn crypto safely", to: "/crypto" },
    { label: "Organize your business tech", to: "/contact" },
    { label: "Creator setup help", to: "/tech" },
    { label: "Plan an app or website", to: "/tech" },
    { label: "Learn what to do next", to: "/mission" },
  ],
};

export const hubCards = [
  {
    icon: "🤖",
    title: "AI Hub",
    text: (
      <>
        <span className="pricing-emphasis-blue">Prompting</span>, <span className="pricing-emphasis-green">AI basics</span>, <span className="pricing-emphasis-yellow">automation ideas</span>, workflows, <span className="pricing-emphasis-red">safety</span>, and practical use cases.
      </>
    ),
    to: "/ai",
  },
  {
    icon: "🧩",
    title: "Tech Hub",
    text: (
      <>
        <span className="pricing-emphasis-blue">Digital systems</span>, <span className="pricing-emphasis-green">tools</span>, project updates, and technology explained without the <span className="pricing-emphasis-yellow">noise</span>.
      </>
    ),
    to: "/tech",
  },
  {
    icon: "📈",
    title: "Crypto",
    text: (
      <>
        <span className="pricing-emphasis-red">Risk-aware</span> crypto education, <span className="pricing-emphasis-yellow">research</span>, market structure, and <span className="pricing-emphasis-green">transparent learning</span>.
      </>
    ),
    to: "/crypto",
  },
  {
    icon: "🔐",
    title: "Privacy",
    text: (
      <>
        <span className="pricing-emphasis-red">Data brokers</span>, breach awareness, <span className="pricing-emphasis-yellow">app tracking</span>, account safety, and <span className="pricing-emphasis-blue">privacy habits</span>.
      </>
    ),
    to: "/privacy",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    text: (
      <>
        <span className="pricing-emphasis-red">Scam awareness</span>, password safety, phishing education, <span className="pricing-emphasis-blue">MFA</span>, and <span className="pricing-emphasis-green">defensive habits</span>.
      </>
    ),
    to: "/cybersecurity",
  },
  {
    icon: "🧭",
    title: "Mission",
    text: (
      <>
        The <BrandName name="DaFTitude" /> story, the <BrandName name="AskDaFT" /> split, and the larger <span className="pricing-emphasis-green">reason</span> behind the <span className="pricing-emphasis-blue">build</span>.
      </>
    ),
    to: "/mission",
  },
];

export const modeCtas = {
  daftitude: {
    kicker: "Step 1: Pick Your Service Lane",
    title: (
      <>
        Your <span className="pricing-emphasis-red">business</span> has more <span className="pricing-emphasis-green">potential</span> than your <span className="pricing-emphasis-red">current</span> systems <span className="pricing-emphasis-red">show</span>.
      </>
    ),
    text: (
      <span className="mode-cta-lead-text mode-cta-lead-stack">
        <span>
          You <span className="pricing-emphasis-red">do not</span> need more <span className="pricing-emphasis-yellow">random tools</span> or half-built <span className="pricing-emphasis-red">AI ideas</span>.
        </span>
        <span>
          <BrandName name="DaFTitude" /> helps turn <strong className="pricing-emphasis-yellow">messy tech</strong> into
          <strong className="pricing-emphasis-blue"> business solutions</strong>,
          <strong className="pricing-emphasis-green"> AI workflows</strong>, and
          <strong className="pricing-emphasis-yellow"> safer decisions</strong> before <strong className="pricing-emphasis-green">money</strong> gets <strong className="pricing-emphasis-red">wasted</strong>.
        </span>
      </span>
    ),
    primaryText: "View Pricing Chart",
    secondaryText: "Business Form",
    primaryAction: "average",
    secondaryTo: "/contact",
    highlights: ["business systems", "AI workflows", "automation cleanup", "tech stack review"],
  },
  askdaft: {
    kicker: "Step 1: Pick Your Service Lane",
    title: (
      <>
        <span className="pricing-emphasis-yellow"> Need </span> something <span className="pricing-emphasis-green">fixed</span>, <span className="pricing-emphasis-yellow">set up</span>, or <span className="pricing-emphasis-blue">explained</span>?
      </>
    ),
    text: (
      <span className="mode-cta-lead-text mode-cta-lead-stack">
        <span>Pick the <span className="pricing-emphasis-green">lane</span> that <span className="pricing-emphasis-blue">matches</span> what you <span className="pricing-emphasis-red">need</span> <span className="pricing-emphasis-yellow">right now</span>.</span>
        <span>
          <BrandName name="AskDaFT" /> <strong className="pricing-emphasis-green">helps</strong> with <strong className="pricing-emphasis-blue">Wi-Fi</strong>,
          <strong className="pricing-emphasis-yellow"> printers</strong>, <strong className="pricing-emphasis-red">phones</strong>,
          <strong className="pricing-emphasis-blue"> smart-devices</strong>, <strong className="pricing-emphasis-yellow">home security </strong>, <strong className="pricing-emphasis-blue"> IOT</strong>,
          <strong className="pricing-emphasis-red"> apps</strong>, <strong className="pricing-emphasis-green">accounts</strong>,
          and <strong className="pricing-emphasis-green">plain</strong><strong className="pricing-emphasis-blue"> - </strong> <strong className="pricing-emphasis-green">english</strong> <strong className="pricing-emphasis-yellow">troubleshooting</strong>.
        </span>
      </span>
    ),
    primaryText: "View Pricing Chart",
    secondaryText: "AskDaFT Pricing",
    primaryAction: "askdaft-table",
    secondaryAction: "askdaft-table",
    highlights: ["home tech help", "smart-home & IOT setup", "AI tool help", "account safety"],
  },
};