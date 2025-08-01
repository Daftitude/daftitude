// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './context/TokenContext';
import { ModeProvider } from './context/modeContext'; // <-- Make sure this is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </ModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);