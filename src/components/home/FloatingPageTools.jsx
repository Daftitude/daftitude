import { Link } from "react-router-dom";

export default function FloatingPageTools({
  mode = "basic",
  setMode,
  readingImpairmentMode,
  setReadingImpairmentMode,
  scrollToTop,
  advancedHref = "/askdaft/request",
  basicHref = "/askdaft",
}) {
  const isAdvanced = mode === "advanced";

  const handleModeToggle = () => {
    if (setMode) {
      setMode((current) => (current === "advanced" ? "basic" : "advanced"));
    }
  };

  return (
    <div className="floating-page-tools" aria-label="Page tools">
      {setMode ? (
        <button
          type="button"
          className={`floating-tool-btn mode-tool ${isAdvanced ? "active" : ""}`}
          onClick={handleModeToggle}
          aria-label={isAdvanced ? "Switch to basic request view" : "Switch to advanced request view"}
          title={isAdvanced ? "Advanced view: more detail, better estimate" : "Basic view: faster request path"}
        >
          <span>{isAdvanced ? "Advanced" : "Basic"}</span>
          <strong>{isAdvanced ? "ADV" : "BASIC"}</strong>
        </button>
      ) : (
        <Link
          className="floating-tool-btn mode-tool"
          to={advancedHref || basicHref}
          title="Switch between basic and advanced request paths"
        >
          <span>Mode</span>
          <strong>{advancedHref ? "ADV" : "BASIC"}</strong>
        </Link>
      )}

      <button
        type="button"
        className="floating-tool-btn page-up-tool"
        onClick={scrollToTop}
        aria-label="Jump back to top"
        title="Page Up"
      >
        <span>Page Up</span>
        <strong>↑</strong>
      </button>

      <button
        type="button"
        className={`floating-tool-btn reading-tool ${readingImpairmentMode ? "active" : ""}`}
        onClick={() => setReadingImpairmentMode((current) => !current)}
        aria-label={readingImpairmentMode ? "Turn reading mode off" : "Turn reading mode on"}
        aria-pressed={readingImpairmentMode}
        title={readingImpairmentMode ? "Reading Mode: On" : "Reading Mode: Off"}
      >
        <span>Reading</span>
        <strong>{readingImpairmentMode ? "ON" : "OFF"}</strong>
      </button>
    </div>
  );
}
