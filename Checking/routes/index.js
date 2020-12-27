var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
const APIURL = 'http://localhost:3001/Third';

router.get('/', function(req, res, next) {
    res.sendFile(__dirname + "/" + "First.html");
});
router.get('/Second',function(req,res,next){
  res.sendFile(__dirname+"/"+"Second.html");
});

router.get('/Third',function(req,res,next){
  request(APIURL  ,
    function (error, response, body) {

          if (!error && response.statusCode == 200) {
              res.send(body);
              }
        });
});
module.exports = router;
