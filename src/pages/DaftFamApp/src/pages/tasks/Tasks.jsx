// src/pages/tasks/Tasks.jsx
import React, { useState } from "react";
import TaskBoard from "../../components/planning/TaskBoard";
import ReminderBoard from "../../components/common/ReminderBoard";
import StickyBoard from "../../components/common/StickyBoard";
import TaskModal from "../../components/popouts/TaskModal";
import ReminderModal from "../../components/popouts/ReminderModal";
import StickyModal from "../../components/popouts/StickyModal";

export default function Tasks() {
  const [modalType, setModalType] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (type, item = null) => {
    setModalType(type);
    setActiveItem(item);
  };

  const closeModal = () => {
    setModalType(null);
    setActiveItem(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">
        📝 My Productivity Hub
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400">
        Tasks, reminders, and sticky notes to stay organized and focused.
      </p>

      {/* === Task Board === */}
      <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Task List ✅</h2>
          <button
            onClick={() => openModal("task")}
            className="bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 transition"
          >
            + New Task
          </button>
        </div>
        <TaskBoard onEdit={(item) => openModal("task", item)} />
      </section>

      {/* === Reminder Board === */}
      <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Reminders ⏰</h2>
          <button
            onClick={() => openModal("reminder")}
            className="bg-amber-500 text-white px-3 py-1.5 rounded hover:bg-amber-600 transition"
          >
            + New Reminder
          </button>
        </div>
        <ReminderBoard onEdit={(item) => openModal("reminder", item)} />
      </section>

      {/* === Sticky Notes Board === */}
      <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sticky Notes 🗒️</h2>
          <button
            onClick={() => openModal("sticky")}
            className="bg-lime-600 text-white px-3 py-1.5 rounded hover:bg-lime-700 transition"
          >
            + New Note
          </button>
        </div>
        <StickyBoard onEdit={(item) => openModal("sticky", item)} />
      </section>

      {/* === Modals === */}
      {modalType === "task" && (
        <TaskModal close={closeModal} item={activeItem} />
      )}
      {modalType === "reminder" && (
        <ReminderModal close={closeModal} item={activeItem} />
      )}
      {modalType === "sticky" && (
        <StickyModal close={closeModal} item={activeItem} />
      )}
    </div>
  );
}