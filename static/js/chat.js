var socket = require('socket.io-client')('http://localhost:5500');

function appendBotMessage(data) {
	var message = data['text'];
	$("#result_div").append("<strong>BOTMESSAGE: </strong>" + message + "<br>");
}

// console log when socket connects to port 5500
socket.on('connect', function() {
	console.log('connection established...')
});

$("#chat-input").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
		var chatInput = $("#chat-input").val();
		console.log(chatInput);
		if (chatInput !== '') {
			socket.emit('user_uttered', {'message': 'hi', 'sender': 'Rasa'});
		}
        return false;
    } else {
        return true;
    }
});

// event when bot utters message
socket.on('bot_uttered', function(data){
	console.log(data);
	appendBotMessage(data);
});

// do something when connection closes
socket.on('disconnect', function(){});
