const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://students:$hpEWebD3v@cluster0-p2gnl.mongodb.net/test?retryWrites=true&w=majority"

const connect = mongoose.connect(url, {useNewUrlParser: true});

module.exports = connect;
