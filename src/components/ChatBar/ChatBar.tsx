import clsx from 'clsx';
import React from 'react';

import classes from './ChatBar.module.scss';

type Props = {
  className?: string;
};

const ChatBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(classes.component, className)}>
      <h2>Open Chat</h2>

      <div>
        <h4>ACTIVE USERS</h4>
        <div className={classes.activeUsers}>
          <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;