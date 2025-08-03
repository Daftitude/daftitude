// src/components/CheckInLog.jsx
import { useState } from 'react';

export default function CheckInLog() {
  const [logs, setLogs] = useState([
    { id: 1, name: 'Kyhl', note: 'Helped clean garage', date: '2025-07-20' },
    { id: 2, name: 'Dad', note: 'Went jogging 30 min', date: '2025-07-21' },
  ]);
  const [newNote, setNewNote] = useState('');

  const handleAdd = () => {
    if (newNote.trim()) {
      const newEntry = {
        id: logs.length + 1,
        name: 'You',
        note: newNote,
        date: new Date().toISOString().split('T')[0],
      };
      setLogs([newEntry, ...logs]);
      setNewNote('');
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-3">📍 Check-In Log</h2>
      <div className="flex space-x-2 mb-3">
        <input
          className="flex-grow border rounded px-3 py-1"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="What did you do today?"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Log
        </button>
      </div>
      <ul className="space-y-2 max-h-48 overflow-y-auto">
        {logs.map((log) => (
          <li key={log.id} className="bg-gray-100 p-2 rounded">
            <p className="text-sm">{log.note}</p>
            <div className="text-xs text-gray-600">{log.name} - {log.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}