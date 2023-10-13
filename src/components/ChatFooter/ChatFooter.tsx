import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import React, { useState } from 'react';

import socket from '../../services/socket';
import classes from './ChatFooter.module.scss';

const ChatFooter: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.sendMessage(message);
    }
    setMessage('');
  };

  return (
    <div className={classes.component}>
      <form onSubmit={handleSendMessage}>
        <Textarea
          sx={{ width: "100%" }}
          minRows={2}
          maxRows={2}
          placeholder="Type in here…"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button size="lg">SEND</Button>
      </form>
    </div>
  );
};

export default ChatFooter;