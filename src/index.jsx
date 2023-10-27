import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Nav from './Navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
  </React.StrictMode>
);

reportWebVitals();
