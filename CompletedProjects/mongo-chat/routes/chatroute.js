const express = require('express');
const bodyParser = require('body-parser');
const connect = require('../dbconnection');
const Chats = require('./../models/Chat');

const router = express.Router();

router.route('/').get((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    connect.then(db => {
        let data = Chats.find({ message: 'Anonymous' });
        Chats.find({}).then(chat => {
            console.log(chat);
            res.json(chat);
        });
    });
});

module.exports = router;
