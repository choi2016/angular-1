(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.chatRooms = Room.all;
        this.currentRoom = null;
        this.messages = null;

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
            this.currentUser1 = $cookies.get('currentUser');
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();