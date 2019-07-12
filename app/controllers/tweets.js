"use strict";

const tweets = require('../models/tweets');

async function searchTweets(req, res, next) {
    try {
        let tweet;
        if (req.query.author) {
            tweet = await tweets.getTweetByAuthor(req.query.author);
        } else if (req.query.text) {
            tweet = await tweets.getTweetByText(req.query.text);
        } else if (req.query.hashtags) {
            tweet = await tweets.getTweetByHashTag(req.query.hashtags);
        } else if (req.query.date) {
            tweet = await tweets.getTweetByDate(req.query.date);
        }
        res.status(200).send(tweet);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    searchTweets
}