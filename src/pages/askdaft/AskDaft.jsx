import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AskDaftDashboardTeaser,
  AskDaftEstimateSection,
  AskDaftHero,
  AskDaftInfoSections,
  AskDaftPricingSection,
  AskDaftRequestFlow,
  AskDaftReviewSummary,
  AskDaftSubscribeSection,
  AskDaftSummarySection,
} from "../../components/askdaft";
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
import { FloatingPageTools } from "../../components/home";

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
            Pick issue. Add details. Review price.
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
          <AskDaftRequestFlow
            callInfo={callInfo}
            detailHint={detailHint}
            detailPrompt={detailPrompt}
            flowSteps={flowSteps}
            nextStepMessage={nextStepMessage}
            onboardingIssues={onboardingIssues}
            requestDetails={requestDetails}
            screenshotName={screenshotName}
            selectedDetails={selectedDetails}
            selectedIssue={selectedIssue}
            selectedIssueId={selectedIssueId}
            setRequestDetails={setRequestDetails}
            setScreenshotName={setScreenshotName}
            setSelectedDetails={setSelectedDetails}
            setSelectedIssueId={setSelectedIssueId}
            setSupportStyle={setSupportStyle}
            supportStyle={supportStyle}
            supportStyles={supportStyles}
            toggleDetail={toggleDetail}
            updateCallInfo={updateCallInfo}
          />
          <AskDaftReviewSummary
            bookingLink={bookingLink}
            callInfo={callInfo}
            requestDetails={requestDetails}
            screenshotName={screenshotName}
            selectedDetails={selectedDetails}
            selectedIssue={selectedIssue}
            selectedSupportStyle={selectedSupportStyle}
            supportStyle={supportStyle}
          />
        </div>
      </section>


      <AskDaftSummarySection />

      <AskDaftEstimateSection estimateCards={estimateCards} />

      <AskDaftPricingSection priceCards={askDaftPriceCards} />

      <AskDaftSubscribeSection plans={subscribeSavePlans} />

      <AskDaftInfoSections
        missions={missions}
        connectedResources={connectedResources}
        faqs={faqs}
      />

      <AskDaftDashboardTeaser />

      <section className="phase-section contact-command">
        <p className="phase-kicker">Ready?</p>
        <h2>Start with the <span className="pricing-emphasis-yellow">problem</span>. AskDaFT handles the <span className="pricing-emphasis-green">translation</span>.</h2>
        <div className="phase-hero-actions">
          <Link className="phase-btn phase-btn-primary" to="/askdaft/request">
            Start Request
          </Link>
          <Link className="phase-btn phase-btn-secondary" to="/login?source=askdaft">
            Log In
          </Link>
          <Link className="phase-btn phase-btn-ghost" to="/">
            Back to DaFTitude
          </Link>
        </div>
      </section>

      <FloatingPageTools
        mode="basic"
        readingImpairmentMode={readingImpairmentMode}
        setReadingImpairmentMode={setReadingImpairmentMode}
        scrollToTop={scrollToTop}
        advancedHref="/askdaft/request"
      />
    </main>
  );
}
