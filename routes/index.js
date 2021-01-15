var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');
var ip = require('ip');

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('ip', ip.address());
  res.redirect('/register');
  //res.render('login');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.end();
});


module.exports = router;
