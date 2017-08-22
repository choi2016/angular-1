(function() {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room.all;
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();