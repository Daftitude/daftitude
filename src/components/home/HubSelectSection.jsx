import { Link } from "react-router-dom";

export default function HubSelectSection({ hubCards }) {
  return (
    <section className="story-mode-section hub-select-section">
      <div className="story-mode-header compact">
        <p className="story-kicker step-pill-kicker">Step 5: Keep Learning</p>
        <h2>
          Pick a <span className="pricing-emphasis-blue">hub</span>. Learn what <span className="pricing-emphasis-green">matters</span>.
        </h2>
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
  );
}