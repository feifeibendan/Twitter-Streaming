"use strict";

const express = require('express');
const app = express();

app.use('/api/v1/users', require('./users'));
app.use('/api/v1/tweets', require('./tweets'));

module.exports = app;