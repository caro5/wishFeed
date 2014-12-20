var express = require('express')
var app = express()
var path = require('path')

var engines = require('consolidate');

app.use(express.static(path.join(__dirname, '/client')));

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname+'/client');


app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('home');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});

exports = module.exports = app;