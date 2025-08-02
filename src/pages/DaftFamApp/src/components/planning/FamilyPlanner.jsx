import { useState } from "react";

export default function FamilyPlanner() {
  const [events, setEvents] = useState([
    { id: 1, title: "Soccer Practice", date: "2025-07-23" },
    { id: 2, title: "Grocery Trip", date: "2025-07-24" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  const handleAdd = () => {
    if (!newEvent.title || !newEvent.date) return;
    const id = events.length + 1;
    setEvents([...events, { id, ...newEvent }]);
    setNewEvent({ title: "", date: "" });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full">
      <h2 className="text-lg font-bold mb-3">📅 Family Planner</h2>

      <ul className="mb-4 space-y-2">
        {events.map((event) => (
          <li key={event.id} className="bg-gray-100 p-2 rounded text-sm">
            {event.date} – {event.title}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Event Title"
          className="border rounded p-1 flex-1"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          className="border rounded p-1"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}