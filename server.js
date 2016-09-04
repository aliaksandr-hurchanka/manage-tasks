var webpack = require('webpack');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

app.get("/manage-tasks-ui/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
