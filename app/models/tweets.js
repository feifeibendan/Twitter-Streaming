'use strict';

const db = require("../modules/mysql");

const tweet = {
    getTweetByAuthor: function (author) {
        return new Promise(function (resolve, reject) {
            db.query(
                'select * from tweet where author = ?',
                [author],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    },
    getTweetByText: function (text) {
        return new Promise(function (resolve, reject) {
            db.query(
                'select * from tweet where text like ?',
                ['%' + text + '%'],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    },
    getTweetByHashTag: function (hashtags) {
        return new Promise(function (resolve, reject) {
            db.query(
                'select * from tweet where hashtags like ?',
                ['%' + hashtags + '%'],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    },
    getTweetByDate: function (date) {
        return new Promise(function (resolve, reject) {
            db.query(
                'select * from tweet where date between ? and ?',
                [date + " 00:00:00", date + " 23:59:59"],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    },
    createTweet: function (tweet) {
        return new Promise(function (resolve, reject) {
            db.query(
                'insert into tweet(author, text, hashtags, timestamp, date) values(?, ?, ?, ?, ?)',
                [tweet.author, tweet.text, tweet.hashtag, tweet.timestamp, tweet.date],
                function (err, results, fields) {
                    if (err) reject(err);
                    resolve(results);
                });
        });
    }
}

module.exports = tweet;