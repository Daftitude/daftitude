// src/components/Calendar.jsx
import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from 'date-fns';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="text-gray-500 hover:text-gray-800">&lt;</button>
      <h2 className="text-xl font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
      <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="text-gray-500 hover:text-gray-800">&gt;</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const start = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-semibold text-sm">
          {format(addDays(start, i), 'EEE')}
        </div>
      );
    }
    return <div className="grid grid-cols-7 text-gray-700 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const date = startDate;
    const rows = [];

    while (date <= endDate) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const cloneDate = new Date(date);
        days.push(
          <div
            key={date}
            className={`p-2 h-20 text-center border rounded-lg cursor-pointer ${
              !isSameMonth(date, monthStart)
                ? 'text-gray-300'
                : isSameDay(date, selectedDate)
                ? 'bg-indigo-500 text-white'
                : 'hover:bg-indigo-100'
            }`}
            onClick={() => setSelectedDate(cloneDate)}
          >
            {format(date, 'd')}
          </div>
        );
        date.setDate(date.getDate() + 1);
      }
      rows.push(<div className="grid grid-cols-7 gap-1" key={date}>{days}</div>);
    }

    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 mt-6 shadow-xl">
      <h3 className="text-xl font-semibold mb-4">📅 Family Calendar</h3>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}