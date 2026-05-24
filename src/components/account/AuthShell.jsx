import { Link } from "react-router-dom";

export default function AuthShell({
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  children,
}) {
  return (
    <main className="account-page">
      <section className="account-auth-shell">
        <div className="account-auth-copy">
          <p className="phase-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <div className="account-auth-actions">
            {primaryAction && (
              <Link className="phase-btn phase-btn-primary" to={primaryAction.href}>
                {primaryAction.label}
              </Link>
            )}

            {secondaryAction && (
              <Link className="phase-btn phase-btn-secondary" to={secondaryAction.href}>
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>

        <div className="account-auth-panel">{children}</div>
      </section>
    </main>
  );
}
