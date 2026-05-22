
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import daftitudeBusinessHero from "../images/hero/daftitude-business-blue-object.png";
import askDaftHero from "../images/hero/askdaft-residential-green-object.png";
import daftitudeCenterHero from "../images/hero/daftitude-center-object.png";

const BrandName = ({ name }) => {
  if (name === "AskDaFT") {
    return (
      <strong className="brand-word brand-word-askdaft" aria-label="AskDaFT">
        <span className="brand-ask">Ask</span><span className="brand-daft">DaFT</span>
      </strong>
    );
  }

  return (
    <strong className="brand-word brand-word-daftitude" aria-label="DaFTitude">
      <span className="brand-daft">DaFT</span><span className="brand-itude">itude</span>
    </strong>
  );
};

const heroMessages = {
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

const daftitudeSystems = {
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

const hubCards = [
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

const modeCtas = {
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

const businessPricingRows = [
  {
    service: "Clarity Call / Tech Direction",
    range: "$75–$150",
    bestFor: "First step",
    note: ["Understand the problem", "Review options", "Choose the next move"],
  },
  {
    service: "Business Tech Stack Review",
    range: "$250–$750",
    bestFor: "Cleanup",
    note: ["Review tools and accounts", "Find workflow gaps", "Spot cleanup opportunities"],
  },
  {
    service: "AI Workflow / Automation Planning",
    range: "$500–$2,500+",
    bestFor: "Automation",
    note: ["Map repeatable tasks", "Find AI use cases", "Plan realistic automation steps"],
  },
  {
    service: "Systems Buildout Planning",
    range: "$1,500–$5,000+",
    bestFor: "Larger builds",
    note: ["Plan larger builds", "Map system needs", "Organize app, site, data, or dashboard direction"],
  },
];

const askDaftQuickRows = [
  {
    tier: "Quick Help",
    price: "$25–$50",
    label: "Fast Fix",
    description: ["Simple question", "Quick setting fix", "Basic walkthrough"],
    features: ["One focused issue", "Plain-English walkthrough", "Best for quick answers"],
    cta: "Start Small",
  },
  {
    tier: "Standard Help",
    price: "$60–$125",
    label: "Most Common",
    description: ["Troubleshooting", "Setup guidance", "Account, device, or app help"],
    features: ["Device or account help", "Setup guidance", "Clean next-step plan"],
    cta: "Get Help",
    featured: true,
  },
  {
    tier: "Setup & Teach",
    price: "$100–$250",
    label: "Hands-On",
    description: ["Smart TV, printer, or phone setup", "AI tool help", "Smart-home or creator basics"],
    features: ["Setup plus teaching", "Smart-home basics", "Creator or AI tool help"],
    cta: "Book Setup",
  },
  {
    tier: "Full Tech Rescue",
    price: "$250+",
    label: "Deep Cleanup",
    description: ["Multi-device cleanup", "Account sorting", "Deeper tech problem review"],
    features: ["Multi-step cleanup", "Account/device sorting", "Bigger tech messes"],
    cta: "Start Rescue",
  },
];

const businessMonthlyRows = [
  {
    tier: "Business Check-In",
    bestFor: "Light guidance",
    includes: ["Recurring strategy check-in", "Light tool review", "Simple next-step planning"],
    price: "$150–$250/mo",
  },
  {
    tier: "Tech Stack Support",
    bestFor: "Ongoing cleanup",
    includes: ["Review apps and accounts", "Clean up workflows", "Reduce system clutter"],
    price: "$300–$600/mo",
  },
  {
    tier: "AI Workflow Partner",
    bestFor: "Automation growth",
    includes: ["Plan AI workflows", "Build automation direction", "Improve content, dashboard, or internal systems"],
    price: "$750–$1,500/mo",
  },
  {
    tier: "Systems Partner",
    bestFor: "Deeper build support",
    includes: ["Ongoing system planning", "Website, app, or dashboard support", "Business operations direction"],
    price: "Custom",
  },
];

const askDaftMonthlyRows = [
  {
    tier: "Monthly Check-In",
    bestFor: "Light upkeep",
    includes: ["1 visit per month", "Up to 1 hour", "Best for one focused tech issue"],
    price: "$25–$55/mo",
  },
  {
    tier: "Basic Tech Support",
    bestFor: "Ongoing help",
    includes: ["2 visits per month", "Up to 1 hour each", "Best for regular device, app, or smart-home help"],
    price: "$100–$150/mo",
  },
  {
    tier: "Priority Tech Support",
    bestFor: "Busy homes",
    includes: ["2 visits per month", "Up to 3 hours per visit", "Best for recurring setup, cleanup, and troubleshooting"],
    price: "$200–$275/mo",
  },
  {
    tier: "Managed Tech Partner",
    bestFor: "Deeper support",
    includes: ["Custom support scope", "Planning, setup, and cleanup", "Best for ongoing tech partner support"],
    price: "Custom",
  },
];

const storyboards = {
  daftitude: {
    kicker: "Step 3: What Happens Next",
    title: (
      <>
        <span className="pricing-emphasis-green">Bring</span> the <span className="pricing-emphasis-yellow">messy</span> version. We’ll <span className="pricing-emphasis-yellow">help</span> shape the <span className="pricing-emphasis-blue">real one</span>.
      </>
    ),
    text: (
      <>
        Once the <span className="pricing-emphasis-green">price lane</span> makes <span className="pricing-emphasis-yellow">sense</span>, the <span className="pricing-emphasis-blue">next step</span> is simple: show the <span className="pricing-emphasis-yellow">problem</span>, explain what you <span className="pricing-emphasis-green">need working</span>, and let <BrandName name="DaFTitude" /> turn the <span className="pricing-emphasis-yellow">moving pieces</span> into a <span className="pricing-emphasis-blue">cleaner plan</span>.
      </>
    ),
    cards: [
      {
        label: "01",
        icon: "📥",
        title: (
          <>
            <span className="pricing-emphasis-green">Share</span> the <span className="pricing-emphasis-yellow">messy</span> version.
          </>
        ),
        text: (
          <>
            Bring the <span className="pricing-emphasis-red">scattered</span> <span className="pricing-emphasis-yellow">notes</span>, <span className="pricing-emphasis-green">tools</span>, <span className="pricing-emphasis-blue">accounts</span>, <span className="pricing-emphasis-yellow">ideas</span>, <span className="pricing-emphasis-green">screenshots</span>, or <span className="pricing-emphasis-blue">half</span>-built plan.
          </>
        ),
        statement: (
          <>
            <strong>
              <span className="pricing-emphasis-red">No</span> polished <span className="pricing-emphasis-yellow">pitch</span> <span className="pricing-emphasis-red">required</span>.
            </strong>
          </>
        ),
        tags: ["business ideas", "tool lists", "screenshots", "rough plans"],
      },
      {
        label: "02",
        icon: "🧭",
        title: (
          <>
            We <span className="pricing-emphasis-green">sort</span> the <span className="pricing-emphasis-yellow">moving</span> pieces.
          </>
        ),
        text: (
          <>
            We look for what <span className="pricing-emphasis-green">matters</span>, what is <span className="pricing-emphasis-yellow">missing</span>, what is <span className="pricing-emphasis-red">risky</span>, and what should <span className="pricing-emphasis-red">not</span> be <span className="pricing-emphasis-blue">overbuilt</span>.
          </>
        ),
        statement: (
          <>
            <strong><span className="pricing-emphasis-red">Less</span> guessing. <span className="pricing-emphasis-green">More</span> structure.</strong>
          </>
        ),
        tags: ["tech stack review", "AI workflow", "risk check", "system planning"],
      },
      {
        label: "03",
        icon: "✅",
        title: (
          <>
            You leave with <span className="pricing-emphasis-green">next steps</span>.
          </>
        ),
        text: (
          <>
            The <span className="pricing-emphasis-green">goal</span> is a <span className="pricing-emphasis-blue">cleaner direction</span>: what to <span className="pricing-emphasis-yellow">fix</span>, what to <span className="pricing-emphasis-green">build</span>, what to <span className="pricing-emphasis-red">avoid</span>, and what to do <span className="pricing-emphasis-yellow">first</span>.
          </>
        ),
        statement: (
          <>
            <strong>
              A <span className="pricing-emphasis-yellow">plan</span> you can <span className="pricing-emphasis-green">actually</span> <span className="pricing-emphasis-blue">use</span>.
            </strong>
          </>
        ),
        tags: ["next steps", "priority list", "cleanup plan", "build direction"],
      },
    ],
  },
  askdaft: {
    kicker: "Step 3: What Happens Next",
    title: (
      <>
        <span className="pricing-emphasis-green">Bring</span> the <span className="pricing-emphasis-yellow">problem</span>. We’ll <span className="pricing-emphasis-yellow">help</span> turn it <span className="pricing-emphasis-green"> into </span> a <span className="pricing-emphasis-blue">clear fix path</span>.
      </>
    ),
    text: (
      <>
        Once the <span className="pricing-emphasis-green">price lane</span> makes <span className="pricing-emphasis-yellow">sense</span>, <BrandName name="AskDaFT" /> keeps it <span className="pricing-emphasis-blue">simple</span>: tell us what is <span className="pricing-emphasis-red">not working</span>, what it <span className="pricing-emphasis-yellow">affects</span>, and how <span className="pricing-emphasis-green">quickly</span> you need it <span className="pricing-emphasis-blue">fixed</span>.
      </>
    ),
    cards: [
      {
        label: "01",
        icon: "📲",
        title: (
          <>
            <span className="pricing-emphasis-green">Tell</span> us what is <span className="pricing-emphasis-red">wrong</span>.
          </>
        ),
        text: (
          <>
            Send the <span className="pricing-emphasis-blue">device</span>, <span className="pricing-emphasis-red">app</span>, <span className="pricing-emphasis-green">account</span>, <span className="pricing-emphasis-yellow">setup</span>, or <span className="pricing-emphasis-red">error</span> that keeps getting in the <span className="pricing-emphasis-yellow">way</span>.
          </>
        ),
        statement: (
          <>
            <strong><span className="pricing-emphasis-red">No</span> tech <span className="pricing-emphasis-yellow">shame</span>. Just the <span className="pricing-emphasis-blue">issue</span>.</strong>
          </>
        ),
        tags: ["Wi-Fi", "printers", "phones", "accounts"],
      },
      {
        label: "02",
        icon: "🔎",
        title: (
          <>
            We <span className="pricing-emphasis-green">narrow</span> it <span className="pricing-emphasis-blue">down</span>.
          </>
        ),
        text: (
          <>
            We <span className="pricing-emphasis-green">separate</span> the <span className="pricing-emphasis-red">real problem</span> from the <span className="pricing-emphasis-yellow">noise</span> so you are <span className="pricing-emphasis-red">not stuck</span> clicking <span className="pricing-emphasis-yellow">random fixes</span>.
          </>
        ),
        statement: (
          <>
            <strong><span className="pricing-emphasis-green">Plain</span>-<span className="pricing-emphasis-blue">English</span> <span className="pricing-emphasis-yellow">troubleshooting</span>.</strong>
          </>
        ),
        tags: ["apps", "portals", "smart home", "AI tools"],
      },
      {
        label: "03",
        icon: "🛠️",
        title: (
          <>
            You get a <span className="pricing-emphasis-blue">clear fix path</span>.
          </>
        ),
        text: (
          <>
            You leave knowing what to <span className="pricing-emphasis-green">try</span>, what to <span className="pricing-emphasis-red">avoid</span>, what needs <span className="pricing-emphasis-yellow">setup</span>, and when <span className="pricing-emphasis-blue">deeper help</span> makes <span className="pricing-emphasis-green">sense</span>.
          </>
        ),
        statement: (
          <>
            <strong><span className="pricing-emphasis-yellow">Less</span> <span className="pricing-emphasis-red">stress</span>. <span className="pricing-emphasis-green">More</span> <span className="pricing-emphasis-blue">control</span>.</strong>
          </>
        ),
        tags: ["setup help", "safety check", "next steps", "tech confidence"],
      },
    ],
  },
};

export default function Home() {
  const [activePath, setActivePath] = useState("default");
  const [storyMode, setStoryMode] = useState("daftitude");
  const [lockedStoryMode, setLockedStoryMode] = useState("daftitude");
  const [subscriptionBilling, setSubscriptionBilling] = useState("oneTime");
  const [pricingAudience, setPricingAudience] = useState("business");
  const [systemResourceView, setSystemResourceView] = useState("businessResources");
  const heroSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const particleTarget = document.getElementById("particles-js");
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;
    const narrowScreen = window.matchMedia?.("(max-width: 760px)")?.matches;

    if (!particleTarget || reducedMotion || coarsePointer || narrowScreen) {
      if (particleTarget) particleTarget.innerHTML = "";
      return undefined;
    }

    let attempts = 0;
    let cancelled = false;
    let retryTimer;

    const bootParticles = () => {
      if (cancelled) return;

      const particlesReady = window.particlesJS;

      if (particlesReady) {
        window.particlesJS.load("particles-js", "/particles-config.json");
        return;
      }

      attempts += 1;

      if (attempts < 20) {
        retryTimer = window.setTimeout(bootParticles, 150);
      }
    };

    const bootWhenIdle = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 250));
    const idleId = bootWhenIdle(bootParticles);

    return () => {
      cancelled = true;

      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }

      if (window.cancelIdleCallback && typeof idleId === "number") {
        window.cancelIdleCallback(idleId);
      }

      particleTarget.innerHTML = "";
    };
  }, []);

  const activeMessage = useMemo(() => {
    return heroMessages[activePath] || heroMessages.default;
  }, [activePath]);

  const selectedStory = storyboards[storyMode] || storyboards.daftitude;
  const selectedCta = modeCtas[storyMode] || modeCtas.daftitude;
  const selectedSystems = ["toolbox", "diy"].includes(systemResourceView)
    ? daftitudeSystems.askdaft
    : daftitudeSystems.daftitude;

  const isBusinessPricing = pricingAudience === "business";
  const isOneTimePricing = subscriptionBilling === "oneTime";
  const pricingRows = isBusinessPricing
    ? isOneTimePricing
      ? businessPricingRows
      : businessMonthlyRows
    : isOneTimePricing
      ? askDaftQuickRows.map((row) => ({
        tier: row.tier,
        bestFor: row.label,
        includes: row.description,
        price: row.price,
      }))
      : askDaftMonthlyRows;
  const pricingHeader = isBusinessPricing
    ? isOneTimePricing
      ? "Business Solutions — One-Time"
      : "Business Solutions — Monthly"
    : isOneTimePricing
      ? "Tech Help — One-Time"
      : "Tech Help — Monthly";

  const buildPricingActionLink = (row, action) => {
    const serviceName = row.service || row.tier;
    const audience = pricingAudience === "business" ? "business" : "askdaft";
    const pricingType = subscriptionBilling === "oneTime" ? "one-time" : "monthly";
    const target = action === "book" ? "availability" : "checkout";

    const params = new URLSearchParams({
      service: serviceName,
      audience,
      type: pricingType,
      action,
    });

    return `/askdaft?${params.toString()}#${target}`;
  };

  const previewStoryMode = (mode) => {
    setActivePath(mode);
    setStoryMode(mode);
  };

  const selectStoryMode = (mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);
    setPricingAudience(mode === "askdaft" ? "askdaft" : "business");
    setSubscriptionBilling("oneTime");
    setSystemResourceView(mode === "askdaft" ? "toolbox" : "businessResources");

    window.requestAnimationFrame(() => {
      document
        .getElementById("average-pricing")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const selectServiceLane = (mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);
    setPricingAudience(mode === "askdaft" ? "askdaft" : "business");
    setSubscriptionBilling("oneTime");
    setSystemResourceView(mode === "askdaft" ? "toolbox" : "businessResources");
  };

  const previewServiceLane = (mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);
    setPricingAudience(mode === "askdaft" ? "askdaft" : "business");
  };

  const scrollToAveragePricing = () => {
    document
      .getElementById("average-pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetStoryPreview = () => {
    setActivePath(lockedStoryMode);
    setStoryMode(lockedStoryMode);
  };

  const handleHeroPointerMove = (event) => {
    if (event.pointerType !== "mouse" || !heroSectionRef.current) return;

    const bounds = heroSectionRef.current.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const nextPath = pointerX < bounds.width / 2 ? "daftitude" : "askdaft";

    if (nextPath !== activePath) {
      previewStoryMode(nextPath);
    }
  };

  return (
    <main className="home-game-page">
      <div id="particles-js" className="home-particles" aria-hidden="true" />

      <section
        ref={heroSectionRef}
        className={`game-start-screen is-${activePath} story-${storyMode}`}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetStoryPreview}
      >
        <button
          type="button"
          className="game-path game-path-daftitude"
          style={{ "--hero-image": `url(${daftitudeBusinessHero})` }}
          onMouseEnter={() => previewStoryMode("daftitude")}
          onFocus={() => previewStoryMode("daftitude")}
          onClick={() => selectStoryMode("daftitude")}
        >
          <span className="path-kicker">Business Solutions</span>
          <strong><BrandName name="DaFTitude" /></strong>
          <small>Strategy • Systems • Consulting • Education</small>
        </button>

        <button
          type="button"
          className="game-path game-path-askdaft"
          style={{ "--hero-image": `url(${askDaftHero})` }}
          onMouseEnter={() => previewStoryMode("askdaft")}
          onFocus={() => previewStoryMode("askdaft")}
          onClick={() => selectStoryMode("askdaft")}
        >
          <span className="path-kicker">Tech Services</span>
          <strong><BrandName name="AskDaFT" /></strong>
          <small>Residential • Small Business • Setup • Support</small>
        </button>

        <div
          className="game-center-panel"
          style={{ "--center-hero-image": `url(${daftitudeCenterHero})` }}
          aria-live="polite"
        >
          <p className="game-eyebrow">{activeMessage.eyebrow}</p>
          <h1 className="hero-brand-title">{activeMessage.title}</h1>
          <p>{activeMessage.text}</p>

          <div className="game-actions game-actions-main">
            <button type="button" className="game-btn primary" onClick={() => selectStoryMode("daftitude")}>
              View Business Pricing
            </button>
            <button type="button" className="game-btn secondary" onClick={() => selectStoryMode("askdaft")}>
              View AskDaFT Pricing
            </button>
          </div>

          <button type="button" className="game-more-info" onClick={() => selectStoryMode(storyMode)}>
            View pricing ↓
          </button>
        </div>

        <div className="game-bottom-hint">Move left or right. Pick a path. Jump to pricing.</div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section className={`story-mode-section mode-cta-section mode-cta-section--${storyMode}`}>
        <div className="mode-cta-panel">
          <div className="mode-cta-copy">
            <div className="mode-cta-kicker-row">
              <p className="story-kicker">{selectedCta.kicker}</p>

              <div className="mode-cta-mini-bubbles" aria-label={`${storyMode} quick focus areas and actions`}>
                {selectedCta.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <h2>{selectedCta.title}</h2>
            <p>{selectedCta.text}</p>

            <div className="mode-cta-lane-picker" aria-label="Pick a service lane">
              <button
                type="button"
                className={storyMode === "daftitude" ? "active" : ""}
                onMouseEnter={() => previewServiceLane("daftitude")}
                onFocus={() => previewServiceLane("daftitude")}
                onClick={() => selectStoryMode("daftitude")}
              >
                <BrandName name="DaFTitude" />
                <small>Business systems</small>
              </button>
              <button
                type="button"
                className={storyMode === "askdaft" ? "active" : ""}
                onMouseEnter={() => previewServiceLane("askdaft")}
                onFocus={() => previewServiceLane("askdaft")}
                onClick={() => selectStoryMode("askdaft")}
              >
                <BrandName name="AskDaFT" />
                <small>Hands-on tech help</small>
              </button>
            </div>

            <div className="mode-cta-action-row">
              {selectedCta.primaryTo ? (
                <Link className="game-btn primary" to={selectedCta.primaryTo}>
                  {selectedCta.primaryText}
                </Link>
              ) : (
                <button type="button" className="game-btn primary" onClick={scrollToAveragePricing}>
                  {selectedCta.primaryText}
                </button>
              )}

              {selectedCta.secondaryTo ? (
                <Link className="game-btn secondary" to={selectedCta.secondaryTo}>
                  {selectedCta.secondaryText}
                </Link>
              ) : (
                <button type="button" className="game-btn secondary" onClick={scrollToAveragePricing}>
                  {selectedCta.secondaryText}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section id="average-pricing" className="story-mode-section subscription-section average-pricing-section">
        <div className="story-mode-header compact pricing-chart-intro">
          <p className="story-kicker step-pill-kicker">Step 2: Pick Your Price Lane</p>
          <h2>
            <span className="pricing-emphasis-blue">Find</span> the <span className="pricing-emphasis-green">price</span> path that <span className="pricing-emphasis-yellow">fits</span> the <span className="pricing-emphasis-blue">help</span> you actually <span className="pricing-emphasis-yellow">need</span>.
          </h2>
          <div className="pricing-skim-guide pricing-skim-guide--clean" aria-label="How to use the pricing chart">
            <article className="pricing-skim-card">
              <strong className="pricing-skim-number">1</strong>
              <h3>Pick the lane</h3>
              <p>
                <b className="pricing-emphasis-blue">DaFTitude</b> for systems and business planning.
                <b className="pricing-emphasis-green"> AskDaFT</b> for hands-on tech help.
              </p>
            </article>

            <article className="pricing-skim-card">
              <strong className="pricing-skim-number">2</strong>
              <h3>Choose the style</h3>
              <p>
                <b className="pricing-emphasis-yellow">One Time</b> for one focused problem.
                <b className="pricing-emphasis-yellow"> Monthly</b> for ongoing support.
              </p>
            </article>

            <article className="pricing-skim-card">
              <strong className="pricing-skim-number">3</strong>
              <h3>Take the next step</h3>
              <p>
                Compare <b className="pricing-emphasis-red">fit, scope, and price</b>, then
                <b className="pricing-emphasis-blue"> quote, book, or subscribe</b>.
              </p>
            </article>
          </div>
        </div>

        <div className="subscription-toggle-card">
          <div className="subscription-toggle-topline">
            <div className="pricing-toggle-heading">
              <span className="subscription-mini-label">Now Viewing</span>
              <h3>
                <BrandName name={isBusinessPricing ? "DaFTitude" : "AskDaFT"} /> {pricingHeader}
              </h3>
            </div>

            <div className="subscription-toggle-stack">
              <div className="subscription-toggle" role="group" aria-label="Choose pricing audience">
                <button
                  type="button"
                  className={pricingAudience === "business" ? "active" : ""}
                  onClick={() => setPricingAudience("business")}
                >
                  DaFTitude Business
                </button>
                <button
                  type="button"
                  className={pricingAudience === "askdaft" ? "active" : ""}
                  onClick={() => setPricingAudience("askdaft")}
                >
                  AskDaFT
                </button>
              </div>

              <div className="subscription-toggle" role="group" aria-label="Choose pricing type">
                <button
                  type="button"
                  className={subscriptionBilling === "oneTime" ? "active" : ""}
                  onClick={() => setSubscriptionBilling("oneTime")}
                >
                  One Time
                </button>
                <button
                  type="button"
                  className={subscriptionBilling === "monthly" ? "active" : ""}
                  onClick={() => setSubscriptionBilling("monthly")}
                >
                  Monthly Service
                </button>
              </div>
            </div>
          </div>

          <table className="pricing-chart subscription-chart" aria-label={`${pricingHeader} pricing chart`}>
            <thead>
              <tr>
                <th scope="col">{isBusinessPricing && isOneTimePricing ? "Service" : "Plan"}</th>
                <th scope="col">Best For</th>
                <th scope="col">What It Covers</th>
                <th scope="col">{isOneTimePricing ? "Ballpark" : "Monthly Range"}</th>
                <th scope="col">Next Step</th>
              </tr>
            </thead>

            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.service || row.tier} title={`${row.service || row.tier}: ${row.range || row.price}. ${(row.note || row.includes).join(", ")}`}>
                  <th scope="row" className="pricing-chart-service">{row.service || row.tier}</th>
                  <td>
                    <span className="pricing-chart-pill">{row.bestFor}</span>
                  </td>
                  <td className="pricing-chart-note">
                    <ul className="pricing-chart-bullets">
                      {(row.note || row.includes).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="pricing-chart-price">{row.range || row.price}</td>
                  <td className="pricing-chart-actions">
                    <Link
                      className="pricing-action-btn quote"
                      to={buildPricingActionLink(row, "quote")}
                    >
                      Get Quote
                    </Link>
                    <Link
                      className="pricing-action-btn book"
                      to={buildPricingActionLink(row, "book")}
                    >
                      {subscriptionBilling === "monthly" ? "Subscribe" : "Book"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section className="quick-contact-cta" aria-label="Quick contact options">
        <div className="quick-contact-card">
          <p className="story-kicker">Need Help Now?</p>
          <h2>
            Still have <span className="pricing-emphasis-yellow">questions</span> or need <span className="pricing-emphasis-green">help now</span>?
          </h2>
          <p>
            Text or call, DM me on socials, or email me if you like doing things the dinosaur way.
          </p>

          <div className="quick-contact-actions">
            <a className="quick-contact-btn primary" href="sms:+12052108012">
              Text Me
              <span>+1 (205) 210-8012</span>
            </a>
            <a className="quick-contact-btn secondary" href="tel:+12052108012">
              Call Now
              <span>Open phone app</span>
            </a>
            <Link className="quick-contact-btn ghost" to="/contact">
              DM on Socials
              <span>Find the links</span>
            </Link>
            <a className="quick-contact-btn ghost" href="mailto:Kyhl.Hines@daftitude.com?subject=DaFTitude%20Help%20Request">
              Email
              <span>Dinosaur mode</span>
            </a>
          </div>
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section id="daftitude-story" className={`story-mode-section story-mode-section--${storyMode}`}>
        <div className="story-mode-header">
          <p className="story-kicker step-pill-kicker">{selectedStory.kicker}</p>
          <h2>{selectedStory.title}</h2>
          <p>{selectedStory.text}</p>

          <div className="story-lane-picker" aria-label="Choose Step 3 service lane">
            <button
              type="button"
              className={storyMode === "daftitude" ? "active" : ""}
              onMouseEnter={() => previewServiceLane("daftitude")}
              onFocus={() => previewServiceLane("daftitude")}
              onClick={() => selectServiceLane("daftitude")}
            >
              <BrandName name="DaFTitude" />
              <span>Business systems</span>
            </button>
            <button
              type="button"
              className={storyMode === "askdaft" ? "active" : ""}
              onMouseEnter={() => previewServiceLane("askdaft")}
              onFocus={() => previewServiceLane("askdaft")}
              onClick={() => selectServiceLane("askdaft")}
            >
              <BrandName name="AskDaFT" />
              <span>Hands-on tech help</span>
            </button>
          </div>
        </div>

        <div className="story-board-grid">
          {selectedStory.cards.map((item) => (
            <article className="story-card" key={item.label}>
              <div className="story-card-topline story-card-topline--with-title">
                <div className="story-card-heading-lockup">
                  <span className="story-card-number">{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="story-card-icon" aria-hidden="true">{item.icon}</span>
              </div>
              <p>{item.text}</p>
              <p className="story-card-statement">{item.statement}</p>
              <div className="story-specialties" aria-label="Specialties">
                <strong>Specialties</strong>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section className="story-mode-section system-map-section">
        <div className="story-mode-header compact">
          <p className="story-kicker step-pill-kicker">Step 4: Connect The Dots</p>

          <h2>
            From <span className="pricing-emphasis-green">everyday help</span> to <span className="pricing-emphasis-blue">deeper learning</span>.
          </h2>

          <div className="system-map-resource-actions system-map-resource-actions--four" aria-label="Step 4 resource views">
            <button
              type="button"
              className={`game-btn primary ${systemResourceView === "businessResources" ? "active" : ""}`}
              onClick={() => {
                setSystemResourceView("businessResources");
                selectServiceLane("daftitude");
                setSystemResourceView("businessResources");
              }}
            >
              <span className="resource-btn-main">DaFTitude Business</span>
              <span className="resource-btn-sub">Resources</span>
            </button>
            <button
              type="button"
              className={`game-btn secondary ${systemResourceView === "advanced" ? "active" : ""}`}
              onClick={() => {
                setSystemResourceView("advanced");
                selectServiceLane("daftitude");
                setSystemResourceView("advanced");
              }}
            >
              <span className="resource-btn-main">Advanced Learning</span>
              <span className="resource-btn-sub">Hub</span>
            </button>
            <button
              type="button"
              className={`game-btn primary ${systemResourceView === "toolbox" ? "active" : ""}`}
              onClick={() => {
                setSystemResourceView("toolbox");
                selectServiceLane("askdaft");
                setSystemResourceView("toolbox");
              }}
            >
              <span className="resource-btn-main">AskDaFT Tool Box</span>
              <span className="resource-btn-sub">Resources</span>
            </button>
            <button
              type="button"
              className={`game-btn secondary ${systemResourceView === "diy" ? "active" : ""}`}
              onClick={() => {
                setSystemResourceView("diy");
                selectServiceLane("askdaft");
                setSystemResourceView("diy");
              }}
            >
              <span className="resource-btn-main">AskDaFT</span>
              <span className="resource-btn-sub">Learn & DIY</span>
            </button>
          </div>

          {systemResourceView === "toolbox" ? (
            <p>
              This is where <span className="pricing-emphasis-yellow">simple tech questions</span> turn into <span className="pricing-emphasis-green">confidence</span>. <BrandName name="AskDaFT" /> connects real-life problems to plain-English topics like <span className="pricing-emphasis-blue">AI tools</span>, <span className="pricing-emphasis-red">privacy</span>, <span className="pricing-emphasis-yellow">scam safety</span>, <span className="pricing-emphasis-green">home tech</span>, and smarter digital habits.
            </p>
          ) : systemResourceView === "diy" ? (
            <p>
              This is the <span className="pricing-emphasis-blue">DIY learning</span> side: plain-English guides, cheat sheets, and walkthroughs that help people understand <span className="pricing-emphasis-yellow">what happened</span>, what to <span className="pricing-emphasis-green">try next</span>, and when to ask for help.
            </p>
          ) : systemResourceView === "advanced" ? (
            <p>
              This is the <span className="pricing-emphasis-blue">advanced learning</span> side: deeper resources for business systems, AI workflows, automation planning, privacy-aware decisions, and the bigger digital systems behind the tools people use every day.
            </p>
          ) : (
            <p>
              This is where the <span className="pricing-emphasis-yellow">business questions</span> start turning into <span className="pricing-emphasis-green">structured resources</span>. <BrandName name="DaFTitude" /> connects business tech problems to the bigger systems behind them: <span className="pricing-emphasis-blue">AI</span>, <span className="pricing-emphasis-red">privacy</span>, <span className="pricing-emphasis-yellow">crypto</span>, <span className="pricing-emphasis-green">security</span>, and smarter digital decisions.
            </p>
          )}
        </div>

        <div className="system-chip-grid system-chip-grid--links">
          {selectedSystems.map((system) => (
            <Link
              className="system-chip system-chip-link"
              title={`${storyMode === "askdaft" ? "AskDaFT" : "DaFTitude"} can help explain, organize, or plan around ${system.label}.`}
              to={system.to}
              key={system.label}
            >
              {system.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section className="story-mode-section split-identity-section">
        <div className="identity-panel daftitude-panel">
          <p className="story-kicker"><BrandName name="DaFTitude" /></p>
          <h2>
            What <BrandName name="DaFTitude" /> has <span className="pricing-emphasis-blue">built</span>, is <span className="pricing-emphasis-green">building</span>, and is <span className="pricing-emphasis-yellow">moving toward</span>.
          </h2>
          <p>
            <BrandName name="DaFTitude" /> is focused on <span className="pricing-emphasis-blue">cybersecurity education</span>, <span className="pricing-emphasis-yellow">research</span>, <span className="pricing-emphasis-green">public outreach</span>, and helping people understand the systems behind <span className="pricing-emphasis-blue">modern tech</span>, <span className="pricing-emphasis-green">AI</span>, <span className="pricing-emphasis-red">privacy</span>, <span className="pricing-emphasis-red">scams</span>, and <span className="pricing-emphasis-yellow">digital risk</span>.
          </p>
          <p>
            I am also accepting <span className="pricing-emphasis-green">contracts</span>, <span className="pricing-emphasis-yellow">consulting work</span>, and the right <span className="pricing-emphasis-blue">full-time opportunity</span> where software, cybersecurity, AI, education, and <span className="pricing-emphasis-green">public impact</span> overlap.
          </p>
          <div className="panel-buzz-row" aria-label="Current DaFTitude focus areas">
            <span title="Researching cybersecurity, scams, AI risk, privacy, and public-facing digital safety education.">Cybersecurity research</span>
            <span title="Building resources that help regular people understand modern digital risks before damage happens.">Public outreach</span>
            <span title="Open to contracts, consulting, and serious full-time opportunities connected to tech, security, and education.">Contracts / full-time work</span>
          </div>
          <div className="panel-action-row">
            <Link className="game-btn secondary" to="/contact">Contact DaFTitude</Link>
            <Link className="game-btn ghost" to="/tech">Research I’m Working On</Link>
          </div>
        </div>

        <div className="identity-panel askdaft-panel">
          <p className="story-kicker"><BrandName name="AskDaFT" /></p>
          <h2>
            What <BrandName name="AskDaFT" /> has <span className="pricing-emphasis-blue">helped with</span>, is <span className="pricing-emphasis-green">doing</span>, and is <span className="pricing-emphasis-yellow">focused on </span>.
          </h2>
          <p>
            <BrandName name="AskDaFT" /> is taking on more <span className="pricing-emphasis-yellow">senior</span> and <span className="pricing-emphasis-yellow">elderly</span> clients who need <span className="pricing-emphasis-green">patient</span>, plain-English help staying <span className="pricing-emphasis-green">connected</span>, <span className="pricing-emphasis-blue">safer</span>, and more confident with everyday technology.
          </p>
          <p>
            The goal is to help parents and grandparents stay <span className="pricing-emphasis-green">connected</span> and in the now: <span className="pricing-emphasis-red">phones</span>, <span className="pricing-emphasis-yellow">portals</span>, <span className="pricing-emphasis-red">scams</span>, <span className="pricing-emphasis-green">accounts</span>, <span className="pricing-emphasis-blue">smart devices</span>, home tech, and the tools they depend on but may not feel comfortable using alone.
          </p>
          <div className="panel-buzz-row" aria-label="Current AskDaFT focus areas">
            <span title="Patient tech help for seniors, parents, grandparents, and people who do not want to feel rushed.">Senior-friendly tech help</span>
            <span title="Helping families stay connected through phones, video calls, portals, accounts, and everyday devices.">Family connection support</span>
            <span title="Plain-English help with scam awareness, suspicious messages, passwords, portals, and safer digital habits.">Safety and scam support</span>
          </div>
          <div className="panel-action-row">
            <Link className="game-btn primary" to="/askdaft">Visit AskDaFT</Link>
            <Link className="game-btn ghost" to="/contact">Ask About Help</Link>
          </div>
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section className="story-mode-section hub-select-section">
        <div className="story-mode-header compact">
          <p className="story-kicker step-pill-kicker">Step 5: Keep Learning</p>
          <h2>
            Pick a <span className="pricing-emphasis-blue">hub</span>. Learn what <span className="pricing-emphasis-green">matters</span>.
          </h2>
        </div>

        <div className="hub-card-grid">
          {hubCards.map((hub) => (
            <Link className="hub-select-card" to={hub.to} key={hub.title} title={`Open the ${hub.title} section`}>
              <span className="hub-card-icon" aria-hidden="true">{hub.icon}</span>
              <h3>{hub.title}</h3>
              <p>{hub.text}</p>
              <span>Enter Hub →</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <section className="story-mode-section final-start-section">
        <p className="story-kicker step-pill-kicker">Final Step</p>
        <h2>
          Choose the <span className="pricing-emphasis-blue">next move</span> that fits where you are.
        </h2>
        <p>
          Need <span className="pricing-emphasis-green">hands-on tech help</span>? Start with <BrandName name="AskDaFT" />.
          Need a <span className="pricing-emphasis-blue">bigger plan</span>, research help, or business support? Contact <BrandName name="DaFTitude" />.
          Want to <span className="pricing-emphasis-yellow">learn first</span>? Start with the hubs and build your understanding before you ask for help.
        </p>
        <div className="game-actions centered">
          <Link className="game-btn primary" to="/askdaft">Get Tech Help</Link>
          <Link className="game-btn secondary" to="/contact">Contact DaFTitude</Link>
          <Link className="game-btn ghost" to="/tech">Start Learning</Link>
        </div>
      </section>

      <button type="button" className="jump-to-top-btn" onClick={scrollToTop} aria-label="Jump back to top">
        ↑
      </button>
    </main>
  );
}