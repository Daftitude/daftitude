import { useCallback, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FloatingPageTools } from "../../components/home";
import { createAskDaftTicket, saveAskDaftTicket } from "../../utils/askDaftTickets";

const requestModes = {
  simple: {
    label: "Simple Help",
    eyebrow: "Easiest",
    title: "Just tell us.",
    helper: "Best if you are not sure what to pick.",
    startingCommitment: "$60 minimum",
    range: "$60–$125",
    confidence: "Broad estimate",
    discountNote: "AskDaFT helps sort it out.",
  },
  basic: {
    label: "Basic Request",
    eyebrow: "Fastest path",
    title: "Fastest path.",
    helper: "Fewer questions.",
    startingCommitment: "$60 minimum",
    range: "$60–$125",
    confidence: "Broader estimate",
    discountNote: "May need more discovery later.",
  },
  advanced: {
    label: "Advanced Request",
    eyebrow: "Better estimate",
    title: "Better estimate.",
    helper: "More detail upfront.",
    startingCommitment: "$50 minimum",
    range: "$50–$125",
    confidence: "Better estimate",
    discountNote: "Can reduce back-and-forth.",
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

const intentPresets = {
  fix: {
    requestType: "standard-help",
    issue: "Something is not working",
    device: "Not sure",
    supportPath: "Continue as guest",
  },
  "setup-new": {
    requestType: "setup-teach",
    issue: "I need setup help",
    device: "Not sure",
    supportPath: "Continue as guest",
  },
  "scam-check": {
    requestType: "quick-help",
    issue: "I need a safety/message check",
    device: "Email / Account",
    supportPath: "Continue as guest",
  },
  teach: {
    requestType: "setup-teach",
    issue: "I need setup help",
    device: "AI Tool",
    supportPath: "Continue as guest",
  },
  maintenance: {
    requestType: "full-rescue",
    issue: "I have multiple issues",
    device: "Not sure",
    supportPath: "Returning client",
  },
  "not-sure": {
    requestType: "standard-help",
    issue: "I am not sure",
    device: "Not sure",
    supportPath: "Continue as guest",
  },
  "in-person": {
    requestType: "setup-teach",
    issue: "I need setup help",
    device: "Not sure",
    supportPath: "In-person / house call",
  },
  call: {
    requestType: "standard-help",
    issue: "I am not sure",
    device: "Not sure",
    supportPath: "Call me",
  },
  remote: {
    requestType: "standard-help",
    issue: "Something is not working",
    device: "Computer / Laptop",
    supportPath: "Remote help",
  },
};

const supportPresets = {
  "in-person": "In-person / house call",
  call: "Call me",
  remote: "Remote help",
};

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
    text: "Normal troubleshooting or setup.",
  };
}

export default function AskDaftRequest() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedIntent = searchParams.get("intent") || "not-sure";
  const requestedMode = searchParams.get("mode") || "simple";
  const requestedSupport = searchParams.get("support");
  const preset = intentPresets[requestedIntent] || intentPresets["not-sure"];
  const [readingImpairmentMode, setReadingImpairmentMode] = useState(false);
  const [mode, setMode] = useState(requestModes[requestedMode] ? requestedMode : "simple");
  const [activeStep, setActiveStep] = useState("mode");
  const [requestType, setRequestType] = useState(preset.requestType);
  const [issue, setIssue] = useState(preset.issue);
  const [device, setDevice] = useState(preset.device);
  const [supportPath, setSupportPath] = useState(supportPresets[requestedSupport] || preset.supportPath);
  const [zipCode, setZipCode] = useState("");
  const [description, setDescription] = useState("");
  const [alreadyTried, setAlreadyTried] = useState([]);
  const [multipleDevices, setMultipleDevices] = useState(false);
  const [saveContext, setSaveContext] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    preferredContact: "Text or email",
    bestTime: "Anytime",
    consent: false,
  });
  const [agreementMinimum, setAgreementMinimum] = useState(false);
  const [agreementPriceChange, setAgreementPriceChange] = useState(false);
  const [agreementSafety, setAgreementSafety] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);
  const submittedPanelRef = useRef(null);

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

  const hasDescription = description.trim().length >= 3;
  const hasContactMethod = Boolean(contactInfo.phone.trim() || contactInfo.email.trim());
  const zipNeeded = supportPath === "In-person / house call";
  const zipReady = !zipNeeded || zipCode.trim().length === 5;
  const canSubmit =
    hasDescription &&
    hasContactMethod &&
    contactInfo.consent &&
    zipReady &&
    agreementMinimum &&
    agreementPriceChange &&
    agreementSafety;

  const requestProgressSteps = useMemo(() => {
    if (mode === "simple") {
      return [
        {
          number: "01",
          label: "Start",
          status: mode ? "complete" : "waiting",
        },
        {
          number: "02",
          label: "Problem",
          status: issue && device && supportPath ? "complete" : "waiting",
        },
        {
          number: "03",
          label: "Details",
          status: hasDescription ? "complete" : "in-progress",
        },
        {
          number: "04",
          label: "Contact",
          status: hasContactMethod && contactInfo.consent ? "complete" : "waiting",
        },
        {
          number: "05",
          label: "Review",
          status: agreementMinimum && agreementPriceChange && agreementSafety ? "complete" : "waiting",
        },
      ];
    }

    return [
      {
        number: "01",
        label: "Mode",
        status: mode ? "complete" : "waiting",
      },
      {
        number: "02",
        label: "Help type",
        status: requestType ? "complete" : "waiting",
      },
      {
        number: "03",
        label: "Problem",
        status: issue && device && supportPath ? "complete" : "waiting",
      },
      {
        number: "04",
        label: "Details",
        status: hasDescription ? "complete" : "in-progress",
      },
      {
        number: "05",
        label: "Contact",
        status: hasContactMethod && contactInfo.consent ? "complete" : "waiting",
      },
      {
        number: "06",
        label: "Agreement",
        status: agreementMinimum && agreementPriceChange && agreementSafety ? "complete" : "waiting",
      },
      {
        number: "07",
        label: "Submit",
        status: canSubmit ? "ready" : "waiting",
      },
    ];
  }, [
    agreementMinimum,
    agreementPriceChange,
    agreementSafety,
    canSubmit,
    contactInfo.consent,
    device,
    hasContactMethod,
    hasDescription,
    issue,
    mode,
    requestType,
    supportPath,
  ]);

  const missingItems = useMemo(() => {
    const items = [];

    if (!hasDescription) items.push("Describe the issue in your own words.");
    if (!hasContactMethod) items.push("Add a phone number or email.");
    if (!contactInfo.consent) items.push("Allow AskDaFT to contact you about this request.");
    if (zipNeeded && !zipReady) items.push("Enter a ZIP code for rough in-person availability.");
    if (!agreementMinimum) items.push("Accept the minimum starting commitment.");
    if (!agreementPriceChange) items.push("Accept that pricing can change if scope changes.");
    if (!agreementSafety) items.push("Confirm no sensitive info was included.");

    return items;
  }, [
    agreementMinimum,
    agreementPriceChange,
    agreementSafety,
    contactInfo.consent,
    hasContactMethod,
    hasDescription,
    zipNeeded,
    zipReady,
  ]);

  const getStepPanelClass = (stepId, isComplete = false) => {
    const classes = ["askdaft-ticket-panel", "askdaft-step-panel"];

    if (activeStep === stepId) classes.push("is-active");
    if (isComplete) classes.push("is-complete");
    if (activeStep !== stepId && isComplete) classes.push("is-collapsed");

    return classes.join(" ");
  };

  const setStep = (stepId) => {
    setActiveStep(stepId);
  };

  const updateContactInfo = (field, value) => {
    setContactInfo((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      submittedPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const handleSubmitPreview = () => {
    if (!canSubmit) return;

    const ticket = createAskDaftTicket({
      mode,
      requestType,
      selectedType,
      issue,
      device,
      supportPath,
      zipCode,
      description,
      alreadyTried,
      multipleDevices,
      saveContext,
      estimate,
      scopeLevel,
      contactInfo,
      agreements: {
        minimum: agreementMinimum,
        priceChange: agreementPriceChange,
        safety: agreementSafety,
      },
    });

    saveAskDaftTicket(ticket);
    navigate(`/askdaft/tickets/${ticket.id}?guest=1`);
  };

  const toggleTried = (item) => {
    setAlreadyTried((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item]
    );
  };

  return (
    <main className={`account-page askdaft-request-page askdaft-compact-copy ${readingImpairmentMode ? "" : "reading-impairment-mode"}`}>
      {submittedTicket && (
        <section ref={submittedPanelRef} className="askdaft-ticket-submitted-panel">
          <div>
            <p className="phase-kicker">Request Preview Created</p>
            <h1>
              Your <span className="pricing-emphasis-green">AskDaFT request</span> is ready.
            </h1>
            <p>
              This preview is saved on this device for now. Backend email, text alerts, and ticket tracking will connect in the next build phase.
            </p>
          </div>

          <div className="askdaft-ticket-submitted-grid">
            <article>
              <span>Ticket</span>
              <strong>{submittedTicket.id}</strong>
            </article>
            <article>
              <span>Help type</span>
              <strong>{submittedTicket.requestLabel || "Tech help"}</strong>
            </article>
            <article>
              <span>Estimate</span>
              <strong>{submittedTicket.estimate?.range || "Review needed"}</strong>
            </article>
            <article>
              <span>Contact</span>
              <strong>{submittedTicket.contact?.phone || submittedTicket.contact?.email || "Not provided"}</strong>
            </article>
          </div>

          <div className="askdaft-ticket-summary-block">
            <strong>What you told AskDaFT</strong>
            <p>{submittedTicket.description}</p>
          </div>

          <div className="account-dashboard-actions">
            <Link className="phase-btn phase-btn-primary" to="/askdaft/dashboard">
              View Dashboard
            </Link>
            <button
              type="button"
              className="phase-btn phase-btn-secondary"
              onClick={() => {
                setSubmittedTicket(null);
                setStep("mode");
              }}
            >
              Start Another Request
            </button>
          </div>
        </section>
      )}
      <section className="askdaft-request-hero">
        <div>
          <p className="phase-kicker">AskDaFT Request</p>
          <h1>
            Get <span className="pricing-emphasis-blue">tech help</span>.
          </h1>
          <p>
            Tell us what happened. AskDaFT helps sort it out.
          </p>
        </div>

        <div className="account-dashboard-actions">
          <button
            type="button"
            className="phase-btn phase-btn-primary"
            onClick={() => {
              setSupportPath("Call me");
              setStep("details");
            }}
          >
            Call Me Instead
          </button>
          <Link className="phase-btn phase-btn-secondary" to="/askdaft">
            Back to AskDaFT
          </Link>
          <Link className="phase-btn phase-btn-ghost" to="/askdaft/dashboard">
            View Dashboard
          </Link>
        </div>
      </section>

      <section className="askdaft-request-progress-shell" aria-label="Request progress">
        {requestProgressSteps.map((step) => {
          const stepMap = mode === "simple"
            ? {
                "01": "mode",
                "02": "problem",
                "03": "details",
                "04": "contact",
                "05": "agreement",
              }
            : {
                "01": "mode",
                "02": "type",
                "03": "problem",
                "04": "details",
                "05": "contact",
                "06": "agreement",
                "07": "submit",
              };

          return (
            <button
              type="button"
              className={`askdaft-request-progress-step ${step.status} ${activeStep === stepMap[step.number] ? "is-active" : ""}`}
              key={step.number}
              onClick={() => setStep(stepMap[step.number])}
            >
              <span>{step.number}</span>
              <strong>{step.label}</strong>
              <small>{step.status === "complete" ? "Complete" : step.status === "ready" ? "Ready" : step.status === "waiting" ? "Waiting" : "In progress"}</small>
            </button>
          );
        })}
      </section>

      <section className="askdaft-request-layout">
        <div className="askdaft-ticket-builder">
          <section className={getStepPanelClass("mode", Boolean(mode))}>
            <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("mode")}>
              Edit
            </button>
            <div className="account-panel-heading">
              <p className="phase-kicker">Request Mode</p>
              <h2>Choose the easiest way to start.</h2>
              <p>
                Simple is best for older clients or anyone who just wants help.
              </p>
            </div>

            <div className="askdaft-mode-grid">
              {Object.entries(requestModes).map(([key, item]) => (
                <button
                  type="button"
                  key={key}
                  className={`askdaft-mode-card ${mode === key ? "active" : ""}`}
                  onClick={() => {
                    setMode(key);
                    setStep(key === "simple" ? "problem" : "type");
                  }}
                >
                  <span>{item.eyebrow}</span>
                  <strong>{item.label}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.helper}</p>
                  <small title={item.discountNote}>{item.discountNote}</small>
                </button>
              ))}
            </div>
          </section>

          {mode !== "simple" && (
            <section className={getStepPanelClass("type", Boolean(requestType))}>
              <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("type")}>
                Edit
              </button>
              <div className="account-panel-heading">
                <p className="phase-kicker">Step 1</p>
                <h2>What do you need help with?</h2>
              </div>

              <div className="askdaft-request-type-grid">
                {requestTypes.map((type) => (
                  <button
                    type="button"
                    key={type.id}
                    className={`askdaft-request-type-card ${requestType === type.id ? "active" : ""}`}
                    onClick={() => {
                      setRequestType(type.id);
                      setStep("problem");
                    }}
                  >
                    <strong>{type.label}</strong>
                    <span>{type.range}</span>
                    <p>{type.helper}</p>
                  </button>
                ))}
              </div>
            </section>
          )}

          <section className={getStepPanelClass("problem", Boolean(issue && device && supportPath))}>
            <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("problem")}>
              Edit
            </button>
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 2</p>
              <h2>What is this about?</h2>
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
                <span>What is this about?</span>
                <select value={device} onChange={(event) => setDevice(event.target.value)}>
                  {deviceOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                <span>How do you want help?</span>
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

            <div className="askdaft-step-actions">
              <button type="button" className="phase-btn phase-btn-secondary" onClick={() => setStep(mode === "advanced" ? "advanced" : "details")}>
                Continue
              </button>
            </div>
          </section>

          {mode === "advanced" && (
            <section className={getStepPanelClass("advanced", alreadyTried.length > 0 || saveContext)}>
              <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("advanced")}>
                Edit
              </button>
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

              <div className="askdaft-step-actions">
                <button type="button" className="phase-btn phase-btn-secondary" onClick={() => setStep("details")}>
                  Continue
                </button>
              </div>
            </section>
          )}

          <section className={getStepPanelClass("details", hasDescription)}>
            <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("details")}>
              Edit
            </button>
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 3</p>
              <h2>Tell us what happened.</h2>
              <p>Do not include passwords, payment info, IDs, seed phrases, or private keys.</p>
            </div>

            <textarea
              className="askdaft-request-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={8}
              placeholder="Example: My TV will not open Netflix. I am not sure what changed."
            />

            <div className="askdaft-upload-panel">
              <div>
                <strong>Add screenshot</strong>
                <p>Optional. Helpful for errors, popups, or warnings.</p>
              </div>
              <button
                type="button"
                className="askdaft-upload-btn"
                onClick={() => {
                  if (hasDescription) {
                    setStep("contact");
                  }
                }}
                disabled={!hasDescription}
                title={!hasDescription ? "Type at least 3 characters first." : "Skip screenshot and continue."}
              >
                Upload later
              </button>
            </div>

            <div className="askdaft-step-actions">
              <button
                type="button"
                className="phase-btn phase-btn-secondary"
                onClick={() => setStep("contact")}
                disabled={!hasDescription}
                title={!hasDescription ? "Type at least 3 characters first." : "Continue to contact."}
              >
                {hasDescription ? "Continue" : "Type 3+ characters"}
              </button>
            </div>
          </section>

          <section className={getStepPanelClass("contact", hasContactMethod && contactInfo.consent)}>
            <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("contact")}>
              Edit
            </button>
            <div className="account-panel-heading">
              <p className="phase-kicker">Contact</p>
              <h2>How should we reach you?</h2>
              <p>Phone or email is required. No full address needed here.</p>
            </div>

            <div className="askdaft-field-grid askdaft-contact-field-grid">
              <label>
                <span>First name</span>
                <input
                  value={contactInfo.firstName}
                  onChange={(event) => updateContactInfo("firstName", event.target.value)}
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </label>

              <label>
                <span>Last name</span>
                <input
                  value={contactInfo.lastName}
                  onChange={(event) => updateContactInfo("lastName", event.target.value)}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </label>

              <label>
                <span>Phone</span>
                <input
                  value={contactInfo.phone}
                  onChange={(event) => updateContactInfo("phone", event.target.value)}
                  placeholder="Text or call"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  value={contactInfo.email}
                  onChange={(event) => updateContactInfo("email", event.target.value)}
                  placeholder="Email"
                  autoComplete="email"
                  inputMode="email"
                />
              </label>

              <label>
                <span>Preferred</span>
                <select
                  value={contactInfo.preferredContact}
                  onChange={(event) => updateContactInfo("preferredContact", event.target.value)}
                >
                  <option>Text or email</option>
                  <option>Text first</option>
                  <option>Call first</option>
                  <option>Email first</option>
                </select>
              </label>

              <label>
                <span>Best time</span>
                <select
                  value={contactInfo.bestTime}
                  onChange={(event) => updateContactInfo("bestTime", event.target.value)}
                >
                  <option>Anytime</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </label>
            </div>

            {!hasContactMethod && (
              <div className="askdaft-contact-warning">
                Add a phone number or email so AskDaFT can follow up.
              </div>
            )}

            <label className="askdaft-inline-check">
              <input
                type="checkbox"
                checked={contactInfo.consent}
                onChange={(event) => updateContactInfo("consent", event.target.checked)}
              />
              <span>AskDaFT can contact me about this request.</span>
            </label>

            <div className="askdaft-step-actions">
              <button
                type="button"
                className="phase-btn phase-btn-secondary"
                onClick={() => setStep("agreement")}
                disabled={!hasContactMethod || !contactInfo.consent}
              >
                Continue
              </button>
            </div>
          </section>

          <section className={getStepPanelClass("agreement", agreementMinimum && agreementPriceChange && agreementSafety)}>
            <button type="button" className="askdaft-step-edit-btn" onClick={() => setStep("agreement")}>
              Edit
            </button>
            <div className="account-panel-heading">
              <p className="phase-kicker">Step 4</p>
              <h2>Review price.</h2>
            </div>

            <div className={`askdaft-scope-warning ${scopeLevel.tone}`}>
              <strong>{scopeLevel.label}</strong>
              <p>{scopeLevel.text}</p>
            </div>

            <div className="askdaft-discovery-promise">
              <article>
                <span>Band-Aid Option</span>
                <p>Lowest-cost next step.</p>
              </article>
              <article>
                <span>Best Option</span>
                <p>Balanced fix.</p>
              </article>
              <article>
                <span>AskDaFT Recommendation</span>
                <p>Honest recommendation.</p>
              </article>
            </div>

            <div className="askdaft-agreement-list">
              <label>
                <input
                  type="checkbox"
                  checked={agreementMinimum}
                  onChange={(event) => setAgreementMinimum(event.target.checked)}
                />
                <span>I accept the starting minimum.</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreementPriceChange}
                  onChange={(event) => setAgreementPriceChange(event.target.checked)}
                />
                <span>I understand AskDaFT will explain price changes first.</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={agreementSafety}
                  onChange={(event) => setAgreementSafety(event.target.checked)}
                />
                <span>I did not include sensitive info.</span>
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

          <div className="askdaft-summary-row">
            <span>Contact</span>
            <strong>{contactInfo.phone || contactInfo.email || "Needed"}</strong>
          </div>

          <div className={`askdaft-mini-scope ${scopeLevel.tone}`}>
            <strong>{scopeLevel.label}</strong>
            <p>{scopeLevel.text}</p>
          </div>

          <div className="askdaft-summary-note">
            <strong>Monthly member discount</strong>
            <p>May apply when saved context or advanced intake lowers discovery time. Not automatic for every request.</p>
          </div>

          <div className="askdaft-submit-checklist">
            <strong>{canSubmit ? "Ready to submit" : "Before submitting"}</strong>
            {missingItems.length ? (
              <ul>
                {missingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Everything required for this preview request is complete.</p>
            )}
          </div>

                    <button
            type="button"
            className="phase-btn phase-btn-primary askdaft-submit-preview-btn"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            title={canSubmit ? "Submit request preview." : "Complete the missing items before submitting."}
            onClick={() => {
              if (!canSubmit) return;
              handleSubmitPreview();
            }}
          >
            {canSubmit ? "Submit Request Preview" : "Complete Missing Items"}
          </button>

          <small>
            Backend submission, confirmation email, SMS, and ticket tracker will connect in the next build phase.
          </small>
        </aside>
      </section>
      <FloatingPageTools
        mode={mode}
        setMode={setMode}
        readingImpairmentMode={readingImpairmentMode}
        setReadingImpairmentMode={setReadingImpairmentMode}
        scrollToTop={scrollToTop}
        basicHref="/askdaft"
      />

    </main>
  );
}
