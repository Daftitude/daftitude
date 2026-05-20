import { Link } from "react-router-dom";

const missions = [
  {
    title: "Quick Help",
    text: "Small tech problems, quick walkthroughs, simple troubleshooting, and plain-English answers when something is annoying but not catastrophic.",
    tag: "Fast fix",
  },
  {
    title: "Standard Help",
    text: "Support for devices, accounts, apps, settings, updates, and digital problems that need more than a quick answer.",
    tag: "Most common",
  },
  {
    title: "Setup & Teach",
    text: "Get a device, app, account, tool, or workflow set up while learning how to use it without feeling talked down to.",
    tag: "Learn it",
  },
  {
    title: "Full Tech Rescue",
    text: "A broader cleanup session for multiple issues, messy settings, confusing accounts, or tech that keeps breaking your flow.",
    tag: "Deep help",
  },
  {
    title: "Monthly Home Tech Care",
    text: "Recurring check-ins for home devices, updates, settings, accounts, backups, and general digital peace of mind.",
    tag: "Ongoing",
  },
  {
    title: "Business Tech Help",
    text: "Plain-English setup support for small business tools, email, documents, workflows, accounts, and basic digital operations.",
    tag: "Business",
  },
  {
    title: "Creator Tech Setup",
    text: "Help with creator tools, streaming setups, recording workflows, content systems, storage, and publishing basics.",
    tag: "Creators",
  },
  {
    title: "Scam / Safety Help",
    text: "Review suspicious messages, links, popups, emails, and account warnings before you click or respond.",
    tag: "Safety",
  },
  {
    title: "AI Tools Help",
    text: "Learn how to use ChatGPT, AI apps, prompts, automations, and AI workflows safely and practically.",
    tag: "AI",
  },
  {
    title: "VA / Government Portal Help",
    text: "Technical help navigating portals, login issues, uploads, forms, password resets, and account-access confusion.",
    tag: "Portal help",
  },
];

const steps = [
  {
    title: "Pick the mission",
    text: "Start with the kind of help you need. You do not need perfect tech wording.",
  },
  {
    title: "Explain the problem",
    text: "Send the symptoms, device/app name, and what you already tried if anything.",
  },
  {
    title: "Get clear help",
    text: "AskDaft walks through setup, teaching, troubleshooting, or next-step recommendations in plain English.",
  },
];

const faqs = [
  {
    question: "Do I need to know tech terms?",
    answer: "No. AskDaft is built for people who want the problem translated clearly.",
  },
  {
    question: "Can AskDaft help with suspicious messages?",
    answer: "Yes. AskDaft can help review suspicious messages and explain safer next steps before you click.",
  },
  {
    question: "Is this legal, financial, medical, benefits, or cybersecurity incident-response advice?",
    answer: "No. AskDaft helps with the technical side and points you toward the right professional category when needed.",
  },
];

export default function AskDaft() {
  return (
    <main className="phase-page askdaft-page">
      <section className="phase-hero askdaft-hero">
        <div className="phase-eyebrow">Powered by DaFTitude</div>
        <h1>AskDaft</h1>
        <p className="phase-lede">
          Tech help for people who don’t speak tech.
        </p>
        <p className="phase-sublede">
          AskDaft is the direct client-service branch of DaFTitude for setup,
          troubleshooting, teaching, scam-message review, AI tool help, home tech
          support, business tech setup, creator tech setup, and portal help.
        </p>

        <div className="phase-hero-actions">
          <Link className="phase-btn phase-btn-primary" to="/contact">
            Start Help Request
          </Link>
          <a className="phase-btn phase-btn-secondary" href="#missions">
            View Services
          </a>
          <Link className="phase-btn phase-btn-ghost" to="/contact">
            Contact AskDaft
          </Link>
        </div>
      </section>

      <section id="missions" className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Choose Your Mission</p>
          <h2>Pick the kind of help you need.</h2>
          <p>
            No overloaded service menu. No fake corporate maze. Just choose the
            mission that matches the problem in front of you.
          </p>
        </div>

        <div className="phase-card-grid askdaft-mission-grid">
          {missions.map((mission) => (
            <article className="phase-card mission-card" key={mission.title}>
              <span className="mission-tag">{mission.tag}</span>
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section phase-panel">
        <div className="phase-section-heading">
          <p className="phase-kicker">How It Works</p>
          <h2>Simple process. Plain English. Real help.</h2>
        </div>

        <div className="phase-card-grid three">
          {steps.map((step, index) => (
            <article className="phase-card step-card" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section askdaft-callout">
        <div>
          <p className="phase-kicker">Help Request / Booking</p>
          <h2>For Phase 1, contact starts the mission.</h2>
          <p>
            A booking backend comes later. Right now, the goal is a clear service
            doorway with strong boundaries and a clean path to contact.
          </p>
        </div>
        <Link className="phase-btn phase-btn-primary" to="/contact">
          Start Help Request
        </Link>
      </section>

      <section className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">FAQ Preview</p>
          <h2>Quick answers before you ask.</h2>
        </div>

        <div className="phase-card-grid three">
          {faqs.map((faq) => (
            <article className="phase-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section phase-warning-panel">
        <h2>Privacy Reminder</h2>
        <p>
          AskDaft does not need passwords sent by text, email, form, or chat. If
          login is needed during a session, the client enters it themselves.
        </p>
      </section>

      <section className="phase-section phase-warning-panel">
        <h2>Service Boundary</h2>
        <p>
          AskDaft provides tech help, setup, teaching, troubleshooting, and
          recommendations. AskDaft does not provide legal, tax, medical,
          financial, investment, benefits, electrical, advanced repair, or full
          cybersecurity incident response services.
        </p>
      </section>

      <section className="phase-section contact-command">
        <p className="phase-kicker">Ready?</p>
        <h2>Start with the problem. AskDaft will help translate it.</h2>
        <div className="phase-hero-actions">
          <Link className="phase-btn phase-btn-primary" to="/contact">
            Contact AskDaft
          </Link>
          <Link className="phase-btn phase-btn-secondary" to="/">
            Back to DaFTitude
          </Link>
        </div>
      </section>
    </main>
  );
}
