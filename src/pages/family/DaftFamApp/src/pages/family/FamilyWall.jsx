// src/pages/family/FamilyWall.jsx
import React from 'react';

const FamilyWall = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">📸 Family Wall</h1>
      <p className="text-gray-300 mb-4">
        A shared timeline for posting photos, celebrations, announcements, and more.
      </p>
      <ul className="list-disc list-inside text-gray-200">
        <li>Upload & browse family memories</li>
        <li>Tag members and add captions</li>
        <li>React, comment, or archive moments</li>
      </ul>
    </div>
  );
};

export default FamilyWall;