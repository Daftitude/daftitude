import { BrandName } from ".";

export default function HomeHero({
  activePath,
  storyMode,
  activeMessage,
  heroSectionRef,
  handleHeroPointerMove,
  resetStoryPreview,
  previewStoryMode,
  selectStoryMode,
  daftitudeBusinessHero,
  askDaftHero,
  daftitudeCenterHero,
}) {
  return (
    <section
      ref={heroSectionRef}
      className={`game-start-screen is-${activePath} story-${storyMode}`}
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={resetStoryPreview}
    >
      <button
        type="button"
        className="game-path game-path-daftitude"
        style={{ "--hero-image": `url(${daftitudeBusinessHero})` }}
        onMouseEnter={() => previewStoryMode("daftitude")}
        onFocus={() => previewStoryMode("daftitude")}
        onClick={() => selectStoryMode("daftitude")}
      >
        <span className="path-kicker">Business Solutions</span>
        <strong><BrandName name="DaFTitude" /></strong>
        <small>Strategy • Systems • Consulting • Education</small>
      </button>

      <button
        type="button"
        className="game-path game-path-askdaft"
        style={{ "--hero-image": `url(${askDaftHero})` }}
        onMouseEnter={() => previewStoryMode("askdaft")}
        onFocus={() => previewStoryMode("askdaft")}
        onClick={() => selectStoryMode("askdaft")}
      >
        <span className="path-kicker">Tech Services</span>
        <strong><BrandName name="AskDaFT" /></strong>
        <small>Residential • Small Business • Setup • Support</small>
      </button>

      <div
        className="game-center-panel"
        style={{ "--center-hero-image": `url(${daftitudeCenterHero})` }}
        aria-live="polite"
      >
        <p className="game-eyebrow">{activeMessage.eyebrow}</p>
        <h1 className="hero-brand-title">{activeMessage.title}</h1>
        <p>{activeMessage.text}</p>

        <div className="game-actions game-actions-main">
          <button type="button" className="game-btn primary" onClick={() => selectStoryMode("daftitude")}>
            View Business Pricing
          </button>
          <button type="button" className="game-btn secondary" onClick={() => selectStoryMode("askdaft")}>
            View AskDaFT Pricing
          </button>
        </div>

        <button type="button" className="game-more-info" onClick={() => selectStoryMode(storyMode)}>
          View pricing ↓
        </button>
      </div>

      <div className="game-bottom-hint">Move left or right. Pick a path. Jump to pricing.</div>
    </section>
  );
}