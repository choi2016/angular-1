(function() {
    function SetUsernameCtrl($uibModalInstance, $cookies) {
        this.setUsername = function() {
            $cookies.currentUser = this.modal.username;
            
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChatProject')
        .controller('SetUsernameCtrl', ['$uibModalInstance', '$cookies', SetUsernameCtrl]);
})();