import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import daftitudeBusinessHero from "../images/hero/daftitude-business-blue-object.png";
import askDaftHero from "../images/hero/askdaft-residential-green-object.png";
import daftitudeCenterHero from "../images/hero/daftitude-center-object.png";

const heroMessages = {
  default: {
    eyebrow: "Digital Clarity Starts Here",
    title: "DaFTitude",
    text: "Using Data, Analytics, Finance, and Technology, we help people stop guessing, understand the system, and move smarter.",
  },
  daftitude: {
    eyebrow: "Business Solutions",
    title: "Systems that make life easier.",
    text: "We can help make sense of messy tools, big ideas, and digital problems — then organize them into clearer systems and smarter plans.",
  },
  askdaft: {
    eyebrow: "Tech Services",
    title: "Tech help for real life.",
    text: "We can help with the real-life tech stuff: setup, troubleshooting, smart homes, AI tools, devices, portals, and plain-English support.",
  },
};

const daftitudeSystems = [
  "AI workflows",
  "Automation",
  "Data & analytics",
  "Privacy awareness",
  "Cybersecurity education",
  "Crypto education",
  "Business systems",
  "Creator systems",
  "Software planning",
  "Research & learning",
];

const hubCards = [
  {
    icon: "🤖",
    title: "AI Hub",
    text: "Prompting, AI basics, automation ideas, workflows, safety, and practical use cases.",
    to: "/ai",
  },
  {
    icon: "🧩",
    title: "Tech Hub",
    text: "Digital systems, tools, project updates, and technology explained without the noise.",
    to: "/tech",
  },
  {
    icon: "📈",
    title: "Crypto",
    text: "Risk-aware crypto education, research, market structure, and transparent learning.",
    to: "/crypto",
  },
  {
    icon: "🔐",
    title: "Privacy",
    text: "Data brokers, breach awareness, app tracking, account safety, and privacy habits.",
    to: "/privacy",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    text: "Scam awareness, password safety, phishing education, MFA, and defensive habits.",
    to: "/cybersecurity",
  },
  {
    icon: "🧭",
    title: "Mission",
    text: "The DaFTitude story, the AskDaft split, and the larger reason behind the build.",
    to: "/mission",
  },
];

const modeCtas = {
  daftitude: {
    kicker: "Ballpark Planning",
    title: "Need a business tech plan before you spend real money?",
    text: "DaFTitude business work depends on scope, but the first step should be clarity: what you need, what you already have, what can be automated, and what should not be overbuilt.",
    primaryText: "View Ballpark Pricing",
    secondaryText: "Start Business Form",
    primaryAction: "average",
    secondaryTo: "/contact",
    highlights: ["AI workflow planning", "automation cleanup", "tech stack review", "system buildout planning"],
  },
  askdaft: {
    kicker: "Quick Help Menu",
    title: "Need hands-on tech help instead? Start with AskDaft.",
    text: "AskDaft is for direct help with home tech, small-business setup, creator tools, portals, suspicious messages, smart devices, and plain-English troubleshooting.",
    primaryText: "Preview Common Help",
    secondaryText: "Go to AskDaft",
    primaryAction: "askdaft-table",
    secondaryAction: "askdaft-table",
    highlights: ["Wi-Fi / printer help", "smart-home setup", "AI tools help", "scam message review"],
  },
};

const businessPricingRows = [
  {
    service: "Clarity Call / Tech Direction",
    range: "$75–$150",
    bestFor: "First step",
    note: "A focused session to understand the problem, options, and next move.",
  },
  {
    service: "Business Tech Stack Review",
    range: "$250–$750",
    bestFor: "Cleanup",
    note: "Review tools, accounts, workflows, gaps, risks, and cleanup opportunities.",
  },
  {
    service: "AI Workflow / Automation Planning",
    range: "$500–$2,500+",
    bestFor: "Automation",
    note: "Map repeatable tasks, AI use cases, automation ideas, and realistic implementation steps.",
  },
  {
    service: "Systems Buildout Planning",
    range: "$1,500–$5,000+",
    bestFor: "Larger builds",
    note: "Planning for larger website, app, dashboard, content, data, or operations systems.",
  },
];

const askDaftQuickRows = [
  {
    tier: "Quick Help",
    price: "$25–$50",
    label: "Fast Fix",
    description: "Simple question, quick setting, basic walkthrough.",
    features: ["One focused issue", "Plain-English walkthrough", "Best for quick answers"],
    cta: "Start Small",
  },
  {
    tier: "Standard Help",
    price: "$60–$125",
    label: "Most Common",
    description: "Troubleshooting, setup, account/device guidance, app help.",
    features: ["Device or account help", "Setup guidance", "Clean next-step plan"],
    cta: "Get Help",
    featured: true,
  },
  {
    tier: "Setup & Teach",
    price: "$100–$250",
    label: "Hands-On",
    description: "Smart TV, printer, phone, AI tools, smart-home, creator basics.",
    features: ["Setup plus teaching", "Smart-home basics", "Creator or AI tool help"],
    cta: "Book Setup",
  },
  {
    tier: "Full Tech Rescue",
    price: "$250+",
    label: "Deep Cleanup",
    description: "Messy multi-device/account problem that needs deeper cleanup.",
    features: ["Multi-step cleanup", "Account/device sorting", "Bigger tech messes"],
    cta: "Start Rescue",
  },
];

const businessMonthlyRows = [
  {
    tier: "Business Check-In",
    bestFor: "Light guidance",
    includes: "Best for solo owners or creators who need a recurring strategy touchpoint, light tool review, and simple next-step planning.",
    price: "$150–$250/mo",
  },
  {
    tier: "Tech Stack Support",
    bestFor: "Ongoing cleanup",
    includes: "Best for businesses that need recurring help reviewing apps, accounts, workflows, files, automations, and system clutter.",
    price: "$300–$600/mo",
  },
  {
    tier: "AI Workflow Partner",
    bestFor: "Automation growth",
    includes: "Best for businesses actively planning AI workflows, repeatable automations, content systems, dashboards, or internal process improvements.",
    price: "$750–$1,500/mo",
  },
  {
    tier: "Systems Partner",
    bestFor: "Deeper build support",
    includes: "Best for larger ongoing planning across websites, apps, dashboards, business systems, data, content, and operations support.",
    price: "Custom",
  },
];

const askDaftMonthlyRows = [
  {
    tier: "Monthly Check-In",
    bestFor: "Light upkeep",
    includes: "Best for small questions, simple account/device checks, update help, and one focused monthly tech issue. Includes 1 visit per month, up to 1 hour.",
    price: "$25–$55/mo",
  },
  {
    tier: "Basic Tech Support",
    bestFor: "Ongoing help",
    includes: "Best for people who need regular help with devices, apps, smart-home basics, portals, and simple troubleshooting. Includes 2 visits per month, up to 1 hour each.",
    price: "$100–$150/mo",
  },
  {
    tier: "Priority Tech Support",
    bestFor: "Busy homes",
    includes: "Best for households, creators, or small teams with recurring setup, cleanup, troubleshooting, and workflow needs. Includes 2 visits per month, up to 3 hours per visit.",
    price: "$200–$275/mo",
  },
  {
    tier: "Managed Tech Partner",
    bestFor: "Deeper support",
    includes: "Best for people or small businesses that want a consistent tech partner for planning, setup, cleanup, AI tools, accounts, and systems support. Scope is customized after review.",
    price: "Custom",
  },
];

const storyboards = {
  daftitude: {
    kicker: "The Breakdown",
    title: "Technology is everywhere. Clarity is not.",
    text: "We use DaFTitude for the bigger system and AskDaft for the hands-on help. The goal is not to sound fancy — it is to make technology make sense for real people.",
    cards: [
      {
        label: "01",
        icon: "🧠",
        title: "Make sense of the system.",
        text: "We help organize tools, risks, ideas, and workflows into a clearer plan.",
        statement: (
          <>
            <strong>Plan before you buy, build, automate, or scale.</strong>
          </>
        ),
        tags: ["business automation", "AI workflow", "tech strategy", "systems planning"],
      },
      {
        label: "02",
        icon: "🛠️",
        title: "Fix the tech friction.",
        text: "AskDaft helps with Wi-Fi, printers, phones, smart homes, accounts, apps, and setup problems.",
        statement: (
          <>
            <strong>Clear help without the tech ego.</strong>
          </>
        ),
        tags: ["Wi-Fi help", "smart home", "printer help", "setup support"],
      },
      {
        label: "03",
        icon: "✨",
        title: "Stop guessing.",
        text: "We explain what matters, cut through the noise, and help people make smarter digital decisions.",
        statement: (
          <>
            <strong>Turn confusion into confidence.</strong>
          </>
        ),
        tags: ["plain English", "digital confidence", "tech learning", "safer habits"],
      },
    ],
  },
  askdaft: {
    kicker: "AskDaft Mode",
    title: "Hands-on tech help without the tech ego.",
    text: "AskDaft is the service doorway for people, families, creators, students, seniors, and small businesses who need practical help getting technology to actually work.",
    cards: [
      {
        label: "01",
        icon: "🏠",
        title: "Make home tech simple.",
        text: "Help with Wi-Fi, printers, smart TVs, phones, apps, accounts, and smart-home devices.",
        statement: (
          <>
            <strong>Get the setup working without the fight.</strong>
          </>
        ),
        tags: ["Wi-Fi fixes", "printer setup", "smart TV help", "smart home"],
      },
      {
        label: "02",
        icon: "🎙️",
        title: "Build the right setup.",
        text: "Help choosing realistic gear, apps, AI tools, streaming setups, study systems, and workflows.",
        statement: (
          <>
            <strong>Choose smarter before you waste money.</strong>
          </>
        ),
        tags: ["streaming setup", "podcast gear", "AI tools", "study systems"],
      },
      {
        label: "03",
        icon: "🧓",
        title: "No tech shame.",
        text: "Slow, clear help for parents, seniors, busy people, portals, suspicious messages, and account safety.",
        statement: (
          <>
            <strong>Patient support that helps people feel safer.</strong>
          </>
        ),
        tags: ["scam review", "portal help", "account safety", "patient teaching"],
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
      ? "DaFTitude Business Solutions — One-Time"
      : "DaFTitude Business Solutions — Monthly"
    : isOneTimePricing
      ? "AskDaFT Tech Help — One-Time"
      : "AskDaFT Tech Help — Monthly";

  const previewStoryMode = (mode) => {
    setActivePath(mode);
    setStoryMode(mode);
  };

  const selectStoryMode = (mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);

    window.requestAnimationFrame(() => {
      document
        .getElementById("daftitude-story")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const scrollToAveragePricing = () => {
    document
      .getElementById("average-pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <strong>DaFTitude</strong>
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
          <strong>AskDaft</strong>
          <small>Residential • Small Business • Setup • Support</small>
        </button>

        <div
          className="game-center-panel"
          style={{ "--center-hero-image": `url(${daftitudeCenterHero})` }}
          aria-live="polite"
        >
          <p className="game-eyebrow">{activeMessage.eyebrow}</p>
          <h1>{activeMessage.title}</h1>
          <p>{activeMessage.text}</p>

          <div className="game-actions game-actions-main">
            <button type="button" className="game-btn primary" onClick={() => selectStoryMode("daftitude")}>
              Learn What DaFTitude Does
            </button>
            <button type="button" className="game-btn secondary" onClick={() => selectStoryMode("askdaft")}>
              Preview AskDaft Help
            </button>
          </div>

          <button type="button" className="game-more-info" onClick={() => selectStoryMode(storyMode)}>
            See how it works ↓
          </button>
        </div>

        <div className="game-bottom-hint">Move left or right. Pick a path. Scroll for story mode.</div>
      </section>


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

      <section id="average-pricing" className="story-mode-section subscription-section average-pricing-section">
        <div className="story-mode-header compact pricing-chart-intro">
          <p className="story-kicker">Ballpark Chart</p>
          <h2>Pick a service path, then compare the range.</h2>
          <p>
            Switch between DaFTitude Business and AskDaFT, then choose One Time or Monthly Service.
            The chart updates to show the right plan, best use case, scope, and price range.
          </p>
        </div>

        <div className="subscription-toggle-card">
          <div className="subscription-toggle-topline">
            <div className="pricing-toggle-heading">
              <span className="subscription-mini-label">Now Viewing</span>
              <h3>{pricingHeader}</h3>
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
              </tr>
            </thead>

            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.service || row.tier} title={`${row.service || row.tier}: ${row.range || row.price}. ${row.note || row.includes}`}>
                  <th scope="row" className="pricing-chart-service">{row.service || row.tier}</th>
                  <td>
                    <span className="pricing-chart-pill">{row.bestFor}</span>
                  </td>
                  <td className="pricing-chart-note">{row.note || row.includes}</td>
                  <td className="pricing-chart-price">{row.range || row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="daftitude-story" className={`story-mode-section story-mode-section--${storyMode}`}>
        <div className="story-mode-header">
          <p className="story-kicker">{selectedStory.kicker}</p>
          <h2>{selectedStory.title}</h2>
          <p>{selectedStory.text}</p>
        </div>

        <div className="story-board-grid">
          {selectedStory.cards.map((item) => (
            <article className="story-card" key={item.label}>
              <div className="story-card-topline">
                <span className="story-card-number">{item.label}</span>
                <span className="story-card-icon" aria-hidden="true">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
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

      <section className="story-mode-section system-map-section">
        <div className="story-mode-header compact">
          <p className="story-kicker">System Map</p>
          <h2>The DaFTitude system map.</h2>
          <p>
            These are the areas we can help explain, organize, plan around, or
            connect into something useful.
          </p>
        </div>

        <div className="system-chip-grid">
          {daftitudeSystems.map((system) => (
            <span className="system-chip" title={`DaFTitude can help explain, organize, or plan around ${system}.`} key={system}>{system}</span>
          ))}
        </div>
      </section>

      <section className="story-mode-section split-identity-section">
        <div className="identity-panel daftitude-panel">
          <p className="story-kicker">DaFTitude</p>
          <h2>Business IT solutions, systems thinking, and practical strategy.</h2>
          <p>
            Use DaFTitude when you need the bigger picture. We can help sort out
            what to build, what to buy, what to avoid, what to automate, and how
            to turn scattered tools into an actual system.
          </p>
          <div className="panel-buzz-row" aria-label="Common business help requests">
            <span title="Planning AI tools and repeatable workflows for work or content.">AI workflow planning</span>
            <span title="Cleaning up tools, accounts, files, apps, and systems that became messy over time.">Tech stack cleanup</span>
            <span title="Helping choose realistic hardware, software, or service options before spending money.">Before-you-buy consulting</span>
          </div>
          <Link className="game-btn secondary" to="/contact">Contact DaFTitude</Link>
        </div>

        <div className="identity-panel askdaft-panel">
          <p className="story-kicker">AskDaft</p>
          <h2>Residential and personal tech services for real life.</h2>
          <p>
            Use AskDaft when you need help getting something working. We can help
            explain it, update it, connect it, review it, clean it up, or set it
            up without the tech ego.
          </p>
          <div className="panel-buzz-row" aria-label="Common tech service requests">
            <span title="Help with routers, Wi-Fi dead zones, printer connections, and home device issues.">Wi-Fi / printer help</span>
            <span title="Setup for Alexa, smart bulbs, smart TVs, blinds, cameras, speakers, and other smart-home devices.">Smart home setup</span>
            <span title="Help with VA, government, school, business, or account portals from the technical side.">Portal help</span>
          </div>
          <Link className="game-btn primary" to="/askdaft">Visit AskDaft</Link>
        </div>
      </section>

      <section className="story-mode-section hub-select-section">
        <div className="story-mode-header compact">
          <p className="story-kicker">Hub Select</p>
          <h2>Choose a learning or project hub.</h2>
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

      <section className="story-mode-section final-start-section">
        <p className="story-kicker">Next Move</p>
        <h2>Pick the right doorway.</h2>
        <p>
          Need hands-on help? Go AskDaft. Need the bigger plan? Contact
          DaFTitude. Want to learn first? Start with the hubs.
        </p>
        <div className="game-actions centered">
          <Link className="game-btn primary" to="/askdaft">Get Tech Help</Link>
          <Link className="game-btn secondary" to="/contact">Contact DaFTitude</Link>
          <Link className="game-btn ghost" to="/tech">Explore Tech Hub</Link>
        </div>
      </section>
    </main>
  );
}