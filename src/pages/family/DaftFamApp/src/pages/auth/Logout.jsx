

import React, { useEffect } from 'react';

export default function Logout() {
  useEffect(() => {
    // Clear auth state, tokens, etc.
    console.log("User logged out");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-xl font-semibold">You’ve been logged out.</h2>
    </div>
  );
}