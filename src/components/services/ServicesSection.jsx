import basicDiagnose from "../../images/services/basic-diagnose.png";
import basicSetup from "../../images/services/basic-setup.png";
import basicNetwork from "../../images/services/basic-network.png";
import basicSupport from "../../images/services/basic-support.png";

import advancedDiagnostics from "../../images/services/advanced-diagnostics.png";
import advancedInfrastructure from "../../images/services/advanced-infrastructure.png";
import advancedSecurity from "../../images/services/advanced-security.png";
import advancedSupport from "../../images/services/advanced-support.png";

export default function ServicesSection({ taskType = "basic" }) {
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

      {/* 2x2 Grid */}
      <div className="services-feature-grid">
        <div className="service-card">
          <img src={images.diagnose} alt="Diagnostics and troubleshooting" />
          <div className="service-card-content">
            <h3>{isAdvanced ? "IT Triage & Root Cause" : "Fix It / Diagnose It"}</h3>
            <p>
              {isAdvanced
                ? "Find the real bottleneck (network, access, tools, device policy) before it becomes downtime."
                : "Figure out what’s wrong quickly and get it working again—no guessing, no runaround."}
            </p>
            <span className="service-meta">
              {isAdvanced
                ? "incident triage • audits • performance checks"
                : "Wi-Fi not working • slow computer • printer setup • device issues"}
            </span>
          </div>
        </div>

        <div className="service-card">
          <img src={images.setup} alt="Setup and installation" />
          <div className="service-card-content">
            <h3>{isAdvanced ? "Infrastructure & Tooling" : "Setup & Install"}</h3>
            <p>
              {isAdvanced
                ? "Set up clean business systems: networking, permissions, accounts, and modern tooling."
                : "Install and configure home tech so it works the way it should—and stays that way."}
            </p>
            <span className="service-meta">
              {isAdvanced
                ? "network setup • Microsoft 365 / Google Workspace • access control"
                : "Smart TV setup • smart devices • camera installs • mesh Wi-Fi"}
            </span>
          </div>
        </div>

        <div className="service-card">
          <img src={images.stability} alt="System stability" />
          <div className="service-card-content">
            <h3>{isAdvanced ? "Security & Reliability" : "Keep It Stable"}</h3>
            <p>
              {isAdvanced
                ? "Harden systems and reduce repeat issues with sane defaults and better visibility."
                : "Fix dead zones, buffering, disconnects, and devices that “work sometimes.”"}
            </p>
            <span className="service-meta">
              {isAdvanced
                ? "endpoint security • backups • monitoring • hardening"
                : "Wi-Fi dead zones • buffering • camera dropouts • disconnects"}
            </span>
          </div>
        </div>

        <div className="service-card">
          <img src={images.support} alt="Support and troubleshooting" />
          <div className="service-card-content">
            <h3>{isAdvanced ? "Business IT Support" : "On-Demand Tech Help"}</h3>
            <p>
              {isAdvanced
                ? "Support for growing teams that need fast fixes, clean upgrades, and ongoing improvement."
                : "Remote help or scheduled visits when something stops working—fast, friendly, clear."}
            </p>
            <span className="service-meta">
              {isAdvanced
                ? "retainer options • emergency fixes • ongoing optimization"
                : "remote support • same-day help • troubleshooting • quick fixes"}
            </span>
          </div>
        </div>
      </div>

      <a href="/services" className="cta-btn">
        {isAdvanced ? "See business services →" : "See home services →"}
      </a>
    </section>
  );
}