// package.jsonを使うテスト
// package.jsonは，npm initを使って対話的にひな形を書いたあと，
// dependenciesをいじって完成．
// npm installで中身をインストールすると実行可能になる．
// （更新したらnpm update）

var request = require('request');
request.get('http://graph.facebook.com/zuck',
           function(err,res,body) {
             console.log(body);
           }
);