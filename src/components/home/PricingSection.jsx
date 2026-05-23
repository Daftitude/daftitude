

import { Link } from "react-router-dom";
import BrandName from "./BrandName";

export default function PricingSection({
  isBusinessPricing,
  isOneTimePricing,
  pricingAudience,
  setPricingAudience,
  subscriptionBilling,
  setSubscriptionBilling,
  pricingHeader,
  pricingRows,
  buildPricingActionLink,
}) {
  return (
    <section id="average-pricing" className="story-mode-section subscription-section average-pricing-section">
      <div className="story-mode-header compact pricing-chart-intro">
        <p className="story-kicker step-pill-kicker">Step 2: Pick Your Price Lane</p>
        <h2>
          <span className="pricing-emphasis-blue">Find</span> the <span className="pricing-emphasis-green">price</span> path that <span className="pricing-emphasis-yellow">fits</span> the <span className="pricing-emphasis-blue">help</span> you actually <span className="pricing-emphasis-yellow">need</span>.
        </h2>
        <div className="pricing-skim-guide pricing-skim-guide--clean" aria-label="How to use the pricing chart">
          <article className="pricing-skim-card">
            <strong className="pricing-skim-number">1</strong>
            <h3>Pick the lane</h3>
            <p>
              <b className="pricing-emphasis-blue">DaFTitude</b> for systems and business planning.
              <b className="pricing-emphasis-green"> AskDaFT</b> for hands-on tech help.
            </p>
          </article>

          <article className="pricing-skim-card">
            <strong className="pricing-skim-number">2</strong>
            <h3>Choose the style</h3>
            <p>
              <b className="pricing-emphasis-yellow">One Time</b> for one focused problem.
              <b className="pricing-emphasis-yellow"> Monthly</b> for ongoing support.
            </p>
          </article>

          <article className="pricing-skim-card">
            <strong className="pricing-skim-number">3</strong>
            <h3>Take the next step</h3>
            <p>
              Compare <b className="pricing-emphasis-red">fit, scope, and price</b>, then
              <b className="pricing-emphasis-blue"> quote, book, or subscribe</b>.
            </p>
          </article>
        </div>
      </div>

      <div className="subscription-toggle-card">
        <div className="subscription-toggle-topline">
          <div className="pricing-toggle-heading">
            <span className="subscription-mini-label">Now Viewing</span>
            <h3>
              <BrandName name={isBusinessPricing ? "DaFTitude" : "AskDaFT"} /> {pricingHeader}
            </h3>
          </div>

          <div className="subscription-toggle-stack">
            <div className="subscription-toggle" role="group" aria-label="Choose pricing audience">
              <button
                type="button"
                className={pricingAudience === "business" ? "active" : ""}
                onClick={() => setPricingAudience("business")}
              >
                DaFTitude Business
              </button>
              <button
                type="button"
                className={pricingAudience === "askdaft" ? "active" : ""}
                onClick={() => setPricingAudience("askdaft")}
              >
                AskDaFT
              </button>
            </div>

            <div className="subscription-toggle" role="group" aria-label="Choose pricing type">
              <button
                type="button"
                className={subscriptionBilling === "oneTime" ? "active" : ""}
                onClick={() => setSubscriptionBilling("oneTime")}
              >
                One Time
              </button>
              <button
                type="button"
                className={subscriptionBilling === "monthly" ? "active" : ""}
                onClick={() => setSubscriptionBilling("monthly")}
              >
                Monthly Service
              </button>
            </div>
          </div>
        </div>

        <table className="pricing-chart subscription-chart" aria-label={`${pricingHeader} pricing chart`}>
          <thead>
            <tr>
              <th scope="col">{isBusinessPricing && isOneTimePricing ? "Service" : "Plan"}</th>
              <th scope="col">Best For</th>
              <th scope="col">What It Covers</th>
              <th scope="col">{isOneTimePricing ? "Ballpark" : "Monthly Range"}</th>
              <th scope="col">Next Step</th>
            </tr>
          </thead>

          <tbody>
            {pricingRows.map((row) => (
              <tr key={row.service || row.tier} title={`${row.service || row.tier}: ${row.range || row.price}. ${(row.note || row.includes).join(", ")}`}>
                <th scope="row" className="pricing-chart-service">{row.service || row.tier}</th>
                <td>
                  <span className="pricing-chart-pill">{row.bestFor}</span>
                </td>
                <td className="pricing-chart-note">
                  <ul className="pricing-chart-bullets">
                    {(row.note || row.includes).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
                <td className="pricing-chart-price">{row.range || row.price}</td>
                <td className="pricing-chart-actions">
                  <Link
                    className="pricing-action-btn quote"
                    to={buildPricingActionLink(row, "quote")}
                  >
                    Get Quote
                  </Link>
                  <Link
                    className="pricing-action-btn book"
                    to={buildPricingActionLink(row, "book")}
                  >
                    {subscriptionBilling === "monthly" ? "Subscribe" : "Book"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}