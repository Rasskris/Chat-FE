import Message from '../types/message';

const sendNotification = (message: Message) => {
  if (document.hidden) {
    new Notification('New message from Chat', {
      body: `@${message.name}: ${message.text}`,
    })
  }
};

export default sendNotification;
