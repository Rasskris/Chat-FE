import Message from '../types/message';

const sendNotification = (message: Message) => {
  if (document.hidden) {
    const notification = new Notification('New message from Chat', {
      body: `@${message.name}: ${message.text}`,
    })
    notification.onclick = () => function() {
      window.open('http://localhost:3000/chat');
    }
  }
};

const checkNotificationStatus = (message: Message) => {
  if (message.name !== localStorage.getItem('userName')) {
    if (!('Notification' in window)) {
      alert('This browser does not support system notifications!')
    } else if (Notification.permission === 'granted') {
      sendNotification(message);
    } else if (Notification.permission !== 'denied') {
       Notification.requestPermission((permission)=> {
          if (permission === 'granted') {
            sendNotification(message);
          }
       })
    }
  }
};

export default checkNotificationStatus;