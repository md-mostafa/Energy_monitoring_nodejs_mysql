var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');
var ip = require('ip');
var fs = require('fs');

router.get('/', function(req, res, next) {
    res.render('load');
});


router.post('/', function(req, res, next){
    //console.log("L-1", req.body.data[0]);
    //console.log("L-2",req.body.data[1]);
    //console.log("L-3",req.body.data[2]);
    var data = '';
    if(req.body.data[0])
        data = data + 1;
    if(req.body.data[1])
        data = data + 2;
    if(req.body.data[2])
        data = data + 3;
    //console.log('data', data);
   
   
    res.redirect('/load');
})

module.exports = router;

