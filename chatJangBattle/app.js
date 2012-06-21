
/**
 * Module dependencies.
 * app.jsには，Webアプリの設定や，URLのルーティング情報を記述します．
 */

// Client
// Server
var log = console.log;

var express = require('express');
var routes  = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs'); // jadeのかわりにejsを使ってみた
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser()); // 追加
  app.use(express.session({ secret: 'your secret here' })); // TODO: session secret設定が必要
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

var io = require('socket.io').listen(app);

// ソケットに対する動作
io.sockets.on('connection', function (socket) {
  log('connected');
  socket.on('msg send', function (msg) {
    socket.emit('msg push', msg);
    // メッセージをbroadcast！
    socket.broadcast.emit('msg push', msg);
  });
  socket.on('disconnect', function() {
    log('disconnected');
  });
});