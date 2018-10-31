var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('water', function(color) {
    io.emit('water', color);
    console.log('color: ' + color);
  });

  socket.on('animationState', function(animationState) {
    io.emit('animationState', animationState);
    console.log('Animation State' + animationState);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});