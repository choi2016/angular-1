(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.cancel = function() {
            $uibModalInstance.close();
        };

        //create room
        this.submit = function() {
            Room.add(this.newRoom);
            
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChatProject')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();