import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import socket from '../../services/socket';
import store from '../../store';
import classes from './ChatBody.module.scss';

type Props = {
  className?: string;
};

const ChatBody: React.FC<Props> = observer(({ className }) => {
  const { messages } = store;
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
    <div className={className}>
      <header className={classes.header}>
        <Button size="md" variant="outlined" color="danger" onClick={handleLeaveChat}>
          LEAVE CHAT
        </Button>
      </header>

      <div className={classes.messageContainer}>
        {messages.map((message) =>
          message.name === localStorage.getItem('userName')
            ? (
              <div key={message.id}>
                <p className={classes.senderName}>You</p>
                <div className={classes.messageSender}>
                  <p className={classes.message}>{message.text}</p>
                </div>
              </div>
            )
            : (
              <div key={message.id}>
                <p className={classes.recipientName}>{message.name}</p>
                <div className={classes.messageRecipient}>
                  <p className={classes.message}>{message.text}</p>
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