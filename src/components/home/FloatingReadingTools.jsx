

export default function FloatingReadingTools({ readingImpairmentMode, setReadingImpairmentMode, scrollToTop }) {
  return (
    <div className="floating-reading-tools" aria-label="Reading controls">
      <button
        type="button"
        className={`reading-mode-toggle ${readingImpairmentMode ? "active" : ""}`}
        onClick={() => setReadingImpairmentMode((current) => !current)}
        aria-label={readingImpairmentMode ? "Turn color emphasis off" : "Turn color emphasis on"}
        aria-pressed={readingImpairmentMode}
        title={readingImpairmentMode ? "Reading Mode: On" : "Reading Mode: Off"}
      >
        <span>Reading Mode</span>
        <strong>{readingImpairmentMode ? "ON" : "OFF"}</strong>
      </button>

      <button type="button" className="jump-to-top-btn" onClick={scrollToTop} aria-label="Jump back to top" title="Jump back to top">
        ↑
      </button>
    </div>
  );
}