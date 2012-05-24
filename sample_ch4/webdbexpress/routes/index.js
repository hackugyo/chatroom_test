
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
