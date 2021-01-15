var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');


router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', (req, res, next) => {
    const mid = req.body.mid;
    const email = req.body.email;
    const password = req.body.password;
    //console.log(mid);
    //console.log(email);
    //console.log(password);
    //console.log(req.body);
    var sql = `INSERT INTO user (meter_id, password, email) VALUES ('${mid}', '${password}', '${email}')`;
    connection.query('SELECT * FROM user WHERE meter_id = ? AND email = ? AND password = ?', [mid, email, password], function(error, results, fields) {
        if(results.length > 0){
            //console.log(results);
            console.log('already registered');
        }else{
            connection.query(sql, function (err, result) {
                if (err) throw err;
                //console.log(result);
                console.log("1 record inserted");  
            });
        }
    });
    res.redirect('/login');
});

module.exports = router;

/*

 var sql = `INSERT INTO user (user_name, user_email, password) VALUES ('${name}', '${email}', '${password}')`;  
    connection.query('SELECT * FROM user WHERE user_name = ? AND user_email = ? AND password = ?', [name, email, password], function(error, results, fields) {
        if(results.length > 0){
            console.log(results);
            res.render('login');
        }else{
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log("1 record inserted");  
                if(req.session.redirectTo){
                    res.redirect(req.session.redirectTo);
                }else{
                    res.redirect(req.originalUrl);
                }
            });
        }
    });

*/