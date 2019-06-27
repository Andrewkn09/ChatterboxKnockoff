var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  database: 'chatterbox'
});

db.connect(err => {
  err ? console.log(err) : console.log('success');
});

module.exports = db;
