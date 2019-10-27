// Here we will have our custom code
var socket = io();
var messages = document.getElementById('messages');

$('form').submit(function(e) {
    e.preventDefault(); // prevents page reloading

    let li = document.createElement('li');
    let msg = $('#message').val();

    //sends message to backend
    socket.emit('chat message', msg);

    //add message to html
    messages.appendChild(li).append(msg);
    let span = document.createElement('span');
    messages.appendChild(span).append('by ' + 'Anonymous' + ': ' + 'just now');

    //clear out input form
    $('#message').val('');

    return false;
});

// Should go over how the client handles receiving messages
socket.on('received', data => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    var messages = document.getElementById('messages');
    messages.appendChild(li).append(data.message);
    messages.appendChild(span).append('by ' + 'anonymous' + ': ' + 'just now');
    console.log('Hello bingo!');
});

(function() {
    fetch('/chats')
        .then(data => {
            return data.json();
        })
        .then(json => {
            json.map(data => {
                console.log(data);
                let li = document.createElement('li');
                let span = document.createElement('span');
                messages.appendChild(li).append(data.message);
                messages
                    .appendChild(span)
                    .append('by ' + data.sender + ': ' + data.createdAt);
            });
        });
})();
