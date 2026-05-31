const TECH_WORDS = new Set([
  "wifi",
  "wi-fi",
  "internet",
  "printer",
  "tv",
  "phone",
  "computer",
  "app",
  "apps",
  "console",
  "router",
  "smart-home",
  "device",
  "devices",
  "email",
  "emails",
  "text",
  "texts",
  "popup",
  "popups",
  "link",
  "links",
  "account",
  "accounts",
  "ai",
  "tool",
  "streaming",
  "screen",
  "remote",
  "password",
  "login",
]);

const ACTION_WORDS = new Set([
  "fix",
  "help",
  "setup",
  "set",
  "teach",
  "learn",
  "care",
  "maintained",
  "maintain",
  "support",
  "guided",
  "start",
  "choose",
  "call",
  "house",
  "in-person",
  "hands-on",
  "cleanup",
  "updates",
  "review",
  "recurring",
  "shortcut",
]);

const RISK_WORDS = new Set([
  "scam",
  "scams",
  "suspicious",
  "payment",
  "payments",
  "request",
  "requests",
  "risk",
  "unsafe",
  "virus",
  "hacked",
  "locked",
  "error",
  "problem",
  "problems",
  "issue",
  "issues",
]);

const CAUTION_WORDS = new Set([
  "price",
  "pricing",
  "cost",
  "costs",
  "monthly",
  "minimum",
  "starts",
  "warning",
  "warnings",
  "review",
  "check",
  "caution",
]);

const normalizeWord = (word) => {
  return word
    .toLowerCase()
    .replace(/[.,!?;:()[\]{}"'`]/g, "");
};

const getClassName = (token) => {
  const cleaned = normalizeWord(token);

  if (!cleaned) return "";

  if (token.includes("$") || CAUTION_WORDS.has(cleaned)) {
    return "reading-caution-word";
  }

  if (RISK_WORDS.has(cleaned)) {
    return "reading-risk-word";
  }

  if (ACTION_WORDS.has(cleaned)) {
    return "reading-action-word";
  }

  if (TECH_WORDS.has(cleaned)) {
    return "reading-tech-word";
  }

  return "";
};

export default function ReadingHighlighter({ children }) {
  const text = String(children ?? "");
  const tokens = text.match(/([A-Za-z0-9$+\-/']+|[^A-Za-z0-9$+\-/']+)/g) || [];

  return (
    <>
      {tokens.map((token, index) => {
        const className = getClassName(token);

        if (!className) {
          return token;
        }

        return (
          <span className={className} key={`${token}-${index}`}>
            {token}
          </span>
        );
      })}
    </>
  );
}
