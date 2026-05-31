import { Link } from "react-router-dom";
import ReadingHighlighter from "../common/ReadingHighlighter";

const frontDoorOptions = [
  {
    id: "fix",
    badge: "FIX",
    title: "Fix Something",
    helper: "Wi-Fi, printer, TV, phone, computer, app, console, or account issue.",
    range: "$60-$125",
    to: "/askdaft/request?intent=fix&mode=simple",
  },
  {
    id: "setup-new",
    badge: "SETUP",
    title: "Set Up Something New",
    helper: "New phone, computer, TV, printer, router, console, or smart-home device.",
    range: "$100-$250",
    to: "/askdaft/request?intent=setup-new&mode=simple",
  },
  {
    id: "scam-check",
    badge: "CHECK",
    title: "Message / Scam Check",
    helper: "Texts, emails, popups, links, payment requests, or account warnings.",
    range: "$25-$75",
    to: "/askdaft/request?intent=scam-check&mode=simple",
  },
  {
    id: "teach",
    badge: "LEARN",
    title: "Teach Me",
    helper: "Learn a device, app, AI tool, account, streaming setup, or safer tech habit.",
    range: "$100-$250",
    to: "/askdaft/request?intent=teach&mode=simple",
  },
  {
    id: "maintenance",
    badge: "CARE",
    title: "Keep My Tech Maintained",
    helper: "Monthly check-ins, cleanup, updates, account review, and recurring support.",
    range: "$25-$275/mo",
    to: "/askdaft/request?intent=maintenance&mode=simple",
  },
  {
    id: "not-sure",
    badge: "HELP",
    title: "I'm Not Sure",
    helper: "Start simple. AskDaFT helps sort out the right path.",
    range: "Starts at $25",
    to: "/askdaft/request?intent=not-sure&mode=simple",
  },
];

const supportShortcuts = [
  {
    id: "in-person",
    badge: "HOME",
    title: "House Call / In-Person",
    helper: "Hands-on setup, installs, multiple devices, or local support.",
    to: "/askdaft/request?intent=in-person&support=in-person&mode=simple",
  },
  {
    id: "call",
    badge: "CALL",
    title: "Call Me",
    helper: "Talk through the issue first.",
    to: "/askdaft/request?intent=call&support=call&mode=simple",
  },
  {
    id: "remote",
    badge: "REMOTE",
    title: "Remote Help",
    helper: "Best for guided screen support.",
    to: "/askdaft/request?intent=remote&support=remote&mode=simple",
  },
];

export default function AskDaftFrontDoor() {
  return (
    <section id="start-request" className="phase-section askdaft-front-door">
      <div className="phase-section-heading">
        <p className="phase-kicker">Start Here</p>
        <h2>
          <ReadingHighlighter>What do you need today?</ReadingHighlighter>
        </h2>
        <p>
          <ReadingHighlighter>
            Pick the closest option. You do not need the perfect tech words.
          </ReadingHighlighter>
        </p>
      </div>

      <div className="askdaft-front-door-grid" aria-label="AskDaFT help options">
        {frontDoorOptions.map((option) => (
          <Link className="askdaft-front-door-card" to={option.to} key={option.id}>
            <span className="askdaft-front-door-icon" aria-hidden="true">{option.badge}</span>
            <strong>
              <ReadingHighlighter>{option.title}</ReadingHighlighter>
            </strong>
            <p>
              <ReadingHighlighter>{option.helper}</ReadingHighlighter>
            </p>
            <small>
              <ReadingHighlighter>{option.range}</ReadingHighlighter>
            </small>
          </Link>
        ))}
      </div>

      <div className="askdaft-support-shortcuts">
        <div>
          <p className="phase-kicker">Already know how you want help?</p>
          <h3>
            <ReadingHighlighter>Pick a support shortcut.</ReadingHighlighter>
          </h3>
        </div>

        <div className="askdaft-support-shortcut-row">
          {supportShortcuts.map((shortcut) => (
            <Link className="askdaft-support-shortcut" to={shortcut.to} key={shortcut.id}>
              <span className="askdaft-shortcut-badge" aria-hidden="true">{shortcut.badge}</span>
              <strong>
                <ReadingHighlighter>{shortcut.title}</ReadingHighlighter>
              </strong>
              <small>
                <ReadingHighlighter>{shortcut.helper}</ReadingHighlighter>
              </small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
