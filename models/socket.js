

class Socket {

  constructor(io) {
    this.io = io;

    this.socketEvents()

  }


  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');

      socket.on('message-to-server', (data) => {

        this.io.emit('message-to-client', data)

      })
    })

  }

}

module.exports = Socket;