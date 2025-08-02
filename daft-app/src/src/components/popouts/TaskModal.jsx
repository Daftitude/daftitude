// src/components/popouts/TaskModal.jsx
import { useState } from 'react';

export default function TaskModal({ onClose }) {
  const [task, setTask] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      alert(`📝 Task Created: "${task}" for ${assignedTo || 'unassigned'}`);
      setTask('');
      setAssignedTo('');
      onClose();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-[26rem] max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">📝 Add New Task</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-lg font-bold">✕</button>
      </div>

      <input
        type="text"
        placeholder="Task description..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-3"
      />

      <input
        type="text"
        placeholder="Assign to (optional)..."
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
      />

      <button
        onClick={handleAddTask}
        className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
      >
        Add Task
      </button>
    </div>
  );
}