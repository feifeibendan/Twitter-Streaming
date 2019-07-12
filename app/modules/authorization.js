'use strict';

const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

function tokenization(payload) {
    let secret = {
        expiresIn: "24h",
        algorithm: "HS256"
    };
    return jwt.sign(payload, privateKey, secret);
}

function validation(req, res, next) {
    let auth = req.headers["authorization"];
    if (!auth) {
        res.status(401).send("unauthorized");
    } else {
        let secret = {
            expiresIn: "24h",
            algorithm: "HS256"
        };
        try {
            jwt.verify(auth, privateKey, secret, function (err, decoded) {
                if (err) res.status(401).send("unauthorized");
                next();
            });
        } catch (err) {
            res.status(401).send("unauthorized");
        }
    }
}

module.exports = {
    tokenization,
    validation
}