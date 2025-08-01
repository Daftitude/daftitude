// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Parent from "./pages/parent/Parent";
import Child from "./pages/child/Child";
import Admin from "./pages/admin/Admin";
import Settings from './pages/settings/Settings';
import NotFound from './pages/NotFound';
import Navbar from './components/common/Navbar';
import FamilyLanding from './pages/family/FamilyLanding';

function App() {
  const location = useLocation();
  const isFamilyRoute = location.pathname === '/family';

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isFamilyRoute && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/child" element={<Child />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/family" element={<FamilyLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;