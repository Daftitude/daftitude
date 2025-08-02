// src/components/RemindersBoard.jsx
import { useState } from 'react';

export default function RemindersBoard() {
  const [reminders, setReminders] = useState([]);
  const [text, setText] = useState('');

  const addReminder = () => {
    if (text.trim()) {
      setReminders([...reminders, { id: Date.now(), text }]);
      setText('');
    }
  };

  const removeReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-2">⏰ Reminders</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new reminder..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addReminder}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {reminders.map((reminder) => (
          <li
            key={reminder.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{reminder.text}</span>
            <button
              onClick={() => removeReminder(reminder.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}