const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('selectCustomer', (data) => {
    io.to(data.customerId).emit('notification', {
      type: 'winner',
      message: 'You have been selected as the winner. Do you accept?',
      auctionId: data.auctionId,
    });
  });

  socket.on('responseWinner', (data) => {
    if (data.accepted) {
      io.to(data.participants).emit('notification', {
        type: 'winnerAccepted',
        message: 'The winner has accepted the auction.',
      });
    } else {
      io.to(data.sellerId).emit('notification', {
        type: 'winnerRejected',
        message: 'The selected winner has rejected the auction. Please select another customer.',
      });
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => {
  console.log('listening on *:3002');
});
