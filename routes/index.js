var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');
var ip = require('ip');

router.get('/', function(req, res, next) {
  console.log('ip', ip.address());
  if(req.session.loggedin){
    res.render('index');
  }else {
    res.redirect('/login');
  }
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.end();
});


module.exports = router;
