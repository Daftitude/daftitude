// src/components/parent/ParentBadgeCreator.jsx
import React, { useState, useEffect } from 'react';

const ParentBadgeCreator = ({ onCreate }) => {
  const [badgeName, setBadgeName] = useState('');
  const [badgeType, setBadgeType] = useState('K');
  const [badgeValue, setBadgeValue] = useState(10);
  const [badgeDescription, setBadgeDescription] = useState('');

  const handleCreateBadge = () => {
    const badge = {
      name: badgeName,
      tokenType: badgeType,
      threshold: badgeValue,
      description: badgeDescription,
    };
    onCreate(badge);
    setBadgeName('');
    setBadgeType('K');
    setBadgeValue(10);
    setBadgeDescription('');
  };

  return (
    <div className="badge-creator-section p-4 bg-gray-900 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-bold text-yellow-300 flex items-center">
        🧰 Create Custom Badge
      </h3>
      <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-2 md:space-y-0">
        <div className="flex flex-col w-full">
          <label className="text-sm text-white mb-1">Badge Name</label>
          <input
            type="text"
            placeholder="e.g. Kind Helper"
            value={badgeName}
            onChange={(e) => setBadgeName(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-white mb-1">Type</label>
          <select
            value={badgeType}
            onChange={(e) => setBadgeType(e.target.value)}
            className="input-style"
          >
            <option value="K">K</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="KD">KD</option>
            <option value="KDM">KDM</option>
          </select>
        </div>
        <div className="flex flex-col w-20">
          <label className="text-sm text-white mb-1">Value</label>
          <input
            type="number"
            value={badgeValue}
            onChange={(e) => setBadgeValue(Number(e.target.value))}
            className="input-style"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-white mb-1">Description <span className="text-gray-400 text-xs">(optional)</span></label>
        <textarea
          value={badgeDescription}
          onChange={(e) => setBadgeDescription(e.target.value)}
          className="input-style h-20 resize-none"
          placeholder="Add a short description..."
        />
      </div>
      <button
        onClick={handleCreateBadge}
        className="btn-primary self-start mt-2"
      >
        ➕ Add Badge
      </button>
    </div>
  );
};

export default ParentBadgeCreator;