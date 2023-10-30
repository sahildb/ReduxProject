import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000/';

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ['websocket'],
      });

      console.log('initializing Socket', this.socket);
      this.socket.on('connect', data => {
        console.log('socket connect');
      });

      this.socket.on('dissconnect', data => {
        console.log('socket dissconnected');
      });

      this.socket.on('error', data => {
        console.log('socket error');
      });
    } catch (error) {
      console.log('socket is not inialized', error);
    }
  };

  emit(event, data = {}) {
    console.log('event.../..', event, data);
    this.socket.emit(event, data);
  }
  on(event, cb) {
    this.socket.on(event, cb);
  }
  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const socketServices = new WSService();

export default socketServices;
