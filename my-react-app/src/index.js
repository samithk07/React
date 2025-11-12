import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function AppFallback() {
  return <h1>Hello React</h1>;
}

// Use App if it exists, otherwise show a fallback
const RootApp = App || AppFallback;

const root = createRoot(document.getElementById('root'));
root.render(<RootApp />);
