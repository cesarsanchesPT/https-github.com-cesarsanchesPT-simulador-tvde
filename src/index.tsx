import React from 'react';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { StatsProvider } from './contexts/StatsContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StatsProvider>
        <App />
        <SpeedInsights />
      </StatsProvider>
    </AuthProvider>
  </React.StrictMode>
);