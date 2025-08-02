// src/pages/Planner.jsx
import React, { useState } from "react";
import Calendar from "../../components/common/Calendar";
import StickyBoard from "../../components/common/StickyBoard";
import ReminderBoard from "../../components/common/ReminderBoard";
import TaskBoard from "../../components/planning/TaskBoard";
import PopoutContainer from "../../components/common/PopoutContainer";
import ReminderModal from "../../components/popouts/ReminderModal";
import StickyModal from "../../components/popouts/StickyModal";
import TaskModal from "../../components/popouts/TaskModal";

export default function Planner() {
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showStickyModal, setShowStickyModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <div className="fade-in px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">📅 Family Planner</h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Calendar Section */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Monthly Calendar</h2>
          <Calendar />
        </div>

        {/* Sticky Notes Section */}
        <div className="card relative">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Sticky Notes</h2>
            <button
              onClick={() => setShowStickyModal(true)}
              className="text-sm bg-yellow-300 text-black px-2 py-1 rounded hover:bg-yellow-400"
            >
              + Add Note
            </button>
          </div>
          <StickyBoard />
        </div>

        {/* Reminder Section */}
        <div className="card relative">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Reminders</h2>
            <button
              onClick={() => setShowReminderModal(true)}
              className="text-sm bg-blue-300 text-black px-2 py-1 rounded hover:bg-blue-400"
            >
              + Add Reminder
            </button>
          </div>
          <ReminderBoard />
        </div>

        {/* Task Section */}
        <div className="card relative col-span-1 md:col-span-2 xl:col-span-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Task List</h2>
            <button
              onClick={() => setShowTaskModal(true)}
              className="text-sm bg-green-300 text-black px-2 py-1 rounded hover:bg-green-400"
            >
              + Add Task
            </button>
          </div>
          <TaskBoard />
        </div>
      </div>

      {/* Popouts */}
      {showReminderModal && (
        <PopoutContainer onClose={() => setShowReminderModal(false)}>
          <ReminderModal close={() => setShowReminderModal(false)} />
        </PopoutContainer>
      )}
      {showStickyModal && (
        <PopoutContainer onClose={() => setShowStickyModal(false)}>
          <StickyModal close={() => setShowStickyModal(false)} />
        </PopoutContainer>
      )}
      {showTaskModal && (
        <PopoutContainer onClose={() => setShowTaskModal(false)}>
          <TaskModal close={() => setShowTaskModal(false)} />
        </PopoutContainer>
      )}
    </div>
  );
}