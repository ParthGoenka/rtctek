// src/main.jsx or src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import react-axe only in development mode
if (import.meta.env.MODE === 'development') {
  import('react-axe').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);  // Configure with a delay of 1000ms
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
