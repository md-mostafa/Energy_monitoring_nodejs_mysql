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
    console.log('req', req.body);
    var data = '';
    if(req.body.data[0]){
        if(req.body.data[0] === "load 1"){
            data = data + 1;
        }else if (req.body.data[0] === "load 2"){
            data = data + 2;
        }else{
            data = data + 3;
        }
    }
    if(req.body.data[1]){
        if(req.body.data[1] === "load 1"){
            data = data + 1;
        }else if (req.body.data[1] === "load 2"){
            data = data + 2;
        }else{
            data = data + 3;
        }
    }
    if(req.body.data[2]){
        if(req.body.data[2] === "load 1"){
            data = data + 1;
        }else if (req.body.data[2] === "load 2"){
            data = data + 2;
        }else{
            data = data + 3;
        }
    }
    //console.log('data', data);

    fs.writeFile('./routes/data.txt', data, function(err){
        if(err) throw console.log(err);
        console.log('hellow world > helloworld.txt');
    });
   
   
    res.redirect('/load');
})

module.exports = router;

