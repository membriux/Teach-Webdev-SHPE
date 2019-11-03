
// STEP 3: Get previous chats (if any)

// Express deals with setting up routers to pages
const express = require('express');

// Parser that handles input correctly
const bodyParser = require('body-parser');

// Connect to the db
const connect = require('../dbconnection');

// Use the Chat model/schema we created
const Chats = require('../models/Chat');

// Create router to our index page
const router = express.Router();


// Tells the browser what to do when it's on the main page
// In this case, it will load up previous chats 
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
