// Here we will have our custom code
var socket = io();
var messages = document.getElementById('messages');

$('form').submit(function(e) {
    e.preventDefault(); // prevents page reloading
    let msg = $('#message').val();
    console.log(msg);
    socket.emit('chat message', msg);
    $('#message').val('');
    return false;
});
