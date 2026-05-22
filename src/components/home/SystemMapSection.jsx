import { Link } from "react-router-dom";
import { BrandName } from ".";

export default function SystemMapSection({
  storyMode,
  systemResourceView,
  setSystemResourceView,
  selectServiceLane,
  selectedSystems,
}) {
  const selectResourceView = (view, lane) => {
    setSystemResourceView(view);
    selectServiceLane(lane);
    setSystemResourceView(view);
  };

  return (
    <section className="story-mode-section system-map-section">
      <div className="story-mode-header compact">
        <p className="story-kicker step-pill-kicker">Step 4: Connect The Dots</p>

        <h2>
          From <span className="pricing-emphasis-green">everyday help</span> to <span className="pricing-emphasis-blue">deeper learning</span>.
        </h2>

        <div className="system-map-resource-actions system-map-resource-actions--four" aria-label="Step 4 resource views">
          <button
            type="button"
            className={`game-btn primary ${systemResourceView === "businessResources" ? "active" : ""}`}
            onClick={() => selectResourceView("businessResources", "daftitude")}
          >
            <span className="resource-btn-main">DaFTitude Business</span>
            <span className="resource-btn-sub">Resources</span>
          </button>

          <button
            type="button"
            className={`game-btn secondary ${systemResourceView === "advanced" ? "active" : ""}`}
            onClick={() => selectResourceView("advanced", "daftitude")}
          >
            <span className="resource-btn-main">Advanced Learning</span>
            <span className="resource-btn-sub">Hub</span>
          </button>

          <button
            type="button"
            className={`game-btn primary ${systemResourceView === "toolbox" ? "active" : ""}`}
            onClick={() => selectResourceView("toolbox", "askdaft")}
          >
            <span className="resource-btn-main">AskDaFT Tool Box</span>
            <span className="resource-btn-sub">Resources</span>
          </button>

          <button
            type="button"
            className={`game-btn secondary ${systemResourceView === "diy" ? "active" : ""}`}
            onClick={() => selectResourceView("diy", "askdaft")}
          >
            <span className="resource-btn-main">AskDaFT</span>
            <span className="resource-btn-sub">Learn & DIY</span>
          </button>
        </div>

        {systemResourceView === "toolbox" ? (
          <p>
            This is where <span className="pricing-emphasis-yellow">simple tech questions</span> turn into <span className="pricing-emphasis-green">confidence</span>. <BrandName name="AskDaFT" /> connects real-life problems to plain-English topics like <span className="pricing-emphasis-blue">AI tools</span>, <span className="pricing-emphasis-red">privacy</span>, <span className="pricing-emphasis-yellow">scam safety</span>, <span className="pricing-emphasis-green">home tech</span>, and smarter digital habits.
          </p>
        ) : systemResourceView === "diy" ? (
          <p>
            This is the <span className="pricing-emphasis-blue">DIY learning</span> side: plain-English guides, cheat sheets, and walkthroughs that help people understand <span className="pricing-emphasis-yellow">what happened</span>, what to <span className="pricing-emphasis-green">try next</span>, and when to ask for help.
          </p>
        ) : systemResourceView === "advanced" ? (
          <p>
            This is the <span className="pricing-emphasis-blue">advanced learning</span> side: deeper resources for business systems, AI workflows, automation planning, privacy-aware decisions, and the bigger digital systems behind the tools people use every day.
          </p>
        ) : (
          <p>
            This is where the <span className="pricing-emphasis-yellow">business questions</span> start turning into <span className="pricing-emphasis-green">structured resources</span>. <BrandName name="DaFTitude" /> connects business tech problems to the bigger systems behind them: <span className="pricing-emphasis-blue">AI</span>, <span className="pricing-emphasis-red">privacy</span>, <span className="pricing-emphasis-yellow">crypto</span>, <span className="pricing-emphasis-green">security</span>, and smarter digital decisions.
          </p>
        )}
      </div>

      <div className="system-chip-grid system-chip-grid--links">
        {selectedSystems.map((system) => (
          <Link
            className="system-chip system-chip-link"
            title={`${storyMode === "askdaft" ? "AskDaFT" : "DaFTitude"} can help explain, organize, or plan around ${system.label}.`}
            to={system.to}
            key={system.label}
          >
            {system.label}
          </Link>
        ))}
      </div>
    </section>
  );
}