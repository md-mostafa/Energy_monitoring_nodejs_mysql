var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');
var ip = require('ip');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('ip', ip.address());
  res.send('akash is the best');
  res.end();
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.end();
});


module.exports = router;
