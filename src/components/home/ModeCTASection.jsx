

import { Link } from "react-router-dom";
import BrandName from "./BrandName";

export default function ModeCTASection({
  storyMode,
  selectedCta,
  previewServiceLane,
  selectStoryMode,
  scrollToAveragePricing,
}) {
  return (
    <section className={`story-mode-section mode-cta-section mode-cta-section--${storyMode}`}>
      <div className="mode-cta-panel">
        <div className="mode-cta-copy">
          <div className="mode-cta-kicker-row">
            <p className="story-kicker">{selectedCta.kicker}</p>

            <div className="mode-cta-mini-bubbles" aria-label={`${storyMode} quick focus areas and actions`}>
              {selectedCta.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <h2>{selectedCta.title}</h2>
          <p>{selectedCta.text}</p>

          <div className="mode-cta-lane-picker" aria-label="Pick a service lane">
            <button
              type="button"
              className={storyMode === "daftitude" ? "active" : ""}
              onMouseEnter={() => previewServiceLane("daftitude")}
              onFocus={() => previewServiceLane("daftitude")}
              onClick={() => selectStoryMode("daftitude")}
            >
              <BrandName name="DaFTitude" />
              <small>Business systems</small>
            </button>
            <button
              type="button"
              className={storyMode === "askdaft" ? "active" : ""}
              onMouseEnter={() => previewServiceLane("askdaft")}
              onFocus={() => previewServiceLane("askdaft")}
              onClick={() => selectStoryMode("askdaft")}
            >
              <BrandName name="AskDaFT" />
              <small>Hands-on tech help</small>
            </button>
          </div>

          <div className="mode-cta-action-row">
            {selectedCta.primaryTo ? (
              <Link className="game-btn primary" to={selectedCta.primaryTo}>
                {selectedCta.primaryText}
              </Link>
            ) : (
              <button type="button" className="game-btn primary" onClick={scrollToAveragePricing}>
                {selectedCta.primaryText}
              </button>
            )}

            {selectedCta.secondaryTo ? (
              <Link className="game-btn secondary" to={selectedCta.secondaryTo}>
                {selectedCta.secondaryText}
              </Link>
            ) : (
              <button type="button" className="game-btn secondary" onClick={scrollToAveragePricing}>
                {selectedCta.secondaryText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}