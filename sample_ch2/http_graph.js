// Node.jsでFacebookのGraph APIをたたく

var http = require('http')

http.get({
  host: 'graph.facebook.com',
  port: 80,
  path: '/zuck'
}, function(res) {
  res.setEncoding('utf-8'),
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).on('error', function(e) {
  console.log('ERROR',e.message);
});