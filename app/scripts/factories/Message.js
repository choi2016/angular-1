(function() {
	function Message($firebaseArray) {
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		console.log(messages);

		Message.getByRoomID = function(roomID) {
			return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
		};

		return Message;
	}

	angular
	.module('blocChatProject')
	.factory('Message', ['$firebaseArray', Message]);
})();