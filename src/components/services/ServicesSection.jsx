import basicDiagnose from "../../images/services/basic-diagnose.png";
import basicSetup from "../../images/services/basic-setup.png";
import basicNetwork from "../../images/services/basic-network.png";
import basicSupport from "../../images/services/basic-support.png";

import advancedDiagnostics from "../../images/services/advanced-diagnostics.png";
import advancedInfrastructure from "../../images/services/advanced-infrastructure.png";
import advancedSecurity from "../../images/services/advanced-security.png";
import advancedSupport from "../../images/services/advanced-support.png";

import { useEffect, useState } from "react";
import ServiceDetailModal from "./ServiceDetailModal";

export default function ServicesSection({ taskType = "basic", onSelectService, selectedService }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const isAdvanced = taskType === "advanced";

  const images = isAdvanced
    ? {
        diagnose: advancedDiagnostics,
        setup: advancedInfrastructure,
        stability: advancedSecurity,
        support: advancedSupport,
      }
    : {
        diagnose: basicDiagnose,
        setup: basicSetup,
        stability: basicNetwork,
        support: basicSupport,
      };

  const badge = isAdvanced
    ? { label: "Business IT Mode", hint: "Reliable systems • security • uptime • automation" }
    : { label: "Home Tech Help Mode", hint: "Wi-Fi • smart home • TV • cameras • quick fixes" };

  const serviceDetails = {
    diagnose: {
      id: "diagnose",
      category: isAdvanced ? "Diagnostics" : "Troubleshooting",
      title: isAdvanced ? "IT Triage & Root Cause" : "Fix It / Diagnose It",
      desc: isAdvanced
        ? "Identify the real system bottleneck before it causes downtime."
        : "Quickly identify what’s wrong and get your tech working again.",
      bestFor: isAdvanced
        ? ["System slowdowns", "Network issues", "Tool failures"]
        : ["Wi‑Fi issues", "Slow computers", "Printer problems"],
      timeEstimate: isAdvanced ? "30–90 minutes" : "20–60 minutes",
      included: isAdvanced
        ? ["System checks", "Network diagnostics", "Performance analysis"]
        : ["Device troubleshooting", "Connectivity testing", "Quick fixes"],
    },

    setup: {
      id: "setup",
      category: "Setup",
      title: isAdvanced ? "Infrastructure & Tooling" : "Setup & Install",
      desc: isAdvanced
        ? "Build clean business systems and modern IT foundations."
        : "Install and configure home tech so everything works smoothly.",
      bestFor: isAdvanced
        ? ["Network deployment", "Workspace setup", "Permissions"]
        : ["Smart TVs", "Cameras", "Mesh Wi‑Fi"],
      timeEstimate: "1–3 hours",
      included: isAdvanced
        ? ["Account setup", "Network configuration", "Tool integration"]
        : ["Device install", "Wi‑Fi setup", "Account configuration"],
    },

    stability: {
      id: "stability",
      category: "Reliability",
      title: isAdvanced ? "Security & Reliability" : "Keep It Stable",
      desc: isAdvanced
        ? "Improve system reliability with monitoring and security."
        : "Fix Wi‑Fi dead zones and devices that disconnect randomly.",
      bestFor: isAdvanced
        ? ["Security hardening", "Monitoring", "Backup strategy"]
        : ["Wi‑Fi coverage", "Camera stability", "Buffering fixes"],
      timeEstimate: "1–2 hours",
      included: isAdvanced
        ? ["Security review", "System hardening", "Monitoring setup"]
        : ["Signal testing", "Router adjustments", "Device optimization"],
    },

    support: {
      id: "support",
      category: "Support",
      title: isAdvanced ? "Business IT Support" : "On‑Demand Tech Help",
      desc: isAdvanced
        ? "Ongoing IT help for teams that need fast responses."
        : "Remote or scheduled help whenever something breaks.",
      bestFor: isAdvanced
        ? ["Emergency fixes", "Ongoing IT help", "Team support"]
        : ["Quick fixes", "Remote troubleshooting", "Tech questions"],
      timeEstimate: "Varies",
      included: isAdvanced
        ? ["Remote support", "Issue resolution", "System guidance"]
        : ["Remote help", "Device troubleshooting", "Configuration help"],
    },
  };

  const serviceOrder = ["diagnose", "setup", "stability", "support"];

  const selected = selectedService ? serviceDetails[selectedService] : null;

  const openDetails = (key) => {
    setActiveService(serviceDetails[key]);
    setDetailOpen(true);
  };

  const scrollToPricing = () => {
    const el = document.getElementById("pricing-reality");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const selectService = (key, opts = {}) => {
    if (!key) return;

    // Only allow known services (prevents bad query params / typos)
    if (!serviceDetails[key]) return;

    // Update parent selection
    onSelectService?.(key);

    // Persist for refresh/share
    try {
      localStorage.setItem("daftitude:selectedService", key);
    } catch {}

    // Reflect selection in URL without navigation
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("service", key);
      window.history.replaceState({}, "", url.toString());
    } catch {}

    // Allow other components to react (packages, CTA, etc.)
    try {
      window.dispatchEvent(
        new CustomEvent("daft:serviceSelected", {
          detail: { service: key },
        })
      );
    } catch {}

    if (opts.autoContinue) {
      const delay = typeof opts.delay === "number" ? opts.delay : 160;
      // Give the UI a beat to show selection highlight
      window.setTimeout(scrollToPricing, delay);
    }
  };

  useEffect(() => {
    // If parent did not provide a selection yet, try query param or localStorage
    if (selectedService) return;

    let candidate = null;
    try {
      const url = new URL(window.location.href);
      candidate = url.searchParams.get("service");
    } catch {}

    if (!candidate) {
      try {
        candidate = localStorage.getItem("daftitude:selectedService");
      } catch {}
    }

    if (candidate && serviceDetails[candidate]) {
      onSelectService?.(candidate);
    }
  }, [selectedService, onSelectService]);

  return (
    <section id="services" className="services-section">
      {/* Mode Badge */}
      <div className={`services-mode-badge ${isAdvanced ? "is-advanced" : "is-basic"}`}>
        <span className="services-mode-pill">{badge.label}</span>
        <span className="services-mode-hint">{badge.hint}</span>
      </div>

      <h2>{isAdvanced ? "Business IT & Systems" : "IT Handyman / Home Help Desk"}</h2>

      <p className="services-intro">
        {isAdvanced ? (
          <>
            Business-focused support for teams that need reliability: network setup, security hardening,
            automation, modern tooling, and “why is this breaking?” troubleshooting.
          </>
        ) : (
          <>
            Fast, friendly help for everyday tech: Wi-Fi problems, smart devices, TVs, cameras,
            slow computers, email setup, printers, and on-demand tech support.
          </>
        )}
      </p>

      {/* How it works */}
      <div className="service-flow-steps" aria-label="Service booking steps">
        <div className="service-step">
          <span className="step-number">1</span>
          <span>Select service</span>
        </div>
        <div className="service-step">
          <span className="step-number">2</span>
          <span>Choose package</span>
        </div>
        <div className="service-step">
          <span className="step-number">3</span>
          <span>Request help</span>
        </div>
      </div>

      {/* Booking Layout */}
      <div className="services-booking">
        {/* Catalog */}
        <div className="services-feature-grid">
          {serviceOrder.map((key) => {
            const s = serviceDetails[key];

            const cardTitle =
              key === "diagnose"
                ? isAdvanced
                  ? "IT Triage & Root Cause"
                  : "Fix It / Diagnose It"
                : key === "setup"
                ? isAdvanced
                  ? "Infrastructure & Tooling"
                  : "Setup & Install"
                : key === "stability"
                ? isAdvanced
                  ? "Security & Reliability"
                  : "Keep It Stable"
                : isAdvanced
                ? "Business IT Support"
                : "On-Demand Tech Help";

            const cardBody =
              key === "diagnose"
                ? isAdvanced
                  ? "Find the real bottleneck (network, access, tools, device policy) before it becomes downtime."
                  : "Figure out what’s wrong quickly and get it working again—no guessing, no runaround."
                : key === "setup"
                ? isAdvanced
                  ? "Set up clean business systems: networking, permissions, accounts, and modern tooling."
                  : "Install and configure home tech so it works the way it should—and stays that way."
                : key === "stability"
                ? isAdvanced
                  ? "Harden systems and reduce repeat issues with sane defaults and better visibility."
                  : "Fix dead zones, buffering, disconnects, and devices that “work sometimes.”"
                : isAdvanced
                ? "Support for growing teams that need fast fixes, clean upgrades, and ongoing improvement."
                : "Remote help or scheduled visits when something stops working—fast, friendly, clear.";

            const meta =
              key === "diagnose"
                ? isAdvanced
                  ? "incident triage • audits • performance checks"
                  : "Wi-Fi not working • slow computer • printer setup • device issues"
                : key === "setup"
                ? isAdvanced
                  ? "network setup • Microsoft 365 / Google Workspace • access control"
                  : "Smart TV setup • smart devices • camera installs • mesh Wi-Fi"
                : key === "stability"
                ? isAdvanced
                  ? "endpoint security • backups • monitoring • hardening"
                  : "Wi-Fi dead zones • buffering • camera dropouts • disconnects"
                : isAdvanced
                ? "retainer options • emergency fixes • ongoing optimization"
                : "remote support • same-day help • troubleshooting • quick fixes";

            return (
              <div key={key} className={`service-card ${selectedService === key ? "is-selected" : ""}`}>
                <img src={images[key]} alt={s.title} onClick={() => openDetails(key)} />
                <div className="service-card-content">
                  <h3>{cardTitle}</h3>
                  <p>{cardBody}</p>
                  <span className="service-meta">{meta}</span>

                  <div className="service-actions">
                    <button className="service-details-btn" onClick={() => openDetails(key)} type="button">
                      Details
                    </button>
                    <button
                      className="service-select-btn"
                      onClick={() => selectService(key, { autoContinue: true })}
                      type="button"
                    >
                      Select Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary / Step 2 */}
        <aside className="services-summary" aria-label="Request summary">
          <div className="services-summary-head">
            <div className="services-summary-kicker">{selected ? "Step 2" : "Step 1"}</div>
            <h3 className="services-summary-title">Your Selection</h3>
            <p className="services-summary-subtitle">
              Choose a service, then continue to packages and request help.
            </p>
          </div>

          {!selected ? (
            <div className="services-summary-empty">
              <div className="services-summary-empty-title">No service selected yet</div>
              <div className="services-summary-empty-text">
                Click <b>Select Service</b> on a card to start.
              </div>
            </div>
          ) : (
            <div className="services-summary-body">
              <div className="services-summary-chip">{selected.category}</div>
              <div className="services-summary-service">{selected.title}</div>
              <div className="services-summary-desc">{selected.desc}</div>

              <div className="services-summary-meta">
                <div className="services-summary-meta-row">
                  <span>Typical time</span>
                  <span>{selected.timeEstimate || "Varies"}</span>
                </div>
              </div>

              <div className="services-summary-actions">
                <button className="services-summary-btn secondary" onClick={() => openDetails(selected.id)} type="button">
                  View details
                </button>
                <button className="services-summary-btn primary" onClick={scrollToPricing} type="button">
                  Choose a package
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>

      <ServiceDetailModal
        open={detailOpen}
        service={activeService}
        onClose={() => setDetailOpen(false)}
        onRequest={(service) => {
          setDetailOpen(false);
          selectService(service.id, { autoContinue: true });
        }}
      />
    </section>
  );
}