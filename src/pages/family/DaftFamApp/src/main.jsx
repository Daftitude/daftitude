import React from 'react';
import ReactDOM from 'react-dom/client';
import DaftAppRoutes from './DaftAppRoutes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/family/DaftFamApp">
      <DaftAppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);