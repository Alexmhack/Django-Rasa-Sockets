var socket = require('socket.io-client')('http://localhost:5500');

$(document).ready(function() {

	function appendBotMessage(data) {
		var message = data['text'];
		$("#result_div").append("<strong>BOTMESSAGE: </strong>" + message + "<br>");
	}

	// console log when socket connects to port 5500
	socket.on('connect', function() {
		console.log('connection established...')
	});

	// socket.emit('user_uttered', {'message': 'hey', 'sender': 'rasa'});

	$("#send").click(function() {
		const chatInput = $("#chat-input").val();
		console.log(chatInput);
		if (chatInput) {
			socket.emit('user_uttered', {'message': chatInput, 'sender': 'rasa'})
			$("#result_div").append("<strong>USERMESSAGE:</strong> " + chatInput + "<br>")
			$("#chat-input").val('')
		}
	})

	// event when bot utters message
	socket.on('bot_uttered', function(data){
		console.log(data);
		appendBotMessage(data);
	});

	// do something when connection closes
	socket.on('disconnect', function(){});

});
