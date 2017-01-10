var http = require('http');
var fs = require('fs');
var socketio= require('socket.io');

var server = http.createServer(function(request, response){
  fs.readFile('chat.htm', function(erro, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}).listen(3000, function(){
  console.log('Sever is running at 3000 port!');
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){

  socket.on('message', function(data){

    io.sockets.emit('message',data);
  });
});
