var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');


router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var mid = req.body.mid;
    var password = req.body.password;
    console.log(mid);
    console.log(password);

    if(mid && password) {
        connection.query('SELECT * FROM user WHERE meter_id = ? AND password = ?', [mid, password], function(error, results, fields) {
            if(results.length > 0){
                req.session.loggedin = true;
                req.session.save();
                req.session.mid = mid;
                req.session.save();
                connection.query('SELECT meter_id FROM user WHERE meter_id = ? AND password = ?', [mid, password], function(error, result){
                    req.session.mid = result[0].meter_id;
                    req.session.save();
                });
                console.log('successfully loggedin');
            }else{
                    res.send('Incorrect meterid and / or Password');
            }
        });
    }else{
        res.send('Please enter Meterid and Password!');
        res.redirect('login');
    }
    res.redirect('..');
});

module.exports = router;