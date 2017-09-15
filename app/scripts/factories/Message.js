(function() {
	function Message($firebaseArray) {
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		Message.all = messages;

		Message.getByRoomID = function(roomID) {
			return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
		};

		Message.send = function(newMessage) {
			messages.$add(newMessage);
		};

		return Message;
	}

	angular
	.module('blocChatProject')
	.factory('Message', ['$firebaseArray', Message]);
})();