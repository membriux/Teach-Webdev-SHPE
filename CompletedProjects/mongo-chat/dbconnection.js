const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const url =
    'mongodb://memo:guilleeh@cluster0-shard-00-00-kzpct.mongodb.net:27017,cluster0-shard-00-01-kzpct.mongodb.net:27017,cluster0-shard-00-02-kzpct.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    connectWithNoPrimary: true,
    useUnifiedTopology: true
});

module.exports = connect;
