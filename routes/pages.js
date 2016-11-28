// https://nodejs.org/api/http.html#http_class_http_incomingmessage

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

module.exports = router;