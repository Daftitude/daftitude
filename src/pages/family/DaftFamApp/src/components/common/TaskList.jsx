// src/components/TaskList.jsx
import React, { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Clean room', completed: false },
    { id: 2, text: 'Finish homework', completed: false },
    { id: 3, text: 'Walk the dog', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 mt-6 shadow-xl">
      <h3 className="text-xl font-semibold mb-4">✅ Family Task List</h3>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task..."
          className="flex-grow border px-3 py-2 rounded-l-md focus:outline-none"
        />
        <button
          onClick={addTask}
          className="bg-indigo-500 text-white px-4 rounded-r-md hover:bg-indigo-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-md ${
              task.completed ? 'bg-green-100 line-through text-gray-500' : 'bg-gray-100'
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className="cursor-pointer flex-1"
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-sm text-red-500 hover:text-red-700 ml-3"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}