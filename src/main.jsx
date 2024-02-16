import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './components/App.jsx';

// Use ReactDOM.createRoot() to render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
