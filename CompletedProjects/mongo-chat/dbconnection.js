
// STEP 1: Initialize connection to database
// Database Connection
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const url = 'mongodb://user1:i1apple@ds211708.mlab.com:11708/mongo-chat';
const connect = mongoose.connect(url);

module.exports = connect;
