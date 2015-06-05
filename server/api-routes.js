var express = require('express');
var debug = require('debug')('main');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).send('Success');
});


module.exports = router;
