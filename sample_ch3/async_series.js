var async = require('async');

async.series([
  function(callback) {
      console.log('call function0');
      setTimeout(function() {
        console.log('done function0');
        callback(null, 'result0');
      }, 1000);      
  },

  function(callback) {
    console.log('call function1');
    setTimeout(function() {
      console.log('done function1');
      callback(null, 'result1');
    }, 500);
  },
  
  function(callback) {
    console.log('call function2');
    setTimeout(function() {
      console.log('done function2');
      callback(null, 'result2');
    }, 100);
  },
], function(err, results) {
  console.log(results);
}
);