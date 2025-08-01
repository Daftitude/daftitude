import React from "react";
import { useMode } from "../../context/modeContext";

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
    >
      Switch to {mode === "family" ? "Legacy" : "Family"} Mode
    </button>
  );
};

export default ModeToggle;