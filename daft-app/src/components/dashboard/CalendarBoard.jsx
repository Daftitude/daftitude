// src/components/CalendarBoard.jsx
import { useState } from 'react';

const initialEvents = [
  { id: 1, title: 'Kyhl-Mom Trust Check-In', date: '2025-07-28' },
  { id: 2, title: 'Dad Burn Cool-Off Ends', date: '2025-08-01' },
  { id: 3, title: 'Public Trust Vote Refresh', date: '2025-08-05' },
  { id: 4, title: 'DBA Window Reset', date: '2025-10-01' },
];

export default function CalendarBoard() {
  const [events] = useState(initialEvents);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-4">📆 Family Calendar</h2>
      <ul className="space-y-2">
        {events.map(event => (
          <li key={event.id} className="flex justify-between bg-blue-50 p-2 rounded">
            <span>{event.title}</span>
            <span className="text-gray-600 text-sm">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}