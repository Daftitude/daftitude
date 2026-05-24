import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DashboardStatusCard } from "../../components/account";

const helpLauncherOptions = [
  {
    id: "device-help",
    icon: "🛠️",
    title: "Something is not working",
    text: "Device, app, Wi-Fi, printer, TV, console, or account issue.",
    action: "Start troubleshooting",
    route: "/askdaft#start-request",
  },
  {
    id: "safety-check",
    icon: "🛡️",
    title: "Paste message / safety check",
    text: "Texts, emails, popups, links, payment requests, or account warnings.",
    action: "Check before clicking",
    route: "/askdaft#start-request",
  },
  {
    id: "setup-help",
    icon: "📦",
    title: "Set it up for me",
    text: "New device, app, account, AI tool, smart-home, or streaming setup.",
    action: "Start setup request",
    route: "/askdaft#start-request",
  },
  {
    id: "book-help",
    icon: "☎️",
    title: "Book a call / remote help",
    text: "Talk through the issue or get guided support without guessing.",
    action: "Choose support path",
    route: "/contact?source=askdaft-dashboard-help-launcher",
  },
];

const guidedRequestSteps = [
  {
    number: "01",
    title: "Choose what needs help",
    text: "Pick a device, account, service, suspicious message, or choose Not Sure.",
  },
  {
    number: "02",
    title: "Choose what’s going on",
    text: "Select the closest issue: not working, login trouble, setup, slow, unsafe, or upgrade.",
  },
  {
    number: "03",
    title: "Explain it your way",
    text: "Type normally, paste a message, or upload a screenshot if it helps.",
  },
  {
    number: "04",
    title: "Review and book",
    text: "AskDaFT summarizes the request, suggests a support path, and lets you submit or book.",
  },
];

const guidedRequestExamples = [
  "Phone / Tablet",
  "Computer / Laptop",
  "TV / Streaming",
  "Gaming Console",
  "Printer",
  "Wi-Fi / Internet",
  "Email / Login",
  "Suspicious Message",
  "Not Sure",
];

const planComparison = [
  {
    name: "Free Account",
    price: "$0",
    bestFor: "Trying AskDaFT and saving light context.",
    included: [
      "Start help requests",
      "Save basic contact preferences",
      "Limited request history",
      "Save a few devices/accounts",
      "Basic support notes",
    ],
    notIncluded: [
      "Priority response",
      "Monthly check-ins",
      "Managed maintenance",
      "Deep security review",
      "Large installs or projects",
    ],
  },
  {
    name: "Basic",
    price: "$25–$55/mo",
    bestFor: "Light monthly support and simple repeat help.",
    included: [
      "Everything in Free",
      "Light monthly support",
      "Basic message/screenshot review",
      "Basic device/account notes",
      "Simple setup guidance",
    ],
    notIncluded: [
      "Urgent priority support",
      "Large installs",
      "Full tech management",
      "Unlimited support",
      "Hardware or software costs",
    ],
  },
  {
    name: "Priority",
    price: "$100–$150+/mo",
    bestFor: "Faster repeat help and deeper support history.",
    included: [
      "Everything in Basic",
      "Faster response window",
      "Detailed device/account tracking",
      "Remote troubleshooting sessions",
      "Upgrade recommendations",
    ],
    notIncluded: [
      "24/7 emergency support",
      "Large multi-project implementation",
      "Hardware purchases",
      "Paid software subscriptions",
      "Enterprise IT/security work",
    ],
  },
  {
    name: "Managed Partner",
    price: "$200–$275+/mo",
    bestFor: "Families, creators, or small businesses needing ongoing support.",
    included: [
      "Everything in Priority",
      "Scheduled monthly support",
      "Managed tech map",
      "Proactive cleanup recommendations",
      "Setup and upgrade planning",
    ],
    notIncluded: [
      "Hardware costs",
      "Paid tools/software",
      "Major wiring/construction",
      "Enterprise compliance work",
      "Guaranteed instant response",
    ],
  },
];

const deviceCategories = [
  {
    title: "Network",
    helper: "Internet, router, modem, extenders.",
    options: ["Router / Wi-Fi", "Modem", "Mesh Extender", "Ethernet Switch"],
  },
  {
    title: "TV & Gaming",
    helper: "Entertainment devices and consoles.",
    options: ["Smart TV", "Xbox", "PlayStation", "Roku / Fire Stick", "Apple TV", "Soundbar"],
  },
  {
    title: "Computers",
    helper: "Workstations, laptops, printers.",
    options: ["Computer", "Laptop", "Printer", "Monitor", "External Drive"],
  },
  {
    title: "Phones & Tablets",
    helper: "Mobile devices and family devices.",
    options: ["Phone", "Tablet", "Smart Watch", "Kid Device"],
  },
  {
    title: "Accounts",
    helper: "Email, shopping, streaming, cloud logins.",
    options: ["Email", "Apple ID", "Google Account", "Amazon", "Netflix", "Bank Portal"],
  },
  {
    title: "Smart Home",
    helper: "Connected home devices.",
    options: ["Amazon Alexa", "Security Camera", "Doorbell", "Thermostat", "Smart Lights"],
  },
];

const techGroups = [
  {
    id: "network",
    title: "Network",
    icon: "📡",
    description: "Everything depends on this first.",
    devices: [
      {
        id: "router",
        label: "Router / Wi-Fi",
        type: "Network",
        icon: "📡",
        status: "good",
        priority: "Core",
        room: "Living room",
        connectedTo: "Internet provider",
        issueType: "No current issue",
        upgradeNote: "Could document provider, Wi-Fi name, and mesh needs.",
        note: "Main home network. No current issue reported.",
        nextAction: "Document router name, provider, and basic network notes.",
        checks: ["Power light", "Internet light", "Wi-Fi name", "Provider outage", "Router placement"],
      },
    ],
  },
  {
    id: "living-room",
    title: "Living Room",
    icon: "🛋️",
    description: "Shared entertainment and smart devices.",
    devices: [
      {
        id: "smart-tv",
        label: "Smart TV",
        type: "Entertainment",
        icon: "📺",
        status: "upgrade",
        priority: "Medium",
        room: "Living room",
        connectedTo: "Router / Wi-Fi",
        issueType: "Works, but could be improved",
        upgradeNote: "App cleanup, remote setup, streaming login review, or better streaming device.",
        note: "Works, but may need app cleanup, login review, or streaming upgrade.",
        nextAction: "Check apps, storage, remote, and streaming account access.",
        checks: ["Wi-Fi connection", "App logins", "Storage", "Remote", "Picture / audio"],
      },
      {
        id: "xbox",
        label: "Xbox",
        type: "Gaming",
        icon: "🎮",
        status: "not-working",
        priority: "High",
        room: "Living room",
        connectedTo: "Router / Wi-Fi",
        issueType: "Connection or setup issue",
        upgradeNote: "May need storage expansion, network tuning, or account cleanup.",
        note: "Reported connection or setup issue. Needs troubleshooting.",
        nextAction: "Check power, HDMI, network, account login, and storage.",
        checks: ["Power", "HDMI", "Controller", "Network", "Xbox account", "Storage"],
      },
    ],
  },
  {
    id: "office",
    title: "Office",
    icon: "🖥️",
    description: "Work devices, printer, files, and productivity.",
    devices: [
      {
        id: "computer",
        label: "Computer",
        type: "Personal device",
        icon: "💻",
        status: "good",
        priority: "Core",
        room: "Office",
        connectedTo: "Router / Wi-Fi",
        issueType: "Healthy / needs documentation",
        upgradeNote: "Good candidate for backup, password manager, antivirus, or storage upgrade.",
        note: "Primary computer. Good candidate for saved notes and maintenance plan.",
        nextAction: "Add model, OS, backup status, and common software.",
        checks: ["OS version", "Storage", "Updates", "Backup", "Security", "Common apps"],
      },
      {
        id: "printer",
        label: "Printer",
        type: "Peripheral",
        icon: "🖨️",
        status: "not-working",
        priority: "Medium",
        room: "Office",
        connectedTo: "Computer / Wi-Fi",
        issueType: "Printing issue",
        upgradeNote: "May be better to replace if ink/driver issues keep repeating.",
        note: "Printer issues are usually driver, Wi-Fi, paper, ink, or queue related.",
        nextAction: "Check printer model, network connection, drivers, and test page.",
        checks: ["Power", "Ink / toner", "Paper", "Wi-Fi", "Driver", "Print queue"],
      },
    ],
  },
  {
    id: "personal",
    title: "Personal Devices",
    icon: "📱",
    description: "Phones, tablets, watches, and everyday access.",
    devices: [
      {
        id: "phone",
        label: "Phone",
        type: "Mobile",
        icon: "📱",
        status: "good",
        priority: "Core",
        room: "Personal",
        connectedTo: "Cellular / Wi-Fi",
        issueType: "Healthy / account recovery device",
        upgradeNote: "Could improve backups, storage, password manager, and account recovery.",
        note: "Main contact device. Good for account recovery and support communication.",
        nextAction: "Confirm backup, storage, password manager, and account recovery.",
        checks: ["Backup", "Storage", "Updates", "Recovery number", "Password manager", "MFA"],
      },
    ],
  },
  {
    id: "accounts",
    title: "Accounts",
    icon: "🔐",
    description: "Online accounts that connect everything together.",
    devices: [
      {
        id: "email",
        label: "Email Account",
        type: "Account",
        icon: "✉️",
        status: "upgrade",
        priority: "Core",
        room: "Online",
        connectedTo: "Phone / Computer",
        issueType: "Security review recommended",
        upgradeNote: "Needs MFA, recovery info, suspicious rule check, and password hygiene.",
        note: "Works, but account security and recovery should be reviewed.",
        nextAction: "Check recovery email, phone number, MFA, and suspicious rules.",
        checks: ["Recovery email", "Recovery phone", "MFA", "Forwarding rules", "Recent logins", "Password age"],
      },
    ],
  },
];

const techDevices = techGroups.flatMap((group) =>
  group.devices.map((device) => ({
    ...device,
    groupId: group.id,
    groupTitle: group.title,
  }))
);

const recentRequests = [
  {
    title: "Message / Safety Review",
    status: "Waiting for review",
    helper: "Upload screenshot or paste the message before responding.",
  },
  {
    title: "Printer setup",
    status: "Ready to schedule",
    helper: "Best path: remote help first, house call if needed.",
  },
  {
    title: "Home tech cleanup",
    status: "Estimate needed",
    helper: "Could become House Call / Install or Big / Multi-Project.",
  },
];

const nextSteps = [
  "Start a help request for the problem you have today.",
  "Save the device or account only if it will make future support easier.",
  "Use the saved tech map later to avoid repeating the same details.",
];

const planOptions = [
  {
    title: "Guest",
    price: "Free to start",
    text: "Best for one-time help or checking if AskDaFT is the right fit.",
  },
  {
    title: "Check-In",
    price: "$25–$55/mo",
    text: "Good for quick questions, message reviews, and light monthly guidance.",
  },
  {
    title: "Priority Care",
    price: "$200–$275/mo",
    text: "Best for repeat support, saved context, and less re-explaining.",
  },
];

const files = [
  { name: "screenshot-placeholder.png", status: "Needed" },
  { name: "device-notes.txt", status: "Future" },
  { name: "quote-history.pdf", status: "Future" },
];

const statusLabels = {
  good: "Good",
  "not-working": "Not Working",
  upgrade: "Wants Upgrade",
};

const statusTone = {
  good: "green",
  "not-working": "red",
  upgrade: "yellow",
};

export default function AskDaftDashboard() {
  const [selectedDeviceId, setSelectedDeviceId] = useState("xbox");
  const [activeAddCategory, setActiveAddCategory] = useState(deviceCategories[0].title);
  const [viewMode, setViewMode] = useState("simple");

  const selectedDevice = useMemo(() => {
    return techDevices.find((device) => device.id === selectedDeviceId) || techDevices[0];
  }, [selectedDeviceId]);

  const statusCounts = useMemo(() => {
    return techDevices.reduce(
      (counts, device) => {
        counts[device.status] += 1;
        return counts;
      },
      { good: 0, "not-working": 0, upgrade: 0 }
    );
  }, []);

  return (
    <main className="account-page askdaft-dashboard-page">
      <section className="account-dashboard-hero askdaft-client-hero">
        <div>
          <p className="phase-kicker">AskDaFT Dashboard</p>
          <h1>
            Get <span className="pricing-emphasis-blue">tech help</span> faster.
          </h1>
          <p>
            Start with the problem. Save devices only when they help future support.
          </p>
        </div>

        <div className="account-dashboard-actions">
          <Link className="phase-btn phase-btn-primary" to="/askdaft">
            Start New Request
          </Link>
          <Link className="phase-btn phase-btn-secondary" to="/contact?source=askdaft-dashboard">
            Contact AskDaFT
          </Link>
        </div>
      </section>

      <section className="dashboard-status-grid">
        <DashboardStatusCard
          label="Devices mapped"
          value={`${techDevices.length} items`}
          helper="Devices and accounts on the board."
          tone="blue"
        />
        <DashboardStatusCard
          label="Not working"
          value={`${statusCounts["not-working"]} items`}
          helper="Needs troubleshooting or review."
          tone="red"
        />
        <DashboardStatusCard
          label="Upgrade interest"
          value={`${statusCounts.upgrade} items`}
          helper="Works, but could be improved."
          tone="yellow"
        />
        <DashboardStatusCard
          label="Good"
          value={`${statusCounts.good} items`}
          helper="Currently healthy or documented."
          tone="green"
        />
      </section>

      <section className="askdaft-help-launcher" aria-label="Get help now">
        <div className="askdaft-help-launcher-heading">
          <p className="phase-kicker">Get Help Now</p>
          <h2>What do you need help with today?</h2>
          <p>
            Choose the closest path. You can save devices later, but getting help comes first.
          </p>
        </div>

        <div className="askdaft-help-launcher-grid">
          {helpLauncherOptions.map((option) => (
            <Link className="askdaft-help-launcher-card" to={option.route} key={option.id}>
              <span>{option.icon}</span>
              <strong>{option.title}</strong>
              <small>{option.text}</small>
              <em>{option.action}</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="askdaft-guided-request-preview" aria-label="Start a guided request">
        <div className="askdaft-guided-request-heading">
          <p className="phase-kicker">Guided Request</p>
          <h2>Start simple. AskDaFT turns it into a clear support request.</h2>
          <p>
            You do not need perfect tech words. Pick the closest path, describe what happened, and review the summary before booking.
          </p>
        </div>

        <div className="askdaft-guided-device-row" aria-label="Common support categories">
          {guidedRequestExamples.map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </div>

        <div className="askdaft-guided-step-grid">
          {guidedRequestSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="askdaft-guided-summary-card">
          <div>
            <p className="phase-kicker">Example Summary</p>
            <h3>Xbox won’t connect online</h3>
            <p>
              Device: Xbox • Issue: Not working • Location: Living room • Suggested path: Remote help or call.
            </p>
          </div>
          <Link className="phase-btn phase-btn-primary" to="/askdaft#start-request">
            Start Guided Request
          </Link>
        </div>
      </section>

      <section className="askdaft-view-mode-strip" aria-label="Dashboard view mode">
        <div>
          <p className="phase-kicker">Dashboard Mode</p>
          <h2>{viewMode === "simple" ? "Simple client view" : "Pro support view"}</h2>
          <p>
            {viewMode === "simple"
              ? "Shows the fastest help paths and only the saved setup that matters."
              : "Shows deeper support context for troubleshooting, planning, and repeat help."}
          </p>
        </div>

        <div className="askdaft-view-toggle" role="group" aria-label="Choose dashboard mode">
          <button
            type="button"
            className={viewMode === "simple" ? "is-active" : ""}
            onClick={() => setViewMode("simple")}
          >
            Simple View
          </button>
          <button
            type="button"
            className={viewMode === "pro" ? "is-active" : ""}
            onClick={() => setViewMode("pro")}
          >
            Pro View
          </button>
        </div>
      </section>

      <section className="askdaft-plan-comparison" aria-label="What your plan includes">
        <div className="askdaft-plan-comparison-heading">
          <div>
            <p className="phase-kicker">Your Plan</p>
            <h2>What’s included, and what is not.</h2>
            <p>
              One-time help is always available. Plans are for saved context, faster repeat help, scheduled support, and managed upkeep.
            </p>
          </div>
          <div className="askdaft-current-plan-card">
            <span>Current plan</span>
            <strong>Free Account</strong>
            <small>Good for getting started.</small>
          </div>
        </div>

        <div className="askdaft-plan-comparison-grid">
          {planComparison.map((plan) => (
            <article className="askdaft-plan-comparison-card" key={plan.name}>
              <div className="askdaft-plan-card-top">
                <span>{plan.price}</span>
                <h3>{plan.name}</h3>
                <p>{plan.bestFor}</p>
              </div>

              <div className="askdaft-plan-list-block included">
                <strong>Included</strong>
                <ul>
                  {plan.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="askdaft-plan-list-block not-included">
                <strong>Not included</strong>
                <ul>
                  {plan.notIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`askdaft-tech-board ${viewMode === "pro" ? "is-pro-view" : "is-simple-view"}`}>
        <article className="account-dashboard-panel askdaft-device-add-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Optional Saved Setup</p>
            <h2>Save only what you want help with.</h2>
          </div>

          <div className="askdaft-device-category-tabs" aria-label="Device categories">
            {deviceCategories.map((category) => (
              <button
                type="button"
                key={category.title}
                className={activeAddCategory === category.title ? "is-active" : ""}
                onClick={() => setActiveAddCategory(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {deviceCategories
            .filter((category) => category.title === activeAddCategory)
            .map((category) => (
              <div className="askdaft-add-device-category" key={category.title}>
                <p>{category.helper}</p>
                <div className="askdaft-add-device-grid">
                  {category.options.map((device) => (
                    <button type="button" key={device}>
                      + {device}
                    </button>
                  ))}
                </div>
              </div>
            ))}

          <div className="askdaft-device-field-preview">
            <strong>Saved items can remember:</strong>
            <span>Room</span>
            <span>Status</span>
            <span>Connected to</span>
            <span>Issue</span>
            <span>Upgrade interest</span>
            <span>Notes</span>
          </div>
        </article>

        <article className="account-dashboard-panel askdaft-tech-tree-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Saved Tech Map</p>
            <h2>Saved context for faster help.</h2>
          </div>

          <div className="askdaft-tech-tree">
            <div className="tech-tree-root">
              <span>🏠</span>
              <strong>Client Home / Setup</strong>
            </div>

            <div className="tech-tree-groups">
              {techGroups.map((group) => (
                <section className="tech-tree-group" key={group.id}>
                  <div className="tech-tree-group-heading">
                    <span>{group.icon}</span>
                    <div>
                      <strong>{group.title}</strong>
                      <small>{group.description}</small>
                    </div>
                  </div>

                  <div className="tech-tree-branches">
                    {group.devices.map((device) => (
                      <button
                        type="button"
                        key={device.id}
                        className={`tech-tree-node ${device.status} ${selectedDeviceId === device.id ? "is-selected" : ""}`}
                        onClick={() => setSelectedDeviceId(device.id)}
                      >
                        <span>{device.icon}</span>
                        <strong>{device.label}</strong>
                        <small>{statusLabels[device.status]}</small>
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>

        <article className="account-dashboard-panel askdaft-selected-device-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Selected Device</p>
            <h2>{selectedDevice.label}</h2>
          </div>

          <div className={`selected-device-status ${selectedDevice.status}`}>
            <span>{selectedDevice.icon}</span>
            <div>
              <strong>{statusLabels[selectedDevice.status]}</strong>
              <small>{selectedDevice.type}</small>
            </div>
          </div>

          <div className="selected-device-simple-summary">
            <span>{selectedDevice.room}</span>
            <span>{selectedDevice.connectedTo}</span>
            <span>{selectedDevice.priority} priority</span>
          </div>

          <div className="selected-device-pro-details">
            <p className="selected-device-pro-label">Support details</p>
          <dl className="selected-device-details">
            <div>
              <dt>Group</dt>
              <dd>{selectedDevice.groupTitle}</dd>
            </div>
            <div>
              <dt>Room / Location</dt>
              <dd>{selectedDevice.room}</dd>
            </div>
            <div>
              <dt>Priority</dt>
              <dd>{selectedDevice.priority}</dd>
            </div>
            <div>
              <dt>Connected to</dt>
              <dd>{selectedDevice.connectedTo}</dd>
            </div>
            <div>
              <dt>Issue type</dt>
              <dd>{selectedDevice.issueType}</dd>
            </div>
            <div>
              <dt>Upgrade note</dt>
              <dd>{selectedDevice.upgradeNote}</dd>
            </div>
            <div>
              <dt>Support note</dt>
              <dd>{selectedDevice.note}</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>{selectedDevice.nextAction}</dd>
            </div>
          </dl>

          <div className="selected-device-checks">
            <strong>Quick checks</strong>
            <div>
              {selectedDevice.checks.map((check) => (
                <span key={check}>{check}</span>
              ))}
            </div>
          </div>

          </div>

          <div className="device-action-row">
            <button type="button" className={`device-action ${selectedDevice.status === "good" ? "is-active" : ""}`}>
              Good
            </button>
            <button type="button" className={`device-action danger ${selectedDevice.status === "not-working" ? "is-active" : ""}`}>
              Not Working
            </button>
            <button type="button" className={`device-action upgrade ${selectedDevice.status === "upgrade" ? "is-active" : ""}`}>
              Wants Upgrade
            </button>
          </div>
        </article>
      </section>

      <section className={`askdaft-client-layout ${viewMode === "pro" ? "is-pro-view" : "is-simple-view"}`}>
        <article className="account-dashboard-panel askdaft-active-request-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Active Request</p>
            <h2>{selectedDevice.label} Support</h2>
          </div>

          <div className="askdaft-request-progress" aria-label="Request progress">
            <span className="complete">Device selected</span>
            <span className="current">{statusLabels[selectedDevice.status]}</span>
            <span>Review</span>
            <span>Next step</span>
          </div>

          <p>
            AskDaFT can use the tech map to see what device is involved, what it connects to, whether it is broken, and whether the better move is troubleshooting, upgrade planning, or setup help.
          </p>

          <div className="account-dashboard-actions">
            <Link className="phase-btn phase-btn-primary" to="/askdaft#start-request">
              Add Details
            </Link>
            <Link className="phase-btn phase-btn-ghost" to={`/contact?source=dashboard-device&device=${encodeURIComponent(selectedDevice.label)}`}>
              Ask for Help
            </Link>
          </div>
        </article>

        <article className="account-dashboard-panel askdaft-next-steps-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Next Steps</p>
            <h2>Do this next</h2>
          </div>

          <ol className="askdaft-next-step-list">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="account-dashboard-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Files & Screenshots</p>
            <h2>Support evidence</h2>
          </div>

          <div className="askdaft-file-list">
            {files.map((file) => (
              <div key={file.name}>
                <strong>{file.name}</strong>
                <span>{file.status}</span>
              </div>
            ))}
          </div>

          <p>
            Screenshots, error messages, quote notes, and support files can connect directly to each device later.
          </p>
        </article>

        <article className="account-dashboard-panel askdaft-plan-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Plan Reminder</p>
            <h2>Upgrade only when repeat help matters.</h2>
          </div>

          <div className="askdaft-plan-list">
            {planOptions.map((plan) => (
              <div key={plan.title}>
                <strong>{plan.title}</strong>
                <span>{plan.price}</span>
                <p>{plan.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="account-dashboard-panel">
          <div className="account-panel-heading">
            <p className="phase-kicker">Recent Requests</p>
            <h2>Support history</h2>
          </div>

          <div className="recent-request-list">
            {recentRequests.map((request) => (
              <div key={request.title}>
                <strong>{request.title}</strong>
                <span>{request.status}</span>
                <p>{request.helper}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="account-dashboard-panel account-dashboard-wide">
          <div className="account-panel-heading">
            <p className="phase-kicker">Dashboard Goal</p>
            <h2>Help first. Memory second.</h2>
          </div>

          <p>
            The dashboard should help people get support quickly first. Saved devices, files, notes, and the tech map are there to make future help faster without forcing users to build an inventory.
          </p>

          <div className="account-dashboard-actions">
            <Link className="phase-btn phase-btn-primary" to="/signup">
              Create Account
            </Link>
            <Link className="phase-btn phase-btn-ghost" to="/askdaft">
              Back to AskDaFT
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
