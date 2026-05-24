import { Link } from "react-router-dom";
import { AccountBenefitCard, AuthShell } from "../../components/account";

const loginBenefits = [
  {
    icon: "🧠",
    title: "Saved context",
    text: "Keep devices, notes, screenshots, and support preferences connected to your account.",
  },
  {
    icon: "📋",
    title: "Request history",
    text: "Review past issues, quotes, follow-ups, and what was already tried.",
  },
  {
    icon: "⚡",
    title: "Faster repeat help",
    text: "AskDaFT can start with what is already known instead of making you explain everything again.",
  },
];

export default function Login() {
  return (
    <AuthShell
      eyebrow="AskDaFT Login"
      title={
        <>
          Continue with your <span className="pricing-emphasis-blue">saved setup</span>.
        </>
      }
      subtitle="Login is for returning clients who want saved requests, devices, notes, subscriptions, and cleaner repeat support."
      primaryAction={{ href: "/askdaft/dashboard", label: "Preview Dashboard" }}
      secondaryAction={{ href: "/signup", label: "Create Account" }}
    >
      <div className="account-form-card">
        <div className="account-form-heading">
          <h2>Login</h2>
          <p>Early-stage placeholder. Real account authentication comes later.</p>
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

          <Link className="phase-btn phase-btn-primary" to="/askdaft/dashboard">
            Continue
          </Link>

          <p className="account-form-note">
            No backend auth yet. This route is a polished front-end placeholder for the future client account flow.
          </p>
        </form>
      </div>

      <div className="account-benefit-grid">
        {loginBenefits.map((benefit) => (
          <AccountBenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </AuthShell>
  );
}
