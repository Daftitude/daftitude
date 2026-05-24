export default function AskDaftPricingSection({ priceCards }) {
  return (
    <section className="phase-section askdaft-pricing-section">
      <div className="phase-section-heading">
        <p className="phase-kicker">Pricing</p>
        <h2>
          Clear <span className="pricing-emphasis-yellow">ranges</span>. Better value when you <span className="pricing-emphasis-green">subscribe and save</span>.
        </h2>
        <p>
          These are starting ranges, not locked final quotes. By choosing a support path, you agree to the minimum starting commitment for that type of request. If the work changes, AskDaFT explains the options before continuing.
        </p>
      </div>

      <div className="askdaft-pricing-truth-grid">
        <article>
          <span>Basic Request</span>
          <strong>Fastest path. Broader estimate.</strong>
          <p>Best when you just want help and do not want to answer many questions upfront.</p>
        </article>
        <article>
          <span>Advanced Request</span>
          <strong>More detail. Better estimate.</strong>
          <p>May reduce back-and-forth or lower final cost when your details reduce discovery time.</p>
        </article>
        <article>
          <span>Discovery Promise</span>
          <strong>Band-Aid, Best, Recommendation.</strong>
          <p>At first contact, AskDaFT explains the lowest practical fix, the balanced option, and the honest recommendation.</p>
        </article>
      </div>

      <div className="askdaft-price-grid">
        {priceCards.map((card) => (
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
  );
}
