import { Link } from "react-router-dom";

export default function AskDaftSubscribeSection({ plans }) {
  return (
    <section className="phase-section askdaft-subscribe-section">
      <div className="phase-section-heading">
        <p className="phase-kicker">Subscribe & Save</p>
        <h2>
          Pay less over time when AskDaFT already knows your <span className="pricing-emphasis-blue">setup</span>.
        </h2>
        <p>
          Subscriptions are for repeat help without starting from zero every time. Monthly members may qualify for reduced starting ranges when saved context, ticket history, or advanced intake reduces discovery time.
        </p>
      </div>

      <div className="askdaft-subscribe-grid">
        {plans.map((plan) => (
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
        <strong>Monthly discount stipulations</strong>
        <p>Member pricing may reduce one-time support costs when the request fits the plan, saved context is useful, or advanced details reduce discovery time. Discounts do not automatically apply to every request, hardware/software costs, major installs, emergency work, travel, or work outside the plan scope.</p>
      </div>
    </section>
  );
}
