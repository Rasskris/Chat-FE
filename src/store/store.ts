import { action, makeObservable, observable, runInAction } from 'mobx';

import User from '../types/user';
import Message from '../types/message';

class Store {
  users: User[] = [];

  messages: Message[] = [];

  typingStatus: string = '';

  constructor() {
    makeObservable(this, {
      users: observable,
      messages: observable,
      typingStatus: observable,
      setUsers: action.bound,
      setMessages: action.bound,
      setTypingStatus: action.bound,
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

  setTypingStatus(typingStatus: string) {
    runInAction(() => {
      this.typingStatus = typingStatus;
    })
  }
}

export default new Store();