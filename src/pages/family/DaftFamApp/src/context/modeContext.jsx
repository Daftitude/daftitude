// src/context/modeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'family';
  });

  const toggleMode = () => {
    setMode((prev) => (prev === 'family' ? 'legacy' : 'family'));
  };

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};