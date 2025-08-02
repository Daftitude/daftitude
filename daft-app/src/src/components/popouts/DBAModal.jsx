// src/components/popouts/DBAModal.jsx
export default function DBAModal({ onClose }) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">📄 DBA Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-lg font-bold">✕</button>
        </div>
        <p className="text-sm text-gray-700 mb-2">
          This modal shows historical DBA agreement information, signatures, and timestamps.
        </p>
        <p className="text-xs text-gray-500 italic">
          (Eventually connects to TrustContract logs)
        </p>
      </div>
    );
  }