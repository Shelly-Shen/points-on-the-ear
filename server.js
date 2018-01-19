var express = require('express');
var app = express();
var server = require('http').Server(app);
// var http = require('http').Server(app);
app.use(express.static('eyesache'));


app.get('/auth/:id/:password', function(req, res) {  
    res.header("Access-Control-Allow-Origin", "*");   //设置跨域访问  
    res.send({id:req.params.id, name: req.params.password});  
}); 
server.listen(3000, function(){
  console.log('listening on *:3000');
});


