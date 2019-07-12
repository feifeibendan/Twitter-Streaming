'use strict';

const mysql = require('mysql');

const mysqlHost = process.env.MYSQL_HOST;
const mysqlPort = process.env.MYSQL_PORT;
const mysqlUser = process.env.MYSQL_USER;
const mysqlPassword = process.env.MYSQL_PASSWORD;
const mysqlDBName = process.env.MYSQL_DBNAME;

const connectionPool = mysql.createPool({
    connectionLimit: 20,
    host: mysqlHost,
    port: mysqlPort,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDBName
});

connectionPool.getConnection(function (err, connection) {
    if (err) throw err;
    console.log('You are now connected...')
});

module.exports = connectionPool;