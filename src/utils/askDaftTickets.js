const STORAGE_KEY = "askdaft:tickets:v1";

export const ASKDAFT_TICKET_STATUSES = {
  DRAFT: "Draft",
  SUBMITTED: "Submitted",
  RECEIVED: "Received",
  NEEDS_INFO: "Needs Info",
  DISCOVERY: "Discovery",
  ESTIMATE_READY: "Estimate Ready",
  APPROVED: "Approved",
  SCHEDULED: "Scheduled",
  IN_PROGRESS: "In Progress",
  WAITING_ON_CLIENT: "Waiting on Client",
  RESOLVED: "Resolved",
  FOLLOW_UP_AVAILABLE: "Follow-Up Available",
  CLOSED: "Closed",
};

export function createTicketId() {
  const now = new Date();
  const datePart = now
    .toISOString()
    .slice(2, 10)
    .replaceAll("-", "");

  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();

  return `ASK-${datePart}-${randomPart}`;
}

export function createAskDaftTicket({
  mode,
  requestType,
  selectedType,
  issue,
  device,
  supportPath,
  zipCode,
  description,
  alreadyTried,
  multipleDevices,
  saveContext,
  estimate,
  scopeLevel,
  agreements,
  contactInfo,
}) {
  const now = new Date().toISOString();
  const ticketId = createTicketId();

  return {
    id: ticketId,
    status: ASKDAFT_TICKET_STATUSES.SUBMITTED,
    mode,
    requestType,
    requestLabel: selectedType?.label || "Support Request",
    issue,
    device,
    supportPath,
    contact: {
      firstName: contactInfo?.firstName?.trim() || "",
      lastName: contactInfo?.lastName?.trim() || "",
      phone: contactInfo?.phone?.trim() || "",
      email: contactInfo?.email?.trim() || "",
      preferredContact: contactInfo?.preferredContact || "Text or email",
      bestTime: contactInfo?.bestTime || "Anytime",
      consent: Boolean(contactInfo?.consent),
    },
    zipCode: zipCode || "",
    description: description.trim(),
    alreadyTried: alreadyTried || [],
    multipleDevices: Boolean(multipleDevices),
    saveContext: Boolean(saveContext),
    estimate: {
      startingCommitment: estimate?.startingCommitment || "",
      range: estimate?.range || "",
      confidence: estimate?.confidence || "",
    },
    scope: {
      label: scopeLevel?.label || "",
      tone: scopeLevel?.tone || "",
      text: scopeLevel?.text || "",
    },
    agreements: {
      minimum: Boolean(agreements?.minimum),
      priceChange: Boolean(agreements?.priceChange),
      safety: Boolean(agreements?.safety),
    },
    recommendation: {
      bandAid: "Lowest-cost practical next step when you need progress fast.",
      best: "Balanced fix for cost, time, reliability, and long-term usefulness.",
      askDaft: "AskDaFT will recommend the best path after reviewing the ticket details.",
    },
    timeline: [
      {
        label: "Submitted",
        text: "Ticket was created and is ready for AskDaFT review.",
        at: now,
      },
    ],
    createdAt: now,
    updatedAt: now,
  };
}

export function loadAskDaftTickets() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Unable to load AskDaFT tickets:", error);
    return [];
  }
}

export function saveAskDaftTickets(tickets) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    return true;
  } catch (error) {
    console.warn("Unable to save AskDaFT tickets:", error);
    return false;
  }
}

export function saveAskDaftTicket(ticket) {
  const tickets = loadAskDaftTickets();
  const nextTickets = [ticket, ...tickets.filter((item) => item.id !== ticket.id)];

  saveAskDaftTickets(nextTickets);
  return nextTickets;
}

export function getLatestAskDaftTicket() {
  return loadAskDaftTickets()[0] || null;
}
