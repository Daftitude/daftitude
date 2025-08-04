// DaftAppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

export default function DaftAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}