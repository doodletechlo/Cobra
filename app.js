var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var api = require('./server/api-routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.sendFile('public/index.html');
});
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.sendFile('public/error404.html');
});

module.exports = app;
