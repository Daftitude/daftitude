import { useState } from "react";

export default function AgreementStatus() {
  const [agreed, setAgreed] = useState(false);

  const toggleAgreement = () => {
    setAgreed((prev) => !prev);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full">
      <h2 className="text-lg font-bold mb-2">✅ Agreement Status</h2>
      <p className="mb-3 text-sm text-gray-700">
        {agreed
          ? "🎉 All members have agreed to the latest family trust terms."
          : "⚠️ Waiting on agreement from all members."}
      </p>
      <button
        onClick={toggleAgreement}
        className={`px-4 py-2 rounded text-white ${
          agreed ? "bg-green-600" : "bg-yellow-500"
        }`}
      >
        {agreed ? "Revoke Agreement" : "Mark as Agreed"}
      </button>
    </div>
  );
}