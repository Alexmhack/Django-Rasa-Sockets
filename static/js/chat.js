var socket = require('socket.io-client')('http://localhost:5500');

function appendBotMessage(data) {
	var message = data['text'];
}

// console log when socket connects to port 5500
socket.on('connect', function() {
	console.log('connection established...')
});

// event when bot utters message
socket.on('bot_uttered', function(data){
	console.log(data);
	appendBotMessage(data);
});

// do something when connection closes
socket.on('disconnect', function(){});
