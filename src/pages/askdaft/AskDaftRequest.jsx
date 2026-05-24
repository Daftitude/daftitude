import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const requestModes = {
  basic: {
    label: "Basic Request",
    eyebrow: "Fastest path",
    title: "Fast help with fewer questions.",
    helper: "Best when you just want to explain the problem and get help moving.",
    startingCommitment: "$60 minimum",
    range: "$60–$125",
    confidence: "Broader estimate",
    discountNote: "Convenience path. Less detail upfront may require more discovery time.",
  },
  advanced: {
    label: "Advanced Request",
    eyebrow: "Better estimate",
    title: "More details upfront. Less guessing later.",
    helper: "Best when you can provide device details, what you tried, screenshots, and context.",
    startingCommitment: "$50 minimum",
    range: "$50–$125",
    confidence: "Better estimate",
    discountNote: "Advanced details may reduce back-and-forth or final cost if they reduce discovery time.",
  },
};

const requestTypes = [
  {
    id: "quick-help",
    label: "Quick Help",
    range: "$25–$50",
    helper: "Simple question, message check, basic walkthrough, or quick explanation.",
  },
  {
    id: "standard-help",
    label: "Standard Help",
    range: "$60–$125",
    helper: "Troubleshooting, app/device/account help, printer, Wi-Fi, or login issue.",
  },
  {
    id: "setup-teach",
    label: "Setup + Teach",
    range: "$100–$250",
    helper: "New device, smart TV, AI tool, account setup, or guided learning.",
  },
  {
    id: "full-rescue",
    label: "Full Tech Rescue",
    range: "$250+",
    helper: "Multi-device cleanup, deeper problem review, account sorting, or larger setup.",
  },
];

const issueOptions = [
  "Something is not working",
  "I need setup help",
  "I need a safety/message check",
  "I forgot a login or account step",
  "I want to upgrade something",
  "I need help deciding what to buy",
  "I have multiple issues",
  "I am not sure",
];

const deviceOptions = [
  "Phone",
  "Computer / Laptop",
  "TV / Streaming",
  "Printer",
  "Wi-Fi / Internet",
  "Gaming Console",
  "Email / Account",
  "Smart Home",
  "AI Tool",
  "Not sure",
];

const alreadyTriedOptions = [
  "Restarted it",
  "Checked power",
  "Checked internet",
  "Updated app/device",
  "Tried another cable",
  "Searched online",
  "Called provider",
  "Nothing yet",
];

const supportPathOptions = [
  "Continue as guest",
  "Call me",
  "Remote help",
  "In-person / house call",
  "Returning client",
];

function getScopeLevel({ requestType, issue, multipleDevices, supportPath }) {
  if (requestType === "full-rescue" || multipleDevices || issue === "I have multiple issues") {
    return {
      label: "Possible larger scope",
      tone: "red",
      text: "This may need discovery or a project-style estimate because multiple devices, accounts, rooms, or steps may be involved.",
    };
  }

  if (supportPath === "In-person / house call") {
    return {
      label: "In-person scope",
      tone: "yellow",
      text: "House calls may include travel, setup time, parts/software, or visit-length changes. ZIP code only gives rough availability.",
    };
  }

  if (requestType === "quick-help") {
    return {
      label: "Likely quick help",
      tone: "green",
      text: "This looks like a smaller request if it stays focused on one question, message, or quick walkthrough.",
    };
  }

  return {
    label: "Standard support",
    tone: "blue",
    text: "This looks like normal troubleshooting or setup. Final range depends on what is discovered.",
  };
}

export default function AskDaftRequest() {
  const [mode, setMode] = useState("basic");
  const [requestType, setRequestType] = useState("standard-help");
  const [issue, setIssue] = useState("Something is not working");
  const [device, setDevice] = useState("Not sure");
  const [supportPath, setSupportPath] = useState("Continue as guest");
  const [zipCode, setZipCode] = useState("");
  const [description, setDescription] = useState("");
  const [alreadyTried, setAlreadyTried] = useState([]);
  const [multipleDevices, setMultipleDevices] = useState(false);
  const [saveContext, setSaveContext] = useState(false);
  const [agreementMinimum, setAgreementMinimum] = useState(false);
  const [agreementPriceChange, setAgreementPriceChange] = useState(false);
  const [agreementSafety, setAgreementSafety] = useState(false);

  const selectedMode = requestModes[mode];
  const selectedType = requestTypes.find((type) => type.id === requestType) || requestTypes[1];

  const scopeLevel = useMemo(
    () => getScopeLevel({ requestType, issue, multipleDevices, supportPath }),
    [requestType, issue, multipleDevices, supportPath]
  );

  const estimate = useMemo(() => {
    if (requestType === "quick-help") {
      return {
        startingCommitment: mode === "advanced" ? "$25 minimum" : "$25 minimum",
        range: "$25–$50",
        confidence: mode === "advanced" ? "Medium" : "Basic",
      };
    }

    if (requestType === "setup-teach") {
      return {
        startingCommitment: mode === "advanced" ? "$100 minimum" : "$100 minimum",
        range: "$100–$250",
        confidence: mode === "advanced" ? "Medium" : "Broader",
      };
    }

    if (requestType === "full-rescue" || multipleDevices) {
      return {
        startingCommitment: "$250+ discovery / estimate",
        range: "$250+",
        confidence: "Needs scope review",
      };
    }

    return {
      startingCommitment: selectedMode.startingCommitment,
      range: selectedType.range,
      confidence: mode === "advanced" ? "Medium" : "Broader",
    };
  }, [mode, multipleDevices, requestType, selectedMode.startingCommitment, selectedType.range]);

  const canSubmit = agreementMinimum && agreementPriceChange && agreementSafety;

  const toggleTried = (item) => {
    setAlreadyTried((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item]
    );
  };

  return (
    <main className="account-page askdaft-request-page">
      <section className="askdaft-request-hero">
        <div>
          <p className="phase-kicker">AskDaFT Request</p>
          <h1>
            Create a <span className="pricing-emphasis-blue">clear ticket</span> without guessing.
          </h1>
          <p>
            Start basic for speed or advanced for better estimate accuracy. Either way, you see the price logic before submitting.
          </p>
        </div>

        <div className="account-dashboard-actions">
          <Link className="phase-btn phase-btn-secondary" to="/askdaft">
            Back to AskDaFT
          </Link>
          <Link className="phase-btn phase-btn-ghost" to="/askdaft/dashboard">
            View Dashboard
          </Link>
        </div>
      </section>

      <section className="askdaft-request-layout">
        <div className="askdaft-ticket-builder">
          <section className="askdaft-ticket-panel">
            <div className="account-panel-heading">
              <p className="phase-kicker">Request Mode</p>
              <h2>Choose how much work you want to do upfront.</h2>
              <p>
                Basic is faster. Advanced asks for more detail and may reduce confusion, back-and-forth, or final cost when it saves discovery time.
              </p>
            </div>

            <div className="askdaft-mode-grid">
              {Object.entries(requestModes).map(([key, item]) => (
                <button
                  type="button"
                  key={key}
                  className={`askdaft-mode-card ${mode === key ? "active" : ""}`}
                  onClick={() => setMode(key)}
                >
                  <span>{item.eyebrow}</span>
                  <strong>{item.label}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.helper}</p>
                  <small>{item.discountNote}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="askdaft-ticket-panel">
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 1</p>
              <h2>What kind of help is this?</h2>
            </div>

            <div className="askdaft-request-type-grid">
              {requestTypes.map((type) => (
                <button
                  type="button"
                  key={type.id}
                  className={`askdaft-request-type-card ${requestType === type.id ? "active" : ""}`}
                  onClick={() => setRequestType(type.id)}
                >
                  <strong>{type.label}</strong>
                  <span>{type.range}</span>
                  <p>{type.helper}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="askdaft-ticket-panel">
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 2</p>
              <h2>Tell us what is going on.</h2>
            </div>

            <div className="askdaft-chip-grid">
              {issueOptions.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={issue === item ? "active" : ""}
                  onClick={() => setIssue(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="askdaft-field-grid">
              <label>
                <span>Device / service involved</span>
                <select value={device} onChange={(event) => setDevice(event.target.value)}>
                  {deviceOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                <span>Preferred support path</span>
                <select value={supportPath} onChange={(event) => setSupportPath(event.target.value)}>
                  {supportPathOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                <span>ZIP code only</span>
                <input
                  value={zipCode}
                  onChange={(event) => setZipCode(event.target.value)}
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="For rough service area"
                />
              </label>
            </div>

            <label className="askdaft-inline-check">
              <input
                type="checkbox"
                checked={multipleDevices}
                onChange={(event) => setMultipleDevices(event.target.checked)}
              />
              <span>This involves multiple devices, accounts, rooms, or steps.</span>
            </label>
          </section>

          {mode === "advanced" && (
            <section className="askdaft-ticket-panel">
              <div className="account-panel-heading">
                <p className="phase-kicker">Advanced Details</p>
                <h2>Do more upfront to reduce guessing.</h2>
              </div>

              <div className="askdaft-chip-grid">
                {alreadyTriedOptions.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={alreadyTried.includes(item) ? "active" : ""}
                    onClick={() => toggleTried(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <label className="askdaft-inline-check">
                <input
                  type="checkbox"
                  checked={saveContext}
                  onChange={(event) => setSaveContext(event.target.checked)}
                />
                <span>Save non-sensitive support context for faster future help.</span>
              </label>
            </section>
          )}

          <section className="askdaft-ticket-panel">
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 3</p>
              <h2>Explain it in your own words.</h2>
              <p>Do not include passwords, full card numbers, IDs, serial numbers, IMEI, MAC addresses, or private account secrets.</p>
            </div>

            <textarea
              className="askdaft-request-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={8}
              placeholder="Example: My Xbox will not connect online. Wi-Fi works on my phone, but the Xbox keeps saying it cannot connect."
            />

            <div className="askdaft-upload-panel">
              <div>
                <strong>Screenshot optional</strong>
                <p>Helpful for popups, error messages, warning screens, or confusing steps. Do not upload passwords or sensitive documents.</p>
              </div>
              <button type="button" className="askdaft-upload-btn">
                Upload later
              </button>
            </div>
          </section>

          <section className="askdaft-ticket-panel">
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 4</p>
              <h2>Price transparency and agreement.</h2>
            </div>

            <div className={`askdaft-scope-warning ${scopeLevel.tone}`}>
              <strong>{scopeLevel.label}</strong>
              <p>{scopeLevel.text}</p>
            </div>

            <div className="askdaft-discovery-promise">
              <article>
                <span>Band-Aid Option</span>
                <p>Lowest-cost practical next step when you need progress fast.</p>
              </article>
              <article>
                <span>Best Option</span>
                <p>Balanced fix for cost, time, reliability, and long-term usefulness.</p>
              </article>
              <article>
                <span>AskDaFT Recommendation</span>
                <p>The honest recommendation, including what not to waste money on.</p>
              </article>
            </div>

            <div className="askdaft-agreement-list">
              <label>
                <input
                  type="checkbox"
                  checked={agreementMinimum}
                  onChange={(event) => setAgreementMinimum(event.target.checked)}
                />
                <span>I understand this request has a minimum starting commitment.</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreementPriceChange}
                  onChange={(event) => setAgreementPriceChange(event.target.checked)}
                />
                <span>I understand the final price may change if the issue is larger, requires in-person work, involves multiple devices/accounts, or needs hardware/software.</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreementSafety}
                  onChange={(event) => setAgreementSafety(event.target.checked)}
                />
                <span>I did not include passwords, full card numbers, IDs, serial numbers, MAC addresses, or sensitive account secrets.</span>
              </label>
            </div>
          </section>
        </div>

        <aside className="askdaft-ticket-summary">
          <p className="phase-kicker">Live Estimate</p>
          <h2>{selectedType.label}</h2>

          <div className="askdaft-summary-price">
            <span>Starting commitment</span>
            <strong>{estimate.startingCommitment}</strong>
          </div>

          <div className="askdaft-summary-row">
            <span>Estimated range</span>
            <strong>{estimate.range}</strong>
          </div>

          <div className="askdaft-summary-row">
            <span>Mode</span>
            <strong>{selectedMode.label}</strong>
          </div>

          <div className="askdaft-summary-row">
            <span>Estimate confidence</span>
            <strong>{estimate.confidence}</strong>
          </div>

          <div className="askdaft-summary-row">
            <span>Device / service</span>
            <strong>{device}</strong>
          </div>

          <div className="askdaft-summary-row">
            <span>Support path</span>
            <strong>{supportPath}</strong>
          </div>

          <div className={`askdaft-mini-scope ${scopeLevel.tone}`}>
            <strong>{scopeLevel.label}</strong>
            <p>{scopeLevel.text}</p>
          </div>

          <div className="askdaft-summary-note">
            <strong>Monthly member discount</strong>
            <p>May apply when saved context or advanced intake lowers discovery time. Not automatic for every request.</p>
          </div>

          <button type="button" className="phase-btn phase-btn-primary" disabled={!canSubmit}>
            {canSubmit ? "Submit Request Preview" : "Complete Agreements"}
          </button>

          <small>
            Backend submission, confirmation email, SMS, and ticket tracker will connect in the next build phase.
          </small>
        </aside>
      </section>
    </main>
  );
}
