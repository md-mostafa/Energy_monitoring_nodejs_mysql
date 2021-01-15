var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'energymonitoring'
})

connection.connect(function(err) {
  if(err){
    return console.error('error',+err.message);
  }
  console.log('connected to the mysql server');
});

module.exports = connection;