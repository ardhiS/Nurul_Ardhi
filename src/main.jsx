import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Calculate real viewport height for mobile browsers
// This handles the address bar appearing/disappearing on mobile
const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Set initial value
setVh();

// Update on resize and orientation change
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', () => {
  // Small delay to ensure the browser has finished updating
  setTimeout(setVh, 100);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
