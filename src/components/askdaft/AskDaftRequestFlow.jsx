export default function AskDaftRequestFlow({
  callInfo,
  detailHint,
  detailPrompt,
  flowSteps,
  nextStepMessage,
  onboardingIssues,
  requestDetails,
  screenshotName,
  selectedDetails,
  selectedIssue,
  selectedIssueId,
  setRequestDetails,
  setScreenshotName,
  setSelectedDetails,
  setSelectedIssueId,
  setSupportStyle,
  supportStyle,
  supportStyles,
  toggleDetail,
  updateCallInfo,
}) {
  return (
          <div className="askdaft-flow-main">
            <div className="askdaft-flow-step">
              <span className="step-number">01</span>
              <div>
                <h3>Choose issue</h3>
                <p>Pick the closest match.</p>
              </div>
            </div>

            <div className="askdaft-issue-grid" role="list" aria-label="AskDaFT issue options">
              {onboardingIssues.map((issue) => (
                <button
                  type="button"
                  className={`askdaft-issue-card ${selectedIssueId === issue.id ? "active" : ""}`}
                  key={issue.id}
                  onClick={() => {
                    setSelectedIssueId(issue.id);
                    setSelectedDetails([]);
                    setScreenshotName("");
                  }}
                >
                  <span className="askdaft-issue-icon" aria-hidden="true">{issue.icon}</span>
                  <span className="mission-tag">{issue.audience}</span>
                  <strong>{issue.title}</strong>
                  <small>{issue.text}</small>
                </button>
              ))}
            </div>

            <div className="askdaft-flow-step">
              <span className="step-number">02</span>
              <div>
                <h3>Add details</h3>
                <p>Type normally.</p>
              </div>
            </div>

            <div className="askdaft-detail-hint">
              <span>Quick options</span>
              <p>{detailHint}</p>
            </div>

            <div className="askdaft-detail-picker" aria-label="Choose request details">
              {selectedIssue.details.map((detail) => (
                <button
                  type="button"
                  className={`askdaft-detail-chip ${selectedDetails.includes(detail) ? "active" : ""}`}
                  key={detail}
                  onClick={() => toggleDetail(detail)}
                >
                  {detail}
                </button>
              ))}
            </div>

            <div className="askdaft-typical-panel">
              <div>
                <span>Starting range</span>
                <strong>{selectedIssue.price.base}</strong>
              </div>
              <div>
                <span>Includes</span>
                <p>{selectedIssue.included.join(" • ")}</p>
              </div>
              <div>
                <span>May change if</span>
                <p>{selectedIssue.price.selectedDetails}</p>
              </div>
            </div>

            <div className="askdaft-price-transparency-note">
              <strong>Price transparency:</strong>
              <p>
                This is a starting range, not a final locked quote. If discovery shows the work is bigger, involves more devices, needs in-person help, or requires hardware/software, AskDaFT explains the change before continuing.
              </p>
            </div>

            <textarea
              className="askdaft-request-box"
              value={requestDetails}
              onChange={(event) => setRequestDetails(event.target.value)}
              placeholder={detailPrompt}
              rows={7}
            />

            {selectedIssue.allowScreenshot && (
              <div className="askdaft-upload-panel">
                <div>
                  <strong>Add screenshot</strong>
                  <p>Optional. Helpful for errors or warnings.</p>
                </div>
                <label className="askdaft-upload-btn">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setScreenshotName(event.target.files?.[0]?.name || "")}
                  />
                  <span>{screenshotName || "Choose image"}</span>
                </label>
              </div>
            )}

            <div className="askdaft-flow-step">
              <span className="step-number">03</span>
              <div>
                <h3>Choose help style</h3>
                <p>Pick a path.</p>
              </div>
            </div>

            <div className="askdaft-style-row" role="group" aria-label="Choose support style">
              {supportStyles.map((style) => (
                <button
                  type="button"
                  className={`askdaft-style-pill ${supportStyle === style.id ? "active" : ""}`}
                  key={style.id}
                  onClick={() => setSupportStyle(style.id)}
                >
                  <strong>{style.label}</strong>
                  <small>{style.helper}</small>
                </button>
              ))}
            </div>

            {supportStyle === "call" && (
              <div className="askdaft-call-fields" aria-label="Call back details">
                <label>
                  <span>First name</span>
                  <input
                    type="text"
                    value={callInfo.firstName}
                    onChange={(event) => updateCallInfo("firstName", event.target.value)}
                    placeholder="First"
                  />
                </label>
                <label>
                  <span>Last name</span>
                  <input
                    type="text"
                    value={callInfo.lastName}
                    onChange={(event) => updateCallInfo("lastName", event.target.value)}
                    placeholder="Last"
                  />
                </label>
                <label>
                  <span>Phone number</span>
                  <input
                    type="tel"
                    value={callInfo.phone}
                    onChange={(event) => updateCallInfo("phone", event.target.value)}
                    placeholder="Best number to call"
                  />
                </label>
              </div>
            )}

            {supportStyle === "guest" && (
              <div className="askdaft-guest-note">
                <strong>Guest checkout is okay.</strong>
                <p>You can request help without an account. Creating an account later is recommended if you want saved request history, monthly support, or easier repeat help.</p>
              </div>
            )}

            <div className="askdaft-flow-step">
              <span className="step-number">04</span>
              <div>
                <h3>Review</h3>
                <p>{nextStepMessage}</p>
              </div>
            </div>
          </div>
  );
}
