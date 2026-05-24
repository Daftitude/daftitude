export default function AskDaftEstimateSection({ estimateCards }) {
  return (
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
  );
}
