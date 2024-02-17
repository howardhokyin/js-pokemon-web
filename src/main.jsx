import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import App from './components/App.jsx';

// Correctly use createRoot() from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
