import { Link } from "react-router-dom";

export default function AskDaftReviewSummary({
  bookingLink,
  callInfo,
  requestDetails,
  screenshotName,
  selectedDetails,
  selectedIssue,
  selectedSupportStyle,
  supportStyle,
}) {
  return (
    <aside className="askdaft-request-summary" aria-label="AskDaFT request summary">
      <div className="askdaft-summary-icon">{selectedIssue.icon}</div>
      <p className="phase-kicker">04 Review + Book</p>
      <h3>{selectedIssue.title}</h3>
      <p>{selectedIssue.text}</p>

      <div className="askdaft-summary-meta">
        <span>Help style</span>
        <strong>{selectedSupportStyle?.label || "Choose one"}</strong>
      </div>

      <div className="askdaft-summary-meta">
        <span>Selected details</span>
        <strong>{selectedDetails.length ? selectedDetails.join(", ") : "Not selected"}</strong>
      </div>

      <div className="askdaft-summary-meta">
        <span>Details added</span>
        <strong>{requestDetails.trim() ? "Yes" : "Not yet"}</strong>
      </div>

      {selectedIssue.allowScreenshot && (
        <div className="askdaft-summary-meta">
          <span>Screenshot</span>
          <strong>{screenshotName || "Optional"}</strong>
        </div>
      )}

      {supportStyle === "call" && (
        <div className="askdaft-summary-meta">
          <span>Call back</span>
          <strong>
            {callInfo.phone.trim()
              ? `${callInfo.firstName || "Name"} ${callInfo.lastName || ""} • ${callInfo.phone}`
              : "Number needed"}
          </strong>
        </div>
      )}

      <div className="askdaft-price-breakdown">
        <strong>Estimate</strong>
        <div>
          <span>Range</span>
          <b>{selectedIssue.price.base}</b>
        </div>
        <div>
          <span>May change if</span>
          <b>{selectedIssue.price.selectedDetails}</b>
        </div>
      </div>

      <Link className={`phase-btn phase-btn-primary askdaft-book-now ${supportStyle ? "" : "disabled"}`} to={bookingLink}>
        {supportStyle ? "Book Now" : "Choose Help Style"}
      </Link>

      <p className="askdaft-summary-note">
        Do not send passwords. If login is needed, you enter it yourself.
      </p>
    </aside>
  );
}
