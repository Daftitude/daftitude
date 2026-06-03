import { Link } from "react-router-dom";
import { AccountBenefitCard, AuthShell } from "../../components/account";

const signupBenefits = [
  {
    icon: "🧭",
    title: "Save booking context",
    text: "Keep your selected service lane, request details, quotes, scheduling notes, and support preferences connected.",
  },
  {
    icon: "🛠️",
    title: "Connect repeat support",
    text: "AskDaFT can eventually remember devices, past issues, setup notes, and what already worked.",
  },
  {
    icon: "🎓",
    title: "Track learning later",
    text: "Tech Hub lessons, templates, quizzes, and certificates can become part of your private DaFTitude profile.",
  },
  {
    icon: "📈",
    title: "Unlock future tools",
    text: "Crypto tools, AI summaries, calculators, dashboards, and saved research can live behind your account when built.",
  },
];

export default function Signup() {
  return (
    <AuthShell
      eyebrow="Create DaFTitude Account"
      title={
        <>
          Create an account when saved <span className="pricing-emphasis-green">context</span> matters.
        </>
      }
      subtitle="You can always start as a guest. Accounts are for saved booking context, support history, learning progress, crypto tools, and future private dashboards."
      primaryAction={{ href: "/askdaft/dashboard", label: "Preview Account" }}
      secondaryAction={{ href: "/booking", label: "Start as Guest" }}
    >
      <div className="account-form-card">
        <div className="account-form-heading">
          <h2>Create Account</h2>
          <p>Early-stage placeholder for the future DaFTitude private account system.</p>
        </div>

        <form className="account-form">
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="Create password" />
          </label>

          <div className="account-form-actions">
            <Link className="phase-btn phase-btn-primary" to="/askdaft/dashboard">
              Create Preview Account
            </Link>
            <Link className="phase-btn phase-btn-secondary" to="/booking">
              Start as Guest
            </Link>
          </div>

          <p className="account-form-note">
            Real signup, verification, permissions, and saved account data will be connected later.
          </p>
        </form>

        <div className="account-context-list" aria-label="Future account features">
          <span>What accounts will eventually unlock</span>
          <ul>
            <li>Saved booking requests and quotes</li>
            <li>AskDaFT support tickets and device notes</li>
            <li>Tech Hub learning paths and templates</li>
            <li>Crypto research tools and private dashboards</li>
          </ul>
        </div>
      </div>

      <div className="account-benefit-grid">
        {signupBenefits.map((benefit) => (
          <AccountBenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </AuthShell>
  );
}
