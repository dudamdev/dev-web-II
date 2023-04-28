const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

module.exports = {
    connection
};