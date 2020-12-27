var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Third',function(req,res,next){
  res.sendFile(__dirname+"/"+"Third.html");
});

module.exports = router;
