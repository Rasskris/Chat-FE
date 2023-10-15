import React from 'react';
import ReactDOM from 'react-dom/client';

import socket from './services/socket.ts';
import App from './components/App/App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

socket.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
