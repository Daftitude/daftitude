// src/components/TaskBoard.jsx
import React, { useState } from 'react';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Take out trash', assignedTo: 'Kyhl', completed: false },
    { id: 2, title: 'Check-in with Dad', assignedTo: 'Kyhl', completed: true },
    { id: 3, title: 'Mow lawn', assignedTo: 'Dad', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-2">📋 Family Task Board</h3>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-xl border ${
              task.completed ? 'bg-green-100 dark:bg-green-900 text-green-800' : 'bg-zinc-100 dark:bg-zinc-700'
            }`}
          >
            <span className="font-medium">{task.title} <span className="text-sm text-gray-500">({task.assignedTo})</span></span>
            <button
              onClick={() => toggleTask(task.id)}
              className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
            >
              {task.completed ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskBoard;
