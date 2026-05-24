export default function AskDaftSummarySection() {
  return (
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
  );
}
