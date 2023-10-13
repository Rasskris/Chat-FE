import { io, Socket as SocketType } from 'socket.io-client';


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
  }

  sendMessage(message: string) {
    this.socket.emit('message', {
      text: message,
      name: localStorage.getItem('userName'),
      id: Date.now.toString(),
    });
  }
}

export default new Socket('http://localhost:4000');
