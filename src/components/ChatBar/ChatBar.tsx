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
    <aside className={clsx(classes.component, className)}>
      <h4>ACTIVE USERS</h4>
      <div className={classes.activeUsers}>
        {users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </aside>
  );
});

export default ChatBar;