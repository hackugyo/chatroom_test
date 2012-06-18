var http = require('http'), // HTTP server
  io = require('socket.io'), // Socket.io
  fs = require('fs'); // File System
var sys = require('util');
 
// make a standard server
server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // read index.html and send it to the client
    var output = fs.readFileSync('./index.html', 'utf8');
    res.end(output);
});
// run on port 8080
server.listen(8080);
 
// listen to the server
var socket = io.listen(server);
sys.print('go!');
// on a connection, do stuff
socket.on('connection', function(client){
        // broadcast the connection
	client.broadcast({message: client.sessionId + ' is now available'});
        // when the server gets a message, during a connection, broadcast the message
	client.on('message', function(msg){
      sys.print('get: ' + msg);
      client.broadcast({ message: client.sessionId + ': ' + msg.message }); });
        // when the server gets a disconnect, during a connection, broadcast the disconnection
	client.on('disconnect', function(){ client.broadcast({ message: client.sessionId + ' is no longer available' }); });
});