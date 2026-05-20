import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const heroMessages = {
  default: {
    eyebrow: "DaFTitude Command Screen",
    title: "Choose your path.",
    text: "Understand the system. Move smarter. Pick the parent brand command center or jump straight into direct tech help.",
  },
  daftitude: {
    eyebrow: "Parent Brand",
    title: "Build the system. Understand the game.",
    text: "DaFTitude is the command center for AI, automation, data, privacy, cybersecurity awareness, crypto education, consulting, and digital systems strategy.",
  },
  askdaft: {
    eyebrow: "Client-Service Branch",
    title: "Tech help without the tech ego.",
    text: "AskDaft is the direct help doorway for setup, troubleshooting, teaching, scam-message review, AI tools, home tech support, business tech setup, and creator tech setup.",
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
    title: "AI Hub",
    text: "Prompting, AI basics, automation ideas, workflows, safety, and practical use cases.",
    to: "/ai",
  },
  {
    title: "Tech Hub",
    text: "Digital systems, tools, project updates, and technology explained without the noise.",
    to: "/tech",
  },
  {
    title: "Crypto",
    text: "Risk-aware crypto education, research, market structure, and transparent learning.",
    to: "/crypto",
  },
  {
    title: "Privacy",
    text: "Data brokers, breach awareness, app tracking, account safety, and privacy habits.",
    to: "/privacy",
  },
  {
    title: "Cybersecurity",
    text: "Scam awareness, password safety, phishing education, MFA, and defensive habits.",
    to: "/cybersecurity",
  },
  {
    title: "Mission",
    text: "The DaFTitude story, the AskDaft split, and the larger reason behind the build.",
    to: "/mission",
  },
];

const storyboard = [
  {
    label: "01",
    title: "DaFTitude is the parent brand.",
    text: "DaFTitude is not just local tech support. It is the strategy layer: business solutions, consulting, education, automation, AI workflows, data, privacy, cybersecurity awareness, crypto education, software planning, and builder-led digital systems.",
  },
  {
    label: "02",
    title: "AskDaft is the direct-help branch.",
    text: "When someone needs hands-on help with Wi-Fi, printers, smart TVs, suspicious messages, AI tools, account settings, portals, home tech, business tech, or creator setup, the path is AskDaft.",
  },
  {
    label: "03",
    title: "The goal is digital confidence.",
    text: "DaFTitude helps people move from digital confusion to digital confidence by explaining complex systems in plain English and turning that understanding into practical action.",
  },
];

export default function Home() {
  const [activePath, setActivePath] = useState("default");

  const activeMessage = useMemo(() => {
    return heroMessages[activePath] || heroMessages.default;
  }, [activePath]);

  const scrollToStory = () => {
    document
      .getElementById("daftitude-story")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="home-game-page">
      <section
        className={`game-start-screen is-${activePath}`}
        onMouseLeave={() => setActivePath("default")}
      >
        <button
          type="button"
          className="game-path game-path-daftitude"
          onMouseEnter={() => setActivePath("daftitude")}
          onFocus={() => setActivePath("daftitude")}
          onClick={scrollToStory}
        >
          <span className="path-kicker">Parent Brand</span>
          <strong>DaFTitude</strong>
          <small>Strategy • Systems • Consulting • Education</small>
        </button>

        <Link
          to="/askdaft"
          className="game-path game-path-askdaft"
          onMouseEnter={() => setActivePath("askdaft")}
          onFocus={() => setActivePath("askdaft")}
        >
          <span className="path-kicker">Service Branch</span>
          <strong>AskDaft</strong>
          <small>Tech Help • Setup • Troubleshooting • Teaching</small>
        </Link>

        <div className="game-center-panel" aria-live="polite">
          <p className="game-eyebrow">{activeMessage.eyebrow}</p>
          <h1>{activeMessage.title}</h1>
          <p>{activeMessage.text}</p>

          <div className="game-actions">
            <button type="button" className="game-btn primary" onClick={scrollToStory}>
              Explore DaFTitude
            </button>
            <Link className="game-btn secondary" to="/askdaft">
              Enter AskDaft
            </Link>
            <button type="button" className="game-btn ghost" onClick={scrollToStory}>
              More Info
            </button>
          </div>
        </div>

        <div className="game-bottom-hint">Hover a side. Choose a path. Scroll for story mode.</div>
      </section>

      <section id="daftitude-story" className="story-mode-section">
        <div className="story-mode-header">
          <p className="story-kicker">Story Mode</p>
          <h2>What DaFTitude is becoming.</h2>
          <p>
            DaFTitude is the command center. AskDaft is the direct-help doorway.
            The split keeps the parent brand big enough for strategy, systems,
            research, education, and consulting without confusing visitors who
            simply need tech help now.
          </p>
        </div>

        <div className="story-board-grid">
          {storyboard.map((item) => (
            <article className="story-card" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-mode-section system-map-section">
        <div className="story-mode-header compact">
          <p className="story-kicker">System Map</p>
          <h2>The DaFTitude command board.</h2>
          <p>
            These are the lanes DaFTitude can explain, organize, build around,
            or turn into practical systems for people, creators, and businesses.
          </p>
        </div>

        <div className="system-chip-grid">
          {daftitudeSystems.map((system) => (
            <span className="system-chip" key={system}>{system}</span>
          ))}
        </div>
      </section>

      <section className="story-mode-section split-identity-section">
        <div className="identity-panel daftitude-panel">
          <p className="story-kicker">DaFTitude</p>
          <h2>Strategy, systems, education, and bigger technology projects.</h2>
          <p>
            Use DaFTitude when the problem is bigger than one device: business
            tech direction, AI workflows, automation planning, digital systems,
            software project planning, privacy awareness, research, or education.
          </p>
          <Link className="game-btn secondary" to="/contact">Contact DaFTitude</Link>
        </div>

        <div className="identity-panel askdaft-panel">
          <p className="story-kicker">AskDaft</p>
          <h2>Direct tech help, setup, troubleshooting, and teaching.</h2>
          <p>
            Use AskDaft when you need hands-on support: setup, repair direction,
            confusing apps, suspicious messages, AI tool help, account settings,
            portals, home tech, business tech, or creator setup.
          </p>
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
            <Link className="hub-select-card" to={hub.to} key={hub.title}>
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
          Need direct help? Go AskDaft. Need strategy, systems, or consulting?
          Contact DaFTitude. Want to learn? Start with the hubs.
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