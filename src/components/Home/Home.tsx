import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import React, { useState } from 'react';

import socket from '../../services/socket';
import classes from './Home.module.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.joinUser(userName);
    navigate('/chat');
  };

  return (
    <form className={classes.component} onSubmit={handleSubmit}>
      <h2 className={classes.header}>Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        minLength={6}
        className={classes.usernameInput}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button type="submit" size="lg">SIGN IN</Button>
    </form>
  );
};

export default Home;