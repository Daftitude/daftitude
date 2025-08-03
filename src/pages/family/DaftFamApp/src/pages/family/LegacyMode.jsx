// src/pages/family/LegacyMode.jsx
import React from 'react';

const LegacyMode = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">🌳 Legacy Mode</h1>
      <p className="text-gray-300 mb-4">
        Explore your full family tree, connect across generations, and switch into any family branch view.
      </p>
      <ul className="list-disc list-inside text-gray-200">
        <li>See your family structure by branches</li>
        <li>Click into sub-families to manage local data</li>
        <li>Message, schedule, and track events across the entire legacy</li>
      </ul>
    </div>
  );
};

export default LegacyMode;
