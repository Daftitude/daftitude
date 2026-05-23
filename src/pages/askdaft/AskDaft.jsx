import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AskDaftDashboardTeaser, AskDaftHero } from "../../components/askdaft";
import {
  askDaftPriceCards,
  connectedResources,
  estimateCards,
  faqs,
  missions,
  onboardingIssues,
  subscribeSavePlans,
  supportStyles,
} from "../../components/askdaft/askDaftData";
import { FloatingReadingTools } from "../../components/home";

export default function AskDaft() {
  const [readingImpairmentMode, setReadingImpairmentMode] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState("senior-tech-help");
  const [supportStyle, setSupportStyle] = useState("");
  const [requestDetails, setRequestDetails] = useState("");
  const [selectedDetails, setSelectedDetails] = useState([]);
  const [screenshotName, setScreenshotName] = useState("");
  const [callInfo, setCallInfo] = useState({ firstName: "", lastName: "", phone: "" });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selectedIssue = useMemo(() => {
    return onboardingIssues.find((issue) => issue.id === selectedIssueId) || onboardingIssues[0];
  }, [selectedIssueId]);

  const selectedSupportStyle = useMemo(() => {
    return supportStyles.find((style) => style.id === supportStyle);
  }, [supportStyle]);

  const detailPrompt = useMemo(() => {
    if (!selectedDetails.length) {
      return selectedIssue.placeholder;
    }
    return `Selected: ${selectedDetails.join(", ")}. Add anything else you want me to know.`;
  }, [selectedDetails, selectedIssue.placeholder]);

  const detailHint = useMemo(() => {
    if (selectedIssue.id === "paste-a-message") {
      return "Select what kind of message or warning you want checked, then paste the message below.";
    }

    if (selectedIssue.id === "monthly-support") {
      return "Select what kind of house call or install help you need. Pick more than one if needed.";
    }

    if (selectedIssue.id === "big-multi-project") {
      return "Select the parts of the larger project so AskDaFT can understand the scope before quoting.";
    }

    return "Select any quick options that match your issue. Pick more than one if needed.";
  }, [selectedIssue.id]);

  const nextStepMessage = useMemo(() => {
    if (!supportStyle) {
      return "Choose a help style so AskDaFT knows whether this should continue as guest help, a call, remote help, or a returning-client request.";
    }

    if (supportStyle === "guest") {
      return "Guest requests open the contact path without an account. AskDaFT reviews your selections, confirms the fit, and replies with the next step or quote.";
    }

    if (supportStyle === "call") {
      return callInfo.phone.trim()
        ? "AskDaFT can use your call-back details to follow up, confirm the issue, and decide whether call, remote help, or another path fits best."
        : "Add a call-back number so AskDaFT knows how to reach you after reviewing the request.";
    }

    if (supportStyle === "remote") {
      return "Remote help requests are reviewed first, then AskDaFT can confirm whether screen guidance makes sense and what should be prepared before the session.";
    }

    return "Returning clients can log in so saved contact details, request history, and future account features can help prefill the support flow.";
  }, [callInfo.phone, supportStyle]);

  const flowSteps = useMemo(() => {
    const hasDetails = selectedDetails.length > 0 || requestDetails.trim() || screenshotName;
    const styleChosen = Boolean(supportStyle);
    const callReady = supportStyle !== "call" || callInfo.phone.trim();
    const reviewReady = hasDetails && styleChosen && callReady;

    return [
      { number: "01", label: "Issue", status: selectedIssueId ? "complete" : "in-progress" },
      { number: "02", label: "Details", status: hasDetails ? "complete" : "waiting" },
      { number: "03", label: "Help style", status: !styleChosen ? "waiting" : callReady ? "complete" : "in-progress" },
      { number: "04", label: "Review", status: reviewReady ? "ready" : "waiting" },
    ];
  }, [callInfo.phone, requestDetails, screenshotName, selectedDetails.length, selectedIssueId, supportStyle]);

  const toggleDetail = useCallback((detail) => {
    setSelectedDetails((currentDetails) => {
      if (currentDetails.includes(detail)) {
        return currentDetails.filter((item) => item !== detail);
      }

      return [...currentDetails, detail];
    });
  }, []);

  const updateCallInfo = useCallback((field, value) => {
    setCallInfo((currentInfo) => ({
      ...currentInfo,
      [field]: value,
    }));
  }, []);

  const bookingLink = useMemo(() => {
    const params = new URLSearchParams({
      source: "askdaft",
      type: selectedIssue.requestType,
      style: supportStyle || "not-selected",
    });

    if (requestDetails.trim()) {
      params.set("details", requestDetails.trim().slice(0, 240));
    }

    if (selectedDetails.length) {
      params.set("selected", selectedDetails.join(","));
    }

    if (screenshotName) {
      params.set("screenshot", screenshotName);
    }

    if (supportStyle === "call") {
      if (callInfo.firstName.trim()) params.set("first", callInfo.firstName.trim());
      if (callInfo.lastName.trim()) params.set("last", callInfo.lastName.trim());
      if (callInfo.phone.trim()) params.set("phone", callInfo.phone.trim());
    }

    return `/contact?${params.toString()}`;
  }, [callInfo.firstName, callInfo.lastName, callInfo.phone, requestDetails, screenshotName, selectedDetails, selectedIssue.requestType, supportStyle]);

  return (
    <main className={`phase-page askdaft-page ${readingImpairmentMode ? "" : "reading-impairment-mode"}`}>
      <AskDaftHero />

      <section id="start-request" className="phase-section askdaft-onboarding-panel">
        <div className="phase-section-heading">
          <p className="phase-kicker">Start Your Request</p>
          <h2>
            Start with the <span className="pricing-emphasis-yellow">issue</span>.
          </h2>
          <p>
            Choose the closest issue, add what you know, then review before booking.
          </p>
        </div>
        <div className="askdaft-progress-tracker" aria-label="AskDaFT request progress">
          {flowSteps.map((step) => (
            <div className={`askdaft-progress-step ${step.status}`} key={step.number}>
              <span>{step.number}</span>
              <strong>{step.label}</strong>
              <small>{step.status === "complete" ? "Complete" : step.status === "ready" ? "Ready" : step.status === "waiting" ? "Waiting" : "In progress"}</small>
            </div>
          ))}
        </div>

        <div className="askdaft-flow-layout">
          <div className="askdaft-flow-main">
            <div className="askdaft-flow-step">
              <span className="step-number">01</span>
              <div>
                <h3>Choose an issue</h3>
                <p>Choose the option that feels closest.</p>
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
                <p>Type normally. Paste messages, popups, or questions here.</p>
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
                <span>Typical price</span>
                <strong>{selectedIssue.price.base}</strong>
              </div>
              <div>
                <span>Usually included</span>
                <p>{selectedIssue.included.join(" • ")}</p>
              </div>
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
                  <strong>Upload screenshot</strong>
                  <p>Optional. Helpful for texts, popups, error messages, account warnings, or confusing screens.</p>
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
                <p>Choose how you want to continue.</p>
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
                <h3>Review and book</h3>
                <p>{nextStepMessage}</p>
              </div>
            </div>
          </div>

          <aside className="askdaft-request-summary" aria-label="AskDaFT request summary">
            <p className="phase-kicker">04 Review + Book</p>
            <div className="askdaft-summary-icon" aria-hidden="true">{selectedIssue.icon}</div>
            <h3>{selectedIssue.title}</h3>
            <p>{selectedIssue.text}</p>


            <div className="askdaft-summary-meta">
              <span>Help style</span>
              <strong>{selectedSupportStyle?.label || "Choose one"}</strong>
            </div>

            <div className="askdaft-summary-meta">
              <span>Details</span>
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
                <strong>{callInfo.phone.trim() ? `${callInfo.firstName || "Name"} ${callInfo.lastName || ""} • ${callInfo.phone}` : "Number needed"}</strong>
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

            <Link className="phase-btn phase-btn-primary askdaft-book-now" to={bookingLink}>
              Book Now
            </Link>
            <p className="askdaft-summary-note">
              Do not send passwords. If login is needed, you enter it yourself.
            </p>
          </aside>
        </div>
      </section>


      <section className="phase-section askdaft-summary-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">AskDaFT Summary</p>
          <h2>
            The goal is <span className="pricing-emphasis-green">clear help</span> without the runaround.
          </h2>
          <p>
            AskDaFT helps people describe a tech problem, choose the kind of help they need, and book a path forward without needing perfect technical words.
          </p>
        </div>

        <div className="askdaft-summary-grid">
          <article className="askdaft-summary-card askdaft-goal-card">
            <span className="mission-tag">Overall goal</span>
            <h3>Make tech support feel understandable.</h3>
            <p>
              AskDaFT is built for everyday tech problems: devices, accounts, messages, setup, teaching, safety checks, and ongoing home or small-business support.
            </p>
          </article>

          <article className="askdaft-summary-card">
            <span className="mission-tag">What you get</span>
            <ul>
              <li>Help choosing the right support path.</li>
              <li>Plain-English explanation of the issue.</li>
              <li>Setup, troubleshooting, or safety review depending on the request.</li>
              <li>A clear next step instead of guessing what to do.</li>
            </ul>
          </article>

          <article className="askdaft-summary-card">
            <span className="mission-tag">Best fit</span>
            <ul>
              <li>People who want patient help.</li>
              <li>Families helping parents or relatives.</li>
              <li>Students, creators, and everyday users with quick tech questions.</li>
              <li>Small businesses that need practical setup support.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="phase-section askdaft-estimates-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Rough Estimate Ranges</p>
          <h2>
            Ballpark <span className="pricing-emphasis-yellow">pricing</span> before you book.
          </h2>
          <p>
            These are planning ranges, not locked quotes. Final pricing depends on scope, urgency, tools involved, and whether the request is quick help, setup, teaching, or ongoing support.
          </p>
        </div>

        <div className="askdaft-estimate-grid">
          {estimateCards.map((card) => (
            <article className="askdaft-estimate-card" key={card.title}>
              <div className="askdaft-estimate-topline">
                <h3>{card.title}</h3>
                <strong>{card.range}</strong>
              </div>
              <p>{card.bestFor}</p>
              <div className="askdaft-includes-list">
                <span>Usually includes</span>
                <ul>
                  {card.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="phase-section askdaft-pricing-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Pricing</p>
          <h2>
            Clear <span className="pricing-emphasis-yellow">ranges</span>. Better value when you <span className="pricing-emphasis-green">subscribe and save</span>.
          </h2>
          <p>
            These are planning ranges, not locked quotes. Final pricing depends on scope, urgency, number of devices/accounts, and whether help is remote, call-based, or in person.
          </p>
        </div>

        <div className="askdaft-price-grid">
          {askDaftPriceCards.map((card) => (
            <article className="askdaft-price-card" key={card.title}>
              <span className="mission-tag">{card.badge}</span>
              <div className="askdaft-price-card-top">
                <h3>{card.title}</h3>
                <strong>{card.range}</strong>
              </div>
              <p>{card.bestFor}</p>
              <ul>
                {card.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section askdaft-subscribe-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Subscribe & Save</p>
          <h2>
            Pay less over time when AskDaFT already knows your <span className="pricing-emphasis-blue">setup</span>.
          </h2>
          <p>
            Subscriptions are for repeat help without starting from zero every time. You get better continuity, easier follow-up, and less time explaining the same devices, accounts, and preferences.
          </p>
        </div>

        <div className="askdaft-subscribe-grid">
          {subscribeSavePlans.map((plan) => (
            <article className="askdaft-subscribe-card" key={plan.title}>
              <div className="askdaft-subscribe-top">
                <h3>{plan.title}</h3>
                <strong>{plan.price}</strong>
              </div>
              <p className="askdaft-plan-rhythm">{plan.rhythm}</p>
              <p>{plan.save}</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="phase-btn phase-btn-secondary" to={`/contact?source=askdaft&type=subscribe-save&plan=${encodeURIComponent(plan.title)}`}>
                Ask About This Plan
              </Link>
            </article>
          ))}
        </div>

        <div className="askdaft-subscribe-note">
          <strong>Why subscribe?</strong>
          <p>One-time help solves the problem in front of you. Subscribe & Save is for staying ahead of issues, keeping devices/accounts organized, and getting help faster because AskDaFT already understands your setup.</p>
        </div>
      </section>

      <section id="missions" className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">More Help Options</p>
          <h2>Still not sure?</h2>
          <p>
            Use these only if the quick-start choices do not fit.
          </p>
        </div>

        <div className="phase-card-grid askdaft-mission-grid">
          {missions.map((mission) => (
            <article className="phase-card mission-card" key={mission.title}>
              <span className="mission-tag">{mission.tag}</span>
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
              <Link className="phase-btn phase-btn-secondary" to={`/contact?source=askdaft&type=${mission.requestType}`}>
                Request This Help
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Helpful Resources</p>
          <h2>Learn before you book.</h2>
          <p>
            Open a related guide if you want more context first.
          </p>
        </div>

        <div className="phase-card-grid four">
          {connectedResources.map((resource) => (
            <article className="phase-card" key={resource.title}>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <Link className="phase-btn phase-btn-secondary" to={resource.to}>
                Open Resource
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section">
        <div className="phase-section-heading">
          <p className="phase-kicker">Quick Answers</p>
          <h2>Before you book.</h2>
        </div>

        <div className="phase-card-grid three">
          {faqs.map((faq) => (
            <article className="phase-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phase-section phase-warning-panel">
        <h2>Privacy Reminder</h2>
        <p>
          AskDaFT <span className="pricing-emphasis-red">does not need passwords</span> sent by text, email, form, or chat. If login is needed during a session, the <span className="pricing-emphasis-green">client enters it themselves</span>.
        </p>
      </section>

      <section className="phase-section phase-warning-panel">
        <h2>Service Boundary</h2>
        <p>
          AskDaFT provides <span className="pricing-emphasis-green">tech help, setup, teaching, troubleshooting, and recommendations</span>. AskDaFT <span className="pricing-emphasis-red">does not provide</span> legal, tax, medical, financial, investment, benefits, electrical, advanced repair, or full cybersecurity incident response services.
        </p>
      </section>

      <AskDaftDashboardTeaser />

      <section className="phase-section contact-command">
        <p className="phase-kicker">Ready?</p>
        <h2>Start with the <span className="pricing-emphasis-red">problem</span>. AskDaFT will <span className="pricing-emphasis-green">help</span> translate it.</h2>
        <div className="phase-hero-actions">
          <Link className="phase-btn phase-btn-primary" to="/contact?source=askdaft&mode=guest">
            Start as Guest
          </Link>
          <Link className="phase-btn phase-btn-secondary" to="/login?source=askdaft">
            Log In
          </Link>
          <Link className="phase-btn phase-btn-ghost" to="/">
            Back to DaFTitude
          </Link>
        </div>
      </section>

      <FloatingReadingTools
        readingImpairmentMode={readingImpairmentMode}
        setReadingImpairmentMode={setReadingImpairmentMode}
        scrollToTop={scrollToTop}
      />
    </main>
  );
}
