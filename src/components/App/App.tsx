import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import socket from '../../services/socket';
import Home from '../Home';
import ChatPage from '../ChatPage';

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      socket.joinUser(userName);
      navigate('/chat');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/chat" element={<ChatPage />}></Route>
    </Routes>
  );
};

export default App;