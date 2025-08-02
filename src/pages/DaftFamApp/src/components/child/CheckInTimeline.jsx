import React, { useState, useEffect } from 'react';

const mockCheckIns = [
  { time: '08:00 AM', person: 'Kyhl', note: 'Morning check-in' },
  { time: '12:30 PM', person: 'Dad', note: 'Lunch update' },
  { time: '06:00 PM', person: 'Mom', note: 'Evening review' },
];

export default function CheckInTimeline() {
  const [checkIns, setCheckIns] = useState(() => {
    const saved = localStorage.getItem('checkIns');
    return saved ? JSON.parse(saved) : mockCheckIns;
  });

  useEffect(() => {
    localStorage.setItem('checkIns', JSON.stringify(checkIns));
  }, [checkIns]);

  const handleClear = () => setCheckIns([]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">📅 Check-In Timeline</h2>
      <ul className="space-y-3 max-h-60 overflow-y-auto">
        {checkIns.map((entry, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-gray-700">
              <strong>{entry.time}</strong> — {entry.person}: <em>{entry.note}</em>
            </p>
          </li>
        ))}
      </ul>

      {checkIns.length > 0 && (
        <button
          onClick={handleClear}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Clear Timeline
        </button>
      )}
    </div>
  );
}