export default function AskDaftDashboardTeaser() {
  return (
    <section className="phase-section askdaft-dashboard-teaser">
      <div className="phase-section-heading">
        <p className="phase-kicker">Account Dashboard</p>
        <h2>
          Start <span className="pricing-emphasis-green">simple</span>. Save more when you come back.
        </h2>
        <p>
          AskDaFT can start as a guest request. Accounts become useful when you want <span className="pricing-emphasis-blue">saved devices</span>, request history, screenshots, notes, subscriptions, and repeat support without explaining everything again.
        </p>
      </div>

      <div className="askdaft-dashboard-grid">
        <article>
          <span>01</span>
          <h3>Guest request</h3>
          <p>Send the problem quickly without creating an account first.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Saved setup</h3>
          <p>Later, save common devices, accounts, notes, and support preferences.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Support history</h3>
          <p>Track past requests, screenshots, quotes, plans, and follow-ups.</p>
        </article>
      </div>
    </section>
  );
}
