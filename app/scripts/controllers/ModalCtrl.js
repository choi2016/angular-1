(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.cancel = function() {
            $uibModalInstance.close();
        };

        this.submit = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };

        this.create = function() {
            $cookies.put('currentUser', modal.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChatProject')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();