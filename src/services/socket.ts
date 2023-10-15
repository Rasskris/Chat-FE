import { io, Socket as SocketType } from 'socket.io-client';

import store from '../store';
import isEnabledNotifications from '../utils/isEnabledNotifications';
import sendNotification from '../utils/sendNotification';
import Message from '../types/message';

class Socket {
  socket!: SocketType;

  url!: string;

  params?: Record<string, unknown>;

  constructor(url: string, params?: Record<string, unknown>) {
    this.url = url;
    this.params = params;
  }

  init() {
    this.socket = io(this.url, {
      ...this.params,
      transports: ['websocket', 'polling'],
    });
    this.listenEvents();
  }

  joinUser(name: string) {
    this.socket.emit('join', { name, id: this.socket.id });
  }

  leaveUser() {
    this.socket.emit('leave');
  }

  sendMessage(message: string) {
    this.socket.emit('message', {
      text: message,
      name: localStorage.getItem('userName'),
      id: Date.now().toString(),
    });
  }

  sendTypingEvent() {
    this.socket.emit('typing', `${localStorage.getItem('userName')} is typing`);
  }

  listenEvents() {
    this.socket.on('join', (users) => store.setUsers(users));

    this.socket.on('leave', (users) => store.setUsers(users));

    this.socket.on('message', (message: Message) => {
      store.setMessages([...store.messages, message]);
      if (isEnabledNotifications(message)) {
        sendNotification(message);
      }
    });
  }
}

export default new Socket(import.meta.env.VITE_API_URL);
