"use strict";

require('dotenv').config();
require('./services/tweet-streaming');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const WS_PORT = process.env.WS_PORT ? process.env.WS_PORT : 22992;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(routes);

const server = app.listen(WS_PORT, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
})