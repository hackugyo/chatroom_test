
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.sample1 = function(req, res){
  var id = req.param('id'); // app.jsで記述されたルーティングに基づきidを受け取る
  res.send(id, {'Content-Type':'text/plain'},200);
}
