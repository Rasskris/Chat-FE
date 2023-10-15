import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import socket from '../../services/socket';
import store from '../../store';
import classes from './ChatBody.module.scss';

const ChatBody: React.FC = observer(() => {
  const { messages, typingStatus } = store;
  const navigate = useNavigate();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    socket.leaveUser();
    navigate('/');
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.typingStatus}>
          <p>{typingStatus}</p>
        </div>
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
        <div ref={lastMessageRef} />
      </div>
    </div>
  );
});

export default ChatBody;