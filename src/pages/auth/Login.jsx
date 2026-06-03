import { Link } from "react-router-dom";
import { AccountBenefitCard, AuthShell } from "../../components/account";

const loginBenefits = [
  {
    icon: "🧭",
    title: "Saved booking context",
    text: "Return to service requests, selected lanes, quotes, scheduling notes, and the details you already gave DaFTitude.",
  },
  {
    icon: "📋",
    title: "Tickets and support history",
    text: "Review past AskDaFT issues, follow-ups, device notes, troubleshooting steps, and what was already tried.",
  },
  {
    icon: "🎓",
    title: "Learning progress later",
    text: "Tech Hub lessons, crypto ground school, quizzes, templates, and private learning paths can live here when accounts are wired.",
  },
  {
    icon: "📈",
    title: "Private tool dashboards",
    text: "Future crypto tools, saved watchlists, calculators, AI summaries, and business dashboards can sit behind login.",
  },
];

export default function Login() {
  return (
    <AuthShell
      eyebrow="DaFTitude Login"
      title={
        <>
          Continue with your <span className="pricing-emphasis-blue">saved context</span>.
        </>
      }
      subtitle="Login is the future private layer for saved booking context, AskDaFT tickets, Tech Hub learning progress, crypto tools, and client dashboards."
      primaryAction={{ href: "/askdaft/dashboard", label: "Preview Client Dashboard" }}
      secondaryAction={{ href: "/signup", label: "Create Account" }}
    >
      <div className="account-form-card">
        <div className="account-form-heading">
          <h2>Login</h2>
          <p>Use this as the front door for saved DaFTitude context. Real authentication comes later.</p>
        </div>

        <form className="account-form">
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="Password" />
          </label>

          <div className="account-form-actions">
            <Link className="phase-btn phase-btn-primary" to="/askdaft/dashboard">
              Preview Client Dashboard
            </Link>
            <Link className="phase-btn phase-btn-secondary" to="/booking">
              Continue as Guest
            </Link>
          </div>

          <p className="account-form-note">
            No backend auth yet. This is a polished front-end placeholder for the future private account layer.
          </p>
        </form>

        <div className="account-context-list" aria-label="Future login destinations">
          <span>Future private areas</span>
          <ul>
            <li>Saved booking requests and quotes</li>
            <li>AskDaFT tickets and device history</li>
            <li>Tech Hub learning progress</li>
            <li>Crypto watchlists and private tools</li>
          </ul>
        </div>
      </div>

      <div className="account-benefit-grid">
        {loginBenefits.map((benefit) => (
          <AccountBenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </AuthShell>
  );
}
