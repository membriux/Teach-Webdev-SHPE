const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const url = 'mongodb://user1:i1apple@ds211708.mlab.com:11708/mongo-chat';

const connect = mongoose.connect(url, {
    useNewUrlParser: true
});

module.exports = connect;
