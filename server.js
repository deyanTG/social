/**
 * Created by user on 24.2.2016 �..
 */

var http = require('http');
var port = 9000;
var host = '127.0.0.1';
var Assets = require('./backend/Assets');

var app = http.createServer(Assets).listen(port, host);
console.log("Listening on " + host + ":" + port);

