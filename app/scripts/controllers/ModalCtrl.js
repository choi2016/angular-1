(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.close();
        };

        this.submit = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChatProject')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();