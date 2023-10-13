import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import socket from '../../services/socket';
import classes from './ChatBody.module.scss';

type Message = {
  id: string;
  name: string;
  text: string;
};

const ChatBody: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);

  // useEffect(() => {
  //   socket.on('messageResponse', (data) => setMessages([...messages, data]));
  // }, [socket, messages]);

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <header className={classes.header}>
        <Button size="md" variant="outlined" color="danger" onClick={handleLeaveChat}>
          LEAVE CHAT
        </Button>
      </header>

      <div className={classes.messageContainer}>
        {messages.map((message) =>
          message.name === localStorage.getItem('userName')
            ? (
              <div className={classes.messageChats} key={message.id}>
                <p className={classes.senderName}>You</p>
                <div className={classes.messageSender}>
                  <p>{message.text}</p>
                </div>
              </div>
            )
            : (
              <div className={classes.messageChats} key={message.id}>
                <p>{message.name}</p>
                <div className={classes.messageRecipient}>
                  <p>{message.text}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ChatBody;