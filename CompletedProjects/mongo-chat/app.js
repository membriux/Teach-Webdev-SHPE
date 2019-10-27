//require express model
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//require the http module
const http = require('http').createServer(app);

//require socket.io module
const io = require('socket.io')(http);

const port = 5000;

//body parser middleware
app.use(bodyParser.json());

//set the express.static middleware, serves our html
app.use(express.static(__dirname + '/client'));

/*
    Socket.io event handling
*/

// io.on() takes an event name and a callback as parameters.
io.on('connection', function(socket) {
    console.log('User connected');

    socket.on('chat message', msg => {
        console.log(msg);
    });
});
/*
    Socket.io event handling
*/

//start server
http.listen(port, () => {
    console.log('Running on Port: ' + port);
});
