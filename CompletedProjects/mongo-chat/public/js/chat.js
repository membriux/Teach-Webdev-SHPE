// var socket = io();
var messages = $('#messages');
console.log('Hello');

$('#form').submit(function(e) {
    let li = document.createElement('li');
    e.preventDefault(); // prevents page reloading
    console.log(e);
    $('#message').val('');
    socket.emit('chat message', $('#message').val());

    messages.appendChild(li).append($('#message').val());
    let span = document.createElement('span');
    messages.appendChild(span).append('by ' + 'Anonymous' + ': ' + 'just now');

    $('#message').val('');

    return false;
});
