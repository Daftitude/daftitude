import { Link } from "react-router-dom";

import HeroTechHub from "../../components/techhub/HeroTechHub";
import CommunityImpact from "../../components/techhub/CommunityImpact";
import CaseStudies from "../../components/techhub/CaseStudies";

const learningLanes = [
  {
    icon: "🤖",
    title: "AI & Automation",
    status: "Public lessons",
    text: "Prompting, AI workflow planning, automation ideas, model limits, and practical use cases that do not require hype to understand.",
    to: "/ai",
  },
  {
    icon: "🔐",
    title: "Privacy & Data Awareness",
    status: "Public guides",
    text: "Data brokers, app tracking, breach habits, account exposure, and how everyday people get turned into datasets.",
    to: "/privacy",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity & Scam Defense",
    status: "Public guides",
    text: "Phishing, passwords, MFA, account recovery, suspicious links, scam patterns, and defensive habits that actually matter.",
    to: "/cybersecurity",
  },
  {
    icon: "📈",
    title: "Crypto Ground School",
    status: "Public + tool previews",
    text: "Wallet basics, market structure, risk awareness, transaction history, portfolio visibility, and how to avoid gambling dressed up as research.",
    to: "/crypto",
  },
  {
    icon: "🏗️",
    title: "Business Systems",
    status: "Booking-ready",
    text: "Tool stacks, automation cleanup, AI workflow planning, process mapping, client systems, and practical tech strategy for small businesses.",
    to: "/booking/services?source=tech-hub&lane=business-systems",
  },
  {
    icon: "🎥",
    title: "Creator Systems",
    status: "Coming into focus",
    text: "Streaming, content workflows, editing systems, publishing pipelines, file organization, asset reuse, and creator business structure.",
    to: "/booking/services?source=tech-hub&lane=creator-systems",
  },
  {
    icon: "🧠",
    title: "Digital Literacy",
    status: "Core foundation",
    text: "Plain-English explanations for people who were forced into digital systems they were never properly taught to understand.",
    to: "/tech-hub#system-briefs",
  },
];

const systemBriefs = [
  {
    title: "What your account really controls",
    text: "Email, phone numbers, recovery codes, app logins, cloud storage, subscriptions, payment methods, and identity are all connected now.",
  },
  {
    title: "Why scams work even on smart people",
    text: "Modern scams exploit urgency, trust, confusion, platform design, and emotional pressure more than technical ignorance.",
  },
  {
    title: "Why AI output needs verification",
    text: "AI can speed up work, but it can also confidently produce wrong steps, weak assumptions, outdated information, or unsafe shortcuts.",
  },
];

const lockedTools = [
  "Saved lesson paths",
  "Quizzes and progress tracking",
  "Templates and checklists",
  "Personalized AI summaries",
  "Private tool dashboards",
  "Future badges / certificates",
];

export default function TechHub() {
  return (
    <main className="techhub-page">
      <HeroTechHub />

      <section className="techhub-school-section" aria-label="DaFTitude School overview">
        <div className="techhub-section-head">
          <p className="section-kicker">DaFTitude School</p>
          <h2>Learn the systems before they use you.</h2>
          <p>
            Tech Hub is the public learning layer for DaFTitude: part school, part tech library,
            part awareness center, and part research hub. It should help people understand what
            matters before they buy tools, click links, trust platforms, or pay for help.
          </p>
        </div>

        <div className="techhub-mode-grid">
          <article className="techhub-mode-card">
            <span>Public</span>
            <h3>Read, learn, and build awareness.</h3>
            <p>Intro lessons, awareness guides, system briefs, resource links, and plain-English breakdowns stay open.</p>
          </article>

          <article className="techhub-mode-card is-locked">
            <span>Logged-in later</span>
            <h3>Save progress and unlock tools.</h3>
            <p>Progress tracking, saved lessons, templates, quizzes, private tools, and learning paths can sit behind login without hiding the mission.</p>
          </article>
        </div>
      </section>

      <section className="techhub-lanes-section" aria-label="Learning lanes">
        <div className="techhub-section-head compact">
          <p className="section-kicker">Learning Lanes</p>
          <h2>Pick the lane that matches the problem.</h2>
        </div>

        <div className="techhub-lane-grid">
          {learningLanes.map((lane) => (
            <Link className="techhub-lane-card" to={lane.to} key={lane.title}>
              <div className="techhub-lane-icon">{lane.icon}</div>
              <span>{lane.status}</span>
              <h3>{lane.title}</h3>
              <p>{lane.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="system-briefs" className="techhub-briefs-section" aria-label="System briefs">
        <div className="techhub-section-head compact">
          <p className="section-kicker">System Briefs</p>
          <h2>Short explanations for real digital risk.</h2>
        </div>

        <div className="briefs-grid">
          {systemBriefs.map((brief) => (
            <article className="brief-card" key={brief.title}>
              <h3>{brief.title}</h3>
              <p className="brief-excerpt">{brief.text}</p>
              <span className="brief-meta">Public brief · expandable later</span>
            </article>
          ))}
        </div>
      </section>

      <section className="techhub-locked-section" aria-label="Future logged-in learning tools">
        <div className="techhub-locked-copy">
          <p className="section-kicker">See It Before Login</p>
          <h2>Public users can see the system. Logged-in users will eventually use it.</h2>
          <p>
            The right pattern is “see but cannot touch.” Visitors should understand what exists,
            while saved progress, tools, and private context stay behind accounts later.
          </p>
        </div>

        <div className="techhub-locked-grid">
          {lockedTools.map((tool) => (
            <div className="techhub-locked-card" key={tool}>
              <span>Locked Preview</span>
              <strong>{tool}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="techhub-action-section" aria-label="Tech Hub actions">
        <div>
          <p className="section-kicker">Need Action?</p>
          <h2>Learn here. Book help when it turns into work.</h2>
          <p>
            Tech Hub teaches. Booking handles requests. Contact stays for general communication.
          </p>
        </div>

        <div className="techhub-action-row">
          <Link className="booking-btn booking-btn-primary" to="/booking/askdaft?source=tech-hub">
            Book Tech Help
          </Link>
          <Link className="booking-btn booking-btn-secondary" to="/booking/services?source=tech-hub">
            Book Services
          </Link>
          <Link className="booking-btn booking-btn-secondary" to="/contact?source=tech-hub">
            Request a Topic
          </Link>
        </div>
      </section>

      <CaseStudies />
      <CommunityImpact />
    </main>
  );
}
