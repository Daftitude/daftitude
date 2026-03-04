import { useMemo, useState } from "react";

const Field = ({ label, children }) => (
  <label className="pkg-field">
    <span className="pkg-field-label">{label}</span>
    {children}
  </label>
);

export default function ServicePackages({ taskType = "basic" }) {
  const isAdvanced = taskType === "advanced";

  const cards = useMemo(() => {
    if (isAdvanced) {
      return [
        {
          id: "infra",
          title: "Network Infrastructure Setup",
          subtitle: "Office networks, VLANs, routing, clean topology",
          price: "$400 – $700",
          points: ["Network design review", "Switch/AP setup", "Documentation basics"],
        },
        {
          id: "security",
          title: "Cybersecurity Hardening",
          subtitle: "Reduce risk, lock down endpoints & accounts",
          price: "$350 – $600",
          points: ["Baseline hardening", "Access review", "Security defaults + policy guidance"],
        },
        {
          id: "cloud",
          title: "Cloud & Workspace Setup",
          subtitle: "Microsoft 365 / Google Workspace foundations",
          price: "$300 – $500",
          points: ["Accounts & permissions", "Email/domain alignment", "Team-ready structure"],
        },
        {
          id: "automation",
          title: "Automation / Workflows",
          subtitle: "Reduce manual work, improve reliability",
          price: "$400 – $700",
          points: ["Workflow mapping", "Automation build", "Maintenance guidance"],
        },
        {
          id: "ai",
          title: "AI Tool Integration",
          subtitle: "Practical AI workflows + integrations",
          price: "$500 – $800",
          points: ["Use-case assessment", "Setup & guardrails", "Workflow integration"],
        },
        {
          id: "support",
          title: "Business IT Support",
          subtitle: "Fast fixes + ongoing improvement",
          price: "$200 – $350",
          points: ["Retainer options", "Priority support", "Ongoing optimization"],
        },
      ];
    }

    return [
      {
        id: "wifi",
        title: "Wi-Fi Troubleshooting",
        subtitle: "Dead zones, drops, buffering, slow speeds",
        price: "$120 – $180",
        points: ["Signal & router tuning", "Mesh setup guidance", "Device connectivity issues"],
      },
      {
        id: "smarthome",
        title: "Smart Home Setup",
        subtitle: "Alexa / Google Home, smart lights, thermostats",
        price: "$150 – $220",
        points: ["Pairing & automation", "App setup + walkthrough", "Basic routines"],
      },
      {
        id: "tv",
        title: "TV / Home Theater",
        subtitle: "Smart TV setup, soundbar, streaming, wiring",
        price: "$150 – $250",
        points: ["Audio tuning", "Input/device setup", "Clean cable setup"],
      },
      {
        id: "pc",
        title: "Computer Fix / Tune-Up",
        subtitle: "Slow PC, cleanup, updates, weird errors",
        price: "$90 – $140",
        points: ["Performance cleanup", "OS & driver updates", "Stability checks"],
      },
      {
        id: "cameras",
        title: "Security Cameras",
        subtitle: "Ring / Nest / wired systems",
        price: "$200 – $300",
        points: ["Placement planning", "App + alerts setup", "Multi-camera troubleshooting"],
      },
      {
        id: "ondemand",
        title: "On-Demand Tech Help",
        subtitle: "Remote help or scheduled support",
        price: "$80 – $120",
        points: ["Remote session support", "Same-day options (when available)", "Simple fixes fast"],
      },
    ];
  }, [isAdvanced]);

  const badge = isAdvanced
    ? { label: "Business IT Pricing", hint: "Project ranges • scope-based • business focused" }
    : { label: "Home Tech Pricing", hint: "Quick fixes • common installs • on-demand help" };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openRequest = (card) => {
    setSelected(card);
    setIsOpen(true);
  };

  const closeRequest = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return (
    <section id="pricing-reality" className="service-detail pkg-section">
      <div className="pkg-head">
        <div className={`pkg-mode ${isAdvanced ? "is-advanced" : "is-basic"}`}>
          <span className="pkg-mode-pill">{badge.label}</span>
          <span className="pkg-mode-hint">{badge.hint}</span>
        </div>

        <h2 className="pkg-title">{isAdvanced ? "Typical Project Ranges" : "Typical Service Ranges"}</h2>

        <p className="pkg-subtitle">
          {isAdvanced
            ? "Pick a service to request details and get a scoped estimate."
            : "Pick a service and request help—remote or scheduled."}
        </p>
      </div>

      <div className="pkg-grid">
        {cards.map((card) => (
          <article key={card.id} className="pkg-card">
            <div className="pkg-card-top">
              <div>
                <h3 className="pkg-card-title">{card.title}</h3>
                <p className="pkg-card-sub">{card.subtitle}</p>
              </div>

              <div className="pkg-price">
                <span className="pkg-price-label">Typical</span>
                <span className="pkg-price-val">{card.price}</span>
              </div>
            </div>

            <ul className="pkg-points">
              {card.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="pkg-actions">
              <button type="button" className="cta-btn" onClick={() => openRequest(card)}>
                Request details →
              </button>

              <a href="/contact" className="cta-btn cta-btn--ghost">
                Contact
              </a>
            </div>
          </article>
        ))}
      </div>

      {isOpen && (
        <div className="pkg-modal" role="dialog" aria-modal="true" aria-label="Request details">
          <button type="button" className="pkg-backdrop" onClick={closeRequest} aria-label="Close" />

          <div className="pkg-modal-card">
            <div className="pkg-modal-head">
              <div>
                <div className="pkg-modal-kicker">{isAdvanced ? "Business request" : "Home tech request"}</div>
                <h3 className="pkg-modal-title">Request details</h3>
                <p className="pkg-modal-sub">
                  Service: <strong>{selected?.title}</strong>
                </p>
              </div>

              <button type="button" className="pkg-close" onClick={closeRequest} aria-label="Close">
                ✕
              </button>
            </div>

            <form
              className="pkg-form"
              onSubmit={(e) => {
                e.preventDefault();
                // No backend assumptions yet.
                closeRequest();
              }}
            >
              <div className="pkg-form-grid">
                <Field label="Name">
                  <input className="pkg-input" name="name" placeholder="Your name" required />
                </Field>

                <Field label="Email">
                  <input className="pkg-input" name="email" type="email" placeholder="you@email.com" required />
                </Field>

                <Field label="Phone (optional)">
                  <input className="pkg-input" name="phone" placeholder="(555) 555-5555" />
                </Field>

                <Field label={isAdvanced ? "Company (optional)" : "City (optional)"}>
                  <input className="pkg-input" name="context" placeholder={isAdvanced ? "Company name" : "Your city"} />
                </Field>

                <Field label="What do you need help with?">
                  <textarea
                    className="pkg-textarea"
                    name="details"
                    rows={4}
                    placeholder={
                      isAdvanced
                        ? "Describe the environment, number of users/devices, tools involved, what’s breaking…"
                        : "Describe what’s not working, what devices you have, and what you want done…"
                    }
                    required
                  />
                </Field>
              </div>

              <div className="pkg-form-actions">
                <button type="button" className="cta-btn cta-btn--ghost" onClick={closeRequest}>
                  Cancel
                </button>
                <button type="submit" className="cta-btn">
                  Submit request
                </button>
              </div>

              <div className="pkg-form-note">
                Submitting closes the form for now. Next step: wire this to email, Formspree, or your backend.
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}