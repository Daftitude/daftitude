import { BrandName } from ".";

export default function StoryStepsSection({
  selectedStory,
  storyMode,
  previewServiceLane,
  selectServiceLane,
}) {
  return (
    <section id="daftitude-story" className={`story-mode-section story-mode-section--${storyMode}`}>
      <div className="story-mode-header">
        <p className="story-kicker step-pill-kicker">{selectedStory.kicker}</p>
        <h2>{selectedStory.title}</h2>
        <p>{selectedStory.text}</p>

        <div className="story-lane-picker" aria-label="Choose Step 3 service lane">
          <button
            type="button"
            className={storyMode === "daftitude" ? "active" : ""}
            onMouseEnter={() => previewServiceLane("daftitude")}
            onFocus={() => previewServiceLane("daftitude")}
            onClick={() => selectServiceLane("daftitude")}
          >
            <BrandName name="DaFTitude" />
            <span>Business systems</span>
          </button>

          <button
            type="button"
            className={storyMode === "askdaft" ? "active" : ""}
            onMouseEnter={() => previewServiceLane("askdaft")}
            onFocus={() => previewServiceLane("askdaft")}
            onClick={() => selectServiceLane("askdaft")}
          >
            <BrandName name="AskDaFT" />
            <span>Hands-on tech help</span>
          </button>
        </div>
      </div>

      <div className="story-board-grid">
        {selectedStory.cards.map((item) => (
          <article className="story-card" key={item.label}>
            <div className="story-card-topline story-card-topline--with-title">
              <div className="story-card-heading-lockup">
                <span className="story-card-number">{item.label}</span>
                <h3>{item.title}</h3>
              </div>
              <span className="story-card-icon" aria-hidden="true">{item.icon}</span>
            </div>

            <p>{item.text}</p>
            <p className="story-card-statement">{item.statement}</p>

            <div className="story-specialties" aria-label="Specialties">
              <strong>Specialties</strong>
              <ul>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}