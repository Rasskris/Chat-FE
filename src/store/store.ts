import { action, makeObservable, observable, runInAction } from 'mobx';

import User from '../types/user';
import Message from '../types/message';

class Store {
  users: User[] = [];

  messages: Message[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      messages: observable,
      setUsers: action.bound,
      setMessages: action.bound,
    });
  }

  setUsers(users: User[]) {
    runInAction(() => {
      this.users = users;
    })
  }

  setMessages(messages: Message[]) {
    runInAction(() => {
      this.messages = messages;
    })
  }
}

export default new Store();