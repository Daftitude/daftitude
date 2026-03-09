import { useEffect, useMemo, useRef, useState } from "react";
import {
  Wifi,
  Home,
  Tv,
  Laptop,
  Camera,
  Headset,
  Network,
  ShieldCheck,
  Cloud,
  Workflow,
  Sparkles,
  Building2,
} from "lucide-react";


const Field = ({ label, children }) => (
  <label className="pkg-field">
    <span className="pkg-field-label">{label}</span>
    {children}
  </label>
);

const REQUEST_EMAIL = "Kyhl.Hines@daftitude.com";

export default function ServicePackages({ taskType = "basic", selectedService = null }) {
  const isAdvanced = taskType === "advanced";

  const serviceLabel = useMemo(() => {
    const map = {
      diagnose: isAdvanced ? "IT Triage & Root Cause" : "Fix It / Diagnose It",
      setup: isAdvanced ? "Infrastructure & Tooling" : "Setup & Install",
      stability: isAdvanced ? "Security & Reliability" : "Keep It Stable",
      support: isAdvanced ? "Business IT Support" : "On‑Demand Tech Help",
    };
    return map[selectedService] || null;
  }, [selectedService, isAdvanced]);

  const recommendedByService = useMemo(() => {
    // Map the Step-1 service selection to the most likely Step-2 package card.
    if (isAdvanced) {
      return {
        diagnose: "support",      // triage usually becomes support / ongoing fixes
        setup: "infra",           // foundations first
        stability: "security",    // reliability == security + monitoring posture
        support: "support",
      };
    }

    return {
      diagnose: "pc",            // common “something’s wrong” flows through PC tune-up
      setup: "smarthome",        // setup/install bucket
      stability: "wifi",         // stability is usually Wi‑Fi issues
      support: "ondemand",
    };
  }, [isAdvanced]);

  const cards = useMemo(() => {
    if (isAdvanced) {
      return [
        {
          id: "infra",
          Icon: Network,
          title: "Network Infrastructure Setup",
          subtitle: "Office networks, VLANs, routing, clean topology",
          price: "$400 – $700",
          points: ["Network design review", "Switch/AP setup", "Documentation basics"],
        },
        {
          id: "security",
          Icon: ShieldCheck,
          title: "Cybersecurity Hardening",
          subtitle: "Reduce risk, lock down endpoints & accounts",
          price: "$350 – $600",
          points: ["Baseline hardening", "Access review", "Security defaults + policy guidance"],
        },
        {
          id: "cloud",
          Icon: Cloud,
          title: "Cloud & Workspace Setup",
          subtitle: "Microsoft 365 / Google Workspace foundations",
          price: "$300 – $500",
          points: ["Accounts & permissions", "Email/domain alignment", "Team-ready structure"],
        },
        {
          id: "automation",
          Icon: Workflow,
          title: "Automation / Workflows",
          subtitle: "Reduce manual work, improve reliability",
          price: "$400 – $700",
          points: ["Workflow mapping", "Automation build", "Maintenance guidance"],
        },
        {
          id: "ai",
          Icon: Sparkles,
          title: "AI Tool Integration",
          subtitle: "Practical AI workflows + integrations",
          price: "$500 – $800",
          points: ["Use-case assessment", "Setup & guardrails", "Workflow integration"],
        },
        {
          id: "support",
          Icon: Building2,
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
        Icon: Wifi,
        title: "Wi-Fi Troubleshooting",
        subtitle: "Dead zones, drops, buffering, slow speeds",
        price: "$120 – $180",
        popular: true,
        points: ["Signal & router tuning", "Mesh setup guidance", "Device connectivity issues"],
      },
      {
        id: "smarthome",
        Icon: Home,
        title: "Smart Home / Security Setup",
        subtitle: "Alexa / Google Home, smart lights, thermostats, cameras",
        price: "$150 – $220",
        popular: true,
        points: ["Pairing & automation", "App setup + walkthrough", "Basic routines"],
      },
      {
        id: "tv",
        Icon: Tv,
        title: "TV / Home Theater",
        subtitle: "Smart TV setup, soundbar, streaming, wiring",
        price: "$150 – $250",
        points: ["Audio tuning", "Input/device setup", "Clean cable setup"],
      },
      {
        id: "pc",
        Icon: Laptop,
        title: "Computer Fix / Tune-Up",
        subtitle: "Slow PC, cleanup, updates, weird errors",
        price: "$90 – $140",
        points: ["Performance cleanup", "OS & driver updates", "Stability checks"],
      },
      {
        id: "ondemand",
        Icon: Headset,
        title: "On-Demand Tech Help",
        subtitle: "Remote help or scheduled support",
        price: "$80 – $120",
        points: ["Remote session support", "Same-day options (when available)", "Simple fixes fast"],
      },
      {
        id: "other",
        Icon: Camera,
        title: "Not Sure What You Need?",
        subtitle: "Tell us what’s going on and we’ll help figure it out",
        price: "$90 – $180",
        points: [
          "Help diagnosing tech problems",
          "Support for devices not listed here",
          "Simple guidance when something just isn't working",
        ],
      },
    ];
  }, [isAdvanced]);

  const badge = isAdvanced
    ? { label: "Business IT Pricing", hint: "Project ranges • scope-based • business focused" }
    : { label: "Home Tech Pricing", hint: "Quick fixes • common installs • on-demand help" };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedPkgId, setSelectedPkgId] = useState(null);

  // Step-3 funnel state (keep it simple: mostly selects/checkboxes)
  const [step, setStep] = useState(1);
  const [contactMethod, setContactMethod] = useState("email"); // email | phone
  const [contactValue, setContactValue] = useState("");
  const [contextValue, setContextValue] = useState("");
  const [urgency, setUrgency] = useState("normal"); // normal | soon | urgent
  const [supportType, setSupportType] = useState(isAdvanced ? "remote" : "onsite"); // remote | onsite
  const [issueTags, setIssueTags] = useState([]); // string[]
  const [notes, setNotes] = useState("");
  const [submitPref, setSubmitPref] = useState("copy"); // copy | email

  const copiedToastRef = useRef(null);

  const issueOptions = useMemo(() => {
    if (isAdvanced) {
      return [
        "Network / Wi‑Fi",
        "Security / access",
        "Email / workspace",
        "Device / endpoint",
        "Automation",
        "AI integration",
        "General consulting",
      ];
    }

    return [
      "Wi‑Fi / internet",
      "Computer running slow",
      "Smart home device",
      "TV / streaming",
      "Cameras / doorbell",
      "Printer / email setup",
      "General help",
    ];
  }, [isAdvanced]);

  const toggleTag = (tag) => {
    setIssueTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const buildRequestText = () => {
    const modeLabel = isAdvanced ? "Advanced (Business)" : "Basic (Home)";
    const serviceText = serviceLabel || "(not selected)";
    const pkgText = selected?.title || "(not selected)";

    const lines = [
      `Mode: ${modeLabel}`,
      `Service: ${serviceText}`,
      `Package: ${pkgText}`,
      selectedPkgId ? `Package ID: ${selectedPkgId}` : null,
      "",
      `Contact: ${contactMethod === "phone" ? "Phone" : "Email"} — ${contactValue || "(not provided)"}`,
      contextValue ? `${isAdvanced ? "Company" : "City"}: ${contextValue}` : null,
      `Support: ${supportType === "remote" ? "Remote" : "On‑site"}`,
      `Urgency: ${urgency}`,
      issueTags.length ? `Topics: ${issueTags.join(", ")}` : "Topics: (none selected)",
      "",
      notes ? `Notes:\n${notes}` : "Notes: (none)",
      "",
      `Page: ${window.location.href}`,
    ].filter(Boolean);

    return { modeLabel, serviceText, pkgText, body: lines.join("\n") };
  };

  const copyToClipboard = async () => {
    const { body } = buildRequestText();
    try {
      await navigator.clipboard.writeText(body);
      if (copiedToastRef.current) {
        copiedToastRef.current.textContent = "Copied!";
        window.setTimeout(() => {
          if (copiedToastRef.current) copiedToastRef.current.textContent = "";
        }, 1400);
      }
    } catch {
      // fallback: no-op
    }
  };

  const openEmailDraft = () => {
    const { modeLabel, serviceText, pkgText, body } = buildRequestText();
    const subject = `[DaFTitude Service Request] ${modeLabel} — ${serviceText} — ${pkgText}`;
    const mailto = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const resetFunnel = () => {
    setStep(1);
    setContactMethod("email");
    setContactValue("");
    setContextValue("");
    setUrgency("normal");
    setSupportType(isAdvanced ? "remote" : "onsite");
    setIssueTags([]);
    setNotes("");
    setSubmitPref("copy");
    if (copiedToastRef.current) copiedToastRef.current.textContent = "";
  };

  const quote = useMemo(() => {
    if (!selected?.price) {
      return {
        baseLabel: "Varies",
        onsiteFee: 0,
        urgencyFee: 0,
        totalLabel: "Varies",
      };
    }

    const nums = (selected.price.match(/\d+/g) || []).map(Number);
    if (nums.length < 2) {
      return {
        baseLabel: selected.price,
        onsiteFee: 0,
        urgencyFee: 0,
        totalLabel: selected.price,
      };
    }

    const [baseMin, baseMax] = nums;

    const onsiteFee = supportType === "onsite" ? (isAdvanced ? 150 : 40) : 0;
    const urgencyFee =
      urgency === "urgent"
        ? isAdvanced
          ? 200
          : 60
        : urgency === "soon"
        ? isAdvanced
          ? 75
          : 25
        : 0;

    const totalMin = baseMin + onsiteFee + urgencyFee;
    const totalMax = baseMax + onsiteFee + urgencyFee;

    return {
      baseLabel: `$${baseMin} – $${baseMax}`,
      onsiteFee,
      urgencyFee,
      totalLabel: `$${totalMin} – $${totalMax}`,
    };
  }, [selected, supportType, urgency, isAdvanced]);

  // When a service is selected in Step 1, auto-highlight a recommended package in Step 2
  useEffect(() => {
    if (!selectedService) return;
    const rec = recommendedByService[selectedService];
    if (!rec) return;
    setSelectedPkgId((prev) => prev || rec);
  }, [selectedService, recommendedByService]);

  // Also allow event-based updates (in case this component is used elsewhere)
  useEffect(() => {
    const onPicked = (e) => {
      const svc = e?.detail?.service;
      const rec = recommendedByService[svc];
      if (rec) setSelectedPkgId((prev) => prev || rec);
    };
    window.addEventListener("daft:serviceSelected", onPicked);
    return () => window.removeEventListener("daft:serviceSelected", onPicked);
  }, [recommendedByService]);

  const openRequest = (card) => {
    setSelectedPkgId(card?.id || null);
    setSelected(card);
    resetFunnel();
    setIsOpen(true);
  };

  const closeRequest = () => {
    setIsOpen(false);
    setSelected(null);
    resetFunnel();
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
          {serviceLabel ? (
            <>
              Step 2: choose a package for <strong>{serviceLabel}</strong>, then request help.
            </>
          ) : isAdvanced ? (
            "Step 2: choose a package, then request details for a scoped estimate."
          ) : (
            "Step 2: choose a package, then request help—remote or scheduled."
          )}
        </p>
      </div>

      <div className="pkg-grid">
        {cards.map((card) => {
          const Icon = card.Icon;
          return (
            <article
              key={card.id}
              className={`pkg-card ${selectedPkgId === card.id ? "is-selected" : ""}`}
            >
              {card.popular && <div className="pkg-popular">Popular</div>}

              {/* ICON */}
              <div className="pkg-card-icon" aria-hidden="true">
                <Icon size={26} />
              </div>

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
                <button
                  type="button"
                  className="cta-btn cta-btn--ghost"
                  onClick={() => setSelectedPkgId(card.id)}
                >
                  {selectedPkgId === card.id ? "Selected" : "Select package"}
                </button>

                <button type="button" className="cta-btn" onClick={() => openRequest(card)}>
                  Request details →
                </button>
              </div>
            </article>
          );
        })}
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
                  Package: <strong>{selected?.title}</strong>
                  {serviceLabel ? (
                    <>
                      <br />
                      Service: <strong>{serviceLabel}</strong>
                    </>
                  ) : null}
                </p>
              </div>

              <button type="button" className="pkg-close" onClick={closeRequest} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="pkg-form">
              {/* Stepper */}
              <div className="pkg-stepper" aria-label="Request steps">
                <div className={`pkg-step ${step === 1 ? "is-active" : step > 1 ? "is-done" : ""}`}>1. Contact</div>
                <div className={`pkg-step ${step === 2 ? "is-active" : step > 2 ? "is-done" : ""}`}>2. Service Details</div>
                <div className={`pkg-step ${step === 3 ? "is-active" : ""}`}>3. Review Your Request</div>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="pkg-step-panel">
                  <div className="pkg-row">
                    <div className="pkg-choice">
                      <div className="pkg-choice-label">Preferred contact</div>
                      <div className="pkg-choice-row">
                        <button
                          type="button"
                          className={`pkg-chip ${contactMethod === "email" ? "is-selected" : ""}`}
                          onClick={() => setContactMethod("email")}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          className={`pkg-chip ${contactMethod === "phone" ? "is-selected" : ""}`}
                          onClick={() => setContactMethod("phone")}
                        >
                          Phone
                        </button>
                      </div>
                    </div>

                    <div className="pkg-choice">
                      <div className="pkg-choice-label">{contactMethod === "phone" ? "Phone" : "Email"}</div>
                      <input
                        className="pkg-input"
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        placeholder={contactMethod === "phone" ? "(555) 555-5555" : "you@email.com"}
                      />
                      <div className="pkg-muted">Not required to continue — but recommended.</div>
                    </div>
                  </div>

                  <div className="pkg-row">
                    <div className="pkg-choice">
                      <div className="pkg-choice-label">{isAdvanced ? "Company (optional)" : "City (optional)"}</div>
                      <input
                        className="pkg-input"
                        value={contextValue}
                        onChange={(e) => setContextValue(e.target.value)}
                        placeholder={isAdvanced ? "Company name" : "Your city"}
                      />
                    </div>
                  </div>

                  <div className="pkg-form-actions">
                    <button type="button" className="cta-btn cta-btn--ghost" onClick={closeRequest}>
                      Cancel
                    </button>
                    <button type="button" className="cta-btn" onClick={() => setStep(2)}>
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="pkg-step-panel">
                  <div className="pkg-row">
                    <div className="pkg-choice">
                      <div className="pkg-choice-label">How should we help?</div>
                      <div className="pkg-choice-row">
                        <button
                          type="button"
                          className={`pkg-chip ${supportType === "remote" ? "is-selected" : ""}`}
                          onClick={() => setSupportType("remote")}
                        >
                          Remote Support
                        </button>
                        <button
                          type="button"
                          className={`pkg-chip ${supportType === "onsite" ? "is-selected" : ""}`}
                          onClick={() => setSupportType("onsite")}
                        >
                          On-site Visit
                        </button>
                      </div>
                    </div>

                    <div className="pkg-choice">
                      <div className="pkg-choice-label">How soon do you need help?</div>
                      <div className="pkg-choice-row">
                        <button
                          type="button"
                          className={`pkg-chip ${urgency === "normal" ? "is-selected" : ""}`}
                          onClick={() => setUrgency("normal")}
                        >
                          Flexible
                        </button>
                        <button
                          type="button"
                          className={`pkg-chip ${urgency === "soon" ? "is-selected" : ""}`}
                          onClick={() => setUrgency("soon")}
                        >
                          This Week
                        </button>
                        <button
                          type="button"
                          className={`pkg-chip ${urgency === "urgent" ? "is-selected" : ""}`}
                          onClick={() => setUrgency("urgent")}
                        >
                          ASAP
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pkg-choice" style={{ marginTop: 12 }}>
                    <div className="pkg-choice-label">What do you need help with?</div>
                    <div className="pkg-tag-grid">
                      {issueOptions.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={`pkg-tag ${issueTags.includes(tag) ? "is-selected" : ""}`}
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div className="pkg-muted">Pick all that apply.</div>
                  </div>

                  <div className="pkg-form-actions">
                    <button type="button" className="cta-btn cta-btn--ghost" onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button type="button" className="cta-btn" onClick={() => setStep(3)}>
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="pkg-step-panel">
                  {/* Rover-style review intro */}
                  <div className="pkg-choice" style={{ marginBottom: 12 }}>
                    <div className="pkg-choice-label">Review your request</div>
                    <div className="pkg-muted">Check the details below, then send your request from the quote summary.</div>
                  </div>

                  <div className="pkg-review">
                    <div className="pkg-review-row"><b>Service:</b> {serviceLabel || "(not selected)"}</div>
                    <div className="pkg-review-row"><b>Package:</b> {selected?.title || "(not selected)"}</div>
                    <div className="pkg-review-row"><b>How we’ll help:</b> {supportType === "remote" ? "Remote" : "On‑site"}</div>
                    <div className="pkg-review-row"><b>Urgency:</b> {urgency === "urgent" ? "ASAP" : urgency === "soon" ? "This Week" : "Flexible"}</div>
                    <div className="pkg-review-row"><b>Topics:</b> {issueTags.length ? issueTags.join(", ") : "(none)"}</div>
                    <div className="pkg-review-row"><b>Preferred contact:</b> {contactMethod === "phone" ? "Phone" : "Email"}{contactValue ? ` — ${contactValue}` : ""}</div>
                    {contextValue ? (
                      <div className="pkg-review-row"><b>{isAdvanced ? "Company" : "City"}:</b> {contextValue}</div>
                    ) : null}
                  </div>

                  {/* Final details section label */}
                  <div className="pkg-choice" style={{ marginTop: 12 }}>
                    <div className="pkg-choice-label">Final details</div>
                    <div className="pkg-muted">Only add notes if there’s anything important we should know.</div>
                  </div>

                  <div className="pkg-choice" style={{ marginTop: 12 }}>
                    <div className="pkg-choice-label">Add any final notes (optional)</div>
                    <textarea
                      className="pkg-textarea"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        isAdvanced
                          ? "Optional: tools used, number of users/devices, constraints, desired outcome…"
                          : "Optional: what’s happening, what devices you have, anything we should know…"
                      }
                    />
                  </div>

                  {/* Quote / Booking Summary (shopping-cart style) */}
                  <div className="booking-cart">
                    <div className="booking-cart-left">
                      <div className="booking-cart-title">Request Summary</div>

                      <div className="booking-cart-lines">
                        <div className="booking-cart-line">
                          <span className="label">Service</span>
                          <span className="value">{serviceLabel || "Not selected"}</span>
                        </div>

                        <div className="booking-cart-line">
                          <span className="label">Package</span>
                          <span className="value">{selected?.title || "Not selected"}</span>
                        </div>

                        <div className="booking-cart-line">
                          <span className="label">Support</span>
                          <span className="value">{supportType === "remote" ? "Remote" : "On‑site"}</span>
                        </div>

                        <div className="booking-cart-line">
                          <span className="label">Urgency</span>
                          <span className="value">
                            {urgency === "urgent" ? "ASAP" : urgency === "soon" ? "This Week" : "Flexible"}
                          </span>
                        </div>

                        <div className="booking-cart-line">
                          <span className="label">Base</span>
                          <span className="value">{quote.baseLabel}</span>
                        </div>

                        <div className="booking-cart-line">
                          <span className="label">On-site Visit</span>
                          <span className="value">{quote.onsiteFee ? `+$${quote.onsiteFee}` : "$0"}</span>
                        </div>

                        <div className="booking-cart-line">
                          <span className="label">Priority Add-on</span>
                          <span className="value">{quote.urgencyFee ? `+$${quote.urgencyFee}` : "$0"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="booking-cart-right">
                      <div className="booking-cart-price">
                        <span className="price-label">Estimated</span>
                        <span className="price-value">{quote.totalLabel}</span>
                        <span className="price-note">Estimated range shown before final confirmation</span>
                      </div>

                      <div className="booking-cart-actions">
                        <button
                          type="button"
                          className="booking-cart-btn ghost"
                          onClick={() => setStep((s) => Math.max(1, s - 1))}
                          disabled={step === 1}
                        >
                          Back
                        </button>

                        <button
                          type="button"
                          className="booking-cart-btn primary"
                          onClick={async () => {
                            if (step < 3) {
                              setStep(step + 1);
                              return;
                            }

                            if (submitPref === "email") {
                              openEmailDraft();
                            } else {
                              await copyToClipboard();
                            }

                            closeRequest();
                          }}
                          disabled={!selected}
                        >
                          {step < 3 ? "Continue" : "Send Request"}
                        </button>
                      </div>

                      {!selected && (
                        <div className="booking-cart-hint">Select a package to continue.</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}