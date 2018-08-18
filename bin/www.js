var app = require("../app");
var config = require('../configure/default');
var http = require("http");
var port = config.nodeServer.port;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);