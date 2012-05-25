
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.sample1 = function(req, res){
  var id = req.param('id'); // app.jsで記述されたルーティングに基づきidを受け取る
  res.render('foo', {
    title: 'WEB+DB PRESS Express Sample',
    var1: 'Dog',
    var2: 'ShibaInu',
    var3: req.param('id')
  }); // jadeファイルをレンダリング
}
// connect to the MongoDB
var mongo = require('mongoDB')
// デフォルトのポートに接続
var client = new mongo.Db('test', new mongo.Server('127.0.0.1', 27017))
client.open(function (err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to mongodb');
  }
});

// show data and form
exports.showMongo = function(req, res) {
  client.collection('webdbtest',
                    function(err, collection) {
                      if (err) {
                        throw err;
                      }
                      collection.find().toArray(
                        function(err, results) {
                          if (err) {
                            throw err;
                          }
                          res.render('mongo', {
                            title: 'Mongo Example',
                            list: results
                          });
                        });
                    });
};