var express = require('express')
var app = express()
var path = require('path')
var port = process.env.PORT || 3000;
var engines = require('consolidate');

app.use(express.static(path.join(__dirname, '/client')));

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname+'/client');


app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index');
})

var server = app.listen(port, function () {

  var host = server.address().address
  // port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});

exports = module.exports = app;