// src/components/GasLevelSlider.jsx
import React, { useState } from 'react';

const GasLevelSlider = () => {
  const [gasLevel, setGasLevel] = useState(30);

  const getLabel = () => {
    if (gasLevel <= 30) return '🟢 Low (Calm)';
    if (gasLevel <= 70) return '🟡 Medium (Watchful)';
    return '🔴 High (Tense)';
  };

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-2">⛽ Gas Level</h3>
      <p className="text-sm text-gray-500 mb-1">Emotional Bandwidth Status</p>
      <input
        type="range"
        min="0"
        max="100"
        value={gasLevel}
        onChange={(e) => setGasLevel(Number(e.target.value))}
        className="w-full mb-2"
      />
      <p className={`text-center font-bold text-lg ${
        gasLevel <= 30 ? 'text-green-500' : gasLevel <= 70 ? 'text-yellow-500' : 'text-red-500'
      }`}>{getLabel()}</p>
    </div>
  );
};

export default GasLevelSlider;
