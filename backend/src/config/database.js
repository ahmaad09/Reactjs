const mysql = require('mysql2');

const dbPoll = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_jagoagri',
})

module.exports = dbPoll.promise();