// src/components/StickyBoard.jsx
import React, { useState } from 'react';

const colors = ["bg-yellow-200", "bg-pink-200", "bg-blue-200", "bg-green-200"];

const StickyBoard = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { text: input, color: colors[colorIndex % colors.length] }]);
      setInput("");
      setColorIndex(colorIndex + 1);
    }
  };

  const deleteNote = (index) => {
    const updated = [...notes];
    updated.splice(index, 1);
    setNotes(updated);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">📝 Sticky Board</h3>
      <div className="flex mb-4">
        <input
          className="flex-grow border px-3 py-2 rounded-l-md focus:outline-none"
          type="text"
          placeholder="Write a sticky note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-indigo-500 text-white px-4 rounded-r-md hover:bg-indigo-600"
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`${note.color} p-3 rounded-xl shadow-md relative text-sm break-words`}
          >
            {note.text}
            <button
              onClick={() => deleteNote(index)}
              className="absolute top-1 right-2 text-xs text-gray-600 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyBoard;
