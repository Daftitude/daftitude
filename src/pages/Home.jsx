import { useEffect, useMemo, useState } from "react";
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

const storyboards = {
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
    primaryText: "Go to AskDaft",
    secondaryText: "Preview Common Help",
    primaryTo: "/askdaft",
    secondaryAction: "askdaft-table",
    highlights: ["Wi-Fi / printer help", "smart-home setup", "AI tools help", "scam message review"],
  },
};

const businessPricingRows = [
  ["Clarity Call / Tech Direction", "$75–$150", "A focused session to understand the problem, options, and next move."],
  ["Business Tech Stack Review", "$250–$750", "Review tools, accounts, workflows, gaps, risks, and cleanup opportunities."],
  ["AI Workflow / Automation Planning", "$500–$2,500+", "Map repeatable tasks, AI use cases, automation ideas, and realistic implementation steps."],
  ["Systems Buildout Planning", "$1,500–$5,000+", "Planning for larger website, app, dashboard, content, data, or operations systems."],
];

const askDaftQuickRows = [
  ["Quick Help", "$25–$50", "Simple question, quick setting, basic walkthrough."],
  ["Standard Help", "$60–$125", "Troubleshooting, setup, account/device guidance, app help."],
  ["Setup & Teach", "$100–$250", "Smart TV, printer, phone, AI tools, smart-home, creator basics."],
  ["Full Tech Rescue", "$250+", "Messy multi-device/account problem that needs deeper cleanup."],
];
  daftitude: {
    kicker: "The Breakdown",
    title: "Technology is everywhere. Clarity is not.",
    text: "We use DaFTitude for the bigger system and AskDaft for the hands-on help. The goal is not to sound fancy — it is to make technology make sense for real people.",
    cards: [
      {
        label: "01",
        icon: "🧠",
        title: "For the bigger tech picture.",
        text: "We can help make sense of the tools, systems, risks, and ideas around you — then turn them into a cleaner plan.",
        statement: (
          <>
            <strong>We can organize a clear plan</strong> before you buy, build,
            automate, or scale.
          </>
        ),
        tags: ["business automation", "AI workflow", "tech strategy", "systems planning"],
      },
      {
        label: "02",
        icon: "🛠️",
        title: "For the tech that keeps getting in the way.",
        text: "We can help with the stuff people actually need working: Wi-Fi, printers, phones, smart homes, accounts, portals, creator setups, and confusing apps.",
        statement: (
          <>
            <strong>We can walk through it in plain English</strong> so the devices,
            accounts, apps, and setups people use actually make sense.
          </>
        ),
        tags: ["Wi-Fi help", "smart home", "printer help", "setup support"],
      },
      {
        label: "03",
        icon: "✨",
        title: "The point is confidence, not confusion.",
        text: "The goal is simple: explain what matters, cut through the noise, and help people make better decisions with the tech already shaping their lives.",
        statement: (
          <>
            <strong>We help turn confusion into confidence</strong> with better habits,
            better questions, and smarter digital decisions.
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
        title: "For home tech that should be simple.",
        text: "We can help with the everyday setup problems that waste time: Wi-Fi, printers, smart TVs, phones, updates, apps, accounts, and smart-home devices.",
        statement: (
          <>
            <strong>We can help make the tech in your house feel less like a fight</strong> and more like something that works for you.
          </>
        ),
        tags: ["Wi-Fi fixes", "printer setup", "smart TV help", "smart home"],
      },
      {
        label: "02",
        icon: "🎙️",
        title: "For creators, students, and people starting something.",
        text: "We can help people figure out realistic setups for streaming, podcasting, studying, AI tools, content workflows, online business tools, and beginner-friendly upgrades.",
        statement: (
          <>
            <strong>We can help you choose and organize the right setup</strong> before you waste money on the wrong gear or apps.
          </>
        ),
        tags: ["streaming setup", "podcast gear", "AI tools", "study systems"],
      },
      {
        label: "03",
        icon: "🧓",
        title: "For people who need patient, plain-English support.",
        text: "We can help parents, grandparents, seniors, and busy people understand portals, suspicious messages, device settings, smart-home controls, and basic account safety.",
        statement: (
          <>
            <strong>We can slow it down, explain it clearly, and help people feel safer</strong> without making them feel behind.
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

  useEffect(() => {
    let attempts = 0;
    let cancelled = false;

    const bootParticles = () => {
      if (cancelled) return;

      const particleTarget = document.getElementById("particles-js");
      const particlesReady = typeof window !== "undefined" && window.particlesJS;

      if (particleTarget && particlesReady) {
        window.particlesJS.load("particles-js", "/particles-config.json");
        return;
      }

      attempts += 1;

      if (attempts < 40) {
        window.setTimeout(bootParticles, 100);
      }
    };

    bootParticles();

    return () => {
      cancelled = true;
      const particleTarget = document.getElementById("particles-js");
      if (particleTarget) {
        particleTarget.innerHTML = "";
      }
    };
  }, []);

  const activeMessage = useMemo(() => {
    return heroMessages[activePath] || heroMessages.default;
  }, [activePath]);

  const selectedStory = storyboards[storyMode] || storyboards.daftitude;
  const selectedCta = modeCtas[storyMode] || modeCtas.daftitude;

  const previewStoryMode = (mode) => {
    setStoryMode(mode);
    setLockedStoryMode(mode);
  };

  const selectStoryMode = (mode) => {
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
    setActivePath("default");
    setStoryMode(lockedStoryMode);
  };

  return (
    <main className="home-game-page">
      <div id="particles-js" className="home-particles" aria-hidden="true" />

      <section
        className={`game-start-screen is-${activePath} story-${storyMode}`}
        onMouseLeave={resetStoryPreview}
      >
        <button
          type="button"
          className="game-path game-path-daftitude"
          style={{ "--hero-image": `url(${daftitudeBusinessHero})` }}
          onMouseEnter={() => {
            setActivePath("daftitude");
            previewStoryMode("daftitude");
          }}
          onFocus={() => {
            setActivePath("daftitude");
            previewStoryMode("daftitude");
          }}
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
          onMouseEnter={() => {
            setActivePath("askdaft");
            previewStoryMode("askdaft");
          }}
          onFocus={() => {
            setActivePath("askdaft");
            previewStoryMode("askdaft");
          }}
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

        <div className="game-bottom-hint">Hover a side. Choose a path. Scroll for story mode.</div>
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

      <section className={`story-mode-section mode-cta-section mode-cta-section--${storyMode}`}>
        <div className="mode-cta-panel">
          <div className="mode-cta-copy">
            <p className="story-kicker">{selectedCta.kicker}</p>
            <h2>{selectedCta.title}</h2>
            <p>{selectedCta.text}</p>

            <div className="panel-buzz-row" aria-label={`${storyMode} quick focus areas`}>
              {selectedCta.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="mode-cta-actions">
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
      </section>

      <section id="average-pricing" className={`story-mode-section average-pricing-section average-pricing-section--${storyMode}`}>
        {storyMode === "daftitude" ? (
          <>
            <div className="story-mode-header compact">
              <p className="story-kicker">On Average</p>
              <h2>Ballpark pricing for DaFTitude business services.</h2>
              <p>
                These are planning ranges, not locked quotes. Final pricing depends on scope,
                urgency, tools involved, research needed, and whether the work is consulting,
                implementation, or both.
              </p>
            </div>

            <div className="pricing-table-lite" role="table" aria-label="DaFTitude business service ballpark pricing">
              {businessPricingRows.map(([service, range, note]) => (
                <div className="pricing-row" role="row" key={service}>
                  <div role="cell">
                    <strong>{service}</strong>
                    <span>{note}</span>
                  </div>
                  <b role="cell">{range}</b>
                </div>
              ))}
            </div>

            <div className="game-actions centered">
              <Link className="game-btn primary" to="/contact">Fill Out Business Form</Link>
              <Link className="game-btn ghost" to="/mission">Read the Mission</Link>
            </div>
          </>
        ) : (
          <>
            <div className="story-mode-header compact">
              <p className="story-kicker">AskDaft Quick Table</p>
              <h2>Basic tech help starting points.</h2>
              <p>
                These are simple starting ranges for common help requests. AskDaft keeps it plain:
                what is wrong, what you need working, and what the clean next step should be.
              </p>
            </div>

            <div className="pricing-table-lite" role="table" aria-label="AskDaft quick tech help pricing">
              {askDaftQuickRows.map(([service, range, note]) => (
                <div className="pricing-row" role="row" key={service}>
                  <div role="cell">
                    <strong>{service}</strong>
                    <span>{note}</span>
                  </div>
                  <b role="cell">{range}</b>
                </div>
              ))}
            </div>

            <div className="game-actions centered">
              <Link className="game-btn primary" to="/askdaft">Start with AskDaft</Link>
              <Link className="game-btn ghost" to="/contact">Ask a Question First</Link>
            </div>
          </>
        )}
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