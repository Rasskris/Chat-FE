import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import React from 'react';

import classes from './ChatBar.module.scss';
import store from '../../store';

type Props = {
  className?: string;
};

const ChatBar: React.FC<Props> = observer(({ className }) => {
  const { users } = store;

  return (
    <div className={clsx(classes.component, className)}>
      <h4 className={classes.title}>ACTIVE USERS</h4>
      <div className={classes.activeUsers}>
        {users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
});

export default ChatBar;