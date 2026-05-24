import { Link } from "react-router-dom";
import { AccountBenefitCard, AuthShell } from "../../components/account";

const signupBenefits = [
  {
    icon: "💾",
    title: "Save devices",
    text: "Store common devices, accounts, household tech, and setup notes.",
  },
  {
    icon: "🛡️",
    title: "Safer repeat help",
    text: "Keep support organized without sending passwords or starting from scratch.",
  },
  {
    icon: "🔁",
    title: "Subscribe & save",
    text: "Use account history for repeat help, monthly care, and better continuity.",
  },
];

export default function Signup() {
  return (
    <AuthShell
      eyebrow="Create AskDaFT Account"
      title={
        <>
          Create an account when repeat <span className="pricing-emphasis-green">help</span> matters.
        </>
      }
      subtitle="You can always start as a guest. Accounts are for saved setup, support history, subscriptions, and faster future requests."
      primaryAction={{ href: "/askdaft/dashboard", label: "Preview Account" }}
      secondaryAction={{ href: "/askdaft", label: "Start as Guest" }}
    >
      <div className="account-form-card">
        <div className="account-form-heading">
          <h2>Sign Up</h2>
          <p>Early-stage placeholder for the future AskDaFT client account system.</p>
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

          <Link className="phase-btn phase-btn-primary" to="/askdaft/dashboard">
            Create Preview Account
          </Link>

          <p className="account-form-note">
            Real signup, verification, and saved account data will be connected later.
          </p>
        </form>
      </div>

      <div className="account-benefit-grid">
        {signupBenefits.map((benefit) => (
          <AccountBenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </AuthShell>
  );
}
