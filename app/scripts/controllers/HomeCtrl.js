(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.chatRooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');

        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }

        this.setCurrentRoom = function(room){
            this.currentRoom = room;
            this.messages = Message.getByRoomID(this.currentRoom.$id);
        }

        this.sendMessage = function() {
            Message.send({
                content: this.newMessage,
                roomID: this.currentRoom.$id,
                username: this.currentUser
            });
            this.newMessage = null;
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();