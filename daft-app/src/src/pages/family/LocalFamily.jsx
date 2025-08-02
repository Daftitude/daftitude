// src/pages/family/LocalFamily.jsx
import React from 'react';

const LocalFamily = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">🏡 Your Local Family</h1>
      <p className="text-gray-300 mb-4">
        Manage everything within your immediate household — from check-ins to tokens.
      </p>
      <ul className="list-disc list-inside text-gray-200">
        <li>Daily Planner & Tasks</li>
        <li>Local Agreements & Token Rules</li>
        <li>Quick Messaging & Alerts</li>
      </ul>
    </div>
  );
};

export default LocalFamily;
