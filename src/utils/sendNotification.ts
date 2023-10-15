import Message from '../types/message';

const sendNotification = (message: Message) => {
  if (document.hidden) {
    const notification = new Notification('New message from Chat', {
      body: `@${message.name}: ${message.text}`,
    })
    notification.onclick = () => {
      window.open(import.meta.env.VITE_BASE_URL);
    }
  }
};

export default sendNotification;
