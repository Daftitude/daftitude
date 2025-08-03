import { useState } from "react";

export default function CheckInScheduler() {
  const [checkInTime, setCheckInTime] = useState("");

  const handleChange = (e) => {
    setCheckInTime(e.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full">
      <h2 className="text-lg font-bold mb-2">📆 Check-In Scheduler</h2>
      <label className="block mb-2 text-sm text-gray-700">
        Choose check-in time:
      </label>
      <input
        type="datetime-local"
        value={checkInTime}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 text-sm"
      />
      {checkInTime && (
        <p className="mt-2 text-sm text-green-600">
          ✅ Next check-in scheduled for {new Date(checkInTime).toLocaleString()}
        </p>
      )}
    </div>
  );
}