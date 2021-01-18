var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');
var ip = require('ip');

router.get('/', function(req, res, next) {
    res.render('load');
});


router.post('/', function(req, res, next){
    console.log("L-1", req.body.data[0]);
    console.log("L-2",req.body.data[1]);
    console.log("L-3",req.body.data[2]);
    //console.log(req.body.data[].[0]);
    res.redirect('/load');
})

module.exports = router;

