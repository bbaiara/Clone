import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import SettingsContextProvider from './context/settingsContext';

import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </BrowserRouter>
);
