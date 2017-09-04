(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.chatRooms = Room.all;
        this.currentRoom = null;
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
    }
    
    angular
        .module('blocChatProject')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();