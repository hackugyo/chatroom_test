var http = require('http');
http.get({
  host: 'graph.facebook.com',
  port: 80,
  path: '/zuck'
}, function(res) {
  console.log('Got response.');
  res.on('data', function(chunk) {
    console.log('Data is succesfully received.');
  });
  console.log('Received data???');
});
console.log('Got response???');