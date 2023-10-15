import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
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
      <h2 className={classes.header}>Sign in to Chat</h2>
      <label htmlFor="username">Name</label>
      <Input
        id="username"
        name="username"
        size="lg"
        sx={{ width: "50%", boxShadow: '0px 0px 8px 0px rgba(34, 60, 80, 0.2)' }}
        placeholder="Kristina"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button
        type="submit"
        size="lg"
        disabled={userName.length === 0}
      >
        SIGN IN
      </Button>
    </form>
  );
};

export default Home;