var async = require('async');
var http = require('http');

function getFacebookGraph(id, callback) {
    console.log('getting', id, 'from facebook...');
    http.get({
      host:'graph.facebook.com',
      port:80,
      path:'/' + id
    }, function(res) {
      var data = '';
      res.on('data', function(chunk) { data += chunk });
      res.on('end', function(){ callback(null, data) });
    });
}

var hash = {
  zuck: function(callback) {
    getFacebookGraph('zuck', callback);
  },
  cocacola: function(callback) {
    getFacebookGraph('cocacola', callback);
  },
  ladygaga: function(callback) {
    getFacebookGraph('ladygaga', callback);
  }
}

var resultFunc = function(err,result) {
  console.log(result);
}

async.parallel(hash, resultFunc);