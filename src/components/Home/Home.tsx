import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Home.module.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    //sends the username and socket ID to the Node.js server
    // socket.emit('newUser', { userName, socketID: socket.id });
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
      <button className={classes.signInButton}>SIGN IN</button>
    </form>
  );
};

export default Home;