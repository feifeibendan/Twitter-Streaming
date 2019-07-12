"use strict";

const users = require('../models/users');
const { tokenization } = require('../modules/authorization');

async function signup(req, res, next) {
    try {
        let user = await users.getUserByEmail(req.body.email);
        if (user != null && user.length > 0) {
            res.status(400).send('Email already exist!');
        } else {
            try {
                await users.createUser(req.body);
                let payload = {
                    "email": req.body.email,
                    "password": req.body.password
                };
                res.status(200).send(tokenization(payload));
            } catch (err) {
                res.status(500).send(err);
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

function login(req, res, next) {
    try {
        let user = users.getUserByEmailAndPassword(req.body);
        if (user == null || user.length == 0) {
            res.status(400).send('Email or password is incorrect');
        } else {
            let payload = {
                "email": req.body.email,
                "password": req.body.password
            };
            res.status(200).send(tokenization(payload));  
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    signup,
    login
}