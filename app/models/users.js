'use strict';

const db = require("../modules/mysql");

const user = {
    getUserByEmail: function (email) {
        return new Promise(function (resolve, reject) {
            db.query(
                'select * from user where email = ?',
                [email],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    },
    getUserByEmailAndPassword: function (user) {
        return new Promise(function (resolve, reject) {
            db.query(
                'select * from user where email = ? and password = ?',
                [user.email, user.password],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    },
    createUser: function (user) {
        return new Promise(function (resolve, reject) {
            db.query(
                'insert into user(email, password) values(?, ?)',
                [user.email, user.password],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    }
}

module.exports = user;