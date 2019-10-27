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

//database connection
const Chat = require('./models/Chat');
const connect = require('./dbconnection');

/*
    Socket.io event handling

    ****************************************************************
    * We will be making most of the changes in the functions below *
    ****************************************************************

*/

// io.on() takes an event name and a callback as parameters.

io.on('connection', function(socket) {
    console.log('User connected');

    socket.on('chat message', msg => {
        console.log('Message received: ' + msg);

        //broadcast message to everyone in port:5000 except yourself.
        socket.broadcast.emit('received', { message: msg });
    });
});
/*
    Socket.io event handling
*/

//start server
http.listen(port, () => {
    console.log('Running on Port: ' + port);
});
