import React from 'react';
import ReactDOM from 'react-dom/client';

import socket from './services/socket.ts';
import App from './components/App/App.tsx';
import './index.css';

socket.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
