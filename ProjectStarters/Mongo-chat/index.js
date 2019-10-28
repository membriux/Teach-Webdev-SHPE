// STEP 4: Put everything together
//require express model
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const chatRouter = require('./routes/chatroute');

/*
    Socket.io event handling

    ****************************************************************
    * We will be making most of the changes in the functions below *
    ****************************************************************

*/

// io.on() takes an event name and a callback as parameters.

io.on('connection', function(socket) {});
/*
    Socket.io event handling
*/

//start server
http.listen(port, () => {
    console.log('Running on Port: ' + port);
});
