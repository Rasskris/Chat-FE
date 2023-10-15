import { io, Socket as SocketType } from 'socket.io-client';

import store from '../store';

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
    this.socket.on('join', (data) => store.setUsers(data));
    this.socket.on('leave', (data) => store.setUsers(data));
    this.socket.on('typing', (data) => store.setTypingStatus(data));
    this.socket.on('message', (data) => store.setMessages([...store.messages, data]));
  }
}

export default new Socket('http://localhost:4000');
