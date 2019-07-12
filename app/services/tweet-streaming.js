"use strict";

const Twit = require('twit');
const tweets = require('../models/tweets');
const moment = require('moment');

const tweet = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 45 * 1000
})

const stream = tweet.stream('statuses/filter', { track: ['#photography', '#tech', '#funny'] })

stream.on('tweet', function (tweet) {
    //store it to the database
    let hashtag = 'unknown';
    let text = '';
    if (tweet.extended_tweet) {
        text = tweet.extended_tweet.full_text;
        if (tweet.extended_tweet.full_text.indexOf('#photography') >= 0) {
            hashtag = '#photography';
        } else if (tweet.extended_tweet.full_text.indexOf('#tech') >= 0) {
            hashtag = '#tech';
        } else if (tweet.extended_tweet.full_text.indexOf('#funny') >= 0) {
            hashtag = '#funny';
        } 
    } else {
        text = tweet.text;
        if (tweet.text.indexOf('#photography') >= 0) {
            hashtag = '#photography';
        } else if (tweet.text.indexOf('#tech') >= 0) {
            hashtag = '#tech';
        } else if (tweet.text.indexOf('#funny') >= 0) {
            hashtag = '#funny';
        }
    }

    if (hashtag != 'unknown') {
        let data = {
            author: tweet.user.name,
            text: text,
            hashtag: hashtag,
            timestamp: tweet.timestamp_ms,
            date: moment(tweet.timestamp_ms * 1).toDate()
        }

        tweets.createTweet(data, function (err, tweets) {
            if (err) {
                console.log(err);
            }
        })
    }
})