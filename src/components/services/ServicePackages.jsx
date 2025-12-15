export default function ServicePackages() {
  return (
    <section id="pricing-reality" className="service-detail">
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        What Similar Work Has Cost
        <span className="info-icon" tabIndex="0">
          ⓘ
          <span className="info-tooltip">
            These numbers reflect past projects and typical scopes.
            They’re meant to set expectations, not force a fixed price.
            Actual needs vary.
          </span>
        </span>
      </h2>

      <p>
        The list below shows the kinds of work I do and what similar projects
        have cost in the past. Think of this as reference data, not a menu.
      </p>

      <div className="pricing-table-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Type of Work</th>
              <th>Typical</th>
              <th>Expanded</th>
              <th>Custom / Ongoing</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                🌐 Website Development{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Planning, structure, build, deployment, and cleanup.
                    Focused on clarity, performance, and maintainability.
                  </span>
                </span>
                <br />
                <small>Small business, personal, or landing sites</small>
              </td>
              <td>$500 – $800</td>
              <td>$900 – $1,500</td>
              <td>Scoped case-by-case</td>
            </tr>

            <tr>
              <td>
                📱 Digital Business Cards{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Lightweight, mobile-first personal or business cards.
                    Hosted, editable, and easy to share.
                  </span>
                </span>
                <br />
                <small>Hosted, mobile-friendly, easy to update</small>
              </td>
              <td>$100 – $150</td>
              <td>$200 – $300</td>
              <td>Rarely needed</td>
            </tr>

            <tr>
              <td>
                📣 Social / Online Presence{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Account setup, cleanup, structure, and strategy —
                    not content farming or gimmicks.
                  </span>
                </span>
                <br />
                <small>Setup, cleanup, or light management</small>
              </td>
              <td>$300 / month</td>
              <td>$600 / month</td>
              <td>Depends on cadence</td>
            </tr>

            <tr>
              <td>
                📶 WiFi & Network Optimization{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Diagnostics, layout analysis, hardware placement,
                    and performance tuning.
                  </span>
                </span>
                <br />
                <small>Home, apartment, or small office</small>
              </td>
              <td>$120 – $180</td>
              <td>$250 – $400</td>
              <td>Complex layouts</td>
            </tr>

            <tr>
              <td>
                🛠️ On-Demand Tech Help{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Troubleshooting, fixes, cleanup, and guidance.
                    Focused on solving root issues, not quick patches.
                  </span>
                </span>
                <br />
                <small>Fixes, troubleshooting, cleanup</small>
              </td>
              <td>$80 – $120</td>
              <td>$200 – $300</td>
              <td>$400 / month</td>
            </tr>

            <tr>
              <td>
                🏠 Smart Home & Security{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Cameras, locks, sensors, automations, and privacy-aware
                    configuration.
                  </span>
                </span>
                <br />
                <small>Cameras, locks, automations</small>
              </td>
              <td>$200 – $300</td>
              <td>$400 – $700</td>
              <td>Custom installs</td>
            </tr>

            <tr>
              <td>
                📺 Home Theater / Media Setup{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Display mounting, audio tuning, cable management,
                    and device configuration.
                  </span>
                </span>
                <br />
                <small>TVs, sound, streaming, tuning</small>
              </td>
              <td>$150 – $250</td>
              <td>$350 – $500</td>
              <td>Room-specific</td>
            </tr>

            <tr>
              <td>
                🖥️ Office / Workspace Tech{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Remote setups, productivity workflows, hardware,
                    and reliability improvements.
                  </span>
                </span>
                <br />
                <small>Remote work, hardware, workflows</small>
              </td>
              <td>$100 – $150</td>
              <td>$250 – $400</td>
              <td>$500 / month</td>
            </tr>

            <tr>
              <td>
                🧠 Consulting & Business Strategy{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    Technical decision support, system planning,
                    and helping avoid costly mistakes.
                  </span>
                </span>
                <br />
                <small>Direction, planning, decision-making</small>
              </td>
              <td>$150 – $250</td>
              <td>$400 – $750</td>
              <td>Ongoing advisory</td>
            </tr>

            <tr>
              <td>
                🤖 AI Integrations & Setup{" "}
                <span className="info-icon">
                  ⓘ
                  <span className="info-tooltip">
                    AI tools, automations, and integrations tailored to
                    actual workflows — not hype or generic bots.
                  </span>
                </span>
                <br />
                <small>LLMs, automations, workflow AI</small>
              </td>
              <td>$250 – $400</td>
              <td>$600 – $1,200</td>
              <td>Custom systems</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "1.5rem", opacity: 0.85 }}>
        If you’re unsure where your situation fits, that’s normal.
        A short conversation usually prevents wasted time and money.
      </p>

      <a href="/contact" className="cta-btn">
        Talk it through →
      </a>
    </section>
  );
}
