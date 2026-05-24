// AskDaFT page data
// Static service options, pricing, resources, and FAQs live here.

export const onboardingIssues = [
  {
    id: "senior-tech-help",
    title: "I need help with tech",
    audience: "Patient help",
    icon: "🤝",
    text: "Phones, email, passwords, printers, TVs, portals, and simple setup.",
    examples: ["My phone is confusing", "I need help logging in", "My printer or TV will not work"],
    details: ["Phone", "Computer", "TV", "Printer", "Email", "Amazon Alexa", "Password/login", "Portal", "I don't know"],
    placeholder: "Example: I need help with my phone and email. I am not sure what setting changed.",
    price: {
      base: "$60–$125",
      selectedDetails: "$0–$50 depending on how many devices/accounts are involved",
      supportStyle: "Call or remote help may change the final quote",
      note: "Best for patient walkthroughs, setup help, and basic troubleshooting.",
    },
    included: ["Device/account review", "Patient walkthrough", "Simple next-step notes"],
    allowScreenshot: true,
    requestType: "senior-tech-help",
  },
  {
    id: "paste-a-message",
    title: "Paste message / safety check",
    audience: "Paste & check",
    icon: "💬",
    text: "Paste a text, email, popup, DM, warning, screenshot text, or quick question.",
    examples: ["Is this a scam?", "Should I click this?", "Can you explain this message?"],
    details: ["Text message", "Email", "Social media DM", "Popup", "App message", "Account warning", "Payment request", "Screenshot text", "I don't know"],
    placeholder: "Example: Paste the message, email, popup, warning, or question here. I want to know what it means and whether it is safe.",
    price: {
      base: "$25–$50",
      selectedDetails: "$0–$100 if extra review, account cleanup, password resets, or multiple messages are involved",
      supportStyle: "Fast guest review is usually best first",
      note: "Best for suspicious messages, quick questions, popups, account warnings, and safety checks before you click or reply.",
    },
    included: ["Message/safety review", "Risk explanation", "Suggested safe next step"],
    allowScreenshot: true,
    requestType: "message-safety-review",
  },
  {
    id: "device-not-working",
    title: "Something is not working",
    audience: "Not working",
    icon: "🛠️",
    text: "Wi-Fi, printer, computer, phone, app, smart-home, or account issues.",
    examples: ["Wi-Fi is down", "App will not load", "Account is locked"],
    details: ["Wi-Fi", "Printer", "Computer", "Phone", "Tablet", "App", "Smart-home device", "Account/login", "I don't know"],
    placeholder: "Example: My Wi-Fi/printer/app is not working. It started after an update or change, but I am not sure why.",
    price: {
      base: "$60–$125",
      selectedDetails: "$25–$50 if multiple devices, accounts, or network pieces are involved",
      supportStyle: "Remote help may be best if screen guidance is needed",
      note: "Best for troubleshooting blocked devices, apps, Wi-Fi, printers, and login problems.",
    },
    included: ["Troubleshooting", "Likely cause review", "Fix path or next recommendation"],
    allowScreenshot: true,
    requestType: "device-not-working",
  },
  {
    id: "setup-teach",
    title: "Set it up for me",
    audience: "Setup help",
    icon: "📘",
    text: "New device, app, AI tool, smart-home device, account, or creator setup.",
    examples: ["Set up my smart TV", "Teach me ChatGPT", "Help me organize my apps"],
    details: ["New phone", "New computer", "Smart TV", "AI tool", "Email/account", "Streaming/creator setup", "Smart-home device", "I don't know"],
    placeholder: "Example: I need help setting this up and I want to understand how to use it after setup.",
    price: {
      base: "$100–$250",
      selectedDetails: "$25–$100 if setup includes multiple apps, accounts, devices, or training time",
      supportStyle: "Call or remote walkthrough usually works best",
      note: "Best for setup plus teaching, not just clicking through the setup screen.",
    },
    included: ["Setup support", "Walkthrough teaching", "Basic usage guidance"],
    allowScreenshot: false,
    requestType: "setup-and-teach",
  },
  {
    id: "monthly-support",
    title: "House Call / Install",
    audience: "In person",
    icon: "🏠",
    text: "In-home help, installs, device setup, smart-home support, and dedicated tech help.",
    examples: ["Install a device", "Set up multiple devices", "Help at the house"],
    details: ["In-home visit", "Install/setup", "Smart-home device", "TV/streaming setup", "Printer/setup", "Multiple devices", "Family tech help", "I don't know"],
    placeholder: "Example: I need help at the house installing or setting up devices, smart-home tools, a TV, printer, or multiple tech items.",
    price: {
      base: "$100–$275+",
      selectedDetails: "Depends on travel, install complexity, visit length, number of devices, and parts/tools needed",
      supportStyle: "House calls and installs usually need confirmation before final quote",
      note: "Best for in-home setup, installs, smart-home help, multi-device support, and hands-on tech help.",
    },
    included: ["Visit planning", "Install/setup checklist", "Device/account review"],
    allowScreenshot: false,
    requestType: "house-call-install",
  },
  {
    id: "big-multi-project",
    title: "Big / Multi-Project",
    audience: "Larger job",
    icon: "🧩",
    text: "Larger tech projects with multiple parts, phases, devices, rooms, tools, or business needs.",
    examples: ["Set up a full home office", "Fix multiple tech issues", "Plan a larger setup"],
    details: ["Home office", "Multiple rooms", "Business setup", "Creator setup", "Network/Wi-Fi plan", "Smart-home project", "Account/system cleanup", "I don't know"],
    placeholder: "Example: I have several tech things I need help with. I need help planning the work, pricing it, and breaking it into steps.",
    price: {
      base: "$250+",
      selectedDetails: "Depends on scope, number of phases, devices, rooms, systems, research, installs, and follow-up work",
      supportStyle: "Big projects usually need a discovery call or project quote before starting",
      note: "Best for multi-step projects, business setup, full home office setup, smart-home planning, creator setups, or several problems at once.",
    },
    included: ["Scope review", "Project breakdown", "Estimate or phased plan"],
    allowScreenshot: true,
    requestType: "big-multi-project",
  },
];

export const supportStyles = [
  { id: "guest", label: "Continue as guest", helper: "Start without an account." },
  { id: "call", label: "I want a call", helper: "Talk through the problem." },
  { id: "remote", label: "Remote help", helper: "Best for screen guidance." },
  { id: "login", label: "Returning client", helper: "Use account history later." },
];

export const askDaftPriceCards = [
  {
    title: "Quick Help",
    range: "$25–$50",
    badge: "Fastest",
    bestFor: "Paste a message, ask a quick question, check a popup, or get a simple explanation.",
    includes: ["Short review", "Plain-English answer", "Recommended next step"],
  },
  {
    title: "Standard Help",
    range: "$60–$125",
    badge: "Most common",
    bestFor: "Troubleshooting, account help, phone/computer support, printer/Wi-Fi issues, or app confusion.",
    includes: ["Focused support", "Troubleshooting", "Simple follow-up notes"],
  },
  {
    title: "Setup + Teach",
    range: "$100–$250",
    badge: "Best value",
    bestFor: "New devices, smart TVs, AI tools, smart-home setup, email/account setup, or learning how to use something.",
    includes: ["Setup support", "Walkthrough teaching", "Confidence check"],
  },
  {
    title: "Full Tech Rescue",
    range: "$250+",
    badge: "Premium",
    bestFor: "Multi-device cleanup, account sorting, deeper tech problem review, messy setup help, or in-person work that needs a clearer plan.",
    includes: ["Scope review", "Cleanup plan", "Device/account review"],
  },
  {
    title: "Big / Multi-Project",
    range: "$250+",
    badge: "Custom",
    bestFor: "Bigger projects with multiple devices, rooms, tools, installs, business needs, setup phases, or planning requirements.",
    includes: ["Scope review", "Project breakdown", "Estimate or phased plan"],
  },
];

export const subscribeSavePlans = [
  {
    title: "Monthly Check-In",
    price: "$25–$55/mo",
    rhythm: "1 visit / month • up to 1 hour",
    save: "Best for one focused tech issue, light upkeep, or small questions before they become bigger problems.",
    includes: ["One light monthly check-in", "Quick message review", "Simple tech questions"],
  },
  {
    title: "Basic Tech Support",
    price: "$100–$150/mo",
    rhythm: "2 visits / month • up to 1 hour each",
    save: "Best for regular device, app, account, printer, or smart-home help.",
    includes: ["Two monthly support visits", "Saved device/account notes", "Basic follow-up support"],
  },
  {
    title: "Priority Tech Support",
    price: "$200–$275/mo",
    rhythm: "2 visits / month • up to 3 hours per visit",
    save: "Best for recurring setup, cleanup, troubleshooting, faster routing, and less re-explaining.",
    includes: ["Longer support visits", "Support history", "Priority familiarity"],
  },
  {
    title: "Managed Tech Partner",
    price: "Custom",
    rhythm: "Custom support scope",
    save: "Best for ongoing tech partner support, planning, cleanup, and deeper household or small-business support.",
    includes: ["Custom scope", "Planning/setup/cleanup", "Ongoing support roadmap"],
  },
];

export const estimateCards = [
  {
    title: "Quick Help / Message Check",
    range: "$25–$50",
    bestFor: "Simple questions, suspicious messages, popups, quick app/account confusion, or a short tech explanation.",
    includes: ["Basic review", "Plain-English explanation", "Suggested next step"],
  },
  {
    title: "Standard Help Session",
    range: "$60–$125",
    bestFor: "Troubleshooting, account help, device setup, app issues, Wi-Fi/printer problems, or walkthrough support.",
    includes: ["Focused support session", "Setup or troubleshooting", "Simple notes after help"],
  },
  {
    title: "Setup + Teach",
    range: "$100–$250",
    bestFor: "New devices, smart TVs, AI tools, smart-home devices, email/account setup, or guided learning.",
    includes: ["Setup help", "Patient walkthrough", "How-to guidance"],
  },
  {
    title: "Full Tech Rescue",
    range: "$250+",
    bestFor: "In-home help, installs, family tech support, multiple devices, smart-home setup, account cleanup, or dedicated support.",
    includes: ["Scope review", "Cleanup plan", "Device/account review"],
  },
  {
    title: "Big / Multi-Project",
    range: "$250+",
    bestFor: "Larger projects with multiple moving parts, rooms, devices, accounts, installs, research, planning, or business needs.",
    includes: ["Scope review", "Project breakdown", "Estimate or phased plan"],
  },
];

export const missions = [
  {
    title: "Message / Safety Review",
    text: (
      <>
        Review <span className="pricing-emphasis-red">suspicious messages</span>, links, popups, emails, account warnings, payment requests, or quick tech questions before you click or respond.
      </>
    ),
    tag: "Safety",
    requestType: "message-safety-review",
  },
  {
    title: "Device / App Troubleshooting",
    text: (
      <>
        Fix <span className="pricing-emphasis-red">broken</span> devices, apps, Wi-Fi, printers, login issues, or setup problems.
      </>
    ),
    tag: "Fix it",
    requestType: "device-not-working",
  },
  {
    title: "Setup / Teach",
    text: (
      <>
        Set up tools, apps, accounts, devices, or AI workflows and learn how to use them with <span className="pricing-emphasis-green">confidence</span>.
      </>
    ),
    tag: "Teach",
    requestType: "setup-and-teach",
  },
  {
    title: "House Call / Install",
    text: (
      <>
        In-home <span className="pricing-emphasis-green">setup</span>, install help, smart-home support, multi-device help, and hands-on tech support.
      </>
    ),
    tag: "In person",
    requestType: "house-call-install",
  },
  {
    title: "Business Tech Help",
    text: (
      <>
        Help with <span className="pricing-emphasis-blue">systems</span>, tools, accounts, automations, setup, and small-business tech decisions.
      </>
    ),
    tag: "Business",
    requestType: "business-tech-help",
  },
  {
    title: "Big / Multi-Project Help",
    text: (
      <>
        Larger <span className="pricing-emphasis-blue">multi-step tech projects</span> that need planning, breakdown, setup, install support, or phased pricing instead of a quick single request.
      </>
    ),
    tag: "Project",
    requestType: "big-multi-project",
  },
  {
    title: "AI Tools Help",
    text: (
      <>
        Learn how to use ChatGPT, AI apps, prompts, automations, and <span className="pricing-emphasis-green">AI workflows</span>.
      </>
    ),
    tag: "AI",
    requestType: "ai-tools-help",
  },
  {
    title: "VA / Government Portal Help",
    text: (
      <>
        Technical help navigating <span className="pricing-emphasis-yellow">portals</span>, login issues, uploads, and account steps.
      </>
    ),
    tag: "Portal help",
    requestType: "portal-help",
  },
];

export const connectedResources = [
  {
    title: "Scam and cybersecurity basics",
    text: "Learn how to spot suspicious links, fake support messages, account warnings, and unsafe requests.",
    href: "/cybersecurity",
  },
  {
    title: "AI tools and automation",
    text: "Understand how AI tools can help with writing, research, planning, workflow cleanup, and daily tasks.",
    href: "/ai",
  },
  {
    title: "Tech Hub resources",
    text: "Browse practical technology guides, updates, and support resources connected to DaFTitude.",
    href: "/techhub",
  },
];

export const faqs = [
  {
    question: "Do I need an account?",
    answer: "No. You can start as a guest. Accounts are useful later for saved devices, request history, subscriptions, and repeat help.",
  },
  {
    question: "Should I send passwords?",
    answer: "No. Do not send passwords. If login is needed during support, you enter it yourself.",
  },
  {
    question: "Are prices final?",
    answer: "No. Prices are planning ranges. Final quotes depend on scope, urgency, number of devices/accounts, travel, tools, and project complexity.",
  },
  {
    question: "Can I upload screenshots?",
    answer: "Yes, when relevant. Screenshots are useful for messages, popups, warnings, error screens, and confusing app/account issues.",
  },
];
