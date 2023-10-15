import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import socket from '../../services/socket';
import ChatBar from '../ChatBar';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';
import classes from './ChatPage.module.scss';

const ChatPage: React.FC = () => {
  return (
    <div className={classes.component}>
      <ChatBar className={classes.bar} />
      <div className={classes.main}>
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;