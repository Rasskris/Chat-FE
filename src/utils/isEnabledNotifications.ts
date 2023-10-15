import Message from '../types/message';

const isEnabledNotifications = (message: Message) => {
  if (message.name !== localStorage.getItem('userName')) {
    if (!('Notification' in window)) {
      alert('This browser does not support system notifications!')
    }
    if (Notification.permission === 'granted') {
      return true;
    }
    if (Notification.permission !== 'denied') {
       Notification.requestPermission((permission) => {
          if (permission === 'granted') {
            return true;
          }
          if (permission === 'denied') {
            return false;
          }
       })
    }
  }
  return false;
};

export default isEnabledNotifications;