import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import clsx from 'clsx';
import React, { useState } from 'react';

import socket from '../../services/socket';
import classes from './ChatFooter.module.scss';

type Props = {
  className?: string;
};

const ChatFooter: React.FC<Props> = ({ className }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    const userName = localStorage.getItem('userName');
    if (message.trim() && userName) {
      socket.sendMessage(message);
    }
    setMessage('');
  };


  return (
    <div className={clsx(classes.component, className)}>
      <form onSubmit={handleSendMessage}>
        <Input
          size="lg"
          sx={{ width: "100%", boxShadow: '0px 0px 8px 0px rgba(34, 60, 80, 0.2)' }}
          placeholder="Type in here…"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <Button type="submit" size="lg">SEND</Button>
      </form>
    </div>
  );
};

export default ChatFooter;