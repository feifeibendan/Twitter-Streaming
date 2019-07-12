"use strict";

const express = require('express');
const { searchTweets } = require('../controllers/tweets');
const { validation } = require('../modules/authorization');

const tweetRouter = express.Router();

tweetRouter.get('/', validation, searchTweets);

module.exports = tweetRouter;